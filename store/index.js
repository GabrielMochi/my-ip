export const state = () => ({
  ip: null,
  advice: null
})

export const mutations = {
  setIp(state, ip) {
    state.ip = ip
  },
  setAdvice(state, advice) {
    state.advice = advice
  }
}
