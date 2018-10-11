function imprimirEnEspañol(num) {
  switch (num) {
    case 1:
      console.log('uno')
    case 2:
      console.log('dos')
      break
    default:
      console.log('default')
      break
    case 3:
      console.log('tres')
  }
}

imprimirEnEspañol(2)
// dos

imprimirEnEspañol(4)
// default

imprimirEnEspañol(1)
// uno
// dos

imprimirEnEspañol(3)
// default
