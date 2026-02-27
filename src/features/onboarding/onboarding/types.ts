export type Screen =
  | 'splash'
  | 'walkthrough'
  | 'home'
  | 'umrah-question'
  | 'umrah-traveler'
  | 'umrah-departure'
  | 'umrah-arrival-return'
  | 'umrah-budget'
  | 'umrah-processing'
  | 'umrah-flight'
  | 'umrah-flight-detail'
  | 'umrah-ticket-info'
  | 'umrah-passenger-form'

export type WalkthroughSlide = {
  image: string
  text: string[]
}

export type ServiceItem = {
  label: string
  icon: string
}

export type ArticleItem = {
  title: string
  image: string
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
  navBookingIcon: string
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

export type UmrahProcessingAssets = {
  blur: string
  aiMagic: string
}

export type UmrahFlightAssets = {
  chevronRight: string
  planeArrow: string
  calendarIcon: string
  clockIcon: string
  userIcon: string
  omanAirLogo: string
  saudiaLogo: string
  matchIcon: string
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
  id: 'economy' | 'economy-plus'
  name: string
  totalPrice: number
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
}
