import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, // _id object  id of each user weather admin/user
      required: true,
      ref: "User", // user collections refrence comes: collections came from
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
); // defalt timestamp add for each schema data created at field

const Product = mongoose.model("Product", productSchema);

export default Product;
