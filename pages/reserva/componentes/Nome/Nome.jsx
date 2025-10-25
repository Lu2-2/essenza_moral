import './Nome.css'

const Nome = (props) => {
    return(
        <div>
        <label>{props.label}</label>
        <input type="text" placeholder={props.placeholder} />
        </div>
    )
}

export default Nome