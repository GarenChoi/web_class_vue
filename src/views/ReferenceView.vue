<template>
  <HeaderCont />
  <main id="main">
    <TitleCont name1="REFERENCE" name2="BOOK" />
    <div class="refer__cont">
      <div class="container">
        <div class="refer__inner">
          <h2>CSS</h2>
          <ul class="refer__list">
            <li v-for="refer in ports" :key="refer.id">
              <a href="/">
                <span class="num">{{ refer.id }}</span>
                <span class="title">{{ refer.title }}</span>
                <span class="desc">{{ refer.desc }}</span>
                <span class="use">{{ refer.use }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
        "https://garenchoi.github.io/web_class_react/src/assets/json/reference.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (ports.value = data.data.refer))
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
.refer__inner {
  font-family: var(--subKor_font);
  padding-bottom: 20vmax;
  // opacity: 0;

  h2 {
    color: var(--white);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .linkList {
    width: 100%;
    text-align: right;

    a {
      background: var(--dark_bg);
      color: var(--light_bg);
      padding: 3px 15px;
    }
  }
  // table {
  //     border-collapse: collapse;
  //     font-family: var(--subKor_font);
  //     font-size: 16px;
  //     font-weight: 300;
  // }
  // tr {
  //     color: var(--white);
  //     border-top: 1px solid var(--white);

  //     td {
  //         padding: 2vw 0;
  //     }
  // }
  // tr:last-child {
  //     border-bottom: 2px solid var(--white);
  // }
}

.refer__list {
  border-top: 2px solid var(--light_bg);
  border-bottom: 1px solid var(--light_bg);
  a {
    display: block;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--light_bg);
    padding: 1.3rem 0;
    font-family: var(--subKor_font);

    &:hover {
      background: var(--light_bg);
      color: var(--black);
    }

    span:nth-child(1) {
      width: 6%;
      text-align: center;
    }
    span:nth-child(2) {
      width: 20%;
    }
    span:nth-child(3) {
      width: 64%;
    }
    span:nth-child(4) {
      width: 10%;
      text-align: center;
    }
  }
}

.refer__table {
  padding-top: 300px;
  color: var(--white);
  font-family: var(--subKor_font);

  h3 {
    font-size: 3rem;
  }
  p {
    background-color: var(--light_bg);
    color: var(--black);
    padding: 1.4em;
  }

  .table {
    color: var(--white);
    font-family: var(--subKor_font);
    border: 1px solid var(--light_bg);
    margin-top: 0.5em;
  }

  th,
  td {
    font-weight: normal;
    padding: 1em;
    border-bottom: 1px solid var(--light_bg);
    border-left: 1px solid var(--light_bg);
  }
  h4 {
    color: var(--white);
    font-size: 24px;
    margin-top: 5vh;
    margin-bottom: 4px;
  }
  li {
    color: var(--white);
    list-style: inside;
    line-height: 2em;
    a {
      color: var(--white);
    }
  }
}

.refer__cont.light {
  background-color: var(--light_bg);

  h2 {
    color: var(--black);
  }

  .refer__list {
    border-top: 2px solid var(--dark_bg);
    border-bottom: 1px solid var(--dark_bg);
    a {
      color: var(--black);
      border-bottom: 1px solid var(--dark_bg);

      &:hover {
        background: var(--dark_bg);
        color: var(--white);
      }
    }
  }

  .refer__table {
    p {
      background: var(--dark_bg);
      color: var(--light_bg);
    }
    .table {
      border: 1px solid var(--dark_bg);
    }
    th,
    td {
      color: var(--black);
      border-bottom: 1px solid var(--dark_bg);
      border-left: 1px solid var(--dark_bg);
    }
    h4 {
      color: var(--black);
    }
    li {
      color: var(--black);
      a {
        color: var(--black);
      }
    }
  }

  h3 {
    color: var(--black);
  }

  tr {
    border-color: var(--black);
  }
  td {
    color: var(--black);
  }
}
</style>
