import React from 'react';
import {
  Grid,
  Typography,
} from '@mui/material';
import ItemsFormulario from './itemsFormulario';


const Formulario = () => {
  const logo = 'https://static.wixstatic.com/media/f6fbd3_178686617a354bf090faacf5f8c34eba~mv2.png/v1/crop/x_0,y_312,w_1182,h_572/fill/w_260,h_126,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20PNG_Prancheta%201.png';
  return (
    <Grid
      container
      direction='column'
      // spacing={2}
      sx={{
        backgroundColor: '#fff',
        width: '90%',
        // height: 700,
        borderRadius: 2,
        marginTop: 5,
        paddingBottom: 2,
      }}
    >
      <Grid
        container
        justifyContent='center'
        sx={{
          height: 120,
        }}
      >
        <img src={logo} />
      </Grid>

      <Grid
        item
        sx={{
          marginLeft: 3,
          marginBottom: 5,
        }}
      >
        <Typography variant='h5'>
          Formulário
        </Typography>
      </Grid>
      <ItemsFormulario />
    </Grid>
  );
}

export default Formulario;