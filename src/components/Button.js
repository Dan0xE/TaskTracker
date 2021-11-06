import PropTypes from 'prop-types';


export const Button = ({ color, text, onClick}) => {
    
    return (
        <div>
                   <button onClick={onClick} style={{backgroundColor: color}} type="button" className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
export default Button;
