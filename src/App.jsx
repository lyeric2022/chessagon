import React from 'react';
import './App.scss';
import boardImage from './assets/board.png';

const WHITE_KING = "\u265A";
const WHITE_QUEEN = "\u265B";
const WHITE_ROOK = "\u265C";
const WHITE_BISHOP = "\u265D";
const WHITE_KNIGHT = "\u265E";
const WHITE_PAWN = "\u265F";

const BLACK_KING = "\u2654";
const BLACK_QUEEN = "\u2655";
const BLACK_ROOK = "\u2656";
const BLACK_BISHOP = "\u2657";
const BLACK_KNIGHT = "\u2658";
const BLACK_PAWN = "\u2659";

function generateBoard() {
  const twoDArray = [
    Array(6).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(7).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(8).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(9).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(10).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(11).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(10).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(9).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(8).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(7).fill("\u00A0"), // Replace "\u0020" with "\u00A0"
    Array(6).fill("\u00A0") // Replace "\u0020" with "\u00A0"
  ];
  twoDArray[0][0] = WHITE_KING;
  twoDArray[0][1] = WHITE_KING;
  twoDArray[0][2] = WHITE_KING;
  twoDArray[0][3] = WHITE_KING;
  twoDArray[0][4] = WHITE_KING;
  twoDArray[0][5] = WHITE_KING;

  twoDArray[1][0] = WHITE_KING;
  twoDArray[2][0] = WHITE_KING;
  twoDArray[3][0] = WHITE_KING;
  twoDArray[4][9] = WHITE_BISHOP;

  twoDArray[5][0] = BLACK_KING;
  twoDArray[5][1] = BLACK_KING;
  twoDArray[5][2] = BLACK_KING;
  twoDArray[5][3] = BLACK_KING;
  twoDArray[5][4] = BLACK_KING;
  twoDArray[5][5] = BLACK_KING;
  twoDArray[5][6] = BLACK_KING;
  twoDArray[5][7] = BLACK_KING;
  twoDArray[5][8] = BLACK_KING;
  twoDArray[5][9] = BLACK_KING;
  twoDArray[5][10] = BLACK_KING;

  twoDArray[6][0] = WHITE_KING;
  twoDArray[7][0] = WHITE_KING;
  twoDArray[8][0] = WHITE_KING;
  twoDArray[9][0] = WHITE_KING;
  twoDArray[10][0] = WHITE_KING;



  return twoDArray;
}

function App() {
  const gameBoard = generateBoard(); // Generate the game board with the white chess king

  return (
    <>
      <div className='game-container'>
        <img id='board-image' src={boardImage} alt='Chess Board' />
        {/* Render the pieces */}
        <div className='pieces-container'>
          {gameBoard.map((column, columnIndex) => (
            <div key={columnIndex} className='row'>
              {column.map((piece, rowIndex) => (
                <div key={rowIndex} className='piece'>
                  <span className="chess-piece" style={{ width: '42px', height: '42px' }}>
                    {piece}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
