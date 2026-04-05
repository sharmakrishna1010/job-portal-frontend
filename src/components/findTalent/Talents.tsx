import { jobList } from "../../Data/JobsData"
import { talents } from "../../Data/TalentData"
import JobCard from "../findJobs/JobCard"
import { Sort } from "../findJobs/Sort"
import TalentCard from "./TalentCard"

function Talents() {
    return (
        <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold">Talents</div>
                <Sort />
            </div>

            <div className="flex gap-5 mt-10 flex-wrap justify-between">
                {
                    talents.map((talent, index) => <TalentCard key={index} {...talent} />)
                }
            </div>

        </div>
    )
}

export default Talents
