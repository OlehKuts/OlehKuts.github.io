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
  { ukr: "Як Вас звати?", deu: "Wie heißen Sie?" },
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

const hotel = [
  { ukr: "Я замовляв столик", deu: "Ich habe eine Reservierung" },
  { ukr: "Це номер з двоспальним ліжком?", deu: "Hat das Zimmer ein Doppelbett?" },
  { ukr: "Номер в готелі", deu: "Das Hotelnummer" },
  { ukr: "Нам потрібно три ключі", deu: "Wir brauchen drei Schlüssel" },
  { ukr: "Чи є обслуговування номерів?", deu: "Haben Sie Zimmerservice?" },
  { ukr: "Харчування включено?", deu: "Sind die Mahlzeiten inklusive?" },
  { ukr: "Я - гість", deu: "Ich bin Gast" },
  { ukr: "Мені треба поговорити з менеджером", deu: "Ich muss mit dem Manager reden" },
  { ukr: "Душ не працює", deu: "Die Dusche funktioniert nicht" },
  { ukr: "У номері немає ковдри", deu: "Das Zimmer hat keine Decken" },
  { ukr: "Наш номер не був прибраний", deu: "Unser Zimmer wurde nicht gereinigt" },
  { ukr: "Нам потрібні рушники для басейну", deu: "Wir brauchen Handtücher für den Pool" },
  { ukr: "Нам потрібен номер з кондиціонером", deu: "Wir brauchen ein Zimmer mit Klimaanlage" },
  { ukr: "Можете порекомендувати недорогий готель?", deu: "Können Sie ein preiswertes Hotel empfehlen?" },
  { ukr: "Скільки коштує за добу?", deu: "Wie viel kostet es pro Nacht?" },
  { ukr: "Я залишуся на три тижні", deu: "Ich bleibe drei Wochen" },
  { ukr: "Чи є у Вас вільний номер?", deu: "Haben Sie ein Zimmer frei?" },
  { ukr: "У Вас є басейн?", deu: "Haben Sie ein Schwimmbad?" },
  { ukr: "Чи можу я оглянути номер?", deu: "Kann ich mir das Zimmer ansehen?" },
  { ukr: "Чи є щось дешевше?", deu: "Haben Sie etwas preiswerteres?" },
  { ukr: "Мені треба орендувати авто", deu: "Ich muss ein Auto mieten" },
  { ukr: "Де я можу знайти таксі?", deu: "Wo finde ich ein Taxi?" },
  { ukr: "Я готовий звільнити номер", deu: "Ich bin bereit abzureisen" },
  { ukr: "Не могли б ви мені викликати таксі?", deu: "Können Sie mir ein Taxi rufen?" },
  { ukr: "Ваш персонал - чудовий", deu: "Ihr Personal ist ausgezeichnet" },
  { ukr: "Дякую вам за все", deu: "Vielen Dank für alles" },
  { ukr: "Я буду вас рекомендувати", deu: "Ich werde Sie weiterempfehlen" },
  { ukr: "пожежа", deu: "das Feuer" },
  { ukr: "Допоможіть мені", deu: "Helfen Sie mir" },
  { ukr: "поліція", deu: "die Polizei" },
  { ukr: "Це - надзвичайна ситуація", deu: "Es ist ein Notfall" },
]

const city = [
  { ukr: "ринок", deu: "der Markt" },
  { ukr: "книжний магазин", deu: "die Buchhandlung" },
  { ukr: "пекарня", deu: "die Bäckerei" },
  { ukr: "ресторан", deu: "das Restaurant" },
  { ukr: "кінотеатр", deu: "das Kino" },
  { ukr: "банк", deu: "die Bank" },
  { ukr: "церква", deu: "die Kirche" },
  { ukr: "Яка наступна зупинка?", deu: "Was ist die nächste Haltestelle?" },
  { ukr: "Це моя зупинка?", deu: "Ist das meine Haltestelle?" },
  { ukr: "Пробачте, мені треба тут вийти", deu: "Entschuldigung Sie, ich muss hier aussteigen" },
  { ukr: "Коли починається фільм?", deu: "Wann fängt der Film an?" },
  { ukr: "Мені, будь ласка, чотири квитки", deu: "Ich hätte gerne vier Karten" },
  { ukr: "центральна частина міста", deu: "die Innenstadt" },
  { ukr: "перехрестя", deu: "die Kreuzung" },
  { ukr: "дорожний знак", deu: "das Verkehrsschild" },
  { ukr: "вуличний ліхтар", deu: "die Straßenlampe" },
  { ukr: "світлофор", deu: "die Ampel" },
  { ukr: "пішохід", deu: "der Fußgänger" },
  { ukr: "тротуар", deu: "der Bürgersteig" },
  { ukr: "пішохідний перехід", deu: "der Zebrastreifen" },
  { ukr: "туалет, вбиральня", deu: "die Toilette" },
  { ukr: "Чи можу я купити Вам випити?", deu: "Darf ich Ihnen ein Getränk ausgeben?" },
  { ukr: "Чи є вхідна плата?", deu: "Kostet das Eintritt?" },
  { ukr: "Пиво будь ласка", deu: "Ein Bier bitte" },
  { ukr: "Яке пиво?", deu: "Welche Sorte Bier?" },
  { ukr: "біле вино", deu: "der Weißwein" },
  { ukr: "Хочете потанцювати?", deu: "Möchten Sie tanzen?" },
  { ukr: "Я хочу танцювати", deu: "Ich möchte gerne tanzen" },
  { ukr: "Я занепокоєний", deu: "Ich mache mich Sorgen" },
  { ukr: "Я загубився", deu: "Ich habe mich verrirt" },
  { ukr: "Будь ласка, зачекайте на мене", deu: "Warten Sie bitte auf mich" },
  { ukr: "Скільки коштує проїзд?", deu: "Wie teuer ist der Fahrpreis?" },
  { ukr: "транспорт", deu: "das Verkehrsmittel" },
  { ukr: "тягнучки на дорогах", deu: "der Verkehr" },
  { ukr: "вертоліт", deu: "der Hubschrauber"},
  { ukr: "поїзд", deu: "der Zug" },
  { ukr: "велосипед", deu: "das Fahrrad" },
  { ukr: "човен", deu: "das Schiff" },
  { ukr: "станція метро", deu: "die U-Bahn-Station" },
  { ukr: "вантажівка", deu: "der Lastwagen" },
  { ukr: "крита автостоянка", deu: "das Parkhaus" },
  { ukr: "гірський хребет", deu: "die Bergkette" },
  { ukr: "річка", deu: "der Fluss" },
  { ukr: "півострів", deu: "die Halbinsel" },
  { ukr: "пляж", deu: "der Strand" },
  { ukr: "гора", deu: "der Berg" },
  { ukr: "озеро", deu: "der See" },
  { ukr: "водоспад", deu: "der Wasserfall" },
]

const shopping = [
  { ukr: "Не могли б ви мені допомогти?", deu: "Können Sie mir helfen?" },
  { ukr: "Я йду за покупками", deu: "Ich gehe einkaufen" },
  { ukr: "Я хочу піти в торговий центр", deu: "Ich möchte zum Einkaufzentrum gehen" },
  { ukr: "Я просто дивлюся", deu: "Ich sehe mich nur um" },
  { ukr: "Де знаходиться примірювальна кімната?", deu: "Wo ist die Anprobe?" },
  { ukr: "Не могли б Ви мені показати деякі сорочки?", deu: "Können Sie mir einige Hemden zeigen?" },
  { ukr: "Чи можу я приміряти?", deu: "Kann ich das anprobieren?" },
  { ukr: "Чи є у Вас ця річ в іншому кольорі?", deu: "Haben Sie es in einer anderen Farbe?" },
  { ukr: "Це мені не подобається", deu: "Das gefällt mir nicht" },
  { ukr: "У вас є більшого розміру?", deu: "Haben Sie es in einer größeren Größe?" },
  { ukr: "Це завузьке", deu: "Das ist zu eng" },
  { ukr: "Мені підходить", deu: "Es passt gut" },
  { ukr: "сукня", deu: "das Kleid" },
  { ukr: "шорти", deu: "die kurze Hose" },
  { ukr: "Мені подобається ця сорочка", deu: "Mir gefällt dieses Hemd" },
  { ukr: "штани", deu: "die Hose" },
  { ukr: "пальто", deu: "der Mantel" },
  { ukr: "спідниця", deu: "der Rock" },
  { ukr: "кепка", deu: "die Kappe" },
  { ukr: "гаманець", deu: "die Handtasche" },
  { ukr: "капелюх, шапка", deu: "der Hut" },
  { ukr: "взуття", deu: "die Schuhe" },
  { ukr: "ювелір", deu: "der Juwelier" },
  { ukr: "ювелірні вироби", deu: "der Schmuck" },
  { ukr: "брошка", deu: "die Brosche" },
  { ukr: "намисто", deu: "die Halskette" },
  { ukr: "сережки", deu: "die Ohrringe" },
  { ukr: "каблучка", deu: "der Ring" },
  { ukr: "браслет", deu: "das Armband" },
  { ukr: "Не могли б ви мені загорнути це як подарунок, будь ласка?", deu: "Können Sie es bitte als Geschenk verpacken?" },
  { ukr: "Це занадто дорого", deu: "Das ist zu teuer" },
  { ukr: "Скільки я Вам винен?", deu: "Was schulde ich Ihnen?" },
  { ukr: "Чи є щось на розпродажу?", deu: "Haben Sie irgendwelche Sonderangebote?" },
  { ukr: "Я збираюсь платити готівкою", deu: "Ich zahle in bar" },
  { ukr: "Ви приймаєте кредитки?", deu: "Nehmen Sie Kreditkarten?" },
  { ukr: "Чи можу я це обміняти?", deu: "Kann ich es umtauschen?" },
  { ukr: "Відчинено", deu: "Offen" },
  { ukr: "Зачинено", deu: "Geschlossen" },
  { ukr: "квитанція", deu: "die Quittung" },
  { ukr: "пошкоджений", deu: "beschädigt" },
  { ukr: "зламаний", deu: "kaputt" },
  { ukr: "обідня перева", deu: "Während der Mittagszeit geschlossen" },
  { ukr: "продавець", deu: "der Verkaufer" },
  { ukr: "О котрій годині крамниця зачиняється?", deu: "Wann macht der Laden zu?" },
]
const restaurant = [
  { ukr: "Де знайти хороший ресторан?", deu: "Wo finde ich ein gutes Restaurant?" },
  { ukr: "Нам треба столик на чотирьох осіб", deu: "Wir brauchen einen Tisch für vier Personen" },
  { ukr: "Я хотів би замовити столик на двох осіб", deu: "Ich möchte einen Tisch für zwei Personen reservieren" },
  { ukr: "офіціант", deu: "der Ober" },
  { ukr: "офіціантка", deu: "die Bedienung" },
  { ukr: "Можна меню?", deu: "Kann ich die Speisekarte sehen?" },
  { ukr: "Що б ви порадили?", deu: "Was würden Sie empfehlen?" },
  { ukr: "з льодом", deu: "mit Eis" },
  { ukr: "ложка", deu: "der Löffel" },
  { ukr: "ніж", deu: "das Messer" },
  { ukr: "виделка", deu: "die Gabel" },
  { ukr: "склянка", deu: "das Glas" },
  { ukr: "блюдце", deu: "die Untertasse" },
  { ukr: "тарілка", deu: "der Teller" },
  { ukr: "чашка", deu: "die Tasse" },
  { ukr: "Мені потрібна серветка", deu: "Ich brauche eine Serviette" },
  { ukr: "Я не хочу перець", deu: "Ich möchte keinen Pfeffer" },
  { ukr: "сільничка", deu: "der Salzstreuer" },
  { ukr: "перечниця", deu: "der Pfefferstreuer" },
  { ukr: "Чи не могли б ви передати сіль?", deu: "Können Sie mir das Salz reichen?" },
  { ukr: "М'ясо сире", deu: "Das Fleisch ist roh" },
  { ukr: "Я хотів би спробувати місцеву страву", deu: "Ich hätte gerne ein ortstypisches Gericht" },
  { ukr: "Які входять інгредієнти?", deu: "Was sind die Zutaten?" },
  { ukr: "Який вид м'яса у Вас є?", deu: "Welche Fleischsorten haben Sie?" },
  { ukr: "Не могли б ви мені принести ще води?", deu: "Können Sie mir noch etwas Wasser bringen?" },
  { ukr: "Було смачно", deu: "Das war köstlich" },
  { ukr: "Це гостра страва?", deu: "Ist es scharf?" },
  { ukr: "Вони солодкі?", deu: "Sind sie süß?" },
  { ukr: "кислий", deu: "sauer" },
  { ukr: "Їжа холодна", deu: "Das Essen ist kalt" },
  { ukr: "Як це готується?", deu: "Wie wird es zubereitet?" },
  { ukr: "запечений", deu: "gebacken" },
  { ukr: "приготовлений на грилі", deu: "gegrillt" },
  { ukr: "смажений", deu: "frittiert" },
  { ukr: "тушкований", deu: "sautiert" },
  { ukr: "підсмажений", deu: "getoasted" },
  { ukr: "сніданок", deu: "das Frühstück" },
  { ukr: "обід", deu: "das Mittagessen" },
  { ukr: "вечеря", deu: "das Abendessen" },
  { ukr: "перекуска", deu: "die Zwischenmahlzeit" },
  { ukr: "Я на дієті", deu: "Ich bin auf Diät" },
  { ukr: "рахунок", deu: "die Rechnung" },
  { ukr: "чайові", deu: "das Trinkgeld" },
  { ukr: "Чи можу я сплатити кредиткою?", deu: "Kann ich mit Kreditkarte zahlen?" },
  { ukr: "Де знаходиться туалет?", deu: "Wo ist die Toilette?" },
  { ukr: "Дякую Вам за гарне обслуговування", deu: "Vielen Dank für die gute Bedienung" },
]
const food = [
  { ukr: "Продуктовий магазин відчинений", deu: "Das Lebensmittelgeschäft hat auf" },
  { ukr: "платити", deu: "bezahlen" },
  { ukr: "м'ясна лавка", deu: "der Metzger" },
  { ukr: "Я голодний", deu: "Ich habe Hunger" },
  { ukr: "готувати (їжу)", deu: "kochen"},
  { ukr: "вечеряти з родиною", deu: "abendessen mit der Familie" },
  { ukr: "накривати на стіл", deu: "Tisch decken" },
  { ukr: "полуниці", deu: "die Erdbeeren" },
  { ukr: "виноград", deu: "die Trauben" },
  { ukr: "овочі", deu: "das Gemüse" },
  { ukr: "часник", deu: "die Knoblauch" },
  { ukr: "цибуля", deu: "der Zwiebel" },
  { ukr: "капуста", deu: "der Kohl" },
  { ukr: "гриби", deu: "die Pilze" },
  { ukr: "кукурудза", deu: "der Mais" },
  { ukr: "морква", deu: "die Möhre" },
  { ukr: "квасоля", deu: "die Bohnen" },
  { ukr: "рис", deu: "der Reis" },
  { ukr: "молоко", deu: "die Milch" },
  { ukr: "масло", deu: "die Butter" },
  { ukr: "сир", deu: "die Käse" },
  { ukr: "вершки", deu: "die Sahne" },
  { ukr: "заморожені продукти", deu: "die Tiefkühlkost" },
  { ukr: "яйця", deu: "die Eier" },
  { ukr: "яловичина", deu: "das Rindfleisch" },
  { ukr: "шинка", deu: "der Schinken" },
  { ukr: "телятина", deu: "das Kalbfleisch" },
  { ukr: "курка", deu: "das Huhn" },
  { ukr: "трохи", deu: "ein bisschen" },
  { ukr: "індичка", deu: "die Pute" },
  { ukr: "бекон", deu: "der Speck" },
  { ukr: "свинина", deu: "das Schweinefleisch" },
  { ukr: "ковбаса", deu: "das Würstchen" },
  { ukr: "свинна відбивна", deu: "das Schweinekotelett" },
  { ukr: "печиво", deu: "das Plätzchen" },
  { ukr: "пиріг", deu: "die Tarte" },
  { ukr: "Мені не дозволено їсти цукор", deu: "Ich darf keinen Zucker essen" },
  { ukr: "торт", deu: "der Kuchen" },
  { ukr: "бутерброд", deu: "das belegtes Brot" },
  { ukr: "кава", deu: "der Kaffee" },
  { ukr: "апельсиновий сік", deu: "der Orangensaft" },
  { ukr: "картопля фрі", deu: "die Pommes Frites" },
  { ukr: "оцет", deu: "der Essig" },
  { ukr: "олія", deu: "das Öl" },
  { ukr: "приправа", deu: "das Gewürz" },
  { ukr: "Треба додати солі", deu: "Es fehlt Salz" },
  { ukr: "занадто", deu: "zu viel" },
  { ukr: "пакет", deu: "der Beutel" },
  { ukr: "коробка", deu: "die Packung" },
]
const beach = [
  { ukr: "на пляжі", deu: "am Strand" },
  { ukr: "засмагати", deu: "sonnen" },
  { ukr: "захід сонця", deu: "der Sonnenuntergang" },
  { ukr: "узбережжя", deu: "die Küste" },
  { ukr: "океан", deu: "der Ozean" },
  { ukr: "холодильник", deu: "die Kühlbox" },
  { ukr: "сонячні окуляри", deu: "die Sonnenbrille" },
  { ukr: "плавки", deu: "die Badehose" },
  { ukr: "пляжна парасолька", deu: "der Strandschirm" },
  { ukr: "сонцезахисний крем", deu: "die Sonnenmilch" },
  { ukr: "Чи безпечний він для дітей?", deu: "Ist es sicher für Kinder?" },
  { ukr: "Чи безпечно тут купатися?", deu: "Ist es sicher zu schwimmen?" },
  { ukr: "Чи можемо ми тут безпечно пірнати?", deu: "Können wir hier gefahrlos tauchen?" },
  { ukr: "Я хочу позасмагати", deu: "Ich möchte sonnenbaden" },
  { ukr: "Я хочу піти на риболовлю", deu: "Ich möchte angeln" },
  { ukr: "Я не хочу в похід", deu: "Ich möchte nicht zelten" },
  { ukr: "Я хочу покататися на човні", deu: "Ich möchte Boot fahren" },
]
const vacation = [
  { ukr: "Мені подобається слухати музику", deu: "Ich höre gern Musik" },
  { ukr: "Мені подобається грати на гітарі", deu: "Ich spiele gern Gitarre" },
  { ukr: "Я збираюся на прогулянку", deu: "Ich gehe spazieren" },
  { ukr: "Мені не треба дивитися телевізор", deu: "Ich muss nicht Fernsehen gucken" },
  { ukr: "Мені треба використовувати комп'ютер", deu: "Ich muss den Computer benutzen" },
  { ukr: "Мені треба перейти вулицю", deu: "Ich muss die Straße überqueren" },
  { ukr: "Мені треба відправити це поштою", deu: "Ich muss das per Post abschicken" },
  { ukr: "Мені не треба класти гроші на рахунок в банк", deu: "Ich muss kein Geld auf die Bank einzahlen" },
  { ukr: "Я люблю їздити на велосипеді", deu: "Ich fahre gern Fahrrad" },
  { ukr: "Я не хочу грати у відеоігри", deu: "Ich möchte keine Videospiele spielen" },
  { ukr: "Мені потрібно повертатися додому", deu: "Ich muss zurück nach Hause" },
  { ukr: "Мені треба йти спати", deu: "Ich muss schlafen gehen" },
  { ukr: "тварини", deu: "die Tiere" },
  { ukr: "У Вас є собака?", deu: "Haben Sie einen Hund?" },
  { ukr: "кролик", deu: "der Hase" },
  { ukr: "півень", deu: "der Hahn" },
  { ukr: "У мене алергія на кішок", deu: "Ich habe eine Allergie gegen Katze" },
  { ukr: "Чи змія отруйна?", deu: "Ist die Schlange giftig?" },
  { ukr: "Я не люблю комах", deu: "Ich mag keine Insekten" },
  { ukr: "бджола", deu: "die Biene" },
  { ukr: "Таргани - брудні", deu: "Küchenschaben sind dreckig" },
  { ukr: "Це репелент від комах", deu: "Das ist Insektenschutz" },
  { ukr: "Чи тут завжди так багато мух?", deu: "Sind hier immer so viele Fliegen?" },
  { ukr: "у селі", deu: "auf dem Land" },
  { ukr: "ферма", deu: "der Bauerhof" },
  { ukr: "фермер", deu: "der Bauer" },
  { ukr: "поле", deu: "das Feld" },
  { ukr: "сарай", deu: "die Scheune" },
  { ukr: "Небо гарне", deu: "Der Himmel ist wunderschön" },
  { ukr: "Так багато зірок", deu: "Man sieht so viele Sterne" },
  { ukr: "Повний місяць", deu: "Es ist Vollmond" },
]
const doctor = [
  { ukr: "Чи є лікар в офісі?", deu: "Ist der Arzt anwesend?" },
  { ukr: "Я хворий", deu: "Ich bin krank" },
  { ukr: "Я почуваюсь зле", deu: "Ich fühle mich nicht gut" },
  { ukr: "Мене болить живіт", deu: "Ich habe Magenschmerzen" },
  { ukr: "У мене болить голова", deu: "Ich habe Kopfschmerzen" },
  { ukr: "У мене болить горло", deu: "Ich habe Halsschmerzen" },
  { ukr: "Мені треба лягти", deu: "Ich muss mich hinlegen" },
  { ukr: "Мене нудить", deu: "Mir ist schwindelig" },
  { ukr: "У мене діарея", deu: "Ich habe Durchfall" },
  { ukr: "У мене мігрень", deu: "Ich habe Migräne" },
  { ukr: "Чи є у Вас температура?", deu: "Haben Sie Fieber?" },
  { ukr: "У мене лихоманка відучора", deu: "Ich habe seit gestern Fieber" },
  { ukr: "Не могли б Ви покликати лікаря?", deu: "Können Sie bitte einen Arzt rufen?" },
  { ukr: "Коли прийде лікар?", deu: "Wann kommt der Arzt?" },
  { ukr: "У мене болить ступня", deu: "Mein Fuß tut weh" },
  { ukr: "Я впав", deu: "Ich bin gefallen" },
  { ukr: "Я потрапив у аварію", deu: "Ich hatte einen Unfall" },
  { ukr: "Я думаю, що я зламав це", deu: "Ich glaube, ich habe es gebrochen" },
  { ukr: "Міхур з льодом", deu: "der Eisbeutel" },
  { ukr: "Підтримуюча пов'язка", deu: "die Schlaufe" },
  { ukr: "Вам треба накласти гіпс", deu: "Sie brauchen einen Gipsverband" },
  { ukr: "У Вас є милиці?", deu: "Haben Sie Krücken?" },
  { ukr: "розтягнення зв'язок", deu: "die Verstauchung" },
  { ukr: "Ви зламали кістку", deu: "Sie haben einen Knochen gebrochen" },
  { ukr: "Мені треба ліки від болю", deu: "Ich brauche ein Schmerzmittel" },
  { ukr: "У мене невисокий тиск", deu: "Ich habe keinen hohen Blutdruck" },
  { ukr: "Я вагітна", deu: "Ich bin Schwanger" },
  { ukr: "У мене висип", deu: "Ich habe einen Ausschlag" },
  { ukr: "Подивіться на цей синяк", deu: "Sehen Sie sich diesen Bluterguss an" },
  { ukr: "Поріз інфікований", deu: "Der Schnitt ist infiziert" },
  { ukr: "грип", deu: "die Grippe" },
  { ukr: "У мене застуда", deu: "Ich bin erkältet" },
  { ukr: "У мене озноб", deu: "Ich habe Schüttelfrost" },
  { ukr: "Де болить?", deu: "Wo tut es weh?" },
  { ukr: "Як давно Ви так почуваєтесь?", deu: "Wie lange fühlen Sie sich schon so?" },
  { ukr: "Я так почуваюся вже три дні", deu: "Ich fühle mich seit drei Tagen so" },
  { ukr: "Приймаєте Ви які-небудь ліки?", deu: "Nehmen Sie irgendwelche Medikamenten?" },
  { ukr: "Приймайте по дві таблетки на добу", deu: "Nehmen Sie zwei Tabletten täglich" },
  { ukr: "Ви медсестра?", deu: "Sind Sie die Krankenschwester?" },
  { ukr: "Це щось серйозне?", deu: "Ist es etwas Ernstes?" },
  { ukr: "Я не знаю, що в мене", deu: "Ich weiß nicht, was ich habe" },
  { ukr: "Чи треба мені рецепт?", deu: "Brauche ich ein Rezept?" },
  { ukr: "Чи є поблизу аптека?", deu: "Gibt es in der Nähe eine Apotheke?" },
  { ukr: "Мені треба щось від застуди", deu: "Ich brauche etwas gegen Erkältung" },
  { ukr: "Дякую Вам за допомогу", deu: "Vielen Dank für Ihre Hilfe" },
]
const office = [
  { ukr: "телефон", deu: "das Telefon" },
  { ukr: "проектор", deu: "der Projektor" },
  { ukr: "Чи працює принтер?", deu: "Funktioniert der Drucker?" },
  { ukr: "компакт-диск", deu: "der Datenträger" },
  { ukr: "комп'ютер", deu: "der Computer" },
  { ukr: "екран", deu: "der Bildschirm" },
  { ukr: "калькулятор", deu: "der Taschenrechner" },
  { ukr: "Де ножиці?", deu: "Wo ist die Schere?" },
  { ukr: "скріпка для паперу", deu: "die Büroklammer" },
  { ukr: "Мені потрібна ручка", deu: "Ich brauche einen Stift" },
  { ukr: "точилка для олівців", deu: "der Anspitzer" },
  { ukr: "лінійка", deu: "das Lineal" },
  { ukr: "конверт", deu: "der Briefumschlag" },
  { ukr: "марка", deu: "die Briefmarke" },
  { ukr: "клей", deu: "der Kleber" },
  { ukr: "ластик", deu: "der Radiergummie" },
  { ukr: "Я шукаю степлер", deu: "Ich suche einen Hefter" },
  { ukr: "олівець", deu: "der Bleistift" },
  { ukr: "папір", deu: "das Papier" },
  { ukr: "записник", deu: "das Notizheft" },
  { ukr: "слайдер", deu: "die Dias" },
  { ukr: "календар", deu: "der Kalender" },
  { ukr: "клейка стрічка", deu: "das Klebeband" },
  { ukr: "Я шукаю карту", deu: "Ich suche eine Karte" },
  { ukr: "гучномовець", deu: "der Lautsprecher" },
  { ukr: "корзина для паперів", deu: "der Papierkorb" },
  { ukr: "прапор", deu: "die Flagge" },
  { ukr: "повідомлення", deu: "die Nachricht" },
  { ukr: "Це його письмовий стіл?", deu: "Ist das sein Schreibtisch?" },
  { ukr: "лампа", deu: "die Lampe" },
  { ukr: "світло", deu: "das Licht" },
]
const jobSearch = [
  { ukr: "Я шукаю роботу", deu: "Ich suche Arbeit" },
  { ukr: "Чи можу я побачити Ваше резюме?", deu: "Kann ich Ihren Lebenslauf sehen?" },
  { ukr: "Ось моє резюме", deu: "Hier ist mein Lebenslauf" },
  { ukr: "Ось список моїх рекомендацій", deu: "Hier ist eine Liste meiner Referenzen" },
  { ukr: "Який у Вас досвід?", deu: "Wie viel Erfahrung haben Sie?" },
  { ukr: "Як давно Ви працюєте у цій галузі?", deu: "Wie lange arbeiten Sie bereits auf diesem Gebiet?" },
  { ukr: "Я - випускник середньої школи", deu: "Ich habe Abitur" },
  { ukr: "Я - випускник коледжу", deu: "Ich habe einen Hochschulabschluss" },
  { ukr: "Я шукаю роботу на неповний робочий день", deu: "Ich suche eine Teilzeitstelle" },
  { ukr: "Я хотів би працювати повний робочий день", deu: "Ich möchte gern Vollzeit arbeiten" },
  { ukr: "Чи надаєту Ви медичну страхівку?", deu: "Bieten Sie Krankenversicherung an?" },
  { ukr: "Так, після шести місяців роботи", deu: "Ja, nachdem Sie sechs Monate hier arbeiten" },
  { ukr: "У Вас є дозвіл на роботу?", deu: "Haben Sie eine Arbeitserlaubnis?" },
  { ukr: "Коли Ви можете почати?", deu: "Wann können Sie anfangen?" },
  { ukr: "Я плачу десять євро на годину", deu: "Ich zahle zehn Euro pro Stunde" },
  { ukr: "Я буду платити Вам щотижня", deu: "Ich zahle wöchentlich" },
  { ukr: "щомісяця", deu: "monatlich" },
  { ukr: "Будьте тут о восьмій ранку", deu: "Seien Sie um acht Uhr morgens hier" },
  { ukr: "Робіть це ось так", deu: "Machen Sie es so" },
  { ukr: "Субота та неділя для Вас - вихідні", deu: "Sie haben samstags und sontags frei" },
  { ukr: "Ви будете змушені носити форму", deu: "Sie müssen Berufskleidung tragen" },
]
const work = [
  { ukr: "мережа", deu: "das Netzwerk" },
  { ukr: "посилання", deu: "der Link" },
  { ukr: "інтернет-провайдер", deu: "der Internetdienstanbieter" },
  { ukr: "безпечний веб-сайт", deu: "die sichere Website" },
  { ukr: "пошукова система", deu: "die Suchmachine" },
  { ukr: "завантажувати", deu: "hochladen" },
  { ukr: "домашня сторінка", deu: "die Homepage" },
  { ukr: "вибирати", deu: "auswählen" },
  { ukr: "папка", deu: "der Ordner" },
  { ukr: "панель інструментів", deu: "die Werkzeugleiste" },
  { ukr: "закладка", deu: "das Lesezeichen" },
  { ukr: "слеш(скісна риска)", deu: "der Schrägstrich" },
  { ukr: "двокрапка", deu: "der Doppelpunkt" },
  { ukr: "назад", deu: "zurück" },
  { ukr: "вперед", deu: "weiter" },
  { ukr: "зберегти", deu: "speichern" },
  { ukr: "запустити(виконати)", deu: "ausführen" },
  { ukr: "клікати", deu: "klicken" },
  { ukr: "перетягувати", deu: "ziehen" },
  { ukr: "оновлення", deu: "Aktualisieren" },
  { ukr: "шаблон", deu: "die Vorlage" },
  { ukr: "уподобання", deu: "die Einstellungen" },
  { ukr: "передача файлів", deu: "die Dateiübertragung" },
  { ukr: "увійти в акаунт", deu: "anmelden" },
  { ukr: "пароль", deu: "das Kennwort" },
  { ukr: "ім'я користувача", deu: "der Benutzername" },
  { ukr: "цифровий підпис", deu: "die digitale Unterschrift" },
  { ukr: "часті запитання", deu: "häufig gestellte Fragen" },
 
]
const computer = [
  { ukr: "клавіатура", deu: "die Tastatur" },
  { ukr: "кнопка", deu: "die Schaltfläche" },
  { ukr: "кнопка миші", deu: "die Maustaste" },
  { ukr: "килимок для миші", deu: "das Mauspad" },
  { ukr: "база даних", deu: "die Datenbank" },
  { ukr: "буфер обміну", deu: "die Zwischenablage" },
  { ukr: "адреса електронної пошти", deu: "die E-Mail-Adresse" },
  { ukr: "всім відповісти", deu: "allen antworten" },
  { ukr: "одержувач", deu: "der Empfänger" },
  { ukr: "прикріплені файли", deu: "angehängte Dateien" },
  { ukr: "заголовок повідомлення", deu: "die Nachrichtenüberschriften" },
  { ukr: "приєднувати", deu: "anhängen" },
  { ukr: "корзина(онлайн-покупки)", deu: "der Einkaufswagen" },
  { ukr: "група новин", deu: "die Newsgruppe" },
  { ukr: "вхідні повідомлення", deu: "Posteingang" },
  { ukr: "вихідні повідомлення", deu: "Postausgang" },
  { ukr: "видалені повідомлення", deu: "gelöschte Nachrichten" },
]

const allWords = expressions.concat(questions, sentences, numbers, directions, colors, people, time, weather, opposites,
   bodyparts, verbs1, verbs2, verbs3, verbs4, travel, hotel, restaurant, food, beach, vacation, doctor, office, jobSearch, work, computer)

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

$("#shopping").on("click", function () {
  memory = shopping;
  currentTheme = shopping;
  testAmount = shopping.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Einkaufen");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#restaurant").on("click", function () {
  memory = restaurant;
  currentTheme = restaurant;
  testAmount = restaurant.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Restaurant");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#beach").on("click", function () {
  memory = beach;
  currentTheme = beach;
  testAmount = beach.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Strand");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#vacation").on("click", function () {
  memory = vacation;
  currentTheme = vacation;
  testAmount = vacation.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Urlaub");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#doctor").on("click", function () {
  memory = doctor;
  currentTheme = doctor;
  testAmount = doctor.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Arzt");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#office").on("click", function () {
  memory = office;
  currentTheme = office;
  testAmount = office.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Büro");
  $("#wordsAmount").text(memory.length + " Worte");
})
$("#jobSearch").on("click", function () {
  memory = jobSearch;
  currentTheme = jobSearch;
  testAmount = jobSearch.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Jobsuche");
  $("#wordsAmount").text(memory.length + " Worte");
})
$("#work").on("click", function () {
  memory = work;
  currentTheme = work;
  testAmount = work.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Arbeit");
  $("#wordsAmount").text(memory.length + " Worte");
})
$("#computer").on("click", function () {
  memory = computer;
  currentTheme = computer;
  testAmount = computer.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Computer");
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

$("#hotel").on("click", function () {
  memory = hotel;
  currentTheme = hotel;
  testAmount = hotel.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Hotel");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#city").on("click", function () {
  memory = city;
  currentTheme = city;
  testAmount = city.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("In der Stadt");
  $("#wordsAmount").text(memory.length + " Worte");
})

$("#food").on("click", function () {
  memory = food;
  currentTheme = food;
  testAmount = food.length - 1;
  currentThemaWords = currentTheme.map(item => item.ukr + " - " + item.deu + "; ");
  $(".themeName").text("Lebensmittel");
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

















