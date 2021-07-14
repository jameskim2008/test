import React from 'react'
import Button from './Button'

import PropTypes from 'prop-types'


const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'green' : 'steelblue'} text={showAdd ? 'Add' : 'Close'} onClick={ onAdd }></Button>
           


        </header>


    )
}

Header.defaultProps = {
    title: 'My Default Title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
