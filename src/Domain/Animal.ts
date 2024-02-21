// 依存性逆転の原則に違反しているコード
import { AnimalRepository } from "../Infrastructure/AnimalRepository"

export class Animal {
  private animalRepository: AnimalRepository

  constructor(private id: number) {
    this.animalRepository = new AnimalRepository(id)
  }

  get() {
    this.animalRepository.findById()
  }
}
