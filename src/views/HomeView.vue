<template>
  <div class="homeView">
    <Hero
      title="Início"
      description="Meu site pessoal de arranjos gospel e cristãos"
    />

    <section class="homeContent">
      <h2>Arranjos gospel e cristãos com identidade</h2>
      <p>
        Este é o meu site pessoal como arranjador. Aqui eu apresento meus arranjos, com foco em
        música gospel e cristã, desenvolvidos para igrejas, ministérios de louvor, grupos vocais e
        músicos que buscam materiais bem estruturados.
      </p>
      <p>
        A proposta é oferecer um catálogo com identidade clara: arranjos que respeitam a canção
        original, mas também valorizam interpretação, dinâmica e intenção. Neste espaço, você
        encontra arranjos disponíveis para compra, preparados com cuidado musical e aplicação real.
      </p>

      <div class="homeHighlights">
        <article class="highlightCard">
          <h3>Estilo pessoal</h3>
          <p>
            Cada arranjo carrega minhas escolhas harmônicas, melódicas e rítmicas para servir bem
            à proposta de cada música.
          </p>
        </article>

        <article class="highlightCard">
          <h3>Foco no louvor</h3>
          <p>
            Repertório voltado à música gospel e cristã, pensado para momentos de culto, eventos e
            apresentações.
          </p>
        </article>

        <article class="highlightCard">
          <h3>Arranjos para compra</h3>
          <p>
            Os materiais disponíveis aqui podem ser adquiridos por quem deseja tocar com qualidade,
            praticidade e segurança.
          </p>
        </article>
      </div>

      <p class="homeClosing">
        Explore o catálogo, conheça meu trabalho e escolha os arranjos que melhor atendem à sua
        realidade musical.
      </p>
    </section>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'HomeView',
  components: {
    Hero
  }
};
</script>

<style scoped>
.homeContent {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 20px 48px;
  text-align: justify;

  h2 {
    margin: 0 0 16px;
    font-size: clamp(1.5rem, 2.5vw, 2rem);
  }

  p {
    margin: 0 0 14px;
    line-height: 1.7;
  }

  .homeHighlights {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 24px 0;

    .highlightCard {
      padding: 18px;
      border: 1px solid var(--text-soft);
      border-radius: 12px;
      background: color-mix(in srgb, var(--background) 92%, var(--text) 8%);

      h3 {
        margin: 0 0 8px;
        font-size: 1.1rem;
      }

      p {
        margin: 0;
      }
    }
  }

  .homeClosing {
    margin-top: 10px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    .homeHighlights {
      grid-template-columns: 1fr;
    }
  }
}
</style>
