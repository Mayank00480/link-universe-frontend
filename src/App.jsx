import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./pages/Body";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import { Provider } from "react-redux";
import store from "./store/store";
import Connections from "./pages/Connections";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
             <Route path="/connections" element={<Connections />} />
             <Route path = "/request" element = {<RequestReceived/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
