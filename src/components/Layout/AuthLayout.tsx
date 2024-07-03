import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default AuthLayout;
