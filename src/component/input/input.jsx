
function Input(props) {

    return (
        <input
            type="text"
            name={props.name}
            placeholder={props.placeHolder}
            onChange={props.handleChange}
        />
    )

}

export default Input;