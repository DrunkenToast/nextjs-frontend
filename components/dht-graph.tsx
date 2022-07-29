import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useToasts } from "./toast-providor";
import { Dht } from "../models/dht";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

type Props = {
    dhtHistory: Dht[]
}

const DhtGraph = ({ dhtHistory }: Props) => {
    const { addToast } = useToasts();

    const data = {
        labels: dhtHistory.map((dht: Dht) => dht.time),
        datasets: [
            {
                label: 'Temperature',
                data: dhtHistory.map((dht: Dht) => dht.temperature),
                borderColor: 'rgb(246, 146, 40)',
                backgroundColor: 'rgba(246, 146, 40, 0.5)',
                tension: 0.3,
            },
            {
                label: 'Humidity',
                data: dhtHistory.map((dht: Dht) => dht.humidity),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                tension: 0.3,
            },
        ],
    };

    return (
            <div className="h-64">
                <Line  options={graphOptions} data={data} />
            </div>
    )
}

export default DhtGraph;
