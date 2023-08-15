export const  SEARCH_COUNTRY = 'SEARCH_COUNTRY'
export const  ALL_COUNTRY = 'ALL_COUNTRY'
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY'
export const GET_ACTIVITY ='GET_ACTIVITY'
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY'
export const DETAIL = 'DETAIL'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'


export const search = (name) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(`http://localhost:3001/countries/name?name=${name}`)
            const data = await response.json()
            return dispatch({
                type:SEARCH_COUNTRY,
                payload: data
            })
        } catch (error) {
            console.log('error:',error)
        }
    }
}

export const allCountries = () =>{
    return async(dispatch)=>{
        try {
            const response = await fetch('http://localhost:3001/countries')
            const data = await response.json()
            return dispatch({
                type:ALL_COUNTRY,
                payload:data
            })
        } catch (error) {
            console.log('error:',error)
        }
    }
}

export const filter = (continent,activityFilter) =>{
    return{
        type:FILTER,
        payload:{
            continent:continent,
            activityFilter:activityFilter
        }
    }
}

export const orderCountry = (order) =>{
    return{
        type:ORDER,
        payload:order
    }
}

export const createActivity =(activities)=>{
    return async(dispatch)=>{
        try {
            const response = await fetch('http://localhost:3001/activities',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(activities)
            })

            if (!response.ok) {
                throw new Error('Failed to create activity');
            }

            const activityCreated = await response.json();
            console.log(activityCreated);

            dispatch({
                type: CREATE_ACTIVITY,
                payload: activityCreated,
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const getActivity = () =>{
    return async(dispatch) => {
        try {
            const response = await fetch('http://localhost:3001/activities')
            const data = await response.json()
            return dispatch({
                type:GET_ACTIVITY,
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteActivity = (name) =>{
    return async(dispatch)=>{
        try {
            const response = await fetch(`http://localhost:3001/activities/?name=${name}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
            if(!response.ok) throw new Error('No se pudo borrar la actividad')
            const data = await response.json()

            return dispatch({
                type:DELETE_ACTIVITY,
                payload:data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCountryDetail=(id)=>{
    return async(dispatch)=>{
        try{
            const response = await fetch(`http://localhost:3001/countries/${id}`)
            const data = await response.json()
            return dispatch({
                type:DETAIL,
                payload:data
            })
        }catch(error){
            console.log(error)
        }
    }
}



