'use strict';
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const moment = require("moment");
const SALT_WORK_FACTOR = 10;
module.exports = app => {
    class UserService extends app.Service {


        *
        show(params) {
            const user = yield this.ctx.model.user.findOne({
                _id: params.id,
            });
            return user;
        }
    }

    *
    create(params) {
        const salt = yield bcrypt.genSalt(SALT_WORK_FACTOR);
        const hash = yield bcrypt.hash(params.password, salt);
        const user = yield this.ctx.model.user.save({
            name: params.name,
            password: hash,
            createAt: new moment()
        })

        return user;
    }

    return UserService;
};