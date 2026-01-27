<template>
  <header id="header">
    <div id="header-container">
      <router-link to="/" class="logo-link">
        <h1 class="logo">Kwwala</h1>
        <svg class="wave-underline" viewBox="0 0 1000 10" preserveAspectRatio="none">
          <path d="M0,5 Q50,0 100,5 T200,5 T300,5 T400,5 T500,5 T600,5 T700,5 T800,5 T900,5 T1000,5" 
                stroke="var(--primary)" 
                stroke-width="3" 
                fill="none"
                stroke-linecap="round"/>
        </svg>
      </router-link>

      <nav id="headernav">
        <router-link to="/" class="nav-link" exact>Início</router-link>
        <router-link to="/arrangements" class="nav-link">Arranjos</router-link>
        <router-link to="/about" class="nav-link">Sobre</router-link>
        <router-link to="/contact" class="nav-link">Contato</router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
#header {
  width: 100%;
  height: 120px;
  background-color: var(--background);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 40px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

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
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 10px;
        clip-path: inset(0 100% 0 0);
        transition: clip-path 1s cubic-bezier(.5,0,0,1);
      }

      &:hover .wave-underline {
        clip-path: inset(0 0 0 0);
        transition: clip-path .5s cubic-bezier(.1,0,0,1);
      }
    }

    .logo {
      font-size: 48px;
      font-weight: 700;
      color: var(--text);
      margin: 0;
      font-family: "Geologica", sans-serif;
      transition: color 0.5s ease;

      &:hover {
        transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--primary);
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
        transition: color 0.3s ease;
        font-family: "Geologica", sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.5px;

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.3s ease;
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

#headernav:hover .nav-link.router-link-active:not(:hover),
#headernav:hover .nav-link.router-link-exact-active:not(:hover) {
  color: color-mix(in srgb, var(--primary), var(--secondary)) !important; 
}
</style>