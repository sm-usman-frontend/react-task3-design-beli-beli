const imageUrls = {
  shirt: ['1602810318383-e386cc2a3ccf', '1618354691373-d851c5c3a990', '1596755389378-c31d21fd1273', '1562157873-818bc0726f68'],
  tshirt: ['1521572163474-6864f9cf17ab', '1503341504253-dff4815485f1', '1551488831-00ddcb6c6bd3', '1562157873-818bc0726f68'],
  jacket: ['1551028719-00167b16eac5', '1544966503-7cc5ac882d5', '1548883354-7622d03aca27', '1517841905240-472988babdf9'],
  jeans: ['1542272604-787c3835535d', '1475178626620-a4d074967452', '1552374196-c4e7ffc6e126', '1515886657613-9f3515b0c78f'],
  bag: ['1584917865442-de89df76afd3', '1594223274515-3f8f9d6a8a1c', '1553062407-98eeb64c6a62', '1548036328-c9fa89d128fa'],
  shoe: ['1542291026-7eec264c27ff', '1460353581641-37b9f43c97c2', '1560769629-975ec94e6a86', '1549298916-b41d501d3772'],
  boot: ['1520639888713-7851133b1ed0', '1608256246200-53e635b5b65f', '1529810313688-490fcbf871c8', '1542840410-3092fafeabf4'],
  heel: ['1543163521-1bf539c55dd2', '1515347619252-60a4bf4fff4f', '1595950653106-6c9ebd614d3a', '1560343090-f0409e92791a'],
  watch: ['1523275335684-37898b6baf30', '1524805444758-089113d48a6d', '1508057198894-247b23fe5ade', '1523170335258-f5ed11844a49'],
  cap: ['1521369909029-2afed882baee', '1534215754732-3a6a0b4c0b3e', '1517841905240-472988babdf9', '1575428652377-a2d3b7b4b3f5'],
  short: ['1591195853828-11db59a44f6b', '1562886877-2f3a1f5f6b9c', '1586790170083-2f5f0b4f6f8a', '1517836357463-d25dfeac3438'],
  blazer: ['1551488831-00ddcb6c6bd3', '1507679799987-c73779587ccf', '1594938298603-c8148c4dae35', '1617127365659-c47fa864d8bc'],
  store: ['1441986300917-64674bd600d8'],
}

const imageBaseUrl = 'https://images.unsplash.com/photo-'
const productTypeAliases = [
  ['winter jacket', 'jacket'],
  ['denim jacket', 'jacket'],
  ['summer hat', 'hat'],
  ['crossbody bag', 'bag'],
  ['sling bag', 'bag'],
  ['gray heels', 'heel'],
  ['velvet blazer', 'blazer'],
  ['active shorts', 'short'],
]

function getImageUrl(label) {
  const text = String(label || '').toLowerCase()
  const alias = productTypeAliases.find(([phrase]) => text.includes(phrase))
  const key = alias?.[1] || Object.keys(imageUrls).find((name) => text.includes(name))
  const urls = imageUrls[key] || imageUrls.store
  const viewIndex = text.includes('back') ? 1 : text.includes('side') ? 2 : text.includes('model') ? 3 : 0
  const imageId = urls[viewIndex] || urls[0]
  return `${imageBaseUrl}${imageId}?auto=format&fit=crop&w=900&q=85`
}

function ImagePlaceholder({ label, src }) {
  const imageSrc = src || getImageUrl(label)

  return (
    <div className="image-placeholder">
      <img src={imageSrc} alt={label} />
    </div>
  )
}

export default ImagePlaceholder
