import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const topHeight = 150;
const tabs = ['Quick Stats', 'Community Resources', 'Legislation', 'Contacts'];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: topHeight,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${topHeight}px)`,
      marginLeft: topHeight,
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
  paper: {
    backgroundColor: fade('#0054A6', 0.8),
    height: topHeight,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function TopDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
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
          {tabs.map((text) => (
            <Button style={button}>
              <Typography align="center" style={buttonText}>
                {text}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant={"temporary"}
            anchor={"top"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.paper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.paper,
            }}
            variant="permanent"
            open
            anchor={"top"}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

TopDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default TopDrawer;
