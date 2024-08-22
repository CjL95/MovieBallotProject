import { useState, useEffect, useContext } from 'react'
import { NomineeCard } from './components/nominee-card'
import { MovieDataContext } from './main'

function App() {
  const { movies } = useContext(MovieDataContext);
  return (
    <main className="container-fluid text-center">
      <section className="row pageHead my-3">
        <div className="col titleWrapper">
          <h1>Movie Ballot 2024!</h1>
          <span>
            Select each nominee you would like to vote for in each category and click "Submit Ballot"!
          </span>
        </div>
      </section>
      <section className="row musicCat my-3">
        <div className="col-12 sectionTitle">
          <h2 className="my-5">Best Original Score</h2>
        </div>
        {movies.map((movie) => {
          return movie.category === "music" && (
            <NomineeCard key={movie.id} nominee={movie.name} img={movie.img} id={movie.id} />
          )
        })}
      </section>
      <section className="row cinematographyCat my-3">
      <div className="col-12 sectionTitle">
        <h2 className="my-5">Best Cinematography</h2>
      </div>
        {movies.map((movie) => {
          return movie.category === "cinematography" && (
            <NomineeCard key={movie.id} nominee={movie.name} img={movie.img} id={movie.id} />
          )
        })}
      </section>
      <section className="row pictureCat my-3">
      <div className="col-12 sectionTitle">
        <h2 className="my-5">Best Picture Overall</h2>
      </div>
      {movies.map((movie) => {
          return movie.category === "picture" && (
            <NomineeCard key={movie.id} nominee={movie.name} img={movie.img} id={movie.id} />
          )
        })}
      </section>
      <section className="row submitBtnRow">
        <button className="btn btn-primary" id="submitBtn">Submit Ballot</button>
      </section>
      <section className="row d-none successModal">
        <button className="btn btn-danger" id="closeModal">X</button>
        <h2>Thank you for submitting your ballot!</h2>
      </section>
    </main>
  )
}

export default App
