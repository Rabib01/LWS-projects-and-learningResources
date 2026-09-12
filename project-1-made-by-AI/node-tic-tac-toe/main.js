#!/usr/bin/env node
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function displayBoard(b) {
  console.log(`\n ${b[0]} | ${b[1]} | ${b[2]}`);
  console.log('---+---+---');
  console.log(` ${b[3]} | ${b[4]} | ${b[5]}`);
  console.log('---+---+---');
  console.log(` ${b[6]} | ${b[7]} | ${b[8]}\n`);
}

function checkWin(b) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (const [a,bi,c] of lines) {
    if (b[a] !== ' ' && b[a] === b[bi] && b[a] === b[c]) return b[a];
  }
  return null;
}

function isDraw(b) {
  return b.every(cell => cell !== ' ');
}

function question(prompt) {
  return new Promise(res => rl.question(prompt, ans => res(ans)));
}

async function main() {
  console.log('Tic‑Tac‑Toe — CLI');
  console.log('Cells are numbered 1–9 like this:');
  console.log('\n 1 | 2 | 3\n---+---+---\n 4 | 5 | 6\n---+---+---\n 7 | 8 | 9\n');

  const board = Array(9).fill(' ');
  let current = 'X';

  while (true) {
    displayBoard(board);
    const ans = (await question(`Player ${current}, enter move (1-9) or q to quit: `)).trim();
    if (ans.toLowerCase() === 'q') {
      console.log('Goodbye!');
      break;
    }
    const pos = Number(ans) - 1;
    if (!Number.isInteger(pos) || pos < 0 || pos > 8) {
      console.log('Please enter a number between 1 and 9.');
      continue;
    }
    if (board[pos] !== ' ') {
      console.log('Cell already taken — pick another.');
      continue;
    }
    board[pos] = current;
    const winner = checkWin(board);
    if (winner) {
      displayBoard(board);
      console.log(`Player ${winner} wins!`);
      break;
    }
    if (isDraw(board)) {
      displayBoard(board);
      console.log('Draw!');
      break;
    }
    current = current === 'X' ? 'O' : 'X';
  }
  rl.close();
}

if (require.main === module) main();
