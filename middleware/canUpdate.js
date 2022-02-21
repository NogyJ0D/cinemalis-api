const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const canUpdateRole = (req, res, next) => {
  const { role } = req.body.role ? req.body.role : undefined
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtSecret)

  if (role < decoded.role) return next()
  else return res.status(401).json({ success: false, message: 'No podés cambiar un rol superior al tuyo.' })
}

module.exports = { canUpdateRole }
