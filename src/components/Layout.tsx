import NavBar from "@/components/NavBar";

type LayoutProps = {
  children: JSX.Element;
};
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
