import { userQueries } from "../queries/userQueris.js";

const createUser = async (req, res) => {
  const resultado = req.body;
  return resultado;
};

const getUsers = async (req, res) => {
  const users = await userQueries.getUsers();
  console.log(users.rows);
};

export const userController = {
  createUser,
  getUsers,
};
