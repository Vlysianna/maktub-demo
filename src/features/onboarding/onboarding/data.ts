import type {
  AirportOption,
  ArticleItem,
  BookingDetail,
  BookingItem,
  FlightFareTemplate,
  FlightOffer,
  HotelDetail,
  HotelOffer,
  HomeBannerDetailContent,
  ItinerarySuggestionGroup,
  InformasiContent,
  InformasiDetailContent,
  KiblatScheduleContent,
  LayananLainAssets,
  MyBookingDetailAssets,
  MyBookingAssets,
  LoginGuestAssets,
  LoginGuestContent,
  LoginNameAssets,
  LoginNameContent,
  LoginOtpAssets,
  LoginOtpContent,
  NotificationItem,
  NotifikasiAssets,
  UmrahCompletionAssets,
  UmrahPaymentAssets,
  HomeAssets,
  RekomendasiPaketAssets,
  RekomendasiPaketItem,
  ServiceItem,
  UmrahFlightAssets,
  UmrahFlightSearchAssets,
  UmrahHotelAssets,
  UmrahHotelSearchAssets,
  UmrahProcessingAssets,
  UmrahQuestionAssets,
  UmrahStepAssets,
  UmrahTicketAssets,
  UmrahTravelerAssets,
  GuideListContent,
  VisaPackage,
  WalkthroughSlide,
  OnboardingConfig,
  ProfileData,
} from './types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const splashLogo = publicAsset('assets/figma/logo-splash.png')

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

export const myBookingAssets: MyBookingAssets = {
  clockIcon: 'https://www.figma.com/api/mcp/asset/19c0d9ad-cdbe-4853-9e7c-28dbc52521cf',
  calendarIcon: 'https://www.figma.com/api/mcp/asset/ca9ec913-c997-42a1-bb0d-587a25f9a856',
  calendarMutedIcon: 'https://www.figma.com/api/mcp/asset/e27f7468-cfdb-4caa-a98e-038caa844870',
  userIcon: 'https://www.figma.com/api/mcp/asset/444fc19d-380d-49b6-9073-1aa70982f178',
  routeArrowIcon: 'https://www.figma.com/api/mcp/asset/3bab3297-3cbc-4d3c-b1a7-268858a06a2e',
  chevronRightIcon: 'https://www.figma.com/api/mcp/asset/1ecf49a5-3ae9-46b3-ad55-047320735bd5',
}

export const myBookingItems: BookingItem[] = [
  // Berlangsung
  {
    id: 'booking-1',
    packageName: 'Paket Umrah 4 Hari',
    status: 'berlangsung',
    durationLabel: '4 hari',
    bookingDateLabel: '18 Feb 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '18 Feb 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 48.180.000',
  },
  {
    id: 'booking-5',
    packageName: 'Paket Umrah Plus Madinah 7 Hari',
    status: 'berlangsung',
    durationLabel: '7 hari',
    bookingDateLabel: '20 Feb 2026',
    departureRouteLabel: 'Surabaya (SUB)',
    arrivalRouteLabel: 'Madinah (MED)',
    departureDateLabel: '20 Feb 2026',
    travelerLabel: '4 person',
    totalPriceLabel: 'Rp 103.600.000',
  },
  // Menunggu Pembayaran
  {
    id: 'booking-2',
    packageName: 'Paket Umrah 4 Hari',
    status: 'menunggu-pembayaran',
    durationLabel: '4 hari',
    bookingDateLabel: '18 Feb 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '18 Feb 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 48.180.000',
  },
  {
    id: 'booking-6',
    packageName: 'Paket Umrah Ramadan 10 Hari',
    status: 'menunggu-pembayaran',
    durationLabel: '10 hari',
    bookingDateLabel: '1 Mar 2026',
    departureRouteLabel: 'Medan (KNO)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '1 Mar 2026',
    travelerLabel: '3 person',
    totalPriceLabel: 'Rp 87.450.000',
  },
  // Akan Datang
  {
    id: 'booking-3',
    packageName: 'Paket Umrah 4 Hari',
    status: 'akan-datang',
    durationLabel: '4 hari',
    bookingDateLabel: '18 Feb 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '18 Feb 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 48.180.000',
  },
  {
    id: 'booking-7',
    packageName: 'Paket Umrah Keluarga 5 Hari',
    status: 'akan-datang',
    durationLabel: '5 hari',
    bookingDateLabel: '10 Mar 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '15 Apr 2026',
    travelerLabel: '5 person',
    totalPriceLabel: 'Rp 129.750.000',
  },
  {
    id: 'booking-8',
    packageName: 'Paket Umrah Plus Tour Jeddah 6 Hari',
    status: 'akan-datang',
    durationLabel: '6 hari',
    bookingDateLabel: '12 Mar 2026',
    departureRouteLabel: 'Bandung (BDO)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '20 Apr 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 56.900.000',
  },
  // History
  {
    id: 'booking-4',
    packageName: 'Paket Umrah 4 Hari',
    status: 'history',
    durationLabel: '4 hari',
    bookingDateLabel: '18 Feb 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '18 Feb 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 48.180.000',
  },
  {
    id: 'booking-9',
    packageName: 'Paket Umrah Plus Madinah 7 Hari',
    status: 'history',
    durationLabel: '7 hari',
    bookingDateLabel: '5 Jan 2026',
    departureRouteLabel: 'Jakarta (CGK)',
    arrivalRouteLabel: 'Madinah (MED)',
    departureDateLabel: '10 Jan 2026',
    travelerLabel: '2 person',
    totalPriceLabel: 'Rp 76.200.000',
  },
  {
    id: 'booking-10',
    packageName: 'Paket Umrah Ekonomis 4 Hari',
    status: 'history',
    durationLabel: '4 hari',
    bookingDateLabel: '20 Nov 2025',
    departureRouteLabel: 'Surabaya (SUB)',
    arrivalRouteLabel: 'Jeddah (JED)',
    departureDateLabel: '1 Dec 2025',
    travelerLabel: '1 person',
    totalPriceLabel: 'Rp 22.500.000',
  },
]

export const myBookingDetailAssets: MyBookingDetailAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/f268e9c8-4f64-4151-9015-3e0c50d52f95',
  itineraryArrowIcon: 'https://www.figma.com/api/mcp/asset/db8144b7-d07f-4ee0-b0ef-83a8ab7b5307',
  bedIcon: 'https://www.figma.com/api/mcp/asset/f72cd021-2f83-485a-9003-21522ca32331',
  userIcon: 'https://www.figma.com/api/mcp/asset/f3105d7b-87f7-4e55-8a87-7f9114096afb',
  routeTimelineIcon: 'https://www.figma.com/api/mcp/asset/3693d3ab-8b55-44ad-b8cb-f805493720ea',
  airlineLogo: 'https://www.figma.com/api/mcp/asset/367bc467-f614-4b22-8be8-689aa3321204',
  baggageIcon: 'https://www.figma.com/api/mcp/asset/937d6de2-4db7-409b-b76c-660360c760dc',
  infoIcon: 'https://www.figma.com/api/mcp/asset/1fe7d242-c9cf-4848-9387-166f13820a4e',
  bankLogo: 'https://www.figma.com/api/mcp/asset/936e35be-3c08-492f-ba4c-063fc1f18f22',
}

export const itinerarySuggestionGroups: ItinerarySuggestionGroup[] = [
  {
    id: 'religious',
    title: 'Wisata Religi & Ziarah',
    options: [
      { id: 'masjid-quba', label: 'Masjid Quba: Masjid pertama yang dibangun Nabi Muhammad SAW, disunnahkan shalat di sini.' },
      { id: 'jabal-uhud', label: 'Jabal Uhud: Ziarah ke makam para syuhada Uhud, lokasi perang bersejarah.' },
      { id: 'jabal-rahmah', label: 'Jabal Rahmah: Bukit kasih sayang, diyakini tempat bertemunya Nabi Adam dan Hawa. Gua Hira' },
    ],
  },
  {
    id: 'city-tour',
    title: 'Wisata Kota',
    options: [
      { id: 'padel', label: 'Padel: Bermain olahraga padel' },
      { id: 'tour-jeddah', label: 'Tour: Kunjungan ke Laut Merah, Corniche, dan pusat perbelanjaan di Jeddah.' },
    ],
  },
  {
    id: 'education-shopping',
    title: 'Wisata Edukasi & Belanja',
    options: [
      { id: 'kebun-kurma', label: 'Kebun Kurma: Mengunjungi kebun kurma di Madinah untuk edukasi dan membeli oleh-oleh.' },
      { id: 'pasar-zakfariyah', label: 'Pasar Zakfariyah: Berbelanja kebutuhan oleh-oleh khas di Mekkah.' },
      { id: 'jabal-magnet', label: 'Jabal Magnet: Lokasi fenomena alam unik di luar kota Madinah.' },
    ],
  },
]

const defaultBookingDetail: Omit<BookingDetail, 'bookingId' | 'title' | 'status'> = {
  invoiceId: 'INV0123JNDN123',
  transactionDateLabel: '18 Februari 2025, 18:00 WIB',
  helperTitle: 'Butuh layanan tambahan?',
  helperSubtitle: 'Assistant, kendaraan, visa lainnya',
  flight: {
    departureTime: '09:45',
    departureDate: '18 Feb',
    duration: '12j 16m',
    arrivalTime: '21:45',
    arrivalDate: '18 Feb',
    departureAirport: 'Soekarno Hatta (CGK)',
    departureTerminal: 'Terminal 3E International',
    arrivalAirport: 'Jeddah (JED)',
    arrivalTerminal: 'Terminal 3E International',
    airlineName: 'Oman Air',
    airlineCode: 'JT-690',
    cabinLabel: 'Ekonomi',
    baggageLabel: 'Bagasi Kabin 7kg',
    aircraftLabel: 'Boeing 737',
    seatLayoutLabel: '3-3',
    seatPitchLabel: '29 inches (Standar)',
  },
  hotels: [
    {
      id: 'hotel-main',
      name: 'Pullman ZamZam',
      nightsLabel: '12 hari 12 malam',
      cityLabel: 'Mekkah',
      checkInTitle: 'Check-in',
      checkInDate: 'Sun, 18 Feb 2026',
      checkInTime: '14:00 - 23:59',
      checkOutTitle: 'Check-out',
      checkOutDate: 'Mon, 25 Nov 2025',
      checkOutTime: '12:00',
      roomLabel: '7x Deluxe (King Bed)',
      guestLabel: '7x Tamu (Dewasa)',
    },
    {
      id: 'hotel-second',
      name: 'Anjum Hotel',
      nightsLabel: '3 hari 2 malam',
      cityLabel: 'Madinah',
      checkInTitle: 'Check-in',
      checkInDate: 'Mon, 25 Nov 2025',
      checkInTime: '14:00 - 23:59',
      checkOutTitle: 'Check-out',
      checkOutDate: 'Fri, 21 Feb 2025',
      checkOutTime: '12:00',
      roomLabel: '1x Deluxe (King Bed)',
      guestLabel: '2x Tamu (Dewasa)',
    },
  ],
  participants: {
    maleLabel: '5 Peserta laki-laki',
    femaleLabel: '2 Peserta perempuan',
  },
  payment: {
    totalLabel: 'Rp 48.180.000',
    noteLabel: 'Lebih sedikit',
    breakdown: [
      { label: 'Harga paket, hotel & flight', amountLabel: 'Rp 168.000.000' },
      { label: 'Biaya layanan', amountLabel: 'Rp 2.000.000' },
      { label: 'Pajak 11%', amountLabel: 'Rp 20.800.000' },
      { label: 'Total harga', amountLabel: 'Rp 48.180.000', emphasized: true },
    ],
    methodLabel: 'BNI Virtual Account',
  },
}

export const myBookingDetailsById: Record<string, BookingDetail> = {
  'booking-1': {
    ...defaultBookingDetail,
    bookingId: 'booking-1',
    title: 'Paket Umrah B',
    status: 'berlangsung',
  },
  'booking-2': {
    ...defaultBookingDetail,
    bookingId: 'booking-2',
    title: 'Paket Umrah B',
    status: 'menunggu-pembayaran',
  },
  'booking-3': {
    ...defaultBookingDetail,
    bookingId: 'booking-3',
    title: 'Paket Umrah B',
    status: 'akan-datang',
  },
  'booking-4': {
    ...defaultBookingDetail,
    bookingId: 'booking-4',
    title: 'Paket Umrah B',
    status: 'history',
  },
}

export const homeAssets: HomeAssets = {
  pattern: 'https://www.figma.com/api/mcp/asset/78bd8aa3-fb8e-462b-9936-1f2727ad104d',
  logo:  publicAsset('assets/figma/maktub-ai-icon.svg'),
  avatar: publicAsset('assets/figma/avatar-icon.svg'),
  bell: publicAsset('assets/figma/bell-icon.svg'),
  sparkle: publicAsset('assets/figma/maktub-ai-icon.svg'),
  sparkleGlow: publicAsset('assets/figma/maktub-ai-glow-icon.svg'),
  searchIcon: publicAsset('assets/figma/ai-search-icon.svg'),
  infoIcon: publicAsset('assets/figma/home-info-icon.svg'),
  arrowRight: publicAsset('assets/figma/info-chevron-icon.svg'),
  chatbot: publicAsset('assets/figma/chat-bot-bulk-rounded.svg'),
  navHomeIcon: publicAsset('assets/figma/nav-home-icon-active.svg'),
  navHomeInactiveIcon: publicAsset('assets/figma/nav-home-icon.svg'),
  navBookingIcon: publicAsset('assets/figma/nav-booking-icon.svg'),
  navBookingActiveIcon: publicAsset('assets/figma/nav-booking-icon-active.svg'),
  navServicesIcon: publicAsset('assets/figma/nav-services-icon.svg'),
  navInfoIcon: publicAsset('assets/figma/nav-info-icon.svg'),
  navInfoActiveIcon: publicAsset('assets/figma/nav-info-icon-active.svg'),
  navAccountIcon: publicAsset('assets/figma/nav-account-icon.svg'),
  navAccountActiveIcon: publicAsset('assets/figma/nav-account-icon-active.svg'),
}

export const services: ServiceItem[] = [
  { label: 'Pesawat', icon: publicAsset('assets/figma/service-pesawat.svg') },
  { label: 'Hotel', icon: publicAsset('assets/figma/service-hotel.svg') },
  { label: 'Visa & Lainnya', icon: publicAsset('assets/figma/service-visa.svg') },
]

export const articles: ArticleItem[] = [
  {
    id: 'tempat-bersejarah',
    title: 'Tempat-tempat bersejarah yang bisa dikunjungi',
    image: 'https://www.figma.com/api/mcp/asset/b9570035-d2f2-4b9f-b94c-6eab8f697f1c',
  },
  {
    id: 'cara-ke-arab-saudi',
    title: 'Cara berpergian ke Arab Saudi (Bandara dan Jenis Visa)',
    image: 'https://www.figma.com/api/mcp/asset/dea9a7c2-1f37-4ba2-b3c2-06e429bb517a',
  },
  {
    id: 'apa-itu-umrah',
    title: 'Apa itu ibadah Umrah? Dan kenapa harus sekarang?',
    image: 'https://www.figma.com/api/mcp/asset/8d77d06a-9808-4f47-aa4b-469058ecccc2',
  },
  {
    id: 'tata-cara-umrah',
    title: 'Tata cara ibadah Umrah',
    image: 'https://www.figma.com/api/mcp/asset/7ad3ba8b-3445-4bf3-bd48-e8d4ae966245',
  },
]

export const homeBannerDetailContent: HomeBannerDetailContent = {
  backIcon: 'https://www.figma.com/api/mcp/asset/8406fbab-3839-4dc1-88d9-6dcdf6c26e6b',
  headingLogo: 'https://www.figma.com/api/mcp/asset/e742b640-6b2e-414b-a9a4-8887ac7b1558',
  brand: 'Maktub.com | مكتوب',
  title: 'Tempat-tempat bersejarah yang bisa dikunjungi',
  heroImage: 'https://www.figma.com/api/mcp/asset/0247c8c8-5bdd-498a-850b-8e6b54c99209',
  heroImageAlt: 'Tempat-tempat bersejarah yang bisa dikunjungi',
  description:
    'Saat ibadah umrah di Mekkah dan Madinah, ada banyak tempat bersejarah yang sangat dianjurkan untuk dikunjungi karena memiliki nilai penting dalam sejarah Islam dan kehidupan Nabi Muhammad.',
  sectionTitle: 'Tempat Bersejarah di Mekkah',
  galleryMainImage: 'https://www.figma.com/api/mcp/asset/f6962765-f6fc-4304-b312-3647a8c64e6b',
  galleryTopImage: 'https://www.figma.com/api/mcp/asset/4f80c547-0f94-4960-852a-e91df7dff432',
  galleryBottomImage: 'https://www.figma.com/api/mcp/asset/e59b319c-3712-4be0-87e8-b1d2d5fc2165',
  places: [
    {
      id: 'masjidil-haram',
      title: 'Masjidil Haram',
      description:
        "Masjid paling suci dalam Islam, di dalamnya terdapat Ka'bah, kiblat umat Islam. Tempat utama untuk tawaf dan sholat",
    },
  ],
}

export const informasiContent: InformasiContent = {
  title: 'Informasi',
  prayerTitle: 'Waktu Sholat',
  locationLabel: 'Saudi Arabia',
  locationIcon: 'https://www.figma.com/api/mcp/asset/a5887a37-1e3f-4356-aabc-ed4c35518187',
  prayerTimes: [
    {
      name: 'Fajr',
      time: '04:30',
      icon: 'https://www.figma.com/api/mcp/asset/7002ecb7-36c0-4a73-8711-9d5cc41b4d6b',
      iconOverlay: 'https://www.figma.com/api/mcp/asset/53830857-575e-4048-8ed6-2d2d688e86fe',
      iconVariant: 'fajr',
      active: false,
    },
    {
      name: 'Dzuhr',
      time: '12:11',
      icon: 'https://www.figma.com/api/mcp/asset/7093dae8-a1c3-40b6-a510-0984398afc54',
      active: true,
    },
    {
      name: 'Asr',
      time: '15:26',
      icon: 'https://www.figma.com/api/mcp/asset/10e3a11a-9e5b-4fdb-b135-a5da4abd30a9',
      active: false,
    },
    {
      name: 'Maghrib',
      time: '18:04',
      icon: 'https://www.figma.com/api/mcp/asset/775cbab1-c763-4a5f-b505-80a555b5f55d',
      active: false,
    },
    {
      name: 'Isha',
      time: '19:22',
      icon: 'https://www.figma.com/api/mcp/asset/28e43a46-9735-47aa-809a-ea9a38d9bcb9',
      active: false,
    },
  ],
  guideTitle: 'Panduan Do’a / Umrah',
  guideItems: [
    { id: 'arah-kiblat', label: 'Arah Kiblat', icon: 'https://www.figma.com/api/mcp/asset/4bcf2db1-195d-43cb-a50e-2becd2cda101' },
    { id: 'panduan-umrah', label: 'Panduan Umrah', icon: 'https://www.figma.com/api/mcp/asset/ad1d70f3-04cb-41c6-9b6a-c3da13bbedeb' },
    { id: 'doa-umrah', label: 'Do’a Umrah', icon: 'https://www.figma.com/api/mcp/asset/97a97aa9-6fe1-4997-8f9a-65683402b6aa' },
    { id: 'dzikir-harian', label: 'Dzikir Harian', icon: 'https://www.figma.com/api/mcp/asset/175cbb94-37b3-4030-999c-3ed24789775b' },
    { id: 'doa-harian', label: 'Do’a Harian', icon: 'https://www.figma.com/api/mcp/asset/a0385a57-798b-46e1-a087-f23d14ce5235' },
    { id: 'tata-cara-sholat', label: 'Tata Cara Sholat', icon: 'https://www.figma.com/api/mcp/asset/5fc0f599-441d-4706-8874-a347f69cbc1d' },
  ],
  hero: {
    image: 'https://www.figma.com/api/mcp/asset/a45d38ea-e47f-4c58-9f89-ac882b1b8fcc',
    alt: 'Lantas apa saja syarat perlengkapan Umrah?',
    headingLogo: 'https://www.figma.com/api/mcp/asset/f63f62ee-ab16-480f-a9c4-de8cd94bb317',
    brand: 'Maktub • Umrah',
    title: 'Lantas apa saja syarat perlengkapan Umrah?',
    dotsCount: 4,
    activeDotIndex: 0,
  },
  tabs: ['Umrah', 'Wisata', 'Syarat & Ketentuan', 'Ibadah'],
  articles: [
    {
      id: 'perbedaan-umrah-haji',
      title: 'Perbedaan Umrah dan Haji: Penjelasan Lengkap untuk Pe..',
      image: 'https://www.figma.com/api/mcp/asset/c4f01da2-91a0-4abf-b2e3-547275ba6863',
      brand: 'Maktub • Umrah',
    },
    {
      id: 'waktu-terbaik-umrah',
      title: 'Waktu Terbaik untuk Menunaikan Umrah: Tips dan..',
      image: 'https://www.figma.com/api/mcp/asset/1c8c0380-b1cc-47d3-9f70-6bc47cba55d3',
      brand: 'Maktub • Umrah',
    },
    {
      id: 'barang-bawaan-umrah',
      title: 'Barang Bawaan Wajib Saat Umrah: Apa Saja yang Harus..',
      image: 'https://www.figma.com/api/mcp/asset/7165945e-2f28-4061-803c-fb1fc890ce83',
      brand: 'Maktub • Umrah',
    },
  ],
}

export const informasiDetailContent: InformasiDetailContent = {
  backIcon: 'https://www.figma.com/api/mcp/asset/5887d6d8-57df-410e-86c2-70524d2d3b15',
  title: 'Perbedaan Umrah dan Haji: Penjelasan Lengkap untuk Perbedaan Umrah dan Haji',
  brand: 'Maktub • Umrah',
  image: 'https://www.figma.com/api/mcp/asset/90cea2a6-e6fb-49e4-a562-00825043da02',
  sections: [
    {
      title: 'Perbedaan Umrah dan Haji dalam Islam',
      description:
        'Umrah dan haji merupakan dua ibadah yang dilaksanakan oleh umat Islam di Tanah Suci, Makkah. Keduanya memiliki kesamaan dalam beberapa rangkaian ibadah, seperti tawaf dan sa’i. Namun, umrah dan haji juga memiliki perbedaan mendasar yang perlu dipahami agar umat Islam dapat menjalankannya dengan benar sesuai syariat.',
    },
    {
      title: 'Pengertian Umrah dan Haji',
      description:
        'Haji adalah ibadah wajib bagi umat Islam yang mampu secara fisik, finansial, dan mental, serta hanya diwajibkan sekali seumur hidup. Ibadah haji memiliki waktu pelaksanaan dan rukun tertentu yang harus dipenuhi. Sementara itu, umrah adalah ibadah sunnah yang juga dilakukan di Tanah Suci. Umrah sering disebut sebagai “haji kecil” karena rangkaiannya lebih singkat dan tidak memiliki beberapa rukun utama seperti pada haji.',
    },
  ],
  ctaPrefix: 'Mulai Cari',
  ctaHighlight: 'Paket perjalanan',
  ctaIcon: 'https://www.figma.com/api/mcp/asset/2bc6b3ee-2423-46ed-a430-fad33a2b35d7',
  ctaPattern: 'https://www.figma.com/api/mcp/asset/27c23389-e737-4b23-a4d3-a6ca5fdcea01',
}

export const kiblatScheduleContent: KiblatScheduleContent = {
  backIcon: 'https://www.figma.com/api/mcp/asset/cf3ee609-552a-4456-8ccc-97111ddce1b9',
  locationIcon: 'https://www.figma.com/api/mcp/asset/f6c46d99-fbbd-4d98-8782-78326bc1e859',
  locationLabel: 'Saudi Arabia',
  compassRing: 'https://www.figma.com/api/mcp/asset/30e9cf22-ba1f-43da-83b6-7ffac691900b',
  compassWedge: 'https://www.figma.com/api/mcp/asset/25d72114-236e-4014-8cda-8cf56a711516',
  compassNeedle: 'https://www.figma.com/api/mcp/asset/76a44b1a-a929-4532-9e54-91e0b16851c1',
  kaabaIcon: 'https://www.figma.com/api/mcp/asset/22285655-6cc8-4fd7-a5d8-917d05616365',
  dateLabel: '16 Februari 2026',
  hijriDateLabel: "28 Sya'ban 1447",
  turnHint: 'Belok ke arah kanan',
  items: [
    {
      id: 'subuh',
      label: 'Subuh',
      time: '04:30',
      icon: 'https://www.figma.com/api/mcp/asset/280a120c-34b1-42b5-afc7-db38d8b29365',
      iconOverlay: 'https://www.figma.com/api/mcp/asset/7e11431d-4144-4f8e-b1bb-8858b3611544',
      iconVariant: 'fajr',
      audioIcon: 'https://www.figma.com/api/mcp/asset/fb517f4d-8c56-48ff-ab87-55b8242ffb89',
    },
    {
      id: 'dzuhur',
      label: 'Dzuhur',
      time: '12:11',
      icon: 'https://www.figma.com/api/mcp/asset/d23b775d-8905-48d3-abd0-7e25c39eacb6',
      audioIcon: 'https://www.figma.com/api/mcp/asset/f59485f7-db8f-427c-ba9b-33a9c1ff773b',
      active: true,
    },
    {
      id: 'asar',
      label: 'Asar',
      time: '15:26',
      icon: 'https://www.figma.com/api/mcp/asset/9f1a9ed2-2384-4e98-9ae7-0d5a927266a3',
      audioIcon: 'https://www.figma.com/api/mcp/asset/5de64c3a-82e9-4563-9efb-f0aec423a9ba',
    },
    {
      id: 'maghrib',
      label: 'Maghrib',
      time: '18:04',
      icon: 'https://www.figma.com/api/mcp/asset/b718b097-4b57-4a9e-973f-b257b36b8fd7',
      audioIcon: 'https://www.figma.com/api/mcp/asset/475c7f14-f158-4548-b9aa-9e6cf935f7b8',
    },
    {
      id: 'isya',
      label: 'Isya',
      time: '19:22',
      icon: 'https://www.figma.com/api/mcp/asset/b048d925-e65e-440a-85df-796d7e4dd813',
      audioIcon: 'https://www.figma.com/api/mcp/asset/5de64c3a-82e9-4563-9efb-f0aec423a9ba',
    },
  ],
}

export const panduanUmrahContent: GuideListContent = {
  title: 'Panduan Umrah',
  backIcon: 'https://www.figma.com/api/mcp/asset/8cd9bba4-f7fa-4a30-9895-d3a1248541a6',
  icon: 'https://www.figma.com/api/mcp/asset/d3374e8f-c5a2-4034-84e6-61d082843732',
  chevronIcon: 'https://www.figma.com/api/mcp/asset/445e9415-20b4-4f26-8c03-096eddd984f2',
  searchIcon: 'https://www.figma.com/api/mcp/asset/2bc7ef4a-edfb-4f72-824f-2e36da6f8f3a',
  items: [
    { id: 'ihram', title: 'Ihram', subtitle: 'Niat Umrah' },
    { id: 'tawaf', title: 'Tawaf', subtitle: "Mengelilingi Ka'bah 7 kali" },
    { id: 'sai', title: 'Sa’i', subtitle: 'Berjalan antara Safa dan Marwah 7 kali' },
    { id: 'tahallul', title: 'Tahallul', subtitle: 'Memotong Rambut' },
  ],
}

export const doaUmrahContent: GuideListContent = {
  title: 'Do’a Umrah',
  backIcon: 'https://www.figma.com/api/mcp/asset/a07a3c5c-2071-4ba1-86a1-3a6411511829',
  icon: 'https://www.figma.com/api/mcp/asset/aaa149ee-9ede-40f3-bcbf-92f1da98933a',
  chevronIcon: 'https://www.figma.com/api/mcp/asset/1910ebe7-8a56-49b4-9b29-b18ef11000ae',
  searchIcon: 'https://www.figma.com/api/mcp/asset/9cd0bfa3-1625-481e-abe6-13a36a7704cc',
  items: [
    { id: 'sebelum-ihram', title: 'Sebelum Ihram', subtitle: 'Mandi Sunnah Ihram' },
    { id: 'niat-miqat', title: 'Niat Umrah di Miqat', subtitle: 'Dilakukan setelah memakai pakaian ihram.' },
    { id: 'talbiyah', title: 'Talbiyah', subtitle: 'Dibaca terus sampai mulai tawaf' },
    { id: 'masuk-masjid', title: 'Doa Masuk Masjidil Haram', subtitle: 'Masuk dengan kaki kanan' },
    { id: 'melihat-kaabah', title: "Doa Saat Melihat Ka'bah", subtitle: 'Dibaca terus sampai mulai tawaf' },
    { id: 'memulai-tawaf', title: 'Doa Memulai Tawaf', subtitle: 'Di Hajar Aswad' },
    { id: 'selama-tawaf', title: 'Doa Selama Tawaf', subtitle: 'Di Hajar Aswad' },
    { id: 'setelah-tawaf', title: 'Doa Setelah Tawaf', subtitle: 'Di Hajar Aswad' },
  ],
}

export const umrahQuestionAssets: UmrahQuestionAssets = {
  aiMagic: publicAsset('assets/figma/maktub-ai-icon.svg'),
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
  chevronLeft: publicAsset('assets/figma/Chevron-2.svg'),
  chevronRight: publicAsset('assets/figma/Chevron-2.svg'),
}

export const umrahTravelerAssets: UmrahTravelerAssets = {
  aiMagic: publicAsset('assets/figma/maktub-ai-icon.svg'),
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
  infoIcon: publicAsset('assets/figma/information-circle.svg'),
  roomPersonIcon: publicAsset('assets/figma/user.svg'),
  counterMinusIcon: publicAsset('assets/figma/counter-minus-icon.svg'),
  counterPlusIcon: publicAsset('assets/figma/counter-plus-icon.svg'),
}

export const umrahDepartureAssets: UmrahStepAssets = {
  aiMagic: publicAsset('assets/figma/maktub-ai-icon.svg'),
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
}

export const umrahArrivalReturnAssets: UmrahStepAssets = {
  aiMagic: publicAsset('assets/figma/maktub-ai-icon.svg'),
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
}

export const umrahBudgetAssets: UmrahStepAssets = {
  aiMagic: publicAsset('assets/figma/maktub-ai-icon.svg'),
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
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
  aiMagic: publicAsset('assets/figma/ai-magic.svg'),
}

export const umrahFlightSearchAssets: UmrahFlightSearchAssets = {
  iconTakeOff: 'https://www.figma.com/api/mcp/asset/092d46f6-7d23-4f7d-b169-11a0eaeca787',
  iconLanding: 'https://www.figma.com/api/mcp/asset/db56c24b-822b-4d66-87ca-9e1b5cf6283a',
  iconCalendar: 'https://www.figma.com/api/mcp/asset/b6bad521-4bc7-411a-a70d-2c02a8c3f378',
  iconPassenger: 'https://www.figma.com/api/mcp/asset/4b8645af-ffe9-47c8-bc61-53118eaa9979',
  iconSeat: 'https://www.figma.com/api/mcp/asset/6a410462-9ea6-403d-b1f3-814b1f1ac4e0',
  iconSwap: 'https://www.figma.com/api/mcp/asset/3b08b953-71de-4411-b922-3fd624a10668',
  iconSearch: 'https://www.figma.com/api/mcp/asset/39ce97cb-9ca4-4fec-a2fa-49a64dd3d2fa',
}

export const umrahHotelSearchAssets: UmrahHotelSearchAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/98bcbc58-672c-47f1-8a7e-e75af7171b82',
  iconLocation: 'https://www.figma.com/api/mcp/asset/03b3e842-1914-4706-9ea1-70cbd1d6aaf6',
  iconCalendar: 'https://www.figma.com/api/mcp/asset/ad87ffeb-a104-4976-aef5-bc76abad9a8f',
  iconGuest: 'https://www.figma.com/api/mcp/asset/87379399-e322-44d0-8ea1-afa952a33903',
  iconSearch: 'https://www.figma.com/api/mcp/asset/10fb2bb7-1570-40de-976f-f5d8b60c3475',
  iconNearMe: 'https://www.figma.com/api/mcp/asset/4c6e8642-f8d5-4751-8106-9eb50a564080',
  iconMap: 'https://www.figma.com/api/mcp/asset/ef86a6c3-438a-4fd2-bf86-cd903574f85d',
  iconClock: 'https://www.figma.com/api/mcp/asset/355510cb-684f-4fd2-9933-91348527420b',
}

export const umrahFlightAssets: UmrahFlightAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  chevronRight: publicAsset('assets/figma/Chevron-2.svg'),
  planeArrow: publicAsset('assets/figma/arrow-left-2.svg'),
  calendarIcon: publicAsset('assets/figma/calendar.svg'),
  clockIcon: publicAsset('assets/figma/clock-01.svg'),
  userIcon: publicAsset('assets/figma/user.svg'),
  omanAirLogo: 'https://www.figma.com/api/mcp/asset/132c5a5b-2ea6-4a64-a196-1a1edade8dba',
  saudiaLogo: 'https://www.figma.com/api/mcp/asset/d67010ae-af44-458b-80de-86d77fa8c491',
  matchIcon: 'https://www.figma.com/api/mcp/asset/90601efb-89e0-4c31-a094-3ff6af4aa203',
  sortIcon: 'https://www.figma.com/api/mcp/asset/b21e6d35-a177-447b-afb5-493cc51e015f',
  filterIcon: 'https://www.figma.com/api/mcp/asset/53c67a8b-3aa7-434a-a503-0568774f8079',
}

export const umrahTicketAssets: UmrahTicketAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  bagIcon: publicAsset('assets/figma/travel-bag.svg'),
  checkIcon: publicAsset('assets/figma/checkmark-circle.svg'),
  cancelIcon: publicAsset('assets/figma/cancel-circle.svg'),
  infoSolidIcon: publicAsset('assets/figma/information-green-icon.svg'),
  clockIcon: publicAsset('assets/figma/clock-01.svg'),
  timelineIcon: publicAsset('assets/figma/timeline-icon.svg'),
  infoOutlineIcon: publicAsset('assets/figma/eva_info-outline.svg'),
  routeDivider: publicAsset('assets/figma/arrow-right.svg'),
  addCircleIcon: publicAsset('assets/figma/add-circle.svg'),
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
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  chevronRight: publicAsset('assets/figma/Chevron-2.svg'),
  sortIcon: 'https://www.figma.com/api/mcp/asset/cf251695-41f5-4018-bed5-f89aa9d08dcc',
  filterIcon: 'https://www.figma.com/api/mcp/asset/50f5038a-530c-4a22-ace9-1129547bed19',
  calendarIcon: publicAsset('assets/figma/calendar.svg'),
  userIcon: 'https://www.figma.com/api/mcp/asset/752ee1b6-50f7-48a6-8333-1e8958fee749',
  roomIcon: 'https://www.figma.com/api/mcp/asset/6383630d-21f0-41ab-9f1f-535275a685a2',
  locationIcon: publicAsset('assets/figma/location.svg'),
  sparkleIcon: publicAsset('assets/figma/sparkle-icon.svg'),
  facilityIcon: publicAsset('assets/figma/facility-icon.svg'),
  bedIcon: publicAsset('assets/figma/bed-double.svg'),
  areaIcon: publicAsset('assets/figma/area-icon.svg'),
  wifiIcon: publicAsset('assets/figma/wifi-icon.svg'),
  breakfastIcon: publicAsset('assets/figma/serving-food.svg'),
  noSmokingIcon: publicAsset('assets/figma/no-smoking-icon.svg'),
  bathtubIcon: publicAsset('assets/figma/bathtub-icon.svg'),
  policyIcon: publicAsset('assets/figma/information-green-icon.svg'),
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
    propertyType: 'Hotel',
    facilities: ['Layanan Kamar', 'Free WiFi', 'TV'],
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
    propertyType: 'Apartment',
    facilities: ['Free WiFi', 'Kolam Renang', 'Smoking Area'],
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
    propertyType: 'Home Stays',
    facilities: ['TV', 'Smoking Area'],
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
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  bankBniLogo: publicAsset('assets/figma/bni.svg'),
  bankBriLogo: publicAsset('assets/figma/bri.svg'),
  bankMandiriLogo: publicAsset('assets/figma/mandiri.svg'),
  bankBcaLogo: publicAsset('assets/figma/bca.svg'),
  visaLogo: 'https://www.figma.com/api/mcp/asset/56be393a-ef11-4776-b245-715bf6e36998',
  mastercardLogo: 'https://www.figma.com/api/mcp/asset/74de822d-daec-4a9a-9c11-3a83dc26b58a',
  copyIcon: publicAsset('assets/figma/copy-icon.svg'),
  userIcon: 'https://www.figma.com/api/mcp/asset/dd2ccf07-d695-4b7b-ab8c-cb8eafc864e7',
  planeLogo: 'https://www.figma.com/api/mcp/asset/8dab0ef3-efa7-49fb-a4fc-c290567cd467',
}

export const umrahCompletionAssets: UmrahCompletionAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/cd2f5bf6-0efd-4acf-a72b-180c5eacd71e',
  successBadge: publicAsset('assets/figma/done-icon.svg'),
}

export const layananLainAssets: LayananLainAssets = {
  layananTambahanIcon: 'https://www.figma.com/api/mcp/asset/2abb5739-8fbe-44fb-9f80-026e337d31da',
  chatAssistantIcon: 'https://www.figma.com/api/mcp/asset/b2ad6b21-dcf5-47d3-a123-f3f270bb102a',
  rekomendasiPaketIcon: 'https://www.figma.com/api/mcp/asset/0d1b3448-e462-4ae7-87be-5ca09df0b7a0',
  navHomeIcon: publicAsset('assets/figma/nav-home-icon-active.svg'),
  navHomeInactiveIcon: publicAsset('assets/figma/nav-home-icon.svg'),
  navBookingIcon: publicAsset('assets/figma/nav-booking-icon.svg'),
  navServicesActiveIcon: publicAsset('assets/figma/nav-services-icon-active.svg'),
  navInfoIcon: publicAsset('assets/figma/nav-info-icon.svg'),
  navAccountIcon: publicAsset('assets/figma/nav-account-icon.svg'),
}

export const rekomendasiPaketAssets: RekomendasiPaketAssets = {
  clockIcon: 'https://www.figma.com/api/mcp/asset/093f8337-e3d1-48da-a390-41a310a39dd6',
  calendarIcon: 'https://www.figma.com/api/mcp/asset/8b74dcc2-6608-4daa-ab5d-26ae26d33c08',
  chevronRightIcon: 'https://www.figma.com/api/mcp/asset/2d22b946-b776-4967-af4f-68c7ca370fee',
  backIcon: 'https://www.figma.com/api/mcp/asset/6323d8fa-aded-40bb-a1fd-a9e836d5aa2d',
}

export const rekomendasiPaketItems: RekomendasiPaketItem[] = [
  {
    id: 'paket-3-hari',
    badgeLabel: '👍 Rekomendasi Banyak Orang',
    name: 'Paket Umrah 3 Hari',
    durationLabel: '3 hari',
    dateLabel: '18 Februari 2025',
    startingPriceLabel: 'Rp 24.000.000',
  },
  {
    id: 'paket-4-hari-nov',
    badgeLabel: '👍 Rekomendasi Banyak Orang',
    name: 'Paket Umrah 4 Hari',
    durationLabel: '4 hari',
    dateLabel: '25 November 2025',
    startingPriceLabel: 'Rp 25.500.000',
  },
  {
    id: 'paket-4-hari-feb-a',
    badgeLabel: '👍 Rekomendasi Banyak Orang',
    name: 'Paket Umrah 4 Hari',
    durationLabel: '4 hari',
    dateLabel: '21 Februari 2025',
    startingPriceLabel: 'Rp 27.000.000',
  },
  {
    id: 'paket-4-hari-feb-b',
    badgeLabel: '👍 Rekomendasi Banyak Orang',
    name: 'Paket Umrah 4 Hari',
    durationLabel: '4 hari',
    dateLabel: '21 Februari 2025',
    startingPriceLabel: 'Rp 27.000.000',
  },
]

export const onboardingConfig: OnboardingConfig = {
  defaultContact: {
    name: 'Noermansyah',
    email: 'noermansyah@gmail.com',
    phone: '+6281288990011',
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
  defaultHotelGuestCount: 2,
  hotelNearbyCity: 'Jeddah',
  hotelRecentCities: ['Jakarta', 'Madinah', 'Jeddah', 'Riyadh'],
  hotelSortOptions: [
    'Popularitas',
    'Harga: Rendah ke Tinggi',
    'Harga: Tinggi ke Rendah',
    'Peringkat: Tinggi ke Rendah',
    'Jarak: Terdekat dari Ka’bah',
    'Jarak: Terdekat dari Masjid Nabawi',
  ],
  hotelPriceRanges: [
    { id: '0-500k', label: 'Rp 0 - Rp 500.000', min: 0, max: 500000 },
    { id: '500k-1m', label: 'Rp 500.000 - Rp 1.000.000', min: 500000, max: 1000000 },
    { id: '1m-5m', label: 'Rp 1.000.000 - Rp 5.000.000', min: 1000000, max: 5000000 },
    { id: '5m-plus', label: 'Di atas Rp5.000.000', min: 5000000, max: null },
  ],
  hotelPropertyTypes: ['Hotel', 'Apartment', 'Home Stays'],
  hotelFacilityOptions: ['Layanan Kamar', 'Free WiFi', 'TV', 'Kolam Renang', 'Smoking Area'],
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
  visaPackages: [
    { id: 'visa-1-bulan', title: 'Visa 1 Bulan', subtitle: 'Mulai dari', priceLabel: 'Rp 3.000.000 /orang', price: 3_000_000 },
    { id: 'visa-2-minggu', title: 'Visa 2 Minggu', subtitle: 'Mulai dari', priceLabel: 'Rp 4.000.000 /orang', price: 4_000_000 },
    { id: 'visa-express', title: 'Visa Express', subtitle: 'Hubungi customer support kami', priceLabel: '', price: 4_000_000 },
  ] satisfies VisaPackage[],
  visaLandArrangementPrices: [
    'Rp 200.000 /hari',
    'Rp 300.000 /hari',
    'Rp 400.000 /hari',
    'Rp 500.000 /hari',
    'Rp 600.000 /hari',
    'Rp 700.000 /hari',
  ],
  visaAdditionalServices: ['Mutawif', 'Travel Insurance', 'Support Disabilitas', 'Rawdah', 'Paket Wisata'],
  visaIncludedServices: [
    'Penjemputan kedatangan di bandara',
    'Membantu penanganan force majeure (sakit / meninggal)',
    'Layanan online selama perjalanan',
  ],
  flightCabinClasses: ['Ekonomi', 'Ekonomi Premium', 'Bisnis', 'First'],
  flightFareTemplates: [
    {
      id: 'economy',
      name: 'Ekonomi',
      premiumTopUpPerPair: 0,
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
      premiumTopUpPerPair: 200_000,
      features: [
        { label: 'Bagasi kabin 7 kg', available: true, icon: 'bag' },
        { label: 'Bagasi check-in 0 kg', available: true, icon: 'bag' },
        { label: 'Bisa reschedule', available: true, icon: 'check' },
        { label: 'Tidak bisa refund', available: false, icon: 'cancel' },
        { label: 'Asuransi perjalanan', available: true, icon: 'check' },
      ],
    },
  ] satisfies FlightFareTemplate[],
}

export const notifikasiAssets: NotifikasiAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/239daa61-a580-4383-8bcb-13c877547e56',
  infoIcon: 'https://www.figma.com/api/mcp/asset/faa1ac38-3ac9-4a6a-ba91-25d3e208b3c7',
  unreadDot: 'https://www.figma.com/api/mcp/asset/938d293c-9ea8-4b8a-93ae-4522796ba6a6',
}

export const notificationItems: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: false,
    icon: '',
  },
  {
    id: 'notif-2',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: false,
    icon: '',
  },
  {
    id: 'notif-3',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
  {
    id: 'notif-4',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
  {
    id: 'notif-5',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
  {
    id: 'notif-6',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
  {
    id: 'notif-7',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
  {
    id: 'notif-8',
    title: 'Pembayaran anda berhasil!',
    description: 'Pembayaran anda berhasil consectetur. In mi ultricies faucibus odio. Ac ametas...',
    time: '08:25',
    read: true,
    icon: '',
  },
]

export const loginGuestAssets: LoginGuestAssets = {
  closeIcon: 'https://www.figma.com/api/mcp/asset/0fd00dbc-a596-40cb-b132-f2b0f4333baf',
  backgroundGlow: 'https://www.figma.com/api/mcp/asset/d58cfbce-1f10-4b90-9398-67a970b4ed65',
  googleIcon: 'https://www.figma.com/api/mcp/asset/8afc1fe7-6ebe-452e-9089-f968b5d89f12',
  phoneArrowIcon: 'https://www.figma.com/api/mcp/asset/be3aacc3-78ba-4c45-a739-a75dd8d60012',
}

export const loginGuestContent: LoginGuestContent = {
  arabicLogo: 'مكتوب',
  subtitle: 'It’s written',
  googleButtonLabel: 'Lanjutkan dengan akun google',
  orLabel: 'atau',
  phonePlaceholder: '812xxxxxxx',
  continueLabel: 'Lanjutkan',
  legalPrefix: 'Dengan mengklik "Lanjutkan", Anda menerima ',
  legalTerms: 'Syarat dan Ketentuan',
  legalMiddle: ' serta ',
  legalPrivacy: 'Kebijakan Privasi',
  legalSuffix: ' kami.',
}

export const loginOtpAssets: LoginOtpAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/4bca9d28-b08e-4047-8378-22937be549eb',
  timerIcon: 'https://www.figma.com/api/mcp/asset/e4b1fb4e-b0f4-4039-a57e-c5da0ba3c2f3',
  keypadImage: 'https://www.figma.com/api/mcp/asset/519e17d2-912a-4dec-8b91-927cdacedc5f',
}

export const loginOtpContent: LoginOtpContent = {
  instructionPrefix: 'Masukan 6-digit angka yang kami kirimkan ke nomor',
  instructionSuffix: 'melalui WhatsApp.',
  notReceiveLabel: 'Tidak menerima kode?',
  resendLabel: 'Kirim Ulang',
}

export const loginNameAssets: LoginNameAssets = {
  backIcon: 'https://www.figma.com/api/mcp/asset/2eec210f-aa42-47e8-9801-b9a4e11b5575',
}

export const loginNameContent: LoginNameContent = {
  title: 'Nama Anda',
  placeholder: 'Masukan nama Anda',
  continueLabel: 'Selanjutnya',
}

export const profileData: ProfileData = {
  avatar: 'https://www.figma.com/api/mcp/asset/5791793b-087a-46e8-be34-37715e874d94',
  name: 'Nama Anda',
  email: '',
  phone: '',
  gender: '',
  birthDate: {
    day: '',
    month: '',
    year: '',
  },
  pointsLabel: 'Maktub poin',
  points: 125,
  badgeLabel: "Mu'tamir",
  referralLabel: 'Kode Referral:',
  referralCode: 'M1230012',
  referralActionLabel: 'Salin kode',
  prepTitle: 'Persiapan Umrah',
  prepDescription: 'Lihat apa saja yang perlu Anda persiapkan sebelum berangkat Umrah.',
  prepActionLabel: 'Lengkapi sekarang',
  menuItems: [
    {
      id: 'itinerary',
      label: 'Itinerary Saya',
      icon: 'https://www.figma.com/api/mcp/asset/592fb706-834f-4846-92f1-69c3c394b78d',
    },
    {
      id: 'notifikasi',
      label: 'Notifikasi',
      icon: 'https://www.figma.com/api/mcp/asset/4a52f52e-feb2-40df-9fa3-10900f6d714f',
    },
    {
      id: 'kebijakan-privasi',
      label: 'Kebijakan Privasi',
      icon: 'https://www.figma.com/api/mcp/asset/a670f205-7d05-4cc3-9890-f9524360b8ea',
    },
    {
      id: 'syarat-ketentuan',
      label: 'Syarat dan Ketentuan',
      icon: 'https://www.figma.com/api/mcp/asset/46f7b171-315c-438a-9c75-d93862da9c6b',
    },
    {
      id: 'pusat-bantuan',
      label: 'Pusat Bantuan',
      icon: 'https://www.figma.com/api/mcp/asset/c831b8b9-ffd8-46be-b88e-91c45cdf0a80',
    },
  ],
  logoutLabel: 'Keluar',
}
