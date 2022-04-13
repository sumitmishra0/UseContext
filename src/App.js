import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/NoteState";
import "./styles.css";
import Child from "./context/Child";
import Product from "./components/Product";

export default function App() {
  return (
    <div className="App">
      <NoteState>
        <Child>
          <Home />
          <About />
          <Product />
        </Child>
      </NoteState>
    </div>
  );
}
