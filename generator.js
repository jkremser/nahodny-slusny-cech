(function () {

// some random hates found on the internets
var other = ['Prece  nam nebudou rikat jestli mame mit pravo saria , pivo a klobasku bych jim povine dal vsem snizt. ',
  ' to by se za komunistu stat nemohlo, zlaty komunisti!!!!',
  ' republiku si  rozvracen nenechame ',
  ' a media/ceska televize mlci',
  ' ja nejsem rasista..',
  ' Muzete laskave vysvetlit proc panskou modu prezentujete na "cernochovi"??',
  ' Chci se zeptat jestli tento cerny model je opravdu nutny ve vasem letaku. je?',
  ' a vyresilo byse to kdy by byl Ortel na hrad ',
  ' znama  z nemecka rikala, ze  vubec nepracujou a  jenom porad berou davky ',
  ' nojono pro alahovu hlavu uriznou ti hlavu ',
  ' a nejhorsi jsou ti uzitecni idioti co by nejraci pozvali vsechny ty muslimske teroristy.kdybysme jeli mi k nim,tak nas odstreli hned vsechny v mori!!',
  'Cina a Rusko jsou aspon pro tuto zemy prinos ,coz se o tech agentech CIA rict neda !!!',
  '1000ice migrantu nam chce brat nase hodnoty,musime chranit nase hranice!!!  ',
  'Stejne tak jako USA  nebyly nikdy na mesyci ,tak media mlci o te velke pravde o imigrantech ',
  ' je to vsechno naplanovane kvuli new world order(NWO).',
  'Otevrete uz konecne oci, vy tupe ovce! !',
  ' jinak ja jsem hrdy na nase hodnoty, co si dokazal ty ty havlomrde jeden,kurvo ?  ',
  ' mymochodem Ortel zpiva jenom pravdu a toho slavika si priste snad odnese a toho cigana by meli zavrit nekam do zoo .',
  'Snad bude MENE PRIVANDROVALCU JESTLI MI ROZUMITE??!!!',
  ' a ikdyz to neni pravda tak by MOHLA BYT!!!',
  'Tisice migrantu se sem vali a v CT zase nic!!',
  ' jediny okamura to tam rika tak jak to doopravdy je...',
  ' aspon ze ti nasi hokejisti neco hrajou,my jsi dyktovat z EU NEDAME !!',
  '. Pan   prezident  je dobry clovek,proto media lzou  ',
  ' uz to psali i v parlamentnich listech ',
  ' lidi probudte se uz konecne kam az to nechame zajit?!',
  ' svrhneme tuto prohnilou vladu a nastolme vladu lidu!!!!!',
  ' tohle uz je snad horsi nez ten negr  v bile ',
  ' k lopatam je nahnat vsechny',
  ' kdyby ty cikorky pracovaly,takby tohle nebylo!',
  ' ..sulini jedni ',
  ' pivo bych jim vsem povine naordinoval ',
  ' zapalte ohne',
  ' a co ma jako znamenat ten cernoch na letaku???',
  ' a bezte s multi-kulti do prdele!!',
  ' cechy cechum!!!!',
  'Odstrante ty multikulty picoviny!',
  ' protoze zatim jeste plati ze mi tady jsme doma a ne ti paraziti...',
  ' je to rizena genocida bile rasy ',
  ' nejsem rasista,evropa je bila afrika je cerna a asie je zluta ',
  ' a vubec proc se v nasich ceskych letacich pro ceskou republiku neustale objevuji modelove NEGROIDNIHO typu??!',
  ' Tak s timhle jdete vite kam..... stejne jako s chemtrails',
  ' prece nejsem xenofob ,kdyz si to myslm ',
  ' nejsem islamofob , ale ',
  ' jako ja nejsem rasista ,ale muslimaky bych postrilel hned na hranici!',
  ' protoze jedinym resenim migracni krize je kulomet...',
  ' jenze Rusko aspon nedela ty valky kvuli te rope',
  ' a na nase duchodce musime SBIRAT VICKA???? ',
  ' ale DVTV je prozapadni bulvarni zumpa takze asitak..',
  ' vsichni pravdolaskari bysi mneli vspomenout na humanytarni bombardovani havlem!!',
  ' holt v tehle vlasti uz zacalo pusobit pravo saria kam to az zajde.....',
  'Hehehe,natrtkalisi ,at se staraji.'];

var goodGuysSentences = [
  [1, ' politice sice moc nerozumim ale ten {0} je dobry, ten by tam aspon udelal poradek .'],
  [1, ' {0} chce aby jsme mohly branit nasi zemy.'],
  [1, ' {0} to misli uprimne.'],
  [1, ' {0} rika aspon tu pravdu.'],
  [1, ' a {0} a {1} by mneli vyhrat volbi'],
  [1, ' mislim,ze {0} je jediny rozumny , protoze aspon ma koule a rika co si mysli. '],
  [2, 'Kazdy kdo ma mozek a neni pyca prece musi vedet ze {0} a {1} to s nama misli dobre .'],
  [1, ' {0} je tam aspon srovna ty vlastizradce  !!!  ']
];

var badGuysSentences = [
  [2, ' z mojich dani nebudu platit tyhle "neprizpusobive" ,, nebudte ovce...., za vsechno muzou {0} a {1} .'],
  [2, 'Exystuje tajny plan , ktery vytvorili {0} a {1} a ted se to vsechno deje otevrete uz konecne oci '],
  [2, '{0} a {1} stejne porad jenom okradaji stat a slusne pracujici lidi.'],
  [1, '{0} do plynu!!!!'],
  [1, ' ,proto ze tohle jsou veci bez kterych by tato republika fungovala: {0} a {1} '],
  [1, ' je to jednoduche.. {0}? Mel bych reseni - vyhostit do afriky!!!!'],
  [1, 'Je to prece uplne jasne korporace a {1} chcou aby jste si to tak misleli .'],
  [3, 'Nase cela vlada i cela EU jsou jenom loutky , otevrete uz ty oci ,vzdyt i {0} ,{1} nebo {2}, vsichni nam jenom lzou '],
  [2, ' Vzdyt kdyz jsou tak mladi a maji na mobilni  telefon tak prece muzou i jit bojovat za svoji zemi to jenom {0} a {1} rikaji ,ze jich je tady jenom malo,ale to se zmeni.'],
  [2, '{0} a {1} nemusi pracovat a muzou dostavat davky a my na nase deti musime jenom zbirat vycka, aby byly zdrave,pro tohle jsem klicema necinkal  zlati komunisti!!! ! '],
  [4, '{0}, {1} ,{2} ale i {3} by mnely jit vsichni radeji nekam do afriky, nebo rovnou do koncentraku a byl by uz konecne klid .'],
  [3, 'Prece nechceme aby slusni lidi musely platit  jenom dane jak ovce a {0}, {1}, {2} aspol. porad jenom kradli tohle uz ne!!!  '],
  [1, 'Jinak vcera jsem se dival na oblohu a bila tam velka davka chemtrails vetsi nez obvikle muzou za to {1} a Kalousek!!!!!!']
];

var goodGuys = ['pan Babis', 'Babis', 'pan mluvci Ovcacek', 'Zeman', 'pan prezident', 'Okamura', 'pan Konvicka',
   'pan prezident Putin', 'Putin', 'Ortel', 'prezident Trump', 'Adam B. Bartos', 'SPD', 'KSCM'];

var badGuys = ['Sobotka', 'vlastizradce Sobotka', 'slunickari', 'prohavlovska pakaz', 'kolaboranti', 'muslimaci',
 'Kalousek', 'fasisti na ukrajine', 'havloidi', 'birokrati z EU', 'Diensbier', 'Horacek', 'Obama',
 'makrela', 'zmrd Kalousek', 'Merkelova', 'nadnarodni elity', 'prazska kavarna', 'novinarska zumpa',
 'iluminati', 'USA ambasada', 'CIA', 'korporace', 'diktat z EU', 'islam', 'cigani', 'Moravec', 'Kocab'];

// monkey patch the formatting function into strings
 String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
 function () {
   "use strict";
   var str = this.toString();
   if (arguments.length) {
     var t = typeof arguments[0];
     var key;
     var args = ("string" === t || "number" === t) ?
     Array.prototype.slice.call(arguments)
     : arguments[0];

     for (key in args) {
       str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
     }
   }

   return str;
 };

// randomly use capslock and add some bangs
function buranize(sentence, howMuchCapslock, howMuchTypos) {
  var splits = sentence.split(/([\s,.!?]+)/g);
  var result = splits.map(function (chunk) {
    if (Math.random() < howMuchCapslock && (chunk.length > 2 || howMuchCapslock > 0.6)) {
      return chunk.toUpperCase();
    } else {
      return chunk;
    }
  }).join('');
  if (howMuchCapslock > 0.4) {
    result += '!!!';
  }
  if (howMuchCapslock > 0.6) {
    result += '!!!!!';
  }
  if (howMuchCapslock > 0.8) {
    result += '!!!!!!!!!!!!!!!?!!!!!!';
  }
  return result;
  // todo add random typos
}

// shuffle the array (w/ plain JS)
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function getRandomSentence() {
  var r = Math.random();
  if (r < 0.12) {
    //goodGuysSentences
    var item = goodGuysSentences.splice(Math.floor(Math.random() * goodGuysSentences.length), 1);
    // var numberOfPeople = item[0][0];
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(goodGuys));
  } else if (r < 0.25) {
    //badGuysSentences
    var item = badGuysSentences.splice(Math.floor(Math.random() * badGuysSentences.length), 1);
    // var numberOfPeople = item[0][0];
    var sentenceTemplate = item[0][1];
    return sentenceTemplate.formatUnicorn(shuffle(badGuys));
  } else {
    //other
    return other.splice(Math.floor(Math.random() * other.length), 1);
  }
}

function getPost(length, capslock) {
  // length 2 - 5
  length = length || Math.random() * 3 + 2;
  capslock = capslock || 0.05;
  var goodGuysSentencesBak = goodGuysSentences.slice(0);
  var badGuysSentencesBak = badGuysSentences.slice(0);
  var otherBak = other.slice(0);

  var post = '';
  for (var i = 0; i < length; i++) {
    post += getRandomSentence();
  }

  goodGuysSentences = goodGuysSentencesBak;
  badGuysSentences = badGuysSentencesBak;
  other = otherBak;
  return buranize(post, capslock);
}

function generatePost() {
  var rage = parseInt(document.getElementById('rageFactor').value) / 12;
  var post = getPost(undefined, rage);
  document.getElementById('post').innerHTML = '';
  document.getElementById('post').insertAdjacentHTML('afterbegin', post);
}

// hacky export, but let's keep it simple
window.generatePost = generatePost;

return {
  getPost: getPost
};
})();
