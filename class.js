const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')


const myForm = document.getElementById('pet-form')


class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}

myForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const animale = new Pet(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  console.log('dati animale:', animale)
})