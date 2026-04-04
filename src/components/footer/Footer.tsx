import { IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandYoutube } from "@tabler/icons-react"
import { Link } from "react-router-dom"
import { footerLinks } from "../../Data/Data"
function Footer() {
    return (
        <div className="pt-20 pb-5 text-white flex gap-5 justify-around bg-black-950 font-['poppins']">

            <div className="w-1/4 flex flex-col gap-3 px-5">
                <div>
                    <Link to={"/"}>
                        <img src="src\assets\images\job-xa-logo.png" alt="Job Xa Logo" className="w-25" />
                    </Link>
                </div>

                <div className="text-sm">
                    Job portal with user profiles, skill updates, certifications, work experience and admin job postings.
                </div>

                <div className="flex gap-3 text-picton-blue-500">
                    <div className="bg-black-900 p-2 rounded-full cursor-pointer hover:bg-black-700">
                        <IconBrandInstagram />
                    </div>
                    <div className="bg-black-900 p-2 rounded-full cursor-pointer hover:bg-black-700">
                        <IconBrandTelegram />
                    </div>
                    <div className="bg-black-900 p-2 rounded-full cursor-pointer hover:bg-black-700">
                        <IconBrandYoutube />
                    </div>
                </div>
            </div>

            {
                footerLinks.map((item, index) => <div key={index}>
                    <div className="font-semibold text-lg mb-4 text-picton-blue-400">{item.title}</div>

                    {item.links.map((links, index) => <div key={index} 
                    className="text-sm cursor-pointer hover:text-picton-blue-400 mb-1 hover:translate-x-2 transition ease-in-out duration-300">
                        {links}
                    </div>)}

                </div>)
            }

        </div>
    )
}

export default Footer
