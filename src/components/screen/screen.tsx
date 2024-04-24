import React from "react";
import Header from '../header/Header';
import BookList from "../books/BookList";

export const screen: React.FC = () => {

    return (
      <article>
        <Header variant='global' title="BrilliantBoks" />
        <h1 style={{fontSize: '20rem', marginLeft: '10rem'}}>{"Top Picks"}</h1>
        <section className="Top Book Recs">
        <div className="movies">
					<BookList />
				</div>
        </section>
      </article>
    );
  };
  
