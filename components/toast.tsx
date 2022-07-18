import styles from '../styles/Toast.module.css';

export enum ToastType {
    success = "success",
    error = "error",
}

type Props = {
    type: ToastType,
    text: string
    shown: boolean
    //onClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const Toast = ({type, text, shown}: Props) => {
    console.log(shown ? styles['shown'] : '')
    return (
        <div className={[styles.toast, styles[type], (shown ? styles['shown'] : '')]
            .join(' ')}>
            {text}
        </div>
    )
}

export default Toast;
