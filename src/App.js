import React, { Component } from "react";
import styled from "styled-components";
import "normalize.css";
import "milligram";
import Twitter from "react-icons/lib/fa/twitter";
import Medium from "react-icons/lib/fa/medium";
import Email from "react-icons/lib/md/email";

import brands from "brand-colors";

const brandColors = ["google", "medium", "twitter"].reduce(
  (o, k) => (o[k] = brands.find(k)[0].color) && o,
  {}
);

const HeaderSection = styled.header`
  padding: 60px 0;
  padding-bottom: 20px;
  //text-align: center;
`;

const Heading = styled.h1`
  line-height: 0.7;
`;

const SubHeading = styled.small`
  font-size: 40%;
`;

const TierNote = styled.p`
  margin-top: -15px;
  font-size: 13px;
`;

const SectionHeading = styled.h3`
  margin-top: 40px;
  margin-bottom: 15px;
`;

const SocialLinkContainer = styled.a`
  background-color: ${props => props.color};
  padding: 8px;
  color: white;
  border-radius: 50%;
  transition: 0.3s all ease;
  font-size: 24px;
  margin-right: 5px;
  display: inline-block;
  line-height: 1;

  &:hover {
    color: white;
    border-radius: 0;
  }
`;

const SocialLink = ({ icon, href, color }) => (
  <SocialLinkContainer href={href} color={color}>
    {icon()}
  </SocialLinkContainer>
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <HeaderSection>
          <Heading>
            State of the Union
            <br />
            <SubHeading>(of cells that make up Steve)</SubHeading>
          </Heading>
        </HeaderSection>
        <div>
          <SocialLink
            href="https://www.twitter.com/@calinleafshade"
            icon={Twitter}
            color={brandColors.twitter}
          />
          <SocialLink
            href="https://www.medium.com/@calinleafshade"
            icon={Medium}
            color={brandColors.medium}
          />
          <SocialLink
            href="mailto:poulton.steven@googlemail.com"
            icon={Email}
            color={brandColors.google}
          />
        </div>
        <SectionHeading>Age</SectionHeading>
        <p>
          Steve is n years old where
          {" "}
          <code>n = 30</code>
          . He would like to be considered successful before he is
          {" "}
          <code>n + 1</code>
          {" "}
          years old.
        </p>
        <SectionHeading>Location</SectionHeading>
        <p>
          Steve currently lives in Manchester, England. He does not like football and so often feels out of place.
        </p>
        <SectionHeading>How is Steve currently improving?</SectionHeading>
        <ul>
          <li>
            Steve is currently transferring his life to a task management system. He doesn't know which one yet.
          </li>
          <li>
            Steve is improving his guitar playing stamina to levels similar to when he was 18 years old by practicing 30 minutes a day
          </li>
        </ul>
        <SectionHeading>Web things Steve has made</SectionHeading>
        <ul>
          <li>
            <a href="http://informamap.azurewebsites.net/">
              <strong>Agribusiness Intelligence Map</strong>
            </a>
            {" "}
            - A canvas-driven AngularJS app to visualize data related to policial geography
          </li>
          <li>
            <a href="https://www.taploma.com/">
              <strong>Taploma</strong>
            </a> - A modern eLearning platform with a focus on ease-of-use
          </li>
        </ul>

        <SectionHeading>Current Tier 1 Projects</SectionHeading>
        <TierNote>
          (A Tier 1 project commands at least 50% of Steve's freetime)
        </TierNote>
        <ul>
          <li>
            <strong>Dangerous Mind</strong>
            {" "}
            - An adventure game serial made with Matthew J Frith
          </li>
        </ul>
        <SectionHeading>Current Tier 2 Projects</SectionHeading>
        <TierNote>
          (A Tier 2 project commands at least 25% of Steve's freetime)
        </TierNote>
        <ul>
          <li>
            <a href="https://github.com/CalinLeafshade/your-creed">
              <strong>Your Creed</strong>
            </a>
            {" "}
            - A document template which allows a user to document their own personal philosophy and distribute via github
          </li>
        </ul>
        <SectionHeading>Current Tier 3 Projects</SectionHeading>
        <TierNote>
          (A Tier 3 project is either on hold or not sufficiently important to spend significant time on)
        </TierNote>
        <ul>
          <li><strong>Aika</strong> - A timeboxing webapp</li>
          <li>
            <strong>Unnamed</strong> - A modern, cross-platform podcasting app
          </li>
          <li>
            <strong>Unnamed</strong> - A cross-platform OmniFocus killer
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
