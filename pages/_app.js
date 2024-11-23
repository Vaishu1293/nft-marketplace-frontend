import "@/styles/globals.css";

import NavBar from "../pages/components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = ({ Component, pageProps}) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
    <Footer/>
  </div>
);

export default App;