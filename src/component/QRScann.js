import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, Button} from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';

import '../App.css';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';
// import { Propiedades } from './ui/Propiedades';


const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:  'center',
    background: '#3f51b5',
    color: '#fff',
    padding: 20
  },
  title1:{
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      // background: '#fb61bb',
      color: '#fff',
      padding: 10,
      width: '80%',
      height: '80%',
      fontSize: `calc(6px + 2vmin)`
      // width: `calc(40% - ${100}px)`
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      justifyContent: 'center',
      alignItems:  'center',
      background: '#3f51b5',
      color: '#fff',
      padding: 10,
      width: '100%'
    }
  },
  btn : {
    marginTop: 10,
    marginBottom: 20,
    background: '#3f9db5',
    fontSize: `calc(1px + 2vmin)`,
    width: '60%'
  }

}));


export const QRScann = () => {

    const [scanResultWebCam, setScanResultWebCam] =  useState('');
    const classes = useStyles();
 
    const handleErrorWebCam = (error) => {
      console.log(error);
    }
    const handleScanWebCam = (result) => {
      if (result){
          setScanResultWebCam(result);
      }
    }

    const handleClickSend =()=>{
      console.log('paso', scanResultWebCam)
    }

    //https://www.npmjs.com/package/react-qr-scanner
    // document.screen ("Su resolución es de: " + screen.height + "x" + screen.width);

    return (
      <Container className={classes.conatiner}>
            {/* <Propiedades /> */}
            <Card>
                <Link to={`./`}>
                    <h2 className={classes.title1}>Apuntar la etiqueta sobre la camara y espere el resultado</h2>
                </Link>
                <CardContent>
                    <Grid container spacing={2} direction="column">
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                           <h3
                              className= "titulos"
                           >
                             Ajuste el codigo QR en el recuadro</h3>
                           <QrReader
                              delay={300}
                              style={{width: '100%'}}
                              // style={myStyle}
                              onError={handleErrorWebCam}
                              onScan={handleScanWebCam}
                              // className="qrcode"
                           />
                          <h3 
                            className= "titulos" 
                          >
                              Resultado WebCam -  {scanResultWebCam}</h3>
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                            // endIcon={<Icon>send</Icon>}
                            onClick= { handleClickSend }
                          >
                            Ejecutar resultado
                          </Button>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
      </Container>
    );
  

}

