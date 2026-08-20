const validateProject = (request, _response, next) => {
  if (!request.body.title) return next(new Error("Project title is required"));
  next();
};

export default validateProject;
