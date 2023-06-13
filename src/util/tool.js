export const refresh = data => {
  data.value = false
  setTimeout(() => {
    data.value = true
  }, 300)
}
