const validateLogin = (request, _response, next) => {
  const { email, password } = request.body;
  if (!email || !password)
    return next(new Error("Email and password are required"));
  next();
};

export default validateLogin;
