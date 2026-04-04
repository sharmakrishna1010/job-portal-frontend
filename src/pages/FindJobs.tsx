import { Divider } from "@mantine/core"
import SearchBar from "../components/findJobs/SearchBar"

function FindJobs() {
    return (
        <div className="min-h-screen bg-black-950 font-['poppins']">
            <Divider size="xs" orientation="horizontal" mx="md" />
            <SearchBar />
        </div>
    )
}

export default FindJobs
