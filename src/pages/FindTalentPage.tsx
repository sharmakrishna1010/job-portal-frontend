import { Divider } from "@mantine/core"
import SearchBar from "../components/findTalent/SearchBar"
import Talents from "../components/findTalent/Talents"

function FindTalentPage() {
    return (
        <div className="min-h-screen bg-black-950 font-['poppins']">
            <Divider size="xs" orientation="horizontal" mx="md" />
            <SearchBar />
            <Divider size="xs" orientation="horizontal" mx="md" />
            <Talents />
        </div>
    )
}

export default FindTalentPage
