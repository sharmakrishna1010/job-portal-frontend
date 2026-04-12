import { Divider } from "@mantine/core"
import PostJob from "../components/postJob/postJob.tsx"

function PostJobPage() {
    return (
        <div className="min-h-screen bg-black-950 font-['poppins']">
            <Divider size="xs" orientation="horizontal" mx="md" />
            
            <PostJob />

        </div>
    )
}

export default PostJobPage
