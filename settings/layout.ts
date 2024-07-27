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

const commonIconProps = {
  sx: {
    fontSize: "1.5rem",
  },
};

export const layout: LayoutSettings = {
  ...baseSettings,
  menuItemsData: [
    {
      text: "Home",
      icon: VscHome,
      iconProps: commonIconProps,
      onClick: () => Router.push("/"),
      ...visibleWhenTopbarCollapsed(),
      divider: (args) => (args?.context === "topbar" ? "after" : undefined),
    },
    {
      group: "Examples",
      text: "Datagrid",
      icon: VscTable,
      iconProps: commonIconProps,
      onClick: () => Router.push("/datagrid"),
      ...visibleWhenTopbarCollapsed(),
    },
    {
      group: "Examples",
      text: "Custom Title",
      icon: VscWholeWord,
      iconProps: commonIconProps,
      onClick: () => Router.push("/app-title"),
      ...visibleWhenTopbarCollapsed(),
    },
    {
      group: "Menu Items",
      text: "Account Menu Item",
      icon: VscLayoutSidebarRightOff,
      iconProps: commonIconProps,
      onClick: () => Router.push("/account-menu-route"),
      context: ["accountmenu"],
    },
    {
      group: "Menu Items",
      text: "Sidebar Item",
      icon: VscLayoutSidebarLeftOff,
      iconProps: commonIconProps,
      onClick: () => Router.push("/sidebar-route"),
      context: ["sidebar"],
    },
    {
      group: "Menu Items",
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
      group: "Menu Items",
      text: "Disabled Item",
      icon: VscCircleSlash,
      iconProps: commonIconProps,
      onClick: () => Router.push("/"),
      disabled: true,
      ...visibleWhenTopbarCollapsed(),
      context: ["topbar", "sidebar", "accountmenu"],
    },
    {
      group: "Auxiliar",
      text: "Styles",
      icon: VscPaintcan,
      iconProps: commonIconProps,
      onClick: () => Router.push("/styles"),
      ...visibleWhenTopbarCollapsed(),
    },
  ],
};
