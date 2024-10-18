export function openLink(link, newTab = true) {
    const target = newTab ? '_blank' : '_self'
    window.open(link, target)
}