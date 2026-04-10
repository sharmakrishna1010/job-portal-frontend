function CertiCard(props: any) {
    return (
        <div className="flex gap-2 items-center justify-between">
            <div className="flex gap-2 items-center">
                <div className="bg-black-800 rounded-md p-2">
                    <img className="h-10" src={`/Icons/${props.issuer}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.name}</div>
                    <div className="text-sm">{props.issuer}</div>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-end">
                    <div className="text-sm">{props.issueDate}</div>
                    <div className="text-sm">ID: {props.certificateId}</div>
                </div>
            </div>
        </div>
    )
}

export default CertiCard
