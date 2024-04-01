const changeBtn = document.getElementById('btn');
changeBtn.addEventListener('click', () => {
  setTimeout (() => {
    const h2Element = document.getElementById('text');
    h2Element.textContent = 'ボタンをクリックしました';
  }, 2000)
});
