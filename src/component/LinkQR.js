import React from 'react';
import { Link } from 'react-router-dom';

export const LinkQR = () => {

    const link = 'https://www.ole.com.ar/seleccion/argentina-brasil-hora-tv-vivo_0_siK6S2uUb.html';
    

    return (        
        <Link to='/link'>
            <div>
            <h1> Link </h1>
                <br></br>
                <a
                    href={ link }
                >
                </a>
                <h3>{ link } </h3>
            </div>
        </Link>
    )
}
