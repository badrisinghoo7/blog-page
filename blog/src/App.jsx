import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <h2>Blogs App</h2>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
