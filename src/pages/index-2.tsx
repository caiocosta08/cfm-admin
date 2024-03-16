import { useEffect, useState } from 'react';
import Layout from '../layouts/layout';
import AddWorkspaceModal from '../components/AddWorkspaceModal';
import SearchWorkspace from '../components/SearchWorkspace';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import cfmServices from '../services/cfm';
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
    { field: '_id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Nome',
      width: 300,
      editable: true,
    },
    {
      field: 'phone',
      headerName: 'Telefone',
      width: 150,
      editable: true,
    },
    {
      field: 'is_paid',
      headerName: 'Pagou?',
      type: 'boolean',
      width: 110,
      editable: true,
    },
    {
      field: '-pay',
      headerName: 'Confirmar Pagamento',
      sortable: false,
      width: 180,
      renderCell: (params: GridRenderCellParams) =>
        // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        <Button color='success' variant="contained" onClick={() => handleConfirmPayment(params.id + "")}>PAGO</Button>,
    },
    {
      field: '-',
      headerName: 'Negar Pagamento',
      sortable: false,
      width: 180,
      renderCell: (params: GridRenderCellParams) =>
        // `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        <Button color='warning' variant="contained" onClick={() => handleConfirmNotPaid(params.id + "")}>NÃO PAGO</Button>,
    },
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
    setSubscriptions(response)
    setLoading(false)
  }

  const handleSubscription = async (values: { name: string, phone: string }) => {
    setLoading(true)
    const response = await cfmServices.subscription(values.name, values.phone);
    setSubscriptions(response)
    setLoading(false)
  }

  const handleConfirmNotPaid = async (id: string) => {
    setLoading(true)
    const response = await cfmServices.confirmNotPaid(id);
    setSubscriptions(response)
    setLoading(false)
  }

  const handleRemove = async (id: string) => {
    setLoading(true)
    const response = await cfmServices.remove(id);
    setSubscriptions(response)
    setLoading(false)
  }

  const handleGetSubscriptions = async () => {
    setLoading(true)
    const response = await cfmServices.getInscricoes();
    setSubscriptions(response)
    setLoading(false)
  }

  useEffect(() => {
    handleGetSubscriptions()
  }, [])

  useEffect(() => {
    setRows(subscriptions)
  }, [subscriptions])

  function handleCreateWorkspace(value: WorkSpace) {
    setWorkSpaces([...workSpaces, value]);
  }

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
          <AddWorkspaceModal createWorkspace={handleSubscription} />
          {subscriptions?.length > 0 &&
            <Box>
              <Typography fontSize={14}>Total de inscritos: {subscriptions?.length}</Typography>
              <Typography fontSize={14}>Total de pagos: {subscriptions?.filter(s => s.is_paid).length}</Typography>
            </Box>}
        </Stack>
        <Typography style={{ marginTop: 10 }} fontSize={20}>Lista de inscritos no Evento Quem como Deus</Typography>
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