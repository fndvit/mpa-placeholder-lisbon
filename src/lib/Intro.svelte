<script>
    import unep from '../assets/logos/unep-white.svg';
    import mpath from '../assets/logos/mpath.svg';
    import fishing_xl from '../assets/img/fishing-xl.jpg';
    import fishing_l from '../assets/img/fishing-2-l.jpg';
    import fishing_m from '../assets/img/fishing-1-m.jpg';
    import fishing_s from '../assets/img/fishing-3-s.jpg';
    import turtle_xl from '../assets/img/turtle-xl.jpg';
    import turtle_l from '../assets/img/turtle-2-l.jpg';
    import turtle_m from '../assets/img/turtle-1-m.jpg';
    import turtle_s from '../assets/img/turtle-3-s.jpg';
    import coral_xl from '../assets/img/coral-xl.jpg';
    import coral_l from '../assets/img/coral-2-l.jpg';
    import coral_m from '../assets/img/coral-1-m.jpg';
    import coral_s from '../assets/img/coral-3-s.jpg';

    export let header;
    let width;

    const src = [
        {
            'xl': fishing_xl,
            'l': fishing_l,
            'm': fishing_m,
            's': fishing_s,
        },
        {
            'xl': turtle_xl,
            'l': turtle_l,
            'm': turtle_m,
            's': turtle_s,
        },
        {
            'xl': coral_xl,
            'l': coral_l,
            'm': coral_m,
            's': coral_s,
        },
    ]

    const rand = Math.floor(Math.random() * src.length);

    $: size = width < 480
      ? 's'
      : width < 768
      ? 'm'
      : width < 1280
      ? 'l'
      : 'xl'

</script>

<svelte:window bind:innerWidth={width} />
<div class="landing-page" style="background-image: url({src[rand][size]})">
  <img src={unep}  class="unep-logo" alt="Logo for the United Nations Environment Programme" />
  <div class="splash" >
    <div class="col-1">
        <img src={mpath} class="logo-mpath" alt="Logo for MPAth (Marine Protected Areas Toolkit Hub)" />
        <h2>{header}</h2>
    </div>
  </div>
  <a href="#subscribe">
    <div class="jump">
        <p>SUBSCRIBE</p>
        <div class="arrow"></div>
    </div></a>
</div>

<style>
  .landing-page {
    background-size: cover;
    background-position: bottom;
    margin: 0;
    padding: 0;
    height: 80vh;
    min-height: 24rem;
  }

  .unep-logo {
    margin: 1rem 10%;
    height: 3rem;
    width: auto;
  }

  .logo-mpath {
    height: 8rem;
  }

  .splash {
    max-width:80%;
    margin: 0 auto;
    padding: 0;
    padding-top: 5vh;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    line-height: 1.8rem;
    font-weight: 200;
    color: #fff;
    width:75%;
    text-shadow: 0 0 .6rem rgb(0 0 0);
  }

  .jump {
    position: absolute;
    right: 3%;
    bottom: 15%;
    transition: opacity .2s;
  }
  
  .jump:hover {
    opacity:.7;
  }

  .jump p {
    font-family: montserrat, 'sans-serif';
    font-size: 0.7rem;
    font-weight: 600;
    color:#fff;
    text-decoration: none;
    margin-left: .5rem;
    position: absolute;
    transform-origin: 0 0;
    transform: rotate(-90deg);
  }

  .arrow {
    width: 20px;
    height: 70px;
    margin: 0px 20px 20px;
    display: inline-block;
    position: relative;
    transform: translatex(-50%);
  }
  .arrow::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #FFF;
    border-width: 1px 1px 0 0;
    position: absolute;
    transform-origin: 50% 50%;
    transform: rotate(135deg); 
    margin: 0 0 0 -6px;
  }
  .arrow::after{
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #FFF;
    position: absolute;
    transform-origin: 50% 50%;
    width: 0;
    height: 30px;
    border-width: 0 1px 0 0;
    transform: translate(-1px, -18px);
  }

  @media only screen and (min-width: 768px) {

    .landing-page {
        height: 80vh;
        min-height: 32rem;
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

    .jump {
        right: 5%;
        bottom: 20%;
    }

    .jump p {
        font-size: 1rem;
    }

    .arrow {
        height: 100px;
        margin: 20px;
        transform: translatex(-35%);
    }
    .arrow::before {
      border-width: 2px 2px 0 0;
    }
    .arrow::after {
        height: 60px;
        border-width: 0 2px 0 0;
        transform: translate(-1px, -49px);
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
