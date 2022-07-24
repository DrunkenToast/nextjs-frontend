import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Toast, ToastType } from "../models/toast";
import { v4 as uuidv4 } from 'uuid';

type toastContextType = {
    toasts: Toast[];
    addToast: (text: string, type: ToastType) => void;
    removeToast: (id: String) => void;
}

const toastContextDefault: toastContextType = {
    toasts: [],
    addToast: () => { },
    removeToast: () => { },
}

const ToastContext = createContext<toastContextType>(toastContextDefault);

export function useToasts() {
    return useContext(ToastContext);
}

type Props = {
    children: ReactNode;
}

export function ToastProvider({ children }: Props) {
    const [toasts, setToasts] = useState<Toast[]>([]);
    const toastRef = useRef<Toast[]>([]);

    useEffect(() => {
        toastRef.current = toasts;
    }, [toasts])

    const addToast = (text: string, type: ToastType) => {
        const newToasts = toasts.slice();
        const newToast = {
            id: uuidv4(),
            text,
            type,
        }
        newToasts.push(newToast);
        setToasts(newToasts);

       setTimeout(() => {
           removeToast(newToast.id)
       }, 2000)
    }

    const removeToast = (id: String) => {
        let newToasts = toastRef.current;
        newToasts = newToasts.filter((toast) => toast.id !== id)
        console.log(toasts, newToasts)
        setToasts(newToasts);
    }

    const value = {
        toasts,
        addToast,
        removeToast,
    }

    return (
        <>
            <ToastContext.Provider value={value}>
                {children}
            </ToastContext.Provider>
        </>
    )
}

