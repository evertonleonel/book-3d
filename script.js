const container = document.querySelector('.container');

for( i = 10; i <= 15; i++){
  const img = document.createElement('img');
  img.classList.add('books');
  if( i < 9){
    img.src = `/image/livro0${i}.png`
  }
  img.src = `/image/livro${i}.png`
  container.appendChild(img);
}