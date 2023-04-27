import React, { useRef, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { TfiWallet } from 'react-icons/tfi'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Header = () => {
  const menuRef = useRef<any>()
  const closeRef = useRef<any>()
  const [showMenu, setShowMenu] = useState(false)

  const handleOnMenuClick = () => {
    menuRef.current.style.display = 'none'
    closeRef.current.style.display = 'block'
    setShowMenu(true)
  }
  const handelOnCloseClick = () => {
    menuRef.current.style.display = 'none'
    closeRef.current.style.display = 'block'
    setShowMenu(false)
  }

  return (
    <div className="Header">
      <div className="header-menu" ref={menuRef} onClick={handleOnMenuClick}>
        <AiOutlineMenu />
      </div>
      <div className="header-close" ref={closeRef} onClick={handelOnCloseClick}>
        <AiOutlineClose />
      </div>
      <div className="header-left">
        <img
          className="header-left-img"
          src="https://opensea.io/static/images/logos/opensea.svg"
          alt=""
        />
        <h2 className="header-left-heading">OpenSea</h2>
        <p className="header-left-line"></p>
        <p className="header-left-para">Drops</p>
        <p className="header-left-para">Stats</p>
      </div>
      <div className="header-middle">
        <input type="text" className="header-middle-input" />
        <p className="placeholder">Search items, collections, accounts</p>
        <p className="header-middle-icon">
          <BiSearch />
        </p>
      </div>
      <div className="header-right">
        <div className="header-right-two">
          <p className="header-right-teo-icon">
            <TfiWallet />
          </p>
          <p className="header-right-para">connectWallet</p>
        </div>
        <div className="header-right-icon">
          <CgProfile />
        </div>
      </div>
      <div className="header-bottom">
        <MdOutlineShoppingCart />
      </div>
    </div>
  )
}

export default Header
