import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import SettingsWindow from "./components/settingsWindow/SettingsWindow.component";
import Stopwatch from "./components/stopwatch/Stopwatch.component";
import TimeProvider from "./state/TimeProvider";

function App() {
  return (
    <div className="App">
      <TimeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Stopwatch />} path="/" />
            <Route element={<SettingsWindow />} path="/settings" />
          </Routes>
        </BrowserRouter>
      </TimeProvider>
    </div>
  );
}

export default App;
