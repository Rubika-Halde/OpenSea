import React, { useRef, useState } from 'react'
import {
  BsFillBarChartFill,
  BsDiscord,
  BsTwitter,
  BsShareFill,
} from 'react-icons/bs'
import { TbNetwork } from 'react-icons/tb'
import { AiTwotoneStar } from 'react-icons/ai'
import SParagraph from '../sparagraph/SParagraph'

const Banner = () => {
  return (
    <div className="SBanner">
      <img
        className="sbanner-img-one"
        src="https://i.seadn.io/gae/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs?auto=format&w=1920"
        alt=""
      />
      <div className="sbanner-img">
        <img
          className="sbanner-img-two"
          src="https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&w=256"
          alt=""
        />
      </div>
      <div className="sbanner-text">
        <div className="sbanner-top">
          <h1 className="sbanner-text-heading">Bored Ape Yacht Club</h1>
          <p className="sbanner-icon">
            <a href="#" className="sicons">
              <BsFillBarChartFill />
            </a>
            <a href="#" className="sicons">
              <TbNetwork />
            </a>
            <a href="#" className="sicons">
              <BsDiscord />
            </a>

            <a href="#" className="sicons">
              <BsTwitter />
            </a>
            <a href="#" className="sicons">
              <AiTwotoneStar />
            </a>
            <a href="#" className="sicons">
              <BsShareFill />
            </a>
          </p>
        </div>
        <p className="sbanner-text-para">
          By <b>YugaLabs</b>
        </p>
        <p className="sbanner-text-para-one">
          Items <b>9,998</b> · Created <b>Apr 2021</b> · Creator earnings{' '}
          <b>2.5%</b> · Chain
          <b>Ethereum</b> · Category <b>PFPs</b>
        </p>
        <p className="sparaMore">
          <SParagraph />
        </p>
        <div className="sbanner-wrapper">
          <div className="sbanner-wrapper-head">
            <h3>9,61,517 ETH</h3>
            <p>total Volume</p>
          </div>
          <div className="sbanner-wrapper-head">
            <h3>62.2626 ETH</h3>
            <p>floor Price</p>
          </div>
          <div className="sbanner-wrapper-head">
            <h3>61.0901 WETH</h3>
            <p>best offer</p>
          </div>
          <div className="sbanner-wrapper-head">
            <h3>3%</h3>
            <p>listed</p>
          </div>
          <div className="sbanner-wrapper-head">
            <h3>5,756</h3>
            <p>owner</p>
          </div>
          <div className="sbanner-wrapper-head">
            <h3>58%</h3>
            <p>unique owners</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
