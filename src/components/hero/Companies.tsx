import Marquee from "react-fast-marquee";
import { companies } from "./../../Data/Data";

const SafeMarquee = (Marquee as any).default ? (Marquee as any).default : Marquee;

function Companies() {
    if (!SafeMarquee) return null;

    return (
        <div className="mt-20 text-white">
            <div className="text-4xl font-semibold text-center mb-10">
                Trusted By <span className="text-picton-blue-400">1000+</span> Companies
            </div>
            
            <SafeMarquee gradient={false} speed={50} pauseOnHover={true}>
                {companies.map((company: string, index: number) => (
                    <div key={index} className="mx-10">
                        <img
                            className="h-15 w-auto object-contain"
                            src={`/Companies/${company}.png`}
                            alt={company}
                        />
                    </div>
                ))}
            </SafeMarquee>
        </div>
    );
}

export default Companies;