import express from 'express'
import queryRouter from './queryRouter.js'
const router = express.Router()

router.use('/search',queryRouter)

export default router