export const html = `<div class="accordion">
  <details class="accordion__item">
    <summary class="accordion__trigger">
      <span>Accordion item 1</span>
      <div class="accordion__trigger-icon"></div>
    </summary>
    <p class="accordion__content">
    Content
    </p>
  </details>
</div>`;

export const scss = `.accordion {
  font-size: 1rem;
  line-height: 1.5rem;
  width: 100%;

  &__item {
    padding: 1.5rem 2rem;
    border: 1px solid var(--grey-3);
    box-sizing: border-box;
    border-radius: 8px;
  }

  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--black);
    font-family: 'Inter', sans-serif;
    cursor: pointer;
  }

  &__trigger-icon {
    width: 18px;
    height: 10px;
    background-image: url('../../../assets/images/arrow-down.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &__item[open] &__trigger-icon {
    background-image: url('../../../assets/images/arrow-up.svg');
  }

  &__content {
    color: var(--grey-4);
    font-family: 'Inter', sans-serif;
    padding: 1rem 0px 0.5rem;
  }

  &__trigger::-webkit-details-marker,
  &__trigger::marker {
    display: none;
  }

  &__item:not(:last-child) {
    margin-bottom: 8px;
  }
}`;
