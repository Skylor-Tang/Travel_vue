export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
      console.log('mutations')
    } catch (e) {}
  }
}
