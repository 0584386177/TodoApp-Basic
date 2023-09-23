import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    title : PropTypes.string,
};


function Header(props) {
    return (
        <div className='todo-title'>
            <h1>{props.title}</h1>
        </div>
    );
}

export default Header;