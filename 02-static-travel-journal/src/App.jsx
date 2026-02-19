import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import Destinations from "./Destinations.js"

function App() {
  const destinations = Destinations.map((destination) => {
    return (
      <Entry 
        key={destination.id}
        entry={destination}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="entries-conteiner">
        {destinations}
      </section>
    </>
  )
}

export default App