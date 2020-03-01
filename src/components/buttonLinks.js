import React from "react"

import { Link } from "gatsby"
import classnames from "classnames"

const links = [
  {
    label: "INICIO",
    path: "/",
  },
  {
    label: "INFO",
    path: "/page-2",
  },
  {
    label: "CONTACTO",
    path: "/page-3",
  },
]
const selectedLinkClassName = link =>
  classnames({ selected: link === window.location.pathname })

const Buttons = () => {
  return (
    <div className="Links">
      {links.map(({ path, label }) => (
        <Link to={path} key={path} className={selectedLinkClassName(path)}>
          {label}
        </Link>
      ))}
    </div>
  )
}
export default Buttons
