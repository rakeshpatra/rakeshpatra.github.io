import React from "react"
import { Link, useThemeUI } from "theme-ui"
import { Link as GatsbyLink } from "gatsby"

import iconMap from "../../utils/iconMap"

const ArrowRightIcon = () => (
  <iconMap.arrowright
    sx={{
      verticalAlign: "middle",
    }}
    size={12}
  />
)

/**
 * The resume button in the index page
 *
 */
const ResumeLinks = () => {
  const { theme } = useThemeUI()
  const { links: linkStyles } = theme

  return (
    <>
      <GatsbyLink sx={linkStyles.resume} to="/resume/">
        Resume <ArrowRightIcon />
      </GatsbyLink>
      <Link
        variant="resume"
        href="https://github.com/rakeshpatra/rakeshpatra.github.io/raw/master/files/resume.pdf"
        target="_blank"
        marginLeft={3}
      >
        Resume (PDF) <ArrowRightIcon />
      </Link>
    </>
  )
}

export default ResumeLinks
