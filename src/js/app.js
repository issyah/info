import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';
import Card from './components/card.vue';
import Navbar from './components/navbar.vue';
import SocialIcons from './components/social_icons.vue';
import Labels from './components/labels.vue';
import DeathStar from './components/death_star.vue';

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    distance: '100px',
    mobile: true,
    opacity:0,
    origin: 'bottom',
});

new Vue({
    el: '#app',
    components: {
        Card,
        Navbar,
        SocialIcons,
        Labels,
        DeathStar
    },
    data: {
        mouseX: '',
        mouseY: '',
        scroll: '',
        background80: '',
    },
    computed: {
        getTransforms() {
            return `translate(${this.mouseX*0.01}px, ${this.mouseY*0.01}px)`
        },
        parallex() {
            if(window.outerWidth >= 768){
                return `translateY(-${this.scroll* 0.1}px)`
            }
        },
        starWarsScroll() {
            let star_wars = document.getElementsByClassName('star-wars-text');
            let top = star_wars[0].clientHeight - star_wars[0].offsetTop;
            // the max perspective & max rotate X
            let max_perspective = 300;
            let max_rotation = 0;
            if (this.scroll > top) {
                let diff = (this.scroll - top);
                let diff_perspective = (diff * 15) * 0.1;
                let perspective = diff_perspective;
                let rotation = diff * 0.02;
                if (rotation <= max_rotation) {
                    return {
                        transform: `perspective(${max_perspective}px) rotateX(${rotation}deg) translateY(-${diff* 0.2}px)`
                    }
                } else {
                    return {
                        transform: `perspective(${max_perspective}px) rotateX(${max_rotation}deg) translateY(-${diff* 0.2}px)`,
                    }
                }
            } else {
                return {
                    transform: `perspective(${300}px) rotateX(${0}deg)`,
                }
            }
        }
    },
    methods: {
        getMouseEvent(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
        handleScroll() {
            this.scroll = window.scrollY;
        },
        setBackground(e){
            this.background80 = (!e) ? 'bg-80' : ''
        },
        setParallexDepth(factor,e){
            let dom = this.$refs[e];
            if(dom){
                let offsetHeight = dom.offsetHeight + dom.offsetTop;
                console.dir(dom);
                if(this.scroll > offsetHeight && window.outerWidth >= 768){
                    let diff = this.scroll - offsetHeight;
                    return `translateY(-${diff * factor}px)`

                }
            }
            // if(window.outerWidth >= 768){
            //     return `translateY(-${this.scroll* factor}px)`
            // }
        }
    },
    mounted() {
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    }
})
