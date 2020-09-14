import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';

import { Link } from 'react-router-dom'
export default function Home() {
    const classes = useStyles();
    return (
        <div style={{flex:'row',flex:1,backgroundColor:'lightGreen',margin:'5px 5px' ,height:50}}>
            {/* <h1>Home Page</h1> */}
            <HomeIcon style={{}}/>
            <nav >
                <Link to='/about' >About</Link>  |{' '}
                <Link to='/contact'>Contact</Link> | {' '}
            </nav>

        </div>
    )
}
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));