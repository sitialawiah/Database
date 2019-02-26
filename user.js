var Sequelize = require('sequelize');
var bcrypt = require('bcryptjs');

var connection = new Sequelize('demo_schema', 'roor', 'password');

var User = connection.define('User', {
    username: Sequelize.TEXT,
    password: Sequelize.TEXT
},{
    hooks: {
        afterValidate: function (user) {
            user.password = bcrypt.hashSync(user.password, 8);
        }
    }
});

connection
    .sync({
    force: true,
    logging: Console.log
    })
    .then(function() {
    return User.create({
        username: 'admin',
        password: 'admin'
    });
    })
    .catch(function(err) {
        console.log('err', err);
    });

