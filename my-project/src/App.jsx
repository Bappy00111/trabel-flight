import "./App.css";
import img from "../src/assets/image/about-banner.png";

function App() {
  return (
    <div className="relative">
      <img className="h-[600px] md:h-[800px] w-full" src={img} alt="" />
      <div className="absolute inset-0">
      <h2>WE ARE ENOSIS</h2>
      <p>A Software Solution Provider</p>
      </div>
    </div>
  );
}

export default App;
