<template>
  <header id="header">
    <div class="header__port">
      <router-link to="/portfolio">portfolio</router-link>
    </div>
    <div class="header__logo">
      <router-link to="/">GarenChoi</router-link>
    </div>
    <nav class="header__menu">
      <ul>
        <li><router-link to="/About">About</router-link></li>
        <li><router-link to="/Reference">Reference</router-link></li>
        <li><router-link to="/Youtube">Youtube</router-link></li>
        <li><router-link to="/Movie">Movie</router-link></li>
        <li><router-link to="/Contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: var(--white);
  border-bottom: 1px solid var(--dark_border);
  background-color: var(--dark_bg);
  display: flex;
  align-items: center;
  font-family: "Rajdhani";
  z-index: 1000;
}
.header__port {
  flex: 1 1 40%;

  a {
    display: inline-block;
    padding: 1rem;
    text-transform: capitalize;
    position: relative;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--a_hover);
    }
    &::before {
      content: "";
      position: absolute;
      left: 1rem;
      bottom: 1rem;
      width: calc(100% - 2rem);
      height: 1px;
      background-color: var(--a_hover);
      transform: scaleX(0);
      transition: all 0.3s ease-in;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }
}
.header__logo {
  flex: 1 1 20%;
  text-align: center;

  a {
    display: inline-block;
    font-size: 1.6rem;
    padding: 1rem;
  }
}
.header__menu {
  flex: 1 1 40%;
  text-align: right;

  li {
    display: inline;

    a {
      display: inline-block;
      padding: 1rem;
      position: relative;
      transition: all 0.3s ease-in;

      &:hover {
        color: var(--a_hover);
      }
      &::before {
        content: "";
        position: absolute;
        left: 1rem;
        bottom: 1rem;
        width: calc(100% - 2rem);
        height: 1px;
        background-color: var(--a_hover);
        transform: scaleX(0);
        transition: all 0.3s ease-in;
      }
      &:hover::before {
        transform: scaleX(1);
      }
    }
  }
}

//라이트 버전
.light#header {
  background-color: var(--light_bg);
  border-color: var(--light_border);

  a {
    color: var(--black);

    &:hover {
      color: var(--a_hover);
    }
  }
}

//미디어 쿼리
@media (max-width: 1008px) {
  .header__port {
    display: none;
  }
  .header__menu {
    display: none;
  }
}

@media (max-width: 600px) {
  #header {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
}

// 헤더 애니메이션
// #header {
//   top: -100%;
// }
</style>
