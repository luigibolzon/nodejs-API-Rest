import express from "express";

const app = express();

const livros = [
    {
        id : 1,
        titulo : "o senhor do aneis"
    }
    ,
    {
        id : 2,
        titulo : "o hobbit"
    }
]

app.get("/livros", (req,res) => {
    res.status(200).json(livros);
});

app.get("/", (req,res) => {
    res.status(200).send("Tela de node.js")
});

export default app;