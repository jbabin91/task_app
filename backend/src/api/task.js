const { Task } = require('./../models');
const Boom = require('boom');

const taskApi = {
  all: {
    async handler(request, response) {
      try {
        return await Task.find({}).sort({ createdAt: 'desc' });
      } catch (error) {
        Boom.badImplementation(error);
      }
    },
  },
  create: {
    async handler(request, response) {
      try {
        const task = await new Task({
          name: request.payload.name,
          description: request.payload.description,
        });
        task.save();

        return { message: 'Task created successfully', task };
      } catch (error) {
        Boom.badImplementation(error);
      }
    },
  },
  get: {
    async handler(request, response) {
      try {
        const task = request.params.task;

        return await Task.findOne({
          _id: task.id,
        });
      } catch (error) {
        Boom.badImplementation(error);
      }
    },
  },
  update: {
    async handler(request, response) {
      try {
        const task = request.params.task;
        const updates = request.payload;

        return { success: true, message: 'Successfully updated task!' };
      } catch (error) {
        Boom.badImplementation(error);
      }
    },
  },
  remove: {
    async handler(request, response) {
      try {
        const task = await Task.findById(request.params.task).remove();

        return { success: true, message: 'Successfully removed task!' };
      } catch (error) {
        Boom.badImplementation(error);
      }
    },
  },
};

module.exports = taskApi;
