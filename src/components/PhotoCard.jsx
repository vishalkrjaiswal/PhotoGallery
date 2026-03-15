import React from 'react'

function PhotoCard({ photo, isFavourite, onToggle }) {
  const imageUrl = `https://picsum.photos/id/${photo.id}/500/350`

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={imageUrl}
        alt={photo.author}
        className="w-full h-48 object-cover"
      />

      <div className="p-3 flex items-center justify-between">
        <p className="text-gray-800 font-medium text-sm truncate">{photo.author}</p>

        <button
          onClick={onToggle}
          className="ml-2 text-xl focus:outline-none"
          title={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
        >
          {isFavourite ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  )
}

export default PhotoCard