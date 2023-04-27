import React from 'react'
import {
  BsTwitter,
  BsInstagram,
  BsDiscord,
  BsReddit,
  BsYoutube,
  BsTiktok,
} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
const FooterTop = () => {
  return (
    <div className="footerT">
      <div className="FooterTop">
        <div className="footerTop-left">
          <h3 className="footerTop-left-head">Stay in the loop</h3>
          <p className="footerTop-left-para">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenSea.
          </p>
          <div className="footerTop-input">
            <input
              type="text"
              placeholder="Your email address"
              className="input"
            />
            <button className="button">Sign Up</button>
          </div>
        </div>
        <div className="footerTop-right">
          <h2 className="heading">Join the community</h2>
          <div className="icons">
            <a href="#" className="icons-a">
              <BsTwitter />
            </a>
            <a href="#" className="icons-a">
              <BsInstagram />
            </a>
            <a href="#" className="icons-a">
              <BsDiscord />
            </a>
            <a href="#" className="icons-a">
              <BsReddit />
            </a>
            <a href="#" className="icons-a">
              <BsYoutube />
            </a>
            <a href="#" className="icons-a">
              <BsTiktok />
            </a>
            <a href="#" className="icons-a">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>

      <hr />
    </div>
  )
}

export default FooterTop
