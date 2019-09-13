import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    distance: '100px',
    mobile: true,
    opacity:0,
    origin: 'bottom',
});
