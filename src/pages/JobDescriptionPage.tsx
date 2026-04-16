import { Button, Divider } from "@mantine/core"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import JobDescription from "../components/jobDescription/JobDescription"
import RecommendedJobs from "../components/jobDescription/RecommendedJobs"

function JobDescriptionPage() {
    return (
        <div className="min-h-screen bg-black-950 font-['poppins']">
            <Divider size="xs" orientation="horizontal" mx="md" />
            <Link to="/find-jobs" className="px-5 inline-block my-5">
                <Button leftSection={<IconArrowLeft size={20} />} color="blue.5" fullWidth variant="light">Back</Button>
            </Link>

            <div className="flex gap-5 px-5">
                <JobDescription />
                <Divider size="xs" orientation="vertical" mx="md" color="black.7" />
                <RecommendedJobs />
            </div>

        </div>
    )
}

export default JobDescriptionPage
