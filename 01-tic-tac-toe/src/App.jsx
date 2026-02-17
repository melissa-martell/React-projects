import { useState } from 'react'
import './App.css'
import { Square } from './componentes/Square.jsx'
import { TURNS, WINNER_COMBOS } from './constantes.js'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null no ganador, false empate
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    // Revisar combinaciones ganadoras
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    // Poner estados en valores iniciales
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // No se actualiza si ya tiene algo
    if(board[index] || winner) return

    // Poner valor en la cacilla
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Asignar nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className='board'> 
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Volver a empezar</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>

              <h2>
                {
                  winner === false ? 'Empate' : 'Ganador:'
                }
              </h2>

              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
