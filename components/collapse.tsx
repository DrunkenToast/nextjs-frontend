import { useState } from "react";

interface Props {
    openAtStart?: boolean,
    title: string,
    children: JSX.Element,
}

const Collapse = ({ openAtStart, title, children }: Props) => {
    const [open, setOpen] = useState(openAtStart);

    const toggleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <div className="bg-secondary-700 rounded-md ">
            <div onClick={toggleOpen} className="border-b-2 p-2">
                <h3 className="font-bold">{title}</h3>
            </div>
            <div>
                <div>{open && <div className="p-2">{children}</div>}</div>
            </div>
        </div>
    )
}

export default Collapse;
