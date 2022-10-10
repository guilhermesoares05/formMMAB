import React from 'react';
import {
  Grid,

} from '@mui/material';
import Formulario from './pages/formulario';

const App = () => {
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{
        paddingBottom: 5,
        backgroundImage: 'linear-gradient(to bottom, #11979c, #073d42 )',
      }}
    >
      <Formulario />
    </Grid>
  );
}

export default App;