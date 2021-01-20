import React from 'react';
import Logo from "./assets/images/logo.svg";
import Love from "./assets/images/love.svg";
import Cart from "./assets/images/cart.svg";
import HeaderTag from "../HeaderTag/HeaderTag";
import Arrow from "./assets/images/arrow.svg";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {displayLoginSection, displaySignupSection} from "../../actions/loginAction";
import {Container} from "../../components/Main";
import {HeaderDisplay} from "../../components/Header";
import { Button, RouterLink } from "../../components/Button";
import {Nav, Ul, Li} from "../../components/Nav";
import { Form, TextInput, SubmitBtn } from "../../components/Form";
import styled, {css} from "styled-components"
import firebase from "firebase"
import {logOut} from "../../actions/setUser"

const OutterImageDiv = styled.div `
  width: 100%;
  display: inline-block;
  margin-right: 10px;
`
const InnerImageDisplay = styled.div `
  display: flex;

  ${({inner}) => inner && css `
    align-items: center;
  `}
`

const Image = styled.img `
  /* vertical-align: middle; */
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`



const Header = () => {

  const dispatch = useDispatch()
  const login = useSelector((state) => state.login.showLogin);
  const signup = useSelector((state) => state.login.showSignup);
  const user = useSelector((state) => state.user.currentUser)

  const handleSignOut = () => {
    dispatch(logOut())
  }


    return (
      <section>
        <Container>
          <HeaderDisplay>
            <RouterLink to="/">
              <img src={Logo} alt="" />
            </RouterLink>

            <Form action="" className="form">
              <TextInput
                type="text"
                name=""
                id=""
                placeholder="Search for Products"
              />
              <SubmitBtn type="submit" value="Search" />
            </Form>

            <Nav>

            {user ? (
              <Ul headerUl>
                <Li headerLi>
                  <Button
                    headerBtn
                  >
                    Request {/* Request Quote */}
                  </Button>
                </Li>
                <Li headerLi>
                  <Button
                    headerBtn
                  >
                    Dashboard
                  </Button>
                </Li>
                <Li headerLi>
                  <RouterLink to="/wishlist">
                    <img src={Love} alt="" />
                  </RouterLink>
                </Li>
                <Li headerLi>
                  <RouterLink to="/cart">
                    <img src={Cart} alt="" />
                  </RouterLink>
                </Li>
                <Li headerLi>
                  <InnerImageDisplay>
                    <RouterLink to="/profile-page">
                      <OutterImageDiv >
                        <InnerImageDisplay inner>
                          <Image className="profile" src={user.photoURL} alt="" />
                        </InnerImageDisplay>
                      </OutterImageDiv>
                    </RouterLink>
                    <img className="arrow" onClick={handleSignOut} src={Arrow} alt="" />
                  </InnerImageDisplay>
                </Li>
              </Ul>
            ): (
              <Ul headerUl>

                <Li headerLi>
                  <Button
                    headerBtn
                    onClick={() => dispatch(displayLoginSection())}
                    disabled={signup ? "true": ""}
                  >
                    Log in
                  </Button>
                </Li>
                <Li headerLi>
                  <Button
                    headerBtn
                    onClick={() => dispatch(displaySignupSection())}
                    disabled={login ? "true": ""}
                  >
                    Sign up
                  </Button>
                </Li>
                <Li headerLi>
                  <RouterLink to="/wishlist">
                    <img src={Love} alt="" />
                  </RouterLink>
                </Li>
                <Li headerLi>
                  <RouterLink to="/cart">
                    <img src={Cart} alt="" />
                  </RouterLink>
                </Li>
              </Ul>
            )}
              



              
            </Nav>
          </HeaderDisplay>
        </Container>
        <HeaderTag />
      </section>
    );
}

export default Header
