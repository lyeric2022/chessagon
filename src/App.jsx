import React, { useState } from 'react';
import './App.scss';
import boardImage from './assets/board.png';

import ChessBoard from './ChessBoard';

const WHITE_KING = "\u2654";
const WHITE_QUEEN = "\u2655";
const WHITE_ROOK = "\u2656";
const WHITE_BISHOP = "\u2657";
const WHITE_KNIGHT = "\u2658";
const WHITE_PAWN = "\u2659";

const BLACK_KING = "\u265A";
const BLACK_QUEEN = "\u265B";
const BLACK_ROOK = "\u265C";
const BLACK_BISHOP = "\u265D";
const BLACK_KNIGHT = "\u265E";
const BLACK_PAWN = "\u265F";

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

  // pawns
  twoDArray[1][6] = WHITE_PAWN;
  twoDArray[2][6] = WHITE_PAWN;
  twoDArray[3][6] = WHITE_PAWN;
  twoDArray[4][6] = WHITE_PAWN;
  twoDArray[5][6] = WHITE_PAWN;
  twoDArray[6][6] = WHITE_PAWN;
  twoDArray[7][6] = WHITE_PAWN;
  twoDArray[8][6] = WHITE_PAWN;
  twoDArray[9][6] = WHITE_PAWN;

  twoDArray[1][0] = BLACK_PAWN;
  twoDArray[2][1] = BLACK_PAWN;
  twoDArray[3][2] = BLACK_PAWN;
  twoDArray[4][3] = BLACK_PAWN;
  twoDArray[5][4] = BLACK_PAWN;
  twoDArray[6][3] = BLACK_PAWN;
  twoDArray[7][2] = BLACK_PAWN;
  twoDArray[8][1] = BLACK_PAWN;
  twoDArray[9][0] = BLACK_PAWN;

  // bishops
  twoDArray[5][8]  = WHITE_BISHOP;
  twoDArray[5][9]  = WHITE_BISHOP;
  twoDArray[5][10] = WHITE_BISHOP;

  twoDArray[5][0]  = BLACK_BISHOP;
  twoDArray[5][1]  = BLACK_BISHOP;
  twoDArray[5][2] = BLACK_BISHOP;

  // knights
  twoDArray[3][8] = WHITE_KNIGHT;
  twoDArray[7][8] = WHITE_KNIGHT;
  
  twoDArray[3][0] = BLACK_KNIGHT;
  twoDArray[7][0] = BLACK_KNIGHT;

  // rooks
  twoDArray[2][7] = WHITE_ROOK;
  twoDArray[8][7] = WHITE_ROOK;

  twoDArray[2][0] = BLACK_ROOK;
  twoDArray[8][0] = BLACK_ROOK;

  // kings & queens
  twoDArray[4][9] = WHITE_QUEEN;
  twoDArray[6][9] = WHITE_KING;

  twoDArray[4][0] = BLACK_QUEEN;
  twoDArray[6][0] = BLACK_KING;

  return twoDArray;
}

function App() {

  return (
    <>
      <div className='game-container'>
        <ChessBoard/>
      </div>
    </>
  );
}

export default App;
