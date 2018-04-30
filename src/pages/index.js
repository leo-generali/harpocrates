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
import { TypoHeader, Text, Mono, Bold, H1, H2, H3, H4, H5, H6 } from '../styles/typographyStyles';
import { HeroContainer, HeroText, HeroTextMain } from '../styles/pageStyles';

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

const IndexPage = () => (
  <section>
    <HeroContainer>
      <HeaderTextWrapper>
        <TextWrapper>
          <HeroTextMain>How does your password stack up?</HeroTextMain>
          <HeroText>A good password is key. We want to help make sure you're covered.</HeroText>
        </TextWrapper>
      </HeaderTextWrapper>
      <Checker />
    </HeroContainer>
    <CardContainer>
      <Card columnSpan={'1/4'}>
        <TypoHeader black underline color={colors.bodyBackground}>The Schneier Scheme</TypoHeader>
        <Text>Thankfully for you, security expert Bruce Schneier has come up with a simple formula to create hard-to-break passwords that can easily be remembered.  It’s called the <Bold>Schneier Scheme</Bold>. </Text>
        <Text>The idea behind the <Bold>Schneier Scheme</Bold> is to take a sentence and turn it into a password. The example Schneier uses himself is to turn “This little piggy went to market” into “tlpWENT2m”. </Text>
        <Text>Start out by taking a phrase or sentence you’ll remember. This could be anything: a favorite movie quote or lyric perhaps. Let’s go with the Han Solo classic: “It’s the ship that made the Kessel run in less than twelve parsecs”.</Text>
        <Text>Take the first letter of each word in the sentence. Continuing with our example, we’ve now got: <code>“itstmtkriltwp”</code>. Already we’ve created a decent password that’s not hard to remember, but we can still make it better. </Text>
        <Text>Using a pattern of your choosing, switch between uppercase and lowercase letters. All of the sudden <code>“itstmtkriltwp”</code> turns into <code>“iTsTmTkRiLtTp”</code>. We’re going with something simple here (every other letter), but feel free to play around with it. Two lowercase and one uppercase, two lowercase and three uppercase, or three lowercase and two uppercase are all valid patterns.</Text>
        <Text>Our password is looking much better, but we can still make it stronger by adding numbers and symbols. One way we can do that is by going down the number row on our keyboards and holding the shift key in a pattern we know. Let’s go 1 through 8 and hold shift on every other number: <code>“1@3$5^7*”</code>.  This is still missing our original phrase, which we can add right back into the middle of the new password:  <code>“1@3$iTsTmTkRiLtTp5^7*”</code>.</Text>
        <Text>At first glance, that may look like a random password, but walking through the steps you can can see that it becomes fairly simple to create a strong and easily remembered password.</Text>
      </Card>
      <Card sidebar columnSpan={'4/5'}>
        {/* <TypoHeader black underline color={colors.bodyBackground}>Links</TypoHeader> */}
        {/* <TypoHeader black underline color={colors.bodyBackground}>The Schneier Scheme</TypoHeader>
        <Text>Thankfully for you, security expert Bruce Schneier has come up with a simple formula to create hard-to-break passwords that can easily be remembered.  It’s called the <Bold>Schneier Scheme</Bold>. </Text>
        <Text>The idea behind the <Bold>Schneier Scheme</Bold> is to take a sentence and turn it into a password. The example Schneier uses himself is to turn “This little piggy went to market” into “tlpWENT2m”. </Text>
        <Text>Start out by taking a phrase or sentence you’ll remember. This could be anything: a favorite movie quote or lyric perhaps. Let’s go with the Han Solo classic: “It’s the ship that made the Kessel run in less than twelve parsecs”.</Text>
        <Text>Take the first letter of each word in the sentence. Continuing with our example, we’ve now got: <code>“itstmtkriltwp”</code>. Already we’ve created a decent password that’s not hard to remember, but we can still make it better. </Text>
        <Text>Using a pattern of your choosing, switch between uppercase and lowercase letters. All of the sudden <code>“itstmtkriltwp”</code> turns into <code>“iTsTmTkRiLtTp”</code>. We’re going with something simple here (every other letter), but feel free to play around with it. Two lowercase and one uppercase, two lowercase and three uppercase, or three lowercase and two uppercase are all valid patterns.</Text>
        <Text>Our password is looking much better, but we can still make it stronger by adding numbers and symbols. One way we can do that is by going down the number row on our keyboards and holding the shift key in a pattern we know. Let’s go 1 through 8 and hold shift on every other number: <code>“1@3$5^7*”</code>.  This is still missing our original phrase, which we can add right back into the middle of the new password:  <code>“1@3$iTsTmTkRiLtTp5^7*”</code>.</Text>
        <Text>At first glance, that may look like a random password, but walking through the steps you can can see that it becomes fairly simple to create a strong and easily remembered password.</Text> */}
      </Card>
    </CardContainer>
  </section>
)

export default IndexPage;
