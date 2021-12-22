import { Router } from 'express'

import {signIn, signUp} from '../resolvers/mutations';

const router = Router()

router
  .post('/signup', signUp)
  .post('/signin', signIn)

export default router