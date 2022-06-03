<template>
  <HeaderCont />
  <main id="main">
    <TitleCont name1="PORTFOLIO" name2="SITE" />
    <section class="port__cont">
      <div class="container">
        <div class="port__inner">
          <article class="port__item" v-for="port in ports" :key="port.id">
            <figure class="img">
              <a :href="port.link" target="_blank"
                ><img :src="port.image" :alt="port.title"
              /></a>
            </figure>
            <div class="text">
              <h3>{{ port.title }}</h3>
              <p>{{ port.category }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    <ContactCont />
  </main>
  <FooterCont />
</template>
<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
    TitleCont,
    ContactCont,
  },

  setup() {
    const ports = ref([]);

    const Portfolios = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        "https://webstoryboy.github.io/dothome1/portfolio.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (ports.value = data.data.ports))
        .catch((error) => console.log("error", error));
    };

    setTimeout(() => {
      Portfolios();
    }, 2000);

    return {
      ports,
      Portfolios,
    };
  },
};
</script>
<style lang="scss" scoped>
//port__cont
.port__cont {
  padding-bottom: 20vh;
}
.port__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.port__item {
  flex: 1 1 30%;
  margin: 1%;

  .img {
  }
  .text {
    padding: 1.4rem;
    background-color: #d0d0d0;
    color: var(--white);

    h3 {
      font-family: var(--main_font);
      font-size: 2.6rem;
      line-height: 1;
      padding-top: 0.2em;
      text-transform: uppercase;
    }
    p {
      font-family: var(--sub_font);
    }
  }
}
// .port__item:nth-last-child(2),
// .port__item:last-child {
//     flex: 0%;
// }
</style>
