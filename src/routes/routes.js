import userRoutes from "./userRoutes.js";

async function routes(fastify,options){
     
//user
fastify.register(userRoutes);
     
};

export default routes;