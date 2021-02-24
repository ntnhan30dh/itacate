import React from "react"
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'cl', value: 'cl', flag: 'cl', text: 'Chile ' , as: 'a', href:'https://www.pedidosya.cl/'},
  { key: 'pa', value: 'pa', flag: 'pa', text: 'Panama', as: 'a', href:'https://www.pedidosya.com.pa/' },
  { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore', as: 'a', href:'https://www.foodpanda.sg/' },
]
const CountryList = () => {
  const action = (e, { value }) =>{
    console.log ("value", value)
  }
  return (
      <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
    onChange = {action}
  />
  )
}

export default CountryList
