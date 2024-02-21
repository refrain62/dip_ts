// 依存性逆転の原則に違反しているコード
// 依存性の注入(DI)
import { AnimalRepository } from "../Infrastructure/AnimalRepository"

export class Animal {
  constructor(private animalRepository: AnimalRepository) {
    this.animalRepository = animalRepository
  }

  get() {
    this.animalRepository.findById()
  }
}
