import {useContext} from "react";
import {ConfiguratorContext} from "../contexts/ConfiguratorContext"

export default function ContactInformation() {

  const {contactInfo, setContactInfo} = useContext(ConfiguratorContext)


  function handleInput(event){
    const value = event.target.value
    const name = event.target.getAttribute('data-input-name')
    setContactInfo ( prevState =>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
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
                     data-input-name="name"
                     placeholder="Ime i prezime*"
              />
            </div>
            <div className="input-wrapper">
              <input type="text"
                     value={contactInfo.email}
                     onChange={handleInput}
                     data-input-name="email"
                     placeholder="Email adresa*"
              />
            </div>
            <div className="input-wrapper">
              <input type="text"
                     value={contactInfo.phone}
                     onChange={handleInput}
                     data-input-name="phone"
                     placeholder="Broj telefona*"
              />
            </div>
            <div className="input-wrapper">
                     <textarea value={contactInfo.note}
                               onChange={handleInput}
                               data-input-name="note"
                               placeholder="Napomena (opcionalno)"
                               rows="5"
                     />
            </div>
          </div>

        </div>
      </div>
  )
}