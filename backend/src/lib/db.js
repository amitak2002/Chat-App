import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


export const connectDB = async () => {

  try {

    const conn = await mongoose.connect("mongodb+srv://amityadavrao51:ak8448661035@chatcluster.ikpoh.mongodb.net/?retryWrites=true&w=majority&appName=ChatCluster");
    
    console.log("DataBase Connected :",conn.connection.host);
  } 
  
  catch (error) {
    console.log("MongoDb Errror Connection :",error.message);
  }
};
