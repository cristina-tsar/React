import React from 'react'
import "./common/styles.css";
import "./common/reset.css";
import "./common/grid.css";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

 const App =() => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
export default App
