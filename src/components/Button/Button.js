import PropTypes from 'prop-types';
import { ButtonAtom } from './Button.style'
import {Link} from 'react-router-dom'

export default function Button({ label, pathName= "#", handleClick }) {
        return(
                <ButtonAtom onClick={handleClick}>
                        <Link to={pathName} >
                                {label}
                        </Link>
                </ButtonAtom>
        )
}

Button.defaultProps = {
        label: "button"
}

Button.propTypes = {
        label : PropTypes.string
}