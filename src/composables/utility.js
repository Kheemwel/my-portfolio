export function openLink(link, newTab = true) {
  const target = newTab ? '_blank' : '_self'
  window.open(link, target)
}

export function parseJSONArray(jsonArray) {
  return jsonArray.map((json) => JSON.parse(json))
}

export function formatDate(dateString) {
  const date = new Date(dateString)

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date format. Expected format: 'YYYY-MM-DD'.")
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}
