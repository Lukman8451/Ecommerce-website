import express, { Express } from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import db from './src/config/database'
import { productRouter } from "./src/routes";



const app: Express = express()

app.use(cors())
app.use(bodyParser.json())

app.use("/api/product", productRouter);

app.listen(5000, () => {
    db.sync({ alter: true }).then((value) => {
        console.log(`Database Connected successfully`)
    }).catch((error) => {
        console.log(error);
    })
    console.log(`Application up and running on port 5000`)
})