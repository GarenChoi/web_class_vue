<template>
  <HeaderCont />
  <main id="main">
    <section className="contact__cont">
      <div className="container">
        <div className="contact__inner">
          <h2>
            <span>You are</span><span>already</span><span>doing well.</span>
          </h2>
          <div className="contact__desc">
            <p>
              같은 목표를 위해 달려갈 웹 퍼블리셔 &amp; 프론트 앤드 개발자를
              모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.
            </p>
          </div>
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
};
</script>
<style lang="scss" scoped>
.contact__cont {
  height: 100vh;

  .contact__inner {
    font-family: var(--main_font);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      color: var(--white);
      text-transform: uppercase;
      font-size: 144px;
      line-height: 0.9;

      span {
        display: block;
        &:nth-child(2) {
          margin-left: 8.5vw;
        }
        &:nth-child(3) {
          margin-left: 17vw;
        }
      }
    }

    .contact__desc {
      margin-top: 7vh;
      display: flex;
      justify-content: end;

      p {
        color: var(--white);
        font-family: var(--kor_font);
        font-size: 18px;
        font-weight: 400;
        line-height: 1.8;
        width: 400px;
      }
    }
  }
}

.contact__cont.light {
}

@media (max-width: 1100px) {
  .contact__cont {
    .contact__inner {
      h2 {
        font-size: 95px;
        span:nth-child(2),
        span:nth-child(3) {
          margin-left: auto;
        }
      }
      .contact__desc {
        p {
          width: 100%;
          font-size: 16px;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .contact__cont {
    .contact__inner {
      h2 {
        font-size: 60px;
        text-align: center;
      }
      .contact__desc {
        justify-content: center;
        p {
          font-size: 12px;
          width: 70%;
        }
      }
    }
  }
}
</style>
