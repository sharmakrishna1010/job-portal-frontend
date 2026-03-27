import { Avatar, AvatarGroup, TextInput } from "@mantine/core"
import { IconSearch, IconSearchFilled } from "@tabler/icons-react"

function DreamJob() {
    return (
        <div className="text-white flex items-center px-20">
            <div className="flex flex-col w-[45%] gap-5">
                <div className="font-bold text-6xl leading-tight">Find your <span className="text-picton-blue-400">dream job</span> <br /> with us</div>
                <div className="text-lg">Good life begins with a good company.Start exploring thousands of jobs in one place.</div>
                <div className="flex gap-3 mt-4 items-center">
                    <TextInput
                        label="Job Title"
                        placeholder="Software Engineer"
                        className="py-1 px-2 w-50 max-w-50
                         [&_input]:w-full! [&_input]:text-md! [&_input]:placeholder:text-black-400!"
                    />
                    {/* bg-picton-blue-500 rounded-lg  */}
                    {/* [&_input]:bg-picton-blue-500! [&_input]:border-none! [&_input]:font-semibold! [&_input]:px-0! [&_input]:text-white!*/}
                    <TextInput
                        label="Job Type"
                        placeholder="Full Time"
                        className="py-1 px-2 w-50 max-w-50
                         [&_input]:w-full! [&_input]:text-md! [&_input]:placeholder:text-black-400!"
                    />
                    <div className="flex items-center justify-center h-full mt-6">
                        {/* <IconSearch className="h-[85%] w-[85%]"/> */}
                        <button className="px-2 py-1 font-bold bg-picton-blue-500 hover:bg-picton-blue-600 cursor-pointer rounded-sm">Find Jobs</button>
                    </div>
                </div>
            </div>

            <div className="w-[55%] flex items-center justify-center">
                <div className="w-150 relative">
                    <img src="/boyWithLaptop.png" alt="dreamJobImage" />
                    <div className="backdrop-blur-md -right-1 w-fit border-picton-blue-500 rounded-lg border p-2  absolute top-[50%]">
                        <div className="text-center text-sm mb-1">10K+ got job</div>
                        <Avatar.Group>
                            <Avatar src="avatar-9.png" />
                            <Avatar src="avatar-8.png" />
                            <Avatar src="avatar-7.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="backdrop-blur-md w-fit -left-1 border-picton-blue-500 rounded-lg border p-2 absolute top-[32%]">
                        <div className="flex items-center gap-2">
                            <div>
                                <img src="googleLogo.webp" alt="Google Logo" className="w-10 p-1 rounded-lg bg-black-900" />
                            </div>
                            <div className="text-sm">
                                <div className="font-semibold">Software Engineer</div>
                                <div className="text-black-300">New York</div>
                            </div>
                        </div>

                        <div className="flex gap-2 justify-between text-sm text-black-300 mt-2">
                            <span>1 day ago</span>
                            <span>100 Applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DreamJob