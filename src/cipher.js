window.cipher ={
  encode:(offset, text)=> {
      //declarando variables
          let resultadoEncode = '';
       
          for (let i=0; i < text.length; i++){
              let asciiCode = text.charCodeAt(i);
       
              if (asciiCode >= 65 && asciiCode <= 90){
                  asciiCode = (asciiCode - 65 + offset) % 26 + 65;
              }
           resultadoEncode +=String.fromCharCode(asciiCode);
          }
       
          return resultadoEncode;
       },
      
  decode :(offset, text) => {
       
          let resultadoDecode = '';
       
          for (let i = 0; i < text.length; i++) {
       
              let asciiCode = text.charCodeAt(i);
       if (asciiCode >= 65 && asciiCode <= 90) {
                  asciiCode = ((asciiCode - 90 - offset) % 26 + 90)
          }
          resultadoDecode+=String.fromCharCode(asciiCode);
       }
          return resultadoDecode;
       }
      
      
      };
      
  