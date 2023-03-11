export interface WindmillSite {
    name: string;
    windmills: Windmill[];
}

export interface Windmill {
    name: string;
    components: WindmillComponent[];
}

export interface WindmillComponent {
    name: string;
    components: WindmillComponent[];
    envelopes: Envelope[];
}

export interface Envelope {
    name: string;
    description: string;
}