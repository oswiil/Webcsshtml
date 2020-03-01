/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Portada from "./Portada"
import Header from "./header"

import "./layout.css"
import "./styles.css"

import FootDescript from "./Footer"

function Layout({ children }) {
  return (
    <div>
      <Header siteTitle={"Viajamos de Examenes"}></Header>
      <Portada />
      <main className="fade">{children}</main>

      <FootDescript />
    </div>
  )
}
Layout.prototypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
