const validateMessage = (request, _response, next) => {
  const { name, email, message } = request.body;
  if (!name || !email || !message)
    return next(new Error("Name, email and message are required"));
  next();
};

export default validateMessage;
