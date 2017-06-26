import { combineReducers } from 'redux'
import teamList from './teams'
import memberList from './teamDetail'

export default combineReducers({
  teamList,
  memberList
});
