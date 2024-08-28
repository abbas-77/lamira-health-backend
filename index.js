import express from "express"
import {config} from "dotenv"
import connectDb from "./config/dbConnection.js"
import cors from "cors"


config()
connectDb()
const app = express()

//Middleware
app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({extended:true}))



//Routes
// app.use("/api/register", loginRoutes);


//Check and install Python dependencies if needed
// if (!checkPythonDependencies()) {
//     installPythonDependencies();
// }

app.listen(process.env.PORT , () => {
    console.log("server Running");
})