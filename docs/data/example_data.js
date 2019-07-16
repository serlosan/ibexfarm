var shuffleSequence = seq("intro", randomize("practice"), shuffle(randomize(anyOf("subj_rel","obj_rel")), randomize(anyOf("filler_gram","filler_ungram"))));

var sendingResultsMessage = "Los resultados se están enviando al servidor.";
var completionMessage = "Los resultados se han enviado al servidor. ¡Muchas gracias!";
var progressBarText = "Barra de progreso";
var pageTitle = "Experimento";

var defaults = [
  "AcceptabilityJudgment", {
      as: ["1", "2", "3", "4", "5", "6", "7"],
      presentAsScale: true,
      instructions: "Pulsa el número en el teclado o haz clic sobre la puntuación que quieras darle a la oración.",
      leftComment: "Inaceptable", rightComment: "Aceptable"
    },

  "Form", {
      hideProgressBar: true,
      continueOnReturn: true,
      saveReactionTime: true,
      continueMessage: "Haz clic aquí para continuar"
    },
];

var items = [

["intro", "Form", {
    html: { include: "example_intro.html" },
    validators: {
        age: function (s) { if (s.match(/^\d+$/)) return true; else return "Valor erróneo para \u2018edad\u2019"; }
        }
    } ],

// Practice

["practice","AcceptabilityJudgment",{s:"La casa de Luis está lejos del centro de la ciudad."}],
["practice","AcceptabilityJudgment",{s:"Los vecinos vieron que el cristal de la puerta estaba rota."}],

// Subject relatives

[["subj_rel",1],"AcceptabilityJudgment",{s:"Conocían al atleta que venció finalmente al corredor el año pasado."}],
[["subj_rel",2],"AcceptabilityJudgment",{s:"Investigaron al testigo que señalaba claramente al asesino durante el juicio."}],
[["subj_rel",3],"AcceptabilityJudgment",{s:"Aplaudieron al actor que llevó ese año al director a los Óscars."}],
[["subj_rel",4],"AcceptabilityJudgment",{s:"Censuraron el programa que denunció duramente al político a través de la radio."}],

// Object relatives

[["obj_rel",1],"AcceptabilityJudgment",{s:"Conocían al atleta que venció finalmente el corredor el año pasado."}],
[["obj_rel",2],"AcceptabilityJudgment",{s:"Investigaron al testigo que señalaba claramente al asesino durante el juicio."}],
[["obj_rel",3],"AcceptabilityJudgment",{s:"Aplaudieron al actor que llevó ese año el director a los Óscars."}],
[["obj_rel",4],"AcceptabilityJudgment",{s:"Censuraron el programa que denunció duramente el político a través de la radio."}],

// Fillers

["filler_gram","AcceptabilityJudgment",{s:"La frutera ha preguntado a la clienta si necesita una bolsa de plástico."}],
["filler_gram","AcceptabilityJudgment",{s:"Vieron que la abogada había manipulado las pruebas deliberadamente para ganar el caso"}],
["filler_ungram","AcceptabilityJudgment",{s:"El explorador estaba atento por si salías un animal salvaje de la selva."}],
["filler_ungram","AcceptabilityJudgment",{s:"Denunciaron que la futbolista había sido sancionado de forma injusta en la final."}],

]; //