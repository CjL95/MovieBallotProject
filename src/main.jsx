import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

export const MovieDataContext = createContext();
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MovieDataContext.Provider value={{movies: [
      {
        name: "Whispers in the Shadow",
        id: 1,
        category: "picture",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie1.webp",
      },
      {
        name: "The Eternal Voyage",
        id: 2,
        category: "picture",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie2.webp",
      },
      {
        name: "Midnight Horizon",
        id: 3,
        category: "picture",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie3.webp",
      },
      {
        name: "Echoes of the Forgotten",
        id: 4,
        category: "picture",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie4.webp",
      },
      {
        name: "The Last Outpost",
        id: 5,
        category: "picture",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie5.webp",
      },
      {
        name: "Shattered Reflections",
        id: 6,
        category: "music",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie6.webp",
      },
      {
        name: "Beneath the Silver Moon",
        id: 7,
        category: "music",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie7.webp",
      },
      {
        name: "Chronicles of the Abyss",
        id: 8,
        category: "music",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie8.webp",
      },
      {
        name: "Silent Thunder",
        id: 9,
        category: "music",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie9.webp",
      },
      {
        name: "The Ghosts of Avalon",
        id: 10,
        category: "music",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie10.webp",
      },
      {
        name: "Stolen Dreams",
        id: 11,
        category: "cinematography",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie11.webp",
      },
      {
        name: "Fading Ember",
        id: 12,
        category: "cinematography",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie12.webp",
      },
      {
        name: "The Crimson Tide",
        id: 13,
        category: "cinematography",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie13.webp",
      },
      {
        name: "Lost in the Nebula",
        id: 14,
        category: "cinematography",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie14.webp",
      },
      {
        name: "The Silent Conspiracy",
        id: 15,
        category: "cinematography",
        img: "https://portfolio2023bucket.s3.amazonaws.com/movieAppImg/movie15.webp",
      },
    ]}}>
        <App />
      </MovieDataContext.Provider>
    </StrictMode>
    
  ,
)
