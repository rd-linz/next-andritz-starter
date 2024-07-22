import { BaseRouteComponent } from "./sidebar-route";

export const Page = () => {
  return (
    <BaseRouteComponent
      location="account menu"
      definition={`{
  text: "Account Menu Item",
  icon: VscLayoutSidebarRightOff,
  iconProps: {
    sx: {
      fontSize: "1.5rem",
    },
  },
  onClick: () => Router.push("/account-menu-route"),
  context: ["accountmenu"],
}`}
    />
  );
};

export default Page;
