import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevanve', 'Most Recent', 'Salary (Low to High)', 'Salary (High to Low)'];

export function Sort() {
    const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = opt.map((item) => (
        <Combobox.Option className='text-xs! bg-black-900! hover:bg-black-800!' value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>
            {/* <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box> */}

            <Combobox
                store={combobox}
                width={150}
                position="bottom-start"
                onOptionSubmit={(val) => {
                    setSelectedItem(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    {/* <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button> */}
                    <div
                        className='border border-picton-blue-400 flex gap-2 items-center py-1 rounded-xl text-sm px-2 cursor-pointer'
                        onClick={() => combobox.toggleDropdown()}
                    >
                        {selectedItem}
                        <IconAdjustments onClick={() => combobox.toggleDropdown()} className='cursor-pointer text-picton-blue-400 h-6 w-6' />
                    </div>
                </Combobox.Target>

                <Combobox.Dropdown className='bg-black-900!'>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </>
    );
}