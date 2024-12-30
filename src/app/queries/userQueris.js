import app from "../../app.js";

const INSERT = "INSERT INTO Usuarios(nome, email, senha_hash) VALUES($1,$2,$3)";
const SELECT_ALL_USERS = "SELECT * FROM Usuarios";
const SELECT_USER = "SELECT * FROM Usuarios WHERE usuario_id = $1";
const SELECT_USER_WITH_EMAIL = "SELECT * FROM Usuarios WHERE email = $1";

const executeQuery = async (query, params) => {
  try {
    const res = await app.pg.query("SELECT * FROM Usuarios");
    return res;
  } catch (err) {
    console.error("Erro ao executar a query:", err.message);
    throw err;
  }
};

const getUsers = async () => {
  const query = SELECT_ALL_USERS;
  const res = await executeQuery(query);
  return res;
};

export const userQueries = {
  getUsers,
};
