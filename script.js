async function render(fi, si) {
  let response = await fetch(
    `https://rickandmortyapi.com/api/character/${fi},${si}`
  );
  let data = await response.json();
  console.log(data);
  // Your code goes here
  return data;
}

//function to render charaacter
async function render(char1Id, char2Id) {
  //get the character
  const char1Id = await FetchcharacterData(char1Id);
  const char2Id = await FetchcharacterData(char2Id);
  //Targeting the img element

  const char1Img = document.getElementById("char1");
  const char2Img = document.getElementById("char2");
}

//setting up img element
char1Img.src = char1Data.image;
char2Img.src = char2Data.image;

console.log(char1Data, char2Data);

render(20, 35);
