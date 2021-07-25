let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
'https://m.hanshintigers.jp/images/profile_2021/19.jpg',
'https://m.hanshintigers.jp/images/profile_2021/16.jpg',
'https://m.hanshintigers.jp/images/profile_2021/27.jpg',
'https://m.hanshintigers.jp/images/profile_2021/46.jpg',
'https://m.hanshintigers.jp/images/profile_2021/37.jpg',
'https://m.hanshintigers.jp/images/profile_2021/50.jpg',
'https://m.hanshintigers.jp/images/profile_2021/3.jpg',
'https://m.hanshintigers.jp/images/profile_2021/2.jpg',
'https://m.hanshintigers.jp/images/profile_2021/8.jpg',
'https://m.hanshintigers.jp/images/profile_2021/31.jpg',
'https://m.hanshintigers.jp/images/profile_2021/33.jpg',
'https://m.hanshintigers.jp/images/profile_2021/51.jpg',
'https://m.hanshintigers.jp/images/profile_2021/5.jpg',
'https://m.hanshintigers.jp/images/profile_2021/52.jpg',
'https://m.hanshintigers.jp/images/profile_2021/7.jpg',
'https://m.hanshintigers.jp/images/profile_2021/24.jpg',
'https://m.hanshintigers.jp/images/profile_2021/55.jpg',
'https://m.hanshintigers.jp/images/profile_2021/00.jpg'
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
