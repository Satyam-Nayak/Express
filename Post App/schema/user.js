const {model,schema}=require('mongoose')







userSchema.method.generateToken = async function(){
    return JsonWebTokenError.sign(
        
    )
}