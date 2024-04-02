import { validationResult } from "express-validator";
import { UserService } from "../service/User.service";
import bcrypt from "bcrypt";
import { validateUUID } from "../service/validation/utilValidation";
import { validateUser } from "../service/validation/userValidation";

const userService = new UserService();

export const obtenerUsuario = async (req, res, next) => {
  try {
    validateUUID(req.params.id);
    const usuario = await userService.findUser(req.params.id);
    res.status(200).json(usuario);
  } catch (err) {
    next(err);
  }
};

export const obtenerUsuarios = async (req, res, next) => {
  try {
    const usuarios = await userService.findUsers();
    res.status(200).json(usuarios);
  } catch (err) {
    next(err);
  }
};

export const creaUsuario = async (req, res, next) => {
  try {
    //Primero controlo que el usuario no se encuentre ya ingresado
    const { email, password, username } = req.body;
    validateUser({ email, password, username });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //En caso que hayan errores
      return res.status(400).json({
        error: errors.array(),
      });
    }
    let usuario = await userService.createUser({ email, password, username });
    res.status(201).json(usuario);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      //En caso que hayan errores
      return res.status(400).json({
        error: errors.array(),
      });
    }

    const usuario = await userService.login({ email, password });
    res.status(200).json(usuario);
  } catch (err) {
    next(err);
  }
};

export const editaUsuario = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    validateUser({ email, password, username });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array(),
      });
    }
    const usuario = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(usuario);
  } catch (err) {
    next(err);
  }
};

export const borrarUsuario = async (req, res, next) => {
  try {
    validateUUID(req.params.id);
    await userService.deleteUser(req.params.id);
    res.status(200).json({
      mensaje:
        'Usuario con id "' + req.params.id + '" eliminado de la base de datos.',
    });
  } catch (error) {
    next(error);
  }
};
