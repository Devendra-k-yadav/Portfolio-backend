import Profile from "../models/Profile.js";
import createCrudController from "../utils/createCrudController.js";

const profileController = createCrudController(Profile, {
  sort: { createdAt: -1 },
});

export default profileController;
