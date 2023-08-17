function toggleHSCInput() {
  const isMasters = document.getElementById("isMasters").value;
  const hscInput = document.getElementById("hscInput");

  if (isMasters === "yes") {
    hscInput.style.display = "none";
  } else {
    hscInput.style.display = "block";
  }
}

function calculateVPD() {
  const isMasters = document.getElementById("isMasters").value;
  const u = parseFloat(document.getElementById("universityCgpa").value);
  const m = parseFloat(document.getElementById("minimumGrade").value);

  const u1 = ((4 - u) * 3) / (4 - m);
  let v;

  if (isMasters === "yes") {
    v = u1 + 1;
  } else {
    const h = parseFloat(document.getElementById("hscResult").value);
    const h1 = ((5 - h) * 3) / (5 - 1);
    v = 1 + (u1 + h1) / 2;
  }

  let resultText = "";

  if (v <= 1.5) {
    resultText = `Your VPD is: ${v.toFixed(2)} Sehr Gut (Very Good)`;
  } else if (v <= 2.5) {
    resultText = `Your VPD is: ${v.toFixed(2)} Gut (Good)`;
  } else if (v <= 3.5) {
    resultText = `Your VPD is: ${v.toFixed(2)} Befriedigend (Satisfying)`;
  } else if (v <= 4.9) {
    resultText = `Your VPD is: ${v.toFixed(2)} Ausreichend (Sufficient)`;
  } else {
    resultText = "Nicht ausreichend (Insufficient)";
  }

  document.getElementById("result").textContent = resultText;
}
