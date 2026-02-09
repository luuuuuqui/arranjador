<template>
  <header id="header" :class="{ 'header--blur': blur }">
    <div id="header-container">
      <router-link to="/" class="logo-link">
        <h1 class="logo">Kwwala</h1>
        <svg class="wave-underline" viewBox="0 0 1000 10" preserveAspectRatio="none">
          <path
            d="M0,5 Q50,0 100,5 T200,5 T300,5 T400,5 T500,5 T600,5 T700,5 T800,5 T900,5 T1000,5"
            stroke="var(--accent)"
            stroke-width="3"
            fill="none"
            stroke-linecap="round"
          />
        </svg>
      </router-link>

      <div class="header-actions">
        <nav id="headernav">
          <router-link to="/" class="nav-link" exact>Início</router-link>
          <router-link to="/arrangements" class="nav-link">Arranjos</router-link>
          <router-link to="/about" class="nav-link">Sobre</router-link>
          <router-link to="/contact" class="nav-link">Contato</router-link>
        </nav>

        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from "./ThemeToggle.vue";

defineProps({
  blur: {
    type: Boolean,
    default: false,
  },
});

</script>

<style scoped>
#header {
  width: 100%;
  height: 120px;
  background-color: var(--background);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  transition:
    transform var(--transition-base) var(--transition-ease),
    background-color var(--transition-base) var(--transition-ease),
    box-shadow var(--transition-base) var(--transition-ease),
    border-color var(--transition-base) var(--transition-ease);
  box-shadow: 0 4px 20px var(--shadow);

  #header-container {
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
    }

    .logo-link {
      position: relative;

      .wave-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10px;
        clip-path: inset(0 100% 0 0);
        transition: clip-path var(--transition-base) var(--transition-ease);
      }

      &:hover .wave-underline {
        clip-path: inset(0 0 0 0);
        transition: clip-path var(--transition-fast) var(--transition-ease);
      }
    }

    .logo {
      font-size: 48px;
      font-weight: 700;
      color: var(--text);
      margin: 0;
      font-family: "Geologica", sans-serif;
      transition: color var(--transition-base) var(--transition-ease);

      &:hover {
        color: var(--accent);
      }
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;

    }

    #headernav {
      display: flex;
      gap: 40px;

      .nav-link {
        position: relative;
        font-size: 16px;
        font-weight: 400;
        color: var(--text);
        text-decoration: none;
        transition:
          color var(--transition-fast) var(--transition-ease),
          transform var(--transition-fast) var(--transition-ease);
        font-family: "Geologica", sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        &::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: width var(--transition-fast) var(--transition-ease);
        }

        &.router-link-active,
        &.router-link-exact-active {
          color: var(--primary);
        }

        &:hover {
          color: var(--accent);

          &::after {
            width: 100%;
          }
        }
      }
    }
  }
}

#header.header--blur {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  background: color-mix(in srgb, var(--background) 60%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px var(--shadow);
  border-bottom: 1px solid var(--header-border);

  #header-container .header-actions {
    gap: 40px;
  }

  #header-container #headernav .nav-link.router-link-active,
  #header-container #headernav .nav-link.router-link-exact-active {
    font-weight: 500;
  }
}

#headernav:hover .nav-link.router-link-active:not(:hover),
#headernav:hover .nav-link.router-link-exact-active:not(:hover) {
  color: var(--muted-text) !important;
}

#headernav:hover .nav-link:not(:hover) {
  color: var(--muted-text);
}
</style>
