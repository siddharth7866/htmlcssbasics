// alert("connected");

//shortcircuiting

var sid = document.getElementById("sid");
const getAdvice = async function () {
  const resdata = await fetch("https://api.adviceslip.com/advice");
  const data = await resdata.json();

  // Updating values
  var advice = data.slip.advice;
  var count = count + 1;

  sid.textContent = advice;

  //   return advice;

  // Manually updating DOM elements
  //   countEl.textContent = count;
  //   adviceEl.textContent = advice;
};

setInterval(getAdvice, 5000);
