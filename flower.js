// 🌸 花精療癒紀錄 — 掛載到 <div id="flower-tab" class="tab-content"></div>
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import { getFirestore, collection, addDoc, deleteDoc, updateDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCuLZNKe6QQjLFP-1tuXBXOXkBrw3b-gvE",
  authDomain: "lucky-journal.firebaseapp.com",
  projectId: "lucky-journal",
  storageBucket: "lucky-journal.firebasestorage.app",
  messagingSenderId: "579071486789",
  appId: "1:579071486789:web:1538a2f9f111fabb9e6c2c",
  measurementId: "G-NCSTXKXTJ5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

/* ── 資料：[編號, 中文, 英文, 文章網址代號, 一句話關鍵字] ── */
const FLOWERS = [
 [1,'龍芽草','Agrimony','agrimony','強顏歡笑，把煩惱藏在心裡'],
 [2,'白楊','Aspen','aspen','說不出原因的恐懼與不安'],
 [3,'山毛櫸','Beech','beech','挑剔、不寬容，看不順眼'],
 [4,'矢車菊','Centaury','centaury','不會拒絕，過度討好他人'],
 [5,'水蕨（紫金蓮）','Cerato','cerato','不相信自己的判斷，常問別人意見'],
 [6,'櫻桃李','Cherry Plum','cherry-plum','怕失控，情緒繃到快爆發'],
 [7,'栗苞','Chestnut Bud','chestnut-bud','同樣的錯一再重複，學不到教訓'],
 [8,'菊苣','Chicory','chicory','控制與占有，期待被回報'],
 [9,'鐵線蓮','Clematis','clematis','心不在焉，愛幻想、逃避現實'],
 [10,'海棠（野酸蘋果）','Crab Apple','crab-apple','覺得自己不乾淨，過度挑剔細節'],
 [11,'榆樹','Elm','elm','責任太重，一時不堪負荷'],
 [12,'龍膽','Gentian','gentian','遇到挫折就氣餒、懷疑'],
 [13,'荊豆','Gorse','gorse','絕望，覺得沒有希望'],
 [14,'石楠','Heather','heather','只想談自己，害怕孤單'],
 [15,'冬青','Holly','holly','嫉妒、猜疑、怨恨'],
 [16,'忍冬','Honeysuckle','honeysuckle','活在過去，放不下回憶'],
 [17,'鵝耳櫪','Hornbeam','hornbeam','週一症候群，覺得沒力氣開始'],
 [18,'鳳仙花','Impatiens','impatiens','急躁、沒耐性'],
 [19,'落葉松','Larch','larch','缺乏自信，預期自己會失敗'],
 [20,'溝酸漿','Mimulus','mimulus','對具體事物的害怕與膽怯'],
 [21,'芥末','Mustard','mustard','無緣由的低落，像烏雲罩頂'],
 [22,'橡樹','Oak','oak','硬撐到底，不懂得休息'],
 [23,'橄欖','Olive','olive','身心耗盡的極度疲憊'],
 [24,'松樹','Pine','pine','自責、愧疚'],
 [25,'紅栗','Red Chestnut','red-chestnut','過度擔心親近的人'],
 [26,'岩薔薇','Rock Rose','rock-rose','驚嚇、極度恐慌'],
 [27,'岩水','Rock Water','rock-water','對自己要求嚴苛、僵化自律'],
 [28,'線球草','Scleranthus','scleranthus','猶豫不決，情緒起伏不定'],
 [29,'聖星百合','Star of Bethlehem','star-of-bethlehum','創傷、震驚後的安撫'],
 [30,'甜栗','Sweet Chestnut','sweet-chestnut','痛苦到快撐不住的谷底'],
 [31,'馬鞭草','Vervain','sweet-vervain','過度熱忱、愛說服、神經緊繃'],
 [32,'葡萄','Vine','vine','強勢支配，要人聽從'],
 [33,'胡桃','Walnut','walnut','轉換期、面對改變時需要保護'],
 [34,'水堇','Water Violet','water-violet','孤傲疏離，獨來獨往'],
 [35,'白栗','White Chestnut','white-chestnut','腦中念頭停不下來'],
 [36,'野燕麥','Wild Oat','wild-oat','不知道人生方向'],
 [37,'野玫瑰','Wild Rose','wild-rose','消極認命，提不起勁'],
 [38,'楊柳','Willow','willow','怨天尤人，覺得委屈不公平'],
];
// 12 條花精軌道（柯磊墨《新巴赫花精療法1》目錄）。順序 = 溝通 → 補償 → 失調
const TRACKS = [
 ['Centaury','Holly','Pine'], ['Cerato','Vine','Wild Oat'], ['Scleranthus','Rock Water','Crab Apple'],
 ['Gentian','Willow','Wild Rose'], ['Water Violet','Chestnut Bud','Beech'], ['Vervain','Hornbeam','White Chestnut'],
 ['Agrimony','Vervain','Sweet Chestnut'], ['Rock Rose','Agrimony','Cherry Plum'], ['Impatiens','Olive','Oak'],
 ['Chicory','Red Chestnut','Honeysuckle'], ['Mimulus','Heather','Mustard'], ['Clematis','Impatiens','Mustard'],
];
const ROLES = ['溝通', '代償', '失調'];
const EXTERNAL = ['Larch', 'Star of Bethlehem', 'Elm', 'Walnut', 'Gorse', 'Aspen']; // 不在 12 軌道內者
const METHODS = ['舌下直接滴（原液）', '水杯稀釋飲用', '調配瓶', '噴霧（氣場／空間）', '外用（塗抹／敷布）', '其他'];

// 以下三段為依巴赫花精一般通則自行整理的簡述（非 Sunny 文章摘要）
const DETAIL = {
 'Agrimony': [['外表開朗愛說笑，內心其實焦慮不安','總說「沒事」，報喜不報憂','靠忙碌、飲酒、購物等方式轉移注意力'], [['Centaury','同樣怕衝突，但矢車菊是為了討好人，龍芽草是為了掩飾痛苦'],['White Chestnut','白栗是念頭停不下來，龍芽草是用行動躲開']], '示弱不是失敗，願意說「我現在不太好」，才開始真正被接住。'],
 'Aspen': [['說不出原因的害怕與不安','夜裡、睡前特別明顯','覺得有事要發生，卻講不出是什麼'], [['Mimulus','溝酸漿怕的東西很具體，白楊說不出來'],['Rock Rose','岩薔薇是當下的驚恐，白楊是持續的隱約不安']], '不安不一定有對象；先承認它存在，再慢慢分辨哪些是真的、哪些只是影子。'],
 'Beech': [['看別人不順眼，容易批評','對小缺點特別不耐','很難體諒別人的處境'], [['Vine','葡萄要別人照自己的方式做，山毛櫸多半是在心裡挑剔'],['Rock Water','岩水是對自己嚴苛，山毛櫸是對別人嚴苛']], '每個人都有自己的步調與理由；多一點寬容，也是在放過自己。'],
 'Centaury': [['很難說不，總先顧別人的需求','怕讓人失望','容易被使喚、被占便宜'], [['Cerato','水蕨是不信任自己的判斷而去問人，矢車菊是有想法卻說不出口'],['Pine','松樹是自責愧疚，矢車菊是順從討好']], '學會說不，是對自己也對別人誠實；界線能讓關係走得更長久。'],
 'Cerato': [['做決定前一直問別人意見','懷疑自己的直覺','容易被他人的看法帶著走'], [['Scleranthus','線球草是兩個選項難取捨，水蕨是不相信自己的判斷'],['Centaury','矢車菊是不敢拒絕，水蕨是不敢相信自己']], '你的內在其實一直有答案；從練習小決定開始，慢慢信任直覺。'],
 'Cherry Plum': [['覺得自己快失控、要崩潰','強烈衝動，怕做出傷人或傷己的事','身心繃到極限'], [['Agrimony','龍芽草表面輕鬆，櫻桃李是明顯的緊繃'],['Rock Rose','岩薔薇是突發的驚嚇恐慌，櫻桃李是怕自己失控']], '放鬆緊握的拳頭，讓情緒流過，比硬撐更安全。'],
 'Chestnut Bud': [['同樣的錯一再重複','吸收新經驗很慢','匆忙帶過，沒有好好回顧'], [['Honeysuckle','忍冬是活在過去，栗苞是沒從過去學到東西'],['Clematis','鐵線蓮是心不在焉，栗苞是事後不回頭整理']], '每次重複都是提醒：慢下來，把經驗看清楚，才走得出循環。'],
 'Chicory': [['想掌控身邊親近的人','付出之後期待回報與感謝','覺得被忽略就失落、抱怨'], [['Heather','石楠是需要有人聽自己說，菊苣是要關係抓得牢'],['Red Chestnut','紅栗是擔心對方的安危，菊苣是需要對方的回應']], '愛不是抓得緊，而是給予不求回報；安全感要先從自己給起。'],
 'Clematis': [['容易恍神、做白日夢','對眼前的事提不起勁','常覺得睏、反應慢、心在別處'], [['Olive','橄欖是真的累到耗盡，鐵線蓮是人不在當下'],['Hornbeam','鵝耳櫪是覺得沒力氣開始，鐵線蓮是躲進想像裡']], '夢想需要落腳的地方；把心帶回當下，才能把想像一步步變成真實。'],
 'Crab Apple': [['覺得自己或身體不乾淨、有缺陷','糾結小細節、有潔癖','對某個部位或事件感到羞恥'], [['Pine','松樹是為做過的事內疚，海棠是嫌棄自己這個人'],['Beech','山毛櫸挑剔別人，海棠嫌棄自己']], '瑕疵不會減損價值；先清掉內在的雜訊，才能接受完整的自己。'],
 'Elm': [['平常很能幹，卻突然覺得責任太重','懷疑自己是否扛得住','過勞前的暫時洩氣'], [['Oak','橡樹是撐到底不喊累，榆樹是一時覺得負荷過重'],['Larch','落葉松是一開始就不相信自己有能力']], '承認自己也有扛不動的時候，不是軟弱，而是讓力量重新聚攏。'],
 'Gentian': [['遇到挫折、延遲就洩氣','知道原因，但悲觀、懷疑','進度不如預期就想放棄'], [['Gorse','荊豆是完全沒有希望，龍膽還抱著希望但容易動搖'],['Mustard','芥末的低落沒有原因，龍膽的氣餒有明確原因']], '阻礙只是暫時的；重新站起來的力氣，往往比想像中更近。'],
 'Gorse': [['覺得已經試過了，不可能好轉','對治療或改變不抱期待','深深的無望感'], [['Gentian','龍膽只是氣餒，荊豆是失去希望'],['Wild Rose','野玫瑰是淡淡地認命，荊豆是帶著絕望']], '看不見出口，不代表沒有出口；一點點希望的火苗就足以重新點燃。'],
 'Heather': [['話多，需要一直說自己的事','怕獨處，抓著人傾訴','比較以自己為中心，不太聽別人說'], [['Chicory','菊苣要的是被在乎與回報，石楠要的是有人聽'],['Water Violet','水堇正好相反，喜歡獨處、保持距離']], '學會與自己相處，也學會傾聽，關係才能雙向流動。'],
 'Holly': [['嫉妒、猜疑、怨恨','覺得別人有惡意','內心緊繃的敵意或報復念頭'], [['Willow','楊柳是怨天尤人的委屈，冬青是針對他人的嫉恨'],['Beech','山毛櫸是挑剔，冬青的情緒更強烈、帶敵意']], '恨與嫉妒的背後，常是渴望被愛；把心打開，愛才進得來。'],
 'Honeysuckle': [['常沉浸在過去的美好或遺憾','思念、懷舊，難以投入現在','離別、失去後走不出來'], [['Clematis','鐵線蓮逃向幻想，忍冬回望過去'],['Star of Bethlehem','聖星百合是創傷後的震驚，忍冬是對過去的眷戀']], '過去的美好可以珍藏，但人生只能向前；把回憶化為養分，帶著它走。'],
 'Hornbeam': [['週一症候群，還沒開始就覺得累','覺得沒力氣面對日常，但開始後其實做得來','心理上的疲倦、提不起勁'], [['Olive','橄欖是身心真的耗盡'],['Oak','橡樹是累了仍硬撐，鵝耳櫪是還沒開始就覺得累']], '疲倦有時來自心，不是體力；給日子一點新意與樂趣，動力就回來了。'],
 'Impatiens': [['急性子，嫌別人慢','不耐煩、愛打斷別人','等待時特別焦躁'], [['Vervain','馬鞭草是過度熱忱想說服別人，鳳仙花是嫌慢'],['Cherry Plum','櫻桃李是緊繃到快失控，鳳仙花是沒耐性']], '慢下來不是落後；耐心讓你看見趕路時錯過的風景。'],
 'Larch': [['預期自己會失敗，所以乾脆不試','明明有能力卻缺乏自信','覺得別人都比自己強'], [['Cerato','水蕨是不相信自己的判斷，落葉松是不相信自己的能力'],['Gentian','龍膽是受挫後洩氣，落葉松是還沒開始就先退縮']], '自信不是確定會成功，而是願意去試；你的能力一直都在。'],
 'Mimulus': [['害怕的對象很具體（人群、考試、疾病、動物…）','膽小、害羞、容易緊張','說得出自己在怕什麼'], [['Aspen','白楊說不出害怕什麼'],['Red Chestnut','紅栗是為別人擔心，溝酸漿是為自己害怕']], '恐懼是勇氣的另一面；一小步一小步面對，害怕就會縮小。'],
 'Mustard': [['毫無緣由的低落','像烏雲罩頂，又忽然散去','找不到理由卻悶悶不樂'], [['Gorse','荊豆是絕望，芥末是沒有原因的陰鬱'],['Gentian','龍膽的氣餒有明確原因']], '烏雲會過去；陰影只是天空的一部分，不是整片天空。'],
 'Oak': [['責任感強、堅毅，累了也不吭聲','不允許自己休息','撐到突然倒下'], [['Elm','榆樹是暫時覺得負荷過重'],['Rock Water','岩水是對自己要求嚴苛，橡樹是責任扛太久']], '真正的堅強，包括懂得休息與開口求援。'],
 'Olive': [['長期勞累後身心耗盡','病痛、照顧或壓力後極度疲倦','什麼都不想動'], [['Hornbeam','鵝耳櫪是「還沒開始就累」，橄欖是真的耗盡'],['Oak','橡樹還在硬撐，橄欖已經撐不住']], '休息是給生命的補給；好好充電，也是旅程的一部分。'],
 'Pine': [['習慣自責，覺得是自己的錯','別人成功了也覺得該道歉','愧疚、內疚感很重'], [['Crab Apple','海棠是嫌棄自己這個人，松樹是為行為內疚'],['Centaury','矢車菊是順從討好，松樹是自我責備']], '你已經盡力了；原諒自己，愛才有空間流動。'],
 'Red Chestnut': [['過度擔心親友的安危','腦中常浮現他們出事的畫面','替別人操心多過替自己'], [['Chicory','菊苣需要被回應與掌控，紅栗是單純放不下心'],['White Chestnut','白栗是各種念頭轉不停，紅栗的念頭都圍繞別人']], '關心不等於替對方承擔；放手相信，也是愛的一種。'],
 'Rock Rose': [['突發的驚嚇、恐慌','腦中一片空白、嚇得發抖','噩夢驚醒、極度恐懼'], [['Mimulus','溝酸漿是具體而較溫和的害怕'],['Star of Bethlehem','聖星百合是事後的震驚創傷，岩薔薇是當下的驚恐']], '在極度驚慌時，勇氣會浮現；你比自己想像的更有力量。'],
 'Rock Water': [['對自己要求嚴格，壓抑享樂','自律到僵化，不容許例外','有一套嚴格的原則與標準'], [['Beech','山毛櫸挑剔別人，岩水苛求自己'],['Oak','橡樹是責任扛太久，岩水是原則太僵']], '柔軟的流水才走得遠；允許自己享受，並不減損你的原則。'],
 'Scleranthus': [['在兩個選項之間搖擺不定','情緒、精力忽高忽低','決定了又反悔'], [['Cerato','水蕨是不信任自己、去問別人'],['Wild Oat','野燕麥是不知道方向，線球草是選項明確卻選不出']], '平衡來自中心；先回到自己的內在，選擇就會浮現。'],
 'Star of Bethlehem': [['經歷驚嚇、失去或噩耗後的震驚','過去創傷留下的餘悸','難以安慰的悲傷'], [['Rock Rose','岩薔薇是當下的驚恐'],['Sweet Chestnut','甜栗是痛苦到谷底，聖星百合是創傷後的震驚']], '傷口需要時間，也需要被溫柔對待；療癒是慢慢找回內在的安慰。'],
 'Sweet Chestnut': [['痛苦到極限，覺得再也撐不下去','黑夜般的絕望與孤獨','感覺無路可走'], [['Gorse','荊豆是失去希望、想放棄'],['Star of Bethlehem','聖星百合是創傷震驚，甜栗是持續到谷底的煎熬']], '最黑的夜之後是黎明；谷底也是重新向上的起點。'],
 'Vervain': [['熱衷說服別人','過度熱情、停不下來','神經緊繃、對不公義反應強烈'], [['Impatiens','鳳仙花是嫌別人慢，馬鞭草是堅持理念'],['Vine','葡萄是強硬支配，馬鞭草是熱忱地想讓人接受']], '熱情很珍貴；放鬆一點，反而更有說服力。'],
 'Vine': [['強勢、有領導力但容易支配他人','覺得自己的方式才是對的','難以接受不同意見'], [['Beech','山毛櫸是心裡挑剔，葡萄是要別人服從'],['Chicory','菊苣是怕被拋下而控制，葡萄是想掌權']], '真正的領導是帶領，不是命令；尊重別人，讓力量成為支持。'],
 'Walnut': [['面臨轉變（搬家、換工作、分手、青春期…）','容易受他人影響而動搖','需要守住自己的方向'], [['Cerato','水蕨是不信任自己的判斷'],['Centaury','矢車菊是被他人需求牽著走']], '改變是成長必經之路；守住初心，就能順利跨過門檻。'],
 'Water Violet': [['安靜、獨立、保持距離','給人高傲疏離的印象','寧願獨自承擔，不輕易求助'], [['Heather','石楠怕孤單、愛傾訴'],['Agrimony','龍芽草也藏心事，但喜歡熱鬧、愛社交']], '獨處是力量，也別忘了讓人靠近；連結讓你的智慧有人分享。'],
 'White Chestnut': [['腦袋像跑步機，念頭停不下來','睡前反覆思考','想擺脫思緒卻做不到'], [['Agrimony','龍芽草是靠外在行動分心，白栗是腦中停不下來'],['Red Chestnut','紅栗的念頭都是擔心別人']], '念頭只是來去的雲；給心一點安靜的空間，答案會自己浮現。'],
 'Wild Oat': [['不知道自己想要什麼、人生往哪走','可能性很多卻無法聚焦','對現況不滿足'], [['Scleranthus','線球草是兩個選項間搖擺'],['Cerato','水蕨是不信任自己的判斷']], '方向不是想出來的，是在嘗試中靠近；傾聽內心的喜悅，路會漸漸清晰。'],
 'Wild Rose': [['消極認命，覺得「就這樣吧」','提不起勁、冷漠','放棄努力，但不一定悲傷'], [['Gorse','荊豆是絕望，野玫瑰是淡淡地認命'],['Hornbeam','鵝耳櫪是對日常提不起勁，但動起來就好']], '生命力不是消失，只是睡著了；找回一件有興趣的小事，就能慢慢喚醒。'],
 'Willow': [['怨天尤人，覺得命運不公','感到委屈、愛記恨','把原因歸咎他人或環境'], [['Holly','冬青是針對特定對象的嫉恨'],['Pine','松樹是責怪自己，楊柳是責怪外界']], '握有選擇權的人，就有改變的力量；放下受害者視角，人生重新回到自己手中。'],
};
// ---END DATA---

const byEn = Object.fromEntries(FLOWERS.map(f => [f[2], { n: f[0], zh: f[1], en: f[2], slug: f[3], key: f[4] }]));
const short = zh => zh.replace(/（.*?）/g, '');
const zhOf = en => en === 'Rescue' ? '急救花精' : short(byEn[en]?.zh || en);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const trackOf = {};
TRACKS.forEach((t, i) => t.forEach(en => (trackOf[en] ||= []).push(i + 1)));
const $ = id => document.getElementById(id);

const host = document.getElementById('flower-tab');
if (!host) throw new Error('找不到 #flower-tab');

const style = document.createElement('style');
style.textContent = `
.tab-btn.flower-tab.active{background:#e84393;border-color:#e84393;color:#fff}
.fl-h1{color:#e84393}
.fl-subnav{display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap}
.fl-sub{flex:1;min-width:110px;padding:9px;border:2px solid #ddd;background:#fff;border-radius:8px;cursor:pointer;font-weight:bold;color:#666}
.fl-sub.active{background:#fce4f1;border-color:#e84393;color:#e84393}
.fl-box{background:#fafafa;border:1px solid #eee;border-radius:12px;padding:16px;margin-bottom:16px}
.fl-label{font-weight:bold;margin:12px 0 6px;font-size:.95rem}
.fl-label:first-child{margin-top:0}
.fl-box input[type=text],.fl-box input[type=datetime-local],.fl-box textarea,.fl-search{width:100%;box-sizing:border-box;padding:10px;border:2px solid #ddd;border-radius:8px;font-size:1rem;font-family:inherit;margin-bottom:8px}
.fl-box textarea{min-height:90px;resize:vertical}
.fl-chips{display:flex;flex-wrap:wrap;gap:6px;max-height:180px;overflow-y:auto;padding:4px 0}
.fl-chip{border:1px solid #ddd;background:#fff;border-radius:16px;padding:5px 11px;font-size:.85rem;cursor:pointer}
.fl-chip.on{background:#e84393;border-color:#e84393;color:#fff}
.fl-tag{display:inline-block;background:#fce4f1;color:#c2185b;border-radius:10px;padding:2px 9px;font-size:.8rem;margin:2px 4px 2px 0}
.fl-warn{background:#fff3cd;border:1px solid #ffc107;color:#7a5b00;border-radius:8px;padding:10px;margin:8px 0;font-size:.9rem;line-height:1.6}
.fl-btn{background:#e84393;color:#fff;border:none;border-radius:8px;padding:10px 20px;font-size:.95rem;cursor:pointer;margin-right:8px}
.fl-btn.gray{background:#636e72}
.fl-btn.sm{padding:5px 12px;font-size:.8rem}
.fl-rec{background:#fff;border:1px solid #eee;border-left:5px solid #e84393;border-radius:10px;padding:14px;margin-bottom:12px}
.fl-rec-head{display:flex;justify-content:space-between;gap:8px;flex-wrap:wrap;margin-bottom:6px}
.fl-rec small{color:#888}
.fl-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:12px;align-items:start}
.fl-card{background:#fafafa;border:1px solid #eee;border-radius:10px;padding:12px}
.fl-card b{font-size:1.05rem}
.fl-card .en{color:#888;font-size:.85rem;margin-left:6px}
.fl-card p{margin:6px 0;font-size:.9rem;line-height:1.5}
.fl-card a{color:#e84393;font-size:.85rem;text-decoration:none}
.fl-track{background:#fff;border:2px solid #f3c6dd;border-radius:12px;padding:12px}
.fl-track-no{font-weight:bold;color:#e84393;margin-bottom:8px}
.fl-trow{display:flex;align-items:center;gap:8px;padding:5px 0}
.fl-role{font-size:.72rem;background:#fce4f1;color:#c2185b;border-radius:8px;padding:1px 7px;min-width:34px;text-align:center}
.fl-trow small{color:#888}
.fl-tbl{width:100%;border-collapse:collapse;font-size:.92rem;background:#fff}
.fl-tbl th{background:#fce4f1;color:#c2185b;padding:9px 8px;border:1px solid #f3c6dd;font-size:.85rem}
.fl-tbl td{padding:9px 8px;border:1px solid #f3c6dd;text-align:center}
.fl-tbl td:first-child{font-weight:bold;color:#e84393;background:#fff7fb;white-space:nowrap}
.fl-tbl small{display:block;color:#888;font-size:.72rem}
.fl-card details{margin-top:8px}
.fl-card summary{cursor:pointer;color:#e84393;font-size:.85rem}
.fl-sec{margin-top:10px;font-size:.88rem;line-height:1.6}
.fl-sec ul{margin:4px 0 0 18px;padding:0}
.fl-sec p{margin:4px 0 0}
.fl-legend{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:.78rem;color:#666;margin:6px 0}
.fl-lg{display:inline-flex;align-items:center;gap:3px}
.fl-lg i{width:10px;height:10px;border-radius:50%;display:inline-block}
.fl-chip sup{font-size:.62em;opacity:.8;margin-left:2px}
.fl-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#2d3436;color:#fff;padding:10px 20px;border-radius:8px;z-index:3000;font-size:.9rem}
`;
document.head.appendChild(style);

host.innerHTML = `
<h1 class="fl-h1">🌸 花精療癒紀錄</h1>
<div class="subtitle">38 種巴赫花精・12 條花精軌道・療癒個案紀錄</div>
<div class="fl-subnav">
  <button class="fl-sub active" data-sub="rec">📝 療癒紀錄</button>
  <button class="fl-sub" data-sub="track">🛤️ 12 條軌道</button>
  <button class="fl-sub" data-sub="info">🌼 38 種花精</button>
</div>

<div id="fl-rec">
  <div id="fl-login" class="fl-box" style="text-align:center">
    <p style="margin-bottom:12px">療癒紀錄含個案資料，需登入 Google 帳號後才會同步儲存到你的雲端。</p>
    <button class="fl-btn" id="fl-signin">使用 Google 帳號登入</button>
  </div>
  <div id="fl-app" style="display:none">
    <div style="text-align:right;font-size:.85rem;color:#888;margin-bottom:8px"><span id="fl-user"></span> <button class="fl-btn gray sm" id="fl-signout">登出</button></div>
    <div class="fl-box">
      <div class="fl-label">幫誰療癒</div>
      <input type="text" id="fl-person" list="fl-persons" placeholder="例如：媽媽、AMY、客戶 A">
      <datalist id="fl-persons"></datalist>
      <div class="fl-label">使用的花精（點選，可多選）</div>
      <input type="text" class="fl-search" id="fl-fsearch" placeholder="搜尋花精（中文或英文）…">
      <div class="fl-legend"><span id="fl-legend" class="fl-legend" style="margin:0"></span><button type="button" class="fl-btn gray sm" id="fl-sort" style="margin:0">改依軌道排列</button></div>
      <div class="fl-chips" id="fl-chips"></div>
      <div id="fl-picked" style="margin-top:8px"></div>
      <div class="fl-warn" id="fl-warn" style="display:none"></div>
      <div class="fl-label">使用方式</div>
      <select id="fl-method">${METHODS.map(m => `<option>${m}</option>`).join('')}</select>
      <input type="text" id="fl-mnote" placeholder="補充：滴數、一天幾次、噴在哪裡…（選填）">
      <div class="fl-label">使用時間</div>
      <input type="datetime-local" id="fl-time">
      <div class="fl-label">感受回饋</div>
      <textarea id="fl-feedback" placeholder="當下與之後的感受、情緒變化、對方的回應…"></textarea>
      <button class="fl-btn" id="fl-save">儲存紀錄</button>
      <button class="fl-btn gray" id="fl-cancel" style="display:none">取消編輯</button>
    </div>
    <input type="text" class="fl-search" id="fl-rsearch" placeholder="🔍 搜尋人名、花精、回饋…">
    <div id="fl-list"></div>
  </div>
</div>

<div id="fl-track" style="display:none">
  <div class="fl-warn">橫著看，<b>三種花精就是一條軌道</b>。依書中建議，<b>不要一次同時使用同一軌道的三種</b>。部分花精同時屬於兩條軌道（如龍芽草在 7、8 軌），照書目原樣列出。</div>
  <div style="overflow-x:auto"><table class="fl-tbl" id="fl-tracks"></table></div>
  <div class="fl-box" style="margin-top:16px;font-size:.92rem;line-height:1.8">
    <b>外在花精</b>（不在 12 條軌道內）<br><div id="fl-ext" style="margin-top:6px"></div>
    <small style="color:#888">軌道資料來源：柯磊墨《新巴赫花精療法 1》，請以你手上的書為準。</small>
  </div>
</div>

<div id="fl-info" style="display:none">
  <input type="text" class="fl-search" id="fl-isearch" placeholder="🔍 搜尋花精（中文、英文或關鍵字）…">
  <div class="fl-grid" id="fl-flowers"></div>
  <p style="font-size:.8rem;color:#888;margin-top:14px;line-height:1.6">「展開」內的三段是依巴赫花精一般通則自行整理的簡述，並非 Sunny 文章的摘要；想看她的完整論述請點連結（著作權屬原作者）。花精為情緒調理輔助，不能取代醫療。</p>
</div>`;

/* ── 子分頁切換 ── */
host.querySelectorAll('.fl-sub').forEach(btn => btn.onclick = () => {
  host.querySelectorAll('.fl-sub').forEach(b => b.classList.toggle('active', b === btn));
  ['rec', 'track', 'info'].forEach(k => $('fl-' + k).style.display = k === btn.dataset.sub ? 'block' : 'none');
});

/* ── 12 軌道 & 38 花精（靜態，不需登入）── */
const cell = en => `${zhOf(en)}<small>${en}</small>`;
$('fl-tracks').innerHTML = `<tr><th>軌道</th><th>第一層：溝通花精<small>（原生核心）</small></th><th>第二層：代償花精<small>（自我防禦）</small></th><th>第三層：失調花精<small>（耗竭失調）</small></th></tr>`
  + TRACKS.map((t, i) => `<tr><td>軌道 ${i + 1}</td>${t.map(en => `<td>${cell(en)}</td>`).join('')}</tr>`).join('');
$('fl-ext').innerHTML = EXTERNAL.map(en => `<span class="fl-tag">${zhOf(en)} ${en}</span>`).join('');

function renderInfo() {
  const q = $('fl-isearch').value.trim().toLowerCase();
  const text = f => { const d = DETAIL[f[2]]; return (f[1] + f[2] + f[4] + d[0].join('') + d[1].map(x => x[1]).join('') + d[2]).toLowerCase(); };
  $('fl-flowers').innerHTML = FLOWERS.filter(f => !q || text(f).includes(q)).map(f => {
    const tr = trackOf[f[2]], badge = tr ? `軌道 ${tr.join('、')}` : '外在花精', d = DETAIL[f[2]], nm = short(f[1]);
    return `<div class="fl-card"><b>${String(f[0]).padStart(2, '0')} ${f[1]}</b><span class="en">${f[2]}</span>
      <p>${f[4]}</p><span class="fl-tag">${badge}</span>
      <details><summary>展開：我需要它嗎？怎麼分辨？</summary>
        <div class="fl-sec"><b>我是否需要${nm}的支持？挑選的關鍵線索</b><ul>${d[0].map(x => `<li>${x}</li>`).join('')}</ul></div>
        <div class="fl-sec"><b>相似花精辨析：我該選哪一種？</b><ul>${d[1].map(([en, t]) => `<li><b>${zhOf(en)}</b>：${t}</li>`).join('')}</ul></div>
        <div class="fl-sec"><b>來自${nm}的人生智慧</b><p>${d[2]}</p></div>
      </details>
      <a href="https://store.sunshineinbottles.com/pages/sunny-on-${f[3]}" target="_blank" rel="noopener">看 Sunny 完整文章 →</a></div>`;
  }).join('') || '<p style="color:#888">找不到符合的花精</p>';
}
$('fl-isearch').oninput = renderInfo;
renderInfo();

/* ── 療癒紀錄 ── */
/* ── 軌道配色：同一軌道同色；跨兩軌的花精用兩色拼接；外在花精為灰 ── */
const tcol = i => `hsl(${i * 30},62%,42%)`, ttint = i => `hsl(${i * 30},75%,93%)`;
function chipStyle(en, on) {
  const tr = trackOf[en];
  if (!tr) return on ? 'background:#636e72;border-color:#636e72;color:#fff' : '';
  const [a, b = a] = tr.map(n => n - 1);
  const bg = on ? (a === b ? tcol(a) : `linear-gradient(90deg,${tcol(a)} 50%,${tcol(b)} 50%)`)
                : (a === b ? ttint(a) : `linear-gradient(90deg,${ttint(a)} 50%,${ttint(b)} 50%)`);
  return `background:${bg};border:2px solid transparent;border-color:${tcol(a)} ${tcol(b)} ${tcol(b)} ${tcol(a)};color:${on ? '#fff' : '#333'}`;
}
const trackOrder = [];
TRACKS.forEach(t => t.forEach(en => { if (!trackOrder.includes(en)) trackOrder.push(en); }));
let chipSort = 'num';


let user = null, unsub = null, records = [], picked = new Set(), editingId = null;
const nowLocal = () => { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 16); };
const fmt = s => (s || '').replace('T', ' ').replace(/-/g, '/');
function toast(m) { const t = document.createElement('div'); t.className = 'fl-toast'; t.textContent = m; document.body.appendChild(t); setTimeout(() => t.remove(), 2500); }

function trackWarnings() { return TRACKS.map((t, i) => ({ t, i })).filter(({ t }) => t.every(en => picked.has(en))); }

function renderPicked() {
  $('fl-picked').innerHTML = picked.size ? '已選：' + [...picked].map(en => `<span class="fl-tag" style="${chipStyle(en, true)}">${zhOf(en)}</span>`).join('') : '<small style="color:#888">尚未選擇花精</small>';
  const w = trackWarnings(), box = $('fl-warn');
  box.style.display = w.length ? 'block' : 'none';
  box.innerHTML = w.map(({ t, i }) => `⚠️ 軌道 ${i + 1}（${t.map(zhOf).join('、')}）三種都被選了。書中建議不要一次使用同一軌道的三種花精，請拿掉其中一種。`).join('<br>');
}
function renderChips() {
  const q = $('fl-fsearch').value.trim().toLowerCase();
  const fl = en => ({ en, zh: short(byEn[en].zh), n: byEn[en].n });
  const base = chipSort === 'track'
    ? [...trackOrder, ...FLOWERS.map(f => f[2]).filter(en => !trackOf[en])].map(fl)
    : FLOWERS.map(f => fl(f[2]));
  const items = [...base, { en: 'Rescue', zh: '急救花精', n: 0 }];
  $('fl-chips').innerHTML = items.filter(i => !q || i.zh.includes(q) || i.en.toLowerCase().includes(q)).map(i => {
    const on = picked.has(i.en), tr = trackOf[i.en];
    return `<button type="button" class="fl-chip${on ? ' on' : ''}" style="${chipStyle(i.en, on)}" data-en="${i.en}" title="${i.en}${tr ? '（軌道 ' + tr.join('、') + '）' : ''}">${i.n ? String(i.n).padStart(2, '0') + ' ' : ''}${i.zh}${tr ? `<sup>${tr.join('·')}</sup>` : ''}</button>`;
  }).join('');
  renderPicked();
}
$('fl-legend').innerHTML = TRACKS.map((_, i) => `<span class="fl-lg"><i style="background:${tcol(i)}"></i>${i + 1}</span>`).join('') + '<span class="fl-lg"><i style="background:#636e72"></i>外在</span>';
$('fl-sort').onclick = () => { chipSort = chipSort === 'num' ? 'track' : 'num'; $('fl-sort').textContent = chipSort === 'num' ? '改依軌道排列' : '改依編號排列'; renderChips(); };
$('fl-chips').onclick = e => {
  const c = e.target.closest('.fl-chip'); if (!c) return;
  const en = c.dataset.en; picked.has(en) ? picked.delete(en) : picked.add(en);
  renderChips();
};
$('fl-fsearch').oninput = renderChips;

function renderList() {
  $('fl-persons').innerHTML = [...new Set(records.map(r => r.person))].map(p => `<option value="${esc(p)}">`).join('');
  const q = $('fl-rsearch').value.trim().toLowerCase();
  const rows = records.filter(r => !q || (r.person + (r.flowers || []).map(f => zhOf(f) + f).join('') + r.feedback + r.method + (r.methodNote || '')).toLowerCase().includes(q));
  $('fl-list').innerHTML = rows.map(r => `
    <div class="fl-rec"><div class="fl-rec-head"><b>👤 ${esc(r.person)}</b><small>🕒 ${esc(fmt(r.usedAt))}</small></div>
      <div>${(r.flowers || []).map(f => `<span class="fl-tag" style="${chipStyle(f, true)}">${esc(zhOf(f))}</span>`).join('')}</div>
      <div style="margin:6px 0;font-size:.9rem">💧 ${esc(r.method)}${r.methodNote ? '：' + esc(r.methodNote) : ''}</div>
      ${r.feedback ? `<div style="white-space:pre-wrap;font-size:.92rem;line-height:1.6">💬 ${esc(r.feedback)}</div>` : ''}
      <div style="margin-top:8px"><button class="fl-btn sm" data-edit="${r.id}">編輯</button><button class="fl-btn gray sm" data-del="${r.id}">刪除</button></div></div>`).join('')
    || `<p style="text-align:center;color:#888;padding:24px">${q ? '找不到符合的紀錄' : '還沒有紀錄，從上面開始記錄第一筆吧 🌸'}</p>`;
}
$('fl-rsearch').oninput = renderList;

function resetForm() {
  editingId = null; picked = new Set();
  $('fl-person').value = ''; $('fl-mnote').value = ''; $('fl-feedback').value = ''; $('fl-fsearch').value = '';
  $('fl-method').selectedIndex = 0; $('fl-time').value = nowLocal();
  $('fl-save').textContent = '儲存紀錄'; $('fl-cancel').style.display = 'none';
  renderChips();
}
$('fl-cancel').onclick = resetForm;

$('fl-save').onclick = async () => {
  const person = $('fl-person').value.trim();
  if (!person) return toast('請填寫幫誰療癒');
  if (!picked.size) return toast('請至少選一種花精');
  if (trackWarnings().length && !confirm('同一條軌道的三種花精同時被選了，仍要儲存嗎？')) return;
  const data = { person, flowers: [...picked], method: $('fl-method').value, methodNote: $('fl-mnote').value.trim(), usedAt: $('fl-time').value || nowLocal(), feedback: $('fl-feedback').value.trim() };
  try {
    const col = collection(db, 'users', user.uid, 'flowerRecords');
    if (editingId) await updateDoc(doc(col, editingId), data);
    else await addDoc(col, { ...data, createdAt: serverTimestamp() });
    toast(editingId ? '已更新紀錄 🌸' : '已儲存紀錄 🌸');
    resetForm();
  } catch (e) { console.error(e); toast('儲存失敗：' + (e.code || e.message)); }
};

$('fl-list').onclick = async e => {
  const ed = e.target.dataset.edit, del = e.target.dataset.del;
  if (ed) {
    const r = records.find(x => x.id === ed); if (!r) return;
    editingId = ed; picked = new Set(r.flowers || []);
    $('fl-person').value = r.person; $('fl-mnote').value = r.methodNote || ''; $('fl-feedback').value = r.feedback || '';
    $('fl-method').value = r.method; $('fl-time').value = r.usedAt || nowLocal();
    $('fl-save').textContent = '儲存修改'; $('fl-cancel').style.display = 'inline-block';
    renderChips(); $('fl-person').scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (del && confirm('確定要刪除這筆紀錄嗎？')) {
    try { await deleteDoc(doc(db, 'users', user.uid, 'flowerRecords', del)); toast('已刪除'); }
    catch (err) { toast('刪除失敗：' + (err.code || err.message)); }
  }
};

$('fl-signin').onclick = () => signInWithPopup(auth, new GoogleAuthProvider()).catch(e => toast('登入失敗：' + (e.code || e.message)));
$('fl-signout').onclick = () => signOut(auth);

onAuthStateChanged(auth, u => {
  user = u; unsub?.(); unsub = null; records = [];
  $('fl-login').style.display = u ? 'none' : 'block';
  $('fl-app').style.display = u ? 'block' : 'none';
  if (!u) return;
  $('fl-user').textContent = u.email || '';
  resetForm();
  const q = query(collection(db, 'users', u.uid, 'flowerRecords'), orderBy('usedAt', 'desc'));
  unsub = onSnapshot(q, snap => { records = snap.docs.map(d => ({ id: d.id, ...d.data() })); renderList(); },
    err => { console.error(err); toast('讀取失敗，請檢查 Firestore 權限設定'); });
});
renderChips();
