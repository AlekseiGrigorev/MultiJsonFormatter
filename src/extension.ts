// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { JsonExtractor } from './jsonExtractor';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.languages.registerDocumentRangeFormattingEditProvider(['plaintext', 'log'], {
        provideDocumentRangeFormattingEdits(document: vscode.TextDocument, range: vscode.Range, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.TextEdit[] {
            const text = document.getText(range);
            const offset = document.offsetAt(range.start);
            let extractor = new JsonExtractor(text);
            extractor.extract();
            let edits:any = [];
            let eol = '\n';
            if (document.eol === vscode.EndOfLine.CRLF) {
                eol = '\r\n'; 
            }
            extractor.getFragments().forEach(element => {
                const r = new vscode.Range(document.positionAt(element.getStart() + offset), document.positionAt(element.getEnd() + offset));
                edits.push(vscode.TextEdit.replace(r, eol + element.getText()));
            });
            return edits;
        }
    });
    context.subscriptions.push(disposable);

    // Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	//console.log('Congratulations, your extension "multijsonformatter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	//let disposable = vscode.commands.registerCommand('multijsonformatter.format', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
	    //vscode.window.showInformationMessage('Hello World from MultiJsonFormatter!');
	//});
}

// This method is called when your extension is deactivated
export function deactivate() {}
