import { useState } from 'react';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Image from 'next/image';

export default function IconMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Add Data Source
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ borderRadius: 12, mt: 1 }}
      >
        <MenuList>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/document-text.svg" height={24} width={24} alt="Documentos" />
            </ListItemIcon>
            <ListItemText>Documentos</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/ticket.svg" height={24} width={24} alt="Tickets" />
            </ListItemIcon>
            <ListItemText>Ticket de atendimento</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/desktop-computer.svg" height={24} width={24} alt="FAQs" />
            </ListItemIcon>
            <ListItemText>FAQ’s</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/chat.svg" height={24} width={24} alt="Forums" />
            </ListItemIcon>
            <ListItemText>Forums</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/globe-alt.svg" height={24} width={24} alt="Sites" />
            </ListItemIcon>
            <ListItemText>Sites</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/music-note.svg" height={24} width={24} alt="Gravações" />
            </ListItemIcon>
            <ListItemText>Gravações</ListItemText>
          </MenuItem>
          <MenuItem sx={{ py: 1 }}>
            <ListItemIcon>
              <Image src="/images/icons/puzzle.svg" height={24} width={24} alt="Outros" />
            </ListItemIcon>
            <ListItemText>Outros (ReclameAqui)</ListItemText>
          </MenuItem>
          {/* <Divider /> */}
        </MenuList>
      </Menu>
    </>
  );
}
