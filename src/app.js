import Fastify from "fastify";
import firstRoute from "./routes/routes.js";
import connectionDataBase from "./config/connectionDataBase.js";

const app = Fastify({
  logger: true,
});

app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    const json = JSON.parse(body)
    done(null, json)
  } catch (err) {
    err.statusCode = 400
    done(err, undefined)
  }
})

connectionDataBase(app);

app.register(firstRoute);

export default app;
