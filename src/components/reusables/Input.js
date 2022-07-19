import "./reusable.css"

const Input = ({text, handleChange, icon, label}) => {
  return (
        <div className="input-container">
            <div className="label-container">
                <label>{label}</label>
            </div>
            <input 
                name={label}
                type={text} 
                onChange={handleChange} />
            <img src={icon} alt="input-icon"/>
        
        </div>
    )
}

export default Input