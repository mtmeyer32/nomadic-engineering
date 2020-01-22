import Typography from "typography"
// import altonTheme from "typography-theme-alton"
// import doelgerTheme from "typography-theme-doelger"
import githubTheme from "typography-theme-github"

const typography = new Typography(githubTheme)
export const { scale, rhythm, options } = typography
export default typography