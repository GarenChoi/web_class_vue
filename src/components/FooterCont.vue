<template>
  <footer id="footer" class="{props.color}">
    <div>
      <h4>email</h4>
      <a href="malito:jundan2010@gmail.com">jundan2010@gmail.com</a>
    </div>
    <div>
      <h4>Kakao</h4>
      <a href="#">GarenChoi</a>
    </div>
    <div>
      <h4>social</h4>
      <ul>
        <li><a href="/">Youtube</a></li>
        <li><a href="/">Instargram</a></li>
        <li><a href="/">Github</a></li>
        <li><a href="/">Reference</a></li>
        <li><a href="/">Tutorials</a></li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: var(--white);
  border-top: 1px solid var(--dark_border);
  background-color: var(--dark_bg);
  display: flex;
  align-items: center;
  font-family: "Rajdhani";
  z-index: 1000;

  div {
    text-align: center;
    padding: 1.45rem;
  }

  h4,
  ul {
    display: inline-block;
  }

  h4 {
    font-weight: 600;
    padding: 0 0.6em;
    text-transform: capitalize;
  }

  a {
    position: relative;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--a_hover);
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--a_hover);
      transform: scaleX(0);
      transition: all 0.3s ease-in;
    }
    &:hover::before {
      transform: scaleX(1);
    }
  }

  div:nth-child(1) {
    flex: 1 1 25%;
    border-right: 1px solid var(--dark_border);
  }
  div:nth-child(2) {
    flex: 1 1 20%;
    border-right: 1px solid var(--dark_border);
  }
  div:nth-child(3) {
    flex: 1 1 55%;

    li {
      display: inline;

      a {
        display: inline-block;
        padding: 0 0.6em;
        position: relative;
        transition: all 0.3s ease-in;

        &:hover {
          color: var(--a_hover);
        }
        &::before {
          content: "";
          position: absolute;
          left: 0.6em;
          bottom: 0;
          width: calc(100% - 1.2em);
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
}

//라이트 버전
.light#footer {
  background-color: var(--light_bg);
  border-color: var(--light_border);

  div {
    border-color: var(--light_border);
  }
  h4 {
    color: var(--black);
  }
  a {
    color: var(--black);

    &:hover {
      color: var(--a_hover);
    }
  }
}

//미디어 쿼리
@media (max-width: 1008px) {
  #footer {
    div:nth-child(2) {
      display: none;
    }
    div:nth-child(3) {
      display: none;
    }
    h4 {
      display: none;
    }
  }
}

// 푸터 애니메이션
// #footer {
//     bottom: -100%;
// }
</style>
