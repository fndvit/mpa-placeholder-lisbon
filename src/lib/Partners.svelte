<script>
  import unep from '../assets/logos/unep.svg';
  import iadc from '../assets/logos/iadc.svg';
  import tnc from '../assets/logos/tnc.svg';
  import uq from '../assets/logos/uq.svg';
  import wwf from '../assets/logos/wwf.svg';
  import udg from '../assets/logos/udg.svg';

  export let header;

  const logos = [
    {src: unep, alt: 'Logo for the United Nations Environment Programme'},
    {src: tnc, alt: 'Logo for The Nature Conservancy'},
    {src: iadc, alt: 'Logo for the Italian Agency for Development Cooperation'},
    {src: uq, alt: 'Logo for the University of Queensland'},
    {src: wwf, alt: 'Logo for the World Wildlife Fund'},
    {src: udg, alt: 'Logo for Universitat de Girona'},
  ];

</script>

<section class="partners">
  <h4>{header}</h4>
  <div class="logos">
  {#each logos as logo}
    <img src={logo.src} class="logo" alt={logo.alt} />
  {/each}
  </div>
</section>

<style>

  h4 {
    font-size: 1rem;
    font-weight: 700;
    margin: 4rem 0 1rem 0;
  }

  .partners {
    margin-bottom: 2rem;
  }

  .logo {
    height: 3rem;
    width: auto;
    padding: 0 2rem 1rem 0;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: start;
  }

  @media only screen and (min-width: 768px) {
    .logo {
      height: 4rem;
      width: auto;
      padding: 0 2rem 1.2rem 0;
    }
  }
</style>
