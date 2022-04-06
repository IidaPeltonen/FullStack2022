/* Iida Peltonen 2022 */

const Notification = ({ message, message2 }) => {
  if (message === null) {
    return null
  }

  return <div className='success'>{message}</div>
  return <div className='error'>{message2}</div>
}

export default Notification