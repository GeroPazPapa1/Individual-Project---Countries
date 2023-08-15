const {Activity} = require('../db')

const HandleDeleteActivity = async(name) =>{
    try {
        const activity = await Activity.findOne({ where: { name } });
        
        if (!activity) {
            throw new Error('Activity not found');
        }

        await activity.destroy();
        console.log('Actividad eliminada');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = HandleDeleteActivity