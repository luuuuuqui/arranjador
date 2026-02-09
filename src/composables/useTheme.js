import { onMounted, onUnmounted, ref } from "vue";

const STORAGE_KEY = "darkmode";
const DARK_MODE = "enabled";
const LIGHT_MODE = "disabled";

const prefersDarkQuery = () => window.matchMedia("(prefers-color-scheme: dark)");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  document.body.classList.remove("lightmode");
  localStorage.setItem(STORAGE_KEY, DARK_MODE);
};

const disableDarkMode = () => {
  document.body.classList.add("lightmode");
  document.body.classList.remove("darkmode");
  localStorage.setItem(STORAGE_KEY, LIGHT_MODE);
};

const applySystemTheme = (eventOrMediaQuery) => {
  if (localStorage.getItem(STORAGE_KEY) !== null) {
    return;
  }

  if (eventOrMediaQuery.matches) {
    enableDarkMode();
    return;
  }

  disableDarkMode();
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === DARK_MODE) {
    enableDarkMode();
    return;
  }

  if (savedTheme === LIGHT_MODE) {
    disableDarkMode();
    return;
  }

  applySystemTheme(prefersDarkQuery());
};

export const useTheme = () => {
  const isDarkMode = ref(false);

  const updateThemeState = () => {
    isDarkMode.value = document.body.classList.contains("darkmode");
  };

  const toggleTheme = () => {
    isDarkMode.value ? disableDarkMode() : enableDarkMode();
    updateThemeState();
  };

  let mediaQuery;
  let handleThemeChange;

  onMounted(() => {
    initializeTheme();
    updateThemeState();

    mediaQuery = prefersDarkQuery();
    handleThemeChange = (event) => {
      applySystemTheme(event);
      updateThemeState();
    };

    mediaQuery.addEventListener("change", handleThemeChange);
  });

  onUnmounted(() => {
    mediaQuery?.removeEventListener("change", handleThemeChange);
  });

  return {
    isDarkMode,
    toggleTheme,
  };
};

export const applyThemeOnLoad = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === DARK_MODE) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    return;
  }

  if (savedTheme === LIGHT_MODE) {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
    return;
  }

  if (prefersDarkQuery().matches) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    return;
  }

  document.body.classList.add("lightmode");
  document.body.classList.remove("darkmode");
};
