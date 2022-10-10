import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import MaskedInput from "react-text-mask";

const ItemsFormulario = () => {
  const [dataForm, setDataForm] = useState({
    name: '',
    company: '',
    office: '',
    email: '',
    phone: '',
  });

  const [validaForm, setValidaForm] = useState({
    name: false,
    company: false,
    office: false,
    email: false,
    phone: false,
  })

  const [checkboxItems, setCheckboxItems] = useState({
    PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO: '0',
    CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA: '0',
    ATUALIZACAO_DE_NORMAS: '0',
    INTERPRETACAO_JURIDICA: '0',
    ATUALIZACAO_FISCAL: '0',
    CONSULTORIA_EM_LGPD: '0',
  });


  const handlefillingOutForm = (item) => (event) => {
    setDataForm({
      ...dataForm,
      [item]: event.target.value
    });
  }

  const handleSendData = () => {
    console.log(dataForm)
    console.log(validaForm)
    console.log(checkboxItems)
  }

  const phoneNumberMask = [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ];

  return (
    <Grid
      container
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          label="Nome Completo"
          variant="outlined"
          error={validaForm.name}
          onBlur={() => dataForm.name.length < 11 ? setValidaForm({ ...validaForm, name: true }) : setValidaForm({ ...validaForm, name: false })}
          fullWidth
          value={dataForm.name}
          onChange={handlefillingOutForm('name')}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          label="Empresa"
          variant="outlined"
          error={validaForm.company}
          onBlur={() => dataForm.company.length < 4 ? setValidaForm({ ...validaForm, company: true }) : setValidaForm({ ...validaForm, company: false })}
          fullWidth
          value={dataForm.company}
          onChange={handlefillingOutForm('company')}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          label="Cargo"
          variant="outlined"
          error={validaForm.office}
          onBlur={() => dataForm.office.length < 4 ? setValidaForm({ ...validaForm, office: true }) : setValidaForm({ ...validaForm, office: false })}
          fullWidth
          value={dataForm.office}
          onChange={handlefillingOutForm('office')}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
        }}
      >
        <TextField
          type='email'
          label="Email"
          variant="outlined"
          error={validaForm.email}
          onBlur={() => dataForm.email.includes('@') ? setValidaForm({ ...validaForm, email: false }) : setValidaForm({ ...validaForm, email: true })}
          fullWidth
          value={dataForm.email}
          onChange={handlefillingOutForm('email')}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
        }}
      >
        <MaskedInput
          onChange={handlefillingOutForm('phone')}
          style={{
            width: '95%',
            height: 30,
            padding: 10,
            border: '1px solid #ccc',
            borderRadius: 5,
          }}
          mask={phoneNumberMask}
          id="telefone"
          placeholder="Digite seu whatsapp com DDD"
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          marginLeft: 5
        }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO: checkboxItems.PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO === '0' ? '1' : '0' })}
              />
            }
            label="PLANEJAMENTO TRIBUTÁRIO ESTRATEGICO"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA: checkboxItems.CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA === '0' ? '1' : '0' })}
              />
            }
            label="CUMPRIMENTO DE OBRIGAÇÃO ACESSÓRIA"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, ATUALIZACAO_DE_NORMAS: checkboxItems.ATUALIZACAO_DE_NORMAS === '0' ? '1' : '0' })}
              />
            }
            label="ATUALIZAÇÃO DE NORMAS"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, INTERPRETACAO_JURIDICA: checkboxItems.INTERPRETACAO_JURIDICA === '0' ? '1' : '0' })}
              />
            }
            label="INTERPRETAÇÃO JURIDICA"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, ATUALIZACAO_FISCAL: checkboxItems.ATUALIZACAO_FISCAL === '0' ? '1' : '0' })}
              />
            }
            label="ATUALIZAÇÃO FISCAL"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#11979c' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, CONSULTORIA_EM_LGPD: checkboxItems.CONSULTORIA_EM_LGPD === '0' ? '1' : '0' })}
              />
            }
            label="CONSULTORIA EM LGPD "
          />
        </FormGroup>
      </Grid>

      <Grid
        container
        justifyContent='center'
        alignItems='center'
      >
        <Grid
          sx={{
            width: '80%',
            maxWidth: '500px',
            marginTop: 5,
          }}
          item
        >
          <Button
            sx={{
              backgroundColor: '#11979c'
            }}
            variant="contained"
            fullWidth
            onClick={handleSendData}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>

    </Grid>
  );
}

export default ItemsFormulario;