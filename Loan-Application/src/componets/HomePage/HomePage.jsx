import React from 'react'
import Page1 from './Page1'
import Card from '../Layout/Card'
import Jointer from '../../ui/Jointer'

// This componetns is for Main page to collect the all components at the same place.
const Home = () => {
  return (
    <>
    <Page1/>
    <Jointer/>
    <Card/>
    </>
  )
}

export default Home