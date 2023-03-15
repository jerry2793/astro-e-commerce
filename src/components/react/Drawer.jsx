import { atom } from 'nanostores';
import React from 'react';

export const isDrawerOpen = atom(false);
export const toggleDrawer = isDrawerOpen.set(!isDrawerOpen.value);

const Drawer = () => {
  return <div>Drawer</div>;
};

export default Drawer;
