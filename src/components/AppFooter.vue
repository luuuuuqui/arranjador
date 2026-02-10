<template>
  <footer class="appFooter">
    <div class="footerInner">
      <section class="footerBlock">
        <h2 class="footerTitle">Companhia</h2>
        <nav class="footerNav" aria-label="Links do site">
          <router-link class="footerLink" to="/">Inicio</router-link>
          <router-link class="footerLink" to="/arranjos">Arranjos</router-link>
          <router-link class="footerLink" to="/sobre">Sobre</router-link>
          <router-link class="footerLink" to="/contato">Contato</router-link>
        </nav>
      </section>

      <section class="footerBlock footerBlockRight">
        <h2 class="footerTitle">Contato</h2>
        <ul class="footerContactList">
          <li class="footerContactItem">
            <span class="footerContactIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M12 2a8 8 0 0 0-8 8c0 5.47 6.53 11.35 7.15 11.9a1.27 1.27 0 0 0 1.7 0C13.47 21.35 20 15.47 20 10a8 8 0 0 0-8-8Zm0 10.75A2.75 2.75 0 1 1 14.75 10 2.75 2.75 0 0 1 12 12.75Z"
                />
              </svg>
            </span>
            <span>Natal, RN - Brasil</span>
          </li>

          <li class="footerContactItem">
            <span class="footerContactIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M17.48 14.38a15.23 15.23 0 0 1-4.74-4.74l2.08-2.09a1.5 1.5 0 0 0 .36-1.53l-1.53-4A1.5 1.5 0 0 0 12.25 1H8.5A1.5 1.5 0 0 0 7 2.5 19.5 19.5 0 0 0 21.5 17a1.5 1.5 0 0 0 1.5-1.5v-3.75a1.5 1.5 0 0 0-1.02-1.4l-4-1.53a1.5 1.5 0 0 0-1.53.36Z"
                />
              </svg>
            </span>
            <a href="tel:+5584987654321">+55 84 99999-9999</a>
          </li>

          <li class="footerContactItem">
            <span class="footerContactIcon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 3.2L12.6 12a1 1 0 0 1-1.2 0L4 7.2V6l8 4.8L20 6v1.2Z"
                />
              </svg>
            </span>
            <a href="mailto:contato@lucasduarte.com">contatokwwala@gmail.com</a>
          </li>
        </ul>
      </section>
    </div>

    <div class="footerCopyright">
      <p>&copy; {{ currentYear }} Kwwala por Lucas Duarte - Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.appFooter {
  margin-top: 40px;
  padding: 40px 40px 20px;
  border-top: 1px solid var(--tone-10);
  background:
    radial-gradient(circle at top left, color-mix(in srgb, var(--secondary) 10%, transparent), transparent 45%),
    radial-gradient(circle at top right, color-mix(in srgb, var(--primary) 10%, transparent), transparent 40%),
    var(--background);

  .footerInner {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 96px;
  }

  .footerBlock {
    flex: 0 1 420px;
    min-width: 260px;
    text-align: left;
  }

  .footerBlockRight {
    text-align: right;

    .footerContactItem {
      padding-right: 12px;
    }
  }

  .footerTitle {
    font-size: 2.2rem;
    color: var(--primary);
    margin: 0 0 20px;
  }

  .footerNav {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: fit-content;

    &:hover .footerLink.router-link-active:not(:hover),
    &:hover .footerLink.router-link-exact-active:not(:hover),
    &:hover .footerLink:not(:hover) {
      color: var(--muted-text);
    }
  }

  .footerLink {
    position: relative;
    color: var(--text);
    text-decoration: none;
    font-size: 1.05rem;
    padding-left: 12px;
    transition:
      color var(--transition-fast) var(--transition-ease),
      transform var(--transition-fast) var(--transition-ease);

    &::after {
      content: "";
      position: absolute;
      left: 12px;
      bottom: -4px;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width var(--transition-fast) var(--transition-ease);
    }

    &:hover::after {
      width: calc(100% - 12px);
    }

    &.router-link-active,
    &.router-link-exact-active {
      color: var(--primary);
    }

    &.router-link-active:hover,
    &.router-link-exact-active:hover {
      color: var(--accent);
    }
  }

  .footerContactList {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }

  .footerContactItem {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-left: 0;
    color: var(--text);

    a {
      position: relative;
      color: inherit;
      text-decoration: none;
      transition: color var(--transition-fast) var(--transition-ease);

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 0;
        height: 2px;
        background: var(--accent);
        transition: width var(--transition-fast) var(--transition-ease);
      }

      &:hover {
        color: var(--accent);
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .footerContactIcon {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);

    svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  .footerCopyright {
    width: 100%;
    max-width: 1920px;
    margin: 40px auto 0;
    padding-top: 18px;
    border-top: 1px solid var(--tone-10);

    p {
      margin: 0;
      text-align: center;
      color: var(--muted-text);
      font-size: 0.95rem;
    }
  }
}

@media (max-width: 920px) {
  .appFooter {
    padding: 48px 20px 20px;

    .footerInner {
      flex-direction: column;
      gap: 36px;
    }

    .footerBlock {
      flex: 1;
      text-align: center;
    }

    .footerBlockRight {
      text-align: center;
    }

    .footerTitle {
      font-size: 1.85rem;
    }

    .footerNav {
      align-items: center;
      margin: 0 auto;
    }

    .footerContactItem {
      padding-right: 0;
      justify-content: center;
    }

    .footerContactList {
      align-items: center;
    }
  }
}
</style>
