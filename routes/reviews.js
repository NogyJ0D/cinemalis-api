const express = require('express')
const { isRegular } = require('../middleware/auth')
const { isMyReview } = require('../middleware/isMine')
const Reviews = require('../services/reviews')

const reviews = app => {
  const router = express.Router()
  const reviewsServices = new Reviews()
  app.use('/reviews', router)

  router.get('/', async (req, res) => {
    const reviews = await reviewsServices.getAll()

    if (reviews.err) return res.status(404).json({ failed: true, reviews })
    else return res.status(200).json(reviews)
  })

  router.get('/8', async (req, res) => {
    const reviews = await reviewsServices.get8()

    if (reviews.err) return res.status(404).json({ failed: true, reviews })
    else return res.status(200).json(reviews)
  })

  router.get('/get/:filter/:id', async (req, res) => {
    const { filter, id } = req.params
    const reviews = await reviewsServices.getByFilter(filter, id)

    if (reviews.err) return res.status(404).json({ failed: true, reviews })
    else return res.status(200).json(reviews)
  })

  router.post('/', isRegular, async (req, res) => {
    const review = await reviewsServices.create(req.body)

    if (review.err) return res.status(400).json({ failed: true, review })
    else return res.status(201).json(review)
  })

  router.put('/:userId/:reviewId', isRegular, isMyReview, async (req, res) => {
    const { reviewId } = req.params
    const review = await reviewsServices.update(reviewId, req.body)

    if (review.err) return res.status(400).json({ failed: true, review })
    else return res.status(200).json(review)
  })
}

module.exports = reviews
