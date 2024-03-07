type series={
    id: string,
    name: string,
    slug: string,
    sypnosis: string,
    url: string,
    created_on: Date
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