import React from "react"

import { Link } from "gatsby"

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

const Buttons = () => {
  return (
    <div className="Links">
      {links.map(({ path, label }) => (
        <Link to={path} key={path}>
          {label}
        </Link>
      ))}
    </div>
  )
}
export default Buttons
