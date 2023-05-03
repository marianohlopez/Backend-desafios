import yargs from "yargs";

const args = yargs(process.argv.slice(2))
    .alias({
        p: "puerto",
    })
    .default({
        puerto: 3000,
    }).argv;

export default args;