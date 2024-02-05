import hero from "./assets/img/hero-akai.png";

function App() {
  return (
    <div>
      <section
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      ></section>
    </div>
  );
}

export default App;
