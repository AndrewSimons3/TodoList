import React, {useState} from 'react';
import classes from './Header.module.css';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg'

const Header = props => {

  
  // const toggleDarkMode = () => {
  //   setToggleDark(value => !value);
  // }

  return (
    <div className={classes.header}>
      <h1 className={classes['header-title']}>TODO</h1>
      <img className={classes.moon} src={moon}  />
      {/* <img className={classes.sun} src={sun} /> */}
    </div>
  )
}

export default Header;
