//  Reisen, Hotel, In der Stadt, Einkaufen, Restarant, Lebensmittel
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
 {ukr: "Який?", deu: "Welcher?"},
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
  {ukr: "Ви родичі?", deu: "Sind sie verwandt?"},
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
const time = [
  {ukr: "сьогодні", deu: "heute"},
  {ukr: "вчора", deu: "gestern"},
  {ukr: "завтра", deu: "morgen"},
  {ukr: "дні тижня", deu: "die Wochentage"},
  {ukr: "понеділок", deu: "der Montag"},
  {ukr: "вівторок", deu: "der Dienstag"},
  {ukr: "середа", deu: "der Mittwoch"},
  {ukr: "четвер", deu: "der Donnerstag"},
  {ukr: "п'ятниця", deu: "der Freitag"},
  {ukr: "субота", deu: "der Samstag"},
  {ukr: "неділя", deu: "der Sonntag"},
  {ukr: "місяці року", deu: "die Monate des Jahres"},
  {ukr: "січень", deu: "der Januar"},
  {ukr: "лютий", deu: "der Februar"},
  {ukr: "березень", deu: "der März"},
  {ukr: "квітень", deu: "der April"},
  {ukr: "травень", deu: "der Mai"},
  {ukr: "червень", deu: "der Juni"},
  {ukr: "липень", deu: "der Juli"},
  {ukr: "серпень", deu: "der August"},
  {ukr: "вересень", deu: "der September"},
  {ukr: "жовтень", deu: "der Oktober"},
  {ukr: "листопад", deu: "der November"},
  {ukr: "грудень", deu: "der Dezember"},
  {ukr: "Який сьогодні день?", deu: "Welcher Tag ist heute?"},
  {ukr: "Сьогодні 21 травня 2020 року", deu: "Heute ist der einundzwanzigste Mai zweitausendzwanzig"},
  {ukr: "минулого тижня", deu: "letzte Woche"},
  {ukr: "наступного місяця", deu: "nächsten Monat"},
  {ukr: "завтра зранку", deu: "morgen früh"},
  {ukr: "вчора ввечері", deu: "gestern Abend"},
  {ukr: "сьогодні ввечері", deu: "heute Abend"},
  {ukr: "позавчора", deu: "vorgestern"},
  {ukr: "післязавтра", deu: "übermorgen"},
  {ukr: "вихідні", deu: "das Wochenende"},
  {ukr: "Котра година?", deu: "Wie spät ist es?"},
  {ukr: "О котрій годині?", deu: "Um welche Uhrzeit?"},
  {ukr: "Зараз друга година", deu: "Es ist zwei Uhr"},
  {ukr: "Зараз 8:45", deu: "Es ist acht Uhr fünfundvierzig"},
  {ukr: "О дев'ятій годині", deu: "Um neun Uhr"},
  {ukr: "полудень", deu: "zwölf Uhr"},
  {ukr: "північ(00:00)", deu: "die Mitternacht"},
  {ukr: "післяобідній час", deu: "der Nachmittag"},
  {ukr: "після(про час)", deu: "hinterher"},
  {ukr: "В якому місяці?", deu: "In welchem Monat?"},
  {ukr: "Якого дня?", deu: "An welchem Tag?"},
  {ukr: "Розбудіть мене о восьмій ранку", deu: "Wecken Sie mich um acht"},
  {ukr: "рано", deu: "früh"},
  {ukr: "ніколи", deu: "nie"},
  {ukr: "іноді", deu: "manchmal"},
  {ukr: "скоро, незабаром", deu: "bald"},
];
const weather = [
  {ukr: "Яка погода?", deu: "Wie ist das Wetter?"},
  {ukr: "Жарко", deu: "Es ist heiß"},
  {ukr: "Холодно", deu: "Es ist kalt"},
  {ukr: "Волого", deu: "Es ist schwül"},
  {ukr: "Сонячно", deu: "Es ist sonnig"},
  {ukr: "Хмарно", deu: "Es ist bewölkt"},
  {ukr: "Йде дощ", deu: "Es regnet"},
  {ukr: "Йде сніг", deu: "Es schneit"},
  {ukr: "Вітряно", deu: "Es ist windig"},
  {ukr: "Неприємно", deu: "Es ist schlecht"},
  {ukr: "Яка температура?", deu: "Wie viel Grad ist es?"},
  {ukr: "зима", deu: "der Winter"},
  {ukr: "весна", deu: "der Frühling"},
  {ukr: "літо", deu: "der Sommer"},
  {ukr: "осінь", deu: "der Herbst"},
  {ukr: "пори року", deu: "die Jahreszeiten"},
];
const opposites = [
  {ukr: "товстий", deu: "dick"},
  {ukr: "худий", deu: "dünn"},
  {ukr: "легкий", deu: "leicht"},
  {ukr: "важкий", deu: "schwer"},
  {ukr: "однаковий", deu: "gleich"},
  {ukr: "різний", deu: "unterschiedlich"},
  {ukr: "кілька", deu: "wenige"},
  {ukr: "багато", deu: "viel"},
  {ukr: "тягнути", deu: "ziehen"},
  {ukr: "штовхати", deu: "drücken"},
  {ukr: "світлий", deu: "hell"},
  {ukr: "темний", deu: "dunkel"},
  {ukr: "самотній", deu: "allein"},
  {ukr: "вологий", deu: "nass"},
  {ukr: "сухий", deu: "trocken"},
  {ukr: "швидкий", deu: "schnell"},
  {ukr: "повільно", deu: "langsam"},
  {ukr: "пустий", deu: "leer"},
  {ukr: "повний", deu: "voll"},
  {ukr: "красивий", deu: "hübsch"},
  {ukr: "потворний", deu: "hässlich"},
  {ukr: "гучний", deu: "laut"},
  {ukr: "тихий", deu: "leise"},
  {ukr: "сильний", deu: "stark"},
  {ukr: "слабкий", deu: "schwach"},
  {ukr: "жорсткий", deu: "hart"},
  {ukr: "м'який", deu: "weich"},
  {ukr: "брехня", deu: "die Lüge"},
  {ukr: "правда", deu: "die Warheit"},
  {ukr: "більше", deu: "mehr"},
  {ukr: "менше", deu: "weniger"},
  {ukr: "щасливий", deu: "glücklich"},
  {ukr: "сумний", deu: "traurig"},
  {ukr: "брудний", deu: "dreckig"},
  {ukr: "чистий", deu: "sauber"},
  {ukr: "пізній", deu: "spät"},
  {ukr: "живий", deu: "lebendig"},
  {ukr: "мертвий", deu: "tot"},
  {ukr: "до", deu: "vor"},
  {ukr: "після", deu: "nach"},
  {ukr: "всі", deu: "alle"},
  {ukr: "ніхто", deu: "keine"}, 
];
const bodyparts = [
  {ukr: "голова", deu: "der Kopf"},
  {ukr: "лоб", deu: "die Stirn"},
  {ukr: "волосся", deu: "das Haar"},
  {ukr: "обличчя", deu: "das Gesicht"},
  {ukr: "вії", deu: "die Wimpern"},
  {ukr: "брови", deu: "die Augenbraue"},
  {ukr: "щока", deu: "die Wange"},
  {ukr: "зуби", deu: "die Zähne"},
  {ukr: "язик", deu: "die Zunge"},
  {ukr: "губи", deu: "die Lippen"},
  {ukr: "шия", deu: "der Nacken"},
  {ukr: "горло", deu: "der Hals"},
  {ukr: "підборіддя", deu: "das Kinn"},
  {ukr: "щелепа", deu: "der Kiefer"},
  {ukr: "плече", deu: "die Schulter"},
  {ukr: "груди", deu: "die Brust"},
  {ukr: "спина", deu: "der Rücken"},
  {ukr: "шлунок", deu: "der Magen"},
  {ukr: "талія", deu: "die Taille"},
  {ukr: "торс", deu: "der Rimpf"},
  {ukr: "лікоть", deu: "der Ellenbogen"},
  {ukr: "передпліччя", deu: "der Unterarm"},
  {ukr: "зап'ястя", deu: "das Handgelenk"},
  {ukr: "палець", deu: "der Finger"},
  {ukr: "великий палець руки", deu: "der Daumen"},
  {ukr: "ніготь", deu: "der Nagel"},
  {ukr: "стегно", deu: "der Oberschenkel"},
  {ukr: "сідниці", deu: "das Gesäß"},
  {ukr: "нога", deu: "der Fuß"},
  {ukr: "ступня", deu: "das Bein"},
  {ukr: "щиколотка", deu: "der Knöchel"},
  {ukr: "задня поверхня гомілки", deu: "die Wade"},
  {ukr: "коліно", deu: "das Knie"},
  {ukr: "п'ятка", deu: "die Ferse"},
  {ukr: "палець ноги", deu: "die Zehen"},
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

$("#time").on("click", function() {
                        memory = time;
                        currentTheme = time;
                        testAmount = time.length - 1;
            currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
                      $(".themeName").text("Zeit");
              $("#wordsAmount").text( memory.length + " Worte");
                        }) 
  
 $("#weather").on("click", function() {
                          memory = weather;
                          currentTheme = weather;
                          testAmount = weather.length - 1;
              currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
                        $(".themeName").text("Wetter");
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

$("#opposites").on("click", function() {
    memory = opposites;
    currentTheme = opposites;
    testAmount = opposites.length - 1;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Gegensätze");
$("#wordsAmount").text( memory.length + " Worte");
    }) 
    
$("#bodyparts").on("click", function() {
      memory = bodyparts;
      currentTheme = bodyparts;
      testAmount = bodyparts.length - 1;
currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
    $(".themeName").text("Körperteile");
$("#wordsAmount").text( memory.length + " Worte");
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





















