export default (name, index = false) => () => System.import(`views/${name}${index ? '/index' : ''}.vue`)
