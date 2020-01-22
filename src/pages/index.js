import React from "react"
import { Link } from "gatsby"
import StyledArtDirectedBackground from "../components/background"
import Footer from "../components/footer"

export default () => (
  <div className="main">
    <StyledArtDirectedBackground>
      <div className="navTop">
        <span><Link to="/shop/">SHOP </Link></span>
        <span>&#183;</span>
        <span><Link to="/hire/"> HIRE </Link></span>
        <span>&#183;</span>
        <span><Link to="/travels/"> TRAVELS </Link></span>
        <span>&#183;</span>
        <span><Link to="/van/"> VAN</Link></span>
      </div>
      <Footer></Footer>
    </StyledArtDirectedBackground>
  </div>
)