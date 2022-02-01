import {Title} from './TitleCategory.style.js'
import PropTypes from 'prop-types';

export default function TitleCategory({title}){
        return(
                <Title>{title}</Title>
        )
}

TitleCategory.defaultProps = {
        title: "animals"
}

TitleCategory.propTypes = {
        title : PropTypes.string
}