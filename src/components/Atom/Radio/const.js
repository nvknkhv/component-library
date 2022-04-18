export const html = `<label class="radio">
  <input type="radio" class="radio__input" name="fields" value="default"/>
  <span class="radio__state">
    <span class="radio__control">
      <svg class="radio__icon">
        <use href="sprite.svg#radio" />
      </svg>
    </span>
    <span class="radio__title">Default</span>
  </span>
</label>`;

export const scss = `.radio {
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
    /*position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);*/
    color: var(--white);
    width: 18px;
    height: 18px;
  }

  &__control {
    width: 28px;
    height: 28px;
    border: 1px solid var(--grey-2);
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-family: 'Inter', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: var(--grey-4);
  }

  &__input:checked ~ &__state &__control {
    border-color: var(--primary);
  }

  &__input:checked ~ &__state &__icon {
    color: var(--primary);
  }

  &_disabled {
    pointer-events: none;
  }

  &__input:disabled ~ &__state &__icon {
    color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__control {
    pointer-events: none;
    background: var(--grey-2);
    border-color: var(--grey-2);
  }

  &__input:disabled ~ &__state &__title {
    color: var(--grey-2);
  }

  input[type='radio'] {
    -webkit-appearance: none;
  }
}`;
