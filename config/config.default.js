'use strict';
module.exports = {
  middleware: [ 'errorHandler' ],
  mongoose: {
    url: 'mongodb://10.200.43.116:27017/egg',
    options: {},
  },
  errorHandler: {
    match: '/api',
  },
  security: {
    csrf: {
      enable: false,
    },
  },
};
