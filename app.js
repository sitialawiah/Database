var Sequelize = require('sequelize');

var connection = new Sequelize('demo_schema','root','password');

var Article = connection.define('article', {
    slug: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    title: sequalize.STRING,
    body: sequalize.TEXT
},{
    hooks: {
        beforeValidate: function () {
            console.log('beforeValidate');
        },
        afterValidate: function () {
            console.log('afterValidate');
        },
        beforeCreate: function () {
            console.log('beforeCreate');
        },
        afterCreate: function (res) {
            console.log('afterCreate: Created article with slug', res.dataValue.slug);
        }
    }
});

connection
    .sync({
        force: true
    })
    .then(function () {
        Article.create({
            slug: 'some-slug',
            title: 'some Title',
            body: 'some body'
        })
    })
    .catch(function (err) {
        console.log(err);
    })
