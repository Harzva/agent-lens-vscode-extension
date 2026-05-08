# Agent Lens VS Code Extension

This repository contains a minimal VS Code extension scaffold for **Agent Lens**, a concept for a VS Code preview harness intended to help AI agents validate extensions without human intervention.  The extension itself is extremely simple; it registers a single command and displays a message when invoked.

## Functionality

Currently, the extension does the following:

1. Registers a command called **Agent Lens: Run Preview** (`agentLens.runPreview`).
2. When executed, the command displays an information message in VS Code.

This scaffold provides a starting point for building a more sophisticated extension that could, for example, launch a separate process to run your preview harness (see the `agent‑lens` CLI project) or present results in a custom webview.  You can extend the `activate` function in `extension.js` accordingly.

## Installation

To install this extension locally for development:

1. Clone the repository and open it in VS Code.
2. Run `npm install` if you add any dependencies.
3. Press <kbd>F5</kbd> in VS Code.  This will launch a new Extension Development Host with the extension loaded.
4. In the new window, open the Command Palette (Ctrl+Shift+P) and run **Agent Lens: Run Preview** to see the message.

## Extending the Extension

To make this scaffold useful for the Agent Lens use case, consider implementing the following features:

- Invoke the `agent-lens` CLI (see the companion project) using Node's `child_process.execFile` to run the preview harness against a target extension and workspace.  You might prompt the user to select the extension folder and scenario file.
- Display results in a `vscode.WebviewPanel` or output channel rather than a simple message box.  This would allow you to show structured JSON or interactive UI to the developer or AI agent.
- Contribute custom views or tree providers to surface results from the preview harness.

For more information about developing VS Code extensions see the [VS Code Extension API documentation](https://code.visualstudio.com/api/references/vscode-api).
