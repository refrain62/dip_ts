import { IAnimalRepository } from "../Domain/Animal"

export class AnimalRepository implements IAnimalRepository {
  constructor(private id: number) {}

  findById() {}
}
