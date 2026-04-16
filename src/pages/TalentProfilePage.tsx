import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import Profile from "../components/talentProfile/Profile"
import { profile, talents } from "../Data/TalentData"
import RecommendTalent from "../components/talentProfile/RecommendTalent"

function TalentProfilePage() {
  return (
    <div className="min-h-screen bg-black-950 font-['poppins']">
      <Divider size="xs" orientation="horizontal" mx="md"/>
      <Link to="/find-talent" className="px-5 inline-block my-5">
        <Button leftSection={<IconArrowLeft size={20} />} color="blue.5" fullWidth variant="light">Back</Button>
      </Link>

      <div className="flex gap-5 px-5">
        <Profile {...profile} />
        <Divider size="xs" orientation="vertical" mx="md" color="black.7" />
        <RecommendTalent />
      </div>

    </div>
  )
}

export default TalentProfilePage
