const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', () => {
  const h2Element = document.getElementById('text');
  h2Element.textContent = 'ボタンをクリックしました';
});
