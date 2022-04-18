export const html = `<button id="modal-open" class="button button_primary">Open modal</button>
<div id="modal" class="modal">
    <div class="modal__popup">
      <div class="modal__content">
        <header class="modal__title">
          <span>Modal title</span>
          <svg id="modal-close" class="modal__close">
            <use href="sprite.svg#close" />
          </svg>
        </header>
        <div class="modal__body">
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </div>
</div>`;

export const scss = `.modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  background-color: rgba(196, 196, 196, 0.5);
  display: none;          
  align-items: center;
  justify-content: center;

  &__popup {
    position: relative;
    width: 360px;
    margin: 0 auto;
    padding: 1rem;

    @media (min-width: 768px) {
      width: 500px;
    }

    @media (min-width: 1024px) {
      width: 720px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 2rem;
    background-color: var(--white);
  }

  &__title {
    display: flex;
    justify-content: space-between;
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--grey-4);
  }

  &__body {
    margin-top: 1rem;
    color: var(--grey-4);
    font-family: Inter;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  &__close {
    height: 1.5rem;
    width: 1.5rem;
  }
}`;

export const js = `(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.overflow = 'initial';
  });
})();`;
