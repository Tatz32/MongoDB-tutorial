const express = require("express");
const app = express();
const mongoose = require("mongoose");

const foodRouter = require("./routes/FoodRoutes") ;
app.use(foodRouter);

//データベース(MongoDB)との連携を定義
//パスワードをデフォルトから変更
//.net/の後に任意の名前をセットする(今回はfood)
mongoose.connect("mongodb+srv://username:<password>@cluster0.jw4bfpn.mongodb.net/food?retryWrites=true&w=majority"
).then(()=> console.log("Is connected")).catch((err)=>console.log("Error"));


app.listen(3100,()=>{
    console.log("Server is running")
})