import { ToastType } from "../models/toast";
import { useToasts } from "./toast-providor";

const LedSwitch = () => {
    const {addToast} = useToasts();

    function switchLed(state: boolean) {
        console.log(process.env.NEXT_PUBLIC_API_HOST, state);
        addToast('Switched LED ' + (state ? 'on' : 'off'), ToastType.success)
    }

    return (
        <div className="text-white font-bold [&>*]:p-3 
        border-4 border-secondary-700 rounded-2xl overflow-hidden
        flex flex-row m-5 [&>*]:transition-all shadow-lg">
            <button onClick={() => switchLed(false)}
                className={`flex-grow bg-danger-900 text-danger-200
                hover:bg-secondary-700 hover:text-white`}>
                LED OFF
            </button>
            <button onClick={() => switchLed(true)}
                className={`flex-grow bg-success-900 text-success-200
                hover:bg-secondary-700 hover:text-white`}>
                LED ON
            </button>
        </div>
    )
}


export default LedSwitch;
