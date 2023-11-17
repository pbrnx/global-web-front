import React from 'react';
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import { useState } from 'react';
import "../scss/Projeto.scss";

export default function Home() {
  document.title = "hAppVida Fitness | Home";


  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
      <Header />
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <img src="/assets/imgtexto.png" alt="Solução inteligente" />
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
            <td className="image-container">
        <img 
          className="imgP1"
          src={hoveredImage === 1 ? "/assets/vantagem2.png" : "/assets/vantagem1.png"} 
          alt="Vantagem" 
          onMouseEnter={() => setHoveredImage(1)} 
          onMouseLeave={() => setHoveredImage(null)}
        />
        <h1>Envelheça com saúde</h1>
      </td>
            <td>
              <img className="table-img"
                src={hoveredImage === 2 ? "/assets/vantagem4.png" : "/assets/vantagem3.png"} 
                alt="Vantagem" 
                onMouseEnter={() => setHoveredImage(2)} 
                onMouseLeave={() => setHoveredImage(null)}
              />
              <h1>Monitore seu peso</h1>
            </td>

            <td>
              <img 
                src={hoveredImage === 3 ? "/assets/vantagem6.png" : "/assets/vantagem5.png"} 
                alt="Vantagem" 
                onMouseEnter={() => setHoveredImage(3)} 
                onMouseLeave={() => setHoveredImage(null)}
              />
              <h1>Ajuste sua Dieta</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </>
  );
}
