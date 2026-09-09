import ImagePlaceholder from './ImagePlaceholder'
import { CrownFilled, ShopOutlined } from '@ant-design/icons'

function StoreSection() {
  const stores = [
    {
      name: 'Nike Shoe Mall',
      mark: 'N',
      tagline: 'Just do it bro!',
      products: [
        ['Running Shoes', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=85', 'Rp650.000'],
        ['White Sneakers', 'https://images.unsplash.com/photo-1460353581641-37b9f43c97c2?auto=format&fit=crop&w=500&q=85', 'Rp270.000'],
        ['Black Sports Shoes', 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=500&q=85', 'Rp99.000'],
      ],
    },
    {
      name: 'Haradak Disaster Mall',
      mark: 'D',
      tagline: 'Unleash Your Fashion',
      products: [
        ['Denim Jeans', 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=85', 'Rp324.000'],
        ['Winter Jacket', 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=85', 'Rp199.000'],
        ['Cotton T-Shirt', 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=85', 'Rp120.000'],
      ],
    },
    {
      name: 'Galaxy Galleria Mall',
      mark: 'G',
      tagline: 'Be Extraordinary',
      products: [
        ['Leather Tote Bag', 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=85', 'Rp179.000'],
        ['Classic Watch', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=85', 'Rp199.000'],
        ['Fashion Cap', 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=85', 'Rp253.000'],
      ],
    },
    {
      name: 'Aurora Well Mall',
      mark: 'A',
      tagline: 'Chic, Bold, Confident',
      products: [
        ['Gray High Heels', 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=85', 'Rp250.000'],
        ['Pastel Blazer', 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=500&q=85', 'Rp162.000'],
        ['Crossbody Bag', 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=85', 'Rp255.000'],
      ],
    },
  ]
  return (
    <section className="stores">
      <h2>Best Selling Store</h2>
      <div className="store-layout">
        <div className="mall-tile">
          <ImagePlaceholder
            label="IMAGE: SHOPPING BAGS"
            src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=700&q=85"
          />
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
                <span className="store-mark" aria-hidden="true">
                  <ShopOutlined />
                  <CrownFilled className="store-badge" />
                </span>
                <div>
                  <b>{store.name}</b>
                  <small>&#8220;{store.tagline}&#8221;</small>
                </div>
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
