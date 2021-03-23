const addcontact=async(req,res)=>{
    try {
        const {name,email,phone}=req.body
        if (!name || !email){
            res.send({msg:'il faut mettre le mail'})
            return
        }
        const contact= await Contact.findOne({email})
        if (contact){
            res.send({msg:'e'})
            return
        }
            
        const newuser = new Contact ({
            name,
            email,
            phone
        })
     await   newuser.save()
        res.send({newuser})
    
    
    } catch (error) {
        res.send('eror')
    }}
    const getcontact=async (req,res)=>{
        try {
            const ListeOfcontact= await Contact.find()
            res.send({msg:"ce sont les contact",ListeOfcontact})
        } catch (error) {
            res.send('error')
        }
    }
    const getonecontact=async(req,res)=>{
        try {
            const   oneContact= await Contact.findOne({_id: req.params.id })
            res.send({msg:'one contact',oneContact})
        } catch (error) {
            res.send({msg:"eroor pas de contact"})
        }
            }
     const deletecontact=async(req,res)=>{
        try {
            const {_id}=req.params
           await Contact.findOneAndDelete({_id})
            res.send({msg:"deleted "  })
            
        } catch (error) {
            res.send({msg:"not deleted"})
        }
    }
const updatecontact=async (req,res)=>{
    try {
        const {_id}=req.params
        const contactUpdate =   await Contact.updateOne( {_id} , { $set:  {...req.body}  })

        res.send({msg:"client uptodate",contactUpdate})
    } catch (error) {
        res.send({msg:"not update"})
    }
}
    module.exports=  controllers={addcontact,getcontact,getonecontact,deletecontact,updatecontact}

