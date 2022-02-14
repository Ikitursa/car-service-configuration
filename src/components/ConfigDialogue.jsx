import CarBrands from "./CarBrands";

export default function ConfigDialogue() {

  return (
      <div className="config-dialogue">
        <div className="dialogue-header">
          <h2 className="dialogue-title">Konfigurator servisa</h2>
          <button className="button-rounded button-secondary close">X</button>
        </div>

        {/* Dialogue components*/}
        {/* temporary wrapper div "dialogue-components" */}
        <div className="dialogue-components">

          <CarBrands/>

        </div>
        {/* /Dialogue components*/}

        <div className="dialogue-controls">
          <button className="button-rounded">Nazad</button>
          <button className="button-rounded">Dalje</button>
          <button className="button-rounded button-secondary">Pošalji</button>
        </div>


      </div>
  )
}