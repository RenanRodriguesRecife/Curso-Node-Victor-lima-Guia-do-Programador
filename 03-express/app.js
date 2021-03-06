const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/index.html")
});

app.get("/sobre",function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")
});

app.get("/blog",function(req,res){
    res.send("Seja bem-vindo ao meu blog!");
});

app.get("/ola/:cargo/:nome/:cor",function(req,res){
    res.send("<h2>Ola " + req.params.nome + "<br> Seu cargo é: " + req.params.cargo + "<br> Sua cor favorita é: " + req.params.cor + "</h2>");
});

app.listen(8081,function(){
    console.log("Servidor Rodando na url http://localhost:8081");
});
