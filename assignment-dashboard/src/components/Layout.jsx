import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
