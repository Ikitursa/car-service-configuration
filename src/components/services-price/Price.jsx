import {useContext, useRef} from "react"
import {ConfiguratorContext} from "../../contexts/ConfiguratorContext"
import {useState} from "react"
import {calculatePrice} from "../../helpers/calculateServicesPrice"

const COUPONS = [{
  code: 'Tokic123',
  discount: 0.3
},
  {
    code: 'Tokic70',
    discount: 0.7
  }]


export default function Price() {

  const {coupon, setCoupon, services} = useContext(ConfiguratorContext)

  const [couponInputActive, setCouponInputActive] = useState(false)
  const [couponErrorFlag, setCouponErrorFlag] = useState(false)

  const couponRef = useRef(null)


  const validateCoupon = (e) => {
    e.preventDefault()
    const couponCode = couponRef.current.value
    const validCoupon = COUPONS.find(couponListItem => couponListItem.code === couponCode)

    if (validCoupon) {
      setCoupon(validCoupon)
    } else {
      setCouponErrorFlag(true)
    }

  }

  const prices = calculatePrice(services, coupon)
  return (
      <div className="price-wrapper">

        {coupon
            ? <p className="coupon-message success">Hvala vam, unjeli ste ispravan kod kupona</p>
            : <div className="coupon-wrapper">
              {couponInputActive
                  ? <>
                    <div className="input-wrapper coupon">
                      <form onSubmit={validateCoupon}>
                        <input type="text" ref={couponRef}/>
                        <button className="button-rounded" type="submit">Primjeni</button>
                      </form>

                    </div>
                    {couponErrorFlag &&
                    <p className="coupon-message failure">Unjeli ste neispravan kupon, pokušajte ponovo</p>
                    }
                  </>
                  : <button className="button-rounded" onClick={() => setCouponInputActive(true)}>Imam kupon</button>
              }
            </div>
        }

        <div className="amount">
          {coupon
          && <>
            <p className="base-amount">OSNOVICA: <strong>{prices.basePrice} KN</strong></p>
            <p className="discount-amount">Popust
              ({prices.discountPercentage}): <strong>-{prices.discountAmount} KN</strong>
            </p>
          </>
          }
          <p className="total-amount">UKUPNO: <strong>{prices.totalPrice}</strong></p>
        </div>
      </div>
  )
}