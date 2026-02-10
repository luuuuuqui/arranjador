<template>
  <div class="aboutView">
    <Hero
      title="Sobre"
      description="Conheca mais sobre meu trabalho como arranjador e a proposta deste catalogo."
      :image="sheetMusicImage"
    />

    <section class="aboutContent">
      <h2>Arranjos com intencao musical e congregacional</h2>
      <p>
        Sou arranjador e desenvolvo materiais voltados para musica gospel e crista, com foco em
        aplicacao real em igrejas, ministerios de louvor, grupos vocais e musicos independentes.
      </p>
      <p>
        Meu objetivo e criar arranjos claros, tocaveis e musicalmente ricos, preservando a
        identidade da cancao e oferecendo caminhos para interpretacao com dinamica e expressao.
      </p>

      <div class="aboutHighlights">
        <article class="highlightCard">
          <h3>Visao artistica</h3>
          <p>
            Cada arranjo e construido com cuidado harmonico, ritmico e melodico para comunicar a
            mensagem da musica com coerencia.
          </p>
        </article>

        <article class="highlightCard">
          <h3>Aplicacao pratica</h3>
          <p>
            Os materiais sao pensados para ensaio e execucao em contextos reais, facilitando a
            preparacao de bandas, grupos e equipes.
          </p>
        </article>

        <article class="highlightCard">
          <h3>Curadoria do catalogo</h3>
          <p>
            O catalogo prioriza arranjos com proposta clara e qualidade de escrita, para quem
            deseja tocar com seguranca e identidade.
          </p>
        </article>
      </div>

      <p class="aboutClosing">
        Se quiser conhecer os materiais disponiveis, acesse a pagina de arranjos. Para duvidas e
        solicitacoes, use a pagina de contato.
      </p>

      <div class="aboutActions">
        <router-link to="/arranjos" class="appButtonLink">Ver arranjos</router-link>
        <router-link to="/contato" class="appButtonLink">Entrar em contato</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import sheetMusicImage from "@/assets/img/sheetmusic.jpg";

export default {
  name: "AboutView",
  components: {
    Hero
  },
  data() {
    return {
      sheetMusicImage
    };
  }
};
</script>

<style scoped>
.aboutContent {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 20px 56px;
  text-align: justify;

  h2 {
    margin: 0 0 16px;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p {
    margin: 0 0 14px;
    line-height: 1.7;
  }

  .aboutHighlights {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 24px 0;

    .highlightCard {
      padding: 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      background: color-mix(in srgb, var(--background) 92%, var(--text) 8%);
      text-align: left;

      h3 {
        margin: 0 0 8px;
        font-size: 1.1rem;
      }

      p {
        margin: 0;
      }
    }
  }

  .aboutClosing {
    margin-top: 10px;
    font-weight: 500;
  }

  .aboutActions {
    display: flex;
    gap: 12px;
    margin-top: 18px;
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    .aboutHighlights {
      grid-template-columns: 1fr;
    }
  }
}
</style>
