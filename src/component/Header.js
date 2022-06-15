import React from 'react';

const Header = (props) => (
    <div className='header'>
        <div className='container'>
             <h1 className='header-title'>{props.title}</h1>
             <p className='header-subTitle'>The secret of getting ahead is getting started.</p>
        </div>
    </div>
)
Header.defaultProps = {
    title: 'To-Do List App'
}

export default Header;