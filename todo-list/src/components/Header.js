import React from 'react';
import classes from './Header.module.css';
import sun from '../images/icon-sun.svg';
import moon from '../images/icon-moon.svg'

const Header = props => {

  return (
		<div className={classes.header}>
			<h1 className={classes['header-title']}>TODO</h1>
		{props.display && <img
				className={classes.moon}
				src={moon}
        onClick={props.onToggleDisplay}
        alt=''
			/>}
      {!props.display && <img
        className={classes.sun}
        src={sun}
        onClick={props.onToggleDisplay} 
        alt=''
      />}
		</div>
	);
}

export default Header;
