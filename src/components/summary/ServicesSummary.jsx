import {useContext} from "react"
import {ConfiguratorContext} from "../../contexts/ConfiguratorContext"
import configuratorPages from "../../enums/configuratorPages"
import {calculatePrice} from "../../helpers/calculateServicesPrice"

export default function ServicesSummary() {

  const {services, coupon, setConfiguratorActivePage} = useContext(ConfiguratorContext)
  const prices = calculatePrice(services, coupon)

  const goToPage = () =>{
    setConfiguratorActivePage(configuratorPages.services)
  }


  return (
      <div className="summary-item">
        <div className="item-header">
          <h2 className="item-title">ODABRANE USLUGE</h2>
          <button className="button-rounded outline" onClick={()=>goToPage()}>Uredi</button>
        </div>
        <div className="item-content">
          {
            services.map((service) => {

              return (

                  <div className="item-row" key={service.name}>
                    <p>{service.name}</p><p>{service.price} KN</p>
                  </div>

              )
            })
          }
          {coupon && <p>Popust({prices.discountPercentage}): -{prices.discountAmount} KN</p>}
          <p>UKUPNO: <strong>{prices.totalPrice} KN</strong></p>
        </div>
      </div>
  )
}