import { TYPES } from '@/composables/types'
import { container } from '@/inversify.config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  const loading = ref(false)
  const error = ref(null)
  const email = ref('')
  const contactNumber = ref('')
  const linkedin = ref('')
  const github = ref('')
  const facebook = ref('')
  const instagram = ref('')

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      const usecase = container.get(TYPES.FetchContactsUseCase)
      const data = await usecase.execute()
      email.value = data.email
      contactNumber.value = data.contact_number
      linkedin.value = data.linkedin
      github.value = data.github
      facebook.value = data.facebook
      instagram.value = data.instagram
    } catch (err) {
      error.value = 'Failed to fetch contact details.'
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
