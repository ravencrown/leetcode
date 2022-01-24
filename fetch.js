const mockFetchFailed = () => new Promise((_resolve, reject) => {
  setTimeout(reject, 1 * Math.random() * 1000);
});

const sleep = (seconds = 0) => new Promise((resolve) => {
  setTimeout(resolve, seconds * 1000);
});

const fetchWithRetry = (maxRetryTimes = 3) => {
  const fetcher = async (retryTime = 0) => {
      try {
          return await mockFetchFailed();
          // return await fetch();
      } catch {
          if (retryTime < maxRetryTimes) {
              console.log(`retry ${retryTime + 1} time`, new Date());
              await sleep(3);
              return await fetcher(retryTime + 1);
          }
          throw new Error('reach retry limit');
      }
  };

  return fetcher;
};

const sleep = (second = 0) => new Promise((resolve, reject) => {
  setTimeout(resolve, second * 1000)
})

const fetchWithRetry = (maxRetryTimes = 3) => {
  const fetcher = async (retryTime = 0) => {
    try {
      return await fetch()
    } catch {
      if (retryTime < maxRetryTimes) {
        await sleep(3)
        return await fetcher(retryTime + 1)
      }
      throw new Error('reach retry limit')
    }
  }
  return fetcher
}

(async() => {
  try {
      const maxRetryTimes = 3;
      const fetch = fetchWithRetry(maxRetryTimes);
      const res = await fetch();
      console.log(res)
  } catch(ex) {
      console.error(ex)
  }
})();