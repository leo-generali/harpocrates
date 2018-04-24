import React from 'react';
import Link from 'gatsby-link';

// Components
import Checker from '../components/Checker/index';
import CardContainer from '../components/Library/CardContainer';
import Card from '../components/Library/Card';

// Styles
import styled from 'styled-components';
import { colors, maxWidth } from '../styles/sharedValues';
import { thickUnderline } from '../styles/styleUtils';
import { TypoHeader } from '../styles/typographyStyles';

const HeaderContainer = styled.div`
  background: ${colors.bodyBackground};
  /* background-image: linear-gradient(-90deg, #6409AE, #B4181B); */
  /* background-image: linear-gradient(90deg, rgba(66,115,238,1) 0%, rgba(60,89,224,1) 50%, rgba(0,57,177,1) 100%); */
  /* background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%); */
  /* background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%); */
  box-shadow: inset 0 1px 2px rgba(0,0,0,.39), 0 -1px 1px #FFF, 0 1px 0 #FFF;
  padding: 6rem 0 11rem;
`;

const HeaderTextWrapper = styled.div`
  max-width: ${maxWidth.small};
  margin: 4em auto;

  @media screen and (min-width: 900px) {
    max-width: ${maxWidth.medium};
  }

  @media screen and (min-width: 1200px) {
    max-width: ${maxWidth.large};
  }
`;

const TextWrapper = styled.div`
  max-width: 50%;
  line-height: 1.5;
`;

const HeaderText = styled.p`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  position: relative;
  z-index: 0;
  margin-top: 2rem;
`;

const StackUp = styled.span`
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: #FFFFFF;
  ${ thickUnderline('#FFFFFF')};
`;

const IndexPage = () => (
  <section>
    <HeaderContainer>
      <HeaderTextWrapper>
        <TextWrapper>
          <StackUp>How does your password stack up?</StackUp>
          <HeaderText>A good password is key. We want to help make sure you're covered.</HeaderText>
        </TextWrapper>
      </HeaderTextWrapper>
      <Checker />
    </HeaderContainer>
    <CardContainer>
      <Card fullWidth>
        <TypoHeader underline color={colors.bodyBackground}>Why Should I Care?</TypoHeader>
      </Card>
      <Card fullWidth>
        <TypoHeader underline color={colors.bodyBackground}>The Schneier Scheme</TypoHeader>
        <p>Thankfully for you, security expert *Bruce Schneier has come up with a simple formula to create hard-to-break passwords that can easily be remembered.  It’s called the <i>Schneier Scheme</i>. </p>
        <p>The idea behind the <i>Schneier Scheme</i> is to take a sentence and turn it into a password. The example Schneier uses himself is to turn “This little piggy went to market” into “tlpWENT2m”. </p>
        <p>Start out by taking a phrase or sentence you’ll remember. This could be anything: a favorite movie quote or lyric perhaps. Let’s go with the Han Solo classic: “It’s the ship that made the Kessel run in less than twelve parsecs”.</p>
        <p>Take the first letter of each word in the sentence. Continuing with our example, we’ve now got: <code>“itstmtkriltwp”</code>. Already we’ve created a decent password that’s not hard to remember, but we can still make it better. </p>
        <p>Using a pattern of your choosing, switch between uppercase and lowercase letters. All of the sudden <code>“itstmtkriltwp”</code> turns into <code>“iTsTmTkRiLtTp”</code>. We’re going with something simple here (every other letter), but feel free to play around with it. Two lowercase and one uppercase, two lowercase and three uppercase, or three lowercase and two uppercase are all valid patterns.</p>
        <p>Our password is looking much better, but we can still make it stronger by adding numbers and symbols. One way we can do that is by going down the number row on our keyboards and holding the shift key in a pattern we know. Let’s go 1 through 8 and hold shift on every other number: <code>“1@3$5^7*”</code>.  This is still missing our original phrase, which we can add right back into the middle of the new password:  <code>“1@3$iTsTmTkRiLtTp5^7*”</code>.</p>
        <p>At first glance, that may look like a random password, but walking through the steps you can can see that it becomes fairly simple to create a strong and easily remembered password.</p>
      </Card>
    </CardContainer>
  </section>
)

export default IndexPage;
