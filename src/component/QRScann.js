import React, {useState} from 'react';
import {Container, Card, CardContent, makeStyles, Grid} from '@material-ui/core';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';


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
    return (
      <Container className={classes.conatiner}>
            <Card>
                <Link to={`./`}>
                    <h2 className={classes.title}>Apuntar la etiqueta sobre la camara y espere el resultado</h2>
                </Link>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                           <h3>Ajuste QR en el recuadro</h3>
                           <QrReader
                              delay={300}
                              style={{width: '100%'}}
                              onError={handleErrorWebCam}
                              onScan={handleScanWebCam}
                           />
                           <h3>Resultado de la WebCam: {scanResultWebCam}</h3>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
      </Container>
    );
  

}


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
    btn : {
      marginTop: 10,
      marginBottom: 20
    }
}));
