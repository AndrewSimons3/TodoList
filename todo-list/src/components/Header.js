import React from 'react';
import classes from './Header.module.css';
// import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg'

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes['header-title']}>TODO</h1>
      <img className={classes.sun} src={moon} />
    </div>
  )
}

export default Header;
