import {useContext} from "react"
import {ConfiguratorContext} from "../contexts/ConfiguratorContext"
import Price from "./services-price/Price"

// For current purposes we are using services and coupons as a local set of data.
const SERVICES = [
  {
    name: 'Zamjena ulja i filtera',
    price: 500
  },
  {
    name: 'Promjena Pakni',
    price: 450
  },
  {
    name: 'Promjena guma',
    price: 100
  },
  {
    name: 'Servis klima uređaja',
    price: 299
  },
  {
    name: 'Balansiranje guma',
    price: 50
  },
  {
    name: 'Zamjena ulja u kočnicama',
    price: 229
  }
]

export default function Services() {

  const {services, setServices, configuratorActivePage, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  const formIsValid = !!services.length

  const goToNextPage = () => {
    if (formIsValid) {
      setConfiguratorActivePage(configuratorActivePage + 1)
    }
  }
  const goToPreviousPage = () => {
    setConfiguratorActivePage(configuratorActivePage - 1)
  }

  const isActiveService = (currentService) => {
    return !!(services.find(servicesItem => servicesItem.name === currentService.name))
  }

  const handleService = (service) => {
    const listOfServices = [...services]

    if (isActiveService(service)) {
      const filteredServices = listOfServices.filter(servicesItem => servicesItem.name !== service.name)
      setServices(filteredServices)
    } else {
      listOfServices.push(service)
      setServices(listOfServices)
    }
  }

  return (
      <>
        <div className="dialogue-page">
          <h3 className="dialogue-page-title">
            Korak 2 Odaberite jednu ili više usluga
          </h3>

          <div className="dialogue-page-content">

            <div className="form-wrapper services">

              {
                SERVICES.map((service) => {

                  return (
                      <div className="input-wrapper" key={service.name}>
                        <label>
                          <input
                              type="checkbox"
                              name="service"
                              onChange={() => handleService(service)}
                              checked={isActiveService(service)}
                          />
                          {service.name} ({service.price}kn)</label>
                      </div>
                  )
                })
              }

            </div>

            <Price/>


          </div>
        </div>

        <div className="dialogue-controls">

          <button className="button-rounded" onClick={() => goToPreviousPage()}>Nazad</button>
          <button className="button-rounded" disabled={!formIsValid} onClick={() => goToNextPage()}>Dalje</button>

        </div>
      </>
  )
}