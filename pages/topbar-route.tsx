import { BaseRouteComponent } from "./sidebar-route";

export const Page = () => {
  return (
    <BaseRouteComponent
      location="topbar"
      definition={`{
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
}`}
    />
  );
};

export default Page;
