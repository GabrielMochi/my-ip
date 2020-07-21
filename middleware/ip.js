export default function ({ req, store }) {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
  store.commit('setIp', ip)
}
