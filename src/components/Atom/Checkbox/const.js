export const html = `<label class="checkbox">
  <input type="checkbox" class="checkbox__input"/>
  <span class="checkbox__state">
    <span class="checkbox__control">
      <svg class="checkbox__icon">
        <use href="sprite.svg#check" />
      </svg>
    </span>
    <span class="checkbox__title">Default</span>
  </span>
</label>`;

export const scss = `.checkbox {
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--white);
    width: 15px;
    height: 13px;
  }

  /* square */
  &__control {
    width: 28px;
    height: 28px;
    background: var(--white);
    border: 1px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 4px;
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

  &_disabled {
    pointer-events: none;
  }

  &__input:disabled ~ &__state &__control {
    background: var(--grey-2);
    border-color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__title {
    color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__icon {
    color: var(--grey-2);
  }
  
  input[type=checkbox]{
    -webkit-appearance: none;
  }
}`;
