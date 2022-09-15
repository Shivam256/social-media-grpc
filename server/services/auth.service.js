import { signup, login, initialize } from "../controllers/auth.controller.js";

const authservice = {
  signup,
  initialize,
  login,
};

export default authservice;
