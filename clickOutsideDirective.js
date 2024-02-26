// clickOutsideDirective.js
export const clickOutsideDirective = {
    mounted(el, binding) {
        el.clickOutsideHandler = event => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value();
            }
        };
        document.addEventListener('click', el.clickOutsideHandler);
    },
    beforeUnmount(el) {
        document.removeEventListener('click', el.clickOutsideHandler);
    }
};
