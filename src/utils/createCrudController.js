import ApiError from "./ApiError.js";

const createCrudController = (Model, options = {}) => ({
  list: async (_request, response) =>
    response.json(
      await Model.find(options.filter || {}).sort(
        options.sort || { order: 1, createdAt: -1 },
      ),
    ),
  getById: async (request, response, next) => {
    const record = await Model.findById(request.params.id);
    if (!record) return next(new ApiError(404, `${Model.modelName} not found`));
    response.json(record);
  },
  create: async (request, response) =>
    response.status(201).json(await Model.create(request.body)),
  update: async (request, response, next) => {
    const record = await Model.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true, runValidators: true },
    );
    if (!record) return next(new ApiError(404, `${Model.modelName} not found`));
    response.json(record);
  },
  remove: async (request, response, next) => {
    const record = await Model.findByIdAndDelete(request.params.id);
    if (!record) return next(new ApiError(404, `${Model.modelName} not found`));
    response.status(204).send();
  },
});

export default createCrudController;
