import Marquee from "react-fast-marquee";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { jobCategory } from "../../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import CategoryCard from "./CategoryCard";

const SafeMarquee = (Marquee as any).default ? (Marquee as any).default : Marquee;

function JobCategory() {
    if (!SafeMarquee) return null;

    return (
        <div className="mt-20 text-white pb-5">
            <div className="text-4xl font-semibold text-center mb-3">
                Browse <span className="text-picton-blue-400">Job</span> Category
            </div>

            <div className="text-center mb-10 text-lg">Explore diverse job opportunities tailored to your skills. <br /> Start your career journey today!</div>

            <div>
                <Carousel
                    slideSize="22%"
                    slideGap={"md"}
                    className="[&_button]:bg-picton-blue-300! [&_button]:border-none! [&_button]:opacity-0! hover:[&_button]:opacity-75! hover:[&_button]:hover:opacity-95!"
                    nextControlIcon={<IconArrowRight className="h-8 w-8 text-black " />}
                    previousControlIcon={<IconArrowLeft className="h-8 w-8 text-black" />}
                    emblaOptions={{
                        loop: true,
                        dragFree: false,
                        align: 'center'
                    }}

                >
                    {jobCategory.map((name, index) => <CarouselSlide key={index}>
                        <CategoryCard name={name.name.toString()} />
                    </CarouselSlide>)
                    }

                </Carousel>
            </div>
            {/* <CategoryCard /> */}
        </div>
    );
}

export default JobCategory
