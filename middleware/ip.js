export default function ({ req, store }) {
  const xForwardedFor = req.headers['x-forwarded-for']

  console.log(xForwardedFor)

  const ip = Array.isArray(xForwardedFor)
    ? xForwardedFor.split(',').pop()
    : req.connection.remoteAddress

  store.commit('setIp', ip)
}
