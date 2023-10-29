function word(){
    let input=document.getElementById("inputWord").value;
                                                                               //   console.log(input);
      var a="https://api.dictionaryapi.dev/api/v2/entries/en/";
      let b=a.concat(input);
                                                                           //   console.log(b);
                                                                          // var api=(b);
    const api=fetch(b);
api.then((data)=>data.json()).then((data1)=>

{
    const  result=document.getElementById("result");  
    result.style.display = "block";                         
    result.innerHTML="";                                                                        // for(var i=0;i<data1.length;i++){
    for (var k = 0; k < data1.length; k++) {                                                                         // c(data1[0])
  const arr=data1[k];
  
                                                                             // console.log(arr.meanings)
for (var i = 0; i < arr.meanings.length; i++) {
    let meaning = arr.meanings[i];
   

    let definitionDiv = document.createElement("div");
        definitionDiv.innerHTML = `
        <div id="speech" class="font-italic">Parts of speech: 
        ${meaning.partOfSpeech}</div>
        <div id="def" class="text-monospace"> Definition:</div>
        <div class="font-weight-normal"> ${meaning.definitions[0].definition} </div>
        `;
        result.appendChild(definitionDiv);


  
    for(var j=0;j<meaning.definitions.length;j++){
   
   
    if( meaning.definitions[j].example){


        // let example = `example: ${meaning.definitions[j].example}`;
            
        // Create and append a <div> for each example
        let exampleDiv = document.createElement("div");
        exampleDiv.innerHTML = `<div class="text-uppercase"> Eaxmple :</div>
        <div class="font-weight-light"> ${meaning.definitions[j].example}</div>`;
        result.appendChild(exampleDiv);
      }
    }

    if (meaning.synonyms.length != 0) {
      // Create and append a <div> for synonyms
      let synonymsDiv = document.createElement("div");
      synonymsDiv.innerHTML = `<div class="text-monospace">Synonyms: </div>
      <div  class="font-weight-normal"> ${meaning.synonyms.join(", ")}</div>`;
      result.appendChild(synonymsDiv);
    }
}
  } 
})
.catch((error) => {
  alert("Something went wrong " + error);
}); 

}

const button=document.getElementById("button");
button.addEventListener("click",word);













// let but=document.getElementsByClassName("button");
// but.addEventListener("click",word);


// function foo(){
//     var api=fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`);
//     console.log(api);
//     api.then((res)=>res.json()).then((res1)=> console.log(res1));
// }
// foo();



// for(var i=0;i<arr.length;i++){
//     let arr1=arr[i];
//     console.log(arr1);
//     for(var j in arr1){
//         console.log(j,arr1[j].definition);
//     }
// }


//     console.log("parts of speech :"+meaning.partOfSpeech,"definition :"+ meaning.definitions[0].definition);
//    let one=("parts of speech :"+meaning.partOfSpeech);
//     let two=("definition :"+ meaning.definitions[0].definition);
    // result.innerHTML+=`<div>parts of speech : ${meaning.partOfSpeech}</div>
    // <div>definition : ${ meaning.definitions[0].definition}</div>`;
   
    // result.innerHTML+=`<div>parts of speech : ${meaning.partOfSpeech}</div>
    // <div>definition : ${ meaning.definitions[0].definition}</div>`;
  











