import {app} from './app';
import dbConnection from "./utils/db";
require("dotenv").config();



// create server

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    // database connection
    dbConnection();
});