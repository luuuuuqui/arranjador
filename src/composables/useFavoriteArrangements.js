export const FAVORITE_ARRANGEMENTS_STORAGE_KEY = "favorite_arrangements";

const normalizeArrangementIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }

  const seen = new Set();
  const normalizedIds = [];

  ids.forEach((id) => {
    if (!Number.isInteger(id) || id <= 0 || seen.has(id)) {
      return;
    }

    seen.add(id);
    normalizedIds.push(id);
  });

  return normalizedIds;
};

export const readFavoriteArrangementIds = () => {
  try {
    const rawValue = localStorage.getItem(FAVORITE_ARRANGEMENTS_STORAGE_KEY);

    if (!rawValue) {
      return [];
    }

    const parsedValue = JSON.parse(rawValue);
    return normalizeArrangementIds(parsedValue);
  } catch {
    return [];
  }
};

export const writeFavoriteArrangementIds = (ids) => {
  const normalizedIds = normalizeArrangementIds(ids);

  localStorage.setItem(
    FAVORITE_ARRANGEMENTS_STORAGE_KEY,
    JSON.stringify(normalizedIds),
  );
};

export const isFavoriteArrangement = (id) => {
  if (!Number.isInteger(id) || id <= 0) {
    return false;
  }

  return readFavoriteArrangementIds().includes(id);
};

export const toggleFavoriteArrangement = (id) => {
  if (!Number.isInteger(id) || id <= 0) {
    return readFavoriteArrangementIds();
  }

  const favoriteIds = readFavoriteArrangementIds();
  const isAlreadyFavorite = favoriteIds.includes(id);
  const nextFavoriteIds = isAlreadyFavorite
    ? favoriteIds.filter((favoriteId) => favoriteId !== id)
    : [...favoriteIds, id];

  writeFavoriteArrangementIds(nextFavoriteIds);
  return nextFavoriteIds;
};
