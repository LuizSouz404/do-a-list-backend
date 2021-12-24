import {Router} from 'express';
import ensureAuth from '../middlewares/ensureAuthenticate';
import { checkTodo, createTodo, deleteTodo, showTodo } from '../resolvers/mutations';

const router = Router();

router
  .get('/:id', ensureAuth, showTodo)
  .post('/:id/create', ensureAuth, createTodo)
  .patch('/check/:id', ensureAuth, checkTodo)
  .delete('/delete/:id', ensureAuth, deleteTodo)


  export default router