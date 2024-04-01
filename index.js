import { SERVER_PORT } from "./src/config/env.js";
import server from "./src/server.js";
import cors from 'cors';
import morgan from "morgan";
import express from "express";
import usuarioRouter from './src/router/usuarios.routes.js';

server.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});

//Middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(morgan('dev'));

//Routes
server.use('/apiusuarios', usuarioRouter);