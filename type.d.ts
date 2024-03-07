interface Row {
    id: string;
    name: string;
    slug: string;
    sypnosis: string;
    url: string;
    created_on: string;
}

type episode={
    id: int,
    series: string,
    ep_no: int,
    url: string,
    series_id: int
}
type url={
    url:string
}

interface Field {
    columnID: number;
    dataTypeID: number;
    dataTypeModifier: number;
    dataTypeSize: number;
    format: string;
    name: string;
    tableID: number;
}

