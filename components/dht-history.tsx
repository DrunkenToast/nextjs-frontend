import { useToasts } from "./toast-providor";
import { Dht } from "../models/dht";
import DhtGraph from "./dht-graph"
import Collapse from "./collapse"
import { useEffect, useState } from "react";

type Props = {
    dhtHistory: Dht[]
}

const DhtHistory = ({ dhtHistory }: Props) => {
    const { addToast } = useToasts();

    const [ history, setHistory ] = useState<Dht[]>([])
    useEffect(() => {
        setHistory(dhtHistory.slice().reverse())
    }, [dhtHistory])

    const summarizeHistory = () => {
        const cutOffDay = new Date();
        cutOffDay.setDate(cutOffDay.getDate() - 1);

        const index = history.findIndex((dht) => {
            return (new Date(dht.time)).getTime() < cutOffDay.getTime();
        });
        const dayHistory = index === -1 ? history : history.slice(0, index)
        console.log("day:", dayHistory)

        const dhtsPerHour = new Map<number, {temperature: number, humidity: number}[]>();

        for (const dht of dayHistory) {
            const hour = (new Date(dht.time).getHours());
            if (dhtsPerHour.has(hour)) {
                dhtsPerHour.get(hour)!.push({
                    temperature: dht.temperature,
                    humidity: dht.humidity,
                });
            }
            else {
                dhtsPerHour.set(hour, [{
                    temperature: dht.temperature,
                    humidity: dht.humidity,
                }])
            }
        }

        let averagePerHour: Dht[] = [];
        dhtsPerHour.forEach((dhts, hour) => {
            let avgT = 0;
            let avgH = 0;
            for (const dht of dhts) {
                avgT+=dht.temperature;
                avgH+=dht.humidity;
            }
            averagePerHour.push({
                time: hour.toString() + 'h',
                temperature: avgT/dhts.length,
                humidity: avgH/dhts.length,
            })
        })
        console.log(averagePerHour);
        return averagePerHour.reverse();
    }

    return (
        <div className="bg-secondary-500 rounded-lg p-2 text-white  m-5">
            <h2 className="font-bold">History</h2>
            <DhtGraph dhtHistory={summarizeHistory()}/>
            <Collapse openAtStart={false} title={"All entries"}>
                <table className="w-full">
                    <tbody>
                    {
                        history.map((dht) => {
                            return (
                                <tr key={dht.time}>
                                    <td>{dht.time}</td>
                                    <td>{dht.temperature}&deg;C</td>
                                    <td>{dht.humidity}%</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </Collapse>
        </div>
    )
}

export default DhtHistory;
