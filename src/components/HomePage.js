import React from 'react'
import AppRating from './AppRating/AppRating'
import Brands from './Brands/Brands'
import Header from './comman/Header'
import CredExperience from './CredExperience/CredExperience'
import CredSecurity from './CredSecurity/CredSecurity'
import CredStory from './CredStory/CredStory'
import FeelSpecial from './FeelSpecial/FeelSpecial'
import HeroSection from './Herosection/HeroSection'
import MobileScroll from './MobileScroll/MobileScroll'
import ProductShowcase from './ProductShowcase/ProductShowcase'
import WindowPeak from './WinndowPeak/WindowPeak'

function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductShowcase />
      <FeelSpecial/>
      <Brands />
      <CredExperience />
      <MobileScroll />
      <div className='non-mobile'>
      <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
    </div>
  )
}

export default HomePage
