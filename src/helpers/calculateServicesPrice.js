import {sumBy} from "lodash";

const calculatePrice = (services, activeCoupon) => {

  const basePrice = sumBy(services, 'price')
  const discount = activeCoupon ? activeCoupon.discount : 0
  const discountAmount = basePrice * discount
  const totalPrice = basePrice - discountAmount

  return {
    basePrice: basePrice.toFixed(2),
    discountAmount: discountAmount.toFixed(2),
    discountPercentage: `${discount * 100}%`,
    totalPrice: totalPrice.toFixed(2),
  }
}

export {calculatePrice}