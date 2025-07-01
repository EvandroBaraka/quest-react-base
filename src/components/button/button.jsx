import './button.css'


const Button = ({ label = 'Clique Aqui' }) => {
    const showLabelName = () => alert(`A label desse botão é ${label}`)

    return (
        <button className="btn" onClick={() => { showLabelName() }}>
            {label}
        </button>
    )
}

export default Button