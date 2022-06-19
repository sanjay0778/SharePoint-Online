import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';
export interface IWebPartPropertiesWebPartProps {
    description: string;
    myDropdown: string;
    myMultiline: string;
    myCheckbox: boolean;
    myToggle: boolean;
}
export default class WebPartPropertiesWebPart extends BaseClientSideWebPart<IWebPartPropertiesWebPartProps> {
    private _isDarkTheme;
    private _environmentMessage;
    protected onInit(): Promise<void>;
    render(): void;
    private _getEnvironmentMessage;
    protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=WebPartPropertiesWebPart.d.ts.map