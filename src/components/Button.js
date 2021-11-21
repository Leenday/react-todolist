const Button = ({ text, color, backgroundColor, onClick }) => {
  return <button style={{ color, backgroundColor }} onClick={onClick}>{text}</button>
}

export default Button