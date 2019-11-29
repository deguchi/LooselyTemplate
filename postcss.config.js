module.exports = ctx => ({
    parser: "postcss-scss",
    plugins: {
        autoprefixer: {
            grid: true
        }
    }
})