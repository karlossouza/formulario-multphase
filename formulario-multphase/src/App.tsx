
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import './App.css'

function App() {

  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra , ultilize o espaço abaixo para avaliar nosso produto.
        </p>
        <div className='form-container'>
          <p>Passos</p>
          <form>
            <div className='input-container'></div>
            <div className='actions'></div>
            <button>
              <GrFormPrevious />
              <span>avançar</span>
            </button>
            <button>
              <GrFormNext />
              <span>voltar</span>
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default App
