import ImagePlaceholder from './ImagePlaceholder'

function StoreSection() {
  const stores = [
    {
      name: 'Nike Shoe Mall',
      products: [
        ['Running Shoes', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=85', 'Rs 929'],
        ['White Sneakers', 'https://images.unsplash.com/photo-1460353581641-37b9f43c97c2?auto=format&fit=crop&w=500&q=85', 'Rs 1,299'],
        ['Black Sports Shoes', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=85', 'Rs 1,099'],
      ],
    },
    {
      name: 'Haradak Disaster Mall',
      products: [
        ['Denim Jeans', 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=85', 'Rs 1,499'],
        ['Winter Jacket', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=85', 'Rs 2,299'],
        ['Cotton T-Shirt', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=85', 'Rs 799'],
      ],
    },
    {
      name: 'Galaxy Galleria Mall',
      products: [
        ['Leather Tote Bag', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=85', 'Rs 1,899'],
        ['Classic Watch', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=85', 'Rs 2,499'],
        ['Fashion Cap', 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=85', 'Rs 599'],
      ],
    },
    {
      name: 'Aurora Mini Mall',
      products: [
        ['Gray High Heels', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=85', 'Rs 1,299'],
        ['Pastel Blazer', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=85', 'Rs 1,799'],
        ['Crossbody Bag', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=85', 'Rs 1,099'],
      ],
    },
  ]
  return (
    <section className="stores">
      <h2>Best Selling Store</h2>
      <div className="store-layout">
        <div className="mall-tile">
          <ImagePlaceholder label="IMAGE: SHOPPING BAGS" />
          <div className="mall-copy">
            <strong>BeliBeli Mall</strong>
            <span>Shop, Explore, Delight and<br />
              Experience Mall Magic!</span>
          </div>
        </div>
        <div className="store-list">
          {stores.map((store) => (
            <div className="store-item" key={store.name}>
              <div className="store-name">
                <span className="store-mark">&#9735;</span>
                <b>{store.name}</b>
                <small>&#8220;Best brands for you&#8221;</small>
              </div>
              <div className="mini-products">
                {store.products.map(([name, src, price]) => (
                  <div className="mini-product" key={name}>
                    <ImagePlaceholder label={name} src={src} />
                    <strong>{price}</strong>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StoreSection
