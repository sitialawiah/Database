var sequelize = require('sequelize')

var connection = new Sequelize ('demo_schema', 'root', 'password')

var Article = connection.define('article', {
    title: Sequelize.STRING,
    body: Sequelize.TEXT,
        approved: {
        type: sequelize.BOOLEAN,
        defaultValue: false
    }
})

connection
.sync({
    force: true
})
.then(function() {
    Article.bulkCreate([
        {
            title: 'Article 1',
            body: 'Article 1'
        },
        {
            title: 'Article 2',
            body: 'Article 2'
        }
    ], {
        validate: true,
        ignoreDuplicates: true
    }).then(function() {
    })
})