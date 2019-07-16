<template>
  <div class="section event02">
    <div class="contents">
      <p class="section__title">Portfolio</p>
      <ul class="section__contents">
        <li v-for="item in 6" class="item"></li>
      </ul>
      <div class="section__texts">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
    </div>
  </div>
</template>


<style lang="scss">
.event02 {
  background-color: #1864ab;

  .section {
    &__contents {
      margin-top: 1em;
      display: flex;
      justify-content: space-around;
    }
  }

  .item {
    width: 70px;
    height: 70px;
    margin: 0.5em;
    background-color: #fff;
    opacity: 0.3;
    border-radius: 0.3em;
  }
}
</style>