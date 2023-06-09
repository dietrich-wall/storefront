import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Img, ImgWrap } from './InfoElements';

const InfoSection = ({ lightBg, id, imgstart, topLine, lighttext, headline, darktext, description, buttonLabel, img, alt, primary, dark, dark2, linkto }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgstart={imgstart} >
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading $lighttext>{headline}</Heading>
                <Subtitle $darktext>{description}</Subtitle>
                <BtnWrap>
                  <Button to={linkto} smooth={true} duration={500} spy={true} exact='true' offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
