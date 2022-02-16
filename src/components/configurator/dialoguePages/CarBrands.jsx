import {useContext} from 'react'
import {ConfiguratorContext} from '../../../contexts/ConfiguratorContext'

// usually we would expect to fetch this from an API or have some place with all out constants, but to keep it simple we are keeping it inside the component for this example
const CAR_BRANDS = ['Peugeot', 'Volkswagen', 'Citroen', 'Audi', 'Bmw', 'Seat', 'Alfa Romeo', 'Kia', 'Hyundai', 'Honda', 'Toyota'].sort()

export default function CarBrands() {

  const {carBrand, setCarBrand, configuratorActivePage, setConfiguratorActivePage} = useContext(ConfiguratorContext)

  const formIsValid = !!carBrand

  const handleBrandChange = (e) => {
    setCarBrand(e.target.value)
  }
  const goToNextPage = () => {
    if (formIsValid) {
      setConfiguratorActivePage(configuratorActivePage + 1)
    }
  }

  return (
      <>
        <div className="dialogue-page">
          <h3 className="dialogue-page-title">
            Korak 1 Odaberite proizvođača vašeg vozila
          </h3>

          <div className="dialogue-page-content">

            <div className="form-wrapper car-brands">
              {
                CAR_BRANDS.map((brand) => {
                  return (
                      <div className="input-wrapper" key={brand}>
                        <label>
                          <input
                              type="radio"
                              name="brand"
                              value={brand}
                              checked={carBrand === brand}
                              onChange={handleBrandChange}
                          />{brand}</label>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="dialogue-controls">
          <button className="button-rounded" disabled={!formIsValid} onClick={goToNextPage}>Dalje</button>
        </div>
      </>


  )
}