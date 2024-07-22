import { LayoutProviderProps } from "@andritz/hwf2";
import Router from "next/router";
import { VscPaintcan } from "react-icons/vsc";
import { VscHome } from "react-icons/vsc";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import { VscLayoutPanelOff } from "react-icons/vsc";
import { VscCircleSlash } from "react-icons/vsc";
import { VscTable } from "react-icons/vsc";

export const layout: LayoutProviderProps = {
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
      context: ["sidebar", "topbar"],
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
      context: ["sidebar", "topbar"],
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
      context: ["topbar"],
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
      context: ["sidebar", "topbar"],
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
      context: ["topbar", "sidebar", "accountmenu"],
      disabled: true,
    },
  ],
  sidebarWidth: 300,
  logoSrc: "/img/logo.svg",
  footer: {
    text: `Andritz Hydro © ${new Date().getFullYear()}`,
  },
};
