export const products = [
  { id: 1, name: 'UrbanEdge Men\u2019s Jeans Collection', price: 'Rp253.000', oldPrice: 'Rp300.000', image: 'IMAGE: URBANEDGE JEANS', rating: '4.9', sold: '1.2k' },
  { id: 2, name: 'Essential Men\u2019s Long Sleeve Oversized', price: 'Rp179.000', image: 'IMAGE: LONG SLEEVE SHIRT', rating: '4.8', sold: '342' },
  { id: 3, name: 'StyleHaven Men\u2019s Fashionable Boots', price: 'Rp199.000', oldPrice: 'Rp250.000', image: 'IMAGE: MEN\u2019S BOOTS', rating: '4.9', sold: '890', liked: true },
  { id: 4, name: 'Essential Long-Sleeve Graffiti Shirt for Men', price: 'Rp120.000', image: 'IMAGE: GRAFFITI SHIRT', rating: '4.7', sold: '512' },
  { id: 5, name: 'ClassicComfy Men\u2019s Formal Shoes', price: 'Rp199.000', image: 'IMAGE: FORMAL SHOES', rating: '4.9', sold: '280' },
  { id: 6, name: 'Urban Flow Men\u2019s Short Pants Collection', price: 'Rp162.000', image: 'IMAGE: MEN\u2019S SHORTS', rating: '4.8', sold: '1.1k' },
  { id: 7, name: 'GioBerry Elegant Women\u2019s Tote Collection', price: 'Rp650.000', image: 'IMAGE: BLACK TOTE BAG', rating: '4.9', sold: '124' },
  { id: 8, name: 'SassicalWomen Women\u2019s Pastel Blazer', price: 'Rp324.000', oldPrice: 'Rp390.000', image: 'IMAGE: PASTEL BLAZER', rating: '4.8', sold: '76' },
]

export const flashProducts = [
  { ...products[2], id: 201, name: 'Fleecedite Performance Winter Jacket', price: 'Rp265.000', oldPrice: 'Rp350.000', image: 'IMAGE: WINTER JACKET' },
  { ...products[6], id: 202, name: 'Gentlemen\u2019s Summer Gray Hat', price: 'Rp99.000', image: 'IMAGE: SUMMER HAT' },
  { ...products[1], id: 203, name: 'Olioborn Crossbody Shoulder Bag', price: 'Rp250.000', oldPrice: 'Rp310.000', image: 'IMAGE: CROSSBODY BAG' },
  { ...products[7], id: 204, name: 'Omay Chic - Gray Heel Toe Pointed Stilettos', price: 'Rp270.000', oldPrice: 'Rp320.000', image: 'IMAGE: GRAY HEELS' },
  { ...products[0], id: 205, name: 'UrbanEdge Slim Fit Denim', price: 'Rp289.000', oldPrice: 'Rp340.000', image: 'IMAGE: DENIM JACKET', liked: true },
  { ...products[4], id: 206, name: 'ClassicComfy Velvet Blazer', price: 'Rp350.000', image: 'IMAGE: VELVET BLAZER' },
  { ...products[5], id: 207, name: 'Urban Flow Active Shorts', price: 'Rp119.000', oldPrice: 'Rp159.000', image: 'IMAGE: ACTIVE SHORTS' },
  { ...products[6], id: 208, name: 'GioBerry Mini Sling Bag', price: 'Rp299.000', oldPrice: 'Rp380.000', image: 'IMAGE: SLING BAG' },
]

export const categoryProducts = {
  tshirt: {
    id: 101,
    name: 'UrbanEdge Men\u2019s T-Shirt',
    price: 'Rp253.000',
    oldPrice: 'Rp300.000',
    rating: '4.9',
    sold: '1.2k',
    image: 'IMAGE: URBANEDGE TSHIRT',
    fullName: 'UrbanEdge Men\u2019s Premium Cotton T-Shirt',
    detailImages: ['IMAGE: FRONT TSHIRT', 'IMAGE: BACK TSHIRT', 'IMAGE: SIDE TSHIRT', 'IMAGE: MODEL TSHIRT'],
    colors: ['WHITE', 'BLACK', 'NAVY'],
    sizes: ['S', 'M', 'L', 'XL'],
    selectedColor: 'BLACK',
    selectedSize: 'M',
    description: 'Crafted from premium combed cotton for all-day comfort. The UrbanEdge T-Shirt features a classic crew neck and tailored fit, perfect for casual and smart-casual looks alike. Available in multiple colors.',
  },
  jacket: {
    id: 102,
    name: 'StyleHaven Winter Jacket',
    price: 'Rp399.000',
    oldPrice: 'Rp450.000',
    rating: '4.8',
    sold: '890',
    image: 'IMAGE: WINTER JACKET',
    fullName: 'StyleHaven Insulated Winter Jacket',
    detailImages: ['IMAGE: FRONT JACKET', 'IMAGE: BACK JACKET', 'IMAGE: SIDE JACKET', 'IMAGE: MODEL JACKET'],
    colors: ['BLACK', 'NAVY', 'GRAY'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    selectedColor: 'BLACK',
    selectedSize: 'L',
    description: 'Stay warm in style with the StyleHaven Insulated Winter Jacket. Featuring a water-repellent outer shell, thermal interior lining, and multiple utility pockets. Perfect for cold-weather layering.',
  },
  shirt: {
    id: 103,
    name: 'Essential Men\u2019s Shirt',
    price: 'Rp179.000',
    oldPrice: 'Rp220.000',
    rating: '4.7',
    sold: '650',
    image: 'IMAGE: LONGBULLET SHIRT',
    fullName: 'Essential Men\u2019s Long Sleeve Oversized Shirt',
    detailImages: ['IMAGE: FRONT SHIRT', 'IMAGE: BACK SHIRT', 'IMAGE: SIDE SHIRT', 'IMAGE: MODEL SHIRT'],
    colors: ['WHITE', 'LIGHT BLUE', 'PINK'],
    sizes: ['S', 'M', 'L', 'XL'],
    selectedColor: 'WHITE',
    selectedSize: 'M',
    description: 'This Essential Oversized Long Sleeve Shirt offers a relaxed, comfortable fit with full-button closure. Made from soft, wrinkle-resistant cotton blend for a crisp look all day long.',
  },
  jeans: {
    id: 104,
    name: 'UrbanEdge Men\u2019s Jeans',
    price: 'Rp320.000',
    oldPrice: 'Rp400.000',
    rating: '4.9',
    sold: '1.5k',
    image: 'IMAGE: JEANS PRODUCT',
    fullName: 'UrbanEdge Men\u2019s Slim Fit Stretch Jeans',
    detailImages: ['IMAGE: FRONT JEANS', 'IMAGE: BACK JEANS', 'IMAGE: SIDE JEANS', 'IMAGE: MODEL JEANS'],
    colors: ['BLUE', 'BLACK', 'DARK INDIGO'],
    sizes: ['28', '30', '32', '34', '36'],
    selectedColor: 'BLUE',
    selectedSize: '32',
    description: 'These slim-fit stretch jeans deliver comfort and style with a touch of elastane for shape retention. Reinforced stitching at stress points ensures durability for everyday wear.',
  },
  bag: {
    id: 105,
    name: 'GioBerry Women\u2019s Tote Bag',
    price: 'Rp650.000',
    oldPrice: 'Rp750.000',
    rating: '4.9',
    sold: '412',
    image: 'IMAGE: BLACK TOTE BAG',
    fullName: 'GioBerry Elegant Women\u2019s Leather Tote Bag',
    detailImages: ['IMAGE: FRONT BAG', 'IMAGE: BACK BAG', 'IMAGE: SIDE BAG', 'IMAGE: MODEL BAG'],
    colors: ['BLACK', 'BROWN', 'CREAM'],
    sizes: ['ONE SIZE'],
    selectedColor: 'BLACK',
    selectedSize: 'ONE SIZE',
    description: 'Handcrafted from premium leather with brass hardware accents. This spacious tote features interior compartments, a zip pocket, and adjustable shoulder strap for versatile carrying.',
  },
  shoes: {
    id: 106,
    name: 'ClassicComfy Men\u2019s Formal Shoes',
    price: 'Rp299.000',
    oldPrice: 'Rp380.000',
    rating: '4.8',
    sold: '756',
    image: 'IMAGE: FORMAL SHOES',
    fullName: 'ClassicComfy Men\u2019s Leather Oxford Shoes',
    detailImages: ['IMAGE: FRONT SHOES', 'IMAGE: BACK SHOES', 'IMAGE: SIDE SHOES', 'IMAGE: MODEL SHOES'],
    colors: ['BLACK', 'BROWN', 'TAN'],
    sizes: ['7', '8', '9', '10', '11'],
    selectedColor: 'BLACK',
    selectedSize: '9',
    description: 'Classic Oxford silhouette crafted from genuine leather with a cushioned insole and non-slip rubber outsole. Perfect for office wear and formal occasions with enduring comfort.',
  },
  watches: {
    id: 107,
    name: 'TimeCraft Men\u2019s Watches',
    price: 'Rp550.000',
    oldPrice: 'Rp700.000',
    rating: '4.9',
    sold: '320',
    image: 'IMAGE: MENS WATCH',
    fullName: 'TimeCraft Men\u2019s Automatic Stainless Steel Watch',
    detailImages: ['IMAGE: FRONT WATCH', 'IMAGE: BACK WATCH', 'IMAGE: SIDE WATCH', 'IMAGE: MODEL WATCH'],
    colors: ['SILVER', 'BLACK', 'GOLD'],
    sizes: ['ONE SIZE'],
    selectedColor: 'SILVER',
    selectedSize: 'ONE SIZE',
    description: 'Featuring a precise automatic movement, this stainless steel watch pairs effortlessly with formal and casual attire. Water-resistant up to 50m with a sapphire crystal face.',
  },
  cap: {
    id: 108,
    name: 'UrbanEdge Men\u2019s Cap',
    price: 'Rp89.000',
    oldPrice: 'Rp120.000',
    rating: '4.6',
    sold: '980',
    image: 'IMAGE: MENS CAP',
    fullName: 'UrbanEdge Men\u2019s Classic Cotton Baseball Cap',
    detailImages: ['IMAGE: FRONT CAP', 'IMAGE: BACK CAP', 'IMAGE: SIDE CAP', 'IMAGE: MODEL CAP'],
    colors: ['BLACK', 'NAVY', 'WHITE', 'GRAY'],
    sizes: ['ONE SIZE'],
    selectedColor: 'BLACK',
    selectedSize: 'ONE SIZE',
    description: 'This classic baseball cap is made from durable cotton twill with a structured front panel and adjustable snapback closure. The embroidered logo adds a smart touch to any casual look.',
  },
  all: {
    id: 109,
    name: 'BeliBeli Special Collection',
    price: 'Rp299.000',
    oldPrice: 'Rp350.000',
    rating: '4.9',
    sold: '2.1k',
    image: 'IMAGE: SPECIAL COLLECTION',
    fullName: 'BeliBeli Special Premium Collection Bundle',
    detailImages: ['IMAGE: FRONT COLLECTION', 'IMAGE: BACK COLLECTION', 'IMAGE: SIDE COLLECTION', 'IMAGE: MODEL COLLECTION'],
    colors: ['MULTI'],
    sizes: ['ONE SIZE'],
    selectedColor: 'MULTI',
    selectedSize: 'ONE SIZE',
    description: 'Our special curated collection featuring best-selling items across all categories. Hand-picked for quality, style, and value. Everything you need in one exclusive bundle.',
  },
}

const categories = [
  { key: 'tshirt', name: 'T-Shirt' },
  { key: 'jacket', name: 'Jacket' },
  { key: 'shirt', name: 'Shirt' },
  { key: 'jeans', name: 'Jeans' },
  { key: 'bag', name: 'Bag' },
  { key: 'shoes', name: 'Shoes' },
  { key: 'watches', name: 'Watches' },
  { key: 'cap', name: 'Cap' },
  { key: 'all', name: 'All Category' },
]

export const categoryList = categories.map((cat) => ({
  ...cat,
  product: categoryProducts[cat.key],
}))

export function getProductById(id) {
  const numId = Number(id)
  const catProduct = Object.values(categoryProducts).find((p) => p.id === numId)
  if (catProduct) return catProduct
  const flashProduct = flashProducts.find((p) => p.id === numId)
  if (flashProduct) return flashProduct
  return products.find((p) => p.id === numId)
}

export function getCategoryByKey(key) {
  return categoryList.find((c) => c.key === key)
}

export function searchProducts(query) {
  if (!query.trim()) return []
  const q = query.toLowerCase().trim()
  const all = [...products, ...flashProducts, ...Object.values(categoryProducts)]
  return all
    .filter((p) => {
      const fields = [p.name, p.fullName, p.image].filter(Boolean)
      return fields.some((f) => f.toLowerCase().includes(q))
    })
    .slice(0, 8)
}
