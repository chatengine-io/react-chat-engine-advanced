const colors = [
  '#D64045',
  '#5B3000',
  '#00CC99',
  '#467599',
  '#1D3354',
  '#8F250C',
  '#6153CC',
  '#961D4E',
  '#A29F15',
  '#0CAADC',
  '#FF5154',
  '#FA7921',
  '#688E26',
  '#550527',
  '#A10702',
  '#FF1053',
  '#6C6EA0',
  '#100B00',
]

const stringToNumber = (str: string) => {
  let sum = 0
  for (var i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum
}

export const stringToColor = (str: string | undefined) => {
  if (!str) {
    return 'black'
  } else {
    return colors[stringToNumber(str) % colors.length]
  }
}