import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/HomePage";
import SliProjectPage from "./pages/SliProjectPage";
import FrameProjectPage from "./pages/FrameProjectPage";
import MinimalProjectPage from "./pages/MinimalProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects/sli-scientific"
          element={<SliProjectPage />}
        />
        <Route
          path="/projects/frame-design-system"
          element={<FrameProjectPage />}
        />
        <Route
          path="/projects/minimal-ecommerce"
          element={<MinimalProjectPage />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;