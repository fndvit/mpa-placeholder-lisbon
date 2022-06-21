import App from './App.svelte';
import content from './data/content.json'

const app = new App({
  target: document.getElementById('app'),
  props: {
    content: content
  }
});

export default app;