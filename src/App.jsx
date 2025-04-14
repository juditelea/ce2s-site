import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"; // caso queira mover o CSS pra esse arquivo

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <h1>Bem-vindo à CE2S</h1>
        <p>
          Transformando estratégias em resultados com foco em pessoas e
          performance.
        </p>

        <section className="pilares">
          <h2>Nossos 3 Pilares</h2>

          <div className="pilar">
            <h3>1. Competitividade</h3>
            <p>
              Pessoas e empresas devem ser -- COMPETITIVAS -- em relação aos
              seus objetivos.
            </p>
          </div>

          <div className="pilar">
            <h3>2. Equilibrio</h3>
            <p>
              Pessoas e Empresas devem ser -- EQUILIBRADAS -- em relação a
              recursos e partes envolvidas, abordagens, restrições, etc., e
            </p>
          </div>

          <div className="pilar">
            <h3>3. Sustentados</h3>
            <p>
              Competitividade e Equilíbrio devem ser -- SUSTENTADOS -- para o
              futuro.
            </p>
          </div>
          <div className="servico">
            <p>
              Através da prestação dos <a href="servicos">Serviços</a>{" "}
              apresentados a seguir por nossa equipe e nossos parceiros.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
