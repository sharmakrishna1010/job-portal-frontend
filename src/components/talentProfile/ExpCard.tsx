function ExpCard(props:any) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <div className="bg-black-800 rounded-md p-2">
                        <img className="h-10" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm">{props.company} &bull; {props.location}</div>
                    </div>
                </div>
                <div>
                    <div className="text-sm">
                        {props.startDate} - {props.endDate}
                    </div>
                </div>
            </div>
            <div className="text-sm ">
                {props.description}
            </div>
        </div>
    )
}

export default ExpCard
