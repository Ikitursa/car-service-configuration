import {useContext} from 'react'
import {ConfiguratorContext} from '../../../contexts/ConfiguratorContext'

export default function ContactInformation() {

  const {
    contactInfo,
    setContactInfo,
    configuratorActivePage,
    setConfiguratorActivePage
  } = useContext(ConfiguratorContext)

  const isEmailValid = () => {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return contactInfo.email.match(regexp)
  }

  const formIsValid = !!contactInfo.name && !!contactInfo.phone && isEmailValid()

  const goToNextPage = () => {
    if (formIsValid) {
      setConfiguratorActivePage(configuratorActivePage + 1)
    }
  }
  const goToPreviousPage = () => {
    setConfiguratorActivePage(configuratorActivePage - 1)
  }

  function handleInput(event) {
    const value = event.target.value
    const name = event.target.getAttribute('data-input-name')
    setContactInfo(prevState => {
      return {
        ...prevState,
        [name]: (event.type === 'blur') ? value.trim() : value
      }
    })
  }

  return (<>
        <div className="dialogue-page">
          <h3 className="dialogue-page-title">
            Korak 3 Vaši kontakt podaci
          </h3>

          <div className="dialogue-page-content">

            <div className="form-wrapper contact-information">

              <div className="input-wrapper">
                <input type="text"
                       value={contactInfo.name}
                       onChange={handleInput}
                       onBlur={handleInput}
                       data-input-name="name"
                       placeholder="Ime i prezime*"
                       required
                />
              </div>
              <div className="input-wrapper">
                <input type="email"
                       value={contactInfo.email}
                       onChange={handleInput}
                       onBlur={handleInput}
                       data-input-name="email"
                       placeholder="Email adresa*"
                       required
                />
              </div>
              <div className="input-wrapper">
                <input type="tel"
                       value={contactInfo.phone}
                       onChange={handleInput}
                       onBlur={handleInput}
                       data-input-name="phone"
                       placeholder="Broj telefona*"
                       required
                />
              </div>
              <div className="input-wrapper">
                     <textarea value={contactInfo.note}
                               onChange={handleInput}
                               onBlur={handleInput}
                               data-input-name="note"
                               placeholder="Napomena (opcionalno)"
                               rows="5"
                     />
              </div>
            </div>

          </div>
        </div>
        <div className="dialogue-controls">

          <button className="button-rounded" onClick={goToPreviousPage}>Nazad</button>
          <button className="button-rounded" disabled={!formIsValid} onClick={goToNextPage}>Dalje</button>

        </div>
      </>
  )
}