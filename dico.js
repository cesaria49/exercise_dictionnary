const fs = require("fs");
const yargs = require("yargs");

const openDico = function () {
  try {
    const fileRead = fs.readFileSync("dico.json");
    const dataJSON = fileRead.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];    }
};

const addWord = function (name, definition) {
  const dico = openDico();
  if (dico.find((objectDico) => objectDico.name === name)) {
    console.log("This word is already in the dico");
  } 
  else {
    dico.push({
      name: name,
      definition: definition,
    });
    saveWord(dico);
    console.log("Word added sucessfully");
  }
};

const saveWord = function (dico) {
  const dataJSON = JSON.stringify(dico);
  fs.writeFileSync("dico.json", dataJSON);
};

const researchWord = (mot) => {
  //console.log(mot)
  const dico = openDico();
  //const motTrouve = dico.find((motAChercher) => dico.name === motAChercher) faux
  //const motTrouve = dico.find((objetDico) => objetDico.name === mot) vrai mais avec la fonction fléchée
  const wordFind = dico.find(function (objectDico) {
    return objectDico.name === mot;
  });
  if (wordFind) {
    console.log(wordFind.name + " : " + wordFind.definition);
  } else {
    console.log("This mot is not in the dico");
  }
};

module.exports = {
  addWord: addWord,
  researchWord: researchWord,
};
