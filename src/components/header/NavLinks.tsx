import { Link, useLocation } from "react-router-dom"

function NavLinks() {
    const links = [
        { name: "Find Jobs", url: "find-jobs" },
        { name: "Find Talent", url: "find-talent" },
        { name: "Upload Job", url: "upload-job" },
        { name: "About Us", url: "about-us" }]

    const location = useLocation();    

    return (
        <div className="flex gap-x-15 h-full items-center">
            {
                links.map((link, index) => (
                    <div className={`${location.pathname == "/" + link.url? "border-picton-blue-500 text-picton-blue-500" : "border-transparent"}  h-full flex items-center border-t-[3px]`}>
                        <Link to={"/"+link.url} key={index}>{link.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavLinks
