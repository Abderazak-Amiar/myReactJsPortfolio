import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import MailIcon from "@mui/icons-material/Mail"

function Footer() {
  return (
    <div className="row d-flex align-items-center styleFooter">
      <div className="col-md-4 py-5 text-center">
        <a href="/" className="text-decoration-none bg-logo rounded-circle p-4">
          <strong>A-A</strong>
        </a>
      </div>

      <div className="col-md-4 text-center py-5">
        <p className="text-secondary">This is an open source project.</p>
        <p className="text-secondary">Created by Abderazak Amiar 2023.</p>
        <p className="text-secondary">
          Find the source on
          <a href="https://github.com/Abderazak-Amiar">
            <GitHubIcon fontSize="large" />
          </a>
        </p>
      </div>
      <div className="col-md-4 py-5 d-flex justify-content-evenly">
        <div>
          <a href="https://www.linkedin.com/in/zakamiar/">
            <LinkedInIcon fontSize="large" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Abderazak-Amiar">
            <GitHubIcon fontSize="large" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/213675632007">
            <WhatsAppIcon fontSize="large" />
          </a>
        </div>
        <div>
          <a href="mailto:abderazak.amiar@gmail.com">
            <MailIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer