import React, {useEffect, useRef} from 'react'
import "./assets/style/index.css"
import firebase from "firebase"
import SliderDisplay from "../SliderDisplay/SliderDisplay"
import TopSeller from "../TopSeller/TopSeller"
import BecomeABuyer from "../BecomeABuyer/BecomeABuyer"
import BecomeASeller from "../BecomeASeller/BecomeASeller"
import HomeProduct from "../HomeProduct/HomeProduct"
import Banner from "../Banner/Banner"
import {useSelector} from "react-redux"
import Login from "../Login/Login"
import SignUp from "../SignUp/SignUp"
import {withRouter} from "react-router-dom"
import {setUser, clearUser} from "../../actions/setUser"
import {useDispatch} from "react-redux"







const Home = ({history}) => {


    const login = useSelector((state) => state.login.showLogin);
    const signup = useSelector((state) => state.login.showSignup);
    const dispatch = useDispatch()
    const isMountedRef = useRef(null);


    useEffect(() => {

      isMountedRef.current = true;
      firebase
        .auth()
        .onAuthStateChanged(user => {
          if (user) {
            console.log(user);
            history.push("/");
            dispatch(setUser(user))
  
          }
          else {
            history.push("/")
            dispatch(clearUser());
          }
        })
      return () => {
        console.log("user unmount")
        isMountedRef.current = false;
      }
    }, [])
    





    return (
      <section className="shopper-home">
        <Banner />
        <SliderDisplay />
        <TopSeller />
        <BecomeABuyer />
        <BecomeASeller />
        <HomeProduct />
        {login ? <Login /> : null}
        {signup ? <SignUp /> : null}
      </section>
    );
}

export default withRouter(Home);
