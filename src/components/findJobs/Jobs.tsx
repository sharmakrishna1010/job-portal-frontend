import { jobList } from "../../Data/JobsData"
import JobCard from "./JobCard"
import { Sort } from "./Sort"

function Jobs() {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Recommended Jobs</div>
                <Sort />
            </div>

            <div className="flex gap-5 mt-10 flex-wrap">
                {
                    jobList.map((job, index) => <JobCard key={index} {...job} />)
                }
            </div>

        </div>
    )
}

export default Jobs
