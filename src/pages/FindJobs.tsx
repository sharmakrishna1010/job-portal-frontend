import { Divider } from "@mantine/core"
import SearchBar from "../components/findJobs/SearchBar"
import Jobs from "../components/findJobs/Jobs"

function FindJobs() {
    return (
        <div className="min-h-screen bg-black-950 font-['poppins']">
            <Divider size="xs" orientation="horizontal" mx="md" />
            <SearchBar />
            <Divider size="xs" orientation="horizontal" mx="md" />
            <Jobs />
        </div>
    )
}

export default FindJobs
