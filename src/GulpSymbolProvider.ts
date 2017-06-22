import { DocumentSymbolProvider, TextDocument, CancellationToken, ProviderResult, SymbolInformation, SymbolKind, Location, Range } from "vscode";

export class GulpSymbolProvider implements DocumentSymbolProvider {
    private readonly gulpVarRegex: RegExp = /(?:var|const)?\s+?(\w+?)\s*?=\s*?require\s*?\(\s*?['"]gulp["']\s*?\)/;

    provideDocumentSymbols(document: TextDocument, token: CancellationToken): ProviderResult<SymbolInformation[]> {
        const gulpvarname = this.findGulpVariable(document);

        if (gulpvarname) {
            const taskRegex = new RegExp(`^(\\s*?${gulpvarname}\\s*?\\.\\s*?task\\s*?\\(\\s*?['"])(\\w+)['"]\\s*?,`.toString(), "gm");
            const sarr: SymbolInformation[] = [];
            const text = document.getText();
            let match: RegExpExecArray;
            while (match = taskRegex.exec(text)) {
                sarr.push(new SymbolInformation(
                    "Gulp Task: " + match[2],
                    SymbolKind.Constant,
                    new Range(document.positionAt(match.index + match[1].length), document.positionAt(match.index + match[1].length + match[2].length))));
            }
            return sarr;
        }
        return;
    }

    private findGulpVariable(document: TextDocument): string {
        const text = document.getText();

        const foundGulpVariable = text.match(this.gulpVarRegex);
        if (foundGulpVariable) {
            return foundGulpVariable[1];
        } else
            return;
    }
}