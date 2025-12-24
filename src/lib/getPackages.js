/**
 * Sort features by status (true first)
 * @param {Array} features - Array of feature objects
 * @returns {Array} Sorted features with status true first
 */
function sortFeaturesByStatus(features) {
  if (!Array.isArray(features)) return [];
  
  return features.sort((a, b) => {
    // Status true comes first
    if (a.status === b.status) return 0;
    return b.status - a.status;
  });
}

/**
 * Sort packages by highlight and price, and features by status
 * Filter out packages with no requirements
 * @param {Array} packages - Array of package objects
 * @returns {Array} Sorted packages with sorted features (excluding packages with no requirements)
 */
export function formattedPackages(packages) {
  return packages
    
    .map((pkg) => ({
      ...pkg,
      // Sort features by status (true first)
      features: sortFeaturesByStatus(pkg.features),
    }))
    .sort((a, b) => {
      const priceA = a.price || 0;
      const priceB = b.price || 0;

      if (a.highlight === b.highlight) {
        if (priceA === 0 && priceB !== 0) return 1;
        if (priceA !== 0 && priceB === 0) return -1;
        return priceA - priceB;
      }
      return b.highlight - a.highlight;
    });
}

export async function getPackages() {
  try {
    const res = await fetch(
      `https://ganesha-cms.vercel.app/api/business/packages?serviceId=11&limit=100`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    if (data?.data && Array.isArray(data.data)) {
      // Sort: highlight true first, then by price ascending (0 last)
      const result = await formattedPackages(data.data);
      return result;
    }
    return [];
  } catch (err) {
    console.error("Error fetching website packages:", err.message);
    return [];
  }
}
