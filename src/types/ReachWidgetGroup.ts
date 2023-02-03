import { ReachWidget } from './ReachWidgetType';

export type ReachWidgetGroup = {
  orientation:
    | 'responsive'
    | 'one-column'
    | 'two-column'
    | 'three-column'
    | 'four-column';
  widgets?: ReachWidget[];
  widgetGroups?: ReachWidgetGroup[];
};
