import React, { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { TfiWallet } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineShoppingCart } from 'react-icons/md'

const Header = () => {
  return (
    <div className="sHeader">
      <div className="sheader-left">
        <img
          className="sheader-left-img"
          src="https://opensea.io/static/images/logos/opensea.svg"
          alt=""
        />
        <h2 className="sheader-left-heading">OpenSea</h2>
        <p className="sheader-left-line"></p>
        <p className="sheader-left-para">Drops</p>
        <p className="sheader-left-para">Stats</p>
      </div>
      <div className="sheader-middle">
        <input type="text" className="sheader-middle-input" />
        <p className="placeholder">Search items, collections, accounts</p>
        <p className="sheader-middle-icon">
          <BiSearch />
        </p>
      </div>
      <div className="sheader-right">
        <div className="sheader-right-two">
          <p className="sheader-right-teo-icon">
            <TfiWallet />
          </p>
          <p className="sheader-right-para">connectWallet</p>
        </div>
        <div className="sheader-right-icon">
          <CgProfile />
        </div>
      </div>
      <div className="sheader-bottom">
        <MdOutlineShoppingCart />
      </div>
    </div>
  )
}

export default Header
