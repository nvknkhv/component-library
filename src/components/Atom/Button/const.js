export const html = `<button class="button button_primary button_disabled">Primary disabled</button>`;

export const scss = `.button {
  padding: 1rem 3rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-family: Roboto;
  font-size: 1rem;
  box-sizing: border-box;

  &_primary {
    color: var(--white);
    background-color: var(--primary);

    &:hover {
      color: var(--white);
      background-color: var(--primary-dark);
    }
  }

  &_disabled {
    opacity: 0.5;
    cursor: none;
    pointer-events: none;
  }

  &_secondary {
    color: var(--white);
    background-color: var(--secondary);

    &:hover {
      color: var(--white);
      background-color: var(--secondary-dark);
    }
  }

  &_alt {
    color: var(--primary);
    background-color: var(--white);
    border: 1px solid var(--primary);

    &:hover {
      color: var(--primary-dark);
      border: 1px solid var(--primary-dark);
    }
  }
}`;
