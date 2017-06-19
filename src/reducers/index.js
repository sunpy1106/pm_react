import { combineReducers } from 'redux'
import teamList from './teams'
import curTeam from './curTeam'

export default combineReducers({
  teamList,
  curTeam
});
