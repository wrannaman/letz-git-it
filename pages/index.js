import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head'

import { withStyles } from '@material-ui/core/styles';


const centered = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const styles = (them) =>({
  top: {
    background: "url(/static/img/header-bottom-light.png) bottom center no-repeat, url(/static/img/particle-left.png) top left no-repeat, url(/static/img/particle-right.png) top right no-repeat, #eff6ff",
    backgroundSize: "100%, auto, auto, auto",
  }
})

const top = {
  background: "url(/static/img/header-bottom-light.png) bottom center no-repeat, url(/static/img/particle-left.png) top left no-repeat, url(/static/img/particle-right.png) top right no-repeat, #eff6ff",
  backgroundSize: "100%, auto, auto, auto",
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}

const footer = {
  background: "url(/static/img/footer-bg.png) no-repeat 50% 0%/contain, #eff6ff",
  height: 350,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const row = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap'
}

const handleClick = () => {
  window.location = "http://eepurl.com/gz5x7v"
}

function Top(props) {
  return (
    <div style={top}>
      <div style={row}>
        <img src="https://wrannaman.github.io/letz-git-it/static/img/logo.png" style={{ width: 350 }}/>
        {false && (<img src="/static/img/Octocat-sugar.png" style={{ width: 350 }} />)}
        {false && (<img src="/static/img/docker-sugar.png" style={{ width: 350 }}/>)}
      </div>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginTop: 0, transition: "all 0.5s ease" }}>
        A weekly newsletter featuring <br/>
        trending and interesting open source projects.
      </Typography>
      <Button onClick={handleClick} style={{ marginTop: 20 }} color="primary" variant="contained">
        Sign Me Up
      </Button>
    </div>
  );
}
function Middle() {
  return (
    <div style={{
      boxShadow: "-1px 2px 20px 0px rgb(71, 184, 244), 0px 24px 38px 3px rgb(73, 180, 245), 0px 9px 46px 8px rgb(120, 22, 254)",
      background: 'linear-gradient(to right, #7a0fff 0%, #46bdf4 100%)',
      color: '#fff',
      paddingTop: 25,
      paddingBottom: 10,
      textAlign: 'center',
      height: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography variant="h6" gutterBottom>
        The code you love with a license developers can earn a living from.
      </Typography>
    </div>
  );
}
class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Head>
           <title>Best open source projects every week in your inbox - letzgitit.dev</title>
         </Head>
        <Top handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Index));
