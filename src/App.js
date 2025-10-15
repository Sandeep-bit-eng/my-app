import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

import { BrowserRouter } from "react-router-dom";
// const NotFound = (props) => <NotFoundPage {...props} />;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import NotFound from "./components/NotFound"; // agar tumne 404 page banaya ho

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/404" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;

