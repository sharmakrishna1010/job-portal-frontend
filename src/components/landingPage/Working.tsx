import { Avatar } from "@mantine/core"
import { IconBriefcase, IconBrowserCheck, IconFileCv } from "@tabler/icons-react"

function Working() {
    return (
        <div>
            <div className="mt-20 text-white pb-5">
                <div className="text-4xl font-semibold text-center mb-3">
                    How it <span className="text-picton-blue-400">Works</span>
                </div>

                <div className="text-center mb-10 text-lg">Effortlessly navigate through the process and land your dream job.
                </div>

                <div className="flex items-center px-16 justify-between">
                    <div className="w-150 relative">
                        <img src="/Working/Girl.png" alt="dreamJobImage" />

                        <div className="backdrop-blur-md w-fit border-picton-blue-500 rounded-lg border p-2 flex flex-col gap-2 items-center justify-center text-center right-10 absolute top-[20%]">
                            <Avatar src="avatar-7.png" size={50} />
                            <div className="text-sm">
                                <div className="font-semibold">Complete your <br /> profile</div>
                                <div className="text-black-300">70% completed</div>
                            </div>
                        </div>

                    </div>

                    <div className="flex gap-10 justify-center flex-col" >
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="w-15 bg-picton-blue-500 rounded-full h-15 p-2 flex items-center justify-center">
                                    <IconFileCv stroke={1.25} size={45} />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">Build Your Resume</div>
                                    <div>Create a standout resume with your skills.</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4">
                                <div className="w-15 bg-picton-blue-500 rounded-full h-15 p-2 flex items-center justify-center">
                                    <IconBriefcase stroke={1.25} size={45} />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">Apply for Job</div>
                                    <div>Find and apply for jobs that match your skills.</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-4">
                                <div className="w-15 bg-picton-blue-500 rounded-full h-15 p-2 flex items-center justify-center">
                                    <IconBrowserCheck stroke={1.25} size={45} />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">Get Hired</div>
                                    <div>Connect with employers and start your new job.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Working
