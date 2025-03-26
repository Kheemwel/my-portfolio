export type ConfigValue = string | number | boolean | string[];

export type ConfigMap = Record<string, ConfigValue>;

export function getConfigValue<T extends ConfigValue>(config: ConfigMap, key: string, defaultValue: T): T {
  return (config[key] as T) ?? defaultValue;
}
