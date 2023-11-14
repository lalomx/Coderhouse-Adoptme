import { petsService, usersService } from "../services/index.js"

const renderHome = async (req, res) => {
  const pets = (await petsService.getAll()).length
  const users = (await usersService.getAll()).length
  res.render('home', {
    users,
    pets
  })
}
const renderPets = async (req, res) => {
  const pets = await petsService.getAll().lean()
  res.render('pets', {
    pets
  })
}

const renderusers = async (req, res) => {
  const users = await usersService.getAll().lean()
  res.render('users', {
    users
  })
}

export default {
  renderHome,
  renderPets,
  renderusers
}