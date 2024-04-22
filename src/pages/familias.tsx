import { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import AddInscritoModal from '../components/AddInscritoModal';
import SearchWorkspace from '../components/SearchWorkspace';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import cfmServices from '../services/cfmApi';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ModalLoading from '../components/ModalLoading';

interface WorkSpace {
  name: string;
}

export default function Home() {
  const [workSpaces, setWorkSpaces] = useState<WorkSpace[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMsg, setAlertMsg] = useState<string | undefined>();
  const [search, setSearch] = useState<string>('');
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [rows, setRows] = useState<any[]>([]);
  const columns: GridColDef[] = [
    // { field: '_id', headerName: 'ID', width: 10 },
    {
      field: 'name',
      headerName: 'Nome',
      width: 400,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'E-mail',
      width: 300,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 160,
      editable: true,
    },
    {
      field: 'want_lunch',
      headerName: 'Quer almoço?',
      width: 140,
      editable: true,
    },
    {
      field: 'is_paid',
      headerName: 'Pago?',
      width: 140,
      editable: true,
        renderCell: (params: GridRenderCellParams) =>
          `${params.row.is_paid === true ? "sim" : "não"}`,
      
    },
    // {
    //   field: '-pay',
    //   headerName: 'Confirmar Pagamento',
    //   sortable: false,
    //   width: 180,
    //   renderCell: (params: GridRenderCellParams) =>
    //     // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //     <Button color='success' variant="contained" onClick={() => handleConfirmPayment(params.id + "")}>PAGO</Button>,
    // },
    // {
    //   field: '-',
    //   headerName: 'Negar Pagamento',
    //   sortable: false,
    //   width: 180,
    //   renderCell: (params: GridRenderCellParams) =>
    //     // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    //     <Button color='warning' variant="contained" onClick={() => handleConfirmNotPaid(params.id + "")}>NÃO PAGO</Button>,
    // },
    {
      field: 'remove',
      headerName: 'Excluir',
      sortable: false,
      width: 180,
      renderCell: (params: GridRenderCellParams) =>
        // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        <Button color='error' variant="contained" onClick={() => handleRemove(params.id + "")}>EXCLUIR</Button>,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const handleConfirmPayment = async (id: string) => {
    setLoading(true)
    const response = await cfmServices.confirmPayment(id);
    await handleGetSubscriptions()
    setLoading(false)
  }

  const handleConfirmNotPaid = async (id: string) => {
    setLoading(true)
    const response = await cfmServices.confirmNotPaid(id);
    await handleGetSubscriptions()
    setLoading(false)
  }

  const handleRemove = async (id: string) => {
    setLoading(true)
    const response = await cfmServices.removeCfm(id);
    await handleGetSubscriptions()
    setLoading(false)
  }

  const handleGetSubscriptions = async () => {
    setLoading(true)
    const response = await cfmServices.getInscricoes();
    
    if(response?.length > 0) {
      setSubscriptions(response.filter( (element: any) => element.event === "Encontro para famílias com Diácono Rômulo da Canção Nova"))
    }
    setLoading(false)
  }

  useEffect(() => {
    handleGetSubscriptions()
  }, [])

  useEffect(() => {
    setRows(subscriptions)
  }, [subscriptions])

  function handleSearch(value: string) {
    // setSearch(value);
    let tempRows = subscriptions.filter(r => r.name.toLowerCase().includes(value))
    setRows(tempRows)
    console.log(value);
  }

  return (
    <Layout
      // @ts-ignore
      workSpaces
    >
      {loading && <ModalLoading open={loading} handleClose={() => setLoading(false)} />}
      <Grid item xs={12} sx={{ mt: 3 }}>
        <Stack direction='row' spacing={3}>
          <SearchWorkspace search={handleSearch} />
          {/* <AddInscritoModal createWorkspace={handleSubscription} /> */}
          {subscriptions?.length > 0 &&
            <Box>
              <Typography fontSize={14}>Total de inscritos: {subscriptions?.length}</Typography>
              <Typography fontSize={14}>Total com almoço: {subscriptions?.length > 0 && subscriptions.filter( (sub: any) => sub.want_lunch === "sim").length}</Typography>
            </Box>}
        </Stack>
        <Typography style={{ marginTop: 10 }} fontSize={20}>Lista de Inscritos no Evento para Famílias com Diácono Rômulo Canuto</Typography>
        <Grid container spacing={12} sx={{ mt: 3, paddingLeft: 10 }}>

          <Box sx={{ height: '100%', width: '100%' }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 100,
                  },
                },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Grid>
      </Grid>
      {showAlert && <Alert sx={{ position: 'absolute', right: 20, bottom: 20 }} onClose={() => setShowAlert(false)} severity="error">{alertMsg}</Alert>}
    </Layout>
  );
}