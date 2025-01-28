import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Header from "./components/Header";
import Movies from "./Pages/Movies";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
         <Route path="/" element={< Home />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/about" element={<About />} />
         <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
