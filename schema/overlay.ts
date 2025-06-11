// see https://spec.openapis.org/overlay/v1.0.0.html

export interface Overlay {
    actions?: OverlayAction[];
}

export interface OverlayAction {
    target?: string;
    update?: any;
    remove?: boolean;
}


/*
overlay:
  actions:
  - target: '$' # Root of document
    update:
      repo:
        name: <+input>
        connector: connector.github
  - target: $.stages.*.steps.*.container
    update: 
      connector: connector.dockerhub
*/
