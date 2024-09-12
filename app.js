const fs = require ('fs')
const yargs = require('yargs')
const dico = require('./dico.js')

/*const dico =[
    {
        name:"reconversion",
        definition:"reconversion concernant une activité"
    },
    {
        name: "juger",
        definition:"emettre un avis sur quelqu'un"
    },
    {
        name : "observer",
        definition : "observer quelque chose"
    }
]


fs.writeFileSync('dico.json', JSON.stringify(dico))*/

//const openDico = function (nom){
    
//}





yargs.command({
    command: 'add',
    describe: 'Ajouter un mot',
    builder: {
        name: {
            describe: 'Nom du mot',
            demandOption: true,
            type: 'string'
        },
        definition: {
            describe: 'Definition du mot',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        dico.addWord(argv.name,argv.definition)
    }})

yargs.command({
    command : 'research',
    describe : 'Rechercher un mot',
    builder :{
        name :{
            describe : 'Nom du mot à rechercher',
            demandOption : true,
            type :'string'
        }
    },
    handler : function (argv){
        dico.researchWord(argv.name)

    } })

yargs.parse()








