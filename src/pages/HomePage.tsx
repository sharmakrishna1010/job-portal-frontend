import Header from "../components/header/Header"
import Companies from "../components/hero/Companies"
import DreamJob from "../components/hero/DreamJob"
import JobCategory from "../components/jobCategory/JobCategory"

function HomePage() {
  return (
    <div className="min-h-screen bg-black-950 font-['poppins']">
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory/>
    </div>
  )
}

export default HomePage
