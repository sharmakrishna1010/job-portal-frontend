import { Divider, Input, RangeSlider } from "@mantine/core"
import { useState } from "react"
import MultiInput from "../findJobs/MultiInput";
import { searchFields } from "../../Data/TalentData";
import { IconUserCircle } from "@tabler/icons-react";

function SearchBar() {

  const [value, setValue] = useState<[number, number]>([0, 100]);

  return (
    <div className="flex px-5 py-8 items-center">
      <div className="flex gap-2 items-center">
        <div className="flex items-center">
          <IconUserCircle stroke={1.5} className="text-picton-blue-500 rounded-full p-1 h-10 w-10" />
        </div>
        <div>
          <Input variant="unstyled" placeholder="Talent Name" className="text-black-400! [&_input]:placeholder:text-black-400!" />
        </div>
      </div>
      {
        searchFields.map((item, index) =>
          <>
            <div key={index} className="w-1/5">
              <MultiInput {...item} />

            </div>
            <Divider mr="sm" size="xs" orientation="vertical" />
          </>
        )
      }
      <div className="w-1/5 [&_.mantine-RangeSlider-label]:translate-y-10!">
        <div className="flex justify-between items-center">
          <div>Salary</div>
          <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA</div>
        </div>

        <RangeSlider
          size={"xs"}
          color="blue.5"
          value={value}
          onChange={setValue}
          labelTransitionProps={
            {
              transition: 'skew-down',
              duration: 150,
              timingFunction: 'linear'
            }
          }
        />
      </div>
    </div>

  )
}

export default SearchBar
