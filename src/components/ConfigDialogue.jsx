import {ConfiguratorProvider} from "../contexts/ConfiguratorContext"
import ConfiguratorPageSwitcher from "./ConfiguratorPageSwitcher"

export default function ConfigDialogue({close}) {


  return (
      <div className="backdrop">
        <div className="config-dialogue centered-popup">
          <ConfiguratorProvider>
            <div className="dialogue-header">
              <h2 className="dialogue-title">Konfigurator servisa</h2>
              <button className="button-rounded button-secondary close" onClick={() => close()}>X</button>
            </div>

            <ConfiguratorPageSwitcher/>

          </ConfiguratorProvider>
        </div>
      </div>

  )
}