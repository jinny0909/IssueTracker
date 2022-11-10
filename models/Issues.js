// models/Issues.js
// Model for Issues table

const Sequelize = require('sequelize')
const db = require('../config/database')

const Issues = db.define('issues', {
    id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    ticketname: {
        allowNull: false,
        type: Sequelize.STRING,
        valiate: {
            //require ticketname to at least length 3, only use letters, numbers, underscores
            is: /^\w{2,}$/
        }
    },
    description: {
        type: Sequelize.STRING,
    },
    //TODO: urgency type Sequelize Int? String?
    urgency: {
        type: Sequelize.STRING,
    },
    issueDate:{
        type: Sequelize.DATE,
    }
})

module.exports = Users