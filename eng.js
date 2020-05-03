// Zeit, Wetter, Gegensätze, Körperteile, Reisen,
// Hotel, In der Stadt, Einkaufen, Restarant, Lebensmittel
// Strand, Urlaub, Arzt, Büro, Jobsuche, Arbeit, Computer
const expressions = [
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
const questions = [
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
const sentences = [
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
const numbers = [
  {ukr: "один", deu: "eins"},
  {ukr: "два", deu: "zwei"},
  {ukr: "три", deu: "drei"},
  {ukr: "чотири", deu: "vier"},
  {ukr: "п'ять", deu: "fünf"},
  {ukr: "шість", deu: "sechs"},
  {ukr: "сім", deu: "sieben"},
  {ukr: "вісім", deu: "acht"},
  {ukr: "дев'ять", deu: "neun"},
  {ukr: "десять", deu: "zehn"},
  {ukr: "одинадцять", deu: "elf"},
  {ukr: "дванадцять", deu: "zwölf"},
  {ukr: "тринадцять", deu: "dreizehn"},
  {ukr: "чотирнадцять", deu: "vierzehn"},
  {ukr: "п'ятнадцять", deu: "fünfzehn"},
  {ukr: "шістнадцять", deu: "sechzehn"},
  {ukr: "сімнадцять", deu: "siebzehn"},
  {ukr: "вісімнадцять", deu: "achtzehn"},
  {ukr: "дев'ятнадцять", deu: "neunzehn"},
  {ukr: "двадцять", deu: "zwanzig"},
  {ukr: "двадцять дев'ять", deu: "neunundzwanzig"},
  {ukr: "тридцять", deu: "dreißig"},
  {ukr: "сорок", deu: "vierzig"},
  {ukr: "п'ятдесят", deu: "fünfzig"},
  {ukr: "шістдесят", deu: "sechzig"},
  {ukr: "сімдесят", deu: "siebzig"},
  {ukr: "вісімдесят", deu: "achtzig"},
  {ukr: "дев'яносто", deu: "neunzig"},
  {ukr: "сто", deu: "hundert"},
  {ukr: "двісті", deu: "zweihundert"},
  {ukr: "триста", deu: "dreihundert"},
  {ukr: "чотириста", deu: "vierhundert"},
  {ukr: "п'ятсот", deu: "fünfhundert"},
  {ukr: "шістсот", deu: "sechshundert"},
  {ukr: "сімсот", deu: "siebenhundert"},
  {ukr: "вісімсот", deu: "achthundert"},
  {ukr: "дев'ятсот", deu: "neunhundert"},
  {ukr: "тисяча", deu: "tausend"},
  {ukr: "вісім тисяч", deu: "achttausend"},
  {ukr: "мільйон", deu: "die Million"},
]
const directions = [
  {ukr: "Хвилиночку", deu: "Einen Augenblick"},
  {ukr: "Зачекайте тут", deu: "Warten Sie hier"},
  {ukr: "Слідуйте за мною", deu: "Folgen Sie mir"},
  {ukr: "Вона вам допоможе", deu: "Sie wird Ihnen helfen"},
  {ukr: "Увійдіть", deu: "Kommen Sie rein"},
  {ukr: "Сідайте", deu: "Setzen Sie sich"},
  {ukr: "Підійдіть", deu: "Kommen Sie her"},
  {ukr: "Покажіть мені", deu: "Zeigen Sie es mir"},
  {ukr: "прямо", deu: "geradeaus"},
  {ukr: "позаду", deu: "hinten"},
  {ukr: "попереду", deu: "nach vorne"},
  {ukr: "всередині", deu: "drinnen"},
  {ukr: "поза", deu: "draußen"},
  {ukr: "тут", deu: "hier"},
  {ukr: "вздовж стіни", deu: "an der Wand"},
  {ukr: "за рогом", deu: "um die Ecke"},
  {ukr: "близько", deu: "nah"},
  {ukr: "далеко", deu: "weit"}, 
  {ukr: "на письмовому столі", deu: "am Schreibtisch"},
  {ukr: "у напрямку", deu: "in der Schlange"},
  {ukr: "далі по коридору", deu: "den Gang entlang"},
  {ukr: "вниз", deu: "unten"}, 
  {ukr: "вгору", deu: "oben"},
  {ukr: "позаду чогось", deu: "hinter"},
  {ukr: "попереду чогось", deu: "vor"},
  {ukr: "Перші двері праворуч", deu: "Erste Tür rechts"},
  {ukr: "поряд", deu: "neben"},
  {ukr: "На третьому світлофорі праворуч", deu: "An der dritten Ampel rechts"},
  {ukr: "Ви мене розумієте?", deu: "Verstehen Sie mich?"},
  {ukr: "північ", deu: "der Norden"}, 
  {ukr: "південь", deu: "der Süden"},
  {ukr: "захід", deu: "der Westen"},
  {ukr: "схід", deu: "der Osten"},
  {ukr: "Че є ліфт?", deu: "Gibt es einen Aufzug?"},
  {ukr: "праворуч", deu: "nach rechts"},
  {ukr: "ліворуч", deu: "nach links"},
  {ukr: "Де сходи?", deu: "Wo ist die Treppe?"},
  {ukr: "В якому напрямку?", deu: "In welche Richtung?"}, 
  {ukr: "Другі двері ліворуч", deu: "Zweite Tür links"},
  {ukr: "На розі поверніть ліворуч", deu: "An der Ecke links abbiegen"},
];
const colors = [
  {ukr: "Який це колір?", deu: "Welche Farbe ist das?"},
  {ukr: "Це червоний", deu: "Das ist rot"},
  {ukr: "білий", deu: "weiß"},
  {ukr: "чорний", deu: "schwarz"},
  {ukr: "рожевий", deu: "rosa"},
  {ukr: "коричневий", deu: "braun"},
  {ukr: "зелений", deu: "grün"},
  {ukr: "срібний", deu: "silber"}, 
  {ukr: "золотий", deu: "gold"},
  {ukr: "синій", deu: "blau"},
  {ukr: "помаранчевий", deu: "orange"},
  {ukr: "сірий", deu: "grau"}, 
  {ukr: "жовтий", deu: "gelb"},
];
const people = [
  {ukr: "племінник", deu: "der Neffe"},
  {ukr: "племінниця", deu: "die Nichte"},
  {ukr: "син", deu: "der Sohn"},
  {ukr: "дочка", deu: "die Tochter"},
  {ukr: "вітчим", deu: "der Stiefvater"},
  {ukr: "мачуха", deu: "die Stiefmutter"},
  {ukr: "зведений брат", deu: "der Stiefbruder"},
  {ukr: "зведена сестра", deu: "die Stiefschwester"},
  {ukr: "свекор", deu: "der Schwiegervater"},
  {ukr: "свекруха", deu: "die Schwiegermutter"},
  {ukr: "зять", deu: "der Schwager"},
  {ukr: "невістка", deu: "die Schwägerin"},
  {ukr: "Хто Ваш батько?", deu: "Wer ist Ihr Vater?"},
  {ukr: "Ви родичі?", deu: "Sind sie vervandt?"},
  {ukr: "Скільки років вашому братові?", deu: "Wie alt ist Ihr Bruder?"},
  {ukr: "хлопець", deu: "der Junge"},
  {ukr: "дівчина", deu: "das Mädchen"},
  {ukr: "чоловік", deu: "der Mann"},
  {ukr: "жінка", deu: "die Frau"},
  {ukr: "друг", deu: "der Freund"},
  {ukr: "подруга", deu: "die Freundin"},
  {ukr: "двоюрідний брат", deu: "der Cousin"},
  {ukr: "двоюрідна сестра", deu: "die Cousine"},
  {ukr: "дружина", deu: "die Ehefrau"},
  {ukr: "чоловік(заміжній)", deu: "der Ehemann"},
  {ukr: "сусід", deu: "der Nachbar"},
  {ukr: "сусідка", deu: "die Nachbarin"},
  {ukr: "Як давно Ви одружені?", deu: "Wie lange sind Sie schon verheiratet?"},
  {ukr: "А Ви одружені?", deu: "Sind Sie verheiratet?"},
  {ukr: "Це Ваша подруга?", deu: "Ist das Ihre Freundin?"},
];

let currentTheme = expressions;
let answer = "";
let answer2 = "";
let answerTrue = 0;
let answerFalse = 0;
let percentage = 0;
let stopper = 0;
let testAmount = expressions.length - 1;
let memory = expressions;
let currentThemaWords = memory.map(item => item.ukr + " - " + item.deu + "; ");
let showCorrect = false

function pickWordCreator () {
  let x = Math.floor(Math.random()*currentTheme.length);
  let pickWord = currentTheme[x];
  answer = pickWord.deu;
  answer2 = pickWord.deu2;
  return pickWord.ukr
}


$("#newGame").on("click", function() {
  currentTheme = memory;
  answer = "";
  answer2 = "";
  answerTrue = 0;
  answerFalse = 0;
  percentage = 0;
  stopper = 0;
  $("#answerInput").val("");
  $("#decision").removeClass("alert-success");
  $("#decision").removeClass("alert-danger");
      $("#decision").addClass("alert-info");
  $("#decision").text("Viel Glück!");
  $("#word").text(pickWordCreator())
  $("#percentage").text("Ihr Ergebnis wird hier angezeigt!");
  })

$("#check10").on("click", function() {
      testAmount = 9;
  $("#wordsAmount").text("10 Worte");
      })
  
$("#auditMode").on("click", function() {
          testAmount = currentTheme.length - 1;
    $("#wordsAmount").text( memory.length + " Worte");
          })

$("#showThema").on("click", function() {
          $("#themaWords").html(currentThemaWords);
            }) 


$("#expressions").on("click", function() {
          memory = expressions
          currentTheme = expressions;
          testAmount = expressions.length - 1;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
        $(".themeName").text("Sätze");
    $("#wordsAmount").text( memory.length + " Worte");
          })    

$("#questions").on("click", function() {
            memory = questions;
            currentTheme = questions;
            testAmount = questions.length - 1;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
          $(".themeName").text("Kurze Fragen");
    $("#wordsAmount").text( memory.length + " Worte");
            })   

$("#sentences").on("click", function() {
              memory = sentences;
              currentTheme = sentences;
              testAmount = sentences.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
            $(".themeName").text("Ausdrücke");
    $("#wordsAmount").text( memory.length + " Worte");
              })   

$("#numbers").on("click", function() {
                memory = numbers;
                currentTheme = numbers;
                testAmount = numbers.length - 1;
    currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
              $(".themeName").text("Zahlen");
      $("#wordsAmount").text( memory.length + " Worte");
                })   
$("#directions").on("click", function() {
                  memory = directions;
                  currentTheme = directions;
                  testAmount = directions.length - 1;
      currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
                $(".themeName").text("Richtungen");
        $("#wordsAmount").text( memory.length + " Worte");
                  })
                  
$("#colors").on("click", function() {
                    memory = colors;
                    currentTheme = colors;
                    testAmount = colors.length - 1;
        currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
                  $(".themeName").text("Farben");
          $("#wordsAmount").text( memory.length + " Worte");
                    }) 

$("#people").on("click", function() {
                      memory = people;
                      currentTheme = people;
                      testAmount = people.length - 1;
          currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
                    $(".themeName").text("Menschen");
            $("#wordsAmount").text( memory.length + " Worte");
                      }) 
  
$("#b1").on("click", function() {
  showCorrect = false
  if(stopper < testAmount){
  $("#answerInput").val("");
  $("#decision").removeClass("alert-success");
  $("#decision").removeClass("alert-danger");
      $("#decision").addClass("alert-info");
  $("#decision").text("Viel Glück!");
  $("#word").text(pickWordCreator())
  stopper++;}
  else {
    $("#decision").text("Ihr Endergebnis ist " );
  }
  })


  $("#b2").on("click", function() {
    if (showCorrect === true){
    $("#word").text(answer)
    }
    })

    $("input[type='text']").on("keypress",  function (event) { //"input[type='text']"
    if (event.which === 13) {
      showCorrect = true
    if ($("input[type='text']").val() == answer ||  $("input[type='text']").val() == answer2){
      currentTheme = currentTheme.filter((item) => {
        return item.deu !== answer // перевірка тільки на першу правильну, потім додати і для другої
      })
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
      currentTheme = currentTheme.filter((item) => {
        return item.deu !== answer // перевірка тільки на першу правильну, потім додати і для другої
      })
       answerFalse++;
       percentage = (answerTrue / (answerTrue + answerFalse) * 100).toFixed(0);
       $("#percentage").text(percentage + "%");
      $("#decision").text("Falsch!");
      $("#decision").addClass("alert-danger");
     }
    }
    });





















