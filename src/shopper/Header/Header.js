import React from 'react';
import Logo from "./assets/images/logo.svg";
import Love from "./assets/images/love.svg";
import Cart from "./assets/images/cart.svg";
import HeaderTag from "../HeaderTag/HeaderTag";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {displayLoginSection} from "../../actions/loginAction";
import {displaySignupSection} from "../../actions/loginAction";
import {Container} from "../../components/Main";
import {HeaderDisplay} from "../../components/Header";
import { Button, RouterLink } from "../../components/Button";
import {Nav, Ul, Li} from "../../components/Nav";
import { Form, TextInput, SubmitBtn } from "../../components/Form";



const Header = () => {

  const dispatch = useDispatch()
  const login = useSelector((state) => state.login.showLogin);
  const signup = useSelector((state) => state.login.showSignup);

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
            </Nav>
          </HeaderDisplay>
        </Container>
        <HeaderTag />
      </section>
    );
}

export default Header
