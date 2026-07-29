import Header from "./Header";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />

      <main className="page-layout__main">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;