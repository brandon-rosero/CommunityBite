const DataSource = [
    {
        id: "1",
        title: "Helping Those in Need: Food Donation Drive",
        content:
            "We are organizing a food donation drive to support local communities in need. Join us in making a difference!",
        author: "John Doe",
        date: "2022-09-15",
        replys: [
            {
                id: "1",
                content: "We ar",
                author: "John Doe",
                date: "2022-09-15",
                subReplys: [
                    {
                        id: "1038",
                        content: "We ar",
                        author: "John Doe",
                        date: "2022-09-15",
                    },
                    {
                        id: "1036",
                        content: "We ar",
                        author: "John Doe",
                        date: "2022-09-15",
                    },
                ]
            },
            {
                id: "1234141",
                content: "Count me in!",
                author: "Jane Smith",
                date: "2022-09-16",
                subReplys: []
            },
            {
                id: "dqdqwdwqdwq",
                content: "I'll be there to help!",
                author: "Michael Johnson",
                date: "2022-09-17",
                subReplys: []
            },
        ],
    },
    {
        id: "cascsacsa",
        title: "Volunteers Needed for Food Distribution",
        content:
            "Calling all volunteers! We need your help in distributing food to families and individuals facing food insecurity.",
        author: "Jane Smith",
        date: "2022-09-20",
        replys: [
            {
                id: "cascascsacvsavsavsa",
                content: "I can volunteer on weekends.",
                author: "John Doe",
                date: "2022-09-21",
                subReplys: []
            },
            {
                id: "ascsacawqc",
                content: "Count me in!",
                author: "Michael Johnson",
                date: "2022-09-22",
                subReplys: []
            },
        ],
    },
];

let postsData = DataSource;

export const getData = () => {
    return postsData;
}

export const setData = (newData) => {
    postsData = newData;
}