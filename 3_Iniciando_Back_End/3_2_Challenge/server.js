const express = require('express');
const nunjucks = require('nunjucks')

const server = express()
const articles = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get("/",function(req, res){
    return res.render("index")
})

server.get("/about", function(req, res) {
    const about = {
        avatar_url: "https://yt3.ggpht.com/a/AATXAJz-oJY2C2N2gxv09ri8u0twlKqtaeQJTVYixpDh0w=s900-c-k-c0x00ffffff-no-rj",
        name: "Rocketseat",
        role: "Empresa que orienta desenvolvedores a serem incriveis!",
        description: [
            {name: "JavaScript"},
            {name: "CSS"},
            {name: "Html"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/"},
            {name: "Facebook", url: "https://web.facebook.com/rocketseat/"}
        ]
    }
    
    return res.render("about", {about})
})

server.get("/courses", function(req, res) {
    return res.render("courses", {items: articles})
})

server.use(function(req, res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running")
})