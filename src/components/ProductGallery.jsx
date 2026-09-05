import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

function ProductGallery({ product }) {
  const productLabel = product.image || product.name || 'PRODUCT'
  const detailImages = product.detailImages || [
    `IMAGE: FRONT ${productLabel}`,
    `IMAGE: BACK ${productLabel}`,
    `IMAGE: SIDE ${productLabel}`,
    `IMAGE: MODEL ${productLabel}`,
  ]
  const [selectedImage, setSelectedImage] = useState(detailImages[0])
  const [zoomLevel, setZoomLevel] = useState(1)

  const selectImage = (image) => {
    setSelectedImage(image)
    setZoomLevel(1)
  }

  const zoomIn = () => setZoomLevel((level) => Math.min(level + 0.25, 2))
  const zoomOut = () => setZoomLevel((level) => Math.max(level - 0.25, 1))

  return (
    <div className="gallery">
      <div className="thumbnail-list" aria-label="Product views">
        {detailImages.map((image) => {
          const imageLabel = typeof image === 'string' ? image : image.label
          return (
          <button
            type="button"
            className={`thumbnail-button ${selectedImage === image ? 'selected' : ''}`}
            key={imageLabel}
            onClick={() => selectImage(image)}
            aria-label={`View ${imageLabel}`}
            aria-pressed={selectedImage === image}
          >
            <ImagePlaceholder label={imageLabel} src={typeof image === 'string' ? undefined : image.src} />
          </button>
          )
        })}
      </div>
      <div className="main-product-image">
        <div className="main-image-viewport">
          <div className="main-image-content" style={{ transform: `scale(${zoomLevel})` }}>
            <ImagePlaceholder
              label={typeof selectedImage === 'string' ? selectedImage : selectedImage.label}
              src={typeof selectedImage === 'string' ? undefined : selectedImage.src}
            />
          </div>
        </div>
        <div className="zoom-controls" aria-label="Image zoom controls">
          <button type="button" onClick={zoomOut} disabled={zoomLevel === 1} aria-label="Zoom out">-</button>
          <span>{Math.round(zoomLevel * 100)}%</span>
          <button type="button" onClick={zoomIn} disabled={zoomLevel === 2} aria-label="Zoom in">+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductGallery
