export type naviagtion = {
    navigation: any
    route: any
}


export type Children = {
    children: JSX.Element | JSX.Element[]
}



export type NavigateTipe = {
    navigate: string | any | {}
}



//// interface de petision de datos  
export interface FetchData {
    id: string,
    title: string,
    poster: string
    episode: string,
    preview: string,
    img: string
    fecha: string
    autor: string
    synopsis: string
    type: string
    rating: string
    debut: string
    genres: [
        string
    ]
    text: [{
        split: any
    }]
    imagenes: [
        {
            imagen: string
        }
    ]

    episodes: [
        {
            episode: Number,
            id: string
            imagePreview: string
        }
    ]
    servers: [
        {
            server: "mega",
            title: string,
            ads: number,
            url: string,
            allow_mobile: true,
            code: string
        },
    ]

}



export type datraFavorite =
    {
        id: string,
        episode: [
            {
                episode: Number,
                id: string
                imagePreview: string
            }

        ],
        type: string,
        synopsis: string,
        rating: string,
        genres: [string],
        poster: string,
        name: string,
        debut: string,
    }


export interface addFavoriteType {
    data: [
        datraFavorite
    ];

    id: String;

    /*  stado: React.Dispatch<React.SetStateAction<boolean>>;

     corazon: boolean;
     error: React.Dispatch<React.SetStateAction<boolean>>;
     ziseItem: any; */
}



