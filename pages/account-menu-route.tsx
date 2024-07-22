import { BaseRouteComponent } from "pages-components/example-routes";

const definition = `const menuItem = {
  text: "Account Menu Item",
  icon: VscLayoutSidebarRightOff,
  iconProps: {
    sx: {
      fontSize: "1.5rem",
    },
  },
  onClick: () => Router.push("/account-menu-route"),
  context: ["accountmenu"],
}`;

export const Page = () => {
  return <BaseRouteComponent location="account menu" definition={definition} />;
};

export default Page;
