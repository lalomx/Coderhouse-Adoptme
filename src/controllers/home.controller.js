import { usersService, petsService } from "../services/index.js"

const renderHome = async (req, res) => {
  const pets = await petsService.getAll()
  const users = await usersService.getAll()
  res.render('home', {
    users: users.length,
    pets: pets.length
  })
}

const renderPets = async (req, res) => {
  const pets = await petsService.getAll().lean()
  res.render('pets', {
    pets
  })
}

const renderUsers = async (req, res) => {

  const users = await usersService.getAll().lean()
  res.render('users', {
    users
  })
}

export default {
  renderHome,
  renderPets,
  renderUsers
}