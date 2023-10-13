//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  return (...args) => {
    const hash = md5(args);

    const searchInCache = cache.find((el) => el[hash]);

    if (searchInCache) {
      return `Из кеша: ${searchInCache.result}`;
    } else {
      const result = func(...args);
      cache.push({ [hash]: hash, result });
      cache = cache.splice(-5);
      return `Вычисляем: ${result}`;
    }
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeout;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    if (!timeout) {
      func.apply(this, args);
      wrapper.count++;
    }

    clearTimeout(timeout);
    wrapper.allCount++;

    timeout = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, delay);
  }

  return wrapper;
}

