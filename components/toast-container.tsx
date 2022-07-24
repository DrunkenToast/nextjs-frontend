import { ToastType } from "../models/toast";
import { useToasts } from "./toast-providor"

const ToastContainer = () => {
    const { toasts, removeToast } = useToasts();

    return (
        <div className="absolute top-0 flex flex-col w-full">
            {
                toasts.map((toast) => {
                    return (
                        <div key={toast.id} className='w-full top-0 p-2 cursor-pointer'
                            onClick={() => removeToast(toast.id)}>
                            <div className={`rounded-lg p-2 shadow-lg font-bold transition-all ` +
                                (toast.type == ToastType.success ?
                                    'bg-success-900 text-success-200' : 'bg-danger-900 text-danger-200')}>
                                {toast.text}
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default ToastContainer;
