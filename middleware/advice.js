import axios from 'axios'

export default async function ({ store }) {
  try {
    const { data: { slip: { advice } } } = await axios.get('https://api.adviceslip.com/advice')
    store.commit('setAdvice', advice)
  } catch (err) {
    console.error('Error while getting advice API: ', err)
  }
}
