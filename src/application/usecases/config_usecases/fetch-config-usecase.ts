import type { ConfigMap } from "@/composables/config"
import { TYPES } from "@/composables/types"
import type { ConfigRepository } from "@/domain/repositories/i-config-repository"
import { inject, injectable } from "inversify"

@injectable()
export class FetchConfigUseCase {
  private configRepository: ConfigRepository
  constructor(@inject(TYPES.ConfigRepository) configRepository: ConfigRepository) {
    this.configRepository = configRepository
  }

  async execute(): Promise<ConfigMap> {
    const data = await this.configRepository.fetchConfig()
    return data
  }
}
