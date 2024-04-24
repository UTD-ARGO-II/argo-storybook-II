import React from "react";
import Header from '../header/Header';
import BookList from "../books/BookList";

export const screen: React.FC = () => {

    return (
      <article>
        <Header variant='global' title="BrilliantBooks" />
        <h1 style={{fontSize: '2rem', marginLeft: '1.5rem'}}>{"Top Picks"}</h1>
        <section className="Top Book Recs">
        <div className="movies">
					<BookList />
				</div>
        </section>
      </article>
    );
  };
  
