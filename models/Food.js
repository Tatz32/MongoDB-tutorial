const mongoose = require("mongoose");


//データ構造の設定をしている
const FoodSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim : true,
        lowercase : true
    },
    calories:{
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error("This is not possible")
            }
        },
    },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
