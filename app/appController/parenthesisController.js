const mongoose = require('mongoose')

/*Libraries*/
const check = require('../libs/check')
const logger = require('../libs/logger')

/*Models*/ 
const ParenthesisModel = mongoose.model('Brackets')

let attempts = 0

let findBalancedParenthesis = (req, res)=>{
    
    let bracesArray = []
    let braces = req.body.parenthesis //get user passed parenthesis data
    for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
            bracesArray.push(braces[i]) //push forward braces to an array
        } else{
            if(bracesArray.length === 0) res.send("No Braces Found")
            let lastValue = bracesArray[bracesArray.length-1]
            if((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
            {
                bracesArray.pop()
            } else {
                break;
            }
            
        }
    
  }
  setTimeout(()=>{
    if(check.isEmpty(bracesArray)){

        if(attempts === 0){
            attempts = 1
        }
        let newBracesData = new ParenthesisModel({
          userName: req.body.userName,
          message: "Success",
          attempts: attempts
        })

        newBracesData.save((err, result)=>{
            if(err){
                logger.error(err, 'parenthesisController: findBalancedParenthesis', 8)
                let apiRsponse = {userName: req.body.userName, message: "Failed to save data", attempts: attempts}
                res.send(apiRsponse)
            } else {
                res.send(result)
            }
        })
    } else {
        let newBracesData = {
            userName: req.body.userName,
            message: "Failed",
            attempts: attempts++
        }
        res.send(newBracesData)
    }
  }, 1000)
  
} // end find balance parenthesis

module.exports = {
    findBalancedParenthesis: findBalancedParenthesis
}