import { Router } from 'express'

import { createList, deleteList, updateColorList } from '../resolvers/mutations';
import ensureAuth from '../middlewares/ensureAuthenticate'

const router = Router()

router
  .post('/create', ensureAuth, createList)
  .put('/edit/:id', ensureAuth, updateColorList)
  .delete('/delete/:id', ensureAuth, deleteList)

export default router