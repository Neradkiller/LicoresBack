'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customers.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    billing_adress: DataTypes.STRING,
    default_billing_addres: DataTypes.STRING,
    country: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'customers',
  });
  return customers;
};

//Para crear este modelo se utiliza este comando
//npx sequelize-cli init
//npx sequelize-cli db:migrate
//npx sequelize-cli model:generate --name customers --attributes email:string,password:string,full_name:string,billing_adress:string,default_billing_addres:string,country:string,phone:string
