import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes.jsx"
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./layout/Layout.jsx"
import {Challengegenerator} from "./challenge/Challengegenerator.jsx";
import {HistoryPanel} from "./history/HistoryPanel.jsx";
import {Authenticationpage} from "./auth/Authenticationpage.jsx";

function App() {
  return <ClerkProviderWithRoutes>
      <Routes>
          <Route path="/sign-in/*" element={<Authenticationpage />} />
          <Route path="/sign-up" element={<Authenticationpage />} />
          <Route element={<Layout/>}>
              <Route path="/" element={<Challengegenerator/>} />
              <Route path="/history" element={<HistoryPanel/>} />
          </Route>
      </Routes>
  </ClerkProviderWithRoutes>
}

export default App
