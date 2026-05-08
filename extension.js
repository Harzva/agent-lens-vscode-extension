const vscode = require('vscode');

/**
 * This method is called when your extension is activated.  Activation
 * occurs the very first time the command is executed.  If your extension
 * exports an `activate` function, this function is called with the
 * ExtensionContext.
 *
 * See the VS Code API docs for more details:
 * https://code.visualstudio.com/api/references/vscode-api#ExtensionContext
 *
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log('Agent Lens extension is now active!');

  // Register the command.  The command must be defined in the package.json
  // file.  The 'agentLens.runPreview' command ID matches the command field
  // in package.json.  When the command is executed the callback below is
  // invoked.
  const disposable = vscode.commands.registerCommand('agentLens.runPreview', async () => {
    // Display a message box to the user
    vscode.window.showInformationMessage('Agent Lens preview command triggered.');

    // TODO: invoke your preview harness here.  For example you could spawn
    // a Node script that runs your extension in a separate VS Code instance
    // and capture the results.  Keep in mind that long‑running tasks
    // should not block the VS Code main thread.  You may want to use
    // `child_process.execFile` or `vscode.tasks`.
  });

  context.subscriptions.push(disposable);
}

/**
 * This method is called when your extension is deactivated.  Use it to
 * clean up any resources used by your extension.
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
