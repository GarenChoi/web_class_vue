<template>
  <HeaderCont />
  <main id="main">
    <TitleCont name1="MOVIE" name2="REFERENCE" />
    <div class="container">
      <div class="movie__inner">
        <div class="topMovie__list">
          <ul>
            <li v-for="movie in topmovies" :key="movie.id">
              <a :href="`https://www.themoviedb.org/movie/${movie.id}`">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  :alt="`${movie.title}이미지`"
                />
                <p>{{ movie.title }}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="movie__search">
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
        <div class="movie__list">
          <ul>
            <li v-for="movie in movies" :key="movie.id">
              <a :href="`https://www.themoviedb.org/movie/${movie.id}`">
                <img
                  :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
                  :alt="`${movie.title}이미지`"
                />
                <p>{{ movie.title }}</p>
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
    const movies = ref([]);
    const search = ref("war");
    const topmovies = ref([]);

    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c2ebf20cc9d5f844403661cd7e645db8&query=${search.value}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          search.value = "";
        })
        .catch((error) => console.log("error", error));

      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=c2ebf20cc9d5f844403661cd7e645db8&language=ko-KR`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          topmovies.value = data.results;
          console.log(topmovies);
        })
        .catch((error) => console.log("error", error));
    };

    SearchMovies();

    return {
      movies,
      search,
      topmovies,
      SearchMovies,
    };
  },
};
</script>
<style lang="scss" scoped>
.topMovie__list {
  ul {
    display: flex;

    white-space: nowrap;

    li {
      flex: 1 1 23%;
      margin: 1%;
      img {
        width: 100%;
      }
    }
  }
}
.movie__list {
  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      flex: 1 1 23%;
      margin: 1%;

      img {
        width: 100%;
        height: 95%;
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

.movie__search {
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
  .movie__list ul li {
    flex: 1 1 42%;
  }
}
</style>
