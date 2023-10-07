import Head from 'next/head';
import NavBar from '../components/shared/NavBar';
import SideBar from '../components/shared/SideBar';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

interface LayoutProps {
  children: React.ReactNode;
  login?: boolean;
}

export default function Layout({ children, login }: LayoutProps) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className='appWrapper'>
      <Head>
        <title>CFM - Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!login && <NavBar />}
      <main className={!login ? 'mainWrapper' : undefined}>
        <Grid container>
          <Grid item xs={12}>
            {!login && <SideBar />}
            {children}
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
