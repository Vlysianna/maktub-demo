import type {
  AirportOption,
  ArticleItem,
  BookingDetail,
  BookingItem,
  FlightFareTemplate,
  FlightOffer,
  AboutUsContent,
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
  ChatAssistantAssets,
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
  GuideDetailContent,
  VisaPackage,
  SholatDetailContent,
  UmrahVisaFormAssets,
  WalkthroughSlide,
  OnboardingConfig,
  ProfileData,
} from './types'

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const splashLogo = publicAsset('assets/figma/logo-splash.png')

export const walkthroughSlides: WalkthroughSlide[] = [
  {
    image: publicAsset('assets/figma/screen1.jpg'),
    text: [
      'Maktub adalah aplikasi yang membantu memudahkan perjalanan umrah anda yang bersifat fleksibel dengan menentukan tanggal keberangkatan anda sendiri, lebih private, dan aman',
    ],
  },
  {
    image: publicAsset('assets/figma/screen2.jpg'),
    text: ['Di aplikasi ini anda bisa melakukan pembelian pesawat, hotel, visa, mutawif dan pelayanan lainnya'],
  },
  {
    image: publicAsset('assets/figma/screen3.jpg'),
    text: ['Anda juga bisa mengkombinasikan perjalanan Umrah anda dengan perjalanan wisata lainnya di Arab Saudi'],
  },
  {
    image: publicAsset('assets/figma/screen4.jpg'),
    text: [
      'Kenapa anda harus berpergian bersama kami, karena kami memiliki tim di Arab Saudi yang membantu kemudahan perjalanan anda, dan informasi transparan yang kami berikan di aplikasi kami',
    ],
  },
  {
    image: publicAsset('assets/figma/screen5.jpg'),
    text: ['Maktub', 'Ditulis oleh–Nya', 'Diusahakan olehmu'],
  },
]

export const myBookingAssets: MyBookingAssets = {
  clockIcon: publicAsset('assets/figma/clock-01.svg'),
  calendarIcon: publicAsset('assets/figma/calendar.svg'),
  calendarMutedIcon: publicAsset('assets/figma/calendar.svg'),
  userIcon: publicAsset('assets/figma/user.svg'),
  routeArrowIcon: publicAsset('assets/figma/arrow-left-2.svg'),
  chevronRightIcon: publicAsset('assets/figma/Chevron-2.svg'),
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
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  itineraryArrowIcon: publicAsset('assets/figma/arrow-left-2.svg'),
  bedIcon: publicAsset('assets/figma/bed-double.svg'),
  userIcon: publicAsset('assets/figma/user.svg'),
  routeTimelineIcon: publicAsset('assets/figma/linne.svg'),
  omanAirLogo: publicAsset('assets/figma/omanair.png'),
  saudiaLogo: publicAsset('assets/figma/saudi.png'),
  baggageIcon: publicAsset('assets/figma/bagasi.svg'),
  infoIcon: publicAsset('assets/figma/eva_info-outline.svg'),
  bankLogo: publicAsset('assets/figma/bni.svg'),
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
  pattern: publicAsset('assets/figma/pattern.png'),
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
    image: publicAsset('assets/figma/home1.jpg'),
  },
  {
    id: 'cara-ke-arab-saudi',
    title: 'Cara berpergian ke Arab Saudi (Bandara dan Jenis Visa)',
    image: publicAsset('assets/figma/home2.jpg'),
  },
  {
    id: 'apa-itu-umrah',
    title: 'Apa itu ibadah Umrah? Dan kenapa harus sekarang?',
    image: publicAsset('assets/figma/home3.jpg'),
  },
  {
    id: 'tata-cara-umrah',
    title: 'Tata cara ibadah Umrah',
    image: publicAsset('assets/figma/home4.jpg'),
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

export const aboutUsContent: AboutUsContent = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  arabicTitle: 'مكتوب',
  subtitle: "It's written",
  paragraphs: [
    'Maktub adalah aplikasi yang membantu memudahkan perjalanan umrah anda yang bersifat fleksibel dengan menentukan tanggal keberangkatan anda sendiri, lebih private, dan aman. Di aplikasi ini anda bisa melakukan pembelian pesawat, hotel, visa, mutawif dan pelayanan lainnya.',
    'Anda juga bisa mengkombinasikan perjalanan Umrah anda dengan perjalanan wisata lainnya di Arab Saudi. Kenapa anda harus berpergian bersama kami, karena kami memiliki tim di Arab Saudi yang membantu kemudahan perjalanan anda, dan informasi transparan yang kami berikan di aplikasi kami.',
  ],
  signatureTitle: 'Maktub',
  signatureLines: ['Ditulis oleh-Nya', 'Diusahakan olehmu'],
}

export const informasiContent: InformasiContent = {
  title: 'Informasi',
  prayerTitle: 'Waktu Sholat',
  locationLabel: 'Saudi Arabia',
  locationIcon: publicAsset('assets/figma/navigation-03.svg'),
  prayerTimes: [
    {
      name: 'Fajr',
      time: '04:30',
      icon: publicAsset('assets/figma/Frame1.svg'),
      iconVariant: 'fajr',
      active: false,
    },
    {
      name: 'Dzuhr',
      time: '12:11',
      icon: publicAsset('assets/figma/Frame2.svg'),
      active: true,
    },
    {
      name: 'Asr',
      time: '15:26',
      icon: publicAsset('assets/figma/Frame3.svg'),
      active: false,
    },
    {
      name: 'Maghrib',
      time: '18:04',
      icon: publicAsset('assets/figma/Frame6.svg'),
      active: false,
    },
    {
      name: 'Isha',
      time: '19:22',
      icon: publicAsset('assets/figma/Frame5.svg'),
      active: false,
    },
  ],
  guideTitle: 'Panduan Do’a / Umrah',
  guideItems: [
    { id: 'arah-kiblat', label: 'Arah Kiblat', icon: publicAsset('assets/figma/navigation-04.svg') },
    { id: 'panduan-umrah', label: 'Panduan Umrah', icon: publicAsset('assets/figma/book-02.svg') },
    { id: 'doa-umrah', label: 'Do’a Umrah', icon: publicAsset('assets/figma/book-open-01.svg') },
    { id: 'dzikir-harian', label: 'Dzikir Harian', icon: publicAsset('assets/figma/tasbih.svg') },
    { id: 'doa-harian', label: 'Do’a Harian', icon: publicAsset('assets/figma/quran-02.svg') },
    { id: 'tata-cara-sholat', label: 'Tata Cara Sholat', icon: publicAsset('assets/figma/sujood.svg') },
  ],
  hero: {
    id: 'syarat-perlengkapan-umrah',
    image: publicAsset('assets/figma/information-hero.jpg'),
    alt: 'Lantas apa saja syarat perlengkapan Umrah?',
    headingLogo: publicAsset('assets/figma/icon-logo.svg'),
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
      image: publicAsset('assets/figma/article1.jpg'),
      brand: 'Maktub • Umrah',
    },
    {
      id: 'waktu-terbaik-umrah',
      title: 'Waktu Terbaik untuk Menunaikan Umrah: Tips dan..',
      image: publicAsset('assets/figma/article2.jpg'),
      brand: 'Maktub • Umrah',
    },
    {
      id: 'barang-bawaan-umrah',
      title: 'Barang Bawaan Wajib Saat Umrah: Apa Saja yang Harus..',
      image: publicAsset('assets/figma/article3.jpg'),
      brand: 'Maktub • Umrah',
    },
  ],
}

const informasiDetailBaseAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  checklistIcon: publicAsset('assets/figma/checkmark-circle.svg'),
  ctaPrefix: 'Mulai Cari',
  ctaHighlight: 'Paket perjalanan',
  ctaIcon: publicAsset('assets/figma/arrow-right.svg'),
  ctaPattern: publicAsset('assets/figma/pattern.png'),
}

export const informasiDetailById: Record<string, InformasiDetailContent> = {
  'syarat-perlengkapan-umrah': {
    ...informasiDetailBaseAssets,
    title: 'Lantas apa saja syarat perlengkapan Umrah?',
    brand: 'Maktub • Umrah',
    image: publicAsset('assets/figma/information-hero.jpg'),
    imageAlt: 'Lantas apa saja syarat perlengkapan Umrah?',
    showPlayButton: true,
    summary:
      'Syarat dan perlengkapan umrah yang perlu disiapkan, baik dari sisi dokumen resmi, kesehatan, peralatan ibadah, maupun kebutuhan pribadi. Ini penting agar ibadah berjalan lancar, aman, dan nyaman.',
    checklistItems: [
      'Syarat Administratif & Dokumen Resmi',
      'Perlengkapan Pakaian & Pribadi',
      'Perlengkapan Kesehatan',
      'Perlengkapan Ibadah',
      'Perlengkapan Teknologi',
    ],
    ctaPrefix: undefined,
    ctaHighlight: undefined,
    ctaIcon: undefined,
    ctaPattern: undefined,
  },
  'perbedaan-umrah-haji': {
    ...informasiDetailBaseAssets,
    title: 'Perbedaan Umrah dan Haji: Penjelasan Lengkap untuk Perbedaan Umrah dan Haji',
    brand: 'Maktub • Umrah',
    image: publicAsset('assets/figma/article1.jpg'),
    imageAlt: 'Perbedaan Umrah dan Haji',
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
  },
  'waktu-terbaik-umrah': {
    ...informasiDetailBaseAssets,
    title: 'Waktu Terbaik untuk Menunaikan Umrah: Tips dan Pertimbangan',
    brand: 'Maktub • Umrah',
    image: publicAsset('assets/figma/article2.jpg'),
    imageAlt: 'Waktu terbaik untuk menunaikan umrah',
    sections: [
      {
        title: 'Memilih Musim yang Tepat',
        description:
          'Waktu terbaik untuk menunaikan umrah bergantung pada kesiapan fisik, anggaran, dan preferensi kenyamanan. Di luar musim liburan dan Ramadan, kondisi biasanya lebih lengang sehingga ibadah lebih tenang serta proses perjalanan lebih fleksibel.',
      },
      {
        title: 'Pertimbangan Cuaca dan Biaya',
        description:
          'Cuaca di Arab Saudi cenderung sangat panas pada periode tertentu. Karena itu, penting mempertimbangkan musim yang lebih bersahabat, sekaligus membandingkan harga tiket, hotel, dan layanan pendukung agar perjalanan tetap nyaman dan efisien.',
      },
    ],
  },
  'barang-bawaan-umrah': {
    ...informasiDetailBaseAssets,
    title: 'Barang Bawaan Wajib Saat Umrah: Apa Saja yang Harus Disiapkan?',
    brand: 'Maktub • Umrah',
    image: publicAsset('assets/figma/article3.jpg'),
    imageAlt: 'Barang bawaan wajib saat umrah',
    sections: [
      {
        title: 'Barang Penting yang Wajib Dibawa',
        description:
          'Sebelum berangkat umrah, jamaah perlu menyiapkan dokumen perjalanan, pakaian yang sesuai, obat-obatan pribadi, perlengkapan ibadah, dan kebutuhan harian. Persiapan yang rapi akan membantu perjalanan menjadi lebih tertib dan mengurangi risiko kendala di lapangan.',
      },
      {
        title: 'Susun Barang Sesuai Prioritas',
        description:
          'Pisahkan barang yang wajib dibawa di tas kabin dan koper utama. Dokumen, obat, gawai, charger, serta perlengkapan ibadah ringan sebaiknya mudah dijangkau agar jamaah tetap siap saat proses check-in, transit, maupun ketika sudah tiba di Tanah Suci.',
      },
    ],
  },
}

export const informasiDetailContent = informasiDetailById[informasiContent.hero.id]

export const kiblatScheduleContent: KiblatScheduleContent = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  locationIcon: publicAsset('assets/figma/location-info.svg'),
  locationLabel: 'Saudi Arabia',
  compassRing: publicAsset('assets/figma/kompas.svg'),
  compassWedge: publicAsset('assets/figma/kompas.svg'),
  compassNeedle: publicAsset('assets/figma/kompas.svg'),
  kaabaIcon: publicAsset('assets/figma/nav-home-icon-active.svg'),
  dateLabel: '16 Februari 2026',
  hijriDateLabel: "28 Sya'ban 1447",
  turnHint: 'Belok ke arah kanan',
  items: [
    {
      id: 'subuh',
      label: 'Subuh',
      time: '04:30',
      icon: publicAsset('assets/figma/Frame1.svg'),
      iconOverlay: publicAsset('assets/figma/sunrise-overlay.svg'),
      iconVariant: 'fajr',
      audioIcon: publicAsset('assets/figma/volume-high.svg'),
    },
    {
      id: 'dzuhur',
      label: 'Dzuhur',
      time: '12:11',
      icon: publicAsset('assets/figma/Frame2.svg'),
      audioIcon: publicAsset('assets/figma/volume-high.svg'),
      active: true,
    },
    {
      id: 'asar',
      label: 'Asar',
      time: '15:26',
      icon: publicAsset('assets/figma/Frame3.svg'),
      audioIcon: publicAsset('assets/figma/volume-high.svg'),
    },
    {
      id: 'maghrib',
      label: 'Maghrib',
      time: '18:04',
      icon: publicAsset('assets/figma/Frame6.svg'),
      audioIcon: publicAsset('assets/figma/volume-high.svg'),
    },
    {
      id: 'isya',
      label: 'Isya',
      time: '19:22',
      icon: publicAsset('assets/figma/Frame5.svg'),
      audioIcon: publicAsset('assets/figma/volume-high.svg'),
    },
  ],
}

export const panduanUmrahContent: GuideListContent = {
  title: 'Panduan Umrah',
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  icon: publicAsset('assets/figma/book-02.svg'),
  chevronIcon: publicAsset('assets/figma/Vector-4.svg'),
  searchIcon: publicAsset('assets/figma/search.svg'),
  items: [
    { id: 'ihram', title: 'Ihram', subtitle: 'Niat Umrah' },
    { id: 'tawaf', title: 'Tawaf', subtitle: "Mengelilingi Ka'bah 7 kali" },
    { id: 'sai', title: 'Sa’i', subtitle: 'Berjalan antara Safa dan Marwah 7 kali' },
    { id: 'tahallul', title: 'Tahallul', subtitle: 'Memotong Rambut' },
  ],
}

export const doaUmrahContent: GuideListContent = {
  title: 'Do’a Umrah',
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  icon: publicAsset('assets/figma/book-open-01.svg'),
  chevronIcon: publicAsset('assets/figma/Vector-4.svg'),
  searchIcon: publicAsset('assets/figma/search.svg'),
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

export const dzikirHarianContent: GuideListContent = {
  title: 'Dzikir Harian',
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  icon: publicAsset('assets/figma/tasbih.svg'),
  chevronIcon: publicAsset('assets/figma/Vector-4.svg'),
  searchIcon: publicAsset('assets/figma/search.svg'),
  items: [
    { id: 'dzikir-pagi', title: 'Dzikir Pagi', subtitle: 'Dibaca setelah Subuh hingga terbit matahari' },
    { id: 'dzikir-petang', title: 'Dzikir Petang', subtitle: 'Dibaca setelah Asar hingga menjelang Maghrib' },
    { id: 'setelah-sholat', title: 'Dzikir Setelah Sholat', subtitle: 'Dzikir penutup selepas sholat fardu' },
    { id: 'sebelum-tidur', title: 'Dzikir Sebelum Tidur', subtitle: 'Diamalkan sebelum beristirahat di malam hari' },
    { id: 'masuk-rumah', title: 'Dzikir Masuk Rumah', subtitle: 'Memohon keberkahan saat memasuki rumah' },
    { id: 'keluar-rumah', title: 'Dzikir Keluar Rumah', subtitle: 'Memohon perlindungan ketika memulai aktivitas' },
  ],
}

export const doaHarianContent: GuideListContent = {
  title: 'Do’a Harian',
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  icon: publicAsset('assets/figma/quran-02.svg'),
  chevronIcon: publicAsset('assets/figma/Vector-4.svg'),
  searchIcon: publicAsset('assets/figma/search.svg'),
  items: [
    { id: 'bangun-tidur', title: 'Doa Bangun Tidur', subtitle: 'Dibaca saat memulai hari dengan rasa syukur' },
    { id: 'masuk-kamar-mandi', title: 'Doa Masuk Kamar Mandi', subtitle: 'Memohon perlindungan sebelum masuk' },
    { id: 'keluar-kamar-mandi', title: 'Doa Keluar Kamar Mandi', subtitle: 'Dibaca setelah selesai bersuci' },
    { id: 'sebelum-makan', title: 'Doa Sebelum Makan', subtitle: 'Memohon keberkahan atas rezeki yang diterima' },
    { id: 'sesudah-makan', title: 'Doa Sesudah Makan', subtitle: 'Ungkapan syukur setelah selesai makan' },
    { id: 'keluar-rumah', title: 'Doa Keluar Rumah', subtitle: 'Memohon penjagaan dalam perjalanan' },
    { id: 'masuk-rumah', title: 'Doa Masuk Rumah', subtitle: 'Memohon ketenangan dan keberkahan di rumah' },
    { id: 'sebelum-tidur', title: 'Doa Sebelum Tidur', subtitle: 'Dibaca sebelum memejamkan mata' },
  ],
}

export const tataCaraSholatContent: GuideListContent = {
  title: 'Tata Cara Sholat',
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  icon: publicAsset('assets/figma/sujood.svg'),
  chevronIcon: publicAsset('assets/figma/Vector-4.svg'),
  searchIcon: publicAsset('assets/figma/search.svg'),
  items: [
    { id: 'niat', title: 'Niat Sholat', subtitle: 'Menetapkan niat sesuai sholat yang dikerjakan' },
    { id: 'takbiratul-ihram', title: 'Takbiratul Ihram', subtitle: 'Mengangkat tangan sambil mengucap takbir' },
    { id: 'berdiri-membaca', title: 'Berdiri dan Membaca Al-Fatihah', subtitle: 'Dilanjutkan dengan surat pendek bila mampu' },
    { id: 'ruku', title: 'Ruku', subtitle: 'Membungkuk dengan tuma’ninah sambil bertasbih' },
    { id: 'itidal', title: 'I’tidal', subtitle: 'Kembali berdiri tegak setelah ruku' },
    { id: 'sujud', title: 'Sujud', subtitle: 'Meletakkan tujuh anggota tubuh dengan sempurna' },
    { id: 'duduk', title: 'Duduk di Antara Dua Sujud', subtitle: 'Memohon ampunan dan rahmat Allah' },
    { id: 'tasyahud-salam', title: 'Tasyahud dan Salam', subtitle: 'Menutup sholat dengan tasyahud akhir dan salam' },
  ],
}

const dzikirBaseArabic = 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ'
const dzikirBaseLatin = 'Subhanallahi wa bihamdih'
const dzikirBaseTranslation = 'Maha Suci Allah dan segala puji hanya bagi-Nya.'

const doaUmrahBaseArabic = 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ'
const doaUmrahBaseLatin =
  'Labbaikallahumma labbaik, labbaika laa syariika laka labbaik, innal hamda wan ni mata laka wal mulk, laa syariika lak'
const doaUmrahBaseTranslation =
  'Aku penuhi panggilan-Mu ya Allah, aku penuhi panggilan-Mu. Tiada sekutu bagi-Mu. Sesungguhnya segala puji, nikmat, dan kerajaan adalah milik-Mu. Tiada sekutu bagi-Mu.'

function createDzikirDetailContent(title: string, subtitle: string): GuideDetailContent {
  return {
    backIcon: dzikirHarianContent.backIcon,
    title,
    categoryLabel: 'Dzikir Harian',
    contextLabel: subtitle,
    heroLabel: 'Amalan Ringkas',
    arabicText: dzikirBaseArabic,
    latinText: dzikirBaseLatin,
    translationTitle: 'Makna Dzikir',
    translationText: dzikirBaseTranslation,
    sections: [
      {
        title: 'Waktu Pengamalan',
        description: subtitle,
      },
      {
        title: 'Cara Mengamalkan',
        description: `Baca ${title.toLowerCase()} dengan tenang, menjaga niat ibadah dan memahami makna setiap lafaz yang diucapkan.`,
        bullets: [
          'Mulai dengan hati yang hadir dan tidak tergesa-gesa.',
          'Baca berulang secara rutin agar menjadi amalan harian yang konsisten.',
          'Utamakan ketenangan, adab, dan pemahaman makna saat berdzikir.',
        ],
      },
    ],
  }
}

function createDoaUmrahDetailContent(title: string, subtitle: string): GuideDetailContent {
  return {
    backIcon: doaUmrahContent.backIcon,
    title,
    categoryLabel: 'Do’a Umrah',
    contextLabel: subtitle,
    heroLabel: 'Bacaan Utama',
    arabicText: doaUmrahBaseArabic,
    latinText: doaUmrahBaseLatin,
    translationTitle: 'Arti Doa',
    translationText: doaUmrahBaseTranslation,
    sections: [
      {
        title: 'Dibaca Saat',
        description: subtitle,
      },
      {
        title: 'Panduan Membaca',
        description: `Gunakan bacaan ${title.toLowerCase()} dengan tartil dan penuh kekhusyukan sebagai bagian dari rangkaian ibadah umrah.`,
        bullets: [
          'Pastikan memahami konteks ibadah saat doa ini dibaca.',
          'Dahulukan ketenangan dan niat ibadah sebelum melafalkan doa.',
          'Jika belum hafal, baca perlahan sambil mengikuti transliterasi.',
        ],
      },
    ],
  }
}

function createPanduanUmrahDetailContent(title: string, subtitle: string): GuideDetailContent {
  return {
    backIcon: panduanUmrahContent.backIcon,
    title,
    categoryLabel: 'Panduan Umrah',
    contextLabel: subtitle,
    heroLabel: 'Panduan Langkah',
    translationTitle: 'Ringkasan Tahapan',
    translationText: `${title} merupakan bagian penting dari rangkaian ibadah umrah. Pahami urutannya dan lakukan dengan tenang agar pelaksanaan ibadah tetap tertib dan sesuai tuntunan.`,
    sections: [
      {
        title: 'Penjelasan Singkat',
        description: subtitle,
      },
      {
        title: 'Hal yang Perlu Diperhatikan',
        description: `Saat melaksanakan ${title.toLowerCase()}, pastikan kondisi tetap tenang, memahami tujuannya, dan mengikuti urutan ibadah dengan benar.`,
        bullets: [
          'Pastikan memahami kapan tahapan ini dilakukan dalam rangkaian umrah.',
          'Lakukan dengan tertib, tidak tergesa-gesa, dan tetap menjaga adab ibadah.',
          'Jika beribadah bersama rombongan, ikuti arahan pembimbing agar pelaksanaan lebih teratur.',
        ],
      },
    ],
  }
}

function createDoaHarianDetailContent(title: string, subtitle: string): GuideDetailContent {
  return {
    backIcon: doaHarianContent.backIcon,
    title,
    categoryLabel: 'Do’a Harian',
    contextLabel: subtitle,
    heroLabel: 'Doa Harian',
    translationTitle: 'Makna Doa',
    translationText: `${title} dibaca sebagai bentuk ibadah dan pengingat agar setiap aktivitas harian dijalani dengan memohon perlindungan, keberkahan, serta pertolongan Allah.`,
    sections: [
      {
        title: 'Dibaca Saat',
        description: subtitle,
      },
      {
        title: 'Cara Mengamalkan',
        description: `Biasakan membaca ${title.toLowerCase()} dengan penuh kesadaran sebelum atau sesudah aktivitas terkait agar doa menjadi bagian dari kebiasaan ibadah harian.`,
        bullets: [
          'Usahakan membaca doa dalam keadaan tenang dan tidak terburu-buru.',
          'Pahami maknanya agar doa tidak hanya menjadi hafalan, tetapi juga penghayatan.',
          'Ajarkan dan biasakan doa ini dalam aktivitas sehari-hari agar menjadi amalan rutin.',
        ],
      },
    ],
  }
}

function createSholatDetailContent(index: number, title: string, subtitle: string): SholatDetailContent {
  return {
    backIcon: tataCaraSholatContent.backIcon,
    title,
    stepLabel: `Langkah ${index + 1}`,
    summary: subtitle,
    niatLabel: 'Fokus Gerakan',
    niatText: `Kerjakan ${title.toLowerCase()} dengan tuma'ninah, mengikuti rukun dan urutan sholat secara tertib.`,
    steps: [
      `Mulai ${title.toLowerCase()} dengan posisi tubuh yang tenang dan siap beribadah.`,
      subtitle,
      'Jaga tuma’ninah di setiap perpindahan gerakan agar sholat tidak tergesa-gesa.',
      'Lanjutkan ke gerakan berikutnya sesuai urutan sholat yang benar.',
    ],
    reminderTitle: 'Hal Yang Perlu Dijaga',
    reminders: [
      'Jaga kekhusyukan dan pandangan tetap pada tempat sujud.',
      'Utamakan kesempurnaan gerakan sebelum berpindah ke rukun berikutnya.',
      'Sesuaikan bacaan dengan jenis sholat yang sedang dikerjakan.',
    ],
  }
}

export const dzikirHarianDetailById: Record<string, GuideDetailContent> = Object.fromEntries(
  dzikirHarianContent.items.map((item) => [item.id, createDzikirDetailContent(item.title, item.subtitle)]),
)

export const doaUmrahDetailById: Record<string, GuideDetailContent> = Object.fromEntries(
  doaUmrahContent.items.map((item) => [item.id, createDoaUmrahDetailContent(item.title, item.subtitle)]),
)

export const panduanUmrahDetailById: Record<string, GuideDetailContent> = Object.fromEntries(
  panduanUmrahContent.items.map((item) => [item.id, createPanduanUmrahDetailContent(item.title, item.subtitle)]),
)

export const doaHarianDetailById: Record<string, GuideDetailContent> = Object.fromEntries(
  doaHarianContent.items.map((item) => [item.id, createDoaHarianDetailContent(item.title, item.subtitle)]),
)

export const tataCaraSholatDetailById: Record<string, SholatDetailContent> = Object.fromEntries(
  tataCaraSholatContent.items.map((item, index) => [item.id, createSholatDetailContent(index, item.title, item.subtitle)]),
)

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
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  iconTakeOff: publicAsset('assets/figma/airplane-take-off-01.svg'),
  iconLanding: publicAsset('assets/figma/airplane-landing-01.svg'),
  iconCalendar: publicAsset('assets/figma/calendar.svg'),
  iconPassenger: publicAsset('assets/figma/user-multiple-02.svg'),
  iconSeat: publicAsset('assets/figma/airplane-seat.svg'),
  iconSwap: publicAsset('assets/figma/search.svg'),
  iconSearch: publicAsset('assets/figma/search.svg'),
}

export const umrahHotelSearchAssets: UmrahHotelSearchAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  iconLocation: publicAsset('assets/figma/location-1.svg'),
  iconCalendar: publicAsset('assets/figma/calendar.svg'),
  iconGuest: publicAsset('assets/figma/user-multiple-02.svg'),
  iconSearch: publicAsset('assets/figma/search.svg'),
  iconNearMe: publicAsset('assets/figma/nearme.svg'),
  iconMap: publicAsset('assets/figma/maps.svg'),
  iconClock: publicAsset('assets/figma/clock-01.svg'),
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
  sortIcon: publicAsset('assets/figma/sort.svg'),
  filterIcon: publicAsset('assets/figma/filter-mail.svg'),
}

export const umrahTicketAssets: UmrahTicketAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  bagIcon: publicAsset('assets/figma/travel-bag.svg'),
  checkIcon: publicAsset('assets/figma/checkmark-circle.svg'),
  cancelIcon: publicAsset('assets/figma/cancel-circle.svg'),
  infoSolidIcon: publicAsset('assets/figma/information-green-icon.svg'),
  clockIcon: publicAsset('assets/figma/clock-01.svg'),
  timelineIcon: publicAsset('assets/figma/linne.svg'),
  infoOutlineIcon: publicAsset('assets/figma/eva_info-outline.svg'),
  routeDivider: publicAsset('assets/figma/1.svg'),
  addCircleIcon: publicAsset('assets/figma/add-circle.svg'),
  cameraIcon: publicAsset('assets/figma/camera-icon.svg'),
  chevronDownIcon: publicAsset('assets/figma/chevron-down.svg'),
  cameraSamplePassport: publicAsset('assets/figma/camera-sample-passport.svg'),
  cameraGuideFrame: publicAsset('assets/figma/camera-guide-frame.svg'),
  cameraMaskOverlay: publicAsset('assets/figma/camera-mask-overlay.svg'),
  cameraFlashIcon: publicAsset('assets/figma/flashlight.svg'),
  cameraShutterOuter: publicAsset('assets/figma/camera-shutter-outer.svg'),
  cameraShutterInner: publicAsset('assets/figma/camera-shutter-inner.svg'),
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
    airlineLogo: publicAsset('assets/figma/omanair.png'),
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
    airlineLogo: publicAsset('assets/figma/omanair.png'),
    price: 11520000,
  },
  {
    id: 'offer-3',
    segments: [
      { time: '15:30', code: 'CGK', duration: '10j 15m', mode: 'Langsung' },
      { time: '01:45', code: 'JED' },
    ],
    airline: 'Saudi Arabia Airlines',
    airlineLogo: publicAsset('assets/figma/saudi.png'),
    price: 12500000,
  },
]

export const umrahHotelAssets: UmrahHotelAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  chevronRight: publicAsset('assets/figma/Chevron-2.svg'),
  sortIcon: publicAsset('assets/figma/sort.svg'),
  filterIcon: publicAsset('assets/figma/filter-mail.svg'),
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
    image: publicAsset('assets/figma/pulmanhotel.jpg'),
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
    image: publicAsset('assets/figma/anjumhotel.jpg'),
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
    image: publicAsset('assets/figma/elafhotel.jpg'),
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
  locationDistanceLabel: '1,2 km ke arah `Mekah',
  mapImage: publicAsset('assets/figma/map.svg'),
  heroImage: publicAsset('assets/figma/pulman-hero.jpg'),
  rooms: [
    {
      id: 'room-1',
      name: 'Deluxe King Room',
      images: [
        publicAsset('assets/figma/deluxe (2).jpg'),
        publicAsset('assets/figma/deluxe (1).jpg'),
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
        publicAsset('assets/figma/luxury (2).jpg'),
        publicAsset('assets/figma/luxury (1).jpg'),
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
  visaLogo: publicAsset('assets/figma/visa.png'),
  mastercardLogo: publicAsset('assets/figma/mastercard.png'),
  copyIcon: publicAsset('assets/figma/copy-icon.svg'),
  userIcon: publicAsset('assets/figma/user.svg'),
  planeLogo: publicAsset('assets/figma/plane.svg'),
}

export const umrahVisaFormAssets: UmrahVisaFormAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
}

export const chatAssistantAssets: ChatAssistantAssets = {
  backIcon: publicAsset('assets/figma/arrow-right.svg'),
  botIcon: 'https://www.figma.com/api/mcp/asset/87ad1f5b-8f4e-4eb2-a839-09da5fa6d24a',
  sendIcon: 'https://www.figma.com/api/mcp/asset/4311bb95-c7b2-4381-903e-05033d3bd5b4',
  micIcon: 'https://www.figma.com/api/mcp/asset/f03ddf33-6368-4097-88cd-88433003dba9',
}

export const umrahCompletionAssets: UmrahCompletionAssets = {
  backIcon: publicAsset('assets/figma/arrow-left-white.svg'),
  successBadge: publicAsset('assets/figma/done-icon.svg'),
}

export const layananLainAssets: LayananLainAssets = {
  layananTambahanIcon: publicAsset('assets/figma/layanan-tambahan.svg'),
  chatAssistantIcon: publicAsset('assets/figma/chat-bot-bulk-rounded.svg'),
  rekomendasiPaketIcon: publicAsset('assets/figma/rekomendasi-paket.svg'),
  navHomeIcon: publicAsset('assets/figma/nav-home-icon-active.svg'),
  navHomeInactiveIcon: publicAsset('assets/figma/nav-home-icon.svg'),
  navBookingIcon: publicAsset('assets/figma/nav-booking-icon.svg'),
  navServicesActiveIcon: publicAsset('assets/figma/nav-services-icon-active.svg'),
  navInfoIcon: publicAsset('assets/figma/nav-info-icon.svg'),
  navAccountIcon: publicAsset('assets/figma/nav-account-icon.svg'),
}

export const rekomendasiPaketAssets: RekomendasiPaketAssets = {
  clockIcon: publicAsset('assets/figma/clock-01.svg'),
  calendarIcon: publicAsset('assets/figma/calendar.svg'),
  chevronRightIcon: publicAsset('assets/figma/Vector-4.svg'),
  backIcon: publicAsset('assets/figma/arrow-left.svg'),
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
    name: '',
    email: '',
    phone: '+',
    virtualAccountNumber: '8848800096475552',
    passportNumber: '',
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
  closeIcon: publicAsset('assets/figma/arrow-left.svg'),
  backgroundGlow: publicAsset('assets/figma/background-glow.svg'),
  googleIcon: publicAsset('assets/figma/google.svg'),
  phoneArrowIcon: publicAsset('assets/figma/phone-arrow-icon.svg'),
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
