<template>
  <HeaderCont />
  <main id="main">
    <section className="main__cont">
      <div className="main__inner">
        <div v-for="title in titles" v-bind:key="title.text">
          {{ title.text }}
        </div>
      </div>
    </section>
  </main>
  <FooterCont />
</template>
<script>
import HeaderCont from "@/components/HeaderCont.vue";
import FooterCont from "@/components/FooterCont.vue";

export default {
  components: {
    HeaderCont,
    FooterCont,
  },

  data: function () {
    return {
      titles: [
        { text: "WE PROVIDE" },
        { text: "VISUAL CODING" },
        { text: "SOLUTIONS" },
        { text: "FOR YOU WEBS" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.main__cont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: var(--dark_bg);

  .main__inner {
    font-size: 10vw;
    line-height: 0.85;
    font-family: "Saol";
    color: var(--white);
    text-transform: uppercase;
  }
}
</style>
