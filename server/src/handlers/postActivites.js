const {Activity} = require('../db.js')

const postActivity = async(name,difficulty,duration,season,CountryId) =>{
    try{
        const[activities,created] = await Activity.findOrCreate({
            where:{name,difficulty,duration,season}
        })
        console.log(created)
        await activities.setCountries(CountryId)
        await activities.save()
        return activities
    }catch(error){
        console.log('Activity not found or invalid',error)
    }
}

module.exports = postActivity