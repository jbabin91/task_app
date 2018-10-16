const mongoose = require('mongoose');
require('./../.env');
require('../models');

mongoose.connect(
  `mongodb://root:${mongodbPassword}!@task-list-shard-00-00-p38wz.gcp.mongodb.net:27017,task-list-shard-00-01-p38wz.gcp.mongodb.net:27017,task-list-shard-00-02-p38wz.gcp.mongodb.net:27017/test?ssl=true&replicaSet=task-list-shard-0&authSource=admin&retryWrites=true`,
  {
    useNewUrlParser: true,
  },
  error => {
    if (error) throw error;
  },
);
