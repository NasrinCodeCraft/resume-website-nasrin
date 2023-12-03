
function TextArea(props) {

    return(
        <>
            <textarea
                onChange={props.handleChange} 
                placeholder={props.placeHolder}
                name={props.name}        
                > 
            </textarea>
        </>
    )

}

export default TextArea;