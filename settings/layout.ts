import { LayoutSettings, visibleWhenTopbarCollapsed } from "@andritz/hwf2";
import Router from "next/router";
import { VscPaintcan } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { VscCircleSlash } from "react-icons/vsc";
import { VscTable } from "react-icons/vsc";
import { VscWholeWord } from "react-icons/vsc";

const baseSettings: Partial<LayoutSettings> = {
  sidebarWidth: 300,
  logoSrc: "/img/logo.svg",
  themeSettings: {
    defaultTheme: "light",
    preferSystemDefault: true,
  },
  titleSettings: {
    startTitle: "NextJS Andritz Starter",
    transitionDuration: 100,
  },
  footerSettings: {
    text: `Andritz Hydro © ${new Date().getFullYear()}`,
  },
};

export const layout: LayoutSettings = {
  ...baseSettings,
  menuItemsData: [
    {
      text: "Home",
      icon: VscHome,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/"),
      ...visibleWhenTopbarCollapsed(),
    },
    {
      text: "Styles",
      icon: VscPaintcan,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/styles"),
      ...visibleWhenTopbarCollapsed(),
    },
    {
      text: "Sidebar Item",
      icon: VscLayoutSidebarLeftOff,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/sidebar-route"),
      context: ["sidebar"],
    },
    {
      text: "Topbar Item",
      icon: VscLayoutPanelOff,
      iconProps: {
        sx: {
          transform: "rotate(180deg) translateY(6px)",
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/topbar-route"),
      ...visibleWhenTopbarCollapsed(),
      context: ["topbar"],
    },
    {
      text: "Custom Title",
      icon: VscWholeWord,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/app-title"),
      ...visibleWhenTopbarCollapsed,
    },
    {
      text: "Datagrid",
      icon: VscTable,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/datagrid"),
      ...visibleWhenTopbarCollapsed(),
    },
    {
      text: "Account Menu Item",
      icon: VscLayoutSidebarRightOff,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/account-menu-route"),
      context: ["accountmenu"],
    },
    {
      text: "Disabled Item",
      icon: VscCircleSlash,
      iconProps: {
        sx: {
          fontSize: "1.5rem",
        },
      },
      onClick: () => Router.push("/"),
      disabled: true,
      ...visibleWhenTopbarCollapsed(),
      context: ["topbar", "sidebar", "accountmenu"],
    },
  ],
};
