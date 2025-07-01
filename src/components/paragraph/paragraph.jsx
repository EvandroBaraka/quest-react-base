import './paragraph.css'

const ParagraphToUper = ({children, textColor}) => {
    return(
        <p style={{color: textColor}}>
            {children.toUpperCase()}
        </p>
    )
}

export default ParagraphToUper