import createCrudRouter from "../utils/createCrudRouter.js";
import profileController from "../controllers/profileController.js";
import validateProfile from "../validators/profileValidator.js";

const router = createCrudRouter(profileController, {
  createMiddleware: [validateProfile],
});

export default router;
