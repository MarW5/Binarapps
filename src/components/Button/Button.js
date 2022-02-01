import PropTypes from 'prop-types';
import { ButtonAtom } from './Button.style'
import {Link} from 'react-router-dom'

export default function Button({ label, pathName= "#", handleClick }) {
        return(
                <ButtonAtom>
                        <Link to={pathName} onClick={handleClick} >
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