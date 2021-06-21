const program = require("commander");
const { cloneProjectAction } = require("./action");
const createCommands = () => {
  program
    .command("create <project> [others...]") // 不能随便改的 是固定的语法
    .description("clone a repositoty into a folder")
    .action((project, others) => {
      // TODO: clone the template from own github
      cloneProjectAction(project, ...others);
    });
};

module.exports = createCommands;
