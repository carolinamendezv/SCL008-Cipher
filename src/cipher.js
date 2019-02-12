window.cipher ={
  encode:(offset, textCifrar)=> {
      //declarando variables
          let resultadoEncode = '';
       
          for (let i=0; i < textCifrar.length; i++){
              let asciiCode = textCifrar.charCodeAt(i);
       
              if (asciiCode >= 65 && asciiCode <= 90){
                  asciiCode = (asciiCode - 65 + parseInt(offset)) % 26 + 65;
              }
           resultadoEncode +=String.fromCharCode(asciiCode);
          }
       
          return resultadoEncode;
       },
      
  decode :(offset, textDescifrar) => {
       
          let resultadoDecode = '';
       
          for (let i = 0; i < textDescifrar.length; i++) {
       
              let asciiCode = textDescifrar.charCodeAt(i);
       if (asciiCode >= 65 && asciiCode <= 90) {
                  asciiCode = ((asciiCode - 90 - parseInt(offset)) % 26 + 90)
          }
          resultadoDecode+=String.fromCharCode(asciiCode);
       }
          return resultadoDecode;
       }
      
      
      };
      
  