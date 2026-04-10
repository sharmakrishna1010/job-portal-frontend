import { Button, Divider } from "@mantine/core"
import { IconBriefcase, IconMapPin } from "@tabler/icons-react"
import ExpCard from "./ExpCard"
import CertiCard from "./CertiCard"

function Profile(props: any) {
    return (
        <div className="w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="rounded-full absolute border-5 border-black-900 left-3 -bottom-1/3 w-48 h-48 " src={`/avatar.png`} alt="" />
            </div>

            <div className="px-3 mt-25">
                <div className="text-3xl font-semibold flex justify-between">{props.name}
                    <Button variant="light" className="bg-picton-blue-500 hover:bg-picton-blue-600">Hire</Button> </div>
                <div className="text-xl flex items-center gap-2"> <IconBriefcase className="h-5 w-5" /> {props.role} &bull; {props.company}</div>
                <div className="flex gap-2 items-center">
                    <IconMapPin stroke={1.5} className="h-5 w-5" />
                    {props.location}
                </div>
            </div>

            <Divider size="xs" orientation="horizontal" my="xl" mx="xs" color="black.7" />

            <div className="px-3">
                <div className="mb-3 text-2xl">About</div>
                <div className="text-sm text-justify">{props.about}</div>
            </div>

            <Divider size="xs" orientation="horizontal" my="xl" mx="xs" color="black.7" />

            <div className="px-3">
                <div className="mb-3 font-semibold text-2xl">Skills</div>
                <div className="flex flex-wrap gap-3">
                    {
                        props.skills?.map((skill: string, index: number) => (
                            <div key={index}>
                                <div className="bg-picton-blue-300/15 text-sm font-medium text-picton-blue-400 px-3 py-1 rounded-3xl">{skill}</div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <Divider size="xs" orientation="horizontal" my="xl" mx="xs" color="black.7" />
            <div className="px-3">
                <div className="font-semibold text-2xl mb-5">Expereince</div>
                <div className="flex flex-col gap-10">
                    {
                        props.experience?.map((exp: any, index: number) => (
                            <ExpCard key={index} {...exp} />
                        ))
                    }
                </div>
            </div>

            <Divider size="xs" orientation="horizontal" my="xl" mx="xs" color="black.7" />
            <div className="px-3">
                <div className="font-semibold text-2xl mb-5">Certifications</div>
                <div className="flex flex-col gap-10">

                    {
                        props.certifications?.map((certi: any, index: number) => (
                            <CertiCard key={index} {...certi} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
