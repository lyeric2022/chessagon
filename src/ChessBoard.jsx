import React, { useState } from 'react';
import boardImage from './assets/board.png';

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

let twoDArray;
let possibleMoves = [];

function generateBoard() {
    twoDArray = [
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
    twoDArray[5][8] = WHITE_BISHOP;
    twoDArray[5][9] = WHITE_BISHOP;
    twoDArray[5][10] = WHITE_BISHOP;

    twoDArray[5][0] = BLACK_BISHOP;
    twoDArray[5][1] = BLACK_BISHOP;
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

function positionIsPossible(columnIndex, rowIndex) {
    let searchString = columnIndex.toString() + 'x' + rowIndex.toString();
    if (possibleMoves.includes(searchString) && twoDArray[columnIndex][rowIndex+1] === WHITE_PAWN) {
        return true;
    }
    else return false;
}

function ChessBoard() {
    const [selectedPiece, setSelectedPiece] = useState(null); // State to keep track of the selected piece's position
    const gameBoard = generateBoard(); // Generate the game board with the white chess king

    const handlePieceClick = (rowIndex, columnIndex) => {
        possibleMoves = [];

        setSelectedPiece({ row: rowIndex, column: columnIndex }); // Update the selected piece's position

        if (selectedPiece) {
            console.log(selectedPiece);

            const chessPiece = twoDArray[selectedPiece.column][selectedPiece.row];
            console.log(chessPiece);

            if (chessPiece === WHITE_PAWN) {
                // Add the forward move to the possible moves
                const possibleValue = columnIndex.toString() + 'x' + (rowIndex - 1).toString();
                possibleMoves.push(possibleValue);

                console.log("Possible moves for white pawn:", possibleMoves);

            }
        }
    };

    return (
        <>
            <img id='board-image' src={boardImage} alt='Chess Board' />
            <div className='pieces-container'>
                {gameBoard.map((column, columnIndex) => (
                    <div key={columnIndex} className='row'>
                        {column.map((piece, rowIndex) => (
                            <div
                                key={rowIndex}
                                onClick={() => handlePieceClick(rowIndex, columnIndex)}
                                className={`piece 
                                    ${selectedPiece && selectedPiece.row === rowIndex && selectedPiece.column === columnIndex && twoDArray[columnIndex][rowIndex] === WHITE_PAWN ? 'selected' : ''}
                                    ${selectedPiece && positionIsPossible(columnIndex, rowIndex) ? 'possible-move' : ''}
                                    `}
                            >
                                <span className="chess-piece" style={{ width: '42px', height: '42px' }}>
                                    {piece}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ChessBoard;
