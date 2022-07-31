import { ChangeEvent, FormEvent, useState } from "react";
import { ToastType } from "../models/toast";
import { useToasts } from "./toast-providor";

const SendMessage = () => {
    const [msg, setMsg] = useState<string>('');
    const { addToast } = useToasts();

    function handleMessageSubmit(event: FormEvent) {
        fetch(process.env.NEXT_PUBLIC_API_HOST + '/msg', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: msg,
            })
        })
            .then((response) => {
                if (!response.ok)
                    throw new Error('Request failed');
            })
            .then(() => {
                addToast('Sent message to display', ToastType.success);
            })
            .catch((err) => {
                addToast('Failed to send message', ToastType.error);
                console.error(err);
            })

        event.preventDefault()
    }

    function handleMessageChange(event: ChangeEvent<HTMLInputElement>) {
        // event.target.value = event.target.value.slice(0, 32)
        setMsg(event.target.value);
    }

    return (
        <form className='flex flex-row m-5' onSubmit={handleMessageSubmit}>
            <input type='text' onChange={handleMessageChange} defaultValue={msg}
                className='flex-grow bg-secondary-500 text-white
            rounded-lg p-1 border-4 border-secondary-700
            focus:border-secondary-900 focus:outline-none'
            maxLength={32} placeholder="Send message (max. 32)"
                name="message" id="message" />
            <input type="submit" className='bg-success-900 text-success-200 rounded-lg
      p-2 font-bold' value="Send" />
        </form>
    )
}

export default SendMessage;
