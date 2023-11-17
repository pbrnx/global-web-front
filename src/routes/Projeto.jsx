import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import imgSolucao from "../assets/smart1.png";
import "../scss/Projeto.scss";

export default function Home() {
  document.title = "hAppVida Fitness | Home";

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <img src={imgSolucao} alt="Solução inteligente" />
            <div className='solution-title-container'>
              <h1 className="solution-title">hAppVida Fitness</h1> 
              
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis, urna quis vehicula interdum, nisi est sodales lorem, a porttitor libero.</p>
            </div>

            {/* Título 
            
             posicionado aqui */}
          </aside>
        </section>
        <section className="solution-container">
          <aside className="additional-info">
            {/* Aqui volta o Lorem Ipsum como conteúdo de exemplo */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dolor ligula, scelerisque in ligula a, posuere placerat odio. Nunc sit amet risus vel enim gravida gravida. Maecenas neque est, pulvinar non scelerisque vel, finibus in nulla...</p> <br />
          </aside>
        </section>
      </main>

      <h1 className='vantagens'>Por que utilizar?</h1>
      
        <table className='photos-section'>
          <tbody>
            <tr>
              <td><img src={imgSolucao} alt="Foto 1" /></td>
              <td><img src={imgSolucao} alt="Foto 2" /></td>
              <td><img src={imgSolucao} alt="Foto 3" /></td>
            </tr>
          </tbody>
        </table>
      
      {/* Fim da nova seção com a tabela de fotos */}

      <Footer />

     
    </>
  );
}
