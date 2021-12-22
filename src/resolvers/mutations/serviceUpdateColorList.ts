import { Request, Response } from "express";
import { prisma } from "../../server";

export default async ( request: Request, response: Response) => {
  const {id} = request.params;
  const {color} = request.body;

  const listInformation = await prisma.list.findFirst({
    where: {
      id
    }
  });

  if(!listInformation) {
    return response.status(400).send()
  }

  const list = await prisma.list.update({
    where: {
      id
    },
    data: {
      title: listInformation.title,
      color
    },
    select: {
      id: true,
      title: true,
      color: true,
      createdAt: true
    }
  });

  return response.status(201).json(list);
}