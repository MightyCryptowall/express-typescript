import bcrypt from "bcrypt";
import { Request, Response } from "express";
import prisma from "../config/prisma";




const UserControllers = {
  async register(req: Request, res: Response) {
    const {
      body: { user },
    } = req;

    const { name, email } = user;

    const password = await bcrypt.hash(user.password, 10);
    
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        posts: {
          create: { title: "Hello World" },
        },
        profile: {
          create: { bio: "I like turtles" },
        },
      },
    });

    res.json({ user: { id: newUser.id, name, email } });
  },
};

export default UserControllers;
