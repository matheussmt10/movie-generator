// import express from 'express'

// //import express from 'express'
// //import { db } from './database/db'

// const app = express()

// // app.get('/', (req, res)=>{
// //     let SQL = "INSERT INTO movie (title, background_img, rating) values ('teste', 'img.png', 5.5)"

// //})

// app.listen(3000,()=>{
//    console.log('Server rodando')
// })

import express from 'express'

import Router from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req, res) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)


app.listen(3333, () => console.log('server running on port 3333'))