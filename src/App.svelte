<script>
  import Intro from './lib/Intro.svelte';
  import Partners from './lib/Partners.svelte';
  import Subscribe from './lib/Subscribe.svelte';

  export let content;

</script>

<main class="full grid">
  <Intro />
    <div class="col-1">
      <h3>{content.launch}</h3>
      <Partners
        header={content.partners}
       />
    </div>
    <div class="col-2">
      {#each content.text as p}
      <p>{p}</p>
      {/each}
      <Subscribe 
        header={content.subscribeKicker}
        cta={content.subscribeCTA}
      />
    </div>
</main>

<style>
  .full {
    max-width:80%;
    margin: 0 auto;
    padding: 0;
  }
  .grid {
    display: block;
  }
  :global(h1, h2, h3, h4, p) {
    padding: 0;
    margin: 0;
  }
  :global(h1, h2, h3, h4)  {
    font-family: montserrat, 'sans-serif';
    font-weight: 100;
  }
  :global(h1, h2, h3, h4)  {
    font-family: montserrat, 'sans-serif';
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 200;
  }
  p {
    font-family: bitter, 'serif';
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }
  @media only screen and (min-width: 768px) {
    .full {
      width:100%;
    }
    .grid {
      display: grid;
      grid-template-columns: 0fr 2fr 10fr 0fr;
      grid-column-gap: 1.25rem;
    }
    .col-1 {
      grid-column: 2;
      align-self: start;
    }
    .col-2 {
      grid-column: 3;
      align-self: start;
    }
    h3 {
      font-size: 3rem;
      font-weight: 100;
    }
    p {
      font-size: 1.125rem;
      line-height: 2rem;
    }
  }

  @media only screen and (min-width: 1280px) {
    .full {
      max-width: 1280px;
    }
    .grid {
      grid-template-columns: 1fr 3fr 5fr 3fr;
    }
    .col-1 {
      grid-column: 2;
      align-self: start;
    }
    .col-2 {
      grid-column: 3;
      align-self: start;
    }
  }
</style>
