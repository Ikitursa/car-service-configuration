import ConfigDialogue from "./components/ConfigDialogue"
import {useState} from "react"

function App() {

  const [dialogueVisible, setDialogueVisible] = useState(false)

  const closeDialogue = () => {
    setDialogueVisible(false)
  }

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

          {dialogueVisible
              ? <ConfigDialogue close={closeDialogue}/>
              : <div className="start-config">
                <p>pritisnite gumb niže kako biste pokrenuli konfigurator</p>
                <button className="button-rounded" onClick={() => setDialogueVisible(true)}>Pokreni konfigurator
                </button>
              </div>
          }


        </div>

      </div>
  )
}

export default App
