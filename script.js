const app = document.querySelector('#app');

const questions = {
  grade: { icon: '🎓', title: '본인의 학년은?', options: [
    ['1학년', 'college'], ['2학년', 'college'], ['3학년', 'college'],
    ['4학년', 'college'], ['기타(휴학, 졸업(유예) 등)', 'college']
  ] },
  college: { icon: '🏛️', title: '본인의 전공 계열(단과대)은?', options: [
    '문과대학', '이과대학', '건축대학', '공과대학', '사회과학대학', '경영대학',
    '부동산과학원', '(KU)융합과학기술원', '(상허)생명과학대학', '수의과대학',
    '예술디자인대학', '사범대학', 'KU자유전공학부'
  ].map(label => [label, 'awareness']) },
  awareness: { icon: '💡', title: '에코업 마이크로디그리 과정에 대해 알고 있나요?', options: [
    ['예', 'interest'], ['아니오', 'interest']
  ] },
  interest: { icon: '🌿', title: '평소 관심사 중 가장 흥미롭게 다가오는 분야는?', options: [
    ['깨끗한 물과 수자원을 지키고, 물 환경을 관리하는 일에 관심이 많다.', 'waterStyle'],
    ['기후변화에 대응하고 탄소 감축이나 자원 순환을 실천하는 데 관심이 많다.', 'climateStyle'],
    ['최신 IT 기술이나 스마트시티, 환경 오염을 사전에 방지하는 기술에 관심이 많다.', 'techStyle'],
    ['특정 분야보다는 환경과 기술 전반에 골고루 관심이 있다.', 'general']
  ] },
  waterStyle: { icon: '💧', title: '물과 관련된 프로젝트라면 어떤 스타일에 더 끌리나요?', options: [
    ['첨단 기술과 인프라를 활용해 효율적으로 물을 관리하고 산업화하는 스마트/관리 영역', 'waterSmart'],
    ['자연 생태계의 지속 가능성을 지키고 실제 정화·수처리 기술을 다루는 환경/공정 영역', 'waterNature']
  ] },
  waterSmart: { icon: '💧', title: '수자원 관리 영역에서 더 가까운 목표는?', options: [
    ['데이터, ICT, 신사업 비즈니스 등 새로운 기술을 접목하는 것', 'smartWater'],
    ['하천, 댐, 상하수도 등 실제 인프라의 운영과 안정적인 유지관리', 'waterManagement']
  ] },
  waterNature: { icon: '💧', title: '환경·공정 영역에서 더 가까운 목표는?', options: [
    ['자연 생태계 보전, 물환경 정책, 지속 가능한 수생태계 관리', 'sustainableWater'],
    ['오폐수를 정화하는 물리·화학적 처리 기술과 시설 공정', 'waterTreatment']
  ] },
  climateStyle: { icon: '🌍', title: '친환경 프로젝트라면 어떤 스타일에 더 끌리나요?', options: [
    ['기업이나 사회에서의 온실가스 감축 및 탄소중립 달성', 'climateCarbon'],
    ['쓰레기를 줄이고 자원을 재활용하며 자연 생태계를 지키는 것', 'climateNature']
  ] },
  climateCarbon: { icon: '🌍', title: '기후변화 대응 중 더 끌리는 활동은?', options: [
    ['사회 전반의 탄소중립 로드맵 구축', 'carbonNeutral'],
    ['배출되는 온실가스를 직접 측정하고 감축량 관리', 'ghgReduction']
  ] },
  climateNature: { icon: '🌍', title: '환경 보호 활동 중 더 마음이 가는 쪽은?', options: [
    ['쓰레기나 폐기물을 가치 있는 자원으로 되살리는 시스템', 'resourceCycle'],
    ['기후변화로 파괴되는 자연 생태계를 지키는 보전 활동', 'climateEcology']
  ] },
  techStyle: { icon: '🧩', title: '평소 더 끌리는 주제를 골라주세요.', options: [
    ['도시 공간과 IT 기술을 융합하는 최신 트렌드', 'techCity'],
    ['환경 산업의 기초 소양과 오염을 방지하는 실무 기술', 'techBasics']
  ] },
  techCity: { icon: '🧩', title: '첨단 기술을 어느 분야와 접목하고 싶나요?', options: [
    ['도시 공간 전체를 친환경 인프라로 바꾸는 시스템', 'smartCity'],
    ['다양한 환경 산업에 소프트웨어 기술을 녹여내는 것', 'ictEco']
  ] },
  techBasics: { icon: '🧩', title: '환경 분야에서 더 집중하고 싶은 방향은?', options: [
    ['에코업 산업의 전체적인 흐름과 탄탄한 기본기', 'ecoBasics'],
    ['환경오염의 원인을 사전에 차단하고 관리하는 기술', 'pollutionPrevention']
  ] },
  general: { icon: '🌱', title: '환경을 전공한다면 가장 배우고 싶은 분야는?', options: [
    ['전반적인 환경 분야', 'ecoBasics'], ['폐기물 처리', 'resourceCycle'],
    ['수자원 관리', 'sustainableWater'], ['온실가스 감축(탄소중립)', 'carbonNeutral'],
    ['스마트도시 구축', 'smartCity']
  ] }
};

const results = {
  smartWater: ['스마트물산업', '물 산업에 데이터와 ICT를 접목하고 새로운 서비스와 사업 가능성을 탐색하는 방향입니다.'],
  waterManagement: ['수자원관리트랙', '하천·댐·상하수도 등 수자원 인프라를 안정적으로 운영하고 관리하는 분야에 관심이 맞닿아 있습니다.'],
  sustainableWater: ['지속가능물환경', '수생태계 보전과 물환경 정책, 지속 가능한 관리 방법을 살펴보는 방향입니다.'],
  waterTreatment: ['수처리공정트랙', '오폐수 정화와 물리·화학적 수처리 기술, 시설 공정에 관심을 가진 분께 어울립니다.'],
  carbonNeutral: ['탄소중립에코업', '사회 전반의 탄소중립 방향과 온실가스 감축 전략을 탐색하는 분야입니다.'],
  ghgReduction: ['온실가스감축', '온실가스 배출을 측정하고 감축량을 관리하는 실무에 관심이 맞닿아 있습니다.'],
  resourceCycle: ['자원순환에코업', '폐기물을 줄이고 다시 가치 있는 자원으로 활용하는 시스템을 탐색하는 분야입니다.'],
  climateEcology: ['기후생태에코업', '기후변화에 대응하며 자연 생태계를 보전하는 활동에 관심이 있는 분께 어울립니다.'],
  smartCity: ['스마트에코시티', '도시 공간에 친환경 인프라와 스마트 기술을 접목하는 방향입니다.'],
  ictEco: ['ICT 융합에코업', '소프트웨어와 ICT를 여러 환경 산업 분야에 연결하는 데 관심이 맞닿아 있습니다.'],
  ecoBasics: ['에코업기초', '환경 산업의 전체적인 흐름을 이해하고 기초를 폭넓게 다지는 방향입니다.'],
  pollutionPrevention: ['오염방지에코업', '환경오염의 원인을 미리 찾아 차단하고 관리하는 기술에 관심이 맞닿아 있습니다.']
};

let history = [];
let current = 'intro';

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

function renderIntro() {
  app.innerHTML = `<section class="hero">
    <div class="hero-copy"><span class="eyebrow">ECO-UP PATHFINDER</span>
      <h1>나에게 맞는<br><em>에코업</em>을 찾아봐요.</h1>
      <p>평소 관심 있는 주제를 따라 몇 가지 질문에 답해보세요. 나의 선택과 가장 가까운 에코업 마이크로디그리 방향을 알려드릴게요.</p>
      <button class="primary-button" id="start">테스트 시작하기 <span class="arrow" aria-hidden="true">↗</span></button>
      <div class="hero-meta"><span>약 1분 소요</span><span>질문 5~6개</span><span>회원가입 없이 바로 시작</span></div>
    </div>
    <div class="hero-art" aria-hidden="true"><div class="art-orbit"></div><div class="art-orbit two"></div>
      <div class="art-core"><svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 76c-6-18 3-40 21-47 15-6 27 1 32 11 6 12 1 27-12 36-14 10-30 11-41 0Z" fill="#B9DCAC"/><path d="M51 35c18-16 39-10 43 9 4 17-7 34-24 36-17 1-25-16-19-45Z" fill="#68AD7A"/><path d="M25 87c17-22 36-34 64-39" stroke="#255E46" stroke-width="5" stroke-linecap="round"/><path d="M44 73c-1-11-6-18-16-22M65 60c0-10 4-18 11-24" stroke="#255E46" stroke-width="4" stroke-linecap="round"/></svg></div>
      <div class="art-pill water"><span>💧</span> 깨끗한 물</div><div class="art-pill climate"><span>🌍</span> 기후·자원</div><div class="art-pill tech"><span>💡</span> 스마트 기술</div><div class="art-pill future"><span>🌱</span> 지속 가능한 미래</div>
      <div class="art-caption">FIND YOUR ECO FUTURE</div>
    </div>
  </section>`;
  document.querySelector('#start').addEventListener('click', () => { current = 'grade'; render(); });
}

function renderQuestion() {
  const question = questions[current];
  const step = history.length + 1;
  const total = current === 'general' ? 5 : 6;
  const progress = Math.min(100, Math.round(step / total * 100));
  app.innerHTML = `<section class="quiz-layout"><div class="quiz-top"><span class="step-label">DISCOVER YOUR PATH</span><span class="step-count">${String(step).padStart(2,'0')} / ${String(total).padStart(2,'0')}</span></div>
    <div class="progress-track" role="progressbar" aria-valuenow="${step}" aria-valuemin="1" aria-valuemax="${total}" aria-label="질문 진행 상황"><div class="progress-fill" style="width:${progress}%"></div></div>
    <div class="question-card"><div class="question-icon" aria-hidden="true">${question.icon}</div><div class="question-kicker">QUESTION ${String(step).padStart(2,'0')}</div><h1>${escapeHTML(question.title)}</h1><p class="question-help">가장 가까운 답변 하나를 선택해주세요.</p>
      <div class="options">${question.options.map(([label], index) => `<button class="option" data-index="${index}"><span class="option-text">${escapeHTML(label)}</span><span class="option-arrow" aria-hidden="true">↗</span></button>`).join('')}</div>
    </div><div class="quiz-actions"><button class="text-button" id="back">← 이전 질문</button><span class="privacy-note">선택 내용은 서버로 전송되지 않습니다.</span></div></section>`;
  document.querySelectorAll('.option').forEach(button => button.addEventListener('click', () => {
    const [label, next] = question.options[Number(button.dataset.index)];
    history.push({ id: current, label });
    current = results[next] ? `result:${next}` : next;
    render();
  }));
  document.querySelector('#back').addEventListener('click', goBack);
}

function goBack() {
  const previous = history.pop();
  current = previous ? previous.id : 'intro';
  render();
}

function renderResult() {
  const resultId = current.slice(7);
  const [name, description] = results[resultId];
  const interests = history.filter(item => !['grade', 'college', 'awareness'].includes(item.id));
  const grade = history.find(item => item.id === 'grade')?.label ?? '';
  const college = history.find(item => item.id === 'college')?.label ?? '';
  const awareness = history.find(item => item.id === 'awareness')?.label ?? '';
  app.innerHTML = `<section class="result-layout">
    <div class="result-banner"><span class="result-badge">YOUR ECO-UP MATCH</span><h1>당신에게 가까운 분야는<br>${escapeHTML(name)}</h1><p>${escapeHTML(description)}</p></div>
    <div class="result-grid"><div class="result-panel"><h2>이런 선택을 했어요</h2><ul class="choice-path">${interests.map(item => `<li>${escapeHTML(item.label)}</li>`).join('')}</ul></div>
    <div class="result-panel"><h2>응답 정보</h2><p><strong>학년</strong> ${escapeHTML(grade)}<br><strong>전공 계열</strong> ${escapeHTML(college)}<br><strong>에코업 인지도</strong> ${escapeHTML(awareness)}</p></div></div>
    <div class="result-actions"><button class="primary-button" id="restart">다시 테스트하기 <span class="arrow" aria-hidden="true">↻</span></button><button class="secondary-button" id="copy">결과 복사하기</button></div>
    <p class="disclaimer">이 결과는 입력한 관심사에 따른 탐색용 추천입니다. 실제 과정명·교과목·신청 조건은 학교의 최신 공식 안내에서 확인해주세요.</p>
  </section>`;
  document.querySelector('#restart').addEventListener('click', () => { history = []; current = 'intro'; render(); });
  document.querySelector('#copy').addEventListener('click', async event => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(`나에게 가까운 에코업 분야: ${name}\n${description}`);
      button.textContent = '복사했어요 ✓';
    } catch { button.textContent = '복사할 수 없어요'; }
  });
}

function render() {
  if (current === 'intro') renderIntro();
  else if (current.startsWith('result:')) renderResult();
  else renderQuestion();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

render();
