import color from 'colors'

export function printBgColor (firstBoxColor, secondBoxColor, thirdBoxColor) {
  console.log(color.bgWhite('           '))
  console.log(`${color.bgWhite('  ')}${firstBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${firstBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${firstBoxColor}${color.bgWhite('  ')}`)
  console.log(color.bgWhite('           '))
  console.log(`${color.bgWhite('  ')}${secondBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${secondBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${secondBoxColor}${color.bgWhite('  ')}`)
  console.log(color.bgWhite('           '))
  console.log(`${color.bgWhite('  ')}${thirdBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${thirdBoxColor}${color.bgWhite('  ')}`)
  console.log(`${color.bgWhite('  ')}${thirdBoxColor}${color.bgWhite('  ')}`)
  console.log(color.bgWhite('           '))
}
