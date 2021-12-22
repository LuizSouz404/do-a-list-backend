import { Router } from "express";

import { showProfile, updateProfile, deleteProfile } from '../resolvers/mutations';
import ensureAuth from "../middlewares/ensureAuthenticate";

const router = Router();

router
  .get('/me', ensureAuth, showProfile)
  .put('/edit', ensureAuth, updateProfile)
  .delete('/delete', ensureAuth, deleteProfile)

export default router