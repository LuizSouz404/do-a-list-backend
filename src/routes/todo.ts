import {Router} from 'express';
import ensureAuth from '../middlewares/ensureAuthenticate';
import { checkTodo, createTodo, deleteTodo, showTodo } from '../resolvers/mutations';

const router = Router();

router
  .get('/:idTodo', ensureAuth, showTodo)
  .post('/create', ensureAuth, createTodo)
  .patch('/check/:idTodo', ensureAuth, checkTodo)
  .delete('/delete/:idTodo', ensureAuth, deleteTodo)


  export default router