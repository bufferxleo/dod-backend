import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User",{
  userName:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  domainName:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  url:{
    type:DataTypes.STRING,
    allowNull:false,
  }
})

export default User;