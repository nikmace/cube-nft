import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header, NFTImages, NFTShowcase } from "./components";
import New from "./pages/New";

function App() {
  // const {state, dispatch} = useWallet()

  return (
    <Router>
      <div className="wrapper">
        <section className="wrapper_bg">
          <div className="main">
            <Header />
            <Routes>
              <Route path="/" element={<NFTShowcase />} />
              <Route path="/new" element={<New />} />
            </Routes>
          </div>

          <NFTImages />
        </section>
      </div>
    </Router>
  );
}

export default App;
