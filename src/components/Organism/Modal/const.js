export const html = `<button id="modal-open" class="button button_primary">Open modal</button>
<div id="modal" class="modal">
    <div class="modal__popup">
      <header class="modal__title">
        <span>Modal title</span>
        <svg id="modal-close" class="modal__close">
          <use href="sprite.svg#close" />
        </svg>
      </header>
      <div class="modal__divider" />
      <div class="modal__body">
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div class="modal__divider" />
      <div class="modal__footer">
         <button class="button button_primary">Save</button>
         <button class="button button_secondary">Cancel</button>
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

  /* modal width and paddings */
  &__popup {
    position: relative;
    width: 360px;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    background-color: var(--main-bg);

    @media (min-width: 768px) {
      width: 500px;
    }

    @media (min-width: 1024px) {
      width: 720px;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    font-family: 'Inter', serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-secondary);
    padding: 1rem;
  }

  &__body {
    color: var(--inner-text-color-primary);
    font-family: 'Inter', serif;
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 2rem;

    *:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  &__close {
    height: 1.5rem;
    width: 1.5rem;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    button:not(:last-child) {
      margin-right: 8px;
    }
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: var(--grey-2);
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
