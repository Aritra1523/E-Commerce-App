import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./Layout.css"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="banner">
  <img src="/banner.jpg" alt="banner" className="banner-img" />
</div>
      <div>{children}</div>
      <Footer />
    </>
  );
};
export default Layout;
