import { Avatar, Button, Divider, Text } from "@mantine/core"
import { IconClock, IconHeart, IconLocation, IconMapPin } from "@tabler/icons-react"
import { Link } from "react-router-dom"

function TalentCard(props: any) {
    return (
        <div className="flex flex-col bg-black-900 w-96 gap-3 rounded-xl p-4 hover:shadow-[0_0_5px_1px_blue] shadow-picton-blue-400">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-black-800  rounded-full p-2">
                        <Avatar className="h-10" size="lg" src={`/${props.image}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-sm">{props.role} &#x2022; {props.company}</div>
                    </div>
                </div>
                <div><IconHeart className="cursor-pointer" /></div>
            </div>


            <div className="flex gap-2 text-xs [&>div]:rounded-md [&>div]:py-1 [&>div]:px-2 [&>div]:bg-black-800 [&>div]:text-picton-blue-400 items-center">
                {props.topSkills?.map((skill, index) => <div key={index}>{skill}</div>)}
            </div>


            <div className="">
                <Text className="text-xs! text-justify!" lineClamp={3}>
                    {props.about}
                </Text>
            </div>

            <Divider size="xs" orientation="horizontal" mx="xs" color="black.7" />

            <div className="flex justify-between text-xs items-center">
                <div className="font-semibold">
                    {props.expectedCtc}
                </div>
                <div className="flex gap-1 items-center">
                    <IconMapPin stroke={1.5} className="h-5 w-5" />
                    {props.location}
                </div>
            </div>
            <Divider size="xs" orientation="horizontal" mx="xs" color="black.7" />
            <div className="flex *:w-1/2 *:p-1 ">
                <Link to="/talent-profile">
                    <Button color="blue.5" fullWidth variant="outline">Profile</Button>
                </Link>
                <div>
                    <Button color="blue.5" fullWidth variant="light">Message</Button>
                </div>
            </div>
        </div>
    )
}

export default TalentCard
