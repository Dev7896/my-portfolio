import Header from "./components/Header";
import Home from "./components/Home";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
        <Aboutme />
        <Experience />
        <Projects/>
      </main>
      <Footer />
    </>
  );
}

export default App;
