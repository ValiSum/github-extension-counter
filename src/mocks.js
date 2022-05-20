export const getFakeExtensionsData = () =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve({
          md: 187,
          js: 32,
          json: 2,
          config: 2,
          lock: 1,
          woff: 2,
          woff2: 2,
          scss: 3,
          png: 11,
          svg: 209,
          mdx: 4,
          gif: 1,
          mx: 187,
          rs: 32,
          jsonq: 2,
          config2: 2,
          lock1: 1,
          woffsd: 2,
        }),
      2000
    )
  })
