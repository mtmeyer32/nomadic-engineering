import React from "react"
export default ({ children }) => (
  <footer style={{ position: "absolute", bottom: "0", width: "100%", paddingLeft: "5%" }}>
    <h1>Nomadic Engineering</h1>
    {children}
  </footer>
)