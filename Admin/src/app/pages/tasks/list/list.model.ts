// Chart data
export interface ChartType {
    chart?: any;
    stroke?: any;
    plotOptions?: any;
    colors?: any;
    series?: any;
    fill?: any;
    labels?: any;
    markers?: any;
    yaxis?: any;
}

export interface Tasklist {
    index: number;
    taskType: string;
    name: string;
    images: string[];
    status: string;
    checked?: boolean;
}
