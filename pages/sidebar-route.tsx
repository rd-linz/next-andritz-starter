import { BaseRouteComponent } from "pages-components/example-routes";

const definition = `const menuItem = {
  text: "Sidebar Item", 
  icon: VscLayoutSidebarLeftOff,
  iconProps: {
    sx: {
      fontSize: "1.5rem",
    },
  },
  onClick: () => Router.push("/sidebar-route"),
  context: ["sidebar"],
}`;

export const Page = () => {
  return <BaseRouteComponent location="sidebar" definition={definition} />;
};

export default Page;
