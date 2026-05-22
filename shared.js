// shared.js

function loadProgress() {
  const saved = localStorage.getItem('actuarialProgress');
  if (saved) {
    return JSON.parse(saved);
  }
  return {
    chaptersRead: [],
    questionsMastered: [],
    flashcardsMastered: [],
    quizScores: []
  };
}

function saveProgress(progressObj) {
  localStorage.setItem('actuarialProgress', JSON.stringify(progressObj));
}

function markChapterRead(chapterId) {
  const progress = loadProgress();
  if (!progress.chaptersRead.includes(chapterId)) {
    progress.chaptersRead.push(chapterId);
    saveProgress(progress);
  }
}

function markChapterUnread(chapterId) {
  const progress = loadProgress();
  const index = progress.chaptersRead.indexOf(chapterId);
  if (index !== -1) {
    progress.chaptersRead.splice(index, 1);
    saveProgress(progress);
  }
}

function toggleQuestionMastered(questionId) {
  const progress = loadProgress();
  if(!progress.questionsMastered) progress.questionsMastered = [];
  const idx = progress.questionsMastered.indexOf(questionId);
  if(idx > -1) progress.questionsMastered.splice(idx, 1);
  else progress.questionsMastered.push(questionId);
  saveProgress(progress);
}

function toggleFlashcardMastered(flashcardIndex) {
  const progress = loadProgress();
  if(!progress.flashcardsMastered) progress.flashcardsMastered = [];
  const idx = progress.flashcardsMastered.indexOf(flashcardIndex);
  if(idx > -1) progress.flashcardsMastered.splice(idx, 1);
  else progress.flashcardsMastered.push(flashcardIndex);
  saveProgress(progress);
}

function recordQuizScore(score, total, topicData = null) {
  const progress = loadProgress();
  progress.quizScores.push({ score, total, date: new Date().toISOString(), topicData });
  saveProgress(progress);
}

// Function to render math dynamically after DOM insertion
function renderMath() {
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}
