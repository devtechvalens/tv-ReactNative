export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: {}
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: {}
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = {}
    const skellockData = {}
    return {
      ok: true,
      data: {}
    }
  }
}
