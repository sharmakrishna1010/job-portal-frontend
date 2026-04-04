import { Divider, Text } from "@mantine/core"
import { IconBookmark, IconClock } from "@tabler/icons-react"

function JobCard(props: any) {
    return (
        <div className="flex flex-col bg-black-900 w-72 gap-3 rounded-xl p-4 hover:shadow-[0_0_5px_1px_blue] shadow-picton-blue-400">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-black-800 rounded-md p-2">
                        <img className="h-10" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-sm">{props.company} &#x2022; {props.applicants} Applicants</div>
                    </div>
                </div>
                <div><IconBookmark className="cursor-pointer" /></div>
            </div>


            <div className="flex gap-2 text-xs [&>div]:rounded-md [&>div]:py-1 [&>div]:px-2 [&>div]:bg-black-800 [&>div]:text-picton-blue-400 items-center">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>


            <div className="">
                <Text className="text-xs! text-justify!" lineClamp={3}>
                    {props.description}
                </Text>
            </div>

            <Divider size="xs" orientation="horizontal" mx="xs" color="black.7" />

            <div className="flex justify-between text-xs items-center">
                <div className="font-semibold">
                    &#8377;{props.package}
                </div>
                <div className="flex gap-1 items-center">
                    <IconClock stroke={1.5} className="h-5 w-5" />
                    Posted {props.postedDaysAgo} days ago
                </div>
            </div>
        </div>
    )
}

export default JobCard
