import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";


export default function Home() {
  document.title = "hAppVida Fitness | Home";

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
           
          </aside>
        </section>
        <section className="solution-container">
          <article className="solution-article">
            <h1>Título da solução</h1>
            <p>Texto sobre a solução com aproximadamente 30 palavras...</p>
          </article>
          <aside className="additional-info">
            

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla. 

Nulla malesuada vulputate lacus vel imperdiet. Nullam tristique diam quis enim consequat, convallis molestie dolor laoreet. Phasellus augue leo, gravida ut orci a, blandit tempor ante. 


Phasellus nec pharetra lorem. Sed a commodo lorem, in lacinia justo. Quisque commodo mi ac ipsum tristique congue. Vivamus sed ex vel sem aliquet commodo. Pellentesque porttitor nunc posuere tellus volutpat, at mattis dui blandit. Integer accumsan massa libero. Pellentesque a aliquet nulla. Etiam faucibus neque dolor, in laoreet massa pretium vitae.
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
