import type { ConfigMap } from '@/composables/config'
import type { ConfigRepository } from '@/domain/repositories/i-config-repository'
import { supabase } from '../services/supabase-client'
import { parseValue } from '@/composables/utility'

export class ConfigRepositoryImpl implements ConfigRepository {
  async fetchConfig(): Promise<ConfigMap> {
    const { data, error } = await supabase
      .from('config')
      .select('key, value, type')

    if (error) {
      throw new Error(error.message)
    }

    const configMap: ConfigMap = {}

    data.forEach(({ key, value, type }) => configMap[key] = parseValue(value, type))

    return configMap as ConfigMap
  }
}
