const mongoose = require('mongoose');
require('./../.env');
require('../models');

const uri = `mongodb+srv://root:${mongodbPassword}@task-list-p38wz.gcp.mongodb.net?retryWrites=true`;

const options = {
  useNewUrlParser: true,
  dbName: 'tasks-db',
};

mongoose
  .connect(
    uri,
    options,
    error => {
      if (error) throw error;
    },
  )
  .catch(error => {
    console.log(error);
  });
