// ========== حالة الاختبار ==========
let quizState = {
  currentStage: 1,
  currentQ: 0,
  answers: [],
  reducedIndexes: [],
  mainFinalField: "",
  history: [],
  detailedField: "",
  finalMajor: "",
  result: "",
  userEmail: ""
};

// ========== دوال واجهة المستخدم ==========
function setProgress(percent) {
  document.getElementById('progressBar').style.width = percent + "%";
}

function saveHistory() {
  quizState.history.push(JSON.parse(JSON.stringify(quizState)));
}

function goBack() {
  if (quizState.history.length === 0) return;
  quizState = quizState.history.pop();
  renderQuiz();
}

function renderQuiz() {
  document.getElementById('backBtn').style.display = quizState.history.length ? "inline-block" : "none";
  if (quizState.currentStage === 1) {
    renderStage1();
  }
  else if (quizState.currentStage === 2) {
    renderStage2();
  }
  else if (quizState.currentStage === 3) {
    renderResult();
  }
}

function renderStage1() {
  let qIndex = quizState.currentQ;
  let question = questionsP1[qIndex];
  let options;
  if (qIndex === 0) {
    options = mainOptions.map(opt => opt.label);
    quizState.reducedIndexes = mainOptions.map((_, i) => i);
  } else {
    options = quizState.reducedIndexes.map(idx => optionsTextsP1[qIndex][idx]);
  }

  setProgress(Math.floor((qIndex / questionsP1.length) * 100));

  let html = `
    <div class="main-question">${question}</div>
    <div class="stage-label">المرحلة الأولى</div>
    ${qIndex === 3 ? '<div class="note">ملاحظة: اختر خيار واحد فقط بكلمة "نعم" وهو الأقرب إليك</div>' : ""}
    <div id="optionsArea"></div>
    <button class="btn-main" onclick="submitStage1Q()" id="nextBtn" disabled>التالي</button>
  `;
  document.getElementById('quizContent').innerHTML = html;
  renderOptions(options, qIndex);
}

function renderOptions(options, qIndex) {
  let html = "";
  options.forEach((option, i) => {
    html += `
      <div class="option" id="opt${i}">
        <span>${option}</span>
        <div class="answers-bar" id="ans${i}">
          <button onclick="choose('نعم',${i}); event.stopPropagation();" id="btnYes${i}">نعم</button>
          <button onclick="choose('أحيانا',${i}); event.stopPropagation();" id="btnMaybe${i}">أحياناً</button>
          <button onclick="choose('لا',${i}); event.stopPropagation();" id="btnNo${i}">لا</button>
        </div>
      </div>
    `;
  });
  document.getElementById('optionsArea').innerHTML = html;
  if (!quizState.answers[qIndex] || quizState.answers[qIndex].length !== options.length) {
    quizState.answers[qIndex] = Array(options.length).fill().map(() => ({answer: ""}));
  }
  quizState.answers[qIndex].forEach((ans, i) => {
    highlightAnswer(i, ans.answer);
  });
}

function choose(val, idx) {
  let qIndex = quizState.currentQ;
  if (qIndex === 3 && val === "نعم") {
    // إذا حاول المستخدم اختيار "نعم" لخيار جديد، يجب جعل كل الخيارات الأخرى "لا"
    quizState.answers[qIndex] = quizState.answers[qIndex].map(() => ({answer: "لا"}));
    quizState.answers[qIndex][idx] = {answer: "نعم"};
  } else if (qIndex === 3 && val !== "نعم" && quizState.answers[qIndex][idx].answer === "نعم") {
    // إذا ضغط المستخدم على خيار آخر (غير نعم)، فقط بدّل القيمة
    quizState.answers[qIndex][idx] = {answer: val};
  } else {
    // الأسئلة الأخرى تعمل بشكل طبيعي (يمكن نعم لأكثر من خيار)
    quizState.answers[qIndex][idx] = {answer: val};
  }
  // تحقق الإجابة كاملة
  let allAnswered = quizState.answers[qIndex].every(ans => ans.answer !== "");
  // في السؤال الرابع: تحقق أن هناك فقط "نعم" واحدة
  if (qIndex === 3) {
    let yesCount = quizState.answers[qIndex].filter(ans => ans.answer === "نعم").length;
    allAnswered = allAnswered && yesCount === 1;
  }
  document.getElementById('nextBtn').disabled = !allAnswered;
  // حدث المظهر دائماً
  quizState.answers[qIndex].forEach((ans, i) => highlightAnswer(i, ans.answer));
}

function highlightAnswer(idx, val) {
  ["Yes", "Maybe", "No"].forEach(type => {
    let btn = document.getElementById(`btn${type}${idx}`);
    if (btn) btn.classList.remove("selected");
  });
  if (val === "نعم") document.getElementById(`btnYes${idx}`).classList.add("selected");
  else if (val === "أحيانا") document.getElementById(`btnMaybe${idx}`).classList.add("selected");
  else if (val === "لا") document.getElementById(`btnNo${idx}`).classList.add("selected");
}

function submitStage1Q() {
  saveHistory();
  let qIndex = quizState.currentQ;
  let yesArr = [];
  quizState.answers[qIndex].forEach((ans, i) => {
    if (ans.answer === "نعم") yesArr.push(quizState.reducedIndexes[i]);
  });

  // إذا كنا في آخر سؤال (الرابع)
  if (qIndex === 3) {
    if (yesArr.length === 1) {
      quizState.mainFinalField = mainOptions[yesArr[0]].field;
      quizState.currentStage = 2;
      setProgress(90);
      renderQuiz();
      return;
    } else {
      // هنا فقط نعرض رسالة نصية في الصفحة، لا alert ولا مربع حوار.
      let note = document.querySelector('.note');
      if (note) note.innerHTML = 'يرجى اختيار خيار واحد فقط يحتوي على كلمة "نعم" لمتابعة الاختبار.';
      return;
    }
  }

  // في الأسئلة الأولى (0-2): إذا كان هناك أكثر من خيار "نعم"، قلّص الخيارات وانتقل للسؤال التالي
  if (qIndex < 3 && yesArr.length > 1) {
    quizState.currentQ++;
    quizState.reducedIndexes = yesArr;
    renderQuiz();
    return;
  }

  // في أي سؤال قبل الأخير، إذا كان هناك خيار واحد "نعم" فقط، انتقل مباشرة للمرحلة الثانية
  if (qIndex < 3 && yesArr.length === 1) {
    quizState.mainFinalField = mainOptions[yesArr[0]].field;
    quizState.currentStage = 2;
    setProgress(90);
    renderQuiz();
    return;
  }

  // إذا لم تتحقق أي حالة أعلاه، لا تفعل شيء (لن يتم تفعيل زر التالي أساسًا)
}

function renderStage2() {
  let data = subFieldsData[quizState.mainFinalField];
  if (!data) {
    quizState.result = "حصل خطأ، لم يتم العثور على مجال التخصص!";
    quizState.currentStage = 3;
    renderQuiz();
    return;
  }
  setProgress(95);
  document.getElementById('quizContent').innerHTML = `
    <div class="main-question">${data.question}</div>
    <div class="stage-label">المرحلة الثانية</div>
    <div id="subOptions"></div>
    <button class="btn-main" onclick="submitStage2()" id="nextBtn" disabled>عرض النتيجة</button>
  `;
  renderSubOptions(data.options);
}

function renderSubOptions(options) {
  let html = "";
  options.forEach((opt, i) => {
    html += `<div class="option" id="subOpt${i}" onclick="chooseSub(${i})">${opt.label}</div>`;
  });
  document.getElementById('subOptions').innerHTML = html;
}

function chooseSub(idx) {
  let data = subFieldsData[quizState.mainFinalField];
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  document.getElementById(`subOpt${idx}`).classList.add('selected');
  document.getElementById('nextBtn').disabled = false;
  quizState.detailedField = data.options[idx].field;
}

function submitStage2() {
  saveHistory();
  quizState.result = resultsData[quizState.detailedField];
  quizState.currentStage = 3;
  setProgress(100);
  renderQuiz();
}

function renderResult() {
  document.getElementById('quizContent').innerHTML = `
    <div class="result-section">
      ${quizState.result || "حصل خطأ في عرض النتيجة"}
    </div>
  `;
}

// Initialize the quiz when the page loads
window.onload = function() {
  renderQuiz();
}; 