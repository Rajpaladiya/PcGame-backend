const { connect } = require("mongoose")
const MongoToConnect = require("../db")
MongoToConnect();
const express = require('express')
const router = express.Router();
const commentSave = require('../models/Comment.js')
const { check,validationResult } = require('express-validator')





//Route-1: FETCH DATA
router.get('/FetchComment',async(req,resp)=>{

    try {
        const Comm =  await commentSave.find()
        resp.json(Comm)
        console.log(Comm)
    } catch (error) {
        console.error(error.message);
        resp.status(500).send("internal Server Error")

        
    }
}) 


// ROUTE-2:ADD DATA
router.post('/AddComment', [
    
    check('image'),
    check('name'),
    check('date'),
    check('comment')
], async (req, res) => {
        try {
            const {image, name, date, comment } = req.body;
            // const errors = validationResult(req);
            // console.log("ERROR", errors)
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({ errors: errors.array() });
            // }

            const COMMENT = new NewComment({
                image, name, date, comment 
            })
            const saveComment = await COMMENT.save()

            console.log('saveGame--', saveComment)

            res.json(saveComment)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("internal Server Error")


        }

    })

    








module.exports = router

