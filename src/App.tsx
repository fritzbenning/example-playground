import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/Button";
import { ProductCard } from "./components/ProductCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div
        style={{
          margin: "2rem 0",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button onClick={() => alert("Primary button clicked!")}>
          Primary Button
        </Button>
        <Button
          variant="secondary"
          onClick={() => alert("Secondary button clicked!")}
        >
          Secondary Button
        </Button>
        <Button size="lg" onClick={() => alert("Large button clicked!")}>
          Large Button
        </Button>
      </div>

      <div
        style={{ margin: "2rem 0", display: "flex", justifyContent: "center" }}
      >
        <ProductCard
          name="React T-Shirt"
          price={29}
          rating={4}
          inStock={true}
          image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        />
      </div>
    </>
  );
}

export default App;
