const express = require('express')
const Users = require('../services/users')
const { isAdmin } = require('../middleware/auth')
const { canUpdateRole } = require('../middleware/canUpdate')

const users = app => {
  const router = express.Router()
  const usersServices = new Users()
  app.use('/users', router)

  router.get('/', isAdmin, async (req, res) => {
    const users = await usersServices.getAll()

    if (users.err) return res.send(404).json({ failed: true, users })
    else return res.status(200).json(users)
  })
  router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await usersServices.get(id)

    if (user.err) return res.status(404).json({ failed: true, user })
    else return res.status(200).json(user)
  })

  router.put('/:id', isAdmin, canUpdateRole, async (req, res) => {
    const { id } = req.params
    const user = await usersServices.update(id, req.body)

    if (user.err) return res.status(40).json({ failed: true, user })
    else return res.status(200).json(user)
  })

  router.delete('/:id', isAdmin, async (req, res) => {
    const { id } = req.params
    const user = await usersServices.delete(id)

    if (user.err) return res.status(400).json({ failed: true, user })
    else return res.status(200).json(user)
  })
}

module.exports = users
