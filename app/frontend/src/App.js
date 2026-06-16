import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Portfolio from "./pages/Portfolio";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="grain-overlay" aria-hidden="true" />
      <Toaster
        theme="dark"
        position="bottom-right"
        richColors
        toastOptions={{
          style: {
            background: "#0a0a0a",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
