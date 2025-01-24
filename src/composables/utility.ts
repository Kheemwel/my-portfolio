export function openLink(link: string, newTab = true) {
  const target = newTab ? '_blank' : '_self'
  window.open(link, target)
}

export function parseJSONArray<T>(jsonArray: string[]): T[] {
  return jsonArray.map((json: string) => JSON.parse(json) as T)
}

export function formatDate(dateString: string): string {
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
