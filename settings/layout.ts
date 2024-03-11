import React from 'react';

import { LayoutProviderProps } from '@andritz/hwf2';
import Router from 'next/router';

const HomeI = () => React.createElement('span', null, '🏠');
const ProjectI = () => React.createElement('span', null, '🚀');

export const layout: LayoutProviderProps = {
  menuItemsData: [
    { 
      text: "Hello World", 
      icon: HomeI,
      onClick: () => Router.push('/'),
      visible: (context: string) => context === "sidebar"
    },
    { 
      text: "Another Route", 
      icon: ProjectI, 
      onClick: () => Router.push('/another-route'), 
      visible: (context: string) => context === "sidebar" 
    },
  ],
  baseSideBarWidth: 240,
  logoSrc: "img/logo.svg",
  footer: { text: `Andritz Hydro © ${new Date().getFullYear()}`, },
};