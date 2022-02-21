const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const isMyMovie = (req, res, next) => {
  const { editor } = req.params
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtSecret)

  if (editor === decoded.id) return next()
  else return res.status(401).json({ success: false, message: 'No sos el editor de esta película.' })
}

const isMyReview = (req, res, next) => {
  const { userId } = req.body
  const token = req.cookies.token
  const decoded = jwt.verify(token, jwtSecret)

  if (userId === decoded.id) return next()
  else return res.status(401).json({ success: false, message: 'No sos el dueño de esta reseña.' })
}

module.exports = { isMyMovie, isMyReview }
