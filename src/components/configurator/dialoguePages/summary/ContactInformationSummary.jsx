import {useContext} from 'react'
import {ConfiguratorContext} from '../../../../contexts/ConfiguratorContext'
import configuratorPages from '../../../../enums/configuratorPages'

export default function ContactInformationSummary() {
  const {contactInfo, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  return (
      <div className="summary-item contact">
        <div className="item-header">
          <h2 className="item-title">KONTAKT PODACI</h2>
          <button className="button-rounded outline" onClick={() => setConfiguratorActivePage(configuratorPages.contactInfo)}>Uredi</button>
        </div>

        <div className="item-content">
          <div className="item-column">
            <div className="item-row"><p>Ime i prezime:</p><p>{contactInfo.name}</p></div>
            <div className="item-row"><p>Broj telefona:</p><p>{contactInfo.phone}</p></div>
          </div>
          <div className="item-column">
            <div className="item-row"><p>Email adresa:</p><p>{contactInfo.email}</p></div>
            <div className="item-row"><p>Napomena:</p><p>{ contactInfo.note ? contactInfo.note : '- Nema napomene - '}</p></div>
          </div>
        </div>


      </div>
  )
}