import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import { CircularProgress } from '@mui/material';

interface ModalLoadingProps {
  open: boolean;
  handleClose: () => void;
}

export default function ModalLoading({ open, handleClose }: ModalLoadingProps) {

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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}
