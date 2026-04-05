import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FindJobsPage from "./pages/FindJobsPage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import FindTalentPage from "./pages/FindTalentPage"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/find-jobs" element={<FindJobsPage />} />
        <Route path="/find-talent" element={<FindTalentPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
