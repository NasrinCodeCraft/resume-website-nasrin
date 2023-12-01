
function TextArea(props) {

    return(
        <>
            <textarea
                onChange={props.handleChange} 
                placeholder={props.placeHolder}>         
            </textarea>
        </>
    )

}

export default TextArea;