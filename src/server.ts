import { PrismaClient } from '@prisma/client';
import express from 'express';
import {auth, list, profile, todo} from './routes'
import helmet from 'helmet'
import cors from 'cors'

export const prisma = new PrismaClient()
const app = express()
const port = process.env.PORT

app.disable('x-powered-by')
app.set('trust proxy', 1)

app.use(express.json())
app.use(cors())
app.use(helmet())

app.use(express.json());

app.use('/', auth)
app.use('/profile', profile)
app.use('/list', list)
app.use('/list/:id', todo)

app.listen(3333, () => {console.log(`🚀 Server is running on port ${port}!`)});