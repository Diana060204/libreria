var express=require("express");
var rutasUsuarios=require("./routes/usuariosRutas");
var app=express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",rutasUsuarios);


var port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Servidor en http://localhost:"+port);
});