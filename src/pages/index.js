import React from "react"
import { Link } from "gatsby"
import StyledArtDirectedBackground from "../components/background"

export default () => (
  <div className="main">
    <StyledArtDirectedBackground>
      <div className="navTop">
        <Link to="/shop/">SHOP </Link>
        |
        <Link to="/travels/"> TRAVELS </Link>
        |
        <Link to="/hire/"> HIRE </Link>
        |
        <Link to="/van/"> VAN</Link>
      </div>
    </StyledArtDirectedBackground>
  </div>
)