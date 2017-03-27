'use strict';
module.exports = app => {
  app.resources('topic', '/api/v2/topics', 'topic');
  app.resources('user', '/api/v2/users', 'user');
};
