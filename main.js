'use strict';
 var num = 1;
 var x = Math.floor( Math.random() * 3 );
 var button1 = document.getElementById('button1');
 var button2 = document.getElementById('button2');
 var button3 = document.getElementById('button3');
 var button4 = document.getElementById('button4');
 var button5 = document.getElementById('button5');
 var button6 = document.getElementById('button6');
 
 
  button1.addEventListener('click', () => {
    if (num === 1) {
      document.getElementById("img1").src="kuhaku.PNG";
      document.getElementById("img4").src="gm.PNG";
      num++;
    } else if (num === 2) {
      document.getElementById("img1").src="kuhaku.PNG";
      document.getElementById("img5").src="gm.PNG";
      num++;
    }
    else {
      document.getElementById("img1").src="kuhaku.PNG";
      document.getElementById("img6").src="gm.PNG";
    }
  });
  button2.addEventListener('click', () => {
    if (num === 1) {
      document.getElementById("img2").src="kuhaku.PNG";
      document.getElementById("img4").src="gm.PNG";
      num++;
    } else if (num === 2) {
      document.getElementById("img2").src="kuhaku.PNG";
      document.getElementById("img5").src="gm.PNG";
      num++;
    }
    else {
      document.getElementById("img2").src="kuhaku.PNG";
      document.getElementById("img6").src="gm.PNG";
    }
  });
  button3.addEventListener('click', () => {
    if (num === 1) {
      document.getElementById("img3").src="kuhaku.PNG";
      document.getElementById("img4").src="gm.PNG";
      num++;
    } else if (num === 2) {
      document.getElementById("img3").src="kuhaku.PNG";
      document.getElementById("img5").src="gm.PNG";
      num++;
    }
    else {
      document.getElementById("img3").src="kuhaku.PNG";
      document.getElementById("img6").src="gm.PNG";
    }
  });
  button4.addEventListener('click', () => {
    if (x === 0) {
      document.getElementById("img4").src="kuhaku.PNG";
      alert("酸っぱい！");
    }
    if (x === 1) {
      document.getElementById("img4").src="kuhaku.PNG";
      alert("甘い！");
    }
    if (x === 2) {
      document.getElementById("img4").src="kuhaku.PNG";
      alert("甘い！");
    }
  });
  button5.addEventListener('click', () => {
    if (x === 0) {
      document.getElementById("img5").src="kuhaku.PNG";
      alert("甘い！");
    }
    if (x === 1) {
      document.getElementById("img5").src="kuhaku.PNG";
      alert("酸っぱい！");
    }
    if (x === 2) {
      document.getElementById("img5").src="kuhaku.PNG";
      alert("甘い！");
    }
  });
  button6.addEventListener('click', () => {
    if (x === 0) {
      document.getElementById("img6").src="kuhaku.PNG";
      alert("甘い！");
    }
    if (x === 1) {
      document.getElementById("img6").src="kuhaku.PNG";
      alert("甘い！");
    }
    if (x === 2) {
      document.getElementById("img6").src="kuhaku.PNG";
      alert("酸っぱい！");
    }
  });
