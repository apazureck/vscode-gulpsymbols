'use strict';
import { GulpSymbolProvider } from './GulpSymbolProvider';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { languages, ExtensionContext, DocumentFilter } from 'vscode';

const JS_MODE: DocumentFilter = { language: 'javascript', scheme: 'file' };

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
    context.subscriptions.push(languages.registerDocumentSymbolProvider(JS_MODE, new GulpSymbolProvider()));
}

// this method is called when your extension is deactivated
export function deactivate() {
}