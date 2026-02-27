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
} from './features/onboarding/onboarding/data'
import type { PassengerFormData, PaymentBreakdown, PaymentMethod, Screen, TicketFareOption } from './features/onboarding/onboarding/types'

const budgetOffsets: Record<string, number> = {
  'Kurang dari 25.000.000': 0,
  '25.000.000 sampai 40.000.000': 8_000_000,
  'Lebih dari 40.000.000': 24_000_000,
}

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

function createInitialPassengerForm(): PassengerFormData {
  return {
    firstMiddleName: '',
    lastFamilyName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    nationality: '',
    passportNumber: 'C1234567A',
    issuingCountry: '',
    passportExpiryDay: '',
    passportExpiryMonth: '',
    passportExpiryYear: '',
  }
}

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
  const [selectedFlightId, setSelectedFlightId] = useState<string | null>(null)
  const [selectedFareId, setSelectedFareId] = useState<TicketFareOption['id']>('economy')
  const [selectedHotelId, setSelectedHotelId] = useState<string | null>(null)
  const [selectedHotelRoomId, setSelectedHotelRoomId] = useState<string | null>(null)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('bni-va')
  const [travelerNames, setTravelerNames] = useState<string[]>(['Noermansyah'])
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

  useEffect(() => {
    const count = Math.max(totalParticipants, 1)

    setTravelerNames((prev) =>
      Array.from({ length: count }, (_, index) => {
        if (prev[index]) {
          return prev[index]
        }

        if (index === 0) {
          return 'Noermansyah'
        }

        return `Jamaah ${index + 1}`
      }),
    )
  }, [totalParticipants])

  useEffect(() => {
    setPassengerForms((prev) =>
      Array.from({ length: travelerCount }, (_, index) => {
        if (prev[index]) {
          return prev[index]
        }

        return createInitialPassengerForm()
      }),
    )

    setActivePassengerIndex((prev) => Math.min(prev, travelerCount - 1))
  }, [travelerCount])

  const departureLabel =
    departureAirportOptions.find((option) => option.code === departureCode)?.label.split(',')[0] ?? 'Jakarta'
  const destinationLabel = arrivalCity ?? 'Jeddah'
  const destinationCode = cityAirportCodeMap[destinationLabel] ?? 'JED'

  const dateLabel = useMemo(() => {
    if (!travelDate) {
      return '18 Feb 2026'
    }

    return travelDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }, [travelDate])

  const shortDepartureDateLabel = useMemo(() => {
    if (!travelDate) {
      return '18 Feb'
    }

    return travelDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    })
  }, [travelDate])

  const shortReturnDateLabel = useMemo(() => {
    if (!travelDate) {
      return '21 Feb'
    }

    const returnDate = new Date(travelDate)
    returnDate.setDate(returnDate.getDate() + 3)

    return returnDate.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
    })
  }, [travelDate])

  const flightOffers = useMemo(() => {
    const budgetOffset = budgetRange ? (budgetOffsets[budgetRange] ?? 0) : 0
    const participantOffset = Math.max(0, totalParticipants - 2) * 350_000

    return flightOfferTemplate.map((offer, index) => ({
      ...offer,
      price: offer.price + budgetOffset + participantOffset + index * 120_000,
      segments: offer.segments.map((segment) => {
        if (segment.code === 'CGK' && departureCode) {
          return { ...segment, code: departureCode }
        }

        if (segment.code === 'JED') {
          return { ...segment, code: destinationCode }
        }

        return segment
      }),
    }))
  }, [budgetRange, departureCode, destinationCode, totalParticipants])

  const selectedFlightOffer = useMemo(
    () => flightOffers.find((offer) => offer.id === selectedFlightId) ?? flightOffers[0] ?? null,
    [flightOffers, selectedFlightId],
  )

  const selectedFlightDepartureTime = selectedFlightOffer?.segments[0]?.time ?? '09:45'
  const selectedFlightArrivalTime = selectedFlightOffer?.segments[selectedFlightOffer.segments.length - 1]?.time ?? '21:45'
  const selectedFlightDuration = selectedFlightOffer?.segments.find((segment) => segment.duration)?.duration ?? '12j 16m'

  const ticketFareOptions = useMemo<TicketFareOption[]>(() => {
    const basePrice = selectedFlightOffer?.price ?? 10_800_000
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
  }, [selectedFlightOffer, travelerCount])

  const selectedFare = useMemo(
    () => ticketFareOptions.find((fare) => fare.id === selectedFareId) ?? ticketFareOptions[0],
    [selectedFareId, ticketFareOptions],
  )

  const hotelOffers = useMemo(() => {
    const participantOffset = Math.max(0, travelerCount - 2) * 250000

    return hotelOfferTemplate.map((hotel, index) => ({
      ...hotel,
      pricePerNight: hotel.pricePerNight + participantOffset + index * 50000,
      totalPrice: hotel.totalPrice + participantOffset * 2 + index * 350000,
    }))
  }, [travelerCount])

  const selectedHotelOffer = useMemo(
    () => hotelOffers.find((hotel) => hotel.id === selectedHotelId) ?? hotelOffers[0] ?? null,
    [hotelOffers, selectedHotelId],
  )

  const secondHotelOffer = useMemo(() => {
    if (!selectedHotelOffer) {
      return hotelOffers[1] ?? hotelOffers[0] ?? null
    }

    return hotelOffers.find((hotel) => hotel.id !== selectedHotelOffer.id) ?? selectedHotelOffer
  }, [hotelOffers, selectedHotelOffer])

  const selectedHotelDetail = useMemo(() => {
    if (!selectedHotelOffer) {
      return null
    }

    const start = startOfDay(hotelStartDate ?? travelDate ?? new Date(2026, 1, 18))
    const end = hotelEndDate ? startOfDay(hotelEndDate) : addDays(start, 2)
    const diff = end.getTime() - start.getTime()
    const nights = Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)))

    return {
      ...hotelDetailTemplate,
      hotelId: selectedHotelOffer.id,
      name: selectedHotelOffer.name,
      locationDistanceLabel: selectedHotelOffer.distanceLabel.replace('dari ka’bah', 'ke arah Mekah'),
      rooms: hotelDetailTemplate.rooms.map((room) => ({
        ...room,
        totalPrice: room.id === 'room-1' ? selectedHotelOffer.totalPrice : selectedHotelOffer.totalPrice + 2000000,
        totalLabel: `untuk ${nights} malam`,
      })),
    }
  }, [hotelEndDate, hotelStartDate, selectedHotelOffer, travelDate])

  const selectedHotelRoom = useMemo(
    () => selectedHotelDetail?.rooms.find((room) => room.id === selectedHotelRoomId) ?? selectedHotelDetail?.rooms[0] ?? null,
    [selectedHotelDetail, selectedHotelRoomId],
  )

  const hotelStartValue = useMemo(() => startOfDay(hotelStartDate ?? travelDate ?? new Date(2026, 1, 18)), [hotelStartDate, travelDate])

  const hotelEndValue = useMemo(() => {
    if (hotelEndDate) {
      return startOfDay(hotelEndDate)
    }

    return addDays(hotelStartValue, 2)
  }, [hotelEndDate, hotelStartValue])

  const hotelNights = useMemo(() => {
    const diff = hotelEndValue.getTime() - hotelStartValue.getTime()
    return Math.max(1, Math.round(diff / (1000 * 60 * 60 * 24)))
  }, [hotelEndValue, hotelStartValue])

  const paymentBreakdown = useMemo<PaymentBreakdown>(() => {
    const flightDeparture = selectedFare.totalPrice * travelerCount
    const flightReturn = Math.round(flightDeparture * 1.067)
    const hotelMakkah = selectedHotelRoom?.totalPrice ?? 12000000
    const hotelMadinah = selectedHotelRoom?.totalPrice ?? 12000000
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
  }, [selectedFare.totalPrice, selectedHotelRoom?.totalPrice, travelerCount])

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

  const nationalityOptions = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Arab Saudi']
  const dayOptions = Array.from({ length: 31 }, (_, index) => String(index + 1).padStart(2, '0'))
  const monthOptions = [
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
  ]
  const yearOptions = Array.from({ length: 70 }, (_, index) => String(2026 - index))

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
            setHotelEndDate(addDays(selectedDate, 2))
            setScreen('umrah-traveler')
          }}
        />
      )}

      {screen === 'umrah-traveler' && (
        <UmrahTravelerScreen
          assets={umrahTravelerAssets}
          participants={travelerParticipants}
          selectedRoom={travelerRoom}
          onChangeParticipants={(key, value) => setTravelerParticipants((prev) => ({ ...prev, [key]: value }))}
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
          departureLabel={departureLabel}
          departureCode={departureCode ?? 'CGK'}
          destinationLabel={destinationLabel}
          destinationCode={destinationCode}
          dateLabel={dateLabel}
          passengerText={passengerText}
          offers={flightOffers}
          onSelectOffer={(offer) => {
            setSelectedFlightId(offer.id)
            setSelectedFareId('economy')
            setScreen('umrah-flight-detail')
          }}
          onBack={() => setScreen('umrah-budget')}
          onClose={() => setScreen('home')}
        />
      )}

      {screen === 'umrah-flight-detail' && selectedFare && (
        <UmrahFlightDetailScreen
          assets={umrahTicketAssets}
          travelerCount={travelerCount}
          fareOptions={ticketFareOptions}
          selectedFareId={selectedFare.id}
          onSelectFare={setSelectedFareId}
          onBack={() => setScreen('umrah-flight')}
          onClose={() => setScreen('home')}
          onNext={() => setScreen('umrah-ticket-info')}
        />
      )}

      {screen === 'umrah-ticket-info' && selectedFare && (
        <UmrahTicketInfoScreen
          assets={umrahTicketAssets}
          airline={selectedFlightOffer?.airline ?? 'Oman Air'}
          airlineLogo={selectedFlightOffer?.airlineLogo ?? umrahFlightAssets.omanAirLogo}
          departureLabel={departureLabel}
          departureCode={departureCode ?? 'CGK'}
          destinationLabel={destinationLabel}
          destinationCode={destinationCode}
          departureDateLabel={shortDepartureDateLabel}
          returnDateLabel={shortReturnDateLabel}
          departureTime={selectedFlightDepartureTime}
          arrivalTime={selectedFlightArrivalTime}
          returnDepartureTime={shiftTimeLabel(selectedFlightDepartureTime, 1)}
          returnArrivalTime={shiftTimeLabel(selectedFlightArrivalTime, 1)}
          durationLabel={selectedFlightDuration}
          travelerNames={travelerNames}
          contactName={travelerNames[0]}
          contactEmail="noermansyah@gmail.com"
          contactPhone="081288990011"
          totalPrice={selectedFare.totalPrice * travelerCount}
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
          onNext={() => setScreen('umrah-hotel')}
        />
      )}

      {screen === 'umrah-hotel' && (
        <UmrahHotelScreen
          assets={umrahHotelAssets}
          cityLabel="Mekah"
          checkInLabel={hotelCheckInLabel}
          checkOutLabel={hotelCheckOutLabel}
          nightsLabel={`${hotelNights} malam`}
          initialStartDate={hotelStartValue}
          initialEndDate={hotelEndValue}
          passengerText={passengerText}
          roomText={`${roomCount} kamar`}
          hotels={hotelOffers}
          onBack={() => setScreen('umrah-ticket-info')}
          onSaveDateRange={(startDate, endDate) => {
            setHotelStartDate(startDate)
            setHotelEndDate(endDate)
          }}
          onSelectHotel={(hotel) => {
            setSelectedHotelId(hotel.id)
            setSelectedHotelRoomId(null)
            setScreen('umrah-hotel-detail')
          }}
        />
      )}

      {screen === 'umrah-hotel-detail' && selectedHotelDetail && (
        <UmrahHotelDetailScreen
          assets={umrahHotelAssets}
          detail={selectedHotelDetail}
          selectedRoomId={selectedHotelRoomId}
          onBack={() => setScreen('umrah-hotel')}
          onSelectRoom={(room) => {
            setSelectedHotelRoomId(room.id)
            setScreen('umrah-hotel-ticket-info')
          }}
        />
      )}

      {screen === 'umrah-hotel-ticket-info' && selectedHotelOffer && selectedHotelRoom && (
        <UmrahHotelTicketInfoScreen
          assets={umrahHotelAssets}
          hotelImage={selectedHotelOffer.image}
          hotelName={selectedHotelOffer.name}
          roomName={selectedHotelRoom.name}
          travelerText={`${travelerParticipants.dewasa} Dewasa / Kamar`}
          checkInLabel={`${hotelCheckInLabel} (16:00)`}
          checkOutLabel={`${hotelCheckOutLabel} (12:00)`}
          contactName={travelerNames[0]}
          contactEmail="noermansyah@gmail.com"
          contactPhone="081288990011"
          totalPrice={selectedHotelRoom.totalPrice}
          totalLabel={selectedHotelRoom.totalLabel}
          onBack={() => setScreen('umrah-hotel-detail')}
          onNext={() => setScreen('umrah-payment-overview')}
        />
      )}

      {screen === 'umrah-payment-overview' && selectedHotelRoom && (
        <UmrahPaymentOverviewScreen
          assets={umrahPaymentAssets}
          hotels={[
            {
              id: `${selectedHotelOffer?.id ?? 'hotel-makkah'}-makkah`,
              name: selectedHotelOffer?.name ?? 'Pullman ZamZam',
              nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
              rating: selectedHotelOffer?.rating ?? 5,
              image: selectedHotelOffer?.image ?? hotelOffers[0]?.image ?? '',
              pricePerNight: Math.round(paymentBreakdown.hotelMakkah / hotelNights),
              totalPrice: paymentBreakdown.hotelMakkah,
              travelerLabel: `${travelerCount} orang`,
            },
            {
              id: `${secondHotelOffer?.id ?? 'hotel-madinah'}-madinah`,
              name: secondHotelOffer?.name ?? 'Anjum Hotel',
              nightsLabel: `${hotelNights + 1} hari ${hotelNights} malam`,
              rating: secondHotelOffer?.rating ?? 5,
              image: secondHotelOffer?.image ?? selectedHotelOffer?.image ?? '',
              pricePerNight: Math.round(paymentBreakdown.hotelMadinah / hotelNights),
              totalPrice: paymentBreakdown.hotelMadinah,
              travelerLabel: `${travelerCount} orang`,
            },
          ]}
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
              fromTime: shiftTimeLabel(selectedFlightArrivalTime, 0),
              fromCode: destinationCode,
              duration: selectedFlightDuration,
              mode: 'Langsung',
              toTime: shiftTimeLabel(selectedFlightDepartureTime, 0),
              toCode: departureCode ?? 'CGK',
              airline: selectedFlightOffer?.airline ?? 'Oman Air',
              price: paymentBreakdown.flightReturn,
              isSelected: false,
            },
          ]}
          breakdown={paymentBreakdown}
          travelerCount={travelerCount}
          hotelNightsLabel={`${hotelNights + 1} hari ${hotelNights} malam`}
          onBack={() => setScreen('umrah-hotel-ticket-info')}
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
          virtualAccountNumber="8848800096475552"
          virtualAccountName={selectedPaymentMethod === 'credit-card' ? 'Visa / Master Card' : 'BNI Virtual Account'}
          totalPayment={paymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-method')}
          onNext={() => setScreen('umrah-payment-success')}
        />
      )}

      {screen === 'umrah-payment-success' && (
        <UmrahPaymentSuccessScreen
          assets={umrahPaymentAssets}
          virtualAccountNumber="8848800096475552"
          virtualAccountName={selectedPaymentMethod === 'credit-card' ? 'Visa / Master Card' : 'BNI Virtual Account'}
          totalPayment={paymentBreakdown.grandTotal}
          onBack={() => setScreen('umrah-payment-pending')}
          onNext={() => setScreen('umrah-payment-complete')}
        />
      )}

      {screen === 'umrah-payment-complete' && (
        <UmrahPaymentCompleteScreen
          assets={umrahCompletionAssets}
          onBack={() => setScreen('umrah-payment-success')}
          onNext={() => setScreen('home')}
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
