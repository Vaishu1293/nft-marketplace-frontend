import "@/styles/globals.css";

import NavBar from "../pages/components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = ({ Component, pageProps}) => (
  <div>
    <Component {...pageProps} />
    <NavBar />
    <Footer/>
  </div>
);

export default App;