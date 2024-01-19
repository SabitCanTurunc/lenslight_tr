import express  from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRaute.js";
import photoRoute from "./routes/photoRoute.js"
dotenv.config();

//connection to do DB
conn();

const app = express()
const port = process.env.PORT;

// ejs template engine
app.set("view engine", "ejs");


//statics files middleware
app.use(express.static('public'));
app.use(express.json());


//routers
app.use("/",pageRoute);
app.use("/photos",photoRoute);

// app.post("/photos",async(req,res)=>
// {
//     console.log("RES:",req);
// })




/* app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    res.render("about");    
});
 */


app.listen(port, ()=> {
    console.log(`Application running on ${port}`);
}); 