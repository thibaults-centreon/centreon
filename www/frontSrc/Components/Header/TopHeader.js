import React, {Component} from 'react'
import Grid from 'material-ui/Grid'
import AppBar from 'material-ui/AppBar'
import grey from 'material-ui/colors/grey'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { ObjectStatus, UserProfile } from 'Components'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    fontFamily: theme.font.openSans,

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    backgroundColor: '#222e3c',
  },
  avatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: grey[200],
  },
})



class TopHeader extends Component {
  render () {
    const {classes, object} = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Grid container spacing={16}>
            <Grid item sm={3}>
              <Typography variant="title" color="inherit" noWrap>
                Centreon
              </Typography>
            </Grid>
            {object.map(obj =>
              <ObjectStatus object={obj} key={obj}/>
            )}
            <UserProfile />
          </Grid>
        </AppBar>
      </div>
    )
  }
}

TopHeader.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TopHeader)