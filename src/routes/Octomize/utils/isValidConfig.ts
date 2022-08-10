export function isValidConfig(config: Record<string, any>, requiredFields: Array<string>): boolean {
  let isValid = true
  requiredFields.forEach((field) => {
    if (!config[field]) {
      isValid = false
    }
  })

  return isValid
}