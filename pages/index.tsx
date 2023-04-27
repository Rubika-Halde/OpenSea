import Header from '@component/modules/header/Header'
import AnchorTag from '@component/modules/anchortag/AnchorTag'
import Trending from '@component/modules/Trending/Trending'
import Collections from '@component/modules/collections/Collections'
import Banner from '@component/modules/banner/Banner'
import Slider from '@component/modules/slider/Slider'
import Collected from '@component/modules/collected/Collected'
import Nft from '@component/modules/nft/Nft'
import Categories from '@component/modules/categories/Categories'
import FooterTop from '@component/modules/footerTop/FooterTop'
import FooterM from '@component/modules/footerMiddle/FooterM'
import FooterB from '@component/modules/footerBottom/FooterB'

import { Inter } from 'next/font/google'
import Swiper from 'swiper'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <AnchorTag />
      <Trending />
      <Collections />
      <Banner />
      <Slider />
      <Collected />
      <Slider />
      <Collected />
      <Slider />
      <Nft />
      <Categories />
      <FooterTop />
      <FooterM />
      <FooterB />
    </>
  )
}
