export enum ToastType {
    success = "success",
    error = "error",
}

export type Toast = {
    type: ToastType,
    text: string
}

const ToastItem = ({ type, text }: Toast) => {
    return (
        <div className='w-full absolute top-0 p-2'>
            <div className={`bg-success-900 rounded-lg p-2
            text-success-200 shadow-lg font-bold transition-all`}> 
                {text}
            </div>
        </div>
    )
}

export default ToastItem;
