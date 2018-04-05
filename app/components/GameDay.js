import React from 'react';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class GameDay extends React.Component {
  state = {
    isNewGameDay: false,
    homeTeam: null,
    awayTeam: null,
    time: null
  };
  styles = {
    thumbStyle: {
      borderRadius: '3'
    },
    trackStyle: {
      borderRadius: '3px'
    },
    thumbOff: {
      backgroundColor: '#f1f1f1',
    },
    trackOff: {
      backgroundColor: '#fff'
    },
    thumbSwitched: {
      backgroundColor: '#f1f1f1',
    },
    trackSwitched: {
      backgroundColor: '#fff',
      opacity: '0.5'
    },
    labelStyle: {
      fontWeight: '300'
    },
    floatingLabelStyle: {
      color: 'white'
    }
  };
  newGameDay = () => this.setState({ isNewGameDay: !this.state.isNewGameDay});
  homeTeamChange = (event, index, value) => this.setState({ homeTeam: value});
  awayTeamChange = (event, index, value) => this.setState({ awayTeam: value});
  timeChange = (event, index, value) => this.setState({ time: value});

  render() {
    return (
      <div className="container-fluid">
        <div className="content-wrapper gameday-wrapper">
          <h1 className="gameday_title">Game day</h1>
          <div className="hr"/>
          <button className="gameday_btn gameday_new" onClick={this.newGameDay}>New game day</button>
          {this.state.isNewGameDay &&
            <form className="gameday_form">
              <div className="gameday_form_date">
                Sat, jun 3
              </div>
              <div className="gameday_form_info">
                <span>GAME #1</span>
                <div className="gameday_form_toggle-wrapper">
                  <span className="gameday_form_toggle-label gameday_form_toggle-label-left">Offline</span>
                  <MuiThemeProvider>
                    <Toggle
                      thumbStyle={this.styles.thumbOff}
                      trackStyle={this.styles.trackOff}
                      thumbSwitchedStyle={this.styles.thumbSwitched}
                      trackSwitchedStyle={this.styles.trackSwitched}
                      labelStyle={this.styles.labelStyle}
                    />
                  </MuiThemeProvider>
                  <span className="gameday_form_toggle-label gameday_form_toggle-label-right">Live</span>
                </div>
                <span>Court 1</span>
              </div>
              <div className="gameday_form_input-block">
                <MuiThemeProvider>
                  <div className="gameday_form_select-wrapper">
                    <SelectField
                      labelStyle={{ color: 'white' }}
                      floatingLabelText="HOME TEAM"
                      maxHeight={200}
                      floatingLabelStyle={this.styles.floatingLabelStyle}
                      value={this.state.homeTeam}
                      onChange={this.homeTeamChange}
                      fullWidth
                    >
                      <MenuItem value={1} primaryText="Liverpool" />
                      <MenuItem value={2} primaryText="Chelsea" />
                      <MenuItem value={3} primaryText="Man Utd." />
                      <MenuItem value={4} primaryText="Man City" />
                      <MenuItem value={5} primaryText="Arsenal" />
                    </SelectField>
                  </div>
                  <div className="gameday_form_select-wrapper">
                    <SelectField
                      labelStyle={{ color: 'white' }}
                      floatingLabelText="AWAY TEAM"
                      maxHeight={200}
                      floatingLabelStyle={this.styles.floatingLabelStyle}
                      value={this.state.awayTeam}
                      onChange={this.awayTeamChange}
                      fullWidth
                    >
                      <MenuItem value={1} primaryText="Tottenham" />
                      <MenuItem value={2} primaryText="Leicester" />
                      <MenuItem value={3} primaryText="Everton" />
                      <MenuItem value={4} primaryText="West Ham Utd." />
                      <MenuItem value={5} primaryText="Swansea" />
                    </SelectField>
                  </div>
                  <div className="gameday_form_select-wrapper">
                    <SelectField
                      labelStyle={{ color: 'white' }}
                      floatingLabelText="TIME (minutes per half)"
                      maxHeight={200}
                      floatingLabelStyle={this.styles.floatingLabelStyle}
                      value={this.state.time}
                      onChange={this.timeChange}
                      fullWidth
                    >
                      <MenuItem value={1} primaryText="25" />
                      <MenuItem value={2} primaryText="30" />
                      <MenuItem value={3} primaryText="35" />
                      <MenuItem value={4} primaryText="40" />
                      <MenuItem value={5} primaryText="45" />
                    </SelectField>
                  </div>
                </MuiThemeProvider>
              </div>
              <button className="gameday_btn gameday_add">Add game</button>
            </form>
          }
        </div>
      </div>
    );
  }
}

export default GameDay;
