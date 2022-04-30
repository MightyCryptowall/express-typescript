import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import routes from "./src/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use(express.json())
app.use(routes);
// app.get('/', async (req: Request, res: Response) => {
  
//   await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//       posts: {
//         create: { title: 'Hello World' },
//       },
//       profile: {
//         create: { bio: 'I like turtles' },
//       },
//     },
//   })
//   // const post = await prisma.post.update({
//   //   where: {id: 1},
//   //   data: {published: true}
//   // })
//   // const allUsers = await prisma.user.findMany({
//   //   include:{
//   //     posts: true,
//   //     profile: true
//   //   }
//   // });
//   // const posts = await prisma.post.findMany();
//   // console.log(posts);
//   // console.log(allUsers);
//   res.send('Express + TypeScript Server');
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});