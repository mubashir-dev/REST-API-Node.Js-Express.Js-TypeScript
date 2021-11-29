import mongoose from "mongoose";

require('dotenv').config()

function connect() {
    const db_url = `${process.env.DB_HOST}${process.env.DB_PORT}/${process.env.DB_NAME}`;
    return mongoose.connect(db_url, (error: any) => {
        if (!error) {
            console.log(`Mongodb Connection :  ${process.env.DB_NAME}`)
        } else {
            console.log(`Mongodb Connection has not established: ${error.stack}`)
        }
    });
}

export default connect;