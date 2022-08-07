export class BaseEntity {
  public toJson(): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(this)
        .filter(([key]) => key.charAt(0) === '_')
        .map(([key, value]) => {
          const newKey = key.substr(1)

          if (BaseEntity.isEntity(value)) {
            let returnValue: Record<string, unknown> | undefined
            // TODO: need to figure out how to avoid infinite loop here
            // returnValue = value.toJson()

            return [newKey, returnValue]
          }
          else if (Array.isArray(value)) {
            return [
              newKey,
              value.map((arrayItem) => {
                if (BaseEntity.isEntity(arrayItem)) {
                  return arrayItem.toJson()
                }
                return arrayItem
              }),
            ]
          }
          return [newKey, value]
        }),
    )
  }

  public toJsonString(): string {
    return JSON.stringify(this.toJson())
  }

  static isEntity(item: unknown): item is BaseEntity {
    return typeof item === 'object' && item instanceof BaseEntity
  }

  // [k: string]: unknown
}
