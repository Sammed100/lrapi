const express = require('express');
const router = express.Router();
const connection = require('../connection');

router.route("/").get((req,res)=>{
    connection.query('SELECT * FROM Hindi',(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })
})

router.route("/:id").get((req,res)=>{
    connection.query('SELECT * FROM Hindi WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })
})

router.route("/:id").delete((req,res)=>{
    connection.query('DELETE FROM Hindi WHERE id=?',[req.params.id],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })
})

router.route("/").post((req,res)=>{
    var data = req.body
    var Data = [data.id,data.word]
    connection.query('INSERT INTO Hindi(id,word) values(?)',[Data],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })
})

router.route("/").get((req,res)=>{
    var data = req.body
    connection.query('UPDATE Hindi SET ? WHERE id='+data.id,[data],(err,rows)=>{
        if(err){
            console.log(err);
        }else{
            res.send(rows);
        }
    })
})

module.exports = router;