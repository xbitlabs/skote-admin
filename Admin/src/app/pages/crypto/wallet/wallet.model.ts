export interface ChartType {
    series?: any;
    chart?: any;
    dataLabels?: any;
    stroke?: any;
    fill?: any;
    xaxis?: any;
    colors?: any;
}

export interface Activities {
    id: string;
    date: string;
    type: string;
    currency: string;
    amount: string;
    usd: string;
}

// Search Data
export interface SearchResult {
    activities: Activities[];
    total: number;
}
