import { Request, Response, NextFunction } from 'express';

import { AppDataSource } from 'orm/data-source';
import { Task } from 'orm/entities';

export const listTasks = async (req: Request, res: Response, next: NextFunction) => {
  const isLoggedIn = req.jwtPayload !== null;
  const taskRepository = AppDataSource.getRepository(Task);

  try {
    const tasks = await taskRepository.find({
      select: ['id', 'title', 'slug', 'description', 'isPublicInArchive'],
      where: { isPublicInArchive: true },
    });

    res.status(200).send(tasks);
  } catch (e) {
    res.status(500).end();
  }
};
