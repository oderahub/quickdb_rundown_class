function temperatureConverter1(tempValue: number, unit: string): string {
  let result: number

  if (unit.toLowerCase() === 'celsius') {
    result = (tempValue * 9) / 5 + 32
  } else if (unit.toLowerCase() === 'fahrenheit') {
    result = ((tempValue - 32) * 5) / 9
  } else {
    return 'Invalid unit provided.'
  }

  // Round to two decimal places for a cleaner output
  return result.toFixed(2) + (unit.toLowerCase() === 'celsius' ? ' °F' : ' °C')
}
console.log(temperatureConverter1(10, 'fahrenheit'))
