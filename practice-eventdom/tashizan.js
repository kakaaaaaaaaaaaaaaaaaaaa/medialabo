document.getElementById("calc").addEventListener("click", function () {
    // 左の数字を読み取る
    var left = parseInt(document.getElementById("left").value, 10);
    // 右の数字を読み取る
    var right = parseInt(document.getElementById("right").value, 10);
    // 足し算する
    var answer = left + right;
    // 計算結果をページに表示する
    document.getElementById("answer").textContent = answer;
  });
  