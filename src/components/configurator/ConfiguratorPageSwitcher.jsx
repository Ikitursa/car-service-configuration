import {useContext} from 'react'
import {ConfiguratorContext} from '../../contexts/ConfiguratorContext'
import configuratorPages from '../../enums/configuratorPages'
import CarBrands from './dialoguePages/CarBrands'
import Services from './dialoguePages/Services'
import ContactInformation from './dialoguePages/ContactInformation'
import Summary from './dialoguePages/Summary'
import ConfigurationSent from './dialoguePages/ConfigurationSent'

export default function ConfiguratorPageSwitcher() {
  const {configuratorActivePage, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  const activePageComponent = () => {
    switch (configuratorActivePage) {
      case configuratorPages.carBrands:
        return <CarBrands/>
        break
      case configuratorPages.services:
        return <Services/>
        break
      case configuratorPages.contactInfo:
        return <ContactInformation/>
        break
      case configuratorPages.summary:
        return <Summary/>
        break
      case configuratorPages.sent:
        return <ConfigurationSent/>
        break
      default:
        return ''
    }
  }
  return (
      <>
        {activePageComponent()}
      </>
  )
}