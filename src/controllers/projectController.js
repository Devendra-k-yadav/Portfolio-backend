import Project from "../models/Project.js";
import createCrudController from "../utils/createCrudController.js";

const projectController = createCrudController(Project);

export default projectController;
