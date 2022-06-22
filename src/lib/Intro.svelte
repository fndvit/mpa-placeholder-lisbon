<script>
    import landingImage from '../assets/img/landingImage.jpg';
    import unep from '../assets/logos/unep-white.svg';
    import mpath from '../assets/logos/mpath.svg';

    export let header;
    let width;

    const imgSize = () => width < 480
      ? '-s'
      : width < 768
      ? '-m'
      : width < 1280
      ? '-l'
      : '-xl'

</script>

<svelte:window bind:innerWidth={width} />
<div class="landing-page" style="background-image: url({landingImage})">
  <img src={unep}  class="unep-logo" alt="Logo for the United Nations Environment Programme" />
  <div class="splash" >
    <div class="col-1">
        <img src={mpath} class="logo-mpath" alt="Logo for MPAth (Marine Protected Areas Toolkit Hub)" />
        <h2>{header}</h2>
    </div>
  </div>
</div>

<style>
  .landing-page {
    background-size: cover;
    background-position: bottom;
    margin: 0;
    padding: 0;
    height: 80vh;
  }

  .unep-logo {
    margin: 1rem 10%;
    height: 2.5rem;
    width: auto;
  }

  .logo-mpath {
    height: 8rem;
  }

  .splash {
    max-width:80%;
    margin: 0 auto;
    padding: 0;
    padding-top: 10vh;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.8rem;
    font-weight: 200;
    color: #fff;
    width:75%;
  }

  @media only screen and (min-width: 768px) {

    .landing-page {
        height: 80vh;
    }

    .logo-mpath {
        height: 8rem;
    }
    .unep-logo {
        height: 4rem;
        margin: 1rem;
    }
    .splash {
        width: 100%;
        display: grid;
        grid-template-columns: 0fr 12fr 0fr;
        grid-column-gap: 1.25rem;
    }
    .col-1 {
      grid-column: 2;
      align-self: start;
    }

  }

  @media only screen and (min-width: 1280px) {

    .logo-mpath {
        height: 13rem;
    }
    .splash {
        max-width: 1280px;
        grid-template-columns: 1fr 8fr 3fr;
    }
    h2 {
        font-size: 1.5rem;
        line-height: 2.25rem;
        font-weight: 100;
    }
  }

</style>
