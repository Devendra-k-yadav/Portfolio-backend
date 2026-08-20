import Skill from "../models/Skill.js";
import createCrudController from "../utils/createCrudController.js";

const skillController = createCrudController(Skill);

export default skillController;
