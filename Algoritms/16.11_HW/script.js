function hanoi(quantityOfDiscs, startPole, helpPole, finishPole) {
  if (quantityOfDiscs <= 0) {
    return false;
  } else {
    hanoi(quantityOfDiscs - 1, startPole, finishPole, helpPole);
    console.log(`${startPole} => ${helpPole}`);

    hanoi(quantityOfDiscs - 1, finishPole, helpPole, startPole);
  }
  return;
}

console.log(hanoi(3, 1, 3, 2));
//console.log(hanoi(4, 1, 3, 2));
//console.log(hanoi(5, 1, 3, 2));
//console.log(hanoi(6, 1, 3, 2));