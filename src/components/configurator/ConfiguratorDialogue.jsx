import {ConfiguratorProvider} from '../../contexts/ConfiguratorContext'
import ConfiguratorPageSwitcher from './ConfiguratorPageSwitcher'
import DialogueCloseButton from './DialogueCloseButton'

export default function ConfiguratorDialogue() {
  return (
      <div className="backdrop">
        <div className="config-dialogue centered-popup">
          <ConfiguratorProvider>
            <div className="dialogue-header">
              <h2 className="dialogue-title">Konfigurator servisa</h2>
              <DialogueCloseButton />
            </div>
            <ConfiguratorPageSwitcher/>
          </ConfiguratorProvider>
        </div>
      </div>
  )
}