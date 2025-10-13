
document.getElementById('year').textContent = new Date().getFullYear();

const rulesBtn = document.getElementById('rulesBtn');
const rulesModal = document.getElementById('rulesModal');
const rulesClose = document.getElementById('rulesClose');

rulesBtn.addEventListener('click', ()=>{
  rulesModal.setAttribute('aria-hidden','false');
});
rulesClose.addEventListener('click', ()=>{
  rulesModal.setAttribute('aria-hidden','true');
});
rulesModal.addEventListener('click', (e)=>{
  if(e.target === rulesModal){ rulesModal.setAttribute('aria-hidden','true'); }
});
