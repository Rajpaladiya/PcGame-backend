const { connect } = require("mongoose")
const MongoToConnect = require("../db")
MongoToConnect();
const express = require('express')
const router = express.Router();
const Game = require('../models/PRODUCT')
const { check,validationResult } = require('express-validator')





//Route-1: FETCH DATA
router.get('/FetchGame',async(req,resp)=>{

    try {
        const games =  await Game.find()
        resp.json(games)
        console.log(games)
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("internal Server Error")

        
    }
}) 


// ROUTE-2:ADD DATA
router.post('/AddGame', [
    check('Type'),
    check('categories'),
    check('image'),
    check('tag'),
    check('comment'),
    check('download'),
    check('type_one'),
    check('type_two'),
    check('name'),
    check('about'),
    check('size'),
    check('publishDate'),
    check('genre_one'),
    check('genre_two'),
    check('score'),
    check('rating'),
    check('quality'),
    check('views'),
    check('screenshot_one'),
    check('screenshot_two'),
    check('screenshot_three'),
    check('about_one'),
    check('about_two'),
    check('about_three'),
    check('url'),
    check('file_path')
],
 async (req, res) => {
        try {
            const { Type,categories,image, tag, download, comment, type_one, type_two, name,about,vote, size,publishDate ,genre_one,genre_two,score , rating ,quality , views , video ,screenshot_one ,screenshot_two , screenshot_three,about_one,about_two, about_three,url,file_path } = req.body;
            // const errors = validationResult(req);
            // console.log("ERROR", errors)
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }

            const game = new Game({
                Type,categories, image, tag, download, comment, type_one, type_two, name,about,vote, size,publishDate,genre_one,genre_two,score , rating ,quality , views , video ,screenshot_one ,screenshot_two , screenshot_three,about_one,about_two, about_three,url,file_path
            })
            const saveGame = await game.save()

            console.log('saveGame--', saveGame)

            res.json(saveGame)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal Server Error")


        }

    })

    








module.exports = router

