import { PoemsRepo } from "@/repositories/poemsRepo";
import { IPoem } from "@/types/poemModels";

export class GetAllPoemsService {
  public async execute(): Promise<IPoem[]> {
    const poemsRepo = new PoemsRepo();

    return poemsRepo.getAll();
  }
}