import { LandingPage } from "./landing_page/landing_page";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Sunshine";
  }, []);
  return <LandingPage />;
}

export default App;
