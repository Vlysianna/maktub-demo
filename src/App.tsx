import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { HomeGuestScreen } from './features/onboarding/onboarding/components/HomeGuestScreen'
import { UmrahArrivalReturnScreen } from './features/onboarding/onboarding/components/UmrahArrivalReturnScreen'
import { UmrahBudgetScreen } from './features/onboarding/onboarding/components/UmrahBudgetScreen'
import { UmrahDepartureScreen } from './features/onboarding/onboarding/components/UmrahDepartureScreen'
import { UmrahFlightScreen } from './features/onboarding/onboarding/components/UmrahFlightScreen'
import { UmrahFlightDetailScreen } from './features/onboarding/onboarding/components/UmrahFlightDetailScreen'
import { UmrahPassengerCameraScreen } from './features/onboarding/onboarding/components/UmrahPassengerCameraScreen'
import { UmrahPassengerFormScreen } from './features/onboarding/onboarding/components/UmrahPassengerFormScreen'
import { UmrahProcessingScreen } from './features/onboarding/onboarding/components/UmrahProcessingScreen'
import { UmrahHotelDetailScreen } from './features/onboarding/onboarding/components/UmrahHotelDetailScreen'
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
  services,
  splashLogo,
  umrahArrivalReturnAssets,
  umrahFlightAssets,
  umrahHotelAssets,
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
} from './features/onboarding/onboarding/data'
import type { PassengerFormData, PaymentBreakdown, PaymentMethod, Screen, TicketFareOption } from './features/onboarding/onboarding/types'

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
    ticketPerPersonMin: 10_500_000,
    ticketPerPersonMax: 14_000_000,
    returnTicketDelta: 320_000,
    hotelMultiplier: 1,
  },
  'Lebih dari 40.000.000': {
    ticketPerPersonMin: 14_000_000,
    ticketPerPersonMax: 20_000_000,
    returnTicketDelta: 450_000,
    hotelMultiplier: 1.22,
  },
}

const defaultBudgetProfile = budgetProfiles['25.000.000 sampai 40.000.000']

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

function createTicketFareOptions(basePrice: number, travelerCount: number): TicketFareOption[] {
  const premiumTopUp = Math.max(1, Math.ceil(travelerCount / 2)) * 200_000

  return [
    {
      id: 'economy',
      name: 'Ekonomi',
      totalPrice: basePrice,
      features: [
        { label: 'Bagasi kabin 7 kg', available: true, icon: 'bag' },
        { label: 'Bagasi check-in 0 kg', available: true, icon: 'bag' },
        { label: 'Tidak bisa reschedule', available: false, icon: 'cancel' },
        { label: 'Tidak bisa refund', available: false, icon: 'cancel' },
        { label: 'Asuransi perjalanan', available: true, icon: 'check' },
      ],
    },
    {
      id: 'economy-plus',
      name: 'Ekonomi Plus',
      totalPrice: basePrice + premiumTopUp,
      features: [
        { label: 'Bagasi kabin 7 kg', available: true, icon: 'bag' },
        { label: 'Bagasi check-in 0 kg', available: true, icon: 'bag' },
        { label: 'Bisa reschedule', available: true, icon: 'check' },
        { label: 'Tidak bisa refund', available: false, icon: 'cancel' },
        { label: 'Asuransi perjalanan', available: true, icon: 'check' },
      ],
    },
  ]
}

function createInitialPassengerForm(): PassengerFormData {
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
    passportExpiryYear: '',
  }
}

const fallbackTravelDate = new Date(
  onboardingConfig.defaultTravelDate.year,
  onboardingConfig.defaultTravelDate.month,
  onboardingConfig.defaultTravelDate.day,
)

function App() {
  const [screen, setScreen] = useState<Screen>('splash')
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
  const [hotelStartDate, setHotelStartDate] = useState<Date | null>(null)
  const [hotelEndDate, setHotelEndDate] = useState<Date | null>(null)
  const [flightSelectionLeg, setFlightSelectionLeg] = useState<'departure' | 'return'>('departure')
  const [selectedFlightId, setSelectedFlightId] = useState<string | null>(null)
  const [selectedReturnFlightId, setSelectedReturnFlightId] = useState<string | null>(null)
  const [selectedDepartureFareId, setSelectedDepartureFareId] = useState<TicketFareOption['id']>('economy')
  const [selectedReturnFareId, setSelectedReturnFareId] = useState<TicketFareOption['id']>('economy')
  const [hotelSelectionLeg, setHotelSelectionLeg] = useState<'departure' | 'return'>('departure')
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null)
  const [selectedHotelRoomId, setSelectedHotelRoomId] = useState<string | null>(null)
  const [selectedReturnHotelId, setSelectedReturnHotelId] = useState<string | null>(null)
  const [selectedReturnHotelRoomId, setSelectedReturnHotelRoomId] = useState<string | null>(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('bni-va')
  const [hasVisa, setHasVisa] = useState(false)
  const [selectedVisaPackage, setSelectedVisaPackage] = useState<'visa-1-bulan' | 'visa-2-minggu' | 'visa-express'>('visa-1-bulan')
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
  const [travelerNames, setTravelerNames] = useState<string[]>([onboardingConfig.defaultContact.name])
  const [activePassengerIndex, setActivePassengerIndex] = useState(0)
  const [passengerForms, setPassengerForms] = useState<PassengerFormData[]>([createInitialPassengerForm()])

  const currentSlide = useMemo(() => walkthroughSlides[step - 1], [step])

  const handleNext = () => {
    if (step < walkthroughSlides.length) {
      setStep((prev) => prev + 1)
      return
    }

    setScreen('home')
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
    if (screen !== 'umrah-processing') {
      return
    }

    const timer = window.setTimeout(() => {
      setFlightSelectionLeg('departure')
      setSelectedFlightId(null)
      setSelectedReturnFlightId(null)
      setSelectedDepartureFareId('economy')
      setSelectedReturnFareId('economy')
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

        if (index === 0) {
          return onboardingConfig.defaultContact.name
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
  }, [travelDate])

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
  const yearOptions = Array.from({ length: onboardingConfig.passportYearSpan }, (_, index) => String(new Date().getFullYear() - index))
  const selectedPaymentLabel = onboardingConfig.paymentMethodLabels[selectedPaymentMethod]

  const isVisaPersonalCompleted = useMemo(() => Object.values(visaPersonalForm).every((value) => value.trim().length > 0), [visaPersonalForm])
  const isVisaDocsCompleted = useMemo(
    () => Boolean(visaDocsForm.passport && visaDocsForm.ktp && visaDocsForm.familyCard && visaDocsForm.photo),
    [visaDocsForm.familyCard, visaDocsForm.ktp, visaDocsForm.passport, visaDocsForm.photo],
  )
  const isVisaFormCompleted = isVisaPersonalCompleted && isVisaDocsCompleted

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
          onStartJourney={() => setScreen('umrah-question')}
        />
      )}

      {screen === 'umrah-question' && (
        <UmrahQuestionScreen
          assets={umrahQuestionAssets}
          onClose={() => setScreen('home')}
          onNext={(selectedDate) => {
            setTravelDate(selectedDate)
            setHotelStartDate(selectedDate)
            setHotelEndDate(addDays(selectedDate, onboardingConfig.defaultHotelNightCount))
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
          journeyLabel={flightSelectionLeg === 'departure' ? 'Keberangkatan' : 'Kepulangan'}
          selectedCabinLabel={flightSelectionLeg === 'departure' ? selectedDepartureFare.name : selectedReturnFare.name}
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
              setSelectedDepartureFareId('economy')
              setSelectedReturnFlightId(null)
              setSelectedReturnFareId('economy')
              setScreen('umrah-flight-detail')
              return
            }

            setSelectedReturnFlightId(offer.id)
            setSelectedReturnFareId('economy')
            setScreen('umrah-flight-detail')
          }}
          onBack={() => {
            if (flightSelectionLeg === 'return') {
              setFlightSelectionLeg('departure')
              return
            }

            setScreen('umrah-budget')
          }}
          onClose={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-flight-detail' && selectedDepartureFare && selectedReturnFare && (
        <UmrahFlightDetailScreen
          assets={umrahTicketAssets}
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
          travelerNames={travelerNames}
          contactName={travelerNames[0]}
          contactEmail={onboardingConfig.defaultContact.email}
          contactPhone={onboardingConfig.defaultContact.phone}
          totalPrice={selectedDepartureFare.totalPrice + selectedReturnFare.totalPrice}
          onBack={() => setScreen('umrah-flight-detail')}
          onAddPassenger={() => {
            const nextIndex = passengerForms.findIndex((form) => !form.firstMiddleName.trim())
            setActivePassengerIndex(nextIndex >= 0 ? nextIndex : 0)
            setScreen('umrah-passenger-form')
          }}
          onEditPassenger={(index) => {
            setActivePassengerIndex(index)
            setScreen('umrah-passenger-form')
          }}
          onNext={() => {
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
          cityLabel={hotelSelectionLeg === 'departure' ? onboardingConfig.defaultHotelCityLabel : secondaryHotelCityLabel}
          checkInLabel={hotelCheckInLabel}
          checkOutLabel={hotelCheckOutLabel}
          nightsLabel={`${hotelNights} malam`}
          initialStartDate={hotelStartValue}
          initialEndDate={hotelEndValue}
          passengerText={passengerText}
          roomText={`${roomCount} kamar`}
          hotels={hotelOffers}
          onBack={() => {
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
          onBack={() => setScreen('umrah-hotel')}
          onSelectRoom={(room) => {
            if (hotelSelectionLeg === 'departure') {
              setSelectedHotelRoomId(room.id)
            } else {
              setSelectedReturnHotelRoomId(room.id)
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
          contactName={travelerNames[0]}
          contactEmail={onboardingConfig.defaultContact.email}
          contactPhone={onboardingConfig.defaultContact.phone}
          totalPrice={hotelSelectionLeg === 'departure' ? selectedHotelRoom!.totalPrice : selectedReturnHotelRoom!.totalPrice}
          totalLabel={hotelSelectionLeg === 'departure' ? selectedHotelRoom!.totalLabel : selectedReturnHotelRoom!.totalLabel}
          onBack={() => setScreen('umrah-hotel-detail')}
          onNext={() => {
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
          breakdown={paymentBreakdown}
          travelerCount={travelerCount}
          hotelNightsLabel={`${hotelNights + 1} hari ${hotelNights} malam`}
          primaryHotelCityLabel={primaryHotelCityLabel}
          secondaryHotelCityLabel={secondaryHotelCityLabel}
          onBack={() => {
            setHotelSelectionLeg('return')
            setScreen('umrah-hotel-ticket-info')
          }}
          onNext={() => setScreen('umrah-payment-method')}
        />
      )}

      {screen === 'umrah-payment-method' && (
        <UmrahPaymentMethodScreen
          assets={umrahPaymentAssets}
          breakdown={paymentBreakdown}
          onBack={() => setScreen('umrah-payment-overview')}
          onPay={(method) => {
            setSelectedPaymentMethod(method)
            setScreen('umrah-payment-pending')
          }}
        />
      )}

      {screen === 'umrah-payment-pending' && (
        <UmrahPaymentPendingScreen
          assets={umrahPaymentAssets}
          virtualAccountNumber={onboardingConfig.defaultContact.virtualAccountNumber}
          virtualAccountName={selectedPaymentLabel}
          totalPayment={paymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-method')}
          onNext={() => setScreen('umrah-payment-success')}
        />
      )}

      {screen === 'umrah-payment-success' && (
        <UmrahPaymentSuccessScreen
          assets={umrahPaymentAssets}
          virtualAccountNumber={onboardingConfig.defaultContact.virtualAccountNumber}
          virtualAccountName={selectedPaymentLabel}
          totalPayment={paymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-pending')}
          onNext={() => setScreen(hasVisa ? 'umrah-payment-complete' : 'umrah-visa-services')}
        />
      )}

      {screen === 'umrah-payment-complete' && (
        <UmrahPaymentCompleteScreen
          assets={umrahCompletionAssets}
          onBack={() => setScreen('umrah-payment-success')}
          onNext={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-visa-services' && (
        <UmrahVisaServicesScreen
          cityLabel={secondaryHotelCityLabel}
          formCompleted={isVisaFormCompleted}
          selectedPackageId={selectedVisaPackage}
          travelerCount={travelerCount}
          onBack={() => setScreen('umrah-payment-success')}
          onSelectPackage={setSelectedVisaPackage}
          onOpenForm={() => setScreen('umrah-visa-form-personal')}
          onBuy={() => {
            setHasVisa(true)
            setScreen('umrah-payment-complete')
          }}
          onSkip={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-visa-form-personal' && (
        <UmrahVisaFormPersonalScreen
          value={visaPersonalForm}
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
          yearOptions={yearOptions}
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

            setScreen('umrah-ticket-info')
          }}
        />
      )}

      {screen === 'umrah-passenger-camera' && (
        <UmrahPassengerCameraScreen
          assets={umrahTicketAssets}
          onBack={() => setScreen('umrah-passenger-form')}
          onCapture={() => setScreen('umrah-passenger-form')}
        />
      )}
    </main>
  )
}

export default App
