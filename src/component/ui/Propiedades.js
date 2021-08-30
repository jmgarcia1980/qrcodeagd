import React from 'react'
import { withWidth, Typography } from '@material-ui/core'

export const Propiedades = (props) => {

    const handleClick =()=>{
    console.log( props.withWidth );
    } 

    return (
        <div onClick={ handleClick }>
            <Typography variant= "h6" color= "initial">
                ancho: { props.width }
            </Typography>
        </div>
    )
}

export default withWidth()(Propiedades)
