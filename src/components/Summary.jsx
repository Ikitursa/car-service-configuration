import {useContext} from "react";
import {ConfiguratorContext} from "../contexts/ConfiguratorContext";

export default function Summary() {

  const {configuratorActivePage, setConfiguratorActivePage} = useContext(ConfiguratorContext)



  const goToPreviousPage = () =>{
    setConfiguratorActivePage(configuratorActivePage-1)
  }
  const submitForm = () =>{
    setConfiguratorActivePage(configuratorActivePage+1)
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

              <div className="summary-item">
                <div className="item-header">
                  <h2 className="item-title">MODEL VOZILA</h2>
                  <button className="button-rounded outline">Uredi</button>
                </div>
                <div className="item-content">
                  <p>Volkswagen</p>
                </div>
              </div>

              <div className="summary-item">
                <div className="item-header">
                  <h2 className="item-title">ODABRANE USLUGE</h2>
                  <button className="button-rounded outline">Uredi</button>
                </div>
                <div className="item-content">
                  <div className="item-row"><p>Zamjena ulja i filtera</p><p>500 KN</p></div>
                  <div className="item-row"><p>Promjena pakni</p><p>450 KN</p></div>
                  <p>Popust(30%): -285,00 KN</p>
                  <p>UKUPNO: <strong>665,00 KN</strong></p>
                </div>
              </div>

              <div className="summary-item contact">
                <div className="item-header">
                  <h2 className="item-title">KONTAKT PODACI</h2>
                  <button className="button-rounded outline">Uredi</button>
                </div>
                <div className="item-content">
                  <div className="item-column">
                    <div className="item-row"><p>Ime i prezime:</p><p>Kristijan Drača</p></div>
                    <div className="item-row"><p>Broj telefona:</p><p>2456742572</p></div>
                  </div>
                  <div className="item-column">
                    <div className="item-row"><p>Email adresa:</p><p>kristijan@borealis.biz</p></div>
                    <div className="item-row"><p>Napomena:</p><p>Kod auta se prilikom prelaska preko rupa često
                      čuje lupanje pa bi i to trebalo pogledati</p></div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="dialogue-controls">
          <button className="button-rounded" onClick={()=>goToPreviousPage()}>Nazad</button>
          <button className="button-rounded button-secondary" onClick={()=>submitForm()}>Pošalji</button>
        </div>
      </>
  )
}