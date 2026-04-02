import { Avatar, Rating } from "@mantine/core"
import { testimonials } from "../../Data/Data"

function Testimonials() {
    return (
        <div className="mt-20 text-white pb-5">
            <div className="text-4xl font-semibold text-center mb-3">
                What <span className="text-picton-blue-400">User</span> says about us
            </div>

            <div className="flex justify-evenly">
                {
                    testimonials.map((testimonial, index) => (
                        <div key={index} className="flex flex-col gap-3 w-[23%] border-picton-blue-500 p-3 border rounded-xl mt-10">
                            <div className="flex gap-2 items-center">
                                <Avatar className="h-14! w-14!" src={"avatar-8.png"} />
                                <div>
                                    <div className="text-lg font-semibold">{testimonial.name}</div>
                                    <Rating value={testimonial.rating} fractions={2} readOnly />
                                </div>
                            </div>
                            <div className="text-xs">{testimonial.testimonial}</div>
                        </div>
                    ))
                }
            </div>



        </div>
    )
}

export default Testimonials
