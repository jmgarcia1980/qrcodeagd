import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import { Link } from 'react-router-dom';



export const GeneraQRCode = () => {

    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [scanResultFile, setScanResultFile] = useState('');
    const classes = useStyles();
    const qrRef = useRef(null);
  
  
    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        }catch (error) {
          console.log(error);
        }
    }
    const handleErrorFile = (error) => {
      console.log(error);
    }
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }
    const onScanFile = () => {
      qrRef.current.openImageDialog();
    }

    return (
      <Container className={classes.conatiner}>
            <Card>
                <Link to={`./`}>
                    <h2 className={classes.title}>Genera Codigo QR & Haga Scan QR Code desde archivo</h2>
                </Link>
                <CardContent>

                    <Grid container spacing={2}>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                            <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                            <Button className={classes.btn} variant="contained" 
                              color="primary" onClick={() => generateQrCode()}>Generar QR</Button>
                              <br/>
                              <br/>
                              <br/>
                              {imageUrl ? (
                                <a href={imageUrl} download>
                                    <img src={imageUrl} alt="img"/>
                                </a>) : null}
                        </Grid>
                        <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                          <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Desde Archivo</Button>
                          <QrReader
                            ref={qrRef}
                            delay={300}
                            style={{width: '100%'}}
                            onError={handleErrorFile}
                            onScan={handleScanFile}
                            legacyMode
                          />
                          <h3>Resultado Obtenido: {scanResultFile}</h3>
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

