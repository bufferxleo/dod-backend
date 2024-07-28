import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const connectDB = async () => {
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("db connected successfully")
  }catch(err){
    console.error("error in connecting db",err);
    process.exit(1);
  }
};

export {sequelize,connectDB};
