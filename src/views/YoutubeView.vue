<template>
  <HeaderCont />
  <main id="main">
    <TitleCont name1="YOUTUBE" name2="REFERENCE" />
    <section class="youtube__cont">
      <div class="container">
        <div class="youtube__inner">
          <div class="youtube__search">
            <form @submit.prevent="SearchMovies()">
              <div>
                <label for="search" class="sr-only">검색하기</label>
                <input
                  type="search"
                  id="search"
                  placeholder="검색하기"
                  v-model="search"
                />
                <button type="submit" value="search">검색</button>
              </div>
            </form>
          </div>
          <div class="youtube__list">
            <ul>
              <li v-for="movie in movies" :key="movie.id.videoId">
                <a
                  :href="`https://www.youtube.com/watch?v=${movie.id.videoId}`"
                >
                  <img
                    :src="movie.snippet.thumbnails.medium.url"
                    :alt="movie.snippet.title"
                  />
                  <p>{{ movie.snippet.title }}</p>
                </a>
              </li>
            </ul>
          </div>
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
    const movies = ref("");
    const search = ref("트와이스");
    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${search.value}type=vedio&key=AIzaSyAyYjouVD2KsFe1qjxWlHEA1P3kW-4AnuA&type=video`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.items;
          search.value = "";
        })
        .catch((error) => console.log("error", error));
    };
    SearchMovies();
    // setTimeout(() => {
    //   SearchMovies();
    // }, 2000);

    return {
      movies,
      search,
      SearchMovies,
    };
  },
};
</script>

<style lang="scss" scoped>
.youtube__list {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 1 23%;
      margin: 1%;

      img {
        width: 100%;
        border: 1px solid var(--light_bg);
        border-radius: 0.4em;
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: var(--white);
        font-family: var(--subKor_font);
        padding-top: 7px;
      }
    }
  }
}

.youtube__search {
  position: relative;
  h2 {
    color: var(--white);
    font-size: 40px;
    font-family: var(--subKor__font);
    text-indent: -9999px;
    width: 0;
    height: 0;
  }
  input {
    border: 1px solid var(--light_border);
    width: 98%;
    background: var(--black);
    border-radius: 50px;
    padding: 1rem 3rem 1rem 2rem;
    color: var(--light_bg);
    font-family: var(--subKor_font);
    margin: 0 1%;
    margin-bottom: 1%;
  }
  button {
    position: absolute;
    right: 22px;
    top: 9px;
    background: transparent;
    color: var(--black);
    background: var(--white);
    font-family: var(--subKor_font);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 12px;
    transition: opacity 0.3s ease;

    &:active {
      opacity: 0.7;
    }
  }
}

@media (max-width: 800px) {
  .youtube__list ul li {
    flex: 1 1 42%;
  }
}
</style>
