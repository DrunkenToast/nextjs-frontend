export enum ToastType {
    success = "success",
    error = "error",
}

export type Toast = {
    id: string,
    type: ToastType,
    text: string
}

