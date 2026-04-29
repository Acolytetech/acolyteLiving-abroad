import mockResults from "./uhomes_results.json";
import { classifyAmenities, propertyDetailData } from "./detail-property";

const LOCAL_MOCK_IMAGES = ["/img.webp", "/img.webp", "/img.webp"];

const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizeRoomTypes = (roomTypes = []) =>
  roomTypes.map((room) => ({
    ...room,
    count: room.count || 1,
    currency: room?.rent_amount?.currency || room.currency || "GBP",
    lease_unit: room.lease_unit || "WEEK",
    price: toNumber(room?.rent_amount?.amount ?? room.price, 0),
  }));

export const getMockProperties = () => {
  const rows = mockResults?.[0]?.data?.data || [];

  return rows.map((item) => {
    const house = item.house || {};
    const roomTypeItems = item?.room_types?.room_type_items || [];

    return {
      ...item,
      house,
      house_id: house.house_id,
      title: house.title,
      address: item?.location?.address || "",
      city_name: item?.city?.city_name || "",
      supplier_name: item?.supplier?.name || "",
      rent_amount: toNumber(house?.rent_amount?.amount, 0),
      rent_currency: house?.rent_amount?.abbr || "GBP",
      lease_unit: house?.lease_unit || "WEEK",
      room_types: {
        room_type_items: normalizeRoomTypes(roomTypeItems),
      },
      updated_images: LOCAL_MOCK_IMAGES,
      images: LOCAL_MOCK_IMAGES,
    };
  });
};

export const getMockCountries = () => {
  const all = getMockProperties();
  const countryMap = new Map();

  all.forEach((item) => {
    const countryKey = item?.country?.country_unique_name;
    if (!countryKey) return;

    if (!countryMap.has(countryKey)) {
      countryMap.set(countryKey, {
        unique_name: countryKey,
        name: item?.country?.country_name || countryKey.toUpperCase(),
        cities: [],
      });
    }

    const city = item?.city?.city_name;
    if (city && !countryMap.get(countryKey).cities.includes(city)) {
      countryMap.get(countryKey).cities.push(city);
    }
  });

  return Array.from(countryMap.values());
};

const includesText = (value, query) =>
  (value || "").toString().toLowerCase().includes((query || "").toLowerCase());

export const queryMockProperties = ({
  items,
  page = 1,
  limit = 12,
  filters = {},
  sortValue = "relevance",
}) => {
  let result = [...items];

  if (filters.country) {
    result = result.filter(
      (item) => item?.country?.country_unique_name === filters.country
    );
  }

  if (filters.city) {
    result = result.filter((item) => includesText(item?.city?.city_name, filters.city));
  }

  if (filters.title) {
    result = result.filter((item) => includesText(item?.house?.title, filters.title));
  }

  if (filters.university) {
    result = result.filter((item) =>
      includesText(item?.school?.school_name, filters.university)
    );
  }

  if (filters.search) {
    result = result.filter(
      (item) =>
        includesText(item?.house?.title, filters.search) ||
        includesText(item?.location?.address, filters.search) ||
        includesText(item?.city?.city_name, filters.search) ||
        includesText(item?.school?.school_name, filters.search)
    );
  }

  if (filters.supplier) {
    result = result.filter((item) => includesText(item?.supplier?.name, filters.supplier));
  }

  if (filters.room_type) {
    result = result.filter((item) =>
      (item?.room_types?.room_type_items || []).some((room) =>
        includesText(room?.name, filters.room_type)
      )
    );
  }

  if (filters.min_price) {
    const minPrice = toNumber(filters.min_price);
    result = result.filter((item) => toNumber(item?.house?.rent_amount?.amount) >= minPrice);
  }

  if (filters.max_price) {
    const maxPrice = toNumber(filters.max_price);
    result = result.filter((item) => toNumber(item?.house?.rent_amount?.amount) <= maxPrice);
  }

  if (Array.isArray(filters.amenities) && filters.amenities.length > 0) {
    result = result.filter((item) => {
      const names = (item?.amenities || []).map((a) => a?.name?.toLowerCase?.() || "");
      return filters.amenities.every((amenity) => names.includes((amenity || "").toLowerCase()));
    });
  }

  if (sortValue === "price-low") {
    result.sort(
      (a, b) => toNumber(a?.house?.rent_amount?.amount) - toNumber(b?.house?.rent_amount?.amount)
    );
  } else if (sortValue === "price-high") {
    result.sort(
      (a, b) => toNumber(b?.house?.rent_amount?.amount) - toNumber(a?.house?.rent_amount?.amount)
    );
  }

  const total = result.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (safePage - 1) * limit;
  const paged = result.slice(startIndex, startIndex + limit);

  return {
    data: paged,
    pagination: {
      total,
      total_pages: totalPages,
      current_page: safePage,
      per_page: limit,
    },
  };
};

export const findMockPropertyById = (id) => {
  const all = getMockProperties();
  return all.find((item) => String(item?.house?.house_id) === String(id)) || null;
};

export const toMockDetailProperty = (item) => {
  if (!item) return null;

  const roomTypes = normalizeRoomTypes(item?.room_types?.room_type_items || []).map((room) => ({
    name: room.name,
    type: room.name,
    count: room.count || 1,
    price: room.price,
    currency: room.currency,
    lease_unit: room.lease_unit,
    promo_price: null,
    original_price: null,
    description: `${room.name} room option`,
    images: LOCAL_MOCK_IMAGES,
    room_facilities: ["Private Bathroom", "Wi-Fi", "Study Desk"],
  }));

  const reviews = item?.reviews || {};
  const school = item?.school || {};

  return {
    ...propertyDetailData,
    house_id: item?.house?.house_id,
    id: item?.house?.house_id,
    title: item?.house?.title || propertyDetailData.title,
    address: item?.location?.address || propertyDetailData.address,
    city_name: item?.city?.city_name || propertyDetailData.city_name,
    city: item?.city?.city_name || propertyDetailData.city,
    country: item?.country?.country_name || propertyDetailData.country,
    supplier_name: item?.supplier?.name || propertyDetailData.supplier_name,
    rent_amount: toNumber(item?.house?.rent_amount?.amount, propertyDetailData.rent_amount),
    rent_currency: item?.house?.rent_amount?.abbr || propertyDetailData.rent_currency,
    lease_unit: item?.house?.lease_unit || propertyDetailData.lease_unit,
    promo_price: toNumber(item?.house?.promo_price?.amount, 0) || null,
    original_price: toNumber(item?.house?.original_price?.amount, 0) || null,
    bed_num: item?.house?.bed_num || propertyDetailData.bed_num,
    total_floor: item?.house?.total_floor || propertyDetailData.total_floor,
    booking_status: item?.house?.booking_status ?? propertyDetailData.booking_status,
    min_start_date: item?.house?.min_start_date || propertyDetailData.min_start_date,
    updated_images: LOCAL_MOCK_IMAGES,
    images: LOCAL_MOCK_IMAGES,
    tags: item?.tags?.length ? item.tags : propertyDetailData.tags,
    contacts: item?.contacts || propertyDetailData.contacts,
    room_types: roomTypes.length ? roomTypes : propertyDetailData.room_types,
    amenities: item?.amenities?.length
      ? classifyAmenities(item.amenities)
      : propertyDetailData.amenities,
    reviews: {
      avg_score: toNumber(reviews?.avg_score, propertyDetailData.reviewData.averageRating),
      review_count: toNumber(reviews?.review_count, propertyDetailData.reviewData.totalReviews),
      items: reviews?.items || propertyDetailData.reviewData.reviews,
    },
    school_info: school?.school_name
      ? {
          school_name: school.school_name,
          distance: toNumber(school.distance, propertyDetailData.school_info.distance),
          location: school.location || propertyDetailData.school_info.location,
          traffic: school.traffic || propertyDetailData.school_info.traffic,
        }
      : propertyDetailData.school_info,
  };
};
