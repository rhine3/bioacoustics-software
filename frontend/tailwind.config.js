module.exports = {
    content: [
        'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
        'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
        "./src/**/*.{js,ts,jsx,tsx,vue}",
    ],
    plugins: [
        require('flowbite/plugin')
    ],
    theme: {}
}