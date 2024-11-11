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
import EditJob from "./components/EditJob";
import EditMcq from "./components/AssignmentFolder/EditMcq";
import JobS from "./components/StudentsFolder/JobS";
import Apply from "./components/StudentsFolder/Apply";
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
      <Route path={'/editjob/:id'} element={<EditJob />}></Route>
      <Route path={'/editmcq/:qid/:name'} element={<EditMcq />}></Route>
      <Route path={'/student/job'} element={<JobS />}></Route>
      <Route path={'/student/:id'} element={<Apply />}></Route>
    </Routes>
    </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
