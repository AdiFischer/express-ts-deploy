import * as functions from "firebase-functions";
import * as express from "express";
import {Request, Response} from "express";
import * as cors from "cors";
import { createNewPost, getAllPosts, updatePost, deletePost, getOnePost } from './posts'


const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response): void => {
  res.send("welcome to ADI");
});

app.get("/new", (req: Request, res: Response): void => {
  res.send("welcome to js");
});

app.get('/posts', getAllPosts)
app.post('/post', createNewPost)
app.patch('/post/:uid', updatePost)
app.delete('/post/:uid', deletePost)
app.get('/post/:uid', getOnePost)



export const api = functions.https.onRequest(app);
