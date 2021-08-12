import HeaderContainer from './components/Header/Header';
import SideBarContainer from './components/SideBar/SideBar';
import { Route } from 'react-router-dom';
import s from "./App.module.scss"
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { getInitialized } from './redux/appReducer';
import { useEffect } from 'react';
import { getInitializedSelector } from './selectors/appSelectors';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  useEffect(()=>{
    props.getInitialized()
  }, [props.initialized])
  if(!props.initialized) return <div>нехера нету</div>
  return (
    <div className={s.wrapper}>
      <HeaderContainer></HeaderContainer>
      <SideBarContainer></SideBarContainer>
      <div className={s.content}>
        <Route path="/profile/:userId?" render={()=><ProfileContainer></ProfileContainer>}></Route>
        <Route path="/login" render={()=><Login></Login>}></Route>
        <Route path="/users" render={()=><UsersContainer></UsersContainer>}></Route>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    initialized:getInitializedSelector(state)
  }
}

const AppContainer = connect(mapStateToProps,{
  getInitialized
})(App)

export default AppContainer;
