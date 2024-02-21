// 依存性逆転の原則に違反しているコード
// 依存性の注入(DI)
// インタフェースの実装
import {
  AnimalRepository,
  IAnimalRepository
 } from "../Infrastructure/AnimalRepository"

export class Animal {
  constructor(private animalRepository: IAnimalRepository) {
    this.animalRepository = animalRepository
  }

  get() {
    this.animalRepository.findById()
  }
}
