import './DemoContent.css'

function DemoContent({packageversion}) {
    // let currentDate = new Date()
    return (
        <div className="demoContent">
          <h1>Counter</h1>
          <select>
            <option value="" selected disabled hidden>Startpunkt wählen</option>
            <option>Ab jetzt Starten</option>
            <option>Ein Start Datum auswählen</option>
          </select>
            <input type="datetime-local"/>
            <button>start</button>
            <button>Pause</button>
            <button>Stop</button>
      </div>
    )
}

export default DemoContent
