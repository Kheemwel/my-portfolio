import type { ConfigMap } from "@/composables/config";

export interface ConfigRepository {
  fetchConfig(): Promise<ConfigMap>
}
