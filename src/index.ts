import { Animal } from './Domain/Animal'
import { AnimalRepository } from './Infrastructure/AnimalRepository'

const animalRepository = new AnimalRepository(1)
const animal = new Animal(animalRepository)

console.log(animal)
console.log(animal.get())
