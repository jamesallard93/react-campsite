import Header from "./components/Header";
import CampsitesList from "./features/campsites/CampsitesList";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
