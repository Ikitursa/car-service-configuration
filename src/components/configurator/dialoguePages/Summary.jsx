import {useContext} from 'react'
import {ConfiguratorContext} from '../../../contexts/ConfiguratorContext'
import ServicesSummary from './summary/ServicesSummary'
import CarBrandSummary from './summary/CarBrandSummary'
import ContactInformationSummary from './summary/ContactInformationSummary'

export default function Summary() {

  const {configuratorActivePage, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  const goToPreviousPage = () => {
    setConfiguratorActivePage(configuratorActivePage - 1)
  }
  const submitForm = () => {
    setConfiguratorActivePage(configuratorActivePage + 1)
  }
  return (
      <>
        <div className="dialogue-page">
          <h3 className="dialogue-page-title">
            Korak 4 Pregled i potvrda vašeg odabira
          </h3>
          <p>
            Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od
            podataka, možete pritisnuti gumb za uređivanje pored svake od od kategorija. Kada ste provjerili i
            potvrdili ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis.
          </p>

          <div className="dialogue-page-content">

            <div className="summary-wrapper">

              <CarBrandSummary/>

              <ServicesSummary/>

              <ContactInformationSummary/>

            </div>

          </div>
        </div>

        <div className="dialogue-controls">
          <button className="button-rounded" onClick={goToPreviousPage}>Nazad</button>
          <button className="button-rounded button-secondary" onClick={submitForm}>Pošalji</button>
        </div>
      </>
  )
}