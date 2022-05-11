const arrButtonCards = [...document.querySelectorAll('.card button')];
const modalHook = document.querySelector('.modal-outer');
const modalInner = modalHook.querySelector('.modal-inner');

function handleModalToggle(e) {
  let target = e.target;
  let card = target.closest('.card');
  let modal = target.classList.contains('modal-outer') ? target : '';

  if (modal) {
    modalHook.classList.remove('show');
    modalInner.classList.remove('padded');
  }

  if (card) {
    let modalText = card.dataset.description;
    let modalImageSrc = card.querySelector('img').src;
    let contentTemplate = `
    <img src="${modalImageSrc}" />
    <p>${modalText}</p>
    `;

    modalInner.innerHTML = contentTemplate;
    modalHook.classList.add('show');
    setTimeout(() => modalInner.classList.add('padded'), 200);
  }
}

arrButtonCards.forEach(btn => {
  btn.addEventListener('click', handleModalToggle);
});

modalHook.addEventListener('click', handleModalToggle);