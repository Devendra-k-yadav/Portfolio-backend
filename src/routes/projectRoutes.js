import createCrudRouter from "../utils/createCrudRouter.js";
import projectController from "../controllers/projectController.js";
import validateProject from "../validators/projectValidator.js";

const router = createCrudRouter(projectController, {
  createMiddleware: [validateProject],
});

export default router;
