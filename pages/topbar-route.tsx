import { BaseRouteComponent } from "pages-components/example-routes";

const definition = `const menuItem = {
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
}`;

export const Page = () => {
  return <BaseRouteComponent location="topbar" definition={definition} />;
};

export default Page;
