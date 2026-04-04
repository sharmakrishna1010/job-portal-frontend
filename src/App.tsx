import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FindJobs from "./pages/FindJobs"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/find-jobs" element={<FindJobs />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
