const quiz = [
 {
 question: 'Q1.ナポレオンがかつて愛用していた帽子の形状として知られる「バイコック」はどのような目的であのような形状になったと言われているか？ ',
 choices: [
 '雨を防ぐため',
 '味方を識別しやすくするため',
 '戦いの勝利を祈るため',
 '威厳を保つため'
 ],
 correct: '味方を識別しやすくするため'
 },
{
 question: 'Q2.日本で最初に「漫画」という言葉が使われたと言われる、江戸時代に活躍した浮世絵師の名前は？',
choices: [
'喜多川歌麿',
 '葛飾北斎',
 '歌川広重',
 '鳥居清長'
 ],
correct:'葛飾北斎'
 },
{
 question: 'Q3. 酸素が初めて地球の大気中に大量に放出される原因となった現象は次のうちどれでしょう？',
 choices: [
 '温室効果',
 'スノーボールアース現象',
 '酸素革命',
 'プレートテクトニクス'
 ],
 correct: '酸素革命'
 },
 {
 question: 'Q4. 世界で最も多くの公式言語を持つ国はどれでしょう？',
 choices: [
 '南アフリカ',
 'スイス',
 'インド',
 'ボリビア'
 ],
 correct: '南アフリカ'
 },
 {
 question: 'Q5. 日本の漫画史において、もっとも多くの巻数が刊行された作品はどれでしょう？',
 choices: [
 'こち亀',
 'ゴルゴ13',
 'ドラえもん',
 'ONE PICE'
 ],
 correct: 'ゴルゴ13'
 },
 {
 question: 'Q6. 漫画「僕のヒーローアカデミア」でワン・フォー・オール5代目継承者の個性は？',
 choices: [
 '危機感知',
 '黒鞭',
 'ワープゲート',
 'ヘルフレイム'
 ],
 correct: '黒鞭'
 },
 {
 question: 'Q7. 漫画「ワンピース」で登場するキャラクター、バルトロメオは何の実の能力者？',
 choices: [
 'スベスベの実',
 'バクバクの実',
 'バリバリの実',
 'スパスパの実'
 ],
 correct: 'バリバリの実'
 },
 {
 question: 'Q8. 漫画「ワンピース」で登場するキャラクター、ニコ・ロビンがウォーターセブンで麦わらの一味を裏切った理由は？',
 choices: [
 '麦わらの一味を世界政府から守るため',
 '麦わらの一味に付き合いきれなくなったため',
 '世界政府に脅されたため',
 '世界政府から報酬を得るため'
 ],
 correct: '麦わらの一味を世界政府から守るため'
 },
 {
 question: 'Q9. 漫画「呪術廻戦」で登場するキャラクター、五条悟の術式「無下限呪術」の能力は？',
 choices: [
 '相手の五感全てを奪う',
 '無限を現実に持ってくる',
 '平衡感覚を逆にする',
 '純粋な身体能力の強化'
 ],
 correct: '無限を現実に持ってくる'
 },
 {
 question: 'Q10. 漫画「呪術廻戦」で登場するキャラクター、三輪霞の年齢は？',
 choices: [
 '16歳',
 '17歳',
 '18歳',
 '19歳'
 ],
 correct: '17歳'
 },
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
 
const button = document.getElementsByTagName('button');
const buttonLength = button.length;
 
const setupQuiz = () => {
 document.getElementById('question').textContent = quiz[quizIndex].question;
 let buttonIndex = 0;
 while(buttonIndex < buttonLength) {
　　　　 button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
　　　　 buttonIndex++;
 }
}
 
setupQuiz();
const clickHandler = (e) => {
 if (quiz[quizIndex].correct === e.target.textContent) {
   window.alert("正解！");
   score++;
 } else {
   window.alert("不正解！");
 }
 
 quizIndex++;
}
 
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
 button[handlerIndex].addEventListener('click', (e) => {
   clickHandler(e);
 });
 handlerIndex++;
}
const handleClick = (e) => {
  quizIndex++;
  if (quizIndex < quizLength) {
    setupQuiz();
 } else {
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
 }
}
