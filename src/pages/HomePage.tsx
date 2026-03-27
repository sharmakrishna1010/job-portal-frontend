import Header from "../components/header/Header"
import Companies from "../components/hero/Companies"
import DreamJob from "../components/hero/DreamJob"

function HomePage() {
  return (
    <div className="min-h-screen bg-black-950 font-['poppins']">
      <Header />
      <DreamJob />
      <Companies />
    </div>
  )
}

export default HomePage
