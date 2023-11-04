const express = require("express");
const cors = require("cors");
const { PORT } = require('./config');
const useRoutes = require("./routes/indexRoutes");
const errorMiddleware = require("./middlewares/error");
// db
const initDB = require("./db");
const initModels = require("./models/initModels"); 

const app = express();

app.use(cors());
app.use(express.json());
useRoutes(app);
// error middleware
app.use(errorMiddleware);

async function startServer() {
    try {
        const sequelizeInstance = await initDB();
        
        if(sequelizeInstance){
            await initModels(sequelizeInstance);
            
            app.listen(PORT, () => {
                console.log("DB started");
                console.log('server started on port ' + PORT);
            });
        }
    } catch (err) {
        console.log("Can't init server ", err);
    }
}


startServer();