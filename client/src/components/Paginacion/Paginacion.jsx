import React, { useEffect, useState } from 'react'

import style from './Paginacion.module.css'

const buttonRight = '../../../public/arrow-right.png'
const buttonLeft = '../../../public/arrow.png'

function Paginacion({max,pages,setPages,country}) {
    const [input,setInput] = useState(1)


    const nextPage = () =>{
        setInput(parseInt(input + 1))
        setPages(parseInt(pages + 1))
    }

    const prevPage = () =>{
        setInput(parseInt(input - 1))
        setPages(parseInt(pages - 1))
    }

    useEffect(()=>{
        setInput(1)
    },[country])

    const onKey = (event) =>{
        if(event.keyCode == 13){
            setPages(parseInt(event.target.value))
            if(parseInt(event.target.value ) < 1 || parseInt(event.target.value ) > Math.ceil(max) || isNaN(event.target.value ) ){
                setInput(1)
                setPages(1)
            }else{
                setPages(parseInt(event.target.value))
            }
        }
    }

    const onChange = (event) =>{
        setInput(event.target.value)
    }

    return (
        <div className={style.Container}>
            {pages == 1 ? 
            <button  className={style.disabled}> 
                <img src={buttonLeft} className={style.image} /> 
            </button> 
            : 
            <button onClick={prevPage} className={style.button}>
                <img src={buttonLeft} className={style.image} />
            </button>}
            <input name='pages' autoComplete='off' value={input} className={style.Input} onKeyDown={onKey} onChange={onChange}/>
            <p  className={style.number}> DE {max}</p>
            {pages == max ? 
            <button  className={style.disabled}> 
                <img src={buttonRight} className={style.image} /> 
            </button> 
            :
            <button onClick={nextPage} className={style.button}>
                <img src={buttonRight} className={style.image} />
            </button>}
        </div>
    )
}

export default Paginacion