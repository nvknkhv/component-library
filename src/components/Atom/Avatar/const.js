export const html = `<div class="avatar avatar_preview">
  <img class="avatar__icon" src="public/avatar-200.jpg" alt="avatar" />
</div>`;

export const scss = `.avatar {
  width: 100%;
  height: 100%;

  &__icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    background-color: var(--grey-2);
  }

  &_preview {
    width: 200px;
    height: 200px;
  }
}`;
