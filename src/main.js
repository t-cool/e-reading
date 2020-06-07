document.getElementById("hint1").style.display ="none";
document.getElementById("hint2").style.display ="none";
function clickHint(id){
	const hint = document.getElementById(id);

	if(hint.style.display=="block"){
		// noneで非表示
		hint.style.display ="none";
	}else{
		// blockで表示
		hint.style.display ="block";
	}
}

// player
var player = new talkify.Html5Player();
player.forceLanguage('en');
player.setRate(1);
// 文
var sentences = [
//
// Halloween
["<br>", ""],
['"Hallowen"<br>', "① ハローウィン<br>"],
['<span class="sub">Halloween</span>', "ハローウィンは"],
['<span class="verb">is</span>', "です"],
['<span class="obj">a special day</span>', "特別な日"],
["(celebrated", "祝われている"],
["＜on October 31＞).<br>", "10月31日に<br>"],
["<span class=\"sub\">Some people</span> <span class=\"verb\">think</span>", "〜と考える人たちもいる"],
["<span class=\"sub\">it</span>", "それは"],
["<span class=\"verb\">is</span>", "です"],
["<span class=\"obj\">a very old festival</span>", "とても古い祭りの1つ"],
["(celebrating the harvest).<br>", "収穫を祝っている<br>"],
["<span class=\"sub\">People</span>", "人々は"],
["<span class=\"verb\">built</span>", "おこした"],
["<span class=\"obj\">fires</span>", "火を"],
["and", "そして"],
["<span class=\"sub\">they</span>", "彼らは"],
["<span class=\"verb\">wore</span>", "着た"],
["<span class=\"obj\">masks and costumes</span>", "仮面と衣装を"],
["＜to copy the bad spirits＞.<br>", "悪い霊を真似するために<br>"],
["<span class=\"sub\">These traditions</span>", "これらの習慣は"],
["<span class=\"verb\">were brought</span>", "もって来られた"],
["＜to North America＞", "北アメリカに"],
["＜in the 19th century＞", "19世紀に"],
["and", "そして"],
["<span class=\"verb\">are still enjoyed</span>", "まだ楽しまれている"],
["＜today＞.<br><br>", "今日"],
//
// Jugo-ya
['"Jugo-ya"<br>', "<br>② 十五夜<br>"],
["<span class=\"sub\">Jugo-ya</span>", "十五夜は"],
["<span class=\"verb\">is celebrated</span>", "祝われる"],
["＜in September＞", "9月に"],
["＜in many parts of Japan＞.<br>", "日本の多くの場所で<br>"],
["<span class=\"sub\">It</span>", "それは"],
["<span class=\"verb\">began</span>", "始まった"],
["＜in the Heian period＞.<br>", "平安時代に<br>"],
["<span class=\"sub\">Nobles</span>", "貴族たちは"],
["<span class=\"verb\">enjoyed</span>", "楽しんだ"],
["<span class=\"obj\">the full moon</span>", "満月を"],
["＜on the 15th night＞", "15日目の夜に"],
["＜every month", "毎月"],
["（of the old calendar）＞.<br>", "旧暦の<br>"],
["＜In the Edo period＞,", "江戸時代には"],
["<span class=\"sub\">people</span>", "人々は"],
["<span class=\"verb\">started to celebrate</span>", "祝い始めた"],
["<span class=\"obj\">both the harvest of the year</span>", "年の収穫と"],
["<span class=\"obj\">and the full moon</span>", "満月の両方を"],
["＜on August 15＞.<br>", "8月15日に<br>"],
["＜Today＞,", "今日"],
["<span class=\"sub\">many of us</span>", "私たちの多くが"],
["<span class=\"verb\">still celebrate</span>", "まだ祝っている"],
["<span class=\"obj\">jugo-ya</span>", "十五夜を"],
["＜by making dango＞.<br><br>", "団子を作ることにより"],
//
// Setsubun
['"Setsubun"<br>',"<br>③ 節分<br>"],
["<span class=\"sub\">We</span>", "私たちは"],
["have", "もっている"],
["a traditional event", "伝統的なイベントを"],
["＜on February 3 or 4＞.<br>", "2月3日と4日に<br>"],
["<span class=\"sub\">We</span>", "私たちは"],
["<span class=\"verb\">call</span>", "呼ぶ"],
["<span class=\"obj\">the day</span>", "その日を"],
["<span class=\"obj\">Setsubun</span>.<br>", "節分と<br>"],
["<span class=\"sub\">It</span>", "それは"],
["<span class=\"verb\">is</span>", "です"],
["<span class=\"obj\">the day</span>", "日"],
["( before risshun )", "立春の前の"],
["<span class=\"obj\">, or the first day of spring</span>.<br>", "つまり、春の初日<br>"],
["<span class=\"sub\">Children</span>", "子どもたちは"],
["<span class=\"verb\">throw</span>", "投げる"],
["<span class=\"obj\">soybeans</span>", "大豆を"],
["and", "そして"],
["＜at the same time＞", "同時に"],
["<span class=\"verb\">say loudly</span>", "大声で言う"],
['<span class=\"obj\">, “Bad luck out, good luck in”</span>.<br>', "「福は内鬼は外」<br>"],
["<span class=\"sub\">They</span>", "彼ら（子どもたち）は"],
["<span class=\"verb\">have to eat</span>", "食べなければいけない"],
["<span class=\"obj\">as many beans as their age.</span><br><br>", "彼らの歳と同じ数の大豆を"],
//
// Tanabata
['"Tanabata"<br>',"<br>④ 七夕<br>"],
["<span class=\"sub\">Tanabata</span>", "七夕"],
["<span class=\"obj\">, or the Star Festival,</span>", "つまり星まつりは"],
["<span class=\"verb\">is</span>", "です"],
["＜on the night of July 7＞.<br>", "7月7日の夜<br>"],
["<span class=\"sub\">It</span>", "それは"],
["<span class=\"verb\">is based on</span>", "〜に基づく"],
["<span class=\"obj\">an old story</span>", "1つの古い物語"],
["( about Orihime and Hikoboshi ).<br>", "織姫と彦星についての<br>"],
["<span class=\"sub\">They</span>", "彼ら(織姫と彦星)は"],
["<span class=\"verb\">were separated</span>", "分けられた"],
["＜by Amanogawa＞", "天の川によって"],
[", <span class=\"obj\">or the Milky Way</span>,", "(天の川)つまりミルキーウェイ"],
["and", "そして"],
["<span class=\"sub\">they</span>", "彼ら(織姫と彦星)は"],
["<span class=\"verb\">could only meet</span>", "唯一あうことができた"],
["＜once a year＞.<br>", "1年に1回<br>"],
["<span class=\"sub\">We</span>", "私たちは"],
["<span class=\"verb\">write</span>", "書きます"],
["<span class=\"obj\">our wishes</span>", "私たちの願いを"],
["＜on small pieces of paper＞", "小さな紙の上に"],
["and", "そして"],
["<span class=\"verb\">hang</span>", "つるす"],
["<span class=\"obj\">them</span>", "それらを"],
["＜from bamboo branches＞.<br>", "竹の枝から<br>"]
];

// 英語 + 記号付け
// TypeItインスタンスを作成。オプションを指定する。
var instance = new TypeIt('#exe1', {
  speed: 10,
  breakLines: false,
  startDelete: false,
  cursor: false,
  html: true
})

// チャンクからインスタンスにタイプする情報を追加する
for(let chank of sentences){
  instance
  .type(chank[0])
  .type('&nbsp;<span style="color:lightgray">&#047;</span>&nbsp;')
  .exec(async () => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(player.playText(chank[0].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')));
      }, 1)
    });
  })  
  .pause(1500)
}

// アニメーションを開始する
instance.go();


// 日本語 英語
var instance = new TypeIt('#exe2', {
  speed: 10,
  breakLines: false,
  startDelete: false,
  cursor: false,
  html: true  
})

// チャンクからインスタンスにタイプする情報を追加する
for(let chank of sentences){
  instance
  .type(chank[0].replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,''))
  .type("&nbsp;")
  .type(chank[1])
  .type('&nbsp;<span style="color:lightgray">&#047;</span>&nbsp;')
  .pause(1440)
}
// アニメーションを開始する
instance.go();

// 英語 日本語
var instance = new TypeIt('#exe3', {
  speed: 10,
  breakLines: false,
  startDelete: false,
  cursor: false,
  html: true  
})

// チャンクからインスタンスにタイプする情報を追加する
for(let chank of sentences){
  instance
  .type("&nbsp;")
  .type(chank[1])
  .type('&nbsp;<span style="color:lightgray">&#047;</span>&nbsp;')
  .pause(1570)
}
// アニメーションを開始する
instance.go();
