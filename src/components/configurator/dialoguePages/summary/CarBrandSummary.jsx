import {useContext} from 'react'
import {ConfiguratorContext} from '../../../../contexts/ConfiguratorContext'
import configuratorPages from '../../../../enums/configuratorPages'

export default function CarBrandSummary() {
  const {carBrand, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  return (
      <div className="summary-item">
        <div className="item-header">
          <h2 className="item-title">MODEL VOZILA</h2>
          <button className="button-rounded outline" onClick={() => setConfiguratorActivePage(configuratorPages.carBrands)}>Uredi</button>
        </div>
        <div className="item-content">
          <p>{carBrand}</p>
        </div>
      </div>
  )
}