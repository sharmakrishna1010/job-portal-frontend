import { Avatar, Indicator } from "@mantine/core"
import { IconBell, IconSettings } from "@tabler/icons-react"
import { Link } from "react-router-dom"

import NavLinks from "./NavLinks"


function Header() {
    return (
        <div className="w-full bg-black-950 h-28 font-['poppins'] text-white flex justify-between px-6 items-center overflow-hidden">
            <div className="flex gap-3">
                <Link to={"/"}>
                    <img src="src\assets\images\job-xa-logo.png" alt="Job Xa Logo" className="w-40" />
                </Link>
                {/* <div className="text-3xl font-semibold items-center">Job xa</div> */}
            </div>
            <NavLinks />
            <div className="flex gap-x-3 items-center">
                <div className="flex gap-2 items-center">
                    <div>Krishna</div>
                    <Avatar radius="xl" color="white" />
                </div>
                <div className="bg-black-900 p-2 rounded-full">
                    <IconSettings stroke={1.5} />
                </div>
                <div className="bg-black-900 p-2 rounded-full">
                    <Indicator color="pictonBlue.4" radius="lg" size={8} processing>
                        <IconBell stroke={1.5} />
                    </Indicator>
                </div>
            </div>
        </div>
    )
}

export default Header
