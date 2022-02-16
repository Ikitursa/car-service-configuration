import {ConfiguratorContext} from "../contexts/ConfiguratorContext"
import {useContext} from "react"
import configuratorPages from "../enums/configuratorPages";
import CarBrands from "./CarBrands"
import Services from "./Services"
import ContactInformation from "./ContactInformation"
import Summary from "./Summary"
import ConfigurationSent from "./ConfigurationSent"

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