import "./App.css";
import Home from "./Components/Routes/Home";
import ContactUs from "./Components/Routes/ContactUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ourproduct from "./Components/Routes/Ourproduct";
import Cpvc from "./Components/Ourproduct/Astral/Cpvc";
import Aquarious from "./Components/Ourproduct/Astral/Aquarious";
import Drainmaster from "./Components/Ourproduct/Astral/Drainmaster";
import Pvc from "./Components/Ourproduct/Prince/Pvc";
import Upvc from "./Components/Ourproduct/Prince/Upvc";
import Cpvcplus from "./Components/Ourproduct/Prince/Cpvcplus";
import Pvcpipe from "./Components/Ourproduct/Truflow/Pvcpipe";
import Cpvcpipe from "./Components/Ourproduct/Truflow/Cpvcpipe";
import Upvctruflow from "./Components/Ourproduct/Truflow/Upvctruflow";
import Category from "./Components/Ourproduct/Gravity/Category";
import Gardenpipe from "./Components/Ourproduct/HorsePipe/Gardenpipe";
import Blackhdpe from "./Components/Ourproduct/Hdpe/Blackhdpe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/ourproduct" element={<Ourproduct />} />
          <Route path="/ourproduct/cpvc" element={<Cpvc />} />
          <Route path="/ourproduct/aquarious" element={<Aquarious />} />
          <Route path="/ourproduct/drainmaster" element={<Drainmaster />} />
          <Route path="/ourproduct/pvc" element={<Pvc />} />
          <Route path="/ourproduct/upvc" element={<Upvc />} />
          <Route path="/ourproduct/cpvcPlus" element={<Cpvcplus />} />
          <Route path="/ourproduct/swr" element={<Pvcpipe />} />
          <Route path="/ourproduct/upvctruflow" element={<Upvctruflow />} />
          <Route path="/ourproduct/cpvcpipe" element={<Cpvcpipe />} />
          <Route path="/ourproduct/gravity" element={<Category />} />
          <Route path="/ourproduct/gardenpipe" element={<Gardenpipe />} />
          <Route path="/ourproduct/hdpe" element={<Blackhdpe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
