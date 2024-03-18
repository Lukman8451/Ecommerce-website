import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

// Option 3: Passing parameters separately (other dialects)
const database = new Sequelize(process.env.DATABASE as string, process.env.ACCESS as string , process.env.PASSWORD, {
    host: 'localhost',
    dialect:'postgres'
});

export default database