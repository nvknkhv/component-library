export const html = `<div class="input-group input-group_success">
  <label class="input-group__title">Success</label>
  <div class="input-group__body">
    <input type="text" class="input-group__input" placeholder="Placeholder" />
    <div class="input-group__control">
      <div class="input-group__icon"></div>
    </div>
  </div>
</div>`;

export const scss = `.input-group {
  &__title {
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1rem;
    letter-spacing: 0.04em;
    color: var(--grey-3);
    text-transform: uppercase;
  }

  &__title + &__body {
    margin-top: 8px;
  }

  &__body {
    position: relative;
  }

  &__input {
    width: 100%;
    height: 56px;
    padding-left: 24px;
    padding-right: 56px;
    border: 1px solid var(--grey-2);
    box-sizing: border-box;
    outline: none;
    border-radius: 8px;

    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    color: var(--grey-4);
  }

  &__input::placeholder {
    color: var(--grey-2);
  }

  &__control {
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    top: 0;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }

  &__input:focus {
    border-color: var(--primary);
  }

  &_success &__input:focus {
    border-color: var(--success);
  }

  &_invalid &__icon {
    background-image: url('../../../assets/images/alert.svg');
  }

  &_invalid &__input:focus {
    border-color: var(--error);
  }

  &_success &__icon {
    background-image: url('../../../assets/images/success.svg');
  }

  &_disabled &__input {
    pointer-events: none;
    background-color: var(--grey-1);
  }
}`;
