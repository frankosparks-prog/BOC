import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollTop";
import VisitorTracker from "./components/VisitorTracker";
import Creators from "./pages/Creators";
import DashboardPreview from "./pages/DashboardPreview";
import Platforms from "./pages/Platforms";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import SecTrust from "./pages/SecTrust";
import NotFound from "./pages/NotFound";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import GetStarted from "./pages/GetStarted";
import PressKit from "./pages/Press";



function AppLayout() {

  return (
    <>
      <ScrollToTop />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0a192f",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      />
      <VisitorTracker />

      <Navbar />
      <main className="min-h-screen pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/dashbord-preview" element={<DashboardPreview />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/products" element={<Products />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/security" element={<SecTrust />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/press" element={<PressKit />} />
      <Route path="*" element={<NotFound />} />


    </Routes>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
