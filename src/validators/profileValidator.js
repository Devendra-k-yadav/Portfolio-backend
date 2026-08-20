const validateProfile = (request, _response, next) => {
  if (!request.body.name || !request.body.role)
    return next(new Error("Profile name and role are required"));
  next();
};

export default validateProfile;
