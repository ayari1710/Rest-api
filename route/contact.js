const express=require('express')
const router=express.Router()
const Contact=require("../Model/Contact")

const controllers=require('../control/controllers')
// test route
router.get('/test',(req,res)=>{
    res.send('hello world');
})
// post client
router.post('/',controllers.addcontact )
    // afficher tous les cliens 
    router.get('/',controllers.getcontact)       
    // afficher un seul client    
    router.get('/:id', controllers.getonecontact
    )
    // delete client 
    router.delete('/:_id', controllers.deletecontact)
    // edit client
    router.put('/:_id', controllers.updatecontact)

module.exports= router 