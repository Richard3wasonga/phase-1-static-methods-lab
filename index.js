class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^a-z0-9\-\'\s]/gi, '')
  }
  static titleize(string){
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(" ")
    const upperwords = words.map((word,index) => {
      if(except.includes(word) && index !== 0){
        return word.toLowerCase()
      }else{
        return Formatter.capitalize(word)
      }
    })
    return upperwords.join(" ")
   
  }
}