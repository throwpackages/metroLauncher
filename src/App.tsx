import { Aside } from "./components/Aside/Aside"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <>
      <Header />
      <div style={{display: "flex", height: "100%", position: "absolute", top: 0, left: 0}}>
        <Aside />
      </div>
    </>
  )
}

export default App
