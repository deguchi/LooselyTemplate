module.exports = ctx => ({
    parser: "postcss-scss",
    plugins: {
        autoprefixer: {
            grid: "autoplace" // trueは no-autoplace を表す。 autoplace に変更
        }
    }
})