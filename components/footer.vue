<template>
  <footer>
    <div class="container">
      <div class="row">
        <span class="col-sm-3 brand">DKROLAK.SHOP</span>
        <div class="col-sm-2 col-md-6 copyright">
          <span>© 2023  DKrolak BLNRY frontend challenge. All rights reseved</span> 
        </div>
        <div class="col-sm-7 col-md-3 socials">
          <b-icon-github @click="openInNewTab('https://github.com/dawwidd')"></b-icon-github>
          <b-icon-linkedin @click="openInNewTab('https://linkedin.com/in/dawid-krolak-dev/')"></b-icon-linkedin>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    openInNewTab(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  height: 72px;
  background-color: black;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;

  .brand {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    padding: 0 12px;
  }

  .copyright {
    display: flex;
    font-size: 14px;
    justify-content: center;
    opacity: 50%;

    span {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }

  .socials {
    display: flex;
    justify-content: flex-end;
    font-size: 22px;

    > * {
      margin-left: 12px;
    }

    &:hover {
      cursor: pointer;
    }
  }
}
</style>