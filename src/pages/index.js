import React from "react"
import { Link } from "gatsby"
import StyledArtDirectedBackground from "../components/background"

export default () => (
  <div className="main">
    <StyledArtDirectedBackground>
        <Link to="/Travels/">Travels</Link>
        <Link to="/Shop/">Shop</Link>
        <Link to="/Hire/">Hire</Link>
        <Link to="/Van/">Van</Link>
    </StyledArtDirectedBackground>
  </div>
)