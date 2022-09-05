import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import SLTokenProvider from "./context/SLTokenContext";

export default function App() {
  return (
    <BrowserRouter>
      <SLTokenProvider>
        <Routes />
      </SLTokenProvider>
    </BrowserRouter>
  );
}
