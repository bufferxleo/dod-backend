import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (err) {
    console.error("Error in connecting DB", err);
    process.exit(1);
  }
};

export { connectDB };
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   logging: false,
// });

// const connectDB = async () => {
//   try{
//     await sequelize.authenticate();
//     await sequelize.sync();
//     console.log("db connected successfully")
//   }catch(err){
//     console.error("error in connecting db",err);
//     process.exit(1);
//   }
// };

// export {sequelize,connectDB};