import React from 'react';

import { LayoutProviderProps } from '@andritz/hwf2';
import Router from 'next/router';

const HomeI = () => React.createElement('span', null, '🏠');
const ProjectI = () => React.createElement('span', null, '🚀');
const TestI = () => React.createElement('span', null, '👽');
const TestII = () => React.createElement('span', null, '👨‍🚀');
const SettingsI = () => React.createElement('span', null, '⚙️');

export const layout: LayoutProviderProps = {
  menuItemsData: [
    { 
      text: "Hello World", 
      icon: HomeI,
      onClick: () => Router.push('/'),
      context: ["sidebar", "topbar", "accountMenu"],
    },
    { 
      text: "Another Route", 
      icon: ProjectI, 
      onClick: () => Router.push('/another-route'),
      context: ["sidebar", "topbar"],
    },
    { 
      text: "Drawer Route", 
      icon: TestI, 
      onClick: () => Router.push('/another-route'),
      context: ["sidebar"],
    },
    { 
      text: "Topbar Route", 
      icon: TestII, 
      onClick: () => Router.push('/another-route'),
      context: [ "topbar"],
    },
    { 
      text: "Disabled Route", 
      icon: TestII, 
      onClick: () => Router.push('/another-route'),
      context: [ "topbar", "sidebar", "accountMenu"],
      disabled: true,
    },
    { 
      text: "Settings", 
      icon: SettingsI, 
      onClick: () => Router.push('/settings'),
      context: ["accountMenu"],
    },
  ],
  baseSideBarWidth: 240,
  logoSrc: "img/logo.svg",
  footer: { text: `Andritz Hydro © ${new Date().getFullYear()}`, },
};