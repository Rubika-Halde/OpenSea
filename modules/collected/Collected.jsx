import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
const Slider = () => {
  const [slides, setSlides] = useState(0)
  const setSlidesPerview = () => {
    setSlides(
      window.innerWidth <= 550
        ? 1
        : window.innerWidth <= 800
        ? 2
        : window.innerWidth > 720
        ? 5
        : 0,
    )
  }
  React.useEffect(() => {
    setSlidesPerview()
    window.addEventListener('resize', setSlidesPerview)
    return () => {
      window.removeEventListener('resize', setSlidesPerview)
    }
  }, [])
  return (
    <div className="Swiper">
      <div className="swiper-heading">Top Collector Buys Today</div>
      <div className="swiper-top">
        <Swiper
          className="Swiper"
          slidesPerView={slides}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gcs/files/94f303233853602a3e333d426e4158d8.jpg?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">CryptoFish</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.02ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">2ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://openseauserdata.com/files/017514265b66647dad5f58ab55cc0ab1.svg"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">BullMarket </h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.62ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">408ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gcs/files/7e7d2b570ad5ddd5ba5b7ac1c42552e8.png?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">CryptoPacked</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.82ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">10ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gae/E_XVuM8mX1RuqBym2JEX4RBg_sj9KbTFBAi0qU4eBr2E3VCC0bwpWrgHqBOaWsKGTf4-DBseuZJGvsCVBnzLjxqgq7rAb_93zkZ-?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">Pixelmon-Generat..</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.82ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">20kETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gcs/files/f80f846ee3f0ce3c83fad5bdc25e3fb2.jpg?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">BEaNZOfficial</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">1.52ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">20ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gae/a_frplnavZA9g4vN3SexO5rrtaBX_cBTaJYcgrPtwQIqPhzgzUendQxiwUdr51CGPE2QyPEa1DHnkW1wLrHAv5DgfC3BP-CWpFq6BA?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">SecretRatSocial</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.02ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">157ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gae/VML7qVZ2ndkEkixayEbVJK9-az5D0Ty7eX8KeRm4Zath5RIiCISGvMFGCbVOF59z3RiEX6pTIst2UzKoo98Gt-TU7KAnm9RIe6o-?auto=format&w=1920"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">Future Realities</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.12ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">212ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gae/62ww11weG9b5R6trEm5DmHsbGEUaDmqIgBtjjRzwktDft3dCgisD3kdzRhI_-WfSMCyiI7ZLlgE3GtcZ-n6FYYUVFvkc_p48zNfzEw?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">Whiskers</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.01ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">1,342ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperSlide">
            <div className="swiper-one">
              <div className="swiper-one-img">
                <img
                  className="img"
                  src="https://i.seadn.io/gcs/files/3c7c87e167de568d46ab793932818be1.png?auto=format&w=500&h=500"
                  alt=""
                />
              </div>
              <div className="swiper-one-context">
                <h2 className="heading">CryptoFish</h2>
                <div className="Crypto">
                  <div className="swiper-one-para">
                    <p className="floor">FLOOR</p>
                    <h3 className="head">0.72ETH</h3>
                  </div>
                  <div className="swiper-one-paragraph">
                    <p className="total">TOTALVOLUME</p>
                    <h3 className="price">200ETH</h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
