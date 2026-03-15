import React, { useState, useCallback, useMemo } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import useFavourites from '../hooks/useFavourites'
import PhotoCard from './PhotoCard'

function Gallery() {
  const { photos, loading, error } = useFetchPhotos()
  const { toggleFavourite, isFavourite } = useFavourites()
  const [searchQuery, setSearchQuery] = useState('')

  
  const handleSearch = useCallback((e) => {
    setSearchQuery(e.target.value)
  }, [])

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [photos, searchQuery])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 text-lg font-medium">Something went wrong</p>
        <p className="text-gray-500 mt-1">{error}</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by author..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400"
        />
        <p className="text-sm text-gray-400 mt-1">{filteredPhotos.length} photos found</p>
      </div>

      {filteredPhotos.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No photos found for "{searchQuery}"</p>
      )}

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavourite={isFavourite(photo.id)}
            onToggle={() => toggleFavourite(photo.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery