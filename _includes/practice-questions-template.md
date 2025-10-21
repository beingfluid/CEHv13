## Practice Questions

<div class="practice-questions-container">
  {% assign current_module = page.module %}
  {% assign module_questions = site.data.practice-questions | where: "module", current_module %}
  
  {% if module_questions.size > 0 %}
    <div class="questions-header">
      <h3>📝 Module {{ current_module }} Practice Questions</h3>
      <p class="questions-subtitle">Test your understanding of {{ page.title }} concepts</p>
    </div>
    
    {% for question in module_questions %}
      <div class="question-card" data-question="{{ forloop.index }}">
        <div class="question-header">
          <span class="question-number">Question {{ forloop.index }}</span>
        </div>
        
        <div class="question-text">
          {{ question.question }}
        </div>
        
        <div class="options-container">
          {% for option in question.options %}
            <div class="option" data-option="{{ forloop.index0 }}">
              <input type="radio" name="question_{{ forloop.parentloop.index }}" id="q{{ forloop.parentloop.index }}_opt{{ forloop.index0 }}" value="{{ forloop.index0 }}">
              <label for="q{{ forloop.parentloop.index }}_opt{{ forloop.index0 }}">
                <span class="option-letter">{{ "ABCD" | slice: forloop.index0, 1 }}</span>
                <span class="option-text">{{ option }}</span>
              </label>
            </div>
          {% endfor %}
        </div>
        
        <div class="question-actions">
          <button class="btn-show-answer" onclick="showAnswer({{ forloop.index }}, {{ question.correct }})">
            Show Answer
          </button>
          <button class="btn-check-answer" onclick="checkAnswer({{ forloop.index }}, {{ question.correct }})" style="display: none;">
            Check Answer
          </button>
        </div>
        
        <div class="answer-explanation" id="explanation_{{ forloop.index }}" style="display: none;">
          <div class="correct-answer">
            <strong>Correct Answer:</strong> {{ "ABCD" | slice: question.correct, 1 }} - {{ question.options[question.correct] }}
          </div>
          <div class="explanation-text">
            <strong>Explanation:</strong> {{ question.explanation }}
          </div>
        </div>
      </div>
    {% endfor %}
    
    <div class="questions-footer">
      <div class="score-container" id="score-container" style="display: none;">
        <span class="score-text">Your Score: <span id="score">0</span>/{{ module_questions.size }}</span>
        <button class="btn-reset" onclick="resetQuestions()">Reset Questions</button>
      </div>
    </div>
    
  {% else %}
    <div class="no-questions">
      <h3>📝 Practice Questions</h3>
      <p>Practice questions for Module {{ current_module }} are coming soon!</p>
    </div>
  {% endif %}
</div>

<style>
.practice-questions-container {
  margin: 2rem 0;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;
}

.questions-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.questions-header h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.questions-subtitle {
  color: #64748b;
  font-style: italic;
  margin: 0;
}

.question-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.question-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.question-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
}

.question-number {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.options-container {
  margin-bottom: 1.5rem;
}

.option {
  margin-bottom: 0.75rem;
}

.option input[type="radio"] {
  display: none;
}

.option label {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fafafa;
}

.option label:hover {
  border-color: #3b82f6;
  background: #f0f9ff;
}

.option input[type="radio"]:checked + label {
  border-color: #3b82f6;
  background: #dbeafe;
  color: #1e40af;
}

.option-letter {
  background: #e2e8f0;
  color: #475569;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 0.75rem;
  font-size: 0.875rem;
}

.option input[type="radio"]:checked + label .option-letter {
  background: #3b82f6;
  color: white;
}

.option-text {
  flex: 1;
  font-size: 0.95rem;
}

.question-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.btn-show-answer,
.btn-check-answer,
.btn-reset {
  background: linear-gradient(135deg, #059669, #047857);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-show-answer:hover,
.btn-check-answer:hover,
.btn-reset:hover {
  background: linear-gradient(135deg, #047857, #065f46);
  transform: translateY(-1px);
}

.answer-explanation {
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border: 1px solid #a7f3d0;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.correct-answer {
  color: #065f46;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.explanation-text {
  color: #047857;
  font-size: 0.9rem;
  line-height: 1.5;
}

.questions-footer {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #e2e8f0;
}

.score-container {
  background: linear-gradient(135deg, #dbeafe, #bfdbfe);
  border: 1px solid #93c5fd;
  border-radius: 8px;
  padding: 1rem;
  display: inline-block;
}

.score-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e40af;
  margin-right: 1rem;
}

.no-questions {
  text-align: center;
  padding: 2rem;
  color: #64748b;
}

.no-questions h3 {
  color: #1e293b;
  margin-bottom: 0.5rem;
}

/* Correct and incorrect answer styling */
.option.correct label {
  border-color: #059669 !important;
  background: #ecfdf5 !important;
  color: #065f46 !important;
}

.option.incorrect label {
  border-color: #dc2626 !important;
  background: #fef2f2 !important;
  color: #991b1b !important;
}

.option.correct .option-letter {
  background: #059669 !important;
  color: white !important;
}

.option.incorrect .option-letter {
  background: #dc2626 !important;
  color: white !important;
}
</style>

<script>
let totalAnswered = 0;
let correctAnswers = 0;

function showAnswer(questionNum, correctAnswer) {
  const explanation = document.getElementById(`explanation_${questionNum}`);
  const showBtn = document.querySelector(`[data-question="${questionNum}"] .btn-show-answer`);
  const checkBtn = document.querySelector(`[data-question="${questionNum}"] .btn-check-answer`);
  
  explanation.style.display = 'block';
  showBtn.style.display = 'none';
  checkBtn.style.display = 'inline-block';
  
  // Highlight the correct answer
  const questionCard = document.querySelector(`[data-question="${questionNum}"]`);
  const options = questionCard.querySelectorAll('.option');
  options[correctAnswer].classList.add('correct');
}

function checkAnswer(questionNum, correctAnswer) {
  const questionCard = document.querySelector(`[data-question="${questionNum}"]`);
  const selectedOption = questionCard.querySelector('input[type="radio"]:checked');
  
  if (!selectedOption) {
    alert('Please select an answer first!');
    return;
  }
  
  const selectedValue = parseInt(selectedOption.value);
  const options = questionCard.querySelectorAll('.option');
  
  // Clear previous styling
  options.forEach(option => {
    option.classList.remove('correct', 'incorrect');
  });
  
  // Mark correct answer
  options[correctAnswer].classList.add('correct');
  
  // Mark selected answer if incorrect
  if (selectedValue !== correctAnswer) {
    options[selectedValue].classList.add('incorrect');
  } else {
    correctAnswers++;
  }
  
  totalAnswered++;
  
  // Disable further changes
  const radioButtons = questionCard.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => radio.disabled = true);
  
  // Hide check button
  const checkBtn = questionCard.querySelector('.btn-check-answer');
  checkBtn.style.display = 'none';
  
  // Show score if all questions answered
  updateScore();
}

function updateScore() {
  const totalQuestions = document.querySelectorAll('.question-card').length;
  if (totalAnswered === totalQuestions) {
    const scoreContainer = document.getElementById('score-container');
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = correctAnswers;
    scoreContainer.style.display = 'block';
  }
}

function resetQuestions() {
  totalAnswered = 0;
  correctAnswers = 0;
  
  // Reset all questions
  document.querySelectorAll('.question-card').forEach((card, index) => {
    const questionNum = index + 1;
    
    // Reset radio buttons
    const radioButtons = card.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
      radio.disabled = false;
      radio.checked = false;
    });
    
    // Reset option styling
    const options = card.querySelectorAll('.option');
    options.forEach(option => {
      option.classList.remove('correct', 'incorrect');
    });
    
    // Reset buttons
    const showBtn = card.querySelector('.btn-show-answer');
    const checkBtn = card.querySelector('.btn-check-answer');
    const explanation = card.querySelector('.answer-explanation');
    
    showBtn.style.display = 'inline-block';
    checkBtn.style.display = 'none';
    explanation.style.display = 'none';
  });
  
  // Hide score
  document.getElementById('score-container').style.display = 'none';
}
</script>

---
