import { ReachWidgetGroup } from './ReachWidgetGroup';

export type ReachHomeLayout = {
  left: ReachWidgetGroup[];
  right?: ReachWidgetGroup[];
  top?: ReachWidgetGroup[];
  bottom?: ReachWidgetGroup[];
};
