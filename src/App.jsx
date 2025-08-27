import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import IconCalculator from './assets/icon-calculator.png'
import IconHouse from './assets/icon-house.png'
import IconLight from './assets/icon-light.png'
import IconSearch from './assets/icon-search.png'

function App() {

  return (
    <main>
      <section className='header'>
        <Header />
      </section>
      <section className='cards-list'>
          <Card title="Supervisor" text="Monitors activity to identify project roadblocks" src={IconSearch} borderColor='#44d3d2'/>
          <Card title="Team Builder" text="Scans our talent network to create the optimal team for your project" src={IconHouse} borderColor='#ea5454'/>
          <Card title="Karma" text="Regularly evaluates our talent to ensure quality" src={IconLight} borderColor='#fcae4a'/>
          <Card title="Calculator" text="Uses data from past projects to provide better delivery estimates" src={IconCalculator} borderColor='#5491f2'/>
      </section>
    </main>
  )
}

export default App
