export const upperCase = function (name = '') {
  if (!name) return '';

  return name.toLowerCase().replace(/( |^)[a-z]/g, (l) => l.toUpperCase());
};

export const upgradeName = function (names = []) {
  if (names.length === 0) return '';

  return names.split('-').map((n) => upperCase(n)).join('');
};

export const contextMerge = function (modules) {
  if (!modules) {
    return {};
  }

  let mods = {};
  const modulePaths = Object.keys(modules).filter(() => true);
  modulePaths.forEach((item) => {
    const names = item.split('/')[1];
    const upperName = upgradeName(names);

    console.log('item', item);
    const mod = modules[item].default;

    mods = { ...mods, [upperName]: mod };
  });

  return mods;
};
