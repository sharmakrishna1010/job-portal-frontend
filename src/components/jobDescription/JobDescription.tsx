import { ActionIcon, Button, Divider } from "@mantine/core"
import { IconBookmark } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { card, desc, skills } from "../../Data/JobDescData"
import DOMPurify from "dompurify"

function JobDescription() {
    const data = DOMPurify.sanitize(desc); // Sanitize the HTMLdesc;
    return (
        <div className="w-3/4">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-black-800 rounded-xl p-3">
                        <img className="h-20" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-2xl">Software Engineer III</div>
                        <div className="text-lg">Google &bull; 3 days ago &bull; 48 Applicants</div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-center">
                    <Link to="/apply-job">
                        <Button color="blue.5" size="sm" fullWidth variant="light">Apply</Button>
                    </Link>
                    <IconBookmark className="cursor-pointer text-picton-blue-500" />
                </div>
            </div>
            <Divider my="xl" orientation="horizontal" mx="xs" color="black.7" />
            <div className="flex gap-3 justify-between">

                {card.map((item, index) => (
                    <div key={index} className="flex gap-1 flex-col items-center">
                        <ActionIcon className="h-12! w-12!" color="blue.5" variant="light" radius="xl" aria-label="Settings">
                            <item.icon className="h-4/5 w-4/5" />
                        </ActionIcon>
                        <div className="text-sm">{item.name}</div>
                        <div className="font-semibold">{item.value}</div>
                    </div>
                ))}
            </div>
            <Divider my="xl" orientation="horizontal" mx="xs" color="black.7" />
            <div>
                <div className="text-xl font-semibold mb-5">Required Skills</div>
                <div className="flex flex-wrap gap-3">
                    {skills.map((item, index) => (
                        <ActionIcon key={index} className="h-fit! w-fit! font-medium" p={"xs"} color="blue.5" variant="light" radius="xl" aria-label="Settings">
                            {item}
                        </ActionIcon>
                    ))}
                </div>
            </div>
            <Divider my="xl" orientation="horizontal" mx="xs" color="black.7" />
            <div>
                <div dangerouslySetInnerHTML={{ __html: data }} className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_p]:text-justify [&_li]:mb-1 [&_li]:marker:text-picton-blue-500"></div>
            </div>
            <Divider my="xl" orientation="horizontal" mx="xs" color="black.7" />
            <div>
                <div className="text-xl font-semibold mb-5">About Company</div>
                <div>
                    <div className="flex gap-2 items-center justify-between">
                        <div className="flex gap-2 items-center mb-3">
                            <div className="bg-black-800 rounded-xl p-3">
                                <img className="h-12" src={`/Icons/Google.png`} alt="" />
                            </div>
                            <div>
                                <div className="font-medium text-lg">Google</div>
                                <div className="">10K+ employees</div>
                            </div>
                        </div>
                        <Link to="/apply-job">
                            <Button color="blue.5" fullWidth variant="light">Company Page</Button>
                        </Link>
                    </div>
                    <div className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ut, autem corporis reiciendis magnam nulla. Est nam pariatur quia, dignissimos debitis eaque! Suscipit aut fugiat ipsum distinctio recusandae libero consequuntur inventore mollitia alias doloremque omnis ab quod voluptate, facilis consequatur.</div>
                </div>
            </div>
        </div>
    )
}

export default JobDescription
