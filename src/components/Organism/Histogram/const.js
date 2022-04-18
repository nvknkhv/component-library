export const html = `
<div class="histogram">
  <header class="histogram__header">
    <div class="histogram__header-text">
      <p class="histogram__title">Total orders</p>
      <p class="histogram__link">View all</p>
    </div>
    <p class="histogram__count">50254</p>
  </header>
  <div class="histogram__columns">
    <div class="histogram__column" style="--value: 0.2"></div>
    <div class="histogram__column" style="--value: 0.4"></div>
    <div class="histogram__column" style="--value: 1"></div>
    <div class="histogram__column" style="--value: 0.8"></div>
     <div class="histogram__column" style="--value: 0.6"></div>
  </div>
</div>`;

export const scss = `
.histogram {
  width: 100%;
  padding: 1rem 1.5rem 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--grey-3);

  &__header {
    font-size: 1rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  &__title {
    color: var(--black);
    opacity: 0.8;
    font-family: 'Inter', sans-serif;
  }

  &__link {
    color: var(--primary);
    font-family: 'Inter', sans-serif;
  }

  &__header-text {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }

  &__count {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: 'Inter', sans-serif;
  }

  &__columns {
    display: flex;
    align-items: flex-end;
    gap: 1px;
    height: 3rem;
  }

  &__column {
    background-color: var(--primary);
    min-width: 1px;
    flex-grow: 1;
    height: calc(var(--value) * 100%);
  }
}
`;
