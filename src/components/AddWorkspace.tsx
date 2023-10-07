import { useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from 'yup';

interface AddWorkspaceProps {
  createWorkspace: (values: { name: string }) => void;
}

export default function AddWorkspace({ createWorkspace }: AddWorkspaceProps) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do workspace'),
  });

  const handleSubmit = (values: { name: string }, props: any) => {
    createWorkspace(values);
    props.resetForm();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Stack spacing={2}>
          <Image src="/images/addWorkspace.svg" height={247} width={247} alt="Criar Workspace" />
          <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
            Crie um Workspace
          </Typography>
          <Typography
            // @ts-ignore
            variant="p"
            gutterBottom
            sx={{ maxWidth: 265, textAlign: 'center' }}
          >
            Crie um workspace para compartilhar com seu time e criar experiências incríveis de atendimento
          </Typography>
          <Button variant="contained" onClick={handleShow}>
            Criar Workspace
          </Button>
        </Stack>
      </Grid>

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
                  }}
                  validationSchema={schema}
                  onSubmit={handleSubmit}
                >
                  {(props) => {
                    const { name } = props.values;
                    return (
                      <Form id="workspaceForm">
                        <TextField
                          label="Create Workspace"
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
