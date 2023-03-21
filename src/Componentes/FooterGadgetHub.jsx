import React from 'react'
import { NavLink } from 'react-router-dom'

export const FooterGadgetHub = () => {
  return (
    <>
        <footer className="footer-container">
                <span>Copyright © 2023 Gadget Hub C.A All rights reserved.</span>
                <NavLink
                to="/ContactUs"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
                >
                  Contact Us
              </NavLink>
        </footer>
    </>
  )
}
