import { Button, TextInput } from "@mantine/core"

function Subscribe() {
    return (
        <div className="mt-20 text-white flex items-center bg-black-900 mx-20 py-3 rounded-xl justify-around">
            <div className="text-4xl w-2/5 font-semibold text-center">
                Never Wants to Miss Any <span className="text-picton-blue-400">Job News?</span>
            </div>
            <div className="flex gap-4 bg-black-800 px-3 py-2 rounded-xl items-center ">
                <TextInput
                className="[&_input]:text-white! [&_input]:font-semibold! "
                    variant="unstyled"
                    placeholder="Your@email.com"
                    size="xl"
                />
                <Button size="lg" color="blue.6" variant="filled" className="[&_button:rounded-lg]">Suscribe</Button>
            </div>
        </div>
    )
}

export default Subscribe
