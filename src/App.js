import {useState} from 'react'
import {ModalVisibleContext} from './contexts/ModalVisibleContext'
import ConfiguratorDialogue from './components/configurator/ConfiguratorDialogue'

function App() {

  const [isDialogueVisible, setIsDialogueVisible] = useState(false)

  return (
      <div className="App">

        <header>
          <div className="header-wrapper content-wrapper">
            <div className="logo">TOKIĆ</div>
            <div className="header-text">
              <h3 className="header-title">Konfigurator servisa</h3>
              <p>Izračunajte trošak sevisa</p>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          {isDialogueVisible
              ? <ModalVisibleContext.Provider value={{setIsDialogueVisible}}>
                <ConfiguratorDialogue/>
              </ModalVisibleContext.Provider>
              : <div className="start-config">
                <p>pritisnite gumb niže kako biste pokrenuli konfigurator</p>
                <button className="button-rounded" onClick={() => setIsDialogueVisible(true)}>Pokreni konfigurator
                </button>
              </div>
          }
        </div>
      </div>
  )
}

export default App