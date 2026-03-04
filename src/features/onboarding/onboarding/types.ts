export type Screen =
  | 'splash'
  | 'walkthrough'
  | 'home'
  | 'my-booking'
  | 'my-booking-detail'
  | 'my-booking-itinerary'
  | 'my-booking-itinerary-edit'
  | 'umrah-question'
  | 'umrah-traveler'
  | 'umrah-departure'
  | 'umrah-arrival-return'
  | 'umrah-budget'
  | 'umrah-processing'
  | 'umrah-flight-search'
  | 'umrah-flight'
  | 'umrah-flight-detail'
  | 'umrah-ticket-info'
  | 'umrah-hotel-search'
  | 'umrah-hotel'
  | 'umrah-hotel-detail'
  | 'umrah-hotel-ticket-info'
  | 'umrah-payment-overview'
  | 'umrah-payment-method'
  | 'umrah-payment-pending'
  | 'umrah-payment-success'
  | 'umrah-payment-complete'
  | 'umrah-visa-services'
  | 'umrah-visa-form-personal'
  | 'umrah-visa-form-docs'
  | 'umrah-passenger-form'
  | 'umrah-passenger-camera'
  | 'layanan-lain'
  | 'informasi'
  | 'informasi-detail'
  | 'arah-kiblat-jadwal'
  | 'panduan-umrah'
  | 'doa-umrah'
  | 'rekomendasi-paket'
  | 'notifikasi'
  | 'login-guest'

export type WalkthroughSlide = {
  image: string
  text: string[]
}

export type BookingStatus = 'menunggu-pembayaran' | 'berlangsung' | 'akan-datang' | 'history'

export type BookingItem = {
  id: string
  packageName: string
  status: BookingStatus
  durationLabel: string
  bookingDateLabel: string
  departureRouteLabel: string
  arrivalRouteLabel: string
  departureDateLabel: string
  travelerLabel: string
  totalPriceLabel: string
}

export type MyBookingAssets = {
  clockIcon: string
  calendarIcon: string
  calendarMutedIcon: string
  userIcon: string
  routeArrowIcon: string
  chevronRightIcon: string
}

export type BookingFlightDetail = {
  departureTime: string
  departureDate: string
  duration: string
  arrivalTime: string
  arrivalDate: string
  departureAirport: string
  departureTerminal: string
  arrivalAirport: string
  arrivalTerminal: string
  airlineName: string
  airlineCode: string
  cabinLabel: string
  baggageLabel: string
  aircraftLabel: string
  seatLayoutLabel: string
  seatPitchLabel: string
}

export type BookingHotelDetail = {
  id: string
  name: string
  nightsLabel: string
  cityLabel: string
  checkInTitle: string
  checkInDate: string
  checkInTime: string
  checkOutTitle: string
  checkOutDate: string
  checkOutTime: string
  roomLabel: string
  guestLabel: string
}

export type BookingPaymentLine = {
  label: string
  amountLabel: string
  emphasized?: boolean
}

export type BookingParticipantSummary = {
  maleLabel: string
  femaleLabel: string
}

export type BookingPaymentSummary = {
  totalLabel: string
  noteLabel: string
  breakdown: BookingPaymentLine[]
  methodLabel: string
}

export type BookingDetail = {
  bookingId: string
  title: string
  status: BookingStatus
  invoiceId: string
  transactionDateLabel: string
  helperTitle: string
  helperSubtitle: string
  flight: BookingFlightDetail
  hotels: BookingHotelDetail[]
  participants: BookingParticipantSummary
  payment: BookingPaymentSummary
}

export type MyBookingDetailAssets = {
  backIcon: string
  itineraryArrowIcon: string
  bedIcon: string
  userIcon: string
  routeTimelineIcon: string
  airlineLogo: string
  baggageIcon: string
  infoIcon: string
  bankLogo: string
}

export type ItineraryActivity = {
  id: string
  time: string
  description: string
}

export type ItineraryDay = {
  id: string
  dayNumber: number
  dayLabel: string
  dateLabel: string
  routeLabel: string
  activities: ItineraryActivity[]
  editable?: boolean
}

export type ItinerarySuggestionOption = {
  id: string
  label: string
}

export type ItinerarySuggestionGroup = {
  id: string
  title: string
  options: ItinerarySuggestionOption[]
}

export type ServiceItem = {
  label: string
  icon: string
}

export type ArticleItem = {
  title: string
  image: string
}

export type InformasiPrayerTime = {
  name: string
  time: string
  icon: string
  iconOverlay?: string
  iconVariant?: 'default' | 'fajr'
  active?: boolean
}

export type InformasiGuideItem = {
  id: string
  label: string
  icon: string
}

export type InformasiHero = {
  image: string
  alt: string
  headingLogo: string
  brand: string
  title: string
  dotsCount: number
  activeDotIndex: number
}

export type InformasiArticleItem = {
  id: string
  title: string
  image: string
  brand: string
}

export type InformasiContent = {
  title: string
  prayerTitle: string
  locationLabel: string
  locationIcon: string
  prayerTimes: InformasiPrayerTime[]
  guideTitle: string
  guideItems: InformasiGuideItem[]
  hero: InformasiHero
  tabs: string[]
  articles: InformasiArticleItem[]
}

export type InformasiDetailSection = {
  title: string
  description: string
}

export type InformasiDetailContent = {
  backIcon: string
  title: string
  brand: string
  image: string
  sections: InformasiDetailSection[]
  ctaPrefix: string
  ctaHighlight: string
  ctaIcon: string
  ctaPattern: string
}

export type KiblatScheduleItem = {
  id: string
  label: string
  time: string
  icon: string
  iconOverlay?: string
  iconVariant?: 'default' | 'fajr'
  audioIcon: string
  active?: boolean
}

export type KiblatScheduleContent = {
  backIcon: string
  locationIcon: string
  locationLabel: string
  compassRing: string
  compassWedge: string
  compassNeedle: string
  kaabaIcon: string
  dateLabel: string
  hijriDateLabel: string
  turnHint: string
  items: KiblatScheduleItem[]
}

export type GuideListItem = {
  id: string
  title: string
  subtitle: string
}

export type GuideListContent = {
  title: string
  backIcon: string
  icon: string
  chevronIcon: string
  searchIcon: string
  items: GuideListItem[]
}

export type HomeAssets = {
  pattern: string
  logo: string
  avatar: string
  bell: string
  sparkle: string
  sparkleGlow: string
  searchIcon: string
  infoIcon: string
  arrowRight: string
  chatbot: string
  navHomeIcon: string
  navHomeInactiveIcon: string
  navBookingIcon: string
  navBookingActiveIcon: string
  navServicesIcon: string
  navInfoIcon: string
  navAccountIcon: string
}

export type UmrahQuestionAssets = {
  blur: string
  aiMagic: string
  closeIcon: string
  chevronLeft: string
  chevronRight: string
}

export type UmrahTravelerAssets = {
  blur: string
  aiMagic: string
  closeIcon: string
  infoIcon: string
  roomPersonIcon: string
  counterMinusIcon: string
  counterPlusIcon: string
}

export type UmrahStepAssets = {
  blur: string
  aiMagic: string
  closeIcon: string
}

export type AirportOption = {
  label: string
  code: string
}

export type UmrahFlightSearchAssets = {
  iconTakeOff: string
  iconLanding: string
  iconCalendar: string
  iconPassenger: string
  iconSeat: string
  iconSwap: string
  iconSearch: string
}

export type UmrahProcessingAssets = {
  blur: string
  aiMagic: string
}

export type UmrahFlightAssets = {
  backIcon: string
  chevronRight: string
  planeArrow: string
  calendarIcon: string
  clockIcon: string
  userIcon: string
  omanAirLogo: string
  saudiaLogo: string
  matchIcon: string
  sortIcon: string
  filterIcon: string
}

export type FlightRouteSegment = {
  time: string
  code: string
  duration?: string
  mode?: 'Langsung' | 'Transit'
}

export type FlightOffer = {
  id: string
  segments: FlightRouteSegment[]
  airline: string
  airlineLogo: string
  price: number
  isRecommended?: boolean
}

export type TicketFareFeature = {
  label: string
  available: boolean
  icon: 'bag' | 'check' | 'cancel'
}

export type TicketFareOption = {
  id: string
  name: string
  totalPrice: number
  features: TicketFareFeature[]
}

export type FlightFareTemplate = {
  id: string
  name: string
  premiumTopUpPerPair: number
  features: TicketFareFeature[]
}

export type UmrahTicketAssets = {
  backIcon: string
  bagIcon: string
  checkIcon: string
  cancelIcon: string
  infoSolidIcon: string
  clockIcon: string
  timelineIcon: string
  infoOutlineIcon: string
  routeDivider: string
  addCircleIcon: string
  cameraIcon: string
  chevronDownIcon: string
  cameraSamplePassport: string
  cameraGuideFrame: string
  cameraMaskOverlay: string
  cameraFlashIcon: string
  cameraShutterOuter: string
  cameraShutterInner: string
}

export type PassengerFormData = {
  firstMiddleName: string
  lastFamilyName: string
  birthDay: string
  birthMonth: string
  birthYear: string
  nationality: string
  passportNumber: string
  issuingCountry: string
  passportExpiryDay: string
  passportExpiryMonth: string
  passportExpiryYear: string
  passportPhoto: string | null
}

export type UmrahHotelAssets = {
  backIcon: string
  chevronRight: string
  sortIcon: string
  filterIcon: string
  calendarIcon: string
  userIcon: string
  roomIcon: string
  locationIcon: string
  sparkleIcon: string
  facilityIcon: string
  bedIcon: string
  areaIcon: string
  wifiIcon: string
  breakfastIcon: string
  noSmokingIcon: string
  bathtubIcon: string
  policyIcon: string
}

export type UmrahHotelSearchAssets = {
  backIcon: string
  iconLocation: string
  iconCalendar: string
  iconGuest: string
  iconSearch: string
  iconNearMe: string
  iconMap: string
  iconClock: string
}

export type HotelOffer = {
  id: string
  name: string
  nightsLabel: string
  distanceLabel: string
  pricePerNight: number
  totalPrice: number
  rating: number
  image: string
  propertyType?: string
  facilities?: string[]
  isRecommended?: boolean
}

export type HotelRoomOption = {
  id: string
  name: string
  images: string[]
  features: string[]
  pricePerNight: number
  totalPrice: number
  totalLabel: string
}

export type HotelPolicyItem = {
  title: string
  body: string
}

export type HotelDetail = {
  hotelId: string
  name: string
  typeLabel: string
  description: string
  facilities: string[]
  locationName: string
  locationDistanceLabel: string
  mapImage: string
  heroImage: string
  rooms: HotelRoomOption[]
  highlightedPolicy: HotelPolicyItem
  policies: HotelPolicyItem[]
}

export type UmrahPaymentAssets = {
  bankBniLogo: string
  bankBriLogo: string
  bankMandiriLogo: string
  bankBcaLogo: string
  visaLogo: string
  mastercardLogo: string
  copyIcon: string
  userIcon: string
  planeLogo: string
}

export type UmrahCompletionAssets = {
  backIcon: string
  successBadge: string
}

export type LayananLainAssets = {
  layananTambahanIcon: string
  chatAssistantIcon: string
  rekomendasiPaketIcon: string
  navHomeIcon: string
  navHomeInactiveIcon: string
  navBookingIcon: string
  navServicesActiveIcon: string
  navInfoIcon: string
  navAccountIcon: string
}

export type RekomendasiPaketItem = {
  id: string
  badgeLabel: string
  name: string
  durationLabel: string
  dateLabel: string
  startingPriceLabel: string
}

export type RekomendasiPaketAssets = {
  clockIcon: string
  calendarIcon: string
  chevronRightIcon: string
  backIcon: string
}

export type NotificationItem = {
  id: string
  title: string
  description: string
  time: string
  read: boolean
  icon: string
}

export type NotifikasiAssets = {
  backIcon: string
  infoIcon: string
  unreadDot: string
}

export type LoginGuestAssets = {
  closeIcon: string
  backgroundGlow: string
  googleIcon: string
  phoneArrowIcon: string
}

export type LoginGuestContent = {
  arabicLogo: string
  subtitle: string
  googleButtonLabel: string
  orLabel: string
  phonePlaceholder: string
  continueLabel: string
  legalPrefix: string
  legalTerms: string
  legalMiddle: string
  legalPrivacy: string
  legalSuffix: string
}

export type PaymentMethod = 'bni-va' | 'bri-va' | 'mandiri-va' | 'bca-va' | 'credit-card'

export type VisaPackageId = 'visa-1-bulan' | 'visa-2-minggu' | 'visa-express'

export type VisaPackage = {
  id: VisaPackageId
  title: string
  subtitle: string
  priceLabel: string
  price: number
}

export type OnboardingConfig = {
  defaultContact: {
    name: string
    email: string
    phone: string
    virtualAccountNumber: string
    passportNumber: string
  }
  defaultDepartureCode: string
  defaultArrivalCity: string
  defaultHotelCityLabel: string
  defaultTravelDate: {
    year: number
    month: number
    day: number
  }
  defaultHotelNightCount: number
  defaultHotelGuestCount: number
  hotelNearbyCity: string
  hotelRecentCities: string[]
  hotelSortOptions: string[]
  hotelPriceRanges: Array<{
    id: string
    label: string
    min: number
    max: number | null
  }>
  hotelPropertyTypes: string[]
  hotelFacilityOptions: string[]
  nationalityOptions: string[]
  monthOptions: string[]
  passportYearSpan: number
  paymentMethodLabels: Record<PaymentMethod, string>
  visaPackages: VisaPackage[]
  visaLandArrangementPrices: string[]
  visaAdditionalServices: string[]
  visaIncludedServices: string[]
  flightCabinClasses: string[]
  flightFareTemplates: FlightFareTemplate[]
}

export type PaymentBreakdown = {
  flightDeparture: number
  flightReturn: number
  hotelMakkah: number
  hotelMadinah: number
  subtotal: number
  serviceFee: number
  taxAmount: number
  grandTotal: number
}
