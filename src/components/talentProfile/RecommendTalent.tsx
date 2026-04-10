import { talents } from "../../Data/TalentData"
import TalentCard from "../findTalent/TalentCard"

function RecommendTalent() {
    return (
        <div className="w-1/4">
            <div className="text-xl font-semibold mb-5">
                Recommended Talent
            </div>
            <div className="flex flex-col gap-5 w-full">
                {talents.map((talent, index) => index<4 && <TalentCard key={index} {...talent} />)}
            </div>
        </div>
    )
}

export default RecommendTalent
