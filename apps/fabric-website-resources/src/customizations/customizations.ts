import { IExampleCardCustomizations, IAppCustomizations } from '@uifabric/example-app-base';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Mdl2Customizations } from '@uifabric/mdl2-theme';
import { AzureCustomizationsLight, AzureCustomizationsDark } from '@uifabric/azure-themes';
import { DefaultCustomizations, TeamsCustomizations, WordCustomizations } from '@uifabric/theme-samples';

const exampleCardCustomizations: IExampleCardCustomizations[] = [
  { title: 'Default', customizations: DefaultCustomizations },
  { title: 'Fluent', customizations: FluentCustomizations },
  { title: 'Word', customizations: WordCustomizations },
  { title: 'Teams', customizations: TeamsCustomizations },
  { title: 'Azure', customizations: AzureCustomizationsLight },
  { title: 'Azure Dark', customizations: AzureCustomizationsDark },
  { title: 'Mdl2', customizations: Mdl2Customizations }
];

export const AppCustomizations: IAppCustomizations = {
  exampleCardCustomizations
};
