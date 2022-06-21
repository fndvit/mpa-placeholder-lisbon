<script>
  import unep from '../assets/logos/unep.svg';
  import iadc from '../assets/logos/iadc.svg';
  import tnc from '../assets/logos/tnc.svg';
  import uq from '../assets/logos/uq.svg';
  import wwf from '../assets/logos/wwf.svg';
  import udg from '../assets/logos/udg.svg';

  export let header;

  const logos = [unep, iadc, tnc, uq, wwf, udg]

</script>

<section class="partners">
  <h4>{header}</h4>
  <div class="logos">
  {#each logos as logo}
    <img src={logo} class="logo" alt="Svelte Logo" />
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
  :global(.logo) {
    height: 4rem;
    width: auto;
    padding: 0 2rem 1rem 0;
  }
  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: start;
  }
</style>
