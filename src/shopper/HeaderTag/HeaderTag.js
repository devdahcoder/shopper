import React from 'react';
import styled from "styled-components"
import {Container} from "../../components/Main"
import {Nav, Ul, Li, LinkTag} from "../../components/Nav"

const HeaderTagSection = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 0;
  background-color: #f4f4f4;
`;


const HeaderTag = () => {
    return (
      <HeaderTagSection>
        <Container>
          <Nav>
            <Ul>
              <Li>
                <LinkTag href="http://www.google.com">Home Decor</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Furniture</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Lighting</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Home Accents</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Rugs</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Outdoors</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Holidays</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Gifts</LinkTag>
              </Li>
              <Li>
                <LinkTag href="http://www.google.com">Events</LinkTag>
              </Li>
            </Ul>
          </Nav>
        </Container>
      </HeaderTagSection>
    );
}

export default HeaderTag
