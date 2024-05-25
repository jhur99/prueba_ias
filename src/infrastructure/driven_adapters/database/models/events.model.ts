import { Sequelize, DataTypes, Model } from "sequelize";
// import sequelize from "sequelize/types/sequelize";
const sequelize = new Sequelize('sqlite::memory:');

export class eventModel extends Model {}

eventModel.init({
    eventId:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    date:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type:DataTypes.STRING,
        allowNull: true,
    }

},
{
    sequelize,
    modelName: 'events', 
  })