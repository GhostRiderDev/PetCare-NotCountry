import InvalidOperatioError from "../error/InvalidOperationError";
import Usuario from "../models/usuario";

export class UserService {
  constructor() {}

  async findUser(id) {
    const userDB = await Usuario.findById(id);
    if (!userDB) {
      throw new Error("User not found");
    }
    return userDB;
  }

  async findUsers() {
    const usersDB = await Usuario.find();
    if (!usersDB) {
      throw new Error("Users not found");
    }
    return usersDB;
  }

  async createUser({ email, password, username }) {
    const userFound = await Usuario.findOne({ email });
    if (userFound) {
      throw new InvalidOperatioError(`Usuario con el email ${email} ya existe`);
    }
    const salt = bcrypt.genSaltSync(10); //Indico la cantidad de veces que el algoritmo se ejecutara sobre la contraseña
    usuarioNuevo.password = bcrypt.hashSync(password, salt); //Se encripta la contraseña

    const usuarioNuevo = new Usuario({ email, password, username }); //Se crea el nuevo usuario

    const userDB = await usuarioNuevo.save(); //Se guarda el nuevo usuario
    return userDB;
  }

  async login({ email, password }) {
    const usuario = await Usuario.findOne({ email: email });
    if (!usuario) {
      throw new InvalidOperatioError("Correo o password incorrectos.");
    }
    if (!bcrypt.compareSync(password, usuario.password)) {
      throw new InvalidOperatioError("Correo o password incorrectos.");
    }
    return usuario;
  }

  async updateUser(id, { email, password, username }) {
    const userDB = await Usuario.findByIdAndUpdate(
      id,
      { email, password, username },
      { new: true }
    );
    if (!userDB) {
      throw new Error("User not updated");
    }
    return userDB;
  }

  async deleteUser(id) {
    const userDB = await Usuario.findById(id);
    if (!userDB) {
      throw new Error("User not deleted");
    }
    await Usuario.findByIdAndDelete(id);
  }
}
