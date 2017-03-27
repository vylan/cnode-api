'use strict';
const moment = require('moment');
module.exports = app => {
    class UserController extends app.Controller {

        *
        index() {
            const users = yield this.ctx.model.user.find({});
            this.ctx.body = users;
        }

        *
        create() {
            this.ctx.body = yield this.service.user.create({
                name: this.ctx.request.body.name,
                password: this.ctx.request.body.password
            })
        }

        *
        show() {
            this.ctx.body = yield this.service.user.show({
                id: this.ctx.params.id,
            });
        }
    }

    return UserController;
};