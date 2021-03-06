export const html = `<label class="toggler">
  <input type="checkbox" class="toggler__input"/>
  <span class="toggler__state">
    <span class="toggler__control">
      <svg class="toggler__icon">
        <use href="sprite.svg#toggler" />
      </svg>
    </span>
    <span class="toggler__title">Default</span>
  </span>
</label>`;

export const scss = `.toggler {
  display: inline-flex;

  &__input {
    position: absolute;
    outline: none;
    width: 0;
    height: 0;
  }

  &__state {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
  }

  &__icon {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--grey-2);
    width: 26px;
    height: 26px;
  }

  &__control {
    width: 52px;
    height: 28px;
    border: 1px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 16px;
    background: var(--white);
    position: relative;
  }

  &__title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--grey-4);
  }

  &__input:checked ~ &__state &__control {
    background: var(--primary);
    border-color: var(--primary);
  }

  &__input:checked ~ &__state &__icon {
    color: var(--white);
    transform: translateX(24px);
  }
  
  &_disabled {
    pointer-events: none;
  }
  
  &__input:disabled ~ &__state &__control {
    pointer-events: none;
    background: var(--grey-2);
    border-color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__title {
    color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__icon {
    color: var(--grey-3);
  }
  
  input[type=checkbox]{
    -webkit-appearance: none;
  }
}`;
