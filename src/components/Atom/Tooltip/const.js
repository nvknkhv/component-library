export const html = `<div class="tooltip">
  <svg class="tooltip__icon">
    <use href="sprite.svg#help" />
  </svg>
  <div class="tooltip__bubble">Helper Text</div>
</div>`;

export const scss = `.tooltip {
  display: inline-block;
  position: relative;

  &__icon {
    cursor: pointer;
    width: 24px;
    height: 24px;
    color: var(--primary);
  }

  &__bubble {
    background-color: var(--primary);
    box-shadow: 0px 2px 4px rgba(33, 36, 41, 0.05);
    border-radius: 10px;
    padding: 1rem 1.5rem;
    font-family: Inter;
    font-size: 1rem;
    line-height: 1.5rem;
    white-space: nowrap;
    color: var(--white);
    position: absolute;
    bottom: calc(100% + 1rem);
    left: 50%;
    transform: translateX(-50%);
    display: none;
    transition: opacity 0.2s linear, transform 0.1s linear;
  }

  &__bubble::after {
    content: '';
    border: 16px solid transparent;
    border-top: 8px solid var(--primary);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover &__bubble {
    display: block;
  }
}`;
