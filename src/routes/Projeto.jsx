import React from 'react';
import Footer from "../components/footer/Footer.jsx";
import { useState, useEffect } from 'react';
import "../scss/Projeto.scss";


export default function Home() {
  document.title = "hAppVida Fitness | Home";
  const [hoveredImage, setHoveredImage] = useState(null);
  
  
  return (
    <>
      <main className="main-content">
        <section className="carousel-container">
          <aside className="carousel">
            <img src="/assets/imgtexto.png" alt="Solução inteligente" />
            <div className='solution-title-container'>
              <h1 className="solution-title">hAppVida Fitness</h1> 
              
            <p>Sua solução para envelhecimento saudável, controle de peso e nutrição personalizada. Saúde e bem-estar ao seu alcance.</p>
            </div>

            {/* Título 
            
             posicionado aqui */}
          </aside>
        </section>
        <section className="solution-container">
          <aside className="additional-info">
         <p>Envelhecer com saúde não é apenas uma meta, é uma necessidade. Neste cenário, o hAppVida Fitness surge como uma ferramenta essencial, projetada para apoiar e enriquecer a jornada de envelhecimento saudável. Com o avançar da idade, nosso corpo e mente enfrentam desafios únicos, e a adaptação ao estilo de vida é crucial para manter a saúde e a vitalidade. O hAppVida Fitness oferece uma abordagem personalizada, com recursos que abrangem desde o monitoramento da atividade física até conselhos de bem-estar mental. Este aplicativo não é apenas um rastreador de saúde; é um companheiro dedicado, oferecendo orientação, motivação e suporte para que cada usuário possa desfrutar de uma vida plena e saudável.</p><br />
         <p>Manter um peso saudável é vital para a saúde geral, especialmente à medida que envelhecemos. O hAppVida Fitness atende a essa necessidade com um conjunto robusto de ferramentas projetadas para ajudar na gestão do peso. Com recursos avançados, como rastreadores de atividade, análises detalhadas de progresso e planos de exercícios personalizados, este aplicativo oferece uma abordagem holística para controle de peso. Ele considera fatores como idade, histórico de saúde e objetivos pessoais, proporcionando um caminho claro e acessível para alcançar e manter um peso saudável. Além disso, o hAppVida Fitness incentiva hábitos saudáveis e sustentáveis, promovendo uma mudança de estilo de vida que vai além das métricas tradicionais de saúde.</p><br/>
         <p>Ajustar a dieta é outro aspecto crucial para manter a saúde com o passar dos anos. O hAppVida Fitness se destaca ao fornecer orientações nutricionais personalizadas, adaptadas às necessidades individuais de cada usuário. Entendemos que cada pessoa é única, e suas necessidades nutricionais variam. Por isso, o aplicativo oferece recomendações detalhadas de dieta, planos de refeições e dicas de alimentação saudável, tudo baseado em preferências pessoais, intolerâncias alimentares e objetivos de saúde. Além disso, o hAppVida Fitness inclui uma vasta biblioteca de receitas saudáveis e deliciosas, ajudando os usuários a fazer escolhas alimentares conscientes e saborosas que contribuem para a prevenção de doenças e um envelhecimento saudável.

</p>
            
          </aside>
        </section>
      </main>
      <div className='vantagens'>
        <h1>Por que utilizar?</h1>
        <p><b>Envelheça com saúde</b>, <b>controle seu peso </b>e <b>ajuste sua dieta</b>, tudo em apenas um lugar! Consulte nossos preços e escolha o plano que melhor atenda às suas necessidades.</p>
      </div>

    <div className='photos-section'>
      <div className="img-container">
          <img className='imgP1'
              src={hoveredImage === 1 ? "/assets/vantagem2.png" : "/assets/vantagem1.png"} 
              alt="Vantagem" 
              onMouseEnter={() => setHoveredImage(1)} 
              onMouseLeave={() => setHoveredImage(null)}
          />
         
      </div>
    
    
    <div className="img-container">
        <img className='imgP1'
            
            src={hoveredImage === 2 ? "/assets/vantagem4.png" : "/assets/vantagem3.png"} 
            alt="Vantagem" 
            onMouseEnter={() => setHoveredImage(2)} 
            onMouseLeave={() => setHoveredImage(null)}
        />
        
        
    </div>
   
    <div className="img-container">
        <img  className='imgP1'
            src={hoveredImage === 3 ? "/assets/vantagem6.png" : "/assets/vantagem5.png"} 
            alt="Vantagem" 
            onMouseEnter={() => setHoveredImage(3)} 
            onMouseLeave={() => setHoveredImage(null)}
        />
        
    </div>

</div>
      <Footer />
    </>
  );
}
