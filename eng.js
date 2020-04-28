// Zahlen, Richtungen, Farben, Menschen,
// Zeit, Wetter, Gegensätze, Körperteile, Reisen,
// Hotel, In der Stadt, Einkaufen, Restarant, Lebensmittel
// Strand, Urlaub, Arzt, Büro, Jobsuche, Arbeit
// Computer
const saetze = [
  {ukr: "Привіт", deu: "Hallo"},
  {ukr: "Доброго ранку", deu: "Guten Morgen"},
  {ukr: "Доброго дня", deu: "Guten Tag"},
  {ukr: "Добрий вечір", deu: "Guten Abend"},
  {ukr: "Надобраніч", deu: "Gute Nacht"},
  {ukr: "Як у Вас справи?", deu: "Wie geht es Ihnen?"},
  {ukr: "Добре, дякую", deu: "Gut, danke"},
  {ukr: "А у Вас?", deu: "Und Ihnen?"},
  {ukr: "Гарний день", deu: "Es ist ein schöner Tag"},
  {ukr: "Ласкаво просимо", deu: "Willkommen"},
  {ukr: "Бажаю Вам гарного дня", deu: "Ich wünsche Ihnen einen schönen Tag"},
  {ukr: "До побачення", deu: "Auf Wiedersehen"},
  {ukr: "До зустрічі", deu: "Bis später"},
  {ukr: "Даруйте", deu: "Entschuldigung"},
  {ukr: "Вам допомогти?", deu: "Kann ich Ihnen helfen?"},
  {ukr: "До завтра", deu: "Bis morgen"},
  {ukr: "Ви розмовляєте англійською?", deu: "Sprechen Sie English?"},
  {ukr: "Так, трохи", deu: "Ja etwas"},
  {ukr: "Приємно познайомитися", deu: "Freut mich, Sie kennen zu lernen"},
  {ukr: "Радий був зустрічі з вами", deu: "Freut mich, Sie zu sehen"},
  {ukr: "пан", deu: "der Herr"},
  {ukr: "пані", deu: "die Frau"},
  {ukr: "панна", deu: "die Fräulein"},
  {ukr: "Говоріть повільно", deu: "Sprechen Sie bitte langsam"},
  {ukr: "Не розумію", deu: "Ich verstehe nicht"},
  {ukr: "Чи Ви розумієте?", deu: "Verstehen Sie sich?"},
  {ukr: "Звичайно", deu: "Sicher"},
  {ukr: "Повторіть будь ласка", deu: "Wiederholen Sie das bitte"},
  {ukr: "Ще раз", deu: "Noch mal"},
  {ukr: "Повільно", deu: "Langsam"},
  {ukr: "Послівно", deu: "Wort für Wort"},
  {ukr: "Що це значить?", deu: "Was bedeutet das?"},
  {ukr: "Що Ви сказали?", deu: "Was haben Sie gesagt?"},
  {ukr: "Ви хотіли щось запитати?", deu: "Haben Sie eine Frage?"},
  {ukr: "Будь ласка", deu: "Bitte"},
  {ukr: "Дуже дякую", deu: "Vielen Dank"},
  {ukr: "Нема за що", deu: "Nichts zu danken"},
  {ukr: "Будьте здорові(після чхання)", deu: "Gesundheit"},
  {ukr: "З днем народження", deu: "Herzlichen Glückwunsch zum Geburtstag"},
  {ukr: "Вітаю", deu: "Herzlichen Glückwunsch"},
  {ukr: "Удачі", deu: "Viel Glück"},
  {ukr: "Як Вас звати", deu: "Wie heißen Sie?"},
  {ukr: "Мене звати Антон", deu: "Ich heiße Anton"},
  {ukr: "Радий зустрітися з вами", deu: "Freut mich, Sie kennen zu lernen"},
  {ukr: "Ви звідки?", deu: "Wo kommen Sie her?"},
  {ukr: "Я з Лейпцига", deu: "Ich bin aus Leipzig"},
];

const kurzeFragen = [
  {ukr: "Хто?", deu: "Wer?"},
  {ukr: "Де?", deu: "Wo?"},
  {ukr: "Коли?", deu: "Wann?"},
  {ukr: "Чий?", deu: "Wessen?"},
  {ukr: "Чому?", deu: "Warum?"},
  {ukr: "Куди?", deu: "Wohin?"},
  {ukr: "Який?", deu: "Welche?"},
  {ukr: "Що?", deu: "Was?"},
  {ukr: "Як?", deu: "Wie?"},
  {ukr: "Як довго?", deu: "Wie lange?"},
  {ukr: "Скільки?", deu: "Wie viel?"},
  {ukr: "До кого?", deu: "An wen?"},
  {ukr: "З ким?", deu: "Mit wem?"},
  {ukr: "З чим?", deu: "Womit?"}
] 
const ausdruecke = [
  {ukr: "до речі", deu: "übrigens"},
  {ukr: "принаймні", deu: "mindestens"},
  {ukr: "нарешті", deu: "schließlich"},
  {ukr: "однак", deu: "allerdings"},
  {ukr: "тому", deu: "daher"},
  {ukr: "Не хвилюйтеся", deu: "Keine Sorge"},
  {ukr: "Це залежить від", deu: "Das kommt darauf an"},
  {ukr: "Мені шкода", deu: "Tut mir leid"},
  {ukr: "наразі", deu: "sofort"},
  {ukr: "Я не знаю", deu: "Ich weiß nicht"},
  {ukr: "яким чином", deu: "wie das"}
]

let currentTheme = saetze;
let answer = "";
let answer2 = "";
let answerTrue = 0;
let answerFalse = 0;
let percentage = 0;
let stopper = 0;
let testAmount = 9

let currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ")

function pickWordCreator () {
  let x = Math.floor(Math.random()*currentTheme.length);
  let pickWord = currentTheme[x];
  answer = pickWord.deu;
  answer2 = pickWord.deu2;
  return pickWord.ukr
}


//jQ

$("#newGame").on("click", function() {
  answer = "";
  answer2 = "";
  answerTrue = 0;
  answerFalse = 0;
  percentage = 0;
  stopper = 0
  $("#answerInput").val("");
  $("#decision").removeClass("alert-success");
  $("#decision").removeClass("alert-danger");
      $("#decision").addClass("alert-info");
  $("#decision").text("Viel Glück!");
  $("#word").text(pickWordCreator())
  $("#percentage").text("Ihr Ergebnis wird hier angezeigt!");
  })

  $("#check5").on("click", function() {
    testAmount = 4;
  $("#wordsAmount").text("5 Worte");
    })

$("#check10").on("click", function() {
      testAmount = 9;
  $("#wordsAmount").text("10 Worte");
      })
  
$("#check15").on("click", function() {
        testAmount = 14;
  $("#wordsAmount").text("15 Worte");
        })

$("#showThema").on("click", function() {
          $("#themaWords").html(currentThemaWords);
            }) 


$("#saetze").on("click", function() {
          currentTheme = saetze;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
        $(".themeName").text("Sätze");
          })    

$("#kurzeFragen").on("click", function() {
            currentTheme = kurzeFragen;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
          $(".themeName").text("Kurze Fragen");
            })   

$("#ausdruecke").on("click", function() {
              currentTheme = ausdruecke;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
            $(".themeName").text("Ausdrücke");
              })   
  




$("#b1").on("click", function() {
  if(stopper < testAmount){
  $("#answerInput").val("");
  $("#decision").removeClass("alert-success");
  $("#decision").removeClass("alert-danger");
      $("#decision").addClass("alert-info");
  $("#decision").text("Viel Glück!");
  $("#word").text(pickWordCreator())
  stopper++;}
  else {
    $("#decision").text("Ihr Endergebnis" );
  }
  })


  $("#b2").on("click", function() {
    $("#word").text(answer)
    })

    $("input[type='text']").on("keypress",  function (event) { //"input[type='text']"
    if (event.which === 13) {
    if ($("input[type='text']").val() == answer ||  $("input[type='text']").val() == answer2){
       answerTrue++;
       percentage = (answerTrue / (answerTrue + answerFalse) * 100).toFixed(0);
       $("#percentage").text(percentage + "%");
      $("#decision").text("Richtig!");
      $("#word").text(answer);
      $("#decision").removeClass("alert-info");
      $("#decision").removeClass("alert-danger");
      $("#decision").addClass("alert-success");
     }
     else {
       answerFalse++;
       percentage = (answerTrue / (answerTrue + answerFalse) * 100).toFixed(0);
       $("#percentage").text(percentage + "%");
      $("#decision").text("Falsch!");
      $("#decision").addClass("alert-danger");
     }
    }
    });





















