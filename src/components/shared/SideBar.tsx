import Link from 'next/link';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ArticleIcon from '@mui/icons-material/Article';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image';
import colors from '../../styles/_colors.module.scss';
import MoneyBox from '@mui/icons-material/LocalMall';
import { AccountBalance, History, Home, Person, Settings } from '@mui/icons-material';

interface Route {
  text: string;
  url: string;
  icon: string;
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const routes: Route[] = [
    { text: 'Home', url: '/home', icon: 'home' },
    { text: 'Tannus', url: '/tannus', icon: 'tannus' },
  ];

  const LinkContainer = (route: Route) => (
    <Link href={route.url}>
      <Tooltip title={route.text} placement='top'>
        <ListItemIcon
          sx={{
            justifyContent: 'center',
            color: 'white'
          }}
        >
          { route.icon === 'home' && <Home />}
          { route.icon === 'tannus' && <Person />}
        </ListItemIcon>
      </Tooltip>
    </Link>
  );

  return (
    // <Box sx={{ position: 'absolute', top: 106 }}>
    <Box sx={{ position: 'absolute' }}>
      <Drawer
        variant="permanent"
        sx={{ '& .MuiDrawer-paper': { pt: '5vh', display: 'flex', height: '100vh', top: 0, backgroundColor: '#2e3851' } }}
        PaperProps={{
          sx: {
            backgroundColor: '#2e3851'
          }
        }}
      >
        <List>
          {routes.map((route, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 0,
                  mb: 2
                }}
              >
                <LinkContainer {...route} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <ListItemButton
          sx={{
            mt: 'auto',
            minHeight: 48,
            position: 'absolute',
            bottom: 0,
            px: 0,
            mb: 2
          }}
        >
          <Tooltip title='Sair' placement='top'>
            <ListItemIcon
              sx={{
                justifyContent: 'center',
                color: 'white'
              }}
            >
            <LinkContainer text="Logout" url="logout" icon="logout" />
            </ListItemIcon>
          </Tooltip>
        </ListItemButton>
      </Drawer>
    </Box>
  );
}
