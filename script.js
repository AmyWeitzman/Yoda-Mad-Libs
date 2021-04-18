const favFoodStoryInput = '<form id="input-form" onsubmit="return generateMadLib()"><label for="food1">Food:</label><input type="text" id="food1"><br></br><label for="adj">Adjective:</label><input type="text" id="adj"><br></br><label for="num">Number:</label><input type="text" id="num"><br></br><label for="food2">Food:</label><input type="text" id="food2"><br></br><button id="submit-btn" class="btn" type="submit">Generate Mad Lib</button></form>';
const vacationStoryInput = '<form id="input-form" onsubmit="return generateMadLib()"><label for="place">Place:</label><input type="text" id="place"><br></br><label for="adj1">Adjective:</label><input type="text" id="adj1"><br></br><label for="adj2">Adjective:</label><input type="text" id="adj2"><br></br><label for="adj3">Adjective:</label><input type="text" id="adj3"><br></br><label for="noun">Noun:</label><input type="text" id="noun"><br></br><button id="submit-btn" class="btn" type="submit">Generate Mad Lib</button></form>';
const iSpyStoryInput = '<form id="input-form" onsubmit="return generateMadLib()"><label for="color">Color:</label><input type="text" id="color"><br></br><label for="adj1">Adjective:</label><input type="text" id="adj1"><br></br><label for="adj2">Adjective:</label><input type="text" id="adj2"><br></br><label for="place">Place:</label><input type="text" id="place"><br></br><label for="noun">Noun:</label><input type="text" id="noun"><br></br><button id="submit-btn" class="btn" type="submit">Generate Mad Lib</button></form>';

let STORY = '';

const selectStory = () => {
  const selectedStory = document.getElementById('story-option').value;
  STORY = selectedStory;
  if(selectedStory == 'fav-food') {
    document.getElementById('story-input').innerHTML = favFoodStoryInput;
  }
  else if(selectedStory == 'vacation') {
    document.getElementById('story-input').innerHTML = vacationStoryInput;
  }
  else {  // story = i-spy
    document.getElementById('story-input').innerHTML = iSpyStoryInput;
  }

  return false;
}

const generateMadLib = () => {
  switch(STORY) {
    case 'fav-food':
      document.getElementById('story-text').innerHTML = generateFavFoodMadLib();
      break;
    case 'vacation':
      document.getElementById('story-text').innerHTML = generateVacationMadLib();
      break;
    default:   // i-spy
    document.getElementById('story-text').innerHTML = generateISpyMadLib();
  }
  document.getElementById("yoda-img").style.visibility = 'visible';
  return false;
}

const generateFavFoodMadLib = () => {
  const food1 = document.getElementById('food1').value;
  const adj = document.getElementById('adj').value;
  const num = document.getElementById('num').value;
  const food2 = document.getElementById('food2').value;

  const story = `${food1}, my favorite food is. Very ${adj}, the taste is. Been eating it since I was ${num} years old, I have. This food with ${food2} on top, I like to eat.`;

  return story;
}

const generateVacationMadLib = () => {
  const place = document.getElementById('place').value;
  const adj1 = document.getElementById('adj1').value;
  const adj2 = document.getElementById('adj2').value;
  const adj3 = document.getElementById('adj3').value;
  const noun = document.getElementById('noun').value;

  const story = `To ${place}, for vacation I went. Very ${adj1}, it was. ${adj2} monuments and ${adj3} museums, I saw. As a souvenir, a ${noun}, I bought.`;

  return story;
}

const generateISpyMadLib = () => {
  const color = document.getElementById('color').value;
  const adj1 = document.getElementById('adj1').value;
  const adj2 = document.getElementById('adj2').value;
  const place = document.getElementById('place').value;
  const noun = document.getElementById('noun').value;

  const story = `The color ${color}, I spy a something that is. ${adj1} and ${adj2}, it is. Found in ${place}, it can be. A ${noun}, it is.`;

  return story;
}