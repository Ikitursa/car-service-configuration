import {createContext, useMemo, useState} from 'react'
import configuratorPages from '../enums/configuratorPages'
const ConfiguratorContext = createContext(null)

function ConfiguratorProvider({children}) {

  const [carBrand, setCarBrand] = useState('')
  const [services, setServices] = useState([])
  const [coupon, setCoupon] = useState(null)

  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    note: ''
  })

  const [configuratorActivePage, setConfiguratorActivePage] = useState(configuratorPages.carBrands)

  const configuratorProviderValue = useMemo(() => ({
    carBrand, setCarBrand,
    services, setServices,
    coupon, setCoupon,
    contactInfo, setContactInfo,
    configuratorActivePage, setConfiguratorActivePage
  }), [carBrand, services, coupon, contactInfo, configuratorActivePage])

  return <ConfiguratorContext.Provider value={configuratorProviderValue}>{children}</ConfiguratorContext.Provider>
}

export {ConfiguratorContext, ConfiguratorProvider}
