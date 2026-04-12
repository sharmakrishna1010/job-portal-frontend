import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FindJobsPage from "./pages/FindJobsPage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import FindTalentPage from "./pages/FindTalentPage"
import TalentProfilePage from "./pages/TalentProfilePage"
import PostJobPage from "./pages/PostJobPage"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="/find-talent" element={<FindTalentPage />} />
        <Route path="/talent-profile" element={< TalentProfilePage />} />
        <Route path="/post-job" element={< PostJobPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
