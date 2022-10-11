import React, { useState, useEffect } from 'react';
import {
  Grid,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
  CircularProgress,
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


  const [dialogs, setDialogs] = useState({
    consentForm: false,
    sucess: false,
    warning: false,
  });

  const [flg_acordo, setFlg_acordo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [returnMessage, setReturnMessage] = useState('');
  const [alertMessageTitle, setAlertMessageTitle] = useState('Aviso!');
  const [alertMessage, setAlertMessage] = useState('');

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

  const handlefillingOutForm = (item) => (event) => {
    setDataForm({
      ...dataForm,
      [item]: event.target.value
    });
  }


  const handleValidData = () => {
    if (
      dataForm.company === '' ||
      dataForm.email === '' ||
      dataForm.name === '' ||
      dataForm.office === '' ||
      dataForm.phone === ''
    ) {
      setDialogs({
        ...dialogs,
        warning: true
      });
      setAlertMessage('Preencha os dados obrigatórios')
    } else if (
      checkboxItems.ATUALIZACAO_DE_NORMAS === '0' &&
      checkboxItems.ATUALIZACAO_FISCAL === '0' &&
      checkboxItems.CONSULTORIA_EM_LGPD === '0' &&
      checkboxItems.CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA === '0' &&
      checkboxItems.INTERPRETACAO_JURIDICA === '0' &&
      checkboxItems.PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO === '0'
    ) {
      setDialogs({
        ...dialogs,
        warning: true
      });
      setAlertMessage('Selecone ao menos uma produto')
    } else {
      setDialogs({ ...dialogs, consentForm: true })
    }
  }

  const handleSendData = async () => {
    let numsStr = dataForm.phone.replace(/[^0-9]/g, '');
    let numeroDeWhatsapp = parseInt(numsStr);
    let dados = {
      nome: dataForm.name,
      empresa: dataForm.company,
      cargo: dataForm.office,
      email: dataForm.email,
      wpp: numeroDeWhatsapp,
      PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO: checkboxItems.PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO,
      CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA: checkboxItems.CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA,
      ATUALIZACAO_DE_NORMAS: checkboxItems.ATUALIZACAO_DE_NORMAS,
      INTERPRETACAO_JURIDICA: checkboxItems.INTERPRETACAO_JURIDICA,
      ATUALIZACAO_FISCAL: checkboxItems.ATUALIZACAO_FISCAL,
      CONSULTORIA_EM_LGPD: checkboxItems.CONSULTORIA_EM_LGPD,
      flg_acordo: flg_acordo ? '1' : '0',
    }
    setDialogs({
      ...dialogs,
      sucess: true
    });
    setLoading(true);
    await delay(3);
    setReturnMessage('Você receberá um whatsapp com o seu número de sorteio e os dados sobre o sorteio… BOA SORTE !!!');
    setLoading(false);

    console.log(dados)
  }

  const finishSession = () => {
    window.location.reload();
  }

  const handleOpenDialogs = (item) => (value) => {
    setDialogs({
      ...dialogs,
      [item]: true
    });
  }

  const handleCloseDialogs = (item) => (value) => {
    setDialogs({
      ...dialogs,
      [item]: false
    });
  }

  const delay = (tempo) => new Promise(r => setTimeout(r, tempo * 1000));

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
                style={{ color: '#1d54ff' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO: checkboxItems.PLANEJAMENTO_TRIBUTARIO_ESTRATEGICO === '0' ? '1' : '0' })}
              />
            }
            label="PLANEJAMENTO TRIBUTÁRIO ESTRATEGICO"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#1d54ff' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA: checkboxItems.CUMPRIMENTO_DE_OBRIGACAO_ACESSORIA === '0' ? '1' : '0' })}
              />
            }
            label="CUMPRIMENTO DE OBRIGAÇÃO ACESSÓRIA"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#1d54ff' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, ATUALIZACAO_DE_NORMAS: checkboxItems.ATUALIZACAO_DE_NORMAS === '0' ? '1' : '0' })}
              />
            }
            label="ATUALIZAÇÃO DE NORMAS"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#1d54ff' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, INTERPRETACAO_JURIDICA: checkboxItems.INTERPRETACAO_JURIDICA === '0' ? '1' : '0' })}
              />
            }
            label="INTERPRETAÇÃO JURIDICA"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#1d54ff' }}
                onChange={() => setCheckboxItems({ ...checkboxItems, ATUALIZACAO_FISCAL: checkboxItems.ATUALIZACAO_FISCAL === '0' ? '1' : '0' })}
              />
            }
            label="ATUALIZAÇÃO FISCAL"
          />
          <FormControlLabel
            control={
              <Checkbox
                style={{ color: '#1d54ff' }}
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
              backgroundColor: '#1d54ff'
            }}
            variant="contained"
            fullWidth
            onClick={handleValidData}
          >
            Enviar
          </Button>
        </Grid>
      </Grid>

      <Dialog
        open={dialogs.consentForm}
        onClose={handleCloseDialogs('consentForm')}
      >
        <DialogTitle>
          Declaração de privacidade e proteção de dados pessoais
        </DialogTitle>
        <DialogContent>
          <Grid
            container
            xs={12}
          >
            <Grid item>
              <Typography variant='p' component='div'>
                Coletamos seus dados com a finalidade de realizar promoções
                e enviar informações ou realizar contato a respeito de nossas promoções,
                produtos e serviços que realizamos.
                Armazenamos seus dados pessoais de forma segura e não os compartilhamos com terceiros.
                A qualquer tempo, você poderá solicitar seu descredenciamento ou
                atualização de seus dados nas plataformas WhatsApp e e-mail Marketing
                que utilizamos ou através do canal do titular, disponibilizado em
                nosso site, em
                <a
                  style={{
                    color: '#1d54ff',
                    textDecoration: 'none',
                  }}
                  target="_blank"
                  href='https://beelegal.com.br/'
                >
                  : beelegal.com.br
                </a>
              </Typography>
            </Grid>
            <Grid
              container
              item
              justifyContent='center'
              alignItems='center'
              style={{ marginTop: 15 }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    style={{ color: '#1d54ff' }}
                    checked={flg_acordo}
                    onChange={() => setFlg_acordo(!flg_acordo)}
                  />
                }
                label="Estou de acordo, desejo continuar"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseDialogs('consentForm')} style={{ color: '#fff', backgroundColor: '#f00' }} autoFocus>
            Cancelar
          </Button>
          <Button disabled={!flg_acordo} variant="contained" onClick={handleSendData} style={{ color: '#fff', backgroundColor: flg_acordo ? '#1d54ff' : '#ccc' }} >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={dialogs.sucess}
        onClose={handleCloseDialogs('sucess')}
      >
        <DialogTitle>
          {loading ? 'Salvando dados' : 'ATENÇÃO!'}
        </DialogTitle>
        <DialogContent>
          {
            loading ?
              <Grid
                container
                justifyContent='center'
                alignItems='center'
                direction="column"
              >
                <DialogContentText >
                  <CircularProgress style={{ color: '#1d54ff' }} />
                </DialogContentText>
              </Grid>
              :
              <DialogContentText >
                {returnMessage}
              </DialogContentText>
          }
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={finishSession} style={{ display: loading ? 'none' : 'block', color: '#fff', backgroundColor: '#1d54ff' }} autoFocus >
            Fechar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={dialogs.warning}
        onClose={handleCloseDialogs('warning')}
      >
        <DialogTitle>
          {alertMessageTitle}
        </DialogTitle>
        <DialogContent>
          {alertMessage}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseDialogs('warning')} style={{ display: loading ? 'none' : 'block', color: '#fff', backgroundColor: '#1d54ff' }} autoFocus >
            Ok
          </Button>
        </DialogActions>
      </Dialog>

    </Grid>
  );
}

export default ItemsFormulario;