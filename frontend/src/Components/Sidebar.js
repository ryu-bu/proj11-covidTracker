import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const sideWidth = 400;
const offset = 150;

const topHeight = 150;
const tabs = ['Quick Stats', 'Community Resources', 'Legislation', 'Contacts'];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  bar: {
    [theme.breakpoints.up('sm')]: {
      width: topHeight,
      flexShrink: 0,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: sideWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${sideWidth}px)`,
      marginLeft: sideWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerpaper: {
    backgroundColor: fade('#0054A6', 0.8),
    width: sideWidth,
    marginTop: offset,
  },
  barpaper: {
    backgroundColor: fade('#0054A6', 0.8),
    height: topHeight,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [index, setOpen] = React.useState(0);
  var nextIndex = 0;
  
  const changeOpen = (i) => {
    if(index == 0) {
      setOpen(i);
    }
    else {
      setOpen(0).then(() => {
        setOpen(i);
      });
    }
  };

  const closing = () => {
    console.log('fuckl')
    setOpen(nextIndex);
  }

  const box = {
    display: 'flex',
    justifyContent: 'flex-end',
    height: topHeight/2 - 1,
    alignItems: 'center'
  };

  const rowBox = {
    padding: 5,
    marginRight: 20
  }

  const tabBox = {
    flexDirection: 'row',
    display: 'flex',
    width: 600,
    padding: 5,
    marginRight: 20
  }

  const title = {
    fontSize: '45px',
    color: '#FFCC99',
    fontFamily: ['Arial Bold']
  }

  const button = {
    height: 50,
    justifyContent: 'center',
    alignItems: "center"
  }

  const buttonText = {
    fontSize: '15px',
    color: '#FFCC99',
    fontFamily: ['Arial']
  }

  function TopBar() {
    return (
      <div>
        <Box display="flex" style={box} >
          <Box flexGrow={1} padding={4}>
            <Typography variant="h2" align="left" style={title}>
              BOSTON COVID-19 RESOURCE MAP
            </Typography>
          </Box>
          <Box marginRight={3}>
            <Button style={button}>
                  <Typography align="center" style={buttonText}>
                    All Profiles
                  </Typography>
            </Button>
          </Box>
        </Box>
        <Box style={box}>
          <Box display="flex" justifyContent="flex-end" style={tabBox}>
            {tabs.map((text, i) => (
              <Button style={button} onClick={() => changeOpen(i + 1)}>
                <Typography align="center" style={buttonText}>
                  {text}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      </div>
    );
  }

  // const drawer = (
  //   <div>
  //     <List>
  //       {['Town/Zipcode', 'Resources'].map((text, index) => (
  //         <ListItem button key={text}>
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );
  function Content() {
    var Func;
    switch(index) {
      case 1:
        Func = Stats;
        break;
      case 2:
        Func = Resource;
        break;
      case 3:
        Func = Legislation;
        break;
      case 4:
        Func = Contacts;
        break;
      default:
        return null;
    }
    return (
      <List>
        <ListItem button>
          <Func />
        </ListItem>
      </List>
    );
  }       
  function Stats() {
    return (
      <ListItemText primary={tabs[0]} />
    );
  }

  function Resource() {
    return (
      <ListItemText primary={tabs[1]} />
    );
  }

  function Legislation() {
    return (
      <ListItemText primary={tabs[2]} />
    );
  }

  function Contacts() {
    return (
      <ListItemText primary={tabs[3]} />
    );
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.bar} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant={"temporary"}
            anchor={"top"}
            classes={{
              paper: classes.barpaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <TopBar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.barpaper,
            }}
            variant="permanent"
            anchor={"top"}
          >
            <TopBar />
          </Drawer>
        </Hidden>
      </nav>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant={"persistent"}
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={index != 0}
            onClose={() => setOpen(0)}
            classes={{
              paper: classes.drawerpaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <Content />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerpaper,
            }}
            variant="persistent"
            open={index != 0}
            onClose={() => closing()}
          >
            <Content />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
