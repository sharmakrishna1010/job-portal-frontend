import { Checkbox, CheckIcon, Combobox, ComboboxChevron, Group, Input, Pill, PillsInput, useCombobox } from '@mantine/core';
import { IconSearch, IconSelector } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const MAX_DISPLAYED_VALUES = 2;

export default function MultiInput(props: any) {
    useEffect(() => {
        setData(props.options);
    }, [])
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [data, setData] = useState<string[]>(["None"]);
    const [value, setValue] = useState<string[]>([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch('');

        if (val === '$create') {
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
        } else {
            setValue((current) =>
                current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
            );
        }
    };

    const handleValueRemove = (val: string) =>
        setValue((current) => current.filter((v) => v !== val));

    const values = value
        .slice(
            0,
            MAX_DISPLAYED_VALUES === value.length ? 1 : MAX_DISPLAYED_VALUES - 1
        )
        .map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item}
            </Pill>
        ));

    const options = data
        .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
        .map((item) => (
            <Combobox.Option value={item} key={item} active={value.includes(item)}>
                <Group gap="sm">
                    <Checkbox
                        size='xs'
                        color='blue.5'
                        checked={value.includes(item)}
                        onChange={() => { }}
                        aria-hidden
                        tabIndex={-1}
                        style={{ pointerEvents: 'none' }}
                    />
                    <span className='text-black-400'>{item}</span>
                </Group>
            </Combobox.Option>
        ));

    return (
        <div>
            <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
                <Combobox.DropdownTarget>
                    <PillsInput
                        variant='unstyled'
                        leftSection={
                            <div
                                className="pointer-events-none flex items-center justify-center bg-black-800 rounded-full text-picton-blue-500 p-1">
                                <props.icon />
                            </div>
                        }
                        rightSection={<IconSelector />}
                        onClick={() => combobox.toggleDropdown()}
                    >
                        <Pill.Group >
                            <div>

                                {value.length > 0 ? (
                                    <div className='px-2 flex gap-2 items-center'>
                                        {values}
                                        {value.length > 1 && (
                                            <Pill>+{value.length - 1} more</Pill>
                                        )}
                                    </div>
                                ) : (
                                    <Input.Placeholder className='text-black-400! ml-3'>{props.title}</Input.Placeholder>
                                )}

                                <Combobox.EventsTarget >
                                    <PillsInput.Field
                                        type="hidden"
                                        // onBlur={() => combobox.closeDropdown()}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Backspace' && value.length > 0) {
                                                event.preventDefault();
                                                handleValueRemove(value[value.length - 1]);
                                            }
                                        }}
                                    />
                                </Combobox.EventsTarget>
                            </div>
                        </Pill.Group>
                    </PillsInput>
                </Combobox.DropdownTarget>

                <Combobox.Dropdown className='bg-black-900!'>
                    <div>
                        <Combobox.Search
                            className='bg-black-900!'
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)}
                            placeholder={`Search ${props.title}`}
                        />
                        <Combobox.Options>
                            <div>
                                {options}

                                {!exactOptionMatch && search.trim().length > 0 && (
                                    <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                                )}

                                {exactOptionMatch && search.trim().length > 0 && options.length === 0 && (
                                    <Combobox.Empty>Nothing found</Combobox.Empty>
                                )}
                            </div>
                        </Combobox.Options>
                    </div>
                </Combobox.Dropdown>
            </Combobox>
        </div>
    );
}