import { jobList } from "../../Data/JobsData"
import JobCard from "../findJobs/JobCard"
import { Sort } from "../findJobs/Sort"

function RecommendedJobs() {
    return (
        <div className="w-1/4">
            <div className="text-2xl font-semibold mb-5">Recommended Jobs</div>
            <div className="flex gap-5 flex-wrap">
                {
                    jobList.map((job, index) => index < 6 && <JobCard key={index} {...job} />)
                }
            </div>

        </div>
    )
}

export default RecommendedJobs
