const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const canUpdateRole = (req, res, next) => {
  const { role } = req.body
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtSecret)

  const noRole = role === undefined
  const canChangeRole = role < decoded.role

  if (noRole || canChangeRole) return next()
  else return res.status(401).json({ success: false, message: 'No puedes cambiar un rol superior al tuyo.' })
}

module.exports = { canUpdateRole }
