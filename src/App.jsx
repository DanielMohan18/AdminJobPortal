import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Job from "./components/Job.jsx"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import Assignment from "./components/AssignmentFolder/Assignment";
import Header from "./components/Header";
import Details from "./components/Details";
import { RecoilRoot } from "recoil";
import CompleteDetails from "./components/CompleteDetails";
import EditJob from "./components/EditJob";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <RecoilRoot>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path={'/'} element={<Home />} ></Route>
      <Route path={'/job'} element={<Job/>} ></Route>
      <Route path={'/assignment'} element={<Assignment />}></Route>
      <Route path={'/details/:id'} element={<Details/>}></Route>
      <Route path={'/candidateComDetails/:cid'} element={<CompleteDetails />}></Route>
      <Route path={'/editjob/:id'} element={<EditJob />}></Route>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
