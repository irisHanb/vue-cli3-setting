<template>
  <div class="section home">
    <div class="section__contents">
      <p class="section__title">Be Your Self</p>
      <div class="section__texts">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, beatae! Sunt nemo provident minima aliquam! Exercitationem perspiciatis quia recusandae mollitia reiciendis sit autem nemo possimus, aut maxime velit totam facilis.
        Optio, aliquid. Quas mollitia fuga soluta iusto natus minus voluptatum, laborum perspiciatis modi nulla! Quia, suscipit! Illo maiores atque fuga. Veniam, quo cum aliquid officia nostrum repellendus natus pariatur porro?
        Voluptatum, nemo facere! Consectetur, voluptatibus nostrum. Rem eaque libero pariatur natus nam quod, impedit deserunt fugit aspernatur dolores laboriosam magnam tenetur suscipit, voluptatem eligendi voluptatibus rerum nemo voluptas perferendis dignissimos.
      </div>
    </div>
  </div>
</template>
<script>
import metaInfo from "../js/metaInfo";
export default {
  metaInfo
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  outline: 1px solid blue;
  background-color: #c2255c;
  background-size: cover;

  .section {
    &__texts {
      opacity: 0;
    }
  }
}
</style>

