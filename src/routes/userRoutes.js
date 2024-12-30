import { userController } from "../app/controllers/userController.js";

async function routes(fastify,options){
     fastify.post("/user",userController.createUser)
     fastify.get("/users",userController.getUsers)
}

export default routes;