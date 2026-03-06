export const EMAIL_VALIDATION_MESSAGE = 'Format email tidak valid. Pastikan email mengandung tanda @ dan domain yang benar'
export const INDONESIAN_PHONE_VALIDATION_MESSAGE = 'Nomor telepon harus menggunakan format +62, misalnya +62812xxxxxx'
export const LOGIN_PHONE_VALIDATION_MESSAGE = 'Nomor login tidak boleh diawali 0. Karena kode +62 sudah terisi, masukkan nomor seperti 812xxxxxx'

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

export function normalizeIndonesianPhoneNumber(phoneNumber: string) {
  const normalized = phoneNumber.replace(/[^\d+]/g, '').trim()

  if (!normalized) {
    return ''
  }

  if (normalized.startsWith('+62')) {
    return `+62${normalized.slice(3).replace(/\D/g, '')}`
  }

  const digitsOnly = normalized.replace(/\D/g, '')

  if (digitsOnly.startsWith('62')) {
    return `+${digitsOnly}`
  }

  if (digitsOnly.startsWith('0')) {
    return `+62${digitsOnly.slice(1)}`
  }

  if (digitsOnly.startsWith('8')) {
    return `+62${digitsOnly}`
  }

  return ''
}

export function isValidIndonesianPhoneNumber(phoneNumber: string) {
  return /^\+628\d{6,13}$/.test(normalizeIndonesianPhoneNumber(phoneNumber))
}

export function normalizeLoginPhoneNumber(phoneNumber: string, countryCode = '+62') {
  const digitsOnly = phoneNumber.replace(/\D/g, '')

  if (!digitsOnly || digitsOnly.startsWith('0') || digitsOnly.startsWith('62')) {
    return ''
  }

  return `${countryCode}${digitsOnly}`
}