import Experience from "../models/Experience.js";
import createCrudController from "../utils/createCrudController.js";

const experienceController = createCrudController(Experience);

export default experienceController;
