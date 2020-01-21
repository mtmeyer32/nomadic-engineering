import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import { StyledFullScreenWrapper } from './SharedStyledComponents'

const ArtDirectedBackground = ({ className, children }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "Duke_Road.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "Duke_Mountain.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }  
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 500px)`,
    },
  ]

  return (
    <StyledFullScreenWrapper>
        <BackgroundImage
            Tag={`section`}
            id={`media-test`}
            className={className}
            fluid={sources}
        >
            {children}
        </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
  width: 100%;
  height: 100%;
  display: flex;
  alighn-items: center;
  justify-content: center;
`

export default StyledArtDirectedBackground

