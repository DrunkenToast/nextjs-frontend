const SendMessage = () => {
  return (
    <div className='flex flex-row m-5'>
      <input type='text' className='flex-grow bg-secondary-500 text-success-200 
      rounded-lg p-1 border-4 border-secondary-700 focus:border-secondary-900
      focus:outline-none'
      maxLength={32} placeholder="Send message (max. 32)"
        name="message" id="message"/>
      <input type="submit" className='bg-success-900 text-success-200 rounded-lg
      p-2 font-bold' value="Send"/>
    </div>
  )
}

export default SendMessage;
