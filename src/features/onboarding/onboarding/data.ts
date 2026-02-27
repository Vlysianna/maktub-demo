import type {
  AirportOption,
  ArticleItem,
  FlightOffer,
  HotelDetail,
  HotelOffer,
  UmrahCompletionAssets,
  UmrahPaymentAssets,
  HomeAssets,
  ServiceItem,
  UmrahFlightAssets,
  UmrahHotelAssets,
  UmrahProcessingAssets,
  UmrahQuestionAssets,
  UmrahStepAssets,
  UmrahTicketAssets,
  UmrahTravelerAssets,
  WalkthroughSlide,
  OnboardingConfig,
} from './types'

export const splashLogo = 'https://www.figma.com/api/mcp/asset/c4989d5f-ee63-47a9-a373-06f00977a94c'

export const walkthroughSlides: WalkthroughSlide[] = [
  {
    image: 'https://www.figma.com/api/mcp/asset/aaa80ea6-944b-4a79-9c82-0a33b1a2289d',
    text: [
      'Maktub adalah aplikasi yang membantu memudahkan perjalanan umrah anda yang bersifat fleksibel dengan menentukan tanggal keberangkatan anda sendiri, lebih private, dan aman',
    ],
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/ae710786-d755-47ee-81a5-87de789ca8d8',
    text: ['Di aplikasi ini anda bisa melakukan pembelian pesawat, hotel, visa, mutawif dan pelayanan lainnya'],
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/08f4a287-866a-4c52-b8ac-aa8c29953fca',
    text: ['Anda juga bisa mengkombinasikan perjalanan Umrah anda dengan perjalanan wisata lainnya di Arab Saudi'],
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/4dd95110-ede1-4b2a-a41f-e663c5590319',
    text: [
      'Kenapa anda harus berpergian bersama kami, karena kami memiliki tim di Arab Saudi yang membantu kemudahan perjalanan anda, dan informasi transparan yang kami berikan di aplikasi kami',
    ],
  },
  {
    image: 'https://www.figma.com/api/mcp/asset/ef8a91e9-4763-46f1-a473-d704adf8621b',
    text: ['Maktub', 'Ditulis oleh–Nya', 'Diusahakan olehmu'],
  },
]

export const homeAssets: HomeAssets = {
  pattern: 'https://www.figma.com/api/mcp/asset/78bd8aa3-fb8e-462b-9936-1f2727ad104d',
  logo: 'https://www.figma.com/api/mcp/asset/c4989d5f-ee63-47a9-a373-06f00977a94c',
  avatar: 'https://www.figma.com/api/mcp/asset/2ee4c898-8718-4d52-bbba-7caafed5ca88',
  bell: 'https://www.figma.com/api/mcp/asset/aeeb8e3b-c540-4b18-a24f-1ecf5710909a',
  sparkle: 'https://www.figma.com/api/mcp/asset/13f4b8c1-a1d5-4b72-ab75-d50ecc65d56f',
  sparkleGlow: 'https://www.figma.com/api/mcp/asset/0c4b5c27-2aaf-4ba8-9e20-37f07248b30b',
  searchIcon: 'https://www.figma.com/api/mcp/asset/cd0268f7-36f3-4c11-aa9c-829dec51f9d7',
  infoIcon: 'https://www.figma.com/api/mcp/asset/d1efae61-9e61-45a6-920a-2e1985d81619',
  arrowRight: 'https://www.figma.com/api/mcp/asset/1c8f6e3f-9ee8-498e-a251-f9cbd8a9ffa3',
  chatbot: 'https://www.figma.com/api/mcp/asset/014c5f02-b4c7-4743-9622-8cd8592dd92d',
  navHomeIcon: 'https://www.figma.com/api/mcp/asset/6d2fcfe4-f277-42bf-a91e-cbd3c3b0466a',
  navBookingIcon: 'https://www.figma.com/api/mcp/asset/10455ef3-9f71-4b4f-996c-83dcc948ca95',
  navServicesIcon: 'https://www.figma.com/api/mcp/asset/8af8d036-30ba-48d4-8767-072c8b763262',
  navInfoIcon: 'https://www.figma.com/api/mcp/asset/1df397f5-9f40-4fcb-82e3-f0c76edf8842',
  navAccountIcon: 'https://www.figma.com/api/mcp/asset/e56f81eb-4a8b-4503-89ca-b1ac651315bc',
}

export const services: ServiceItem[] = [
  { label: 'Pesawat', icon: 'https://www.figma.com/api/mcp/asset/3b5073b3-f438-4230-9a43-b54635addd35' },
  { label: 'Hotel', icon: 'https://www.figma.com/api/mcp/asset/74917ba5-5196-4787-b2ea-379b6b5a235b' },
  { label: 'Visa & Lainnya', icon: 'https://www.figma.com/api/mcp/asset/69312a54-6ff7-4bc8-b78b-0b48cb08f504' },
]

export const articles: ArticleItem[] = [
  {
    title: 'Tempat-tempat bersejarah yang bisa dikunjungi',
    image: 'https://www.figma.com/api/mcp/asset/b9570035-d2f2-4b9f-b94c-6eab8f697f1c',
  },
  {
    title: 'Cara berpergian ke Arab Saudi (Bandara dan Jenis Visa)',
    image: 'https://www.figma.com/api/mcp/asset/dea9a7c2-1f37-4ba2-b3c2-06e429bb517a',
  },
  {
    title: 'Apa itu ibadah Umrah? Dan kenapa harus sekarang?',
    image: 'https://www.figma.com/api/mcp/asset/8d77d06a-9808-4f47-aa4b-469058ecccc2',
  },
  {
    title: 'Tata cara ibadah Umrah',
    image: 'https://www.figma.com/api/mcp/asset/7ad3ba8b-3445-4bf3-bd48-e8d4ae966245',
  },
]

export const umrahQuestionAssets: UmrahQuestionAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/57cd73b2-73b0-45af-9e07-23a80ca00208',
  aiMagic: 'https://www.figma.com/api/mcp/asset/1feef05b-cfe4-40bb-8b0e-a7dafc9409f4',
  closeIcon: 'https://www.figma.com/api/mcp/asset/bcc18140-1ac7-4603-99eb-b0a7ee936de9',
  chevronLeft: 'https://www.figma.com/api/mcp/asset/2909023e-2b4e-45be-90c0-4046f05ddf6f',
  chevronRight: 'https://www.figma.com/api/mcp/asset/2909023e-2b4e-45be-90c0-4046f05ddf6f',
}

export const umrahTravelerAssets: UmrahTravelerAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/3235ff8f-15a5-41c3-95dd-ae87f8c5538a',
  aiMagic: 'https://www.figma.com/api/mcp/asset/3f678205-b134-40e4-b065-bec207aa59c9',
  closeIcon: 'https://www.figma.com/api/mcp/asset/3bdf8886-99cb-4f94-8784-1c5f2593caf2',
  infoIcon: 'https://www.figma.com/api/mcp/asset/1fa0ffed-d6ea-4a52-ba4e-cf3d87da1055',
  roomPersonIcon: 'https://www.figma.com/api/mcp/asset/78ab5720-cb64-4cec-b27f-763db97d4bdc',
  counterMinusIcon: 'https://www.figma.com/api/mcp/asset/5643ad0d-3639-47c5-b0f4-b98e4e113763',
  counterPlusIcon: 'https://www.figma.com/api/mcp/asset/be789df1-bd16-435d-805f-3e37ccc75f68',
}

export const umrahDepartureAssets: UmrahStepAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/e00530b7-d21e-447a-97e9-d0ee4fa421ae',
  aiMagic: 'https://www.figma.com/api/mcp/asset/254e0df3-fcf8-4317-966c-ba9a63d8b1fa',
  closeIcon: 'https://www.figma.com/api/mcp/asset/f64c2462-b9a8-4eb6-aa24-670325f3bdd0',
}

export const umrahArrivalReturnAssets: UmrahStepAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/38079669-9c73-4b68-8b5a-d045e5adcee7',
  aiMagic: 'https://www.figma.com/api/mcp/asset/5397ca90-b838-49a9-8053-9d6d98888d63',
  closeIcon: 'https://www.figma.com/api/mcp/asset/7c1e43f5-1fbd-402c-a654-c5b6b8a30dd6',
}

export const umrahBudgetAssets: UmrahStepAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/cdf75d82-ef88-4d08-b8c9-1c2c08257b15',
  aiMagic: 'https://www.figma.com/api/mcp/asset/b8aa6fba-2b23-46fe-9019-0b3ab88a4f10',
  closeIcon: 'https://www.figma.com/api/mcp/asset/8dd801ba-baa5-4edd-8784-751aa7b93acc',
}

export const departureAirportOptions: AirportOption[] = [
  { label: 'Bali, Indonesia', code: 'DPS' },
  { label: 'Bandar Lampung, Indonesia', code: 'TKG' },
  { label: 'Jakarta, Indonesia', code: 'CGK' },
  { label: 'Makasar, Indonesia', code: 'UPG' },
  { label: 'Medan, Indonesia', code: 'KNO' },
  { label: 'Padang, Indonesia', code: 'PDG' },
  { label: 'Surabaya, Indonesia', code: 'SUB' },
]

export const cityOptions = ['Madinah', 'Jeddah', 'Riyadh', 'Dammam', 'Al Ula']

export const budgetOptions = ['Kurang dari 25.000.000', '25.000.000 sampai 40.000.000', 'Lebih dari 40.000.000']

export const umrahProcessingAssets: UmrahProcessingAssets = {
  blur: 'https://www.figma.com/api/mcp/asset/58437689-866d-4268-8b5d-93d54ca054f8',
  aiMagic: 'https://www.figma.com/api/mcp/asset/6da643ed-f854-4183-90d0-b1f428712cc7',
}

export const umrahFlightAssets: UmrahFlightAssets = {
  chevronRight: 'https://www.figma.com/api/mcp/asset/2909023e-2b4e-45be-90c0-4046f05ddf6f',
  planeArrow: 'https://www.figma.com/api/mcp/asset/688642d2-4cbb-4446-8c03-fca5f6f79fb5',
  calendarIcon: 'https://www.figma.com/api/mcp/asset/1a763ef6-9068-46bc-80c6-26bd7dd39624',
  clockIcon: 'https://www.figma.com/api/mcp/asset/d5c5a1b7-b622-41b5-b260-318df2d2bad0',
  userIcon: 'https://www.figma.com/api/mcp/asset/4e2be065-7116-468f-9dfb-84821b5ce614',
  omanAirLogo: 'https://www.figma.com/api/mcp/asset/132c5a5b-2ea6-4a64-a196-1a1edade8dba',
  saudiaLogo: 'https://www.figma.com/api/mcp/asset/d67010ae-af44-458b-80de-86d77fa8c491',
  matchIcon: 'https://www.figma.com/api/mcp/asset/90601efb-89e0-4c31-a094-3ff6af4aa203',
}

export const umrahTicketAssets: UmrahTicketAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/dedb9764-b443-421d-ba7e-5eeddcc5e597',
  bagIcon: 'https://www.figma.com/api/mcp/asset/4e81b705-b584-4039-a351-3036bbbb4e09',
  checkIcon: 'https://www.figma.com/api/mcp/asset/669fb3d7-1e98-4f05-9050-62b5506ce875',
  cancelIcon: 'https://www.figma.com/api/mcp/asset/732d02b8-2432-46fe-a244-ff629d44b415',
  infoSolidIcon: 'https://www.figma.com/api/mcp/asset/2f0ab62f-cfa6-4f08-9628-cf6d7ae23342',
  clockIcon: 'https://www.figma.com/api/mcp/asset/d0db7771-dde9-4ad6-b572-57a0b0db7c0c',
  timelineIcon: 'https://www.figma.com/api/mcp/asset/ac12b151-8be3-4ab1-83e7-c0c267bf8396',
  infoOutlineIcon: 'https://www.figma.com/api/mcp/asset/dbaf5613-d7c8-48bd-80a1-ffecd76954cb',
  routeDivider: 'https://www.figma.com/api/mcp/asset/73dda14a-6ee8-4e70-b2ef-c72f34a83a1b',
  addCircleIcon: 'https://www.figma.com/api/mcp/asset/20b6f12e-1d02-44cf-a178-5301cd0e0287',
  cameraIcon: 'https://www.figma.com/api/mcp/asset/eac09041-3669-43e8-bc51-228266a8a363',
  chevronDownIcon: 'https://www.figma.com/api/mcp/asset/01ef2f68-a662-43c7-99d2-88c44d2811f3',
  cameraSamplePassport: 'https://www.figma.com/api/mcp/asset/429a70e0-7bc1-42c3-9417-6f9cc917a64b',
  cameraGuideFrame: 'https://www.figma.com/api/mcp/asset/a9dbadda-8e05-4960-a834-a5af8df8cbda',
  cameraMaskOverlay: 'https://www.figma.com/api/mcp/asset/3b265557-4f3e-4a78-b8c7-7763b52482ad',
  cameraFlashIcon: 'https://www.figma.com/api/mcp/asset/0fe3ee2c-2a65-4586-ad0a-5a9414da2704',
  cameraShutterOuter: 'https://www.figma.com/api/mcp/asset/df507603-f71c-48d3-b48f-6e49cc5e4cdb',
  cameraShutterInner: 'https://www.figma.com/api/mcp/asset/81f2455d-ee40-4b39-aab6-536b8103d91b',
}

export const cityAirportCodeMap: Record<string, string> = {
  Madinah: 'MED',
  Jeddah: 'JED',
  Riyadh: 'RUH',
  Dammam: 'DMM',
  'Al Ula': 'ULH',
}

export const flightOfferTemplate: FlightOffer[] = [
  {
    id: 'offer-1',
    segments: [
      { time: '09:45', code: 'CGK', duration: '10j 59m', mode: 'Langsung' },
      { time: '21:45', code: 'JED' },
    ],
    airline: 'Oman Air',
    airlineLogo: 'https://www.figma.com/api/mcp/asset/132c5a5b-2ea6-4a64-a196-1a1edade8dba',
    price: 10800000,
    isRecommended: true,
  },
  {
    id: 'offer-2',
    segments: [
      { time: '09:45', code: 'CGK', duration: '1j 15m', mode: 'Transit' },
      { time: '11:00', code: 'SIN', duration: '10j 59m', mode: 'Transit' },
      { time: '22:45', code: 'JED' },
    ],
    airline: 'Oman Air',
    airlineLogo: 'https://www.figma.com/api/mcp/asset/132c5a5b-2ea6-4a64-a196-1a1edade8dba',
    price: 11520000,
  },
  {
    id: 'offer-3',
    segments: [
      { time: '15:30', code: 'CGK', duration: '10j 15m', mode: 'Langsung' },
      { time: '01:45', code: 'JED' },
    ],
    airline: 'Saudi Arabia Airlines',
    airlineLogo: 'https://www.figma.com/api/mcp/asset/d67010ae-af44-458b-80de-86d77fa8c491',
    price: 12500000,
  },
]

export const umrahHotelAssets: UmrahHotelAssets = {
  chevronRight: 'https://www.figma.com/api/mcp/asset/2ccd8fb3-cbbc-4b67-bb88-9725a7b8c843',
  calendarIcon: 'https://www.figma.com/api/mcp/asset/ddb86521-8919-4954-8b59-3f732a0a912c',
  userIcon: 'https://www.figma.com/api/mcp/asset/752ee1b6-50f7-48a6-8333-1e8958fee749',
  roomIcon: 'https://www.figma.com/api/mcp/asset/6383630d-21f0-41ab-9f1f-535275a685a2',
  locationIcon: 'https://www.figma.com/api/mcp/asset/745cb550-f2a3-4683-afab-c9210a864b6a',
  sparkleIcon: 'https://www.figma.com/api/mcp/asset/28ffc00b-0b3d-48d9-8942-74c4406ab88a',
  facilityIcon: 'https://www.figma.com/api/mcp/asset/36118d8f-cfaa-4859-97cc-8934a25e07f0',
  bedIcon: 'https://www.figma.com/api/mcp/asset/f8956d00-daa8-451a-b7cf-f7d67fa0156f',
  areaIcon: 'https://www.figma.com/api/mcp/asset/d77b956f-4188-44d7-9b98-1fbf22d4df7d',
  wifiIcon: 'https://www.figma.com/api/mcp/asset/86cbd17e-7a9f-4cc0-a323-cd8d974e2a01',
  breakfastIcon: 'https://www.figma.com/api/mcp/asset/a52f06b2-4063-494e-9f72-44892d902d29',
  noSmokingIcon: 'https://www.figma.com/api/mcp/asset/4f28da0d-f4f4-43d1-a18a-c860399aa286',
  bathtubIcon: 'https://www.figma.com/api/mcp/asset/b0d4fdac-ebee-4c21-8b29-09bb2986f7c0',
  policyIcon: 'https://www.figma.com/api/mcp/asset/ca455b7e-d7d8-4669-b271-9066e5c4148f',
}

export const hotelOfferTemplate: HotelOffer[] = [
  {
    id: 'hotel-1',
    name: 'Pullman ZamZam',
    nightsLabel: '3 hari 2 malam',
    distanceLabel: '1,2 km dari ka’bah',
    pricePerNight: 3200000,
    totalPrice: 12000000,
    rating: 5,
    image: 'https://www.figma.com/api/mcp/asset/5eb9c5c6-52fc-4c37-8cf1-526464a5b58c',
    isRecommended: true,
  },
  {
    id: 'hotel-2',
    name: 'Anjum Hotel',
    nightsLabel: '3 hari 2 malam',
    distanceLabel: '1,5 km dari ka’bah',
    pricePerNight: 3370000,
    totalPrice: 16500000,
    rating: 5,
    image: 'https://www.figma.com/api/mcp/asset/ec3c22ee-8727-49dd-ac6c-702da916e5cb',
  },
  {
    id: 'hotel-3',
    name: 'Elaf Ajyad Hotel',
    nightsLabel: '3 hari 2 malam',
    distanceLabel: '2 km dari ka’bah',
    pricePerNight: 4550000,
    totalPrice: 18600000,
    rating: 5,
    image: 'https://www.figma.com/api/mcp/asset/859548e7-3f5c-41c0-8e0b-e13d013fc76d',
  },
]

export const hotelDetailTemplate: HotelDetail = {
  hotelId: 'hotel-1',
  name: 'Pullman ZamZam',
  typeLabel: 'Hotel',
  description:
    'Discover the epitome of family living in this semi-furnished 4-Bedroom Villa at Ain Khalid Gate, nestled in a delightful residential area enjoy a wealth of amenities.',
  facilities: ['Squash room', 'Supermarket', 'Laundry shop', 'Outdoor children’s play', 'Library', 'Sport area', 'Beauty salon'],
  locationName: 'Viva Bahriya Tower 19, The Pearl, Qatar',
  locationDistanceLabel: '1,2 km ke arah Mekah',
  mapImage: 'https://www.figma.com/api/mcp/asset/2cf654c3-d1b3-4422-90e2-9460f0dcef6e',
  heroImage: 'https://www.figma.com/api/mcp/asset/61c90fde-cbf9-46a2-94a2-5159c307810c',
  rooms: [
    {
      id: 'room-1',
      name: 'Deluxe King Room',
      images: [
        'https://www.figma.com/api/mcp/asset/40876946-7f3e-46b4-a616-ad56918faaaa',
        'https://www.figma.com/api/mcp/asset/28323d74-f127-427e-96f0-bc7db8dd8f62',
      ],
      features: ['1 King bed', '30 m2', 'Wifi', 'Sarapan', 'Bebas asap rokok'],
      pricePerNight: 3200000,
      totalPrice: 12000000,
      totalLabel: 'untuk 10 malam',
    },
    {
      id: 'room-2',
      name: 'Luxury King Room',
      images: [
        'https://www.figma.com/api/mcp/asset/532f730a-f487-4d5a-812f-ad6b8e742f45',
        'https://www.figma.com/api/mcp/asset/28ffee5a-b7d2-4a08-99c0-26b7717728af',
      ],
      features: ['Bathtub', '1 King bed', '50 m2', 'Wifi', 'Sarapan', 'Bebas asap rokok'],
      pricePerNight: 1400000,
      totalPrice: 14000000,
      totalLabel: 'untuk 10 malam',
    },
  ],
  highlightedPolicy: {
    title: 'Catatan Penting',
    body: 'Informasi perjalanan yang tercantum pada e-voucher dan informasi produk yang tercantum dalam syarat dan ketentuan yang bersangkutan.',
  },
  policies: [
    {
      title: 'Waktu Check-in/Check-out',
      body: 'Check-in: Dari 16:00\nCheck-out: Sebelum 12:00',
    },
    {
      title: 'Petunjuk Umum Check-in',
      body: 'Informasi perjalanan yang tercantum pada e-voucher dan informasi produk yang tercantum dalam syarat dan ketentuan hotel yang bersangkutan.',
    },
    {
      title: 'Kebijakan Tambahan',
      body: 'Informasi perjalanan yang tercantum pada e-voucher dan informasi produk yang tercantum dalam syarat dan ketentuan hotel yang bersangkutan.',
    },
  ],
}

export const umrahPaymentAssets: UmrahPaymentAssets = {
  bankBniLogo: 'https://www.figma.com/api/mcp/asset/34021b3d-7977-4403-b495-e5df18bd2384',
  bankBriLogo: 'https://www.figma.com/api/mcp/asset/f92c3412-2699-4783-9684-828d8db17b12',
  bankMandiriLogo: 'https://www.figma.com/api/mcp/asset/03b9ed78-30a7-4141-9ec6-053022997f77',
  bankBcaLogo: 'https://www.figma.com/api/mcp/asset/7b99033e-a382-4a21-b463-7425234b197e',
  visaLogo: 'https://www.figma.com/api/mcp/asset/56be393a-ef11-4776-b245-715bf6e36998',
  mastercardLogo: 'https://www.figma.com/api/mcp/asset/74de822d-daec-4a9a-9c11-3a83dc26b58a',
  copyIcon: 'https://www.figma.com/api/mcp/asset/d0c3043d-ff28-47b3-9f3b-06aae2d2002d',
  userIcon: 'https://www.figma.com/api/mcp/asset/dd2ccf07-d695-4b7b-ab8c-cb8eafc864e7',
  planeLogo: 'https://www.figma.com/api/mcp/asset/8dab0ef3-efa7-49fb-a4fc-c290567cd467',
}

export const umrahCompletionAssets: UmrahCompletionAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/cd2f5bf6-0efd-4acf-a72b-180c5eacd71e',
  successBadge: 'https://www.figma.com/api/mcp/asset/373a1061-a3fe-4b48-9f73-b9987f54e2cf',
}

export const onboardingConfig: OnboardingConfig = {
  defaultContact: {
    name: 'Noermansyah',
    email: 'noermansyah@gmail.com',
    phone: '081288990011',
    virtualAccountNumber: '8848800096475552',
    passportNumber: 'C1234567A',
  },
  defaultDepartureCode: 'CGK',
  defaultArrivalCity: 'Jeddah',
  defaultHotelCityLabel: 'Mekah',
  defaultTravelDate: {
    year: 2026,
    month: 1,
    day: 18,
  },
  defaultHotelNightCount: 2,
  nationalityOptions: ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Arab Saudi'],
  monthOptions: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  passportYearSpan: 70,
  paymentMethodLabels: {
    'bni-va': 'BNI Virtual Account',
    'bri-va': 'BRI Virtual Account',
    'mandiri-va': 'Mandiri Virtual Account',
    'bca-va': 'BCA Virtual Account',
    'credit-card': 'Visa / Master Card',
  },
}
