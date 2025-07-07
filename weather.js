
// 課題3-2 のプログラムはこの関数の中に記述すること
// function print(data) {
//   console.log("都市: " + data.name);
//   console.log("国: " + data.sys.country);

//   console.log("天気: " + data.weather[0] .main);
//   console.log("天気の詳細: " + data.weather[0] .description);

//   console.log("現在の気温: " + data.main.temp + "℃");
//   console.log("体感温度: " + data.main.feels_like + "℃");
//   console.log("最低気温: " + data.main.temp_min + "℃");
//   console.log("最高気温: " + data.main.temp_max + "℃");

//   console.log("湿度: " + data.main.humidity + "%");
//   console.log("気圧: " + data.main.pressure + "hPa");

//   console.log("風速: " + data.wind.speed + "m/s");
//   console.log("風向: " + data.wind.deg + "°");
//   console.log("風の突風: " + data.wind.gust + "m/s");

//   console.log("雲の割合: " + data.clouds.all + "%");
// }

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
  let div = document.createElement('div');
  div.setAttribute("id", "result");

  let body = document.querySelector("body");
  body.insertAdjacentElement("beforeend", div);

  let ul = document.createElement('ul');
  div.insertAdjacentElement('beforeend', ul);

  let li = document.createElement('li');
  li.textContent = "経度:" + data.coord.lon ;
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "緯度:" + data.coord.lat;
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "最低気温: " + data.main.temp_min + "℃";
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "最高気温: " + data.main.temp_max + "℃";
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "湿度: " + data.main.humidity + "%";
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "風速: " + data.wind.speed + "m/s";
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "風向: " + data.wind.deg + "°";
  ul.insertAdjacentElement('beforeend', li);

  li = document.createElement('li');
  li.textContent = "都市名: " + data.name;
  ul.insertAdjacentElement('beforeend', li);


}
// 課題6-1 のイベントハンドラ登録処理は以下に記述




// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
