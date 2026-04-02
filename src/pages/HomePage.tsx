import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Companies from "../components/landingPage/Companies"
import DreamJob from "../components/landingPage/DreamJob"
import JobCategory from "../components/landingPage/JobCategory"
import Subscribe from "../components/landingPage/Subscribe"
import Testimonials from "../components/landingPage/Testimonials"
import Working from "../components/landingPage/Working"

function HomePage() {
  return (
    <div className="min-h-screen bg-black-950 font-['poppins']">
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default HomePage
