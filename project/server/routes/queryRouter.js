import express from 'express'
import queryController from '../controllers/queryController.js'
const router = express.Router()

router.get('/track',queryController.getTracks)
// router.get('/track',(req,res)=>console.log(req.query))

router.get('/artist',queryController.getArtists)
router.get('/album',)

export default router