var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`

}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
}
function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  var result = `The line is currently: `
  for (i = 0; i < katzDeliLine.length; i++){
    result += ` ${i+1}. `
    result += `${katzDeliLine[i]},`
  }
  return result
}