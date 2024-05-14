import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async()=>{
    try {
        await Order.deleteMany();      // delete everything from order table
        await Product.deleteMany(); 
        await User.deleteMany(); 

        // import or insert data
        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await Product.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse)
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async()=>{
    try {
        await Order.deleteMany();      // delete everything from order table
        await Product.deleteMany(); 
        await User.deleteMany(); 

        console.log('Data Destroyed!'.red.inverse)
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

// console.log(`terminal argumnets pass with 2nd index\n ${process.argv[2]}`)


if(process.argv[2] === '-d') {
    destroyData();
} else{
    importData();
}

