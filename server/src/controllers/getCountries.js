
const getInfo = require('../handlers/getInfo')

const getCountries = async(req,res)=>{
    const infoDB = await getInfo()
    try { 
        return res.status(200).json(infoDB)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = getCountries