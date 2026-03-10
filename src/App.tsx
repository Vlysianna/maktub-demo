import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { HomeGuestScreen } from './features/onboarding/onboarding/components/HomeGuestScreen'
import { LayananLainScreen } from './features/onboarding/onboarding/components/LayananLainScreen'
import { RekomendasiPaketScreen } from './features/onboarding/onboarding/components/RekomendasiPaketScreen'
import { UmrahArrivalReturnScreen } from './features/onboarding/onboarding/components/UmrahArrivalReturnScreen'
import { UmrahBudgetScreen } from './features/onboarding/onboarding/components/UmrahBudgetScreen'
import { UmrahDepartureScreen } from './features/onboarding/onboarding/components/UmrahDepartureScreen'
import { UmrahFlightScreen } from './features/onboarding/onboarding/components/UmrahFlightScreen'
import { UmrahFlightDetailScreen } from './features/onboarding/onboarding/components/UmrahFlightDetailScreen'
import { UmrahFlightSearchScreen } from './features/onboarding/onboarding/components/UmrahFlightSearchScreen'
import { UmrahPassengerCameraScreen } from './features/onboarding/onboarding/components/UmrahPassengerCameraScreen'
import { UmrahPassengerFormScreen } from './features/onboarding/onboarding/components/UmrahPassengerFormScreen'
import { UmrahProcessingScreen } from './features/onboarding/onboarding/components/UmrahProcessingScreen'
import { UmrahHotelDetailScreen } from './features/onboarding/onboarding/components/UmrahHotelDetailScreen'
import { UmrahHotelSearchScreen } from './features/onboarding/onboarding/components/UmrahHotelSearchScreen'
import { UmrahHotelScreen } from './features/onboarding/onboarding/components/UmrahHotelScreen'
import { UmrahHotelTicketInfoScreen } from './features/onboarding/onboarding/components/UmrahHotelTicketInfoScreen'
import { UmrahPaymentMethodScreen } from './features/onboarding/onboarding/components/UmrahPaymentMethodScreen'
import { UmrahPaymentCompleteScreen } from './features/onboarding/onboarding/components/UmrahPaymentCompleteScreen'
import { UmrahPaymentOverviewScreen } from './features/onboarding/onboarding/components/UmrahPaymentOverviewScreen'
import { UmrahPaymentPendingScreen } from './features/onboarding/onboarding/components/UmrahPaymentPendingScreen'
import { UmrahPaymentSuccessScreen } from './features/onboarding/onboarding/components/UmrahPaymentSuccessScreen'
import { SplashScreen } from './features/onboarding/onboarding/components/SplashScreen'
import { UmrahQuestionScreen } from './features/onboarding/onboarding/components/UmrahQuestionScreen'
import { UmrahTicketInfoScreen } from './features/onboarding/onboarding/components/UmrahTicketInfoScreen'
import { UmrahTravelerScreen } from './features/onboarding/onboarding/components/UmrahTravelerScreen'
import { UmrahVisaFormDocsScreen } from './features/onboarding/onboarding/components/UmrahVisaFormDocsScreen'
import { UmrahVisaFormPersonalScreen } from './features/onboarding/onboarding/components/UmrahVisaFormPersonalScreen'
import { UmrahVisaServicesScreen } from './features/onboarding/onboarding/components/UmrahVisaServicesScreen'
import { WalkthroughScreen } from './features/onboarding/onboarding/components/WalkthroughScreen'
import { MyBookingScreen } from './features/onboarding/onboarding/components/MyBookingScreen'
import { MyBookingDetailScreen } from './features/onboarding/onboarding/components/MyBookingDetailScreen'
import { MyBookingItineraryScreen } from './features/onboarding/onboarding/components/MyBookingItineraryScreen'
import { MyBookingItineraryEditScreen } from './features/onboarding/onboarding/components/MyBookingItineraryEditScreen'
import { InformasiScreen } from './features/onboarding/onboarding/components/InformasiScreen'
import { InformasiDetailScreen } from './features/onboarding/onboarding/components/InformasiDetailScreen'
import { HomeBannerDetailScreen } from './features/onboarding/onboarding/components/HomeBannerDetailScreen'
import { ArahKiblatJadwalScreen } from './features/onboarding/onboarding/components/ArahKiblatJadwalScreen'
import { PanduanUmrahScreen } from './features/onboarding/onboarding/components/PanduanUmrahScreen'
import { DoaUmrahScreen } from './features/onboarding/onboarding/components/DoaUmrahScreen'
import { DzikirHarianScreen } from './features/onboarding/onboarding/components/DzikirHarianScreen'
import { DoaHarianScreen } from './features/onboarding/onboarding/components/DoaHarianScreen'
import { TataCaraSholatScreen } from './features/onboarding/onboarding/components/TataCaraSholatScreen'
import { DzikirHarianDetailScreen } from './features/onboarding/onboarding/components/DzikirHarianDetailScreen'
import { DoaUmrahDetailScreen } from './features/onboarding/onboarding/components/DoaUmrahDetailScreen'
import { TataCaraSholatDetailScreen } from './features/onboarding/onboarding/components/TataCaraSholatDetailScreen'
import { NotifikasiScreen } from './features/onboarding/onboarding/components/NotifikasiScreen'
import { LoginGuestScreen } from './features/onboarding/onboarding/components/LoginGuestScreen'
import { LoginNameScreen } from './features/onboarding/onboarding/components/LoginNameScreen'
import { ProfileScreen } from './features/onboarding/onboarding/components/ProfileScreen'
import { ProfileSettingsScreen } from './features/onboarding/onboarding/components/ProfileSettingsScreen'
import { ChatAssistantScreen } from './features/onboarding/onboarding/components/ChatAssistantScreen'
import {
  articles,
  budgetOptions,
  cityAirportCodeMap,
  cityOptions,
  departureAirportOptions,
  flightOfferTemplate,
  hotelDetailTemplate,
  hotelOfferTemplate,
  homeAssets,
  homeBannerDetailContent,
  layananLainAssets,
  rekomendasiPaketAssets,
  rekomendasiPaketItems,
  services,
  splashLogo,
  umrahArrivalReturnAssets,
  umrahFlightAssets,
  umrahFlightSearchAssets,
  umrahHotelAssets,
  umrahHotelSearchAssets,
  umrahPaymentAssets,
  umrahCompletionAssets,
  umrahBudgetAssets,
  umrahDepartureAssets,
  umrahProcessingAssets,
  umrahQuestionAssets,
  umrahTicketAssets,
  umrahTravelerAssets,
  walkthroughSlides,
  onboardingConfig,
  myBookingAssets,
  myBookingDetailAssets,
  itinerarySuggestionGroups,
  informasiContent,
  informasiDetailContent,
  kiblatScheduleContent,
  panduanUmrahContent,
  doaUmrahContent,
  dzikirHarianContent,
  dzikirHarianDetailById,
  doaHarianContent,
  doaUmrahDetailById,
  tataCaraSholatContent,
  tataCaraSholatDetailById,
  loginGuestAssets,
  loginGuestContent,
  loginNameAssets,
  loginNameContent,
  notifikasiAssets,
  notificationItems,
  profileData,
} from './features/onboarding/onboarding/data'
import type {
  BookingDetail,
  BookingItem,
  BookingStatus,
  ItineraryDay,
  PassengerFormData,
  PaymentBreakdown,
  PaymentMethod,
  Screen,
  TicketFareOption,
  VisaPackageId,
} from './features/onboarding/onboarding/types'
import {
  isValidEmail,
  normalizeIndonesianPhoneNumber,
} from './features/onboarding/onboarding/utils/validation'

const budgetProfiles: Record<
  string,
  { ticketPerPersonMin: number; ticketPerPersonMax: number; returnTicketDelta: number; hotelMultiplier: number }
> = {
  'Kurang dari 25.000.000': {
    ticketPerPersonMin: 5_400_000,
    ticketPerPersonMax: 8_500_000,
    returnTicketDelta: 220_000,
    hotelMultiplier: 0.52,
  },
  '25.000.000 sampai 40.000.000': {
    ticketPerPersonMin: 5_400_000,
    ticketPerPersonMax: 8_500_000,
    returnTicketDelta: 320_000,
    hotelMultiplier: 1,
  },
  'Lebih dari 40.000.000': {
    ticketPerPersonMin: 5_500_000,
    ticketPerPersonMax: 8_500_000,
    returnTicketDelta: 45_000,
    hotelMultiplier: 1.22,
  },
}

const defaultBudgetProfile = budgetProfiles['25.000.000 sampai 40.000.000']

const visaPackagePricePerPerson = Object.fromEntries(
  onboardingConfig.visaPackages.map((p) => [p.id, p.price]),
) as Record<VisaPackageId, number>

const visaPackageLabelMap = Object.fromEntries(
  onboardingConfig.visaPackages.map((p) => [p.id, p.title]),
) as Record<VisaPackageId, string>

function shiftTimeLabel(timeLabel: string, hourOffset: number) {
  const [hourPart, minutePart] = timeLabel.split(':')
  const hour = Number(hourPart)
  const minute = Number(minutePart)

  if (Number.isNaN(hour) || Number.isNaN(minute)) {
    return timeLabel
  }

  const shiftedHour = (hour + hourOffset + 24) % 24

  return `${String(shiftedHour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function addDays(date: Date, days: number) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return startOfDay(next)
}

function createBookingId() {
  return `booking-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function formatCurrency(amount: number) {
  return `Rp ${amount.toLocaleString('id-ID')}`
}

function parseRupiahLabelToNumber(label: string) {
  const numeric = label.replace(/[^\d]/g, '')
  const parsed = Number.parseInt(numeric, 10)
  return Number.isNaN(parsed) ? 0 : parsed
}

function createTicketFareOptions(basePrice: number, travelerCount: number): TicketFareOption[] {
  return onboardingConfig.flightFareTemplates.map((template) => {
    const topUp =
      template.premiumTopUpPerPair > 0
        ? Math.max(1, Math.ceil(travelerCount / 2)) * template.premiumTopUpPerPair
        : 0
    return {
      id: template.id,
      name: template.name,
      totalPrice: basePrice + topUp,
      features: template.features,
    }
  })
}

function createInitialPassengerForm(): PassengerFormData {
  const defaultPassportExpiryYear = String(new Date().getFullYear() + 10)

  return {
    firstMiddleName: '',
    lastFamilyName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    nationality: '',
    passportNumber: onboardingConfig.defaultContact.passportNumber,
    issuingCountry: '',
    passportExpiryDay: '',
    passportExpiryMonth: '',
    passportExpiryYear: defaultPassportExpiryYear,
    passportPhoto: null,
  }
}

function isPassengerFormComplete(form: PassengerFormData) {
  return Boolean(
    form.firstMiddleName.trim() &&
      form.lastFamilyName.trim() &&
      form.birthDay &&
      form.birthMonth &&
      form.birthYear &&
      form.nationality &&
      form.passportNumber.trim() &&
      form.issuingCountry &&
      form.passportExpiryDay &&
      form.passportExpiryMonth &&
      form.passportExpiryYear,
  )
}

const fallbackTravelDate = new Date(
  onboardingConfig.defaultTravelDate.year,
  onboardingConfig.defaultTravelDate.month,
  onboardingConfig.defaultTravelDate.day,
)

function resolveSettledBookingStatus(travelDate: Date | null, hotelNights: number): BookingStatus {
  const scheduleStart = startOfDay(travelDate ?? fallbackTravelDate)
  const scheduleEnd = addDays(scheduleStart, hotelNights)
  const today = startOfDay(new Date())

  if (today < scheduleStart) {
    return 'akan-datang'
  }

  if (today <= scheduleEnd) {
    return 'berlangsung'
  }

  return 'history'
}

const walkthroughSlideDurationMs = 3200
const bookingItemsStorageKey = 'maktub-booking-items'
const bookingDetailsStorageKey = 'maktub-booking-details'

type FlightCabinSelection = string

function App() {
  const [screen, setScreen] = useState<Screen>('splash')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userProfile, setUserProfile] = useState(profileData)
  const [loginGuestBackScreen, setLoginGuestBackScreen] = useState<Screen>('home')
  const [notifikasiBackScreen, setNotifikasiBackScreen] = useState<Screen>('home')
  const [chatAssistantBackScreen, setChatAssistantBackScreen] = useState<Screen>('home')
  const [showProfileCompletionPopup, setShowProfileCompletionPopup] = useState(false)
  const [loginPhoneNumber, setLoginPhoneNumber] = useState('')
  const [flightSearchEntry, setFlightSearchEntry] = useState<'home' | 'maktub-ai'>('home')
  const [isHotelOnlyFlow, setIsHotelOnlyFlow] = useState(false)
  const [selectedMyBookingId, setSelectedMyBookingId] = useState<string | null>(null)
  const [itineraryByBookingId, setItineraryByBookingId] = useState<Record<string, ItineraryDay[]>>({})
  const [step, setStep] = useState(1)
  const [travelerParticipants, setTravelerParticipants] = useState({
    dewasa: 0,
    anak: 0,
    bayi: 0,
  })
  const [travelerRoom, setTravelerRoom] = useState<2 | 3 | 4>(2)
  const [departureCode, setDepartureCode] = useState<string | null>(null)
  const [arrivalCity, setArrivalCity] = useState<string | null>(null)
  const [returnCity, setReturnCity] = useState<string | null>(null)
  const [budgetRange, setBudgetRange] = useState<string | null>(null)
  const [travelDate, setTravelDate] = useState<Date | null>(null)
  const [returnTravelDate, setReturnTravelDate] = useState<Date | null>(null)
  const [hotelStartDate, setHotelStartDate] = useState<Date | null>(null)
  const [hotelEndDate, setHotelEndDate] = useState<Date | null>(null)
  const [flightSelectionLeg, setFlightSelectionLeg] = useState<'departure' | 'return'>('departure')
  const [selectedFlightId, setSelectedFlightId] = useState<string | null>(null)
  const [selectedReturnFlightId, setSelectedReturnFlightId] = useState<string | null>(null)
  const [selectedDepartureFareId, setSelectedDepartureFareId] = useState<TicketFareOption['id']>(onboardingConfig.flightFareTemplates[0].id)
  const [selectedReturnFareId, setSelectedReturnFareId] = useState<TicketFareOption['id']>(onboardingConfig.flightFareTemplates[0].id)
  const [selectedFlightCabinLabel, setSelectedFlightCabinLabel] = useState<FlightCabinSelection>(onboardingConfig.flightCabinClasses[0])
  const [hotelSelectionLeg, setHotelSelectionLeg] = useState<'departure' | 'return'>('departure')
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null)
  const [selectedHotelRoomId, setSelectedHotelRoomId] = useState<string | null>(null)
  const [selectedReturnHotelId, setSelectedReturnHotelId] = useState<string | null>(null)
  const [selectedReturnHotelRoomId, setSelectedReturnHotelRoomId] = useState<string | null>(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('bni-va')
  const [selectedRekomendasiPaketId, setSelectedRekomendasiPaketId] = useState<string | null>(null)
  const [selectedDzikirHarianDetailId, setSelectedDzikirHarianDetailId] = useState<string | null>(null)
  const [selectedDoaUmrahDetailId, setSelectedDoaUmrahDetailId] = useState<string | null>(null)
  const [selectedTataCaraSholatDetailId, setSelectedTataCaraSholatDetailId] = useState<string | null>(null)
  const [ticketInfoValidationMessage, setTicketInfoValidationMessage] = useState('')
  const [paymentFlow, setPaymentFlow] = useState<'package' | 'visa'>('package')
  const [paymentCompletedAt, setPaymentCompletedAt] = useState<Date | null>(null)
  const [hasVisa, setHasVisa] = useState(false)
  const [visaFromHome, setVisaFromHome] = useState(false)
  const [selectedVisaPackage, setSelectedVisaPackage] = useState<VisaPackageId>(
    onboardingConfig.visaPackages[0].id,
  )
  const [visaPersonalForm, setVisaPersonalForm] = useState({
    familyName: '',
    givenName: '',
    gender: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthPlace: '',
    birthCountry: '',
    email: onboardingConfig.defaultContact.email,
    phone: onboardingConfig.defaultContact.phone,
    maritalStatus: '',
    nationality: '',
  })
  const [visaDocsForm, setVisaDocsForm] = useState<{
    passport: File | null
    ktp: File | null
    familyCard: File | null
    marriageBook: File | null
    birthCertificate: File | null
    photo: File | null
  }>({
    passport: null,
    ktp: null,
    familyCard: null,
    marriageBook: null,
    birthCertificate: null,
    photo: null,
  })
  const [travelerNames, setTravelerNames] = useState<string[]>(['Jamaah 1'])
  const [activePassengerIndex, setActivePassengerIndex] = useState(0)
  const [passengerForms, setPassengerForms] = useState<PassengerFormData[]>([createInitialPassengerForm()])
  const [savedBookingItems, setSavedBookingItems] = useState<BookingItem[]>([])
  const [savedBookingDetailsById, setSavedBookingDetailsById] = useState<Record<string, BookingDetail>>({})

  useEffect(() => {
    try {
      const storedItemsRaw = window.localStorage.getItem(bookingItemsStorageKey)
      if (storedItemsRaw) {
        const parsedItems = JSON.parse(storedItemsRaw)
        if (Array.isArray(parsedItems)) {
          setSavedBookingItems(parsedItems as BookingItem[])
        }
      }

      const storedDetailsRaw = window.localStorage.getItem(bookingDetailsStorageKey)
      if (storedDetailsRaw) {
        const parsedDetails = JSON.parse(storedDetailsRaw)
        if (parsedDetails && typeof parsedDetails === 'object' && !Array.isArray(parsedDetails)) {
          setSavedBookingDetailsById(parsedDetails as Record<string, BookingDetail>)
        }
      }
    } catch {
      window.localStorage.removeItem(bookingItemsStorageKey)
      window.localStorage.removeItem(bookingDetailsStorageKey)
    }
  }, [])

  useEffect(() => {
    if (savedBookingItems.length === 0) {
      window.localStorage.removeItem(bookingItemsStorageKey)
      return
    }

    window.localStorage.setItem(bookingItemsStorageKey, JSON.stringify(savedBookingItems))
  }, [savedBookingItems])

  useEffect(() => {
    if (Object.keys(savedBookingDetailsById).length === 0) {
      window.localStorage.removeItem(bookingDetailsStorageKey)
      return
    }

    window.localStorage.setItem(bookingDetailsStorageKey, JSON.stringify(savedBookingDetailsById))
  }, [savedBookingDetailsById])

  const currentSlide = useMemo(() => walkthroughSlides[step - 1], [step])

  const handleNext = () => {
    if (step < walkthroughSlides.length) {
      setStep((prev) => prev + 1)
      return
    }

    setScreen('home')
  }

  const resetMaktubAiFlowState = () => {
    setDepartureCode(null)
    setArrivalCity(null)
    setReturnCity(null)
    setBudgetRange(null)
    setTravelDate(null)
    setReturnTravelDate(null)
    setHotelStartDate(null)
    setHotelEndDate(null)
    setFlightSelectionLeg('departure')
    setSelectedFlightId(null)
    setSelectedReturnFlightId(null)
    setSelectedDepartureFareId(onboardingConfig.flightFareTemplates[0].id)
    setSelectedReturnFareId(onboardingConfig.flightFareTemplates[0].id)
    setHotelSelectionLeg('departure')
    setSelectedHotelId(null)
    setSelectedHotelRoomId(null)
    setSelectedReturnHotelId(null)
    setSelectedReturnHotelRoomId(null)
    setPaymentFlow('package')
    setPaymentCompletedAt(null)
    setHasVisa(false)
    setIsHotelOnlyFlow(false)
  }

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setScreen('walkthrough')
    }, 1800)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (screen !== 'walkthrough') {
      return
    }

    if (step >= walkthroughSlides.length) {
      return
    }

    const timer = window.setTimeout(() => {
      setStep((prev) => Math.min(prev + 1, walkthroughSlides.length))
    }, walkthroughSlideDurationMs)

    return () => {
      window.clearTimeout(timer)
    }
  }, [screen, step])

  useEffect(() => {
    if (screen !== 'umrah-processing') {
      return
    }

    const timer = window.setTimeout(() => {
      setFlightSelectionLeg('departure')
      setSelectedFlightId(null)
      setSelectedReturnFlightId(null)
      setSelectedDepartureFareId(onboardingConfig.flightFareTemplates[0].id)
      setSelectedReturnFareId(onboardingConfig.flightFareTemplates[0].id)
      setFlightSearchEntry('maktub-ai')
      setScreen('umrah-flight')
    }, 2800)

    return () => {
      window.clearTimeout(timer)
    }
  }, [screen])

  const totalParticipants = useMemo(
    () => travelerParticipants.dewasa + travelerParticipants.anak + travelerParticipants.bayi,
    [travelerParticipants],
  )

  const travelerCount = Math.max(totalParticipants, 1)
  const passengerText = `${travelerCount} orang`
  const roomCount = Math.max(1, Math.ceil(travelerCount / travelerRoom))

  const syncTravelerCollections = (count: number) => {
    setTravelerNames((prev) =>
      Array.from({ length: count }, (_, index) => {
        if (prev[index]) {
          return prev[index]
        }

        return `Jamaah ${index + 1}`
      }),
    )

    setPassengerForms((prev) =>
      Array.from({ length: count }, (_, index) => {
        if (prev[index]) {
          return prev[index]
        }

        return createInitialPassengerForm()
      }),
    )

    setActivePassengerIndex((prev) => Math.min(prev, count - 1))
  }

  const handleChangeParticipants = (key: 'dewasa' | 'anak' | 'bayi', value: number) => {
    setTravelerParticipants((prev) => {
      const next = { ...prev, [key]: value }
      const nextCount = Math.max(next.dewasa + next.anak + next.bayi, 1)
      syncTravelerCollections(nextCount)
      return next
    })
  }

  const fallbackDepartureLabel =
    departureAirportOptions.find((option) => option.code === onboardingConfig.defaultDepartureCode)?.label.split(',')[0] ??
    onboardingConfig.defaultDepartureCode
  const departureLabel = departureAirportOptions.find((option) => option.code === departureCode)?.label.split(',')[0] ?? fallbackDepartureLabel
  const destinationLabel = arrivalCity ?? onboardingConfig.defaultArrivalCity
  const destinationCode = cityAirportCodeMap[destinationLabel] ?? 'JED'
  const returnDestinationLabel = returnCity ?? destinationLabel
  const returnDestinationCode = cityAirportCodeMap[returnDestinationLabel] ?? destinationCode
  const flightDestinationOptions = useMemo(
    () => cityOptions.map((city) => ({ city, code: cityAirportCodeMap[city] ?? 'JED', country: 'Arab Saudi' })),
    [],
  )

  const dateLabel = useMemo(() => {
    if (!travelDate) {
      return fallbackTravelDate.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    }

    return travelDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }, [travelDate])

  const shortDepartureDateLabel = useMemo(() => {
    if (!travelDate) {
      return fallbackTravelDate.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
      })
    }

    return travelDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    })
  }, [travelDate])

  const shortReturnDateLabel = useMemo(() => {
    if (returnTravelDate) {
      return returnTravelDate.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
      })
    }

    if (!travelDate) {
      const fallbackReturnDate = addDays(fallbackTravelDate, 3)
      return fallbackReturnDate.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
      })
    }

    const returnDate = new Date(travelDate)
    returnDate.setDate(returnDate.getDate() + 3)

    return returnDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    })
  }, [returnTravelDate, travelDate])

  const activeBudgetProfile = budgetRange ? (budgetProfiles[budgetRange] ?? defaultBudgetProfile) : defaultBudgetProfile

  const flightOffers = useMemo(() => {
    const sortedTemplatePrices = [...flightOfferTemplate].map((offer) => offer.price).sort((a, b) => a - b)
    const templateMinPrice = sortedTemplatePrices[0] ?? 10_800_000
    const templateMaxPrice = sortedTemplatePrices[sortedTemplatePrices.length - 1] ?? templateMinPrice
    const templateSpread = Math.max(1, templateMaxPrice - templateMinPrice)

    return flightOfferTemplate.map((offer) => {
      const normalizedTemplateRank = (offer.price - templateMinPrice) / templateSpread
      const ticketPerPerson =
        activeBudgetProfile.ticketPerPersonMin +
        normalizedTemplateRank * (activeBudgetProfile.ticketPerPersonMax - activeBudgetProfile.ticketPerPersonMin)

      return {
        ...offer,
        price: Math.round(ticketPerPerson * travelerCount),
        segments: offer.segments.map((segment) => {
        if (segment.code === 'CGK' && departureCode) {
          return { ...segment, code: departureCode }
        }

        if (segment.code === 'JED') {
          return { ...segment, code: destinationCode }
        }

        return segment
        }),
      }
    })
  }, [
    activeBudgetProfile.ticketPerPersonMax,
    activeBudgetProfile.ticketPerPersonMin,
    departureCode,
    destinationCode,
    travelerCount,
  ])

  const selectedFlightOffer = useMemo(
    () => flightOffers.find((offer) => offer.id === selectedFlightId) ?? flightOffers[0] ?? null,
    [flightOffers, selectedFlightId],
  )

  const returnFlightOffers = useMemo(() => {
    return flightOffers.map((offer, index) => {
      const segments = offer.segments.map((segment, segmentIndex) => {
        const shiftedTime = shiftTimeLabel(segment.time, 12)

        if (segmentIndex === 0) {
          return { ...segment, time: shiftedTime, code: returnDestinationCode }
        }

        if (segmentIndex === offer.segments.length - 1) {
          return { ...segment, time: shiftedTime, code: departureCode ?? onboardingConfig.defaultDepartureCode }
        }

        return { ...segment, time: shiftedTime }
      })

      return {
        ...offer,
        id: `${offer.id}-return`,
        price: offer.price + index * activeBudgetProfile.returnTicketDelta,
        segments,
      }
    })
  }, [activeBudgetProfile.returnTicketDelta, departureCode, flightOffers, returnDestinationCode])

  const selectedReturnFlightOffer = useMemo(
    () => returnFlightOffers.find((offer) => offer.id === selectedReturnFlightId) ?? returnFlightOffers[0] ?? null,
    [returnFlightOffers, selectedReturnFlightId],
  )

  const selectedFlightDepartureTime = selectedFlightOffer?.segments[0]?.time ?? '09:45'
  const selectedFlightArrivalTime = selectedFlightOffer?.segments[selectedFlightOffer.segments.length - 1]?.time ?? '21:45'
  const selectedFlightDuration = selectedFlightOffer?.segments.find((segment) => segment.duration)?.duration ?? '12j 16m'
  const selectedReturnDepartureTime = selectedReturnFlightOffer?.segments[0]?.time ?? shiftTimeLabel(selectedFlightArrivalTime, 0)
  const selectedReturnArrivalTime =
    selectedReturnFlightOffer?.segments[selectedReturnFlightOffer.segments.length - 1]?.time ?? shiftTimeLabel(selectedFlightDepartureTime, 0)
  const selectedReturnDuration = selectedReturnFlightOffer?.segments.find((segment) => segment.duration)?.duration ?? selectedFlightDuration

  const departureSummaryOffer = selectedFlightOffer ?? flightOffers[0] ?? null
  const returnSummaryOffer = selectedReturnFlightOffer ?? returnFlightOffers[0] ?? null
  const departureSummaryTimeRange = departureSummaryOffer
    ? `${departureSummaryOffer.segments[0]?.time ?? '09:45'} - ${departureSummaryOffer.segments[departureSummaryOffer.segments.length - 1]?.time ?? '21:45'}`
    : '09:45 - 21:45'
  const returnSummaryTimeRange = returnSummaryOffer
    ? `${returnSummaryOffer.segments[0]?.time ?? '21:45'} - ${returnSummaryOffer.segments[returnSummaryOffer.segments.length - 1]?.time ?? '09:45'}`
    : '21:45 - 09:45'

  const departureFareOptions = useMemo(
    () => createTicketFareOptions(selectedFlightOffer?.price ?? 10_800_000, travelerCount),
    [selectedFlightOffer?.price, travelerCount],
  )

  const returnFareOptions = useMemo(
    () => createTicketFareOptions(selectedReturnFlightOffer?.price ?? selectedFlightOffer?.price ?? 10_800_000, travelerCount),
    [selectedFlightOffer?.price, selectedReturnFlightOffer?.price, travelerCount],
  )

  const selectedDepartureFare = useMemo(
    () => departureFareOptions.find((fare) => fare.id === selectedDepartureFareId) ?? departureFareOptions[0],
    [departureFareOptions, selectedDepartureFareId],
  )

  const selectedReturnFare = useMemo(
    () => returnFareOptions.find((fare) => fare.id === selectedReturnFareId) ?? returnFareOptions[0],
    [returnFareOptions, selectedReturnFareId],
  )

  const hotelOffers = useMemo(() => {
    const participantOffset = Math.max(0, travelerCount - 2) * 250000

    return hotelOfferTemplate.map((hotel, index) => ({
      ...hotel,
      pricePerNight: Math.round((hotel.pricePerNight + participantOffset + index * 50000) * activeBudgetProfile.hotelMultiplier),
      totalPrice: Math.round((hotel.totalPrice + participantOffset * 2 + index * 350000) * activeBudgetProfile.hotelMultiplier),
    }))
  }, [activeBudgetProfile.hotelMultiplier, travelerCount])

  const selectedHotelOffer = useMemo(
    () => hotelOffers.find((hotel) => hotel.id === selectedHotelId) ?? hotelOffers[0] ?? null,
    [hotelOffers, selectedHotelId],
  )

  const selectedReturnHotelOffer = useMemo(() => {
    if (selectedReturnHotelId) {
      return hotelOffers.find((hotel) => hotel.id === selectedReturnHotelId) ?? null
    }

    if (!selectedHotelOffer) {
      return hotelOffers[1] ?? hotelOffers[0] ?? null
    }

    return hotelOffers.find((hotel) => hotel.id !== selectedHotelOffer.id) ?? selectedHotelOffer
  }, [hotelOffers, selectedHotelOffer, selectedReturnHotelId])

  const fallbackSecondHotelCity = cityOptions.find((city) => city !== onboardingConfig.defaultHotelCityLabel) ?? 'Madinah'
  const primaryHotelCityLabel = onboardingConfig.defaultHotelCityLabel
  const secondaryHotelCityLabel = returnCity ?? fallbackSecondHotelCity

  const buildHotelDetail = (hotelOffer: (typeof hotelOffers)[number] | null) => {
    if (!hotelOffer) {
      return null
    }

    const start = startOfDay(hotelStartDate ?? travelDate ?? fallbackTravelDate)
    const end = hotelEndDate ? startOfDay(hotelEndDate) : addDays(start, onboardingConfig.defaultHotelNightCount)
    const diff = end.getTime() - start.getTime()
    const nights = Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)))

    return {
      ...hotelDetailTemplate,
      hotelId: hotelOffer.id,
      name: hotelOffer.name,
      locationDistanceLabel: hotelOffer.distanceLabel.replace('dari ka’bah', 'ke arah Mekah'),
      rooms: hotelDetailTemplate.rooms.map((room) => ({
        ...room,
        totalPrice: room.id === 'room-1' ? hotelOffer.totalPrice : hotelOffer.totalPrice + 2000000,
        totalLabel: `untuk ${nights} malam`,
      })),
    }
  }

  const selectedHotelDetail = useMemo(() => {
    return buildHotelDetail(selectedHotelOffer)
  }, [hotelEndDate, hotelStartDate, selectedHotelOffer, travelDate])

  const selectedReturnHotelDetail = useMemo(() => {
    return buildHotelDetail(selectedReturnHotelOffer)
  }, [hotelEndDate, hotelStartDate, selectedReturnHotelOffer, travelDate])

  const selectedHotelRoom = useMemo(
    () => selectedHotelDetail?.rooms.find((room) => room.id === selectedHotelRoomId) ?? selectedHotelDetail?.rooms[0] ?? null,
    [selectedHotelDetail, selectedHotelRoomId],
  )

  const selectedReturnHotelRoom = useMemo(
    () =>
      selectedReturnHotelDetail?.rooms.find((room) => room.id === selectedReturnHotelRoomId) ??
      selectedReturnHotelDetail?.rooms[0] ??
      null,
    [selectedReturnHotelDetail, selectedReturnHotelRoomId],
  )

  const hotelStartValue = useMemo(() => startOfDay(hotelStartDate ?? travelDate ?? fallbackTravelDate), [hotelStartDate, travelDate])

  const hotelEndValue = useMemo(() => {
    if (hotelEndDate) {
      return startOfDay(hotelEndDate)
    }

    return addDays(hotelStartValue, onboardingConfig.defaultHotelNightCount)
  }, [hotelEndDate, hotelStartValue])

  const hotelNights = useMemo(() => {
    const diff = hotelEndValue.getTime() - hotelStartValue.getTime()
    return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)))
  }, [hotelEndValue, hotelStartValue])

  const bookingStatusSnapshot = useMemo<BookingStatus>(() => {
    const pendingPaymentScreens: Screen[] = ['umrah-payment-overview', 'umrah-payment-method', 'umrah-payment-pending']
    const completedPaymentScreens: Screen[] = [
      'umrah-payment-success',
      'umrah-payment-complete',
      'umrah-visa-services',
      'umrah-visa-form-personal',
      'umrah-visa-form-docs',
    ]

    if (pendingPaymentScreens.includes(screen)) {
      return 'menunggu-pembayaran'
    }

    const scheduleStart = startOfDay(travelDate ?? fallbackTravelDate)
    const scheduleEnd = addDays(scheduleStart, hotelNights)
    const today = startOfDay(new Date())

    const isPaymentSettled = completedPaymentScreens.includes(screen) || paymentCompletedAt !== null

    if (paymentCompletedAt) {
      const paidAtDay = startOfDay(paymentCompletedAt)
      if (paidAtDay.getTime() === today.getTime()) {
        return 'berlangsung'
      }
    }

    if (!isPaymentSettled) {
      return today < scheduleStart ? 'akan-datang' : 'history'
    }

    if (today < scheduleStart) {
      return 'akan-datang'
    }

    if (today <= scheduleEnd) {
      return 'berlangsung'
    }

    return 'history'
  }, [hotelNights, paymentCompletedAt, screen, travelDate])

  const paymentBreakdown = useMemo<PaymentBreakdown>(() => {
    const flightDeparture = selectedDepartureFare.totalPrice
    const flightReturn = selectedReturnFare.totalPrice
    const hotelMakkah = selectedHotelRoom?.totalPrice ?? selectedHotelOffer?.totalPrice ?? 12000000
    const hotelMadinah = selectedReturnHotelRoom?.totalPrice ?? selectedReturnHotelOffer?.totalPrice ?? 12000000
    const subtotal = flightDeparture + flightReturn + hotelMakkah + hotelMadinah
    const serviceFee = 50000
    const taxAmount = Math.round(subtotal * 0.1)
    const grandTotal = subtotal + serviceFee + taxAmount

    return {
      flightDeparture,
      flightReturn,
      hotelMakkah,
      hotelMadinah,
      subtotal,
      serviceFee,
      taxAmount,
      grandTotal,
    }
  }, [
    selectedDepartureFare.totalPrice,
    selectedHotelOffer?.totalPrice,
    selectedHotelRoom?.totalPrice,
    selectedReturnHotelOffer?.totalPrice,
    selectedReturnHotelRoom?.totalPrice,
    selectedReturnFare.totalPrice,
    travelerCount,
  ])

  const visaPaymentBreakdown = useMemo<PaymentBreakdown>(() => {
    const subtotal = visaPackagePricePerPerson[selectedVisaPackage] * travelerCount
    const serviceFee = 50_000
    const taxAmount = Math.round(subtotal * 0.1)

    return {
      flightDeparture: 0,
      flightReturn: 0,
      hotelMakkah: 0,
      hotelMadinah: 0,
      subtotal,
      serviceFee,
      taxAmount,
      grandTotal: subtotal + serviceFee + taxAmount,
    }
  }, [selectedVisaPackage, travelerCount])

  const flightOnlyPaymentBreakdown = useMemo<PaymentBreakdown>(() => {
    const flightDeparture = selectedDepartureFare.totalPrice
    const flightReturn = selectedReturnFare.totalPrice
    const subtotal = flightDeparture + flightReturn
    const serviceFee = 50_000
    const taxAmount = Math.round(subtotal * 0.1)
    return {
      flightDeparture,
      flightReturn,
      hotelMakkah: 0,
      hotelMadinah: 0,
      subtotal,
      serviceFee,
      taxAmount,
      grandTotal: subtotal + serviceFee + taxAmount,
    }
  }, [selectedDepartureFare.totalPrice, selectedReturnFare.totalPrice])

  const hotelOnlyPaymentBreakdown = useMemo<PaymentBreakdown>(() => {
    const hotelMakkah = selectedHotelRoom?.totalPrice ?? selectedHotelOffer?.totalPrice ?? 12000000
    const subtotal = hotelMakkah
    const serviceFee = 50_000
    const taxAmount = Math.round(subtotal * 0.1)

    return {
      flightDeparture: 0,
      flightReturn: 0,
      hotelMakkah,
      hotelMadinah: 0,
      subtotal,
      serviceFee,
      taxAmount,
      grandTotal: subtotal + serviceFee + taxAmount,
    }
  }, [selectedHotelOffer?.totalPrice, selectedHotelRoom?.totalPrice])

  const activePaymentBreakdown =
    paymentFlow === 'visa'
      ? visaPaymentBreakdown
      : isHotelOnlyFlow
        ? hotelOnlyPaymentBreakdown
      : flightSearchEntry === 'home'
        ? flightOnlyPaymentBreakdown
        : paymentBreakdown

  const hotelPaymentCards = useMemo(() => {
    if (!selectedHotelOffer) {
      return []
    }

    const cards = [
      {
        id: `${selectedHotelOffer.id}-${primaryHotelCityLabel.toLowerCase()}`,
        name: selectedHotelOffer.name,
        nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
        rating: selectedHotelOffer.rating,
        image: selectedHotelOffer.image,
        pricePerNight: Math.round(paymentBreakdown.hotelMakkah / hotelNights),
        totalPrice: paymentBreakdown.hotelMakkah,
        travelerLabel: `${travelerCount} orang`,
      },
    ]

    if (selectedReturnHotelOffer) {
      cards.push({
        id: `${selectedReturnHotelOffer.id}-${secondaryHotelCityLabel.toLowerCase()}`,
        name: selectedReturnHotelOffer.name,
        nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
        rating: selectedReturnHotelOffer.rating,
        image: selectedReturnHotelOffer.image,
        pricePerNight: Math.round(paymentBreakdown.hotelMadinah / hotelNights),
        totalPrice: paymentBreakdown.hotelMadinah,
        travelerLabel: `${travelerCount} orang`,
      })
    }

    return cards
  }, [
    hotelNights,
    paymentBreakdown.hotelMadinah,
    paymentBreakdown.hotelMakkah,
    primaryHotelCityLabel,
    secondaryHotelCityLabel,
    selectedHotelOffer,
    selectedReturnHotelOffer,
    travelerCount,
  ])

  const hotelCheckInLabel = useMemo(
    () =>
      hotelStartValue.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    [hotelStartValue],
  )

  const hotelCheckOutLabel = useMemo(
    () =>
      hotelEndValue.toLocaleDateString('id-ID', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
    [hotelEndValue],
  )

  const activePassengerForm = passengerForms[activePassengerIndex] ?? createInitialPassengerForm()

  const nationalityOptions = onboardingConfig.nationalityOptions
  const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, '0'))
  const monthOptions = onboardingConfig.monthOptions
  const birthYearOptions = Array.from(
    { length: onboardingConfig.passportYearSpan },
    (_, index) => String(new Date().getFullYear() - index),
  )
  const passportExpiryYearOptions = Array.from({ length: 11 }, (_, index) => String(new Date().getFullYear() + index))
  const selectedPaymentLabel = onboardingConfig.paymentMethodLabels[selectedPaymentMethod]
  const selectedRekomendasiPaket = useMemo(
    () => rekomendasiPaketItems.find((item) => item.id === selectedRekomendasiPaketId) ?? null,
    [selectedRekomendasiPaketId],
  )
  const rekomendasiPaketBreakdown = useMemo<PaymentBreakdown>(() => {
    const subtotal = selectedRekomendasiPaket ? parseRupiahLabelToNumber(selectedRekomendasiPaket.startingPriceLabel) : 3_000_000
    const serviceFee = 2_000
    const taxAmount = Math.round(subtotal * 0.11)
    const grandTotal = subtotal + serviceFee + taxAmount

    return {
      flightDeparture: 0,
      flightReturn: 0,
      hotelMakkah: 0,
      hotelMadinah: 0,
      subtotal,
      serviceFee,
      taxAmount,
      grandTotal,
    }
  }, [selectedRekomendasiPaket])

  const isVisaPersonalCompleted = useMemo(() => Object.values(visaPersonalForm).every((value) => value.trim().length > 0), [visaPersonalForm])
  const isVisaDocsCompleted = useMemo(
    () => Boolean(visaDocsForm.passport && visaDocsForm.ktp && visaDocsForm.familyCard && visaDocsForm.photo),
    [visaDocsForm.familyCard, visaDocsForm.ktp, visaDocsForm.passport, visaDocsForm.photo],
  )
  const isVisaFormCompleted = isVisaPersonalCompleted && isVisaDocsCompleted
  const primaryBookingId = 'booking-dynamic-1'

  const bookingDateLabel = useMemo(() => {
    const source = travelDate ?? fallbackTravelDate
    return source.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }, [travelDate])

  const bookingRouteDepartureCode = departureCode ?? onboardingConfig.defaultDepartureCode
  const bookingRouteArrivalCode = destinationCode
  const bookingPackageName = `Paket Umrah ${travelerCount + 2} Hari`

  const dynamicBookingItems = useMemo<BookingItem[]>(
    () => [
      {
        id: primaryBookingId,
        packageName: bookingPackageName,
        status: bookingStatusSnapshot,
        durationLabel: `${hotelNights + 1} hari`,
        bookingDateLabel,
        departureRouteLabel: `${departureLabel} (${bookingRouteDepartureCode})`,
        arrivalRouteLabel: `${destinationLabel} (${bookingRouteArrivalCode})`,
        departureDateLabel: bookingDateLabel,
        travelerLabel: `${travelerCount} person`,
        totalPriceLabel: formatCurrency(paymentBreakdown.grandTotal),
      },
    ],
    [
      bookingDateLabel,
      bookingPackageName,
      bookingRouteArrivalCode,
      bookingRouteDepartureCode,
      bookingStatusSnapshot,
      departureLabel,
      destinationLabel,
      hotelNights,
      paymentBreakdown.grandTotal,
      travelerCount,
    ],
  )

  const dynamicMyBookingDetailsById = useMemo<Record<string, BookingDetail>>(() => {
    const hotelBlocks = [
      {
        id: 'hotel-primary',
        name: selectedHotelOffer?.name ?? 'Pullman ZamZam',
        nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
        cityLabel: primaryHotelCityLabel,
        checkInTitle: 'Check-in',
        checkInDate: hotelCheckInLabel,
        checkInTime: '14:00 - 23:59',
        checkOutTitle: 'Check-out',
        checkOutDate: hotelCheckOutLabel,
        checkOutTime: '12:00',
        roomLabel: selectedHotelRoom ? `1x ${selectedHotelRoom.name}` : '1x Deluxe (King Bed)',
        guestLabel: `${travelerCount}x Tamu (Dewasa)`,
      },
    ]

    if (selectedReturnHotelOffer) {
      hotelBlocks.push({
        id: 'hotel-secondary',
        name: selectedReturnHotelOffer.name,
        nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
        cityLabel: secondaryHotelCityLabel,
        checkInTitle: 'Check-in',
        checkInDate: hotelCheckInLabel,
        checkInTime: '14:00 - 23:59',
        checkOutTitle: 'Check-out',
        checkOutDate: hotelCheckOutLabel,
        checkOutTime: '12:00',
        roomLabel: selectedReturnHotelRoom ? `1x ${selectedReturnHotelRoom.name}` : '1x Deluxe (Twin Bed)',
        guestLabel: `${travelerCount}x Tamu (Dewasa)`,
      })
    }

    return {
      [primaryBookingId]: {
        bookingId: primaryBookingId,
        title: bookingPackageName,
        status: bookingStatusSnapshot,
        invoiceId: `INV${bookingRouteDepartureCode}${bookingRouteArrivalCode}${String(travelerCount).padStart(2, '0')}`,
        transactionDateLabel: `${bookingDateLabel}, 18:00 WIB`,
        helperTitle: 'Butuh layanan tambahan?',
        helperSubtitle: 'Assistant, kendaraan, visa lainnya',
        flight: {
          departureTime: selectedFlightDepartureTime,
          departureDate: shortDepartureDateLabel,
          duration: selectedFlightDuration,
          arrivalTime: selectedFlightArrivalTime,
          arrivalDate: shortDepartureDateLabel,
          departureAirport: `${departureLabel} (${bookingRouteDepartureCode})`,
          departureTerminal: 'Terminal 3E International',
          arrivalAirport: `${destinationLabel} (${bookingRouteArrivalCode})`,
          arrivalTerminal: 'Terminal 1E International',
          airlineName: selectedFlightOffer?.airline ?? 'Oman Air',
          airlineCode: selectedFlightOffer?.id.toUpperCase() ?? 'JT-690',
          cabinLabel: selectedDepartureFare.name,
          baggageLabel: 'Bagasi Kabin 7kg',
          aircraftLabel: 'Boeing 737',
          seatLayoutLabel: '3-3',
          seatPitchLabel: '29 inches (Standar)',
        },
        hotels: hotelBlocks,
        participants: {
          maleLabel: `${travelerParticipants.dewasa} Peserta dewasa`,
          femaleLabel: `${travelerParticipants.anak + travelerParticipants.bayi} Peserta anak/bayi`,
        },
        payment: {
          totalLabel: formatCurrency(paymentBreakdown.grandTotal),
          noteLabel: 'Lebih sedikit',
          breakdown: [
            { label: 'Harga paket, hotel & flight', amountLabel: formatCurrency(paymentBreakdown.subtotal) },
            { label: 'Biaya layanan', amountLabel: formatCurrency(paymentBreakdown.serviceFee) },
            { label: 'Pajak 11%', amountLabel: formatCurrency(paymentBreakdown.taxAmount) },
            { label: 'Total harga', amountLabel: formatCurrency(paymentBreakdown.grandTotal), emphasized: true },
          ],
          methodLabel: selectedPaymentLabel,
        },
      },
    }
  }, [
    bookingDateLabel,
    bookingPackageName,
    bookingRouteArrivalCode,
    bookingRouteDepartureCode,
    bookingStatusSnapshot,
    departureLabel,
    destinationLabel,
    hotelCheckInLabel,
    hotelCheckOutLabel,
    hotelNights,
    paymentBreakdown.grandTotal,
    paymentBreakdown.serviceFee,
    paymentBreakdown.subtotal,
    paymentBreakdown.taxAmount,
    primaryHotelCityLabel,
    secondaryHotelCityLabel,
    selectedDepartureFare.name,
    selectedFlightArrivalTime,
    selectedFlightDepartureTime,
    selectedFlightDuration,
    selectedFlightOffer?.airline,
    selectedFlightOffer?.id,
    selectedHotelOffer?.name,
    selectedHotelRoom,
    selectedPaymentLabel,
    selectedReturnHotelOffer,
    selectedReturnHotelRoom,
    shortDepartureDateLabel,
    travelerCount,
    travelerParticipants.anak,
    travelerParticipants.bayi,
    travelerParticipants.dewasa,
  ])

  const bookingItems = savedBookingItems.length > 0 ? savedBookingItems : dynamicBookingItems
  const bookingDetailsById = savedBookingItems.length > 0 ? savedBookingDetailsById : dynamicMyBookingDetailsById
  const selectedMyBookingDetail = selectedMyBookingId ? bookingDetailsById[selectedMyBookingId] : null

  const defaultItineraryDays = useMemo<ItineraryDay[]>(() => {
    const itineraryStartDate = startOfDay(travelDate ?? fallbackTravelDate)
    const dayNames = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']

    const formatItineraryDateLabel = (date: Date) => {
      const dayValue = date.getDate()
      const monthLabel = date.toLocaleDateString('id-ID', { month: 'short' })
      const yearValue = date.getFullYear()
      return `${dayValue} ${monthLabel} ${yearValue}`
    }

    const firstDayDate = itineraryStartDate
    const secondDayDate = addDays(itineraryStartDate, 1)
    const thirdDayDate = addDays(itineraryStartDate, 2)

    const destinationRoute = `${destinationLabel}`

    return [
      {
        id: 'itinerary-day-1',
        dayNumber: 1,
        dayLabel: dayNames[firstDayDate.getDay()] ?? 'Senin',
        dateLabel: formatItineraryDateLabel(firstDayDate),
        routeLabel: `${departureLabel} - ${destinationRoute}`,
        editable: false,
        activities: [
          { id: 'day1-1', time: '13:00', description: `Berkumpul di Bandara ${departureLabel}` },
          {
            id: 'day1-2',
            time: selectedFlightDepartureTime,
            description: `Penerbangan dari ${departureLabel} menuju ${destinationLabel}`,
          },
          { id: 'day1-3', time: selectedFlightArrivalTime, description: `Tiba di ${destinationLabel}` },
          { id: 'day1-4', time: '22:30', description: `Setibanya di ${destinationLabel}, jama'ah langsung menuju hotel.` },
          { id: 'day1-5', time: '00:30', description: 'Istirahat dan persiapan ibadah hari berikutnya.' },
        ],
      },
      {
        id: 'itinerary-day-2',
        dayNumber: 2,
        dayLabel: dayNames[secondDayDate.getDay()] ?? 'Selasa',
        dateLabel: formatItineraryDateLabel(secondDayDate),
        routeLabel: destinationRoute,
        editable: true,
        activities: [
          { id: 'day2-1', time: '05:00', description: 'Shalat Subuh dan ziarah.' },
          { id: 'day2-2', time: '06:00', description: 'Shalat sunah dan doa.' },
          { id: 'day2-3', time: '08:00', description: 'Kunjungan area bersejarah dan wisata religi.' },
          { id: 'day2-4', time: '16:00', description: 'Kembali ke hotel dan melanjutkan ibadah.' },
        ],
      },
      {
        id: 'itinerary-day-3',
        dayNumber: 3,
        dayLabel: dayNames[thirdDayDate.getDay()] ?? 'Rabu',
        dateLabel: formatItineraryDateLabel(thirdDayDate),
        routeLabel: destinationRoute,
        editable: true,
        activities: [
          { id: 'day3-1', time: '05:00', description: 'Shalat Subuh dan ziarah.' },
          { id: 'day3-2', time: '06:00', description: 'Shalat sunah dan doa.' },
          { id: 'day3-3', time: '08:00', description: 'Eksplorasi lokasi ibadah dan wisata kota.' },
          { id: 'day3-4', time: '16:00', description: 'Kembali ke hotel dan persiapan agenda selanjutnya.' },
        ],
      },
    ]
  }, [departureLabel, destinationLabel, selectedFlightArrivalTime, selectedFlightDepartureTime, travelDate])

  const activeItineraryDays = selectedMyBookingId
    ? itineraryByBookingId[selectedMyBookingId] ?? defaultItineraryDays
    : defaultItineraryDays

  const minimumFlightDepartureDate = addDays(startOfDay(new Date()), 1)
  const initialFlightSearchDepartureDate =
    (travelDate ?? fallbackTravelDate).getTime() < minimumFlightDepartureDate.getTime()
      ? minimumFlightDepartureDate
      : travelDate ?? fallbackTravelDate
  const initialFlightSearchReturnDate = (() => {
    const baseReturnDate = returnTravelDate ?? addDays(initialFlightSearchDepartureDate, 3)
    return baseReturnDate.getTime() < initialFlightSearchDepartureDate.getTime() ? initialFlightSearchDepartureDate : baseReturnDate
  })()

  const minimumHotelCheckInDate = addDays(startOfDay(new Date()), 1)
  const initialHotelSearchCheckInDate = (() => {
    const baseDate = hotelStartDate ?? travelDate ?? fallbackTravelDate
    return startOfDay(baseDate).getTime() < minimumHotelCheckInDate.getTime() ? minimumHotelCheckInDate : startOfDay(baseDate)
  })()
  const initialHotelSearchCheckOutDate = (() => {
    const baseDate = hotelEndDate ?? addDays(initialHotelSearchCheckInDate, onboardingConfig.defaultHotelNightCount)
    return startOfDay(baseDate).getTime() <= initialHotelSearchCheckInDate.getTime()
      ? addDays(initialHotelSearchCheckInDate, 1)
      : startOfDay(baseDate)
  })()
  const hotelDestinationOptions = useMemo(
    () => Array.from(new Set([onboardingConfig.defaultHotelCityLabel, ...cityOptions])),
    [],
  )

  const ensureLoggedInForService = (fallbackScreen: Screen, onAllowed: () => void) => {
    if (!isLoggedIn) {
      setLoginGuestBackScreen(fallbackScreen)
      setScreen('login-guest')
      return
    }
    if (isProfileIncomplete) {
      setShowProfileCompletionPopup(true)
      setScreen('profile-settings')
      return
    }

    onAllowed()
  }

  const openChatAssistant = (backScreen: Screen) => {
    ensureLoggedInForService(backScreen, () => {
      setChatAssistantBackScreen(backScreen)
      setScreen('chat-assistant')
    })
  }

  const isProfileIncomplete = !userProfile.name.trim() || userProfile.name.trim().toLowerCase() === 'nama anda'

  useEffect(() => {
    if (isLoggedIn) {
      return
    }

    const isMyBookingScreen =
      screen === 'my-booking' ||
      screen === 'my-booking-detail' ||
      screen === 'my-booking-itinerary' ||
      screen === 'my-booking-itinerary-edit'

    if (isMyBookingScreen) {
      setLoginGuestBackScreen('home')
      setScreen('login-guest')
    }
  }, [isLoggedIn, screen])

  const openAkunMenu = (currentScreen: Screen) => {
    if (isLoggedIn) {
      setScreen('profile')
      return
    }

    setLoginGuestBackScreen(currentScreen)
    setScreen('login-guest')
  }

  return (
    <main className="walkthrough-page">
      {screen === 'splash' && <SplashScreen logoUrl={splashLogo} />}

      {screen === 'walkthrough' && (
        <WalkthroughScreen
          step={step}
          totalSteps={walkthroughSlides.length}
          currentSlide={currentSlide}
          onNext={handleNext}
        />
      )}

      {screen === 'home' && (
        <HomeGuestScreen
          assets={homeAssets}
          services={services}
          articles={articles}
          userDisplayName={isLoggedIn ? userProfile.name : undefined}
          userPhotoUrl={isLoggedIn ? userProfile.avatar : undefined}
          onStartJourney={() => {
            ensureLoggedInForService('home', () => {
              resetMaktubAiFlowState()
              setFlightSearchEntry('maktub-ai')
              setScreen('umrah-question')
            })
          }}
          onOpenFlightSearch={() => {
            ensureLoggedInForService('home', () => {
              setIsHotelOnlyFlow(false)
              setFlightSelectionLeg('departure')
              setFlightSearchEntry('home')
              setScreen('umrah-flight-search')
            })
          }}
          onOpenHotelSearch={() => {
            ensureLoggedInForService('home', () => {
              setIsHotelOnlyFlow(true)
              setHotelSelectionLeg('departure')
              setSelectedHotelId(null)
              setSelectedHotelRoomId(null)
              setSelectedReturnHotelId(null)
              setSelectedReturnHotelRoomId(null)
              setPaymentFlow('package')
              setScreen('umrah-hotel-search')
            })
          }}
          onOpenMyBooking={() => ensureLoggedInForService('home', () => setScreen('my-booking'))}
          onOpenLayananLain={() => setScreen('layanan-lain')}
          onOpenInformasi={() => setScreen('informasi')}
          onOpenAkun={() => openAkunMenu('home')}
          onOpenNotifikasi={() => {
            setNotifikasiBackScreen('home')
            setScreen('notifikasi')
          }}
          onOpenChatAssistant={() => openChatAssistant('home')}
          onOpenVisa={() => {
            ensureLoggedInForService('home', () => {
              setVisaFromHome(true)
              setTravelerParticipants({ dewasa: 1, anak: 0, bayi: 0 })
              setScreen('umrah-visa-services')
            })
          }}
          onOpenBannerDetail={() => setScreen('home-banner-detail')}
        />
      )}

      {screen === 'home-banner-detail' && (
        <HomeBannerDetailScreen content={homeBannerDetailContent} onBack={() => setScreen('home')} />
      )}

      {screen === 'my-booking' && (
        <MyBookingScreen
          assets={homeAssets}
          bookingAssets={myBookingAssets}
          bookings={bookingItems}
          onBackHome={() => setScreen('home')}
          onOpenLayananLain={() => setScreen('layanan-lain')}
          onOpenInformasi={() => setScreen('informasi')}
          onOpenAkun={() => openAkunMenu('my-booking')}
          onOpenDetail={(bookingId) => {
            setSelectedMyBookingId(bookingId)
            setScreen('my-booking-detail')
          }}
        />
      )}

      {screen === 'my-booking-detail' && selectedMyBookingDetail && (
        <MyBookingDetailScreen
          assets={myBookingDetailAssets}
          detail={selectedMyBookingDetail}
          onBack={() => setScreen('my-booking')}
          onOpenItinerary={() => setScreen('my-booking-itinerary')}
        />
      )}

      {screen === 'my-booking-itinerary' && (
        <MyBookingItineraryScreen
          assets={myBookingAssets}
          detailAssets={myBookingDetailAssets}
          days={activeItineraryDays}
          onBack={() => setScreen('my-booking-detail')}
          onEdit={() => setScreen('my-booking-itinerary-edit')}
        />
      )}

      {screen === 'my-booking-itinerary-edit' && (
        <MyBookingItineraryEditScreen
          assets={myBookingAssets}
          detailAssets={myBookingDetailAssets}
          initialDays={activeItineraryDays}
          suggestionGroups={itinerarySuggestionGroups}
          onBack={() => setScreen('my-booking-itinerary')}
          onSave={(days) => {
            if (selectedMyBookingId) {
              setItineraryByBookingId((prev) => ({ ...prev, [selectedMyBookingId]: days }))
            }

            setScreen('my-booking-itinerary')
          }}
        />
      )}

      {screen === 'umrah-question' && (
        <UmrahQuestionScreen
          assets={umrahQuestionAssets}
          onClose={() => setScreen('home')}
          onNext={(selectedDate, alreadyHasVisa) => {
            setTravelDate(selectedDate)
            setHotelStartDate(selectedDate)
            setHotelEndDate(addDays(selectedDate, onboardingConfig.defaultHotelNightCount))
            setHasVisa(alreadyHasVisa)
            setPaymentCompletedAt(null)
            setScreen('umrah-traveler')
          }}
        />
      )}

      {screen === 'umrah-traveler' && (
        <UmrahTravelerScreen
          assets={umrahTravelerAssets}
          participants={travelerParticipants}
          selectedRoom={travelerRoom}
          onChangeParticipants={handleChangeParticipants}
          onSelectRoom={setTravelerRoom}
          onBack={() => setScreen('umrah-question')}
          onClose={() => setScreen('home')}
          onNext={() => setScreen('umrah-departure')}
        />
      )}

      {screen === 'umrah-departure' && (
        <UmrahDepartureScreen
          assets={umrahDepartureAssets}
          airports={departureAirportOptions}
          selectedAirportCode={departureCode}
          onSelectAirport={setDepartureCode}
          onBack={() => setScreen('umrah-traveler')}
          onClose={() => setScreen('home')}
          onNext={() => setScreen('umrah-arrival-return')}
        />
      )}

      {screen === 'umrah-arrival-return' && (
        <UmrahArrivalReturnScreen
          assets={umrahArrivalReturnAssets}
          cities={cityOptions}
          arrivalCity={arrivalCity}
          returnCity={returnCity}
          onSelectArrival={setArrivalCity}
          onSelectReturn={setReturnCity}
          onBack={() => setScreen('umrah-departure')}
          onClose={() => setScreen('home')}
          onNext={() => setScreen('umrah-budget')}
        />
      )}

      {screen === 'umrah-budget' && (
        <UmrahBudgetScreen
          assets={umrahBudgetAssets}
          options={budgetOptions}
          selectedBudget={budgetRange}
          onSelectBudget={setBudgetRange}
          onBack={() => setScreen('umrah-arrival-return')}
          onClose={() => setScreen('home')}
          onNext={() => setScreen('umrah-processing')}
        />
      )}

      {screen === 'umrah-processing' && <UmrahProcessingScreen assets={umrahProcessingAssets} />}

      {screen === 'umrah-flight' && (
        <UmrahFlightScreen
          assets={umrahFlightAssets}
          flightOnly={flightSearchEntry === 'home'}
          journeyLabel={flightSelectionLeg === 'departure' ? 'Keberangkatan' : 'Kepulangan'}
          selectedCabinLabel={selectedFlightCabinLabel}
          departureLabel={flightSelectionLeg === 'departure' ? departureLabel : returnDestinationLabel}
          departureCode={flightSelectionLeg === 'departure' ? departureCode ?? 'CGK' : returnDestinationCode}
          destinationLabel={flightSelectionLeg === 'departure' ? destinationLabel : departureLabel}
          destinationCode={flightSelectionLeg === 'departure' ? destinationCode : departureCode ?? 'CGK'}
          dateLabel={flightSelectionLeg === 'departure' ? dateLabel : shortReturnDateLabel}
          summaryTimeRangeLabel={flightSelectionLeg === 'departure' ? departureSummaryTimeRange : returnSummaryTimeRange}
          passengerText={passengerText}
          offers={flightSelectionLeg === 'departure' ? flightOffers : returnFlightOffers}
          onSelectOffer={(offer) => {
            if (flightSelectionLeg === 'departure') {
              setSelectedFlightId(offer.id)
              setSelectedDepartureFareId(onboardingConfig.flightFareTemplates[0].id)
              setSelectedReturnFlightId(null)
              setSelectedReturnFareId(onboardingConfig.flightFareTemplates[0].id)
              setScreen('umrah-flight-detail')
              return
            }

            setSelectedReturnFlightId(offer.id)
            setSelectedReturnFareId(onboardingConfig.flightFareTemplates[0].id)
            setScreen('umrah-flight-detail')
          }}
          onBack={() => {
            if (flightSelectionLeg === 'return') {
              setFlightSelectionLeg('departure')
              return
            }

            setScreen(flightSearchEntry === 'maktub-ai' ? 'umrah-budget' : 'umrah-flight-search')
          }}
          onClose={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-flight-search' && (
        <UmrahFlightSearchScreen
          assets={umrahFlightSearchAssets}
          cabinClasses={onboardingConfig.flightCabinClasses}
          departureOptions={departureAirportOptions}
          destinationOptions={flightDestinationOptions}
          initialDepartureCode={departureCode}
          initialDestinationCity={arrivalCity}
          initialDepartureDate={initialFlightSearchDepartureDate}
          initialReturnDate={initialFlightSearchReturnDate}
          initialPassengers={travelerParticipants}
          initialCabinClass={selectedFlightCabinLabel}
          onBack={() => setScreen(flightSearchEntry === 'maktub-ai' ? 'umrah-budget' : 'home')}
          onSearch={(payload) => {
            const nextTravelerCount = Math.max(payload.passengers.dewasa + payload.passengers.anak + payload.passengers.bayi, 1)

            setDepartureCode(payload.departureCode)
            setArrivalCity(payload.destinationCity)
            setReturnCity(payload.destinationCity)
            setTravelDate(payload.departureDate)
            setReturnTravelDate(payload.returnDate)
            setHotelStartDate(payload.departureDate)
            setHotelEndDate(addDays(payload.departureDate, onboardingConfig.defaultHotelNightCount))
            setTravelerParticipants(payload.passengers)
            syncTravelerCollections(nextTravelerCount)
            setSelectedFlightCabinLabel(payload.cabinClass)

            const defaultFareId = onboardingConfig.flightFareTemplates[0].id
            const premiumFareId = onboardingConfig.flightFareTemplates[1]?.id ?? defaultFareId
            const isBaseCabin = payload.cabinClass === onboardingConfig.flightCabinClasses[0]
            const fareId = isBaseCabin ? defaultFareId : premiumFareId
            setSelectedDepartureFareId(fareId)
            setSelectedReturnFareId(fareId)

            setFlightSelectionLeg('departure')
            setSelectedFlightId(null)
            setSelectedReturnFlightId(null)
            setScreen('umrah-flight')
          }}
        />
      )}

      {screen === 'umrah-hotel-search' && (
        <UmrahHotelSearchScreen
          assets={umrahHotelSearchAssets}
          destinationOptions={hotelDestinationOptions}
          recentDestinations={onboardingConfig.hotelRecentCities}
          nearbyDestination={onboardingConfig.hotelNearbyCity}
          initialDestinationCity={arrivalCity}
          initialCheckInDate={initialHotelSearchCheckInDate}
          initialCheckOutDate={initialHotelSearchCheckOutDate}
          initialGuests={Math.max(totalParticipants, onboardingConfig.defaultHotelGuestCount)}
          onBack={() => setScreen('home')}
          onSearch={(payload) => {
            const nextGuestCount = Math.max(payload.guests, 1)

            setArrivalCity(payload.destinationCity)
            setReturnCity(payload.destinationCity)
            setHotelStartDate(payload.checkInDate)
            setHotelEndDate(payload.checkOutDate)
            setTravelDate(payload.checkInDate)
            setTravelerParticipants({ dewasa: nextGuestCount, anak: 0, bayi: 0 })
            syncTravelerCollections(nextGuestCount)
            setHotelSelectionLeg('departure')
            setSelectedHotelId(null)
            setSelectedHotelRoomId(null)
            setSelectedReturnHotelId(null)
            setSelectedReturnHotelRoomId(null)
            setScreen('umrah-hotel')
          }}
        />
      )}

      {screen === 'umrah-flight-detail' && selectedDepartureFare && selectedReturnFare && (
        <UmrahFlightDetailScreen
          assets={umrahTicketAssets}
          flightOnly={flightSearchEntry === 'home'}
          journeyLabel={flightSelectionLeg === 'departure' ? 'Keberangkatan' : 'Kepulangan'}
          travelerCount={travelerCount}
          fareOptions={flightSelectionLeg === 'departure' ? departureFareOptions : returnFareOptions}
          selectedFareId={flightSelectionLeg === 'departure' ? selectedDepartureFare.id : selectedReturnFare.id}
          onSelectFare={(fareId) => {
            if (flightSelectionLeg === 'departure') {
              setSelectedDepartureFareId(fareId)
              return
            }

            setSelectedReturnFareId(fareId)
          }}
          onBack={() => setScreen('umrah-flight')}
          onClose={() => setScreen('home')}
          onNext={() => {
            if (flightSelectionLeg === 'departure') {
              setFlightSelectionLeg('return')
              setScreen('umrah-flight')
              return
            }

            if (flightSearchEntry === 'home') {
              setScreen('umrah-ticket-info')
              return
            }

            setScreen('umrah-ticket-info')
          }}
        />
      )}

      {screen === 'umrah-ticket-info' && selectedDepartureFare && selectedReturnFare && (
        <UmrahTicketInfoScreen
          assets={umrahTicketAssets}
          airline={selectedFlightOffer?.airline ?? 'Oman Air'}
          airlineLogo={selectedFlightOffer?.airlineLogo ?? umrahFlightAssets.omanAirLogo}
          returnAirline={selectedReturnFlightOffer?.airline ?? selectedFlightOffer?.airline ?? 'Oman Air'}
          returnAirlineLogo={selectedReturnFlightOffer?.airlineLogo ?? selectedFlightOffer?.airlineLogo ?? umrahFlightAssets.omanAirLogo}
          departureLabel={departureLabel}
          departureCode={departureCode ?? 'CGK'}
          destinationLabel={destinationLabel}
          destinationCode={destinationCode}
          departureDateLabel={shortDepartureDateLabel}
          returnDateLabel={shortReturnDateLabel}
          departureTime={selectedFlightDepartureTime}
          arrivalTime={selectedFlightArrivalTime}
          returnDepartureTime={selectedReturnDepartureTime}
          returnArrivalTime={selectedReturnArrivalTime}
          durationLabel={selectedFlightDuration}
          returnDurationLabel={selectedReturnDuration}
          departureFlightCode={selectedFlightOffer?.id.toUpperCase() ?? 'JT-690'}
          departureCabinLabel={selectedDepartureFare.name}
          departureBaggageLabel={selectedDepartureFare.features.find((f) => f.icon === 'bag' && f.available)?.label ?? 'Bagasi Kabin 7kg'}
          departureAircraftLabel={selectedFlightOffer?.airline === 'Saudi Arabia Airlines' ? 'Boeing 777' : 'Boeing 737'}
          departureSeatLayoutLabel="3-3"
          departureSeatPitchLabel="29 inches (Standar)"
          returnFlightCode={selectedReturnFlightOffer?.id.toUpperCase() ?? selectedFlightOffer?.id.toUpperCase() ?? 'JT-690'}
          returnCabinLabel={selectedReturnFare.name}
          returnBaggageLabel={selectedReturnFare.features.find((f) => f.icon === 'bag' && f.available)?.label ?? 'Bagasi Kabin 7kg'}
          returnAircraftLabel={(selectedReturnFlightOffer ?? selectedFlightOffer)?.airline === 'Saudi Arabia Airlines' ? 'Boeing 777' : 'Boeing 737'}
          returnSeatLayoutLabel="3-3"
          returnSeatPitchLabel="29 inches (Standar)"
          travelerNames={travelerNames}
          contactName={userProfile.name || travelerNames[0]}
          contactEmail={userProfile.email || onboardingConfig.defaultContact.email}
          contactPhone={userProfile.phone || onboardingConfig.defaultContact.phone}
          totalPrice={selectedDepartureFare.totalPrice + selectedReturnFare.totalPrice}
          flightOnly={flightSearchEntry === 'home'}
          onBack={() => setScreen('umrah-flight-detail')}
          onAddPassenger={() => {
            setTicketInfoValidationMessage('')
            const nextIndex = passengerForms.findIndex((form) => !form.firstMiddleName.trim())
            setActivePassengerIndex(nextIndex >= 0 ? nextIndex : 0)
            setScreen('umrah-passenger-form')
          }}
          onEditPassenger={(index) => {
            setTicketInfoValidationMessage('')
            setActivePassengerIndex(index)
            setScreen('umrah-passenger-form')
          }}
          validationMessage={ticketInfoValidationMessage}
          onNext={() => {
            const incompleteTravelerIndex = passengerForms.slice(0, travelerCount).findIndex((form) => !isPassengerFormComplete(form))

            if (incompleteTravelerIndex !== -1) {
              setTicketInfoValidationMessage(
                `Data jamaah ${incompleteTravelerIndex + 1} belum lengkap. Mohon lengkapi data jamaah terlebih dahulu.`,
              )
              return
            }

            setTicketInfoValidationMessage('')

            if (flightSearchEntry === 'home') {
              setPaymentFlow('package')
              setScreen('umrah-payment-method')
              return
            }

            setHotelSelectionLeg('departure')
            setSelectedReturnHotelId(null)
            setSelectedReturnHotelRoomId(null)
            setScreen('umrah-hotel')
          }}
        />
      )}

      {screen === 'umrah-hotel' && (
        <UmrahHotelScreen
          assets={umrahHotelAssets}
          cityLabel={
            isHotelOnlyFlow
              ? arrivalCity ?? onboardingConfig.hotelNearbyCity
              : hotelSelectionLeg === 'departure'
                ? onboardingConfig.defaultHotelCityLabel
                : secondaryHotelCityLabel
          }
          guestSummaryText={`${travelerParticipants.dewasa} Dewasa`}
          isSearchHotelOnly={isHotelOnlyFlow}
          sortOptions={onboardingConfig.hotelSortOptions}
          priceRanges={onboardingConfig.hotelPriceRanges}
          propertyTypes={onboardingConfig.hotelPropertyTypes}
          facilityOptions={onboardingConfig.hotelFacilityOptions}
          checkInLabel={hotelCheckInLabel}
          checkOutLabel={hotelCheckOutLabel}
          nightsLabel={`${hotelNights} malam`}
          initialStartDate={hotelStartValue}
          initialEndDate={hotelEndValue}
          passengerText={passengerText}
          roomText={`${roomCount} kamar`}
          hotels={hotelOffers}
          onBack={() => {
            if (isHotelOnlyFlow) {
              setScreen('umrah-hotel-search')
              return
            }

            if (hotelSelectionLeg === 'return') {
              setHotelSelectionLeg('departure')
              setScreen('umrah-hotel-ticket-info')
              return
            }

            setScreen('umrah-ticket-info')
          }}
          onSaveDateRange={(startDate, endDate) => {
            setHotelStartDate(startDate)
            setHotelEndDate(endDate)
          }}
          onSelectHotel={(hotel) => {
            if (hotelSelectionLeg === 'departure') {
              setSelectedHotelId(hotel.id)
              setSelectedHotelRoomId(null)
            } else {
              setSelectedReturnHotelId(hotel.id)
              setSelectedReturnHotelRoomId(null)
            }

            setScreen('umrah-hotel-detail')
          }}
        />
      )}

      {screen === 'umrah-hotel-detail' && (hotelSelectionLeg === 'departure' ? selectedHotelDetail : selectedReturnHotelDetail) && (
        <UmrahHotelDetailScreen
          assets={umrahHotelAssets}
          detail={hotelSelectionLeg === 'departure' ? selectedHotelDetail! : selectedReturnHotelDetail!}
          selectedRoomId={hotelSelectionLeg === 'departure' ? selectedHotelRoomId : selectedReturnHotelRoomId}
          isSearchHotelOnly={isHotelOnlyFlow}
          onBack={() => setScreen('umrah-hotel')}
          onSelectRoom={(room) => {
            if (hotelSelectionLeg === 'departure') {
              setSelectedHotelRoomId(room.id)
            } else {
              setSelectedReturnHotelRoomId(room.id)
            }

            if (isHotelOnlyFlow) {
              setPaymentFlow('package')
              setScreen('umrah-payment-overview')
              return
            }

            setScreen('umrah-hotel-ticket-info')
          }}
        />
      )}

      {screen === 'umrah-hotel-ticket-info' &&
        (hotelSelectionLeg === 'departure'
          ? selectedHotelOffer && selectedHotelRoom
          : selectedReturnHotelOffer && selectedReturnHotelRoom) && (
        <UmrahHotelTicketInfoScreen
          assets={umrahHotelAssets}
          hotelImage={hotelSelectionLeg === 'departure' ? selectedHotelOffer!.image : selectedReturnHotelOffer!.image}
          hotelName={hotelSelectionLeg === 'departure' ? selectedHotelOffer!.name : selectedReturnHotelOffer!.name}
          roomName={hotelSelectionLeg === 'departure' ? selectedHotelRoom!.name : selectedReturnHotelRoom!.name}
          travelerCount={travelerCount}
          travelerText={`${travelerParticipants.dewasa} Dewasa / Kamar`}
          checkInLabel={`${hotelCheckInLabel} (16:00)`}
          checkOutLabel={`${hotelCheckOutLabel} (12:00)`}
          contactName={userProfile.name || travelerNames[0]}
          contactEmail={userProfile.email || onboardingConfig.defaultContact.email}
          contactPhone={userProfile.phone || onboardingConfig.defaultContact.phone}
          totalPrice={hotelSelectionLeg === 'departure' ? selectedHotelRoom!.totalPrice : selectedReturnHotelRoom!.totalPrice}
          totalLabel={hotelSelectionLeg === 'departure' ? selectedHotelRoom!.totalLabel : selectedReturnHotelRoom!.totalLabel}
          onBack={() => setScreen('umrah-hotel-detail')}
          onNext={() => {
            if (isHotelOnlyFlow) {
              setPaymentFlow('package')
              setScreen('umrah-payment-overview')
              return
            }

            if (hotelSelectionLeg === 'departure') {
              setHotelSelectionLeg('return')
              setScreen('umrah-hotel')
              return
            }

            setScreen('umrah-payment-overview')
          }}
        />
      )}

      {screen === 'umrah-payment-overview' && selectedHotelRoom && (
        <UmrahPaymentOverviewScreen
          assets={umrahPaymentAssets}
          hotels={hotelPaymentCards}
          flights={[
            {
              id: 'flight-outbound',
              fromTime: selectedFlightDepartureTime,
              fromCode: departureCode ?? 'CGK',
              duration: selectedFlightDuration,
              mode: 'Langsung',
              toTime: selectedFlightArrivalTime,
              toCode: destinationCode,
              airline: selectedFlightOffer?.airline ?? 'Oman Air',
              price: paymentBreakdown.flightDeparture,
              isSelected: true,
            },
            {
              id: 'flight-return',
              fromTime: selectedReturnDepartureTime,
              fromCode: returnDestinationCode,
              duration: selectedReturnDuration,
              mode: 'Langsung',
              toTime: selectedReturnArrivalTime,
              toCode: departureCode ?? 'CGK',
              airline: selectedReturnFlightOffer?.airline ?? selectedFlightOffer?.airline ?? 'Oman Air',
              price: paymentBreakdown.flightReturn,
              isSelected: false,
            },
          ]}
          breakdown={isHotelOnlyFlow ? activePaymentBreakdown : paymentBreakdown}
          travelerCount={travelerCount}
          hotelNightsLabel={`${hotelNights + 1} hari ${hotelNights} malam`}
          primaryHotelCityLabel={isHotelOnlyFlow ? arrivalCity ?? onboardingConfig.hotelNearbyCity : primaryHotelCityLabel}
          secondaryHotelCityLabel={secondaryHotelCityLabel}
          isHotelOnly={isHotelOnlyFlow}
          onBack={() => {
            if (isHotelOnlyFlow) {
              setScreen('umrah-hotel-detail')
              return
            }

            setHotelSelectionLeg('return')
            setScreen('umrah-hotel-ticket-info')
          }}
          onNext={() => {
            setPaymentFlow('package')
            setScreen('umrah-payment-method')
          }}
        />
      )}

      {screen === 'umrah-payment-method' && (
        <UmrahPaymentMethodScreen
          assets={umrahPaymentAssets}
          breakdown={activePaymentBreakdown}
          hideStepper={isHotelOnlyFlow}
          paymentFor={paymentFlow}
          packageSummaryLabel={isHotelOnlyFlow && paymentFlow === 'package' ? 'Harga tiket hotel' : undefined}
          visaLabel={visaPackageLabelMap[selectedVisaPackage]}
          travelerCount={travelerCount}
          flightOnly={flightSearchEntry === 'home' && paymentFlow !== 'visa'}
          onBack={() => {
            if (paymentFlow === 'visa') {
              setScreen('umrah-visa-services')
              return
            }

            if (isHotelOnlyFlow) {
              setScreen('umrah-payment-overview')
              return
            }

            setScreen(flightSearchEntry === 'home' ? 'umrah-ticket-info' : 'umrah-payment-overview')
          }}
          onPay={(method) => {
            setSelectedPaymentMethod(method)
            setScreen('umrah-payment-pending')
          }}
        />
      )}

      {screen === 'umrah-payment-pending' && (
        <UmrahPaymentPendingScreen
          assets={umrahPaymentAssets}
          hideStepper={isHotelOnlyFlow}
          flightOnly={flightSearchEntry === 'home'}
          virtualAccountNumber={onboardingConfig.defaultContact.virtualAccountNumber}
          virtualAccountName={selectedPaymentLabel}
          totalPayment={activePaymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-method')}
          onNext={() => {
            const paidAt = new Date()
            setPaymentCompletedAt(paidAt)

            if (paymentFlow === 'package' && !isHotelOnlyFlow) {
              const bookingTemplate = dynamicBookingItems[0]
              const detailTemplate = dynamicMyBookingDetailsById[primaryBookingId]

              if (bookingTemplate && detailTemplate) {
                const bookingId = createBookingId()
                const settledStatus = resolveSettledBookingStatus(travelDate, hotelNights)

                setSavedBookingItems((prev) => [{ ...bookingTemplate, id: bookingId, status: settledStatus }, ...prev])
                setSavedBookingDetailsById((prev) => ({
                  ...prev,
                  [bookingId]: { ...detailTemplate, bookingId, status: settledStatus },
                }))
              }
            }

            setScreen('umrah-payment-success')
          }}
        />
      )}

      {screen === 'umrah-payment-success' && (
        <UmrahPaymentSuccessScreen
          assets={umrahPaymentAssets}
          hideStepper={isHotelOnlyFlow}
          flightOnly={flightSearchEntry === 'home'}
          virtualAccountNumber={onboardingConfig.defaultContact.virtualAccountNumber}
          virtualAccountName={selectedPaymentLabel}
          totalPayment={activePaymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-pending')}
          onNext={() => {
            const shouldContinueToVisaServices = paymentFlow === 'package' && flightSearchEntry !== 'home' && !isHotelOnlyFlow
            setScreen(shouldContinueToVisaServices ? 'umrah-visa-services' : 'umrah-payment-complete')
          }}
        />
      )}

      {screen === 'umrah-payment-complete' && (
        <UmrahPaymentCompleteScreen
          assets={umrahCompletionAssets}
          ctaLabel="Lihat Paket Umrah Saya"
          onBack={() => setScreen('umrah-payment-success')}
          onNext={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-visa-services' && (
        <UmrahVisaServicesScreen
          packages={onboardingConfig.visaPackages}
          landArrangementPrices={onboardingConfig.visaLandArrangementPrices}
          additionalServices={onboardingConfig.visaAdditionalServices}
          includedServices={onboardingConfig.visaIncludedServices}
          pairedCityLabel={onboardingConfig.defaultHotelCityLabel}
          cityLabel={secondaryHotelCityLabel}
          formCompleted={isVisaFormCompleted}
          selectedPackageId={selectedVisaPackage}
          travelerCount={travelerCount}
          hideStepper={visaFromHome}
          onBack={() => {
            if (visaFromHome) {
              setVisaFromHome(false)
              setScreen('home')
            } else {
              setScreen('umrah-payment-success')
            }
          }}
          onSelectPackage={setSelectedVisaPackage}
          onOpenForm={() => setScreen('umrah-visa-form-personal')}
          onBuy={() => {
            setPaymentFlow('visa')
            setHasVisa(true)
            setScreen('umrah-payment-method')
          }}
          onSkip={() => {
            setVisaFromHome(false)
            setScreen('home')
          }}
        />
      )}

      {screen === 'umrah-visa-form-personal' && (
        <UmrahVisaFormPersonalScreen
          value={visaPersonalForm}
          monthOptions={onboardingConfig.monthOptions}
          nationalityOptions={onboardingConfig.nationalityOptions}
          yearSpan={onboardingConfig.passportYearSpan}
          hideStepper={visaFromHome}
          onChange={(field, value) => {
            setVisaPersonalForm((prev) => ({ ...prev, [field]: value }))
          }}
          onBack={() => setScreen('umrah-visa-services')}
          onNext={() => setScreen('umrah-visa-form-docs')}
        />
      )}

      {screen === 'umrah-visa-form-docs' && (
        <UmrahVisaFormDocsScreen
          value={visaDocsForm}
          hideStepper={visaFromHome}
          onUpload={(field, file) => {
            setVisaDocsForm((prev) => ({ ...prev, [field]: file }))
          }}
          onBack={() => setScreen('umrah-visa-form-personal')}
          onSave={() => setScreen('umrah-visa-services')}
        />
      )}

      {screen === 'umrah-passenger-form' && (
        <UmrahPassengerFormScreen
          assets={umrahTicketAssets}
          title={`Dewasa ${activePassengerIndex + 1}`}
          form={activePassengerForm}
          nationalityOptions={nationalityOptions}
          dayOptions={dayOptions}
          monthOptions={monthOptions}
          birthYearOptions={birthYearOptions}
          passportExpiryYearOptions={passportExpiryYearOptions}
          onBack={() => setScreen('umrah-ticket-info')}
          onOpenCamera={() => setScreen('umrah-passenger-camera')}
          onChange={(field, value) => {
            setPassengerForms((prev) => {
              const next = [...prev]
              const current = next[activePassengerIndex] ?? createInitialPassengerForm()
              next[activePassengerIndex] = { ...current, [field]: value }
              return next
            })
          }}
          onSave={() => {
            const fallbackName = `Jamaah ${activePassengerIndex + 1}`
            const newName = activePassengerForm.firstMiddleName.trim() || fallbackName

            setTravelerNames((prev) => {
              const next = [...prev]
              next[activePassengerIndex] = newName
              return next
            })

            setTicketInfoValidationMessage('')
            setScreen('umrah-ticket-info')
          }}
        />
      )}

      {screen === 'umrah-passenger-camera' && (
        <UmrahPassengerCameraScreen
          assets={umrahTicketAssets}
          onBack={() => setScreen('umrah-passenger-form')}
          onCapture={(photoDataUrl) => {
            setPassengerForms((prev) => {
              const next = [...prev]
              const current = next[activePassengerIndex] ?? createInitialPassengerForm()
              next[activePassengerIndex] = { ...current, passportPhoto: photoDataUrl }
              return next
            })
            setScreen('umrah-passenger-form')
          }}
        />
      )}

      {screen === 'layanan-lain' && (
        <LayananLainScreen
          assets={layananLainAssets}
          services={[
            {
              id: 'layanan-tambahan',
              label: 'Layanan Tambahan',
              icon: layananLainAssets.layananTambahanIcon,
              onClick: () => ensureLoggedInForService('layanan-lain', () => {}),
            },
            {
              id: 'chat-assistant',
              label: 'Chat Assistant',
              icon: layananLainAssets.chatAssistantIcon,
              onClick: () => openChatAssistant('layanan-lain'),
            },
            {
              id: 'rekomendasi-paket',
              label: 'Rekomendasi Paket',
              icon: layananLainAssets.rekomendasiPaketIcon,
              onClick: () => ensureLoggedInForService('layanan-lain', () => setScreen('rekomendasi-paket')),
            },
          ]}
          onOpenHome={() => setScreen('home')}
          onOpenMyBooking={() => ensureLoggedInForService('layanan-lain', () => setScreen('my-booking'))}
          onOpenInformasi={() => setScreen('informasi')}
          onOpenAkun={() => openAkunMenu('layanan-lain')}
        />
      )}

      {screen === 'informasi' && (
        <InformasiScreen
          assets={homeAssets}
          content={informasiContent}
          onOpenHome={() => setScreen('home')}
          onOpenMyBooking={() => ensureLoggedInForService('informasi', () => setScreen('my-booking'))}
          onOpenLayananLain={() => setScreen('layanan-lain')}
          onOpenArahKiblat={() => setScreen('arah-kiblat-jadwal')}
          onOpenPanduanUmrah={() => setScreen('panduan-umrah')}
          onOpenDoaUmrah={() => setScreen('doa-umrah')}
          onOpenDzikirHarian={() => setScreen('dzikir-harian')}
          onOpenDoaHarian={() => setScreen('doa-harian')}
          onOpenTataCaraSholat={() => setScreen('tata-cara-sholat')}
          onOpenInformasiDetail={() => setScreen('informasi-detail')}
          onOpenAkun={() => openAkunMenu('informasi')}
        />
      )}

      {screen === 'informasi-detail' && (
        <InformasiDetailScreen content={informasiDetailContent} onBack={() => setScreen('informasi')} />
      )}

      {screen === 'arah-kiblat-jadwal' && (
        <ArahKiblatJadwalScreen content={kiblatScheduleContent} onBack={() => setScreen('informasi')} />
      )}

      {screen === 'panduan-umrah' && (
        <PanduanUmrahScreen content={panduanUmrahContent} onBack={() => setScreen('informasi')} />
      )}

      {screen === 'doa-umrah' && (
        <DoaUmrahScreen
          content={doaUmrahContent}
          onBack={() => setScreen('informasi')}
          onOpenDetail={(itemId) => {
            setSelectedDoaUmrahDetailId(itemId)
            setScreen('doa-umrah-detail')
          }}
        />
      )}

      {screen === 'dzikir-harian' && (
        <DzikirHarianScreen
          content={dzikirHarianContent}
          onBack={() => setScreen('informasi')}
          onOpenDetail={(itemId) => {
            setSelectedDzikirHarianDetailId(itemId)
            setScreen('dzikir-harian-detail')
          }}
        />
      )}

      {screen === 'doa-harian' && (
        <DoaHarianScreen content={doaHarianContent} onBack={() => setScreen('informasi')} />
      )}

      {screen === 'tata-cara-sholat' && (
        <TataCaraSholatScreen
          content={tataCaraSholatContent}
          onBack={() => setScreen('informasi')}
          onOpenDetail={(itemId) => {
            setSelectedTataCaraSholatDetailId(itemId)
            setScreen('tata-cara-sholat-detail')
          }}
        />
      )}

      {screen === 'dzikir-harian-detail' && (
        <DzikirHarianDetailScreen
          content={dzikirHarianDetailById[selectedDzikirHarianDetailId ?? dzikirHarianContent.items[0].id]}
          onBack={() => setScreen('dzikir-harian')}
        />
      )}

      {screen === 'doa-umrah-detail' && (
        <DoaUmrahDetailScreen
          content={doaUmrahDetailById[selectedDoaUmrahDetailId ?? doaUmrahContent.items[0].id]}
          onBack={() => setScreen('doa-umrah')}
        />
      )}

      {screen === 'tata-cara-sholat-detail' && (
        <TataCaraSholatDetailScreen
          content={tataCaraSholatDetailById[selectedTataCaraSholatDetailId ?? tataCaraSholatContent.items[0].id]}
          onBack={() => setScreen('tata-cara-sholat')}
        />
      )}

      {screen === 'rekomendasi-paket' && (
        <RekomendasiPaketScreen
          assets={rekomendasiPaketAssets}
          packages={rekomendasiPaketItems}
          onBack={() => setScreen('layanan-lain')}
          onSelectPackage={(id) => {
            setSelectedRekomendasiPaketId(id)
            setScreen('rekomendasi-paket-payment')
          }}
        />
      )}

      {screen === 'rekomendasi-paket-payment' && (
        <UmrahPaymentMethodScreen
          assets={umrahPaymentAssets}
          title="Pembayaran"
          payLabel="Bayar"
          hideStepper
          breakdown={rekomendasiPaketBreakdown}
          paymentFor="package"
          packageSummaryLabel="Harga Mutawif, Kendaraan, Asuransi perjalanan"
          taxLabel="Pajak 11%"
          onBack={() => setScreen('rekomendasi-paket')}
          onPay={(method) => {
            setSelectedPaymentMethod(method)
            setScreen('rekomendasi-paket-payment-pending')
          }}
        />
      )}

      {screen === 'rekomendasi-paket-payment-pending' && (
        <UmrahPaymentPendingScreen
          assets={umrahPaymentAssets}
          title={selectedPaymentLabel}
          ctaLabel="Selesai"
          ctaDisabled={false}
          hideStepper
          virtualAccountNumber={onboardingConfig.defaultContact.virtualAccountNumber}
          virtualAccountName={selectedPaymentLabel}
          totalPayment={rekomendasiPaketBreakdown.grandTotal}
          onBack={() => setScreen('rekomendasi-paket-payment')}
          onNext={() => {
            const paidAt = new Date()
            setPaymentCompletedAt(paidAt)

            const bookingTemplate = dynamicBookingItems[0]
            const detailTemplate = dynamicMyBookingDetailsById[primaryBookingId]

            if (bookingTemplate && detailTemplate) {
              const bookingId = createBookingId()
              const settledStatus = resolveSettledBookingStatus(travelDate, hotelNights)

              setSavedBookingItems((prev) => [
                {
                  ...bookingTemplate,
                  id: bookingId,
                  packageName: selectedRekomendasiPaket?.name ?? bookingTemplate.packageName,
                  durationLabel: selectedRekomendasiPaket?.durationLabel ?? bookingTemplate.durationLabel,
                  bookingDateLabel: selectedRekomendasiPaket?.dateLabel ?? bookingTemplate.bookingDateLabel,
                  status: settledStatus,
                  totalPriceLabel: formatCurrency(rekomendasiPaketBreakdown.grandTotal),
                },
                ...prev,
              ])
              setSavedBookingDetailsById((prev) => ({
                ...prev,
                [bookingId]: {
                  ...detailTemplate,
                  bookingId,
                  title: selectedRekomendasiPaket?.name ?? detailTemplate.title,
                  status: settledStatus,
                  payment: {
                    ...detailTemplate.payment,
                    totalLabel: formatCurrency(rekomendasiPaketBreakdown.grandTotal),
                    breakdown: [
                      {
                        label: 'Harga Mutawif, Kendaraan, Asuransi perjalanan',
                        amountLabel: formatCurrency(rekomendasiPaketBreakdown.subtotal),
                      },
                      { label: 'Biaya layanan', amountLabel: formatCurrency(rekomendasiPaketBreakdown.serviceFee) },
                      { label: 'Pajak 11%', amountLabel: formatCurrency(rekomendasiPaketBreakdown.taxAmount) },
                      {
                        label: 'Total harga',
                        amountLabel: formatCurrency(rekomendasiPaketBreakdown.grandTotal),
                        emphasized: true,
                      },
                    ],
                    methodLabel: selectedPaymentLabel,
                  },
                },
              }))
            }

            setScreen('rekomendasi-paket-payment-complete')
          }}
        />
      )}

      {screen === 'rekomendasi-paket-payment-complete' && (
        <UmrahPaymentCompleteScreen
          assets={umrahCompletionAssets}
          ctaLabel="Lihat Paket Umrah Saya"
          onBack={() => setScreen('rekomendasi-paket-payment-pending')}
          onNext={() => setScreen('my-booking')}
        />
      )}

      {screen === 'chat-assistant' && (
        <ChatAssistantScreen
          displayName={userProfile.name || 'Teman Maktub'}
          onBack={() => setScreen(chatAssistantBackScreen)}
        />
      )}

      {screen === 'notifikasi' && (
        <NotifikasiScreen
          assets={notifikasiAssets}
          notifications={notificationItems}
          onBack={() => setScreen(notifikasiBackScreen)}
        />
      )}

      {screen === 'login-guest' && (
        <LoginGuestScreen
          assets={loginGuestAssets}
          content={loginGuestContent}
          onClose={() => setScreen(loginGuestBackScreen)}
          onContinueWithGoogle={() => {}}
          onContinueWithPhone={(phoneNumber) => {
            const normalizedPhone = normalizeIndonesianPhoneNumber(phoneNumber)

            if (!normalizedPhone) {
              return
            }

            setLoginPhoneNumber(normalizedPhone)
            setScreen('login-name')
          }}
        />
      )}

      {screen === 'login-name' && (
        <LoginNameScreen
          assets={loginNameAssets}
          content={loginNameContent}
          initialName={userProfile.name.trim().toLowerCase() === 'nama anda' ? '' : userProfile.name}
          onBack={() => setScreen('login-guest')}
          onContinue={(name) => {
            if (!name) {
              return
            }

            setUserProfile((previous) => ({
              ...previous,
              name,
              email: previous.email,
              phone: loginPhoneNumber || previous.phone,
            }))
            setIsLoggedIn(true)
            setScreen('home')
            setShowProfileCompletionPopup(true)
          }}
        />
      )}

      {screen === 'profile' && (
        <ProfileScreen
          assets={homeAssets}
          profile={userProfile}
          onOpenProfileSettings={() => setScreen('profile-settings')}
          onOpenHome={() => setScreen('home')}
          onOpenMyBooking={() => setScreen('my-booking')}
          onOpenLayananLain={() => setScreen('layanan-lain')}
          onOpenInformasi={() => setScreen('informasi')}
          onOpenNotifikasi={() => {
            setNotifikasiBackScreen('profile')
            setScreen('notifikasi')
          }}
          onLogout={() => {
            setIsLoggedIn(false)
            setLoginPhoneNumber('')
            setUserProfile(profileData)
            setScreen('home')
          }}
        />
      )}

      {screen === 'profile-settings' && (
        <ProfileSettingsScreen
          profile={userProfile}
          onBack={() => setScreen('profile')}
          onSaveProfile={(nextProfile) => {
            setUserProfile(nextProfile)
            if (isValidEmail(nextProfile.email) && nextProfile.gender.trim()) {
              setShowProfileCompletionPopup(false)
            }
          }}
          onDeleteAccount={() => {
            setIsLoggedIn(false)
            setLoginPhoneNumber('')
            setUserProfile(profileData)
            setShowProfileCompletionPopup(false)
            setScreen('home')
          }}
        />
      )}

      {showProfileCompletionPopup && isLoggedIn && isProfileIncomplete && (
        <div className="profile-completion-overlay" role="dialog" aria-modal>
          <div className="profile-completion-popup">
            <h3>Lengkapi Profil Anda</h3>
            <p>Agar pengalaman lebih optimal, mohon lengkapi informasi profil terlebih dahulu.</p>
            <div>
              <button type="button" className="secondary" onClick={() => setShowProfileCompletionPopup(false)}>
                Nanti
              </button>
              <button
                type="button"
                className="primary"
                onClick={() => {
                  setShowProfileCompletionPopup(false)
                  setScreen('profile-settings')
                }}
              >
                Lengkapi
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default App
