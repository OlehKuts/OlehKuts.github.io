// Hotel, In der Stadt, Einkaufen, Restarant, Lebensmittel
// Strand, Urlaub, Arzt, Büro, Jobsuche, Arbeit, Computer
const expressions = [
  { ukr: "Привіт", deu: "Hallo" },
  { ukr: "Доброго ранку", deu: "Guten Morgen" },
  { ukr: "Доброго дня", deu: "Guten Tag" },
  { ukr: "Добрий вечір", deu: "Guten Abend" },
  { ukr: "Надобраніч", deu: "Gute Nacht" },
  { ukr: "Як у Вас справи?", deu: "Wie geht es Ihnen?" },
  { ukr: "Добре, дякую", deu: "Gut, danke" },
  { ukr: "А у Вас?", deu: "Und Ihnen?" },
  { ukr: "Гарний день", deu: "Es ist ein schöner Tag" },
  { ukr: "Ласкаво просимо", deu: "Willkommen" },
  { ukr: "Бажаю Вам гарного дня", deu: "Ich wünsche Ihnen einen schönen Tag" },
  { ukr: "До побачення", deu: "Auf Wiedersehen" },
  { ukr: "До зустрічі", deu: "Bis später" },
  { ukr: "Даруйте", deu: "Entschuldigung" },
  { ukr: "Вам допомогти?", deu: "Kann ich Ihnen helfen?" },
  { ukr: "До завтра", deu: "Bis morgen" },
  { ukr: "Ви розмовляєте англійською?", deu: "Sprechen Sie English?" },
  { ukr: "Так, трохи", deu: "Ja etwas" },
  { ukr: "Приємно познайомитися", deu: "Freut mich, Sie kennen zu lernen" },
  { ukr: "Радий був зустрічі з вами", deu: "Freut mich, Sie zu sehen" },
  { ukr: "пан", deu: "der Herr" },
  { ukr: "пані", deu: "die Frau" },
  { ukr: "панна", deu: "die Fräulein" },
  { ukr: "Говоріть повільно", deu: "Sprechen Sie bitte langsam" },
  { ukr: "Не розумію", deu: "Ich verstehe nicht" },
  { ukr: "Чи Ви розумієте?", deu: "Verstehen Sie sich?" },
  { ukr: "Звичайно", deu: "Sicher" },
  { ukr: "Повторіть будь ласка", deu: "Wiederholen Sie das bitte" },
  { ukr: "Ще раз", deu: "Noch mal" },
  { ukr: "Повільно", deu: "Langsam" },
  { ukr: "Послівно", deu: "Wort für Wort" },
  { ukr: "Що це значить?", deu: "Was bedeutet das?" },
  { ukr: "Що Ви сказали?", deu: "Was haben Sie gesagt?" },
  { ukr: "Ви хотіли щось запитати?", deu: "Haben Sie eine Frage?" },
  { ukr: "Будь ласка", deu: "Bitte" },
  { ukr: "Дуже дякую", deu: "Vielen Dank" },
  { ukr: "Нема за що", deu: "Nichts zu danken" },
  { ukr: "Будьте здорові(після чхання)", deu: "Gesundheit" },
  { ukr: "З днем народження", deu: "Herzlichen Glückwunsch zum Geburtstag" },
  { ukr: "Вітаю", deu: "Herzlichen Glückwunsch" },
  { ukr: "Удачі", deu: "Viel Glück" },
  { ukr: "Як Вас звати", deu: "Wie heißen Sie?" },
  { ukr: "Мене звати Антон", deu: "Ich heiße Anton" },
  { ukr: "Радий зустрітися з вами", deu: "Freut mich, Sie kennen zu lernen" },
  { ukr: "Ви звідки?", deu: "Wo kommen Sie her?" },
  { ukr: "Я з Лейпцига", deu: "Ich bin aus Leipzig" },
];
const questions = [
  { ukr: "Хто?", deu: "Wer?" },
  { ukr: "Де?", deu: "Wo?" },
  { ukr: "Коли?", deu: "Wann?" },
  { ukr: "Чий?", deu: "Wessen?" },
  { ukr: "Чому?", deu: "Warum?" },
  { ukr: "Куди?", deu: "Wohin?" },
  { ukr: "Який?", deu: "Welcher?" },
  { ukr: "Що?", deu: "Was?" },
  { ukr: "Як?", deu: "Wie?" },
  { ukr: "Як довго?", deu: "Wie lange?" },
  { ukr: "Скільки?", deu: "Wie viel?" },
  { ukr: "До кого?", deu: "An wen?" },
  { ukr: "З ким?", deu: "Mit wem?" },
  { ukr: "З чим?", deu: "Womit?" }
]
const sentences = [
  { ukr: "до речі", deu: "übrigens" },
  { ukr: "принаймні", deu: "mindestens" },
  { ukr: "нарешті", deu: "schließlich" },
  { ukr: "однак", deu: "allerdings" },
  { ukr: "тому", deu: "daher" },
  { ukr: "Не хвилюйтеся", deu: "Keine Sorge" },
  { ukr: "Це залежить від", deu: "Das kommt darauf an" },
  { ukr: "Мені шкода", deu: "Tut mir leid" },
  { ukr: "наразі", deu: "sofort" },
  { ukr: "Я не знаю", deu: "Ich weiß nicht" },
  { ukr: "яким чином", deu: "wie das" }
]
const numbers = [
  { ukr: "один", deu: "eins" },
  { ukr: "два", deu: "zwei" },
  { ukr: "три", deu: "drei" },
  { ukr: "чотири", deu: "vier" },
  { ukr: "п'ять", deu: "fünf" },
  { ukr: "шість", deu: "sechs" },
  { ukr: "сім", deu: "sieben" },
  { ukr: "вісім", deu: "acht" },
  { ukr: "дев'ять", deu: "neun" },
  { ukr: "десять", deu: "zehn" },
  { ukr: "одинадцять", deu: "elf" },
  { ukr: "дванадцять", deu: "zwölf" },
  { ukr: "тринадцять", deu: "dreizehn" },
  { ukr: "чотирнадцять", deu: "vierzehn" },
  { ukr: "п'ятнадцять", deu: "fünfzehn" },
  { ukr: "шістнадцять", deu: "sechzehn" },
  { ukr: "сімнадцять", deu: "siebzehn" },
  { ukr: "вісімнадцять", deu: "achtzehn" },
  { ukr: "дев'ятнадцять", deu: "neunzehn" },
  { ukr: "двадцять", deu: "zwanzig" },
  { ukr: "двадцять дев'ять", deu: "neunundzwanzig" },
  { ukr: "тридцять", deu: "dreißig" },
  { ukr: "сорок", deu: "vierzig" },
  { ukr: "п'ятдесят", deu: "fünfzig" },
  { ukr: "шістдесят", deu: "sechzig" },
  { ukr: "сімдесят", deu: "siebzig" },
  { ukr: "вісімдесят", deu: "achtzig" },
  { ukr: "дев'яносто", deu: "neunzig" },
  { ukr: "сто", deu: "hundert" },
  { ukr: "двісті", deu: "zweihundert" },
  { ukr: "триста", deu: "dreihundert" },
  { ukr: "чотириста", deu: "vierhundert" },
  { ukr: "п'ятсот", deu: "fünfhundert" },
  { ukr: "шістсот", deu: "sechshundert" },
  { ukr: "сімсот", deu: "siebenhundert" },
  { ukr: "вісімсот", deu: "achthundert" },
  { ukr: "дев'ятсот", deu: "neunhundert" },
  { ukr: "тисяча", deu: "tausend" },
  { ukr: "вісім тисяч", deu: "achttausend" },
  { ukr: "мільйон", deu: "die Million" },
]
const directions = [
  { ukr: "Хвилиночку", deu: "Einen Augenblick" },
  { ukr: "Зачекайте тут", deu: "Warten Sie hier" },
  { ukr: "Слідуйте за мною", deu: "Folgen Sie mir" },
  { ukr: "Вона вам допоможе", deu: "Sie wird Ihnen helfen" },
  { ukr: "Увійдіть", deu: "Kommen Sie rein" },
  { ukr: "Сідайте", deu: "Setzen Sie sich" },
  { ukr: "Підійдіть", deu: "Kommen Sie her" },
  { ukr: "Покажіть мені", deu: "Zeigen Sie es mir" },
  { ukr: "прямо", deu: "geradeaus" },
  { ukr: "позаду", deu: "hinten" },
  { ukr: "попереду", deu: "nach vorne" },
  { ukr: "всередині", deu: "drinnen" },
  { ukr: "поза", deu: "draußen" },
  { ukr: "тут", deu: "hier" },
  { ukr: "вздовж стіни", deu: "an der Wand" },
  { ukr: "за рогом", deu: "um die Ecke" },
  { ukr: "близько", deu: "nah" },
  { ukr: "далеко", deu: "weit" },
  { ukr: "на письмовому столі", deu: "am Schreibtisch" },
  { ukr: "у напрямку", deu: "in der Schlange" },
  { ukr: "далі по коридору", deu: "den Gang entlang" },
  { ukr: "вниз", deu: "unten" },
  { ukr: "вгору", deu: "oben" },
  { ukr: "позаду чогось", deu: "hinter" },
  { ukr: "попереду чогось", deu: "vor" },
  { ukr: "Перші двері праворуч", deu: "Erste Tür rechts" },
  { ukr: "поряд", deu: "neben" },
  { ukr: "На третьому світлофорі праворуч", deu: "An der dritten Ampel rechts" },
  { ukr: "Ви мене розумієте?", deu: "Verstehen Sie mich?" },
  { ukr: "північ", deu: "der Norden" },
  { ukr: "південь", deu: "der Süden" },
  { ukr: "захід", deu: "der Westen" },
  { ukr: "схід", deu: "der Osten" },
  { ukr: "Че є ліфт?", deu: "Gibt es einen Aufzug?" },
  { ukr: "праворуч", deu: "nach rechts" },
  { ukr: "ліворуч", deu: "nach links" },
  { ukr: "Де сходи?", deu: "Wo ist die Treppe?" },
  { ukr: "В якому напрямку?", deu: "In welche Richtung?" },
  { ukr: "Другі двері ліворуч", deu: "Zweite Tür links" },
  { ukr: "На розі поверніть ліворуч", deu: "An der Ecke links abbiegen" },
];
const colors = [
  { ukr: "Який це колір?", deu: "Welche Farbe ist das?" },
  { ukr: "Це червоний", deu: "Das ist rot" },
  { ukr: "білий", deu: "weiß" },
  { ukr: "чорний", deu: "schwarz" },
  { ukr: "рожевий", deu: "rosa" },
  { ukr: "коричневий", deu: "braun" },
  { ukr: "зелений", deu: "grün" },
  { ukr: "срібний", deu: "silber" },
  { ukr: "золотий", deu: "gold" },
  { ukr: "синій", deu: "blau" },
  { ukr: "помаранчевий", deu: "orange" },
  { ukr: "сірий", deu: "grau" },
  { ukr: "жовтий", deu: "gelb" },
];
const people = [
  { ukr: "племінник", deu: "der Neffe" },
  { ukr: "племінниця", deu: "die Nichte" },
  { ukr: "син", deu: "der Sohn" },
  { ukr: "дочка", deu: "die Tochter" },
  { ukr: "вітчим", deu: "der Stiefvater" },
  { ukr: "мачуха", deu: "die Stiefmutter" },
  { ukr: "зведений брат", deu: "der Stiefbruder" },
  { ukr: "зведена сестра", deu: "die Stiefschwester" },
  { ukr: "свекор", deu: "der Schwiegervater" },
  { ukr: "свекруха", deu: "die Schwiegermutter" },
  { ukr: "зять", deu: "der Schwager" },
  { ukr: "невістка", deu: "die Schwägerin" },
  { ukr: "Хто Ваш батько?", deu: "Wer ist Ihr Vater?" },
  { ukr: "Ви родичі?", deu: "Sind sie verwandt?" },
  { ukr: "Скільки років вашому братові?", deu: "Wie alt ist Ihr Bruder?" },
  { ukr: "хлопець", deu: "der Junge" },
  { ukr: "дівчина", deu: "das Mädchen" },
  { ukr: "чоловік", deu: "der Mann" },
  { ukr: "жінка", deu: "die Frau" },
  { ukr: "друг", deu: "der Freund" },
  { ukr: "подруга", deu: "die Freundin" },
  { ukr: "двоюрідний брат", deu: "der Cousin" },
  { ukr: "двоюрідна сестра", deu: "die Cousine" },
  { ukr: "дружина", deu: "die Ehefrau" },
  { ukr: "чоловік(заміжній)", deu: "der Ehemann" },
  { ukr: "сусід", deu: "der Nachbar" },
  { ukr: "сусідка", deu: "die Nachbarin" },
  { ukr: "Як давно Ви одружені?", deu: "Wie lange sind Sie schon verheiratet?" },
  { ukr: "А Ви одружені?", deu: "Sind Sie verheiratet?" },
  { ukr: "Це Ваша подруга?", deu: "Ist das Ihre Freundin?" },
];
const time = [
  { ukr: "сьогодні", deu: "heute" },
  { ukr: "вчора", deu: "gestern" },
  { ukr: "завтра", deu: "morgen" },
  { ukr: "дні тижня", deu: "die Wochentage" },
  { ukr: "понеділок", deu: "der Montag" },
  { ukr: "вівторок", deu: "der Dienstag" },
  { ukr: "середа", deu: "der Mittwoch" },
  { ukr: "четвер", deu: "der Donnerstag" },
  { ukr: "п'ятниця", deu: "der Freitag" },
  { ukr: "субота", deu: "der Samstag" },
  { ukr: "неділя", deu: "der Sonntag" },
  { ukr: "місяці року", deu: "die Monate des Jahres" },
  { ukr: "січень", deu: "der Januar" },
  { ukr: "лютий", deu: "der Februar" },
  { ukr: "березень", deu: "der März" },
  { ukr: "квітень", deu: "der April" },
  { ukr: "травень", deu: "der Mai" },
  { ukr: "червень", deu: "der Juni" },
  { ukr: "липень", deu: "der Juli" },
  { ukr: "серпень", deu: "der August" },
  { ukr: "вересень", deu: "der September" },
  { ukr: "жовтень", deu: "der Oktober" },
  { ukr: "листопад", deu: "der November" },
  { ukr: "грудень", deu: "der Dezember" },
  { ukr: "Який сьогодні день?", deu: "Welcher Tag ist heute?" },
  { ukr: "Сьогодні 21 травня 2020 року", deu: "Heute ist der einundzwanzigste Mai zweitausendzwanzig" },
  { ukr: "минулого тижня", deu: "letzte Woche" },
  { ukr: "наступного місяця", deu: "nächsten Monat" },
  { ukr: "завтра зранку", deu: "morgen früh" },
  { ukr: "вчора ввечері", deu: "gestern Abend" },
  { ukr: "сьогодні ввечері", deu: "heute Abend" },
  { ukr: "позавчора", deu: "vorgestern" },
  { ukr: "післязавтра", deu: "übermorgen" },
  { ukr: "вихідні", deu: "das Wochenende" },
  { ukr: "Котра година?", deu: "Wie spät ist es?" },
  { ukr: "О котрій годині?", deu: "Um welche Uhrzeit?" },
  { ukr: "Зараз друга година", deu: "Es ist zwei Uhr" },
  { ukr: "Зараз 8:45", deu: "Es ist acht Uhr fünfundvierzig" },
  { ukr: "О дев'ятій годині", deu: "Um neun Uhr" },
  { ukr: "полудень", deu: "zwölf Uhr" },
  { ukr: "північ(00:00)", deu: "die Mitternacht" },
  { ukr: "післяобідній час", deu: "der Nachmittag" },
  { ukr: "після(про час)", deu: "hinterher" },
  { ukr: "В якому місяці?", deu: "In welchem Monat?" },
  { ukr: "Якого дня?", deu: "An welchem Tag?" },
  { ukr: "Розбудіть мене о восьмій ранку", deu: "Wecken Sie mich um acht" },
  { ukr: "рано", deu: "früh" },
  { ukr: "ніколи", deu: "nie" },
  { ukr: "іноді", deu: "manchmal" },
  { ukr: "скоро, незабаром", deu: "bald" },
];
const weather = [
  { ukr: "Яка погода?", deu: "Wie ist das Wetter?" },
  { ukr: "Жарко", deu: "Es ist heiß" },
  { ukr: "Холодно", deu: "Es ist kalt" },
  { ukr: "Волого", deu: "Es ist schwül" },
  { ukr: "Сонячно", deu: "Es ist sonnig" },
  { ukr: "Хмарно", deu: "Es ist bewölkt" },
  { ukr: "Йде дощ", deu: "Es regnet" },
  { ukr: "Йде сніг", deu: "Es schneit" },
  { ukr: "Вітряно", deu: "Es ist windig" },
  { ukr: "Неприємно", deu: "Es ist schlecht" },
  { ukr: "Яка температура?", deu: "Wie viel Grad ist es?" },
  { ukr: "зима", deu: "der Winter" },
  { ukr: "весна", deu: "der Frühling" },
  { ukr: "літо", deu: "der Sommer" },
  { ukr: "осінь", deu: "der Herbst" },
  { ukr: "пори року", deu: "die Jahreszeiten" },
];
const opposites = [
  { ukr: "товстий", deu: "dick" },
  { ukr: "худий", deu: "dünn" },
  { ukr: "легкий", deu: "leicht" },
  { ukr: "важкий", deu: "schwer" },
  { ukr: "однаковий", deu: "gleich" },
  { ukr: "різний", deu: "unterschiedlich" },
  { ukr: "кілька", deu: "wenige" },
  { ukr: "багато", deu: "viel" },
  { ukr: "тягнути", deu: "ziehen" },
  { ukr: "штовхати", deu: "drücken" },
  { ukr: "світлий", deu: "hell" },
  { ukr: "темний", deu: "dunkel" },
  { ukr: "самотній", deu: "allein" },
  { ukr: "вологий", deu: "nass" },
  { ukr: "сухий", deu: "trocken" },
  { ukr: "швидкий", deu: "schnell" },
  { ukr: "повільно", deu: "langsam" },
  { ukr: "пустий", deu: "leer" },
  { ukr: "повний", deu: "voll" },
  { ukr: "красивий", deu: "hübsch" },
  { ukr: "потворний", deu: "hässlich" },
  { ukr: "гучний", deu: "laut" },
  { ukr: "тихий", deu: "leise" },
  { ukr: "сильний", deu: "stark" },
  { ukr: "слабкий", deu: "schwach" },
  { ukr: "жорсткий", deu: "hart" },
  { ukr: "м'який", deu: "weich" },
  { ukr: "брехня", deu: "die Lüge" },
  { ukr: "правда", deu: "die Warheit" },
  { ukr: "більше", deu: "mehr" },
  { ukr: "менше", deu: "weniger" },
  { ukr: "щасливий", deu: "glücklich" },
  { ukr: "сумний", deu: "traurig" },
  { ukr: "брудний", deu: "dreckig" },
  { ukr: "чистий", deu: "sauber" },
  { ukr: "пізній", deu: "spät" },
  { ukr: "живий", deu: "lebendig" },
  { ukr: "мертвий", deu: "tot" },
  { ukr: "до", deu: "vor" },
  { ukr: "після", deu: "nach" },
  { ukr: "всі", deu: "alle" },
  { ukr: "ніхто", deu: "keine" },
];
const bodyparts = [
  { ukr: "голова", deu: "der Kopf" },
  { ukr: "лоб", deu: "die Stirn" },
  { ukr: "волосся", deu: "das Haar" },
  { ukr: "обличчя", deu: "das Gesicht" },
  { ukr: "вії", deu: "die Wimpern" },
  { ukr: "брови", deu: "die Augenbraue" },
  { ukr: "щока", deu: "die Wange" },
  { ukr: "зуби", deu: "die Zähne" },
  { ukr: "язик", deu: "die Zunge" },
  { ukr: "губи", deu: "die Lippen" },
  { ukr: "шия", deu: "der Nacken" },
  { ukr: "горло", deu: "der Hals" },
  { ukr: "підборіддя", deu: "das Kinn" },
  { ukr: "щелепа", deu: "der Kiefer" },
  { ukr: "плече", deu: "die Schulter" },
  { ukr: "груди", deu: "die Brust" },
  { ukr: "спина", deu: "der Rücken" },
  { ukr: "шлунок", deu: "der Magen" },
  { ukr: "талія", deu: "die Taille" },
  { ukr: "торс", deu: "der Rimpf" },
  { ukr: "лікоть", deu: "der Ellenbogen" },
  { ukr: "передпліччя", deu: "der Unterarm" },
  { ukr: "зап'ястя", deu: "das Handgelenk" },
  { ukr: "палець", deu: "der Finger" },
  { ukr: "великий палець руки", deu: "der Daumen" },
  { ukr: "ніготь", deu: "der Nagel" },
  { ukr: "стегно", deu: "der Oberschenkel" },
  { ukr: "сідниці", deu: "das Gesäß" },
  { ukr: "нога", deu: "der Fuß" },
  { ukr: "ступня", deu: "das Bein" },
  { ukr: "щиколотка", deu: "der Knöchel" },
  { ukr: "задня поверхня гомілки", deu: "die Wade" },
  { ukr: "коліно", deu: "das Knie" },
  { ukr: "п'ятка", deu: "die Ferse" },
  { ukr: "палець ноги", deu: "die Zehen" },
];

const verbs1 = [
  { ukr: "пекти", deu: "backen-buk-gebacken" },
  { ukr: "наказувати", deu: "befehlen-befahl-befohlen" },
  { ukr: "кусати", deu: "beißen-biß-gebissen" },
  { ukr: "починати", deu: "beginnen-begann-begonnen" },
  { ukr: "рятувати", deu: "bergen-barg-geborgen" },
  { ukr: "лопнути", deu: "bersten-barst-geborsten" },
  { ukr: "гнути", deu: "biegen-bog-gebogen" },
  { ukr: "пропонувати", deu: "bieten-bot-geboten" },
  { ukr: "зв'язувати", deu: "binden-band-gebunden" },
  { ukr: "просити", deu: "bitten-bat-gebeten" },
  { ukr: "дути", deu: "blasen-blies-geblasen" },
  { ukr: "залишатися", deu: "bleiben-blieb-geblieben" },
  { ukr: "смажити", deu: "braten-briet-gebraten" },
  { ukr: "ламати", deu: "brechen-brach-gebrochen" },
  { ukr: "горіти", deu: "brennen-brannte-gebrannt" },
  { ukr: "приносити", deu: "bringen-brachte-gebracht" },
  { ukr: "думати", deu: "denken-dachte-gedacht" },
  { ukr: "молотити", deu: "dreschen-drosch-gedroschen" },
  { ukr: "проникати", deu: "dringen-drang-gedrungen" },
  { ukr: "могти", deu: "dürfen-durfte-gedurft" },
  { ukr: "приймати", deu: "empfangen-empfing-empfangen" },
  { ukr: "рекомендувати", deu: "empfehlen-empfahl-empfohlen" },
  { ukr: "потухати, припинятися", deu: "erlöschen-erlosch-erloschen" },
  { ukr: "лякатися", deu: "erschrecken-erschrak-erschrocken" },
  { ukr: "їсти", deu: "essen-aß-gegessen" },
  { ukr: "їхати", deu: "fahren-fuhr-gefahren" },
  { ukr: "падати", deu: "fallen-fiel-gefallen" },
  { ukr: "ловити", deu: "fangen-fing-gefangen" },
  { ukr: "фехтувати", deu: "fechten-focht-gefochten" },
  { ukr: "знаходити", deu: "finden-fand-gefunden" },
  { ukr: "плести", deu: "flechten-flocht-geflochten" },
  { ukr: "літати", deu: "fliegen-flog-geflogen" },
  { ukr: "втікати", deu: "fliehen-floh-geflohen" },
  { ukr: "текти, литися", deu: "fließen-floß-geflossen" },
  { ukr: "замерзати", deu: "frieren-fror-gefroren" },
  { ukr: "жерти", deu: "fressen-fraß-gefressen" },
  { ukr: "бродити", deu: "gären-gor-gegoren" },
  { ukr: "народжувати", deu: "gebären-gebar-geboren" },
  { ukr: "давати", deu: "geben-gab-gegeben" },
  { ukr: "рости, процвітати", deu: "gedeihen-gedieh-gedeihen" },
  { ukr: "йти, ходити", deu: "gehen-ging-gegangen" },
  { ukr: "вдаватися(про справу)", deu: "gelingen-gelang-gelungen" },
  { ukr: "коштувати, цінуватися", deu: "gelten-galt-gegolten" },
  { ukr: "одужувати", deu: "genesen-genas-genesen" },
  { ukr: "насолоджуватися", deu: "genießen-genoß-genossen" },
  { ukr: "відбуватися", deu: "geschehen-geschah-geschehen" },
  { ukr: "вигравати", deu: "gewinnen-gewann-gewonnen" },
  { ukr: "лити, наливати", deu: "gießen-goß-gegossen" },
  { ukr: "вирівнювати", deu: "gleichen-glich-geglichen" },
  { ukr: "ковзати", deu: "gleiten-glitt-geglitten" },
];

const verbs2 = [
  { ukr: "тліти", deu: "glimmen-glomm-geglommen" },
  { ukr: "копати", deu: "graben-grub-gegraben" },
  { ukr: "братися за щось", deu: "greifen-griff-gegriffen" },
  { ukr: "мати", deu: "haben-hatte-gehabt" },
  { ukr: "тримати", deu: "halten-hielt-gehalten" },
  { ukr: "висіти", deu: "hängen-hing-gehangen" },
  { ukr: "рубати", deu: "hauen-hieb-gehauen" },
  { ukr: "називатися", deu: "heißen-hieß-geheißen" },
  { ukr: "допомагати", deu: "helfen-half-geholfen" },
  { ukr: "піднімати", deu: "heben-hob-gehoben" },
  { ukr: "знати", deu: "kennen-kannte-gekannt" },
  { ukr: "дзвеніти", deu: "klingen-klang-geklungen" },
  { ukr: "щипати", deu: "kneifen-kniff-gekniffen" },
  { ukr: "приходити", deu: "kommen-kam-gekommen" },
  { ukr: "могти", deu: "können-konnte-gekonnt" },
  { ukr: "повзати", deu: "kreichen-kroch-gekrochen" },
  { ukr: "вантажити", deu: "laden-lud-geladen" },
  { ukr: "страждати, терпіти", deu: "leiden-litt-gelitten" },
  { ukr: "бігати", deu: "laufen-lief-gelaufen" },
  { ukr: "позичати", deu: "leihen-lieh-geliehen" },
  { ukr: "читати", deu: "lesen-las-gelesen" },
  { ukr: "гасити, стирати(написане)", deu: "löschen-losch-geloschen" },
  { ukr: "лежати", deu: "liegen-lag-gelegen" },
  { ukr: "брехати", deu: "lügen-log-gelogen" },
  { ukr: "молоти", deu: "mahlen-mahlte-gemahlen" },
  { ukr: "уникати", deu: "meiden-mied-gemieden" },
  { ukr: "доїти", deu: "melken-melkte-gemolken" },
  { ukr: "вимірювати", deu: "messen-maß-gemessen" },
  { ukr: "не вдаватися", deu: "mißlingen-mißlang-mißlungen" },
  { ukr: "мусити", deu: "mussen-musste-gemusst" },
  { ukr: "любити, хотіти", deu: "mögen-mochte-gemocht" },
  { ukr: "називати", deu: "nennen-nannte-genannt" },
  { ukr: "брати", deu: "nehmen-nahm-genohmen" },
  { ukr: "свистіти", deu: "pfeifen-pfiff-gepfiffen" },
  { ukr: "хвалити", deu: "preisen-pries-gepriesen" },
  { ukr: "бити фонтаном", deu: "quellen-quoll-gequollen" },
  { ukr: "радити", deu: "raten-riet-geraten" },
  { ukr: "терти", deu: "reiben-rieb-gerieben" },
  { ukr: "рвати", deu: "reißen-riss-gerissen" },
  { ukr: "бігти, мчати", deu: "rennen-rannte-gerannt" },
  { ukr: "їздити верхи", deu: "reiten-ritt-geritten" },
  { ukr: "нюхати", deu: "riechen-roch-gerochen" },
  { ukr: "боротися, добиватися", deu: "ringen-rang-gerungen" },
  { ukr: "текти", deu: "rinnen-rann-gerunnen" },
  { ukr: "кликати, кричати", deu: "rufen-rief-gerufen" },
  { ukr: "пити, пиячити", deu: "saufen-soff-gesoffen" },
  { ukr: "солити", deu: "salzen-salzte-gesalzen" },
  { ukr: "сосати", deu: "saugen-sog-gesogen" },
  { ukr: "творити, створювати", deu: "schaffen-schuff-geschaffen" },
  { ukr: "розділяти", deu: "scheiden-schied-geschieden" },
]

const verbs3 = [
  { ukr: "світити, сяяти", deu: "scheinen-schien-geschienen" },
  { ukr: "сварити", deu: "schelten-schalt-gescholten" },
  { ukr: "стригти", deu: "scheren-schor-geschoren" },
  { ukr: "рухати, штовхати", deu: "schieben-schob-geschoben" },
  { ukr: "стріляти", deu: "schießen-schoss-geschossen" },
  { ukr: "спати", deu: "schlafen-schlief-geschlafen" },
  { ukr: "бити", deu: "schlagen-schlug-geschlagen" },
  { ukr: "підкрадатися", deu: "schleichen-schlich-geschlichen" },
  { ukr: "точити", deu: "schleifen-schlief-geschliefen" },
  { ukr: "закривати", deu: "schließen-schloss-geschlossen" },
  { ukr: "обвивати", deu: "schlangen-schling-geschlingen" },
  { ukr: "кидати", deu: "schmeißen-schmiss-geschmissen" },
  { ukr: "різати", deu: "schneiden-schnitt-geschnitten" },
  { ukr: "танути", deu: "schmelzen-schmolz-geschmolzen" },
  { ukr: "писати", deu: "schreiben-schrieb-geschrieben" },
  { ukr: "кричати", deu: "schreien-schrie-geschrien" },
  { ukr: "крокувати", deu: "schreiten-schritt-geschritten" },
  { ukr: "мовчати", deu: "schweigen-schwieg-geschwiegen" },
  { ukr: "плавати", deu: "schwimmen-schwamm-geschwommen" },
  { ukr: "спадати, зникати", deu: "schwinden-schwand-geschwunden" },
  { ukr: "махати, розмахувати", deu: "schwingen-schwang-geschwungen" },
  { ukr: "пухнути", deu: "schwellen-schwoll-geschwollen" },
  { ukr: "клястися", deu: "schwören-schwor-geschworen" },
  { ukr: "дивитися", deu: "sehen-sah-gesehen" },
  { ukr: "бути", deu: "sein-war-gewesen" },
  { ukr: "відправляти, посилати", deu: "senden-sandte-gesandt" },
  { ukr: "співати", deu: "singen-sang-gesungen" },
  { ukr: "опускатися, занурюватися", deu: "sinken-sank-gesunken" },
  { ukr: "думати, розмірковувати", deu: "sinnen-sann-gesonnen" },
  { ukr: "сидіти", deu: "sitzen-saß-gesessen" },
  { ukr: "бути забов'язаним", deu: "sollen-sollte-gesollt" },
  { ukr: "випльовувати", deu: "speien-spie-gespien" },
  { ukr: "прясти", deu: "spinnen-spann-gesponnen" },
  { ukr: "розмовляти", deu: "sprechen-sprach-gesprochen" },
  { ukr: "проростати", deu: "sprießen-spross-gesprossen" },
  { ukr: "стрибати", deu: "springen-sprang-gesprungen" },
]

const verbs4 = [
  { ukr: "колоти", deu: "stechen-stach-gestochen" },
  { ukr: "красти", deu: "stehlen-stahl-gestohlen" },
  { ukr: "стояти, перебувати", deu: "stehen-stand-gestanden" },
  { ukr: "підніматися", deu: "steigen-stieg-gestiegen" },
  { ukr: "вмирати", deu: "sterben-starb-gestorben" },
  { ukr: "штовхати", deu: "stoßen-stieß-gestoßen" },
  { ukr: "смердіти", deu: "stinken-stank-gestunken" },
  { ukr: "гладити", deu: "streichen-strich-gestrichen" },
  { ukr: "сперечатися", deu: "streiten-stritt-gestritten" },
  { ukr: "носити", deu: "tragen-trug-getragen" },
  { ukr: "зустрічати", deu: "treffen-traf-getroffen" },
  { ukr: "гнати", deu: "treiben-trieb-getrieben" },
  { ukr: "ступати", deu: "treten-trat-getreten" },
  { ukr: "обманювати", deu: "trügen-trog-getrogen" },
  { ukr: "пити", deu: "trinken-trank-getrunken" },
  { ukr: "псувати", deu: "verderben-verdarb-verdorben" },
  { ukr: "робити", deu: "tun-tat-getan" },
  { ukr: "сердити, докучати", deu: "verdrießen-verdross-verdrossen" },
  { ukr: "забувати", deu: "vergessen-vergaß-vergessen" },
  { ukr: "прощати", deu: "verzeihen-verzieh-verziehen" },
  { ukr: "втрачати, губити", deu: "verlieren-verlor-verloren" },
  { ukr: "рости", deu: "wachsen-wuchs-gewachsen" },
  { ukr: "зважувати", deu: "wägen-wog-gewogen" },
  { ukr: "відступати, пом'якшувати", deu: "weichen-wich-gewichen" },
  { ukr: "митися", deu: "waschen-wusch-gewaschen" },
  { ukr: "вказувати", deu: "weisen-wies-gewiesen" },
  { ukr: "повертати", deu: "wenden-wandte-gewandt" },
  { ukr: "рекламувати", deu: "werben-warb-geworben" },
  { ukr: "ставати", deu: "werden-wurde-geworden" },
  { ukr: "гойдати", deu: "wiegen-wog-gewogen" },
  { ukr: "кидати", deu: "werfen-warf-geworfen" },
  { ukr: "мотати", deu: "winden-wand-gewunden" },
  { ukr: "знати", deu: "wissen-wusste-gewusst" },
  { ukr: "хотіти", deu: "wollen-wollte-gewollt" },
  { ukr: "змушувати", deu: "zwingen-zwang-gezwungen" },
  { ukr: "тягти", deu: "ziehen-zog-gezogen" },

]

const travel = [
  { ukr: "літак", deu: "das Flugzeug" },
  { ukr: "аеропорт", deu: "der Flughafen" },
  { ukr: "авіаквиток", deu: "der Flugschein" },
  { ukr: "номер рейсу", deu: "die Flugnummer" },
  { ukr: "бортпровідниця", deu: "die Flugbegleiterin" },
  { ukr: "паспорт", deu: "der Reisepass" },
  { ukr: "посадковий талон", deu: "die Bordkarte" },
  { ukr: "ручна поклажа", deu: "das Handgepäck" },
  { ukr: "багаж", deu: "das Gepäck" },
  { ukr: "чемодан", deu: "der Koffer" },
  { ukr: "багажне відділення", deu: "das Gepäckfach" },
  { ukr: "прохід", deu: "der Gang" },
  { ukr: "ряд", deu: "die Reihe" },
  { ukr: "місце", deu: "der Sitzplatz" },
  { ukr: "навушники", deu: "der Kopfhörer" },
  { ukr: "пасок безпеки", deu: "der Sicherheitsgürt" },
  { ukr: "аварійний вихід", deu: "der Notausgang" },
  { ukr: "відправлення", deu: "der Abflug" },
  { ukr: "зліт", deu: "der Start" },
  { ukr: "посадка", deu: "die Landung" },
  { ukr: "злітно-посадкова смуга", deu: "die Landebahn" },
  { ukr: "прибуття", deu: "die Ankunft" },
  { ukr: "будівля терміналу аеропорту", deu: "die Abfertigungshalle" },
  { ukr: "зона отримання багажу", deu: "die Gepäckausgabe" },
  { ukr: "рентген-апарат", deu: "das Röntgengerät" },
  { ukr: "посвідчення особи", deu: "das Ausweisdokument" },
  { ukr: "квиток видачі багажу", deu: "der Gepäckschein" },
  { ukr: "вхід", deu: "der Eingang" },
  { ukr: "бюро знахідок", deu: "das Fundbüro" },
  { ukr: "вихід", deu: "der Ausgang" },
  { ukr: "автобусна зупинка", deu: "die Bushaltestelle" },
  { ukr: "прокат автомобілів", deu: "die Autovermietung" },
  { ukr: "обмін валюти", deu: "die Wechselstube" },
  { ukr: "Куди Ви прямуєте?", deu: "Wo möchten Sie hin?" },
  { ukr: "Скільки у Вас сумок?", deu: "Wie viel Gepäckstücke haben Sie?" },
  { ukr: "Я збираюсь у відпустку", deu: "Ich gehe auf Urlaubsreise" },
  { ukr: "Який термінал ви шукаєте", deu: "Zu welchem Terminal möchten Sie?" },
  { ukr: "Я збираюсь у відрядження", deu: "Ich gehe auf Geschäftsreise" },
  { ukr: "Я хотів би місце біля проходу", deu: "Ich hätte gern einen Gangplatz" },
  { ukr: "Чому літак затримується?", deu: "Warum hat das Flugzeug Verspätung?" },
  { ukr: "Пристебніть ремені безпеки", deu: "Schnallen Sie sich an" },
  { ukr: "О котрій годині ми приземляємось?", deu: "Um welche Uhrzeit landen wir?" },
  { ukr: "Я маю дещо задекларувати", deu: "Ich habe etwas zu verzollen" },
  { ukr: "Я тут у справах", deu: "Ich bin auf Geschäftsreise" },
  { ukr: "Я буду тут один тиждень", deu: "Ich bin für eine Woche hier" },
  { ukr: "Де я можу забрати мій багаж?", deu: "Wo kann ich mein Gepäck abholen?" },
  { ukr: "Де знаходиться митниця?", deu: "Wo ist der Zoll?" },
]
const allWords = expressions.concat(questions, sentences, numbers, directions, colors, people, time, weather, opposites, bodyparts, verbs1, verbs2, verbs3, verbs4, travel)

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
let spokenMode = false

function pickWordCreator() {
  let x = Math.floor(Math.random() * currentTheme.length);
  let pickWord = currentTheme[x];
  answer = pickWord.deu;
  answer2 = pickWord.deu2;
  return pickWord.ukr
}

$("#newGame").on("click", function () {
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
  $("#word").text(pickWordCreator())
  if (spokenMode === false) {
    $("#decision").text("Viel Glück!");
    $("#percentage").text("Ihr Ergebnis wird hier angezeigt!");
  }
  else {
    $("#decision").text("Das Lernen geht weiter...");
    $("#percentage").text('');
  }
})

$("#check10").on("click", function () {
  testAmount = 9;
  $("#wordsAmount").text("10 Worte");
  $("#word").text('')
})

$("#auditMode").on("click", function () {
  testAmount = currentTheme.length - 1;
  $("#wordsAmount").text(memory.length + " Worte");
  $("#word").text('')
})

$("#words100").on("click", function () {
  memory = allWords
  currentTheme = allWords;
  testAmount = 99;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Alle worte");
  $("#wordsAmount").text(" 100 Worte");
  $("#word").text('')
})

$("#showThema").on("click", function () {
  $("#themaWords").html(currentThemaWords);
})

$("#study").on("click", function () {
  spokenMode = true
  showCorrect = true
  $("#percentage").text('');
  $("#decision").text('Das Lernen geht weiter...');
  $("#newGame").text('Worte lernen');
  $("#word").text('')
})

$("#test").on("click", function () {
  spokenMode = false
  showCorrect = false
  $("#percentage").text("Ihr Ergebnis wird hier angezeigt!");
  $("#decision").text("Viel Glück!");
  $("#newGame").text('Neuer Test');
  $("#word").text('')
})

$("#expressions").on("click", function () {
  memory = expressions
  currentTheme = expressions;
  testAmount = expressions.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Sätze");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#questions").on("click", function () {
  memory = questions;
  currentTheme = questions;
  testAmount = questions.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Kurze Fragen");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#sentences").on("click", function () {
  memory = sentences;
  currentTheme = sentences;
  testAmount = sentences.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Ausdrücke");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#numbers").on("click", function () {
  memory = numbers;
  currentTheme = numbers;
  testAmount = numbers.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Zahlen");
  $("#wordsAmount").text(memory.length + " Worte");
})
$("#directions").on("click", function () {
  memory = directions;
  currentTheme = directions;
  testAmount = directions.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Richtungen");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#colors").on("click", function () {
  memory = colors;
  currentTheme = colors;
  testAmount = colors.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Farben");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#people").on("click", function () {
  memory = people;
  currentTheme = people;
  testAmount = people.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Menschen");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#time").on("click", function () {
  memory = time;
  currentTheme = time;
  testAmount = time.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Zeit");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#weather").on("click", function () {
  memory = weather;
  currentTheme = weather;
  testAmount = weather.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Wetter");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#verbs1").on("click", function () {
  memory = verbs1;
  currentTheme = verbs1;
  testAmount = verbs1.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Verben - teil 1");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#verbs2").on("click", function () {
  memory = verbs2;
  currentTheme = verbs2;
  testAmount = verbs2.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Verben - teil 2");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#verbs3").on("click", function () {
  memory = verbs3;
  currentTheme = verbs3;
  testAmount = verbs3.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Verben - teil 3");
  $("#wordsAmount").text(memory.length + " Worte");
})


$("#verbs4").on("click", function () {
  memory = verbs4;
  currentTheme = verbs4;
  testAmount = verbs4.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Verben - teil 4");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#b1").on("click", function () {
  if (spokenMode === true) {
    showCorrect = true
      currentTheme = currentTheme.filter((item) => {
        return item.deu !== answer // перевірка тільки на першу правильну, потім додати і для другої
      })
  }
  else {
    showCorrect = false
  }
  if (stopper < testAmount) {
    $("#answerInput").val("");
    $("#decision").removeClass("alert-success");
    $("#decision").removeClass("alert-danger");
    $("#decision").addClass("alert-info");
    if (spokenMode === false) {
      $("#decision").text("Viel Glück!");
    }
    $("#word").text(pickWordCreator())
    stopper++;
  }
  else {
    $("#decision").text("Ihr Endergebnis ist ");
  }
})

$("#opposites").on("click", function () {
  memory = opposites;
  currentTheme = opposites;
  testAmount = opposites.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Gegensätze");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#bodyparts").on("click", function () {
  memory = bodyparts;
  currentTheme = bodyparts;
  testAmount = bodyparts.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Körperteile");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#travel").on("click", function () {
  memory = travel;
  currentTheme = travel;
  testAmount = travel.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Flugreisen");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#b2").on("click", function () {
  if (showCorrect === true) {
    $("#word").text(answer)
  }
})

$("input[type='text']").on("keypress", function (event) { //"input[type='text']"
  if (event.which === 13) {
    showCorrect = true
    if ($("input[type='text']").val() == answer || $("input[type='text']").val() == answer2) {
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

















