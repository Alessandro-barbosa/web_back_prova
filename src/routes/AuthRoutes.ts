import { Router } from "express";

import AuthController from "../controllers/AuthController";

const AuthRouter = Router();

// para autenticação de um usário e sua token
AuthRouter.post("/auth/signin", AuthController.signin);

// para criação de um usuário
AuthRouter.post("/auth/signup", AuthController.signup);

// para sair da aplicação de um usuário logado
AuthRouter.post("/auth/signout", AuthController.signout);

export default AuthRouter;