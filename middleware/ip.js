export default function ({ req, store }) {
  const ip = req.connection.remoteAddress || req.socket.remoteAddress
  store.commit('setIp', ip)
}
