import { PoemsRepo } from "@/repositories/poemsRepo";
import { IPoem, PoemDTO } from "@/types/poemModels";

export class CreatePoemService {
  public async execute(data: PoemDTO): Promise<IPoem> {
    const poemsRepo = new PoemsRepo();
    
    return poemsRepo.create(data);
  }
}