import { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import { settingsUpdateLang } from '../../store/actions/users/settings'
import { useTranslation } from 'react-i18next';
const settingsConfig: string[] = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState<string | any>(null);
  const [switchOn, setSwitchOn] = useState<boolean | any>(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { user, settings } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation()

  return (
    <AppBar className='navbar' position="static" elevation={0}>
      <Container
        // @ts-ignore
        maxWidth="none"
      >
        <Toolbar
          disableGutters
        >
          <Box sx={{
            ml: { sm: 0, md: 3 },
          }}>
            <Image src="/images/logo-2.png" height={50} width={50} style={{ marginLeft: 20 }} alt="logo_cfm" />
            {/* <Image src="/images/logo.png" height={4 0} width={160} style={{ marginLeft: 20 }} alt="Cogni2" /> */}
          </Box>

          <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

          {/* <Stack direction="row" className="dropdownWrapper" sx={{ alignItems: 'center' }}>
            <Stack sx={{ alignItems: 'start', marginRight: 5 }}>
              <Typography style={{ color: '#e06a03' }} fontSize={18} fontWeight={'bold'}>$9,992.42</Typography>
              <Typography style={{ color: '#ffffff' }} fontSize={12}>Saldo</Typography>
            </Stack>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ textTransform: 'none', color: 'white', backgroundColor: '#2cac40', marginRight: 3 }}
            >
              <Typography style={{ color: '#ffffff' }} fontSize={12}>Depositar</Typography>
            </Button>
          </Stack> */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleOpenUserMenu}
              sx={{ textTransform: 'none', color: 'white' }}
            >
              <Stack direction="row" className="dropdownWrapper" sx={{ alignItems: 'center' }}>
                <Avatar className="navbarAvatar" sx={{ mr: 2 }} alt="Remy Sharp" src="/static/images/avatar/2.jpg" />

                <Stack sx={{ alignItems: 'start' }}>
                  <Typography style={{ color: '#ffffff' }} fontSize={18} fontWeight={'bold'}>John Doe</Typography>
                  <Typography style={{ color: '#ffffff' }} fontSize={12}>User</Typography>
                </Stack>
              </Stack>
            </Button>
            <Menu
              sx={{ mt: '70px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settingsConfig.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
