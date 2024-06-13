import 'dotenv/config';
import fastify from "fastify";
import multipart from "@fastify/multipart";

import { UploadController } from "./controllers/UploadController";
import { CreateTokenController } from './controllers/CreateTokenController';

export const app = fastify();
app.register(multipart);


app.post('/upload', new UploadController().upload);

app.post('/token/create', new CreateTokenController().create);

app.listen({ port: 4000 }).then(() => {
  console.log("Server is running on port 4000")
});
