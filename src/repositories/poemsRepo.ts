import prisma from "@/lib/prisma";
import { IPoem, PoemDTO } from "@/types/poemModels";

export class PoemsRepo {
  public async getAll(): Promise<IPoem[]> {
    return prisma.poem.findMany()
  }

  public async create(data: PoemDTO): Promise<IPoem> {
    return prisma.poem.create({
      data: {
        title: data.title,
        content: data.content
      }
    })
  }
}