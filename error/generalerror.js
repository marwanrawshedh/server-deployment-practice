'use strict'
module.exports=(error,req,res,next)=>{
    const theerror={
        error:500,
        path:req.path,
        body:req.body,
        message: `SERVER ERROR: ${error.message}`
    }
res.status(500).send(theerror)

}

