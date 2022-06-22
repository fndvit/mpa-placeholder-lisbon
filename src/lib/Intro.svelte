<script>
    import landingImage from '../assets/landingImage.jpg';
    import unep from '../assets/logos/unep.svg';
    import mpath from '../assets/logos/mpath.svg';

    export let header;
</script>

<div class="landing-page" style="background-image: url({landingImage})">

  <img src={unep}  class="unep-logo" alt="Svelte Logo" />
  <div class="splash" >
    <div class="col-1">
        <img src={mpath} class="logo-mpath" alt="Svelte Logo" />
        <h3>{header}</h3>
    </div>
    
  </div>
</div>

<style>
  .landing-page {
    height: auto;
    margin: -8px;
    background-size: cover;
    background-position: bottom;
  }

  .unep-logo {
    position: absolute;
    margin: 1rem;

    height: 2.5rem;
    width: auto;
  }

  .logo-mpath {
    height: 4rem;
  }

  .splash {

    max-width:80%;
    margin: 0 auto;
    padding: 6rem 0rem 3rem 0;
    width: auto;
    color: white;
  }

  h3 {
    margin-top: 20px;
    font-size: 16px;
  }

  @media only screen and (min-width: 450px) {
    .logo-mpath {
        height: 5rem;
    }

  }

  @media only screen and (min-width: 768px) {

    .landing-page {
        height: 575px;
    }
    .logo-mpath {
        height: 8rem;
    }
    .unep-logo {
        height: 4rem;
    }
    .splash {
        display: grid;
        grid-template-columns: 2fr 3fr;
        padding-left: 2.5rem;
        padding-top: 12rem;
    }
    h3 {
        font-size: 20px;
    }

  }

  @media only screen and (min-width: 1280px) {

    .landing-page {
        height: 793px;
    }

    .logo-mpath {
        height: 13rem;
    }
    .splash {
        max-width: 1280px;
        grid-template-columns: 1fr 473px 7fr;
        padding-top: 14rem;
        
    }
    .col-1 {
      grid-column: 2;
      align-self: start;
    }
    h3 {
        font-size: 24px;
    }
  }

</style>
