export const html = `<div class="skeleton">
  <div class="skeleton__header">
    <div class="skeleton__circle"></div>
    <div class="skeleton__content">
      <div class="skeleton__rectangle skeleton__rectangle_width-third"></div>
      <div class="skeleton__rectangle skeleton__rectangle_width-half"></div>
    </div>
  </div>
  <div class="skeleton__content">
    <div class="skeleton__rectangle"></div>
    <div class="skeleton__rectangle"></div>
  </div>
</div>`;

export const scss = `.skeleton {
  width: 100%;
  border: 1px solid var(--grey-3);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  box-sizing: border-box;

  &__header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 1.5rem;
  }

  &__circle {
    height: 4rem;
    width: 4rem;
    background-color: var(--grey-2);
    border-radius: 50%;
    display: inline-block;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
  }

  &__rectangle {
    background-color: var(--grey-2);
    height: 1.2rem;
  }

  &__rectangle_width-half {
    width: 50%;
  }

  &__rectangle_width-third {
    width: 33%;
  }
}`;
