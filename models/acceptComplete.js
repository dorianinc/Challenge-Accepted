'use strict';
module.exports = (sequelize, DataTypes) => {
    var AcceptComplete = sequelize.define("AcceptComplete", {

        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    });

    AcceptComplete.associate = function (models) {
        // AcceptComplete.belongsTo(models.Challenge);
        // AcceptComplete.belongsTo(models.User);
    };
    return AcceptComplete;
};

