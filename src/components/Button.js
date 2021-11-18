const Button = ({ text, color, backgroundColor, onDelete }) => {
  return <button style={{ color, backgroundColor }} onClick={onDelete}>{text}</button>
}

export default Button