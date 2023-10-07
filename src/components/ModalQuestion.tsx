import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import * as yup from 'yup';

interface ModalQuestionProps {
  open: boolean;
  handleClose: () => void;
}

export default function ModalQuestion({ open, handleClose }: ModalQuestionProps) {

  const schema = yup.object().shape({
    title: yup.string().required('Digite o nome do workspace'),
  });

  return (
    <>
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
                Texto de teste para Modal.
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className='dialogFooter'>
          <Button variant="text" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" type="submit" form="workspaceForm">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
