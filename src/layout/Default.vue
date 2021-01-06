<template>
  <div>
    <main class="main">
      <div class="row">
        <div class="col-2"><Menu /></div>
        <div class="col-10">
          <Header />
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import Header from "@/components/Header";
export default {
  components: { Menu, Header }
};
</script>

<style></style>
