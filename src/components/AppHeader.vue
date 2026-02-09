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

        <button
          id="theme-switch"
          :class="{ 'is-dark': isDarkMode }"
          type="button"
          :aria-label="isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'"
          @click="toggleTheme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" aria-hidden="true">
            <path
              d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" aria-hidden="true">
            <path
              d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";

defineProps({
  blur: {
    type: Boolean,
    default: false,
  },
});

const { isDarkMode, toggleTheme } = useTheme();
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

      #theme-switch {
        height: 40px;
        width: 40px;
        padding: 4px;
        border: none;
        border-radius: 50%;
        background-color: var(--btn-bg);
        box-shadow: 0 3px 12px var(--shadow);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition:
          background-color var(--transition-base) var(--transition-ease),
          box-shadow var(--transition-base) var(--transition-ease),
          transform var(--transition-fast) var(--transition-ease);

        &:hover {
          background: var(--accent);
          box-shadow: 0 6px 18px var(--shadow);
          transform: translateY(-1px);
        }

        svg {
          fill: var(--text);
          transition: fill var(--transition-base) var(--transition-ease);
        }

        svg:first-child {
          display: inline;
        }

        svg:last-child {
          display: none;
        }

        &.is-dark {
          svg:first-child {
            display: none;
          }

          svg:last-child {
            display: inline;
          }
        }
      }
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
