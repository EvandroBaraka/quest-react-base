import './App.css'
import ParagraphToUper from './components/paragraph/paragraph'
import Button from './components/button/button'

function App() {

  return (
    <>
        <ParagraphToUper textColor={'orange'}>
          Este texto foi renderizado por um componente react.
        </ParagraphToUper>

        <Button label='Baixar CV' />
    </>
  )
}

export default App
