import { compare } from 'bcryptjs';
import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken';
import authConfig from '../../config/auth';

import { prisma } from '../../server';

type User = {
  id: string,
  name: string,
  email: string,
  password?: string,
  createdAt: Date,
  updatedAt: Date
}

export default async (request: Request, response: Response) => {
  const { email, password } = request.body;

  const userAuth: User | null = await prisma.user.findFirst({
    where: {
      email
    }
  });

  if(!userAuth) {
    return response.status(400).json({
      error: 'Invalid credentials email or password'
    });
  }

  const user = await compare(password, userAuth.password as string);

  if(!user) {
    return response.status(400).json({
      error: 'Invalid credentials email or password'
    });
  }

  const {expiresIn, secret} = authConfig.jwt;



  const token = sign({}, secret, {
    subject: userAuth.id,
    expiresIn
  });

  delete userAuth.password;

  return response.json({
    user: userAuth,
    token
  });
}