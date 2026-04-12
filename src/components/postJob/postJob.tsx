import { Button, TagsInput } from "@mantine/core";
import { fields } from "../../Data/PostJob"
import { SelectInput } from "./selectInput"
import { TextEditor } from "./textEditor";

function postJob() {
    const select = fields;
    return (
        <div className="mx-auto w-3/4 py-8">
            <div className="text-2xl font-semibold mb-5">Post Job</div>
            <div className="flex flex-col gap-5">
                <div className="flex gap-10 *:w-1/2!">
                    <SelectInput {...select[0]} />
                    <SelectInput {...select[1]} />
                </div>
                <div className="flex gap-10 *:w-1/2!">
                    <SelectInput {...select[2]} />
                    <SelectInput {...select[3]} />
                </div>
                <div className="flex gap-10 *:w-1/2!">
                    <SelectInput {...select[4]} />
                    <SelectInput {...select[5]} />
                </div>
                <TagsInput
                    acceptValueOnBlur
                    withAsterisk
                    splitChars={[',', ' ', '|']}
                    clearable
                    label="Skills"
                    placeholder="Enter skills" />
                <div className="[&_button[data-active='true']]:bg-picton-blue-400/20!" >
                    <div className="text-sm font-medium">Job Description</div>
                    <TextEditor />
                </div>
                <div className="flex gap-4">
                    <Button color="blue.5" fullWidth variant="light">Publish Job</Button>
                    <Button color="blue.5" fullWidth variant="outline">Save as Draft</Button>
                </div>
            </div>
        </div>
    )
}

export default postJob
