var katzDeliLine = [];

var lineLength = 0;

function takeANumber(katzDeliLine) {
  lineLength += 1;
  katzDeliLine.push(lineLength);
  return `Welcome, ${name}. You are number ${lineLength} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
      let current = katzDeliLine.shift();
      return `Currently serving ${current}.`
    }
  else return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let line = `The line is currently: 1. ${katzDeliLine[0]}`
    for (let i = 1; i < katzDeliLine.length; i++) {
      line = line + `, ${i+1}. ${katzDeliLine[i]}`
    }
    return line
  }
 else return "The line is currently empty."
}
