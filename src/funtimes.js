export const randomName = (botId) => {
  // very actually random yes
  switch (botId % 3) {
    case 0:
      return "Michael"
    case 1:
      return "Jordan"
    case 2:
      return "Morgan"
    default:
      return ""
  }
}