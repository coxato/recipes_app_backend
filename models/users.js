const { DataTypes, Model } = require('sequelize');

class Users extends Model {}

async function initUsers(sequelizeInstance) {
    Users.init({
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
    }, {
        // Other model options go here
        sequelize: sequelizeInstance,
        modelName: 'Users'
    });

    await Users.sync();
}

function getUsersModel() {
    return Users
}

module.exports = {
    initUsers,
    getUsersModel
}
