let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];

const questions = [
{ question: "من أول من أهدى له رسول الله صلى الله عليه وسلم كتابًا من صحائفه؟", options: ["عبد الله بن عبد المطلب", "حكيم بن حزام", "علي بن أبي طالب", "أبو سفيان"], correct: 1 },
{ question: "ما هو اسم أول مسجد بني في الإسلام؟", options: ["المسجد النبوي", "المسجد الأقصى", "مسجد قباء", "مسجد قبا"], correct: 2 },
{ question: "من هو الصحابي الذي كانت فتوحات المسلمين تحت قيادته في معركة القادسية؟", options: ["أبو بكر الصديق", "عمر بن الخطاب", "سعد بن أبي وقاص", "عثمان بن عفان"], correct: 2 },
{ question: "ما هو اسم النبي الذي ابتلعته الحوت ثم ألقاه الله على الشاطئ؟", options: ["يونس عليه السلام", "موسى عليه السلام", "إبراهيم عليه السلام", "عيسى عليه السلام"], correct: 0 },
{ question: "أي من هذه السور تتضمن آية الكرسي؟", options: ["البقرة", "آل عمران", "النساء", "المائدة"], correct: 0 },
{ question: "ما هو عدد السجدات في القرآن الكريم؟", options: ["12", "14", "15", "17"], correct: 1 },
{ question: "من هو أول من أسلم من الرجال؟", options: ["أبو بكر الصديق", "علي بن أبي طالب", "عثمان بن عفان", "عبد الله بن مسعود"], correct: 0 },
{ question: "كم عدد غزوات النبي صلى الله عليه وسلم؟", options: ["10", "17", "21", "27"], correct: 2 },
{ question: "ما هو اسم زوجة فرعون التي آمنت بموسى عليه السلام؟", options: ["مريم", "آسية", "عائشة", "فاطمة"], correct: 1 },
{ question: "في أي عام وقعت غزوة بدر؟", options: ["1 هـ", "2 هـ", "3 هـ", "4 هـ"], correct: 1 },
{ question: "من هو الصحابي الذي لقب بـ'ذو النورين'؟", options: ["عثمان بن عفان", "علي بن أبي طالب", "أبو بكر الصديق", "عبد الرحمن بن عوف"], correct: 0 },
{ question: "ما هو عدد سنوات بعثة النبي صلى الله عليه وسلم؟", options: ["20 سنة", "23 سنة", "25 سنة", "30 سنة"], correct: 1 },
{ question: "من هو آخر الأنبياء؟", options: ["عيسى عليه السلام", "محمد صلى الله عليه وسلم", "موسى عليه السلام", "إبراهيم عليه السلام"], correct: 1 },
{ question: "في أي عام هجري توفي النبي صلى الله عليه وسلم؟", options: ["10 هـ", "11 هـ", "12 هـ", "13 هـ"], correct: 1 },
{ question: "ما اسم الصحابي الذي كان يعرف بلقب 'أسد الله'؟", options: ["علي بن أبي طالب", "حمزة بن عبد المطلب", "الزبير بن العوام", "سعد بن أبي وقاص"], correct: 1 }
];




function shuffleQuestions() {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
}

function initializeQuestion() {
    if (currentQuestion >= shuffledQuestions.length) {
        alert(`انتهت الأسئلة! نتيجتك: ${score}/${shuffledQuestions.length}`);
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('restart-btn').style.display = 'inline-block';
        return;
    }

    
    let questionData = shuffledQuestions[currentQuestion];
    document.getElementById('question').textContent = questionData.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => checkAnswer(index === questionData.correct, button);
        optionsContainer.appendChild(button);
    });
    document.getElementById('counter').textContent = `السؤال ${currentQuestion + 1} من ${shuffledQuestions.length}`;
}

function checkAnswer(isCorrect, button) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.disabled = true);
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        options[shuffledQuestions[currentQuestion].correct].classList.add('correct');
    }
}

function nextQuestion() {
    currentQuestion++;
    initializeQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('restart-btn').style.display = 'none';
    initializeQuestion();
}

shuffleQuestions();
initializeQuestion();