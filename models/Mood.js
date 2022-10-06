const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Mood extends Model {}

Mood.init(

  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    userid: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    mood: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    moodtext: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cooking: {
      type: DataTypes.STRING,
      allowNull: true,

    },

    musicact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    meditateact: {
    type: DataTypes.STRING,
    allowNull: true,
    },

    schoolact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    junkact: {
    type: DataTypes.STRING,
    allowNull: true,
    },

    bingeact: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    },
{

    sequelize,

    timestamps: false,

    freezeTableName: true,

    underscored: true,

    modelName: 'Mood',

  }

);

 

module.exports = Mood;