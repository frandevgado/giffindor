import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={200}
    height={200}
    viewBox="0 0 250 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="295" y="91" rx="2" ry="2" width="400" height="400" /> 
    <rect x="104" y="41" rx="0" ry="0" width="1" height="0" /> 
    <rect x="276" y="102" rx="2" ry="2" width="400" height="400" /> 
    <rect x="0" y="0" rx="8" ry="8" width="250" height="250" />
  </ContentLoader>
)

export default MyLoader

