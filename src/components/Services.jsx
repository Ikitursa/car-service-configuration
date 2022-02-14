const SERVICES = [
  {
    name: 'Zamjena ulja i filtera',
    price: 500
  },
  {
    name: 'Promjena Pakni',
    price: 450
  },
  {
    name: 'Promjena guma',
    price: 100
  },
  {
    name: 'Servis klima uređaja',
    price: 299
  },
  {
    name: 'Balansiranje guma',
    price: 50
  },
  {
    name: 'Zamjena ulja u kočnicama',
    price: 229
  }
]

export default function Services() {
  return (
      <div className="dialogue-page">
        <h3 className="dialogue-page-title">
          Korak 2 Odaberite jednu ili više usluga
        </h3>

        <div className="dialogue-page-content">

          <div className="form-wrapper services">

            {
              SERVICES.map((service) => {

                return (
                    <div className="input-wrapper">
                      <label><input type="checkbox" name="service"/>
                        {service.name} ({service.price}kn)</label>
                    </div>
                )
              })
            }

          </div>

          <div className="price-wrapper">
            <div className="coupon-wrapper">
              <button className="button-rounded">Imam kupon</button>
              <div className="input-wrapper coupon">
                <input type="text"/>
                <button className="button-rounded">Primjeni</button>
              </div>
              <p className="coupon-message success">Hvala vam, unjeli ste ispravan kod kupona</p>
              <p className="coupon-message failure">Unjeli ste neispravan kupon, pokušajte ponovo</p>
            </div>

            <div className="amount">
              <p className="base-amount">OSNOVICA: <strong>950,00 KN</strong></p>
              <p className="discount-amount">Popust (30%): <strong>-285,00 KN</strong></p>
              <p className="total-amount">UKUPNO: <strong>665,00 KN</strong></p>
            </div>
          </div>


        </div>
      </div>
  )
}