function App() {
  return (
      <div className="App">

        <header>
          <div className="header-wrapper">
            <div className="logo">TOKIĆ</div>
            <div className="header-text">
              <h2 className="header-title">Konfigurator servisa</h2>
              <p>Izračunajte trošak sevisa</p>
            </div>
          </div>
        </header>


        {/* CONTENT */}

        <div className="content-wrapper">

          {/* -----------------DIALOGUE----------------- */}

          <div className="config-dialogue">
            <div className="dialogue-header">
              <h3 className="dialogue-title">Konfigurator servisa</h3>
              <button className="close">X</button>
            </div>

            {/* Dialogue components*/}
            {/* temporary wrapper div "dialogue-components" */}
            <div className="dialogue-components">


              {/* PAGE 1*/}
              <div className="dialogue-page">
                <h3 className="dialogue-page-title">
                  Korak 1 Odaberite proizvođača vašeg vozila
                </h3>

                <div className="dialogue-page-content">

                  <div className="form-wrapper">
                    <div className="input-wrapper">
                      <input type="radio" id="peugeot" name="brand" value="Peugeot"/>
                      <label htmlFor="peugeot">Peugeot</label>
                    </div>
                    <div className="input-wrapper">
                      <input type="radio" id="volkswagen" name="brand" value="Volkswagen"/>
                      <label htmlFor="volkswagen">Volkswagen</label>
                    </div>
                    <div className="input-wrapper">
                      <input type="radio" id="citroen" name="brand" value="Citroen"/>
                      <label htmlFor="citroen">Citroen</label>
                    </div>
                  </div>


                </div>
              </div>


              {/* PAGE 2*/}
              <div className="dialogue-page">
                <h3 className="dialogue-page-title">
                  Korak 2 Odaberite jednu ili više usluga
                </h3>

                <div className="dialogue-page-content">

                  <div className="form-wrapper">
                    <div className="input-wrapper">
                      <input type="checkbox" id="service1" name="service"/>
                      <label htmlFor="service1">Zamjena ulja i filtera (500kn)</label>
                    </div>
                    <div className="input-wrapper">
                      <input type="checkbox" id="service2" name="service"/>
                      <label htmlFor="service2">Promjena pakni (450kn)</label>
                    </div>
                    <div className="input-wrapper">
                      <input type="checkbox" id="service3" name="service"/>
                      <label htmlFor="service3">Promjena guma (100kn)</label>
                    </div>
                  </div>

                  <div className="price-wrapper">
                    <div className="coupon-wrapper">
                      <button>Imam kupon</button>
                      <div className="input-wrapper coupon">
                        <input type="text"/>
                        <button>Primjeni</button>
                      </div>
                      <p className="coupon-success">Hvala vam, unjeli ste ispravan kod kupona</p>
                    </div>

                    <div className="amount">
                      <p className="base-amount">OSNOVICA:<strong>950,00 KN</strong></p>
                      <p className="discount-amount">Popust (30%):<strong>-285,00 KN</strong></p>
                      <p className="total-amount">UKUPNO:<strong>665,00 KN</strong></p>
                    </div>
                  </div>


                </div>
              </div>


              {/* PAGE 3*/}
              <div className="dialogue-page">
                <h3 className="dialogue-page-title">
                  Korak 3 Vaši kontakt podaci
                </h3>

                <div className="dialogue-page-content">

                  <div className="form-wrapper contact-information">

                    <div className="input-wrapper">
                      <input type="text" id="name" placeholder="Ime i prezime*"/>
                    </div>
                    <div className="input-wrapper">
                      <input type="text" id="email" placeholder="Email adresa*"/>
                    </div>
                    <div className="input-wrapper">
                      <input type="text" id="tel" placeholder="Broj telefona*"/>
                    </div>
                    <div className="input-wrapper">
                     <textarea id="story" placeholder="Napomena (opcionalno)"
                               rows="5" cols="33"/>
                    </div>
                  </div>

                </div>
              </div>


              {/* PAGE 4*/}
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
                        <button>Uredi</button>
                      </div>
                      <div className="item-content">
                        <p>Volkswagen</p>
                      </div>
                    </div>

                    <div className="summary-item">
                      <div className="item-header">
                        <h2 className="item-title">ODABRANE USLUGE</h2>
                        <button>Uredi</button>
                      </div>
                      <div className="item-content">
                        <div className="service-item"><p>Zamjena ulja i filtera</p><p>500 KN</p></div>
                        <div className="service-item"><p>Promjena pakni</p><p>450 KN</p></div>
                        <p>Popust(30%): -285,00 KN</p>
                        <p>UKUPNO: <strong>665,00 KN</strong></p>
                      </div>
                    </div>

                    <div className="summary-item">
                      <div className="item-header">
                        <h2 className="item-title">KONTAKT PODACI</h2>
                        <button>Uredi</button>
                      </div>
                      <div className="item-content">
                        <div>
                          <div className="contact-item"><p>Ime i prezime:</p><p>Kristijan Drača</p></div>
                          <div className="contact-item"><p>Broj telefona:</p><p>2456742572</p></div>
                        </div>
                        <div>
                          <div className="contact-item"><p>Email adresa:</p><p>kristijan@borealis.biz</p></div>
                          <div className="contact-item"><p>Napomena:</p><p>Kod auta se prilikom prelaska preko rupa često
                            čuje lupanje pa bi i to trebalo pogledati</p></div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>


              {/* PAGE 5 - AFTER SUBMIT */}
              <div className="dialogue-page">
                <div className="submit-message">
                  <h3 className="dialogue-page-title">
                    Vaša prijava je uspješno poslana
                  </h3>
                  <p>
                    Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku.
                    Hvala vam.
                  </p>
                  <button>Zatvori</button>
                </div>

                <div className="dialogue-page-content">

                </div>
              </div>


            </div>
            {/* /Dialogue components*/}

            <div className="dialogue-controls">
              <button className="controls">Nazad</button>
              <button className="controls">Dalje</button>
              <button className="controls submit">Pošalji</button>
            </div>


          </div>

          {/* //---------------DIALOGUE----------------- */}


          <div className="start-config">
            <p>pritisnite gumb niže kako biste pokrenuli konfigurator</p>
            <button>Pokreni konfigurator</button>
          </div>
        </div>


        {/* /CONTENT */}

      </div>
  );
}

export default App;
