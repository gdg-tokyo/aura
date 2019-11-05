const { detect } = require('detect-browser');
const browser = detect();

export default {
    methods: {
        getStorageUrl(pic) {
            switch (browser && browser.name) {
                case 'chrome':
                case 'firefox':
                case 'edge':
                case 'opera-mini':
                case 'opera':
                case 'android':
                    return pic + '.webp';
                default:
                    return pic + '.png';
            }
        }
    }
}