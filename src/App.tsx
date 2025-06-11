import Header from "./components/Header";
import Footer from "./components/Footer";
import News from "./newsfetchingcomponents/News";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
