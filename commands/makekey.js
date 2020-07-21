function makeid(length) {
   var result           = '';
   var characters       = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      if((i+1) % 4 === 0 && i != (length-1)){
          result += '-';
      }
   }
   return result;
   console.log(makeid(16))
}
