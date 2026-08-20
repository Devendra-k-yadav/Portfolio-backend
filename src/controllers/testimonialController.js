import Testimonial from "../models/Testimonial.js";
import createCrudController from "../utils/createCrudController.js";

const testimonialController = createCrudController(Testimonial);

export default testimonialController;
