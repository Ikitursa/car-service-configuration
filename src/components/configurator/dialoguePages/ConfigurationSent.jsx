import {useContext, useEffect} from 'react'
import {ModalVisibleContext} from '../../../contexts/ModalVisibleContext'
import {ConfiguratorContext} from '../../../contexts/ConfiguratorContext'

export default function ConfigurationSent() {

  const {setIsDialogueVisible} = useContext(ModalVisibleContext)
  const {carBrand, services, coupon, contactInfo} = useContext(ConfiguratorContext)

  useEffect(() => {
    console.log('Sent to backend:', {
      carBrand, services, coupon, contactInfo
    })
  }, [])

  return (
      <div className="submit-message">
        <h3 className="dialogue-page-title">
          Vaša prijava je uspješno poslana
        </h3>
        <p>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas u najkraćem mogućem roku.
          Hvala vam.
        </p>
        <button className="button-rounded" onClick={() => setIsDialogueVisible(false)}>Zatvori</button>
      </div>
  )
}