import express from 'express'
import cors from 'cors'
import router from './routes/index.js'
import dotenv from "dotenv";
dotenv.config()

const PORT = process.env.PORT ||  5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',router)
// app.use('/',(req,res)=>{
//     res.json({hello:'it\'s working'})
// })
app.listen(PORT, ()=>console.log('server started on port - '+PORT))