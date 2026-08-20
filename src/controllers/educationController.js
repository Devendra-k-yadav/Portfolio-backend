import Education from "../models/Education.js";
import createCrudController from "../utils/createCrudController.js";

const educationController = createCrudController(Education);

export default educationController;
