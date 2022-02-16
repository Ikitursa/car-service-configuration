import {useContext} from 'react'
import configuratorPages from '../../enums/configuratorPages'
import {ConfiguratorContext} from '../../contexts/ConfiguratorContext'
import {ModalVisibleContext} from '../../contexts/ModalVisibleContext'

export default function DialogueCloseButton(props) {
  const {configuratorActivePage} = useContext(ConfiguratorContext)
  const {setIsDialogueVisible} = useContext(ModalVisibleContext)

  return (
      <>
        {
          configuratorActivePage !== configuratorPages.sent &&
          <button
              className="button-rounded button-secondary close"
              onClick={() => setIsDialogueVisible(false)}
          >X</button>
        }
      </>
  )
}