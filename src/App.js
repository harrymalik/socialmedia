import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/Auth/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        {/* <Home/> */}
        {/* <Profile/> */}
        {/* <Auth/> */}
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/signup" element={<SignUp />}/>

        
        

          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
