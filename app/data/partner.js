import { FaCheckCircle, FaStar, FaLock, FaWallet } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
export const partnerFilterData = [
  {
    title: "student-roost",
    imageSrc: "/images/partner/student-roost.webp",
    filterTitle: "Student Roost",
  },
  {
    title: "go-britanya",
    imageSrc: "/images/partner/go-britanya.webp",
    filterTitle: "Gobritanya（前端简称 gob）",
  },
  {
    title: "urbanest",
    imageSrc: "/images/partner/urbanest.webp",
    filterTitle: "Urbanest Student Accommodation",
  },
  {
    title: "uniplaces",
    imageSrc: "/images/partner/uniplaces.webp",
    filterTitle: "Uniplaces United Kingdom",
  },
  {
    title: "student-luxe",
    imageSrc: "/images/partner/student-luxe.webp",
    filterTitle: "Student Luxe",
  },
  {
    title: "iq-student-accomodation",
    imageSrc: "/images/partner/iq-student-accomodation.webp",
    filterTitle: "iQ Student Accommodation",
  },
  {
    title: "londonist",
    imageSrc: "/images/partner/londonist.webp",
    filterTitle: "Londonist（lit）",
  },
];

export const partnerDetailsMap = {
  "student-roost": {
    title: "Student Roost",
    imageSrc: "/images/partner/student-roost.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    promoData: {
      gridData: [
        { id: 1, video: "/images/partner/student-roost/student-roost-1.mp4" },
        { id: 2, image: "/images/partner/student-roost/NowBooking2627.avif" },
        { id: 3, image: "/images/partner/student-roost/Referral.avif" },
        { id: 4, video: "/images/partner/student-roost/student-roost-2.mp4" },
      ],
      promoDataCta: {
        title: "Be ready to belong",
        subTitle:
          " Stay with Student Roost and feel right at home across all of our UK properties. We’ve got you.",
      },
    },
    description:
      "Student Roost is the third largest provider of purpose-built student accommodation in the UK. Each year, it caters to over 23,000 students from across the globe. Student Roost develops, manages, and delivers high-quality student living spaces with modern amenities, professional on-site support teams, and flexible tenancy and payment options—ensuring a comfortable, secure, and enriching living experience throughout the student journey.",

    topCities: [
      "London",
      "Sheffield",
      "Liverpool",
      "Glasgow",
      "Edinburgh",
      "Bournemouth",
      "Aberdeen",
      "Leicester",
      "Newcastle",
      "Nottingham",
      "Swansea",
      "Belfast",
    ],

    features: [
      {
        title: "Prime Locations",
        description:
          "Properties are located close to universities and city centres, offering easy commutes, urban convenience, and vibrant student life.",
      },
      {
        title: "24/7 Support Services",
        description:
          "Round-the-clock reception and on-site support ensure safety, comfort, and assistance whenever needed.",
      },
      {
        title: "All Bills Included",
        description:
          "Utility bills are included in the rent, helping students manage expenses more efficiently.",
      },
      {
        title: "Flexible Renting Options",
        description:
          "Multiple tenancy lengths and payment plans are available to suit different budgets and preferences.",
      },
      {
        title: "Modern Facilities",
        description:
          "Fully furnished rooms with high-speed Wi-Fi, study desks, beds, and shared amenities such as study spaces, laundry rooms, and secure access systems.",
      },
    ],

    nearbyUniversities: [
      "University of London",
      "University of Liverpool",
      "Nottingham Trent University",
      "Arts University Bournemouth",
      "University of Sheffield",
      "University of Edinburgh",
      "Newcastle University",
      "University of York",
      "Cardiff University",
    ],
  },
  "go-britanya": {
    title: "GoBritanya",
    imageSrc: "/images/partner/go-britanya.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    description:
      "GoBritanya is a leading provider of premium student accommodation, offering over 3,000 rooms in key locations across London, Brighton, and Dublin. Known for its inclusive and diverse environment, GoBritanya caters to students from over 150 nationalities, providing a home-away-from-home experience with a strong focus on student well-being and community integration.",
    topCities: ["London", "Brighton", "Dublin"],

    features: [
      {
        title: "Flexible Tenancies",
        description:
          "Offers booking options ranging from short-term stays (4 weeks) to full academic years (51 weeks).",
      },
      {
        title: "All-Inclusive Living",
        description:
          "Rent includes all utility bills and high-speed Wi-Fi, providing students with a hassle-free budgeting experience.",
      },
      {
        title: "On-site Wellness Facilities",
        description:
          "Properties feature modern gyms, cinema rooms, and dedicated study spaces to balance academics and health.",
      },
      {
        title: "24/7 Security & Support",
        description:
          "Ensures student safety with round-the-clock security teams and on-site support services.",
      },
      {
        title: "Airport & Move-in Services",
        description:
          "Provides unique value-added services like airport transfers and essential room starter kits.",
      },
    ],
    nearbyUniversities: [
      "University College London (UCL)",
      "King's College London (KCL)",
      "City, University of London",
      "London School of Economics (LSE)",
      "University of Brighton",
      "Trinity College Dublin",
    ],
  },
  urbanest: {
    title: "Urbanest Student Accommodation",
    imageSrc: "/images/partner/urbanest.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    features: [
      {
        title: "Prime Zone 1 Locations",
        description:
          "All properties are centrally located in London’s Zone 1, keeping students at the heart of the city's action.",
      },
      {
        title: "Innovative Amenities",
        description:
          "Features unique additions like underfloor heating, floor-to-ceiling windows, and free-to-use bicycles.",
      },
      {
        title: "Sustainability Focus",
        description:
          "Buildings are designed with eco-friendly initiatives, including solar shading and biodiversity roof gardens.",
      },
      {
        title: "Exclusively Postgraduate Options",
        description:
          "Select residences, like Urbanest City, are dedicated exclusively to postgraduate students for a focused environment.",
      },
      {
        title: "Social & Wellness Calendar",
        description:
          "Regularly hosts yoga sessions, employability workshops, and social events to foster community.",
      },
    ],
    description:
      "Urbanest is London’s premier student accommodation provider, featuring nine unique properties in the most iconic Zone 1 locations. They pride themselves on high-specification design, sustainable building practices, and an elevated social experience, offering everything from shared apartments to luxury penthouses with panoramic city views.",
    topCities: ["London"],

    nearbyUniversities: [
      "King's College London",
      "London School of Economics (LSE)",
      "Coventry University London",
      "University of the Arts London (UAL)",
      "Imperial College London",
    ],
  },
  uniplaces: {
    title: "Uniplaces",
    imageSrc: "/images/partner/uniplaces.webp",
    heroTitle: {
      titlePart1: "The Largest ",
      boldTitle: "Global Platform ",
      titlePart2: "for Furnished Rentals",
      subTitle:
        "Best price guaranteed: if you find it cheaper elsewhere, we’ll refund the difference",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    description:
      "Uniplaces is an international online marketplace for student housing that connects students with a vast range of verified properties across the UK and Europe. It simplifies the search process by offering thousands of rooms, flats, and residences that are personally vetted for quality and safety.",
    topCities: [
      "London",
      "Manchester",
      "Leeds",
      "Nottingham",
      "Sheffield",
      "Cardiff",
    ],
    features: [
      {
        title: "Verified Listings",
        description:
          "Every property is checked by a quality control team with accurate photos and videos to ensure trust.",
      },
      {
        title: "Broad Choice of Housing",
        description:
          "Ranges from budget-friendly shared rooms to entire private apartments to fit any student's lifestyle.",
      },
      {
        title: "Safe Online Booking",
        description:
          "Allows students to book their home before even arriving in the country via a secure payment platform.",
      },
      {
        title: "Multilingual Support",
        description:
          "Offers dedicated customer support in multiple languages to help international students navigate their move.",
      },
      {
        title: "Central Hubs",
        description:
          "Specializes in city-center properties that reduce commute times to major university campuses.",
      },
    ],
    nearbyUniversities: [
      "University of Leeds",
      "Manchester Metropolitan University",
      "University of Nottingham",
      "Cardiff University",
      "University of Sheffield",
    ],
  },
  "student-luxe": {
    title: "Student Luxe",
    imageSrc: "/images/partner/student-luxe.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    description:
      "Student Luxe redefines student living by offering high-end, hotel-style apartments for guests seeking comfort, flexibility, and superior service. Catering to students with higher budgets, they provide fully-furnished luxury residences in the most affluent neighborhoods, combining the privacy of an apartment with the perks of a boutique hotel.",
    topCities: [
      "London",
      "Leeds",
      "Glasgow",
      "Manchester",
      "Edinburgh",
      "Cambridge",
    ],
    features: [
      {
        title: "Hotel-Style Services",
        description:
          "Includes professional concierge services, weekly housekeeping, and 24-hour maintenance.",
      },
      {
        title: "High-End Amenities",
        description:
          "Access to premium facilities such as swimming pools, luxury spas, and state-of-the-art private gyms.",
      },
      {
        title: "Flexible Premium Stays",
        description:
          "Offers flexible rental lengths from 1 to 12 months without the need for a UK guarantor or credit checks.",
      },
      {
        title: "Affluent Neighborhoods",
        description:
          "Properties are situated in prime areas like Mayfair, Chelsea, and South Kensington.",
      },
      {
        title: "Tech-Ready Apartments",
        description:
          "Fully-furnished spaces featuring branded home appliances, smart TVs, and ultra-fast Wi-Fi.",
      },
    ],
    nearbyUniversities: [
      "University College London (UCL)",
      "Imperial College London",
      "University of Cambridge",
      "King’s College London",
      "London Business School",
    ],
  },
  "iq-student-accomodation": {
    title: "iQ Student Accommodation",
    imageSrc: "/images/partner/iq-student-accomodation.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    description:
      "iQ Student Accommodation is one of the UK’s largest providers, operating over 70 sites across nearly 30 cities. They offer a diverse range of room types—from en-suites to studios—all designed to keep students close to campus while providing a vibrant, safe social community.",
    topCities: [
      "London",
      "Manchester",
      "Birmingham",
      "Edinburgh",
      "Leeds",
      "Bristol",
      "Oxford",
    ],
    features: [
      {
        title: "Campus Proximity",
        description:
          "Most iQ sites are located within a 10-20 minute walk of major university campuses.",
      },
      {
        title: "Vibrant Social Spaces",
        description:
          "Equipped with unique leisure zones like gaming rooms with PS5s, karaoke rooms, and cinema lounges.",
      },
      {
        title: "90%+ Safety Satisfaction",
        description:
          "Highly rated for security, featuring key fob entry, 24/7 CCTV, and on-site overnight staff.",
      },
      {
        title: "Wellness & Fitness",
        description:
          "Offers well-equipped on-site gyms that are free for residents, promoting a healthy lifestyle.",
      },
      {
        title: "Simplified Payments",
        description:
          "All bills, including electricity, water, heating, and fast Wi-Fi, are included in one monthly payment.",
      },
    ],
    nearbyUniversities: [
      "University of Oxford",
      "University of Manchester",
      "University of Edinburgh",
      "Aston University",
      "University of Bristol",
      "Nottingham Trent University",
    ],
  },
  londonist: {
    title: "Londonist DMC",
    imageSrc: "/images/partner/londonist.webp",
    heroTitle: {
      titlePart1: "Student Accommodation that’s",
      boldTitle: "More",
      titlePart2: "than a Room",
      subTitle: "Be ready to belong, be ready for possibilities",
    },
    featureStrip: [
      {
        icon: <FaCheckCircle />,
        title: "Excellent value",
        highlight: "student living",
      },
      {
        icon: <GrNotes />,
        title: "All bills included,",
        highlight: "all year long",
      },
      {
        icon: <BiSupport />,
        title: "24/7 onsite",
        highlight: "team support",
      },
      {
        icon: <FaWallet />,
        title: "Flexible",
        highlight: "payment options",
      },
    ],
    description:
      "Londonist DMC is an award-winning student accommodation agency providing over 2,000 rooms across 50+ locations in London. As a leading Destination Management Center, they specialize in short and long-term stays (from 2 to 51 weeks), offering personalized services to ensure international students feel at home from the moment they arrive.",
    topCities: ["London"],
    features: [
      {
        title: "Award-Winning Service",
        description:
          "Consistently named 'Best Service Provider' for their commitment to 5-star customer experiences.",
      },
      {
        title: "Wide Geographic Reach",
        description:
          "Residences cover all major London Zones (1-3), including Kings Cross, Spitalfields, and Greenwich.",
      },
      {
        title: "Inclusive Lifestyle Packs",
        description:
          "Offers move-in assistance with kitchen and bathroom starter sets and even gym memberships.",
      },
      {
        title: "Global Support Network",
        description:
          "With offices in London, Istanbul, and Shanghai, they provide multi-lingual support tailored to specific markets.",
      },
      {
        title: "Modern Community Hubs",
        description:
          "Properties feature communal study rooms, roof terraces with landmark views, and organized social events.",
      },
    ],
    nearbyUniversities: [
      "University of the Arts London (UAL)",
      "London South Bank University",
      "BPP University",
      "The University of Law",
      "Queen Mary University of London",
    ],
  },
};
