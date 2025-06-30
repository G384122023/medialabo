// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;
let end = false;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
document.getElementById('print').addEventListener('click', hantei);
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  if (end) {
    document.getElementById('result').textContent = 'ゲームはすでに終了しています。';
    return;
  }

// 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = Number(document.getElementById('yosou').value);


  document.getElementById('kaisu').textContent = kaisu;
  document.getElementById('answer').textContent = yoso;

  let result = '';

  if (kaisu < 4 && !end) {
    if (kotae > yoso) {
      result = 'まちがい．答えはもっと大きいですよ';
    } else if (kotae < yoso) {
      result = 'まちがい．答えはもっと小さいですよ';
    } else {
      result = '正解です．おめでとう!';
      end = true;
    }
  } else {
    result = '答えは ' + kotae + ' でした．すでにゲームは終わっています';
    end = true;
  }
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  document.getElementById('result').textContent = result;
  kaisu++;
}



