import "@/styles/globals.css";

import NavBar from "../pages/components/NavBar/NavBar";

const App = ({ Component, pageProps}) => (
  <div>
    <Component {...pageProps} />
    <NavBar />
  </div>
);

export default App;