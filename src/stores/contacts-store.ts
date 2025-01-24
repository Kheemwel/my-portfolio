import type { FetchContactsUseCase } from '@/application/usecases/about_usecases/fetch-contacts-usecase'
import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const email = ref('')
  const contactNumber = ref('')
  const linkedin = ref<string | null>('')
  const github = ref<string | null>('')
  const facebook = ref<string | null>('')
  const instagram = ref<string | null>('')

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get<FetchContactsUseCase>(TYPES.FetchContactsUseCase)
      const data = await usecase.execute()
      email.value = data.email
      contactNumber.value = data.contact_number
      linkedin.value = data.linkedin
      github.value = data.github
      facebook.value = data.facebook
      instagram.value = data.instagram
    } catch (err) {
      if (err instanceof Error) {
        error.value = err.message
      } else {
        error.value = 'Failed to fetch contact details.'
      }
    } finally {
      loading.value = false
    }
  }

  fetchData()

  return {
    loading,
    error,
    email,
    contactNumber,
    linkedin,
    github,
    facebook,
    instagram
  }
})
