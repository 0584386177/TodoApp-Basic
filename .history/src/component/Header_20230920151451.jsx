import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    title : PropTypes.string,
};


function Header(props) {
    return (
        <div>
            <h1>{title}Ơ</h1>
        </div>
    );
}

export default Header;