const fs = require("fs");
class WriteFilePlugin {
    constructor(options) {
        this.content = options.content || "";
        if (!options.path) {
            throw new Error("Specify a path");
        }
        this.path = options.path;
        this.content = options.content;
    }

    apply(compiler) {
        compiler.hooks.done.tap("Write File Plugin", (stats) => {
            fs.writeFileSync(this.path, this.content);
        });
    }
}

module.exports = WriteFilePlugin;
