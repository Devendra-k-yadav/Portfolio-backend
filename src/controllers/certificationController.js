import Certification from "../models/Certification.js";
import createCrudController from "../utils/createCrudController.js";

const certificationController = createCrudController(Certification);

export default certificationController;
