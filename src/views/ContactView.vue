<template>
  <div class="contactView">
    <Hero
      title="Contato"
      description="Entre em contato para tirar duvidas, solicitar informacoes e alinhar seu projeto musical."
      :image="contactImage"
    />

    <section class="contactContent">
      <h2>Vamos conversar sobre seu arranjo</h2>
      <p>
        Se voce precisa de orientacao sobre um material do catalogo ou quer falar sobre uma
        necessidade especifica para sua equipe, use um dos canais abaixo.
      </p>
      <p>
        O contato por e-mail e ideal para pedidos mais detalhados. Para conversas rapidas,
        telefone e WhatsApp funcionam melhor.
      </p>

      <div class="contactGrid">
        <article class="contactCard">
          <h3>E-mail</h3>
          <p>Envie sua mensagem com contexto do projeto e objetivo musical.</p>
          <a href="mailto:contatokwwala@gmail.com">contatokwwala@gmail.com</a>
        </article>

        <article class="contactCard">
          <h3>Telefone / WhatsApp</h3>
          <p>Canal direto para alinhar disponibilidade e duvidas rapidas.</p>
          <a href="tel:+5584999999999">+55 84 99999-9999</a>
        </article>

        <article class="contactCard">
          <h3>Localizacao</h3>
          <p>Atendimento remoto com base em Natal, Rio Grande do Norte.</p>
          <span>Natal, RN - Brasil</span>
        </article>
      </div>

      <div class="contactActions">
        <router-link to="/arranjos" class="contactLink">Ver arranjos</router-link>
        <router-link to="/sobre" class="contactLink">Conhecer mais</router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import contactImage from "@/assets/img/contact.jpg";

export default {
  name: "ContactView",
  components: {
    Hero
  },
  data() {
    return {
      contactImage
    };
  }
};
</script>

<style scoped>
.contactContent {
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

  .contactGrid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
    margin: 24px 0;

    .contactCard {
      padding: 18px;
      border: 1px solid var(--border-subtle);
      border-radius: 12px;
      background: color-mix(in srgb, var(--background) 92%, var(--text) 8%);
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 8px;

      h3 {
        margin: 0;
        font-size: 1.1rem;
      }

      p {
        margin: 0;
      }

      a,
      span {
        font-weight: 600;
        color: var(--primary);
        text-decoration: none;
        overflow-wrap: anywhere;
      }

      a:hover {
        color: var(--accent);
        text-decoration: underline;
      }
    }
  }

  .contactActions {
    display: flex;
    gap: 12px;
    margin-top: 18px;
    flex-wrap: wrap;

    .contactLink {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 10px 14px;
      border-radius: 10px;
      border: 1px solid var(--border-subtle);
      color: var(--text);
      text-decoration: none;
      background: color-mix(in srgb, var(--background) 88%, var(--text) 12%);
    }

    .contactLink:hover {
      /* border-color: var(--background); */
      background-color: var(--accent);
      color: var(--background);
      transform: translateY(-1px);
    }
  }

  @media (max-width: 900px) {
    .contactGrid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
