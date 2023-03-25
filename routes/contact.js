// 1 require express
const express = require ("express");

// 2 require routes
const router =  express.Router()
// 3 req contact
const Contact = require ("../models/Contact");
// routes ) 
router.get('/test', (req, res)=> {
res.send("hello world")});

router.post('/add', async (req, res) => {
    try {
        const {DeviceBrand, deviceProblem, deviceContact} = req.body ;
        const NewContact = new Contact ({DeviceBrand, email, phone});
        await NewContact.save ()
        res.status(200).send ({msg: "contact added ...", NewContact})
    } catch (error) {
        res.status(400).send ({msg: "contact cannot added ...", error}) 
    }

});
router.get('/all' , async (req,res) =>{
    try {
        const listContacts = await Contact.find();
        res
            .status(200)
            .send({msg: "your list : " , listContacts} )
    } catch (error) {
        res.status(400).send({msg:"cannot get", error })  
    }
})

router.get('/:id', async (req, res) => {
    try {
        const contactToGet = await Contact.findOne({_id: req.params.id});
        res
            .status(200)
            .send({msg : "is that you ?",contactToGet })
    } catch (error) {
        res
            .status(400)
            .send({msg: "User not found", error})  
    }
})
router.delete("/all", async (req, res)=>{
    try {
            const {_id} = req.params
        await Contact.deleteMany()
        res
            .status(200)
        .send({msg:'contact deleted'});
    } catch (error) {
        res
            .status(400)
        .send({msg: 'Can not delete contact with'}, error);  
    }
})
router.delete("/:_id", async (req, res)=>{
    try {
            const {_id} = req.params
        await Contact.findOneAndDelete({_id })
        res
            .status(200)
        .send({msg:'contact deleted'});
    } catch (error) {
        res
            .status(400)
        .send({msg: 'Can not delete contact with'}, error);  
    }
})

router.put("/:_id", async (req, res)=>{
    try {
            const {_id} = req.params
            const result = await Contact.updateOne({_id } , {$set: {... req.body}}); 
        res
            .status(200)
        .send({msg:'contact edited'});
    } catch (error) {
        res
            .status(400)
        .send({msg: 'Can not edit contact '}, error);  
    }
})


// export
module.exports = router;
