const app = require("./app");
const dotenv=require('dotenv')
dotenv.config()

app.listen(process.env.RUNNING_PORT, _ => console.log("This is from env "+ process.env.RUNNING_PORT));