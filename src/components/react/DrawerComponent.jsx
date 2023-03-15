import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import { Box } from '@mui/system';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import React from 'react';

import ListItemIcon from '@mui/material/ListItemIcon';

export const isDrawerOpen = atom(false);
export const anchorEl = atom('left');

const DrawerComponent = () => {
  const open = useStore(isDrawerOpen);
  const anchor = useStore(anchorEl);

  const iOS =
    typeof navigator !== 'undefined' &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <SwipeableDrawer
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={open}
      anchor={anchor}
    >
      <Box
        role="presentation"
        onClick={() => isDrawerOpen.set(!isDrawerOpen.get())}
        onKeyDown={() => isDrawerOpen.set(!isDrawerOpen.get())}
      >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* import and use my own icons of design */}
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default DrawerComponent;
