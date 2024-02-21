// 依存性逆転の原則
// 依存性の注入(DI)
// インタフェースの実装
import {
  AnimalRepository
 } from "../Infrastructure/AnimalRepository"

export interface IAnimalRepository {
  findById(): void
}

export class Animal {
  constructor(private animalRepository: IAnimalRepository) {
    this.animalRepository = animalRepository
  }

  get() {
    this.animalRepository.findById()
  }
}
