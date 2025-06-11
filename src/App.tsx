import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./newsfetchingcomponents/News";
import LoginForm from "./signcomponents/Login";
import SignupForm from "./signcomponents/SignupForm";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
