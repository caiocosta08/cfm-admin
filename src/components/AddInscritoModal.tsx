import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';

interface AddInscritoProps {
  createWorkspace: (values: { name: string, phone: string, email: string }) => void;
}

export default function AddInscrito({ createWorkspace }: AddInscritoProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do inscrito'),
    phone: yup.string().required('Digite o telefone do inscrito'),
    email: yup.string().required('Digite o email do inscrito'),
  });

  const handleSubmit = (values: { name: string, phone: string, email: string }, props: any) => {
    createWorkspace(values);
    props.resetForm();
    handleClose();
  };

  return (
    <>
      <Button variant="contained" onClick={handleShow} className='primaryButton'>
        Adicionar Inscrito
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px"
            },
          },
        }}
      >
        <DialogContent>
          <Grid container>
            <Grid item xs={12}>
              <Box p={3}>
                <Formik
                  initialValues={{
                    name: '',
                    phone: '',
                    email: ''
                  }}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                >
                  {(props) => {
                    const { name, phone, email } = props.values;
                    return (
                      <Form id="workspaceForm">
                        <TextField
                          label="Digite o nome"
                          name="name"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={name}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={<ErrorMessage name="name" />}
                          // @ts-ignore
                          error={props.errors.name && props.touched.name}
                          required
                        />
                        <TextField
                          label="Digite o e-mail"
                          name="email"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={email}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={<ErrorMessage name="name" />}
                          // @ts-ignore
                          error={props.errors.name && props.touched.name}
                          required
                        />
                        <TextField
                          label="Digite o telefone"
                          name="phone"
                          fullWidth
                          variant="outlined"
                          margin="dense"
                          value={phone}
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          helperText={<ErrorMessage name="name" />}
                          // @ts-ignore
                          error={props.errors.name && props.touched.name}
                          required
                        />
                      </Form>
                    );
                  }}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='dialogFooter'>
          <Button variant="text" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit" form="workspaceForm">
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
