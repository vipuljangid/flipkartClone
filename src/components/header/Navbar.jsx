import { AppBar, Toolbar, makeStyles, Box, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HeaderButton from './HeaderButton';
import SearchBar from './Search';

const useStyles = makeStyles({
  header: {
    background: '#2874f0',
    height: 55,
    // minHeight:6555 
  },
  component: {
    marginLeft: '12%',
    lineHeight: 0,
    color: '#FFFFFF',
    textDecoration: 'none',
  },
  logo: {
    width: 72,
    marginTop: 6,
  },
  container: {
    display: 'flex',
  },
  explore: {
    fontSize: 11,
    fontStyle: 'italic'
  },
  sublogo: {
    width: 10,
    height: 10,
  },
})

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  }
})(Toolbar);

const Navbar = () => {
  const classes = useStyles();
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <Box>
      <AppBar position="fixed" className={classes.header}>
        <ToolBar >
          <Link to='/' className={classes.component}>
            <img src={logoURL} className={classes.logo} />
            <Box component="span" className={classes.container}>
              <Typography className={classes.explore} >Explore <Box component="span" style={{ color: '#FFE500' }}>Plus</Box></Typography>
              <img src={subURL} className={classes.sublogo} />
            </Box>
          </Link>
          <SearchBar />
          <HeaderButton />
        </ToolBar>
      </AppBar>
    </Box>
  );
}

export default Navbar;