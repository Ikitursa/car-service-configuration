export default function ContactInformation() {
  return (
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
              <input type="text" id="telephone" placeholder="Broj telefona*"/>
            </div>
            <div className="input-wrapper">
                     <textarea id="note" placeholder="Napomena (opcionalno)"
                               rows="5"/>
            </div>
          </div>

        </div>
      </div>
  )
}