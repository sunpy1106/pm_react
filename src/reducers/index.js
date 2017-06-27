import { combineReducers } from 'redux'
import teamList from './teams'
import memberList from './teamDetail'
import curTeam from './curTeam'
export default combineReducers({
  teamList,
  memberList,
  curTeam
});
