const fakeDadJokes = [
    {
        id: "1",
        joke: 'Joke#1',
        status: 200,
    },
    {
        id: "2",
        joke: 'Joke#2',
        status: 200,
    },
                {
        id: "3",
        joke: 'Joke#3',
        status: 200,
    },
                {
        id: "4",
        joke: 'Joke#4',
        status: 200,
    },
                {
        id: "5",
        joke: 'Joke#5',
        status: 200,
    },
                {
        id: "6",
        joke: 'Joke#6',
        status: 200,
    },
];

const fakeChuckJokes = [
    {
        id: '7',
        categories: [],
        created_at: '',
        icon_url: '',
        updated_at: '',
        url: '',
        value: 'joke#1'
    },
    {
        id: '8',
        categories: [],
        created_at: '',
        icon_url: '',
        updated_at: '',
        url: '',
        value: 'joke#2'
    },
    {
        id: '9',
        categories: [],
        created_at: '',
        icon_url: '',
        updated_at: '',
        url: '',
        value: 'joke#3'
    },
    {
        id: '10',
        categories: [],
        created_at: '',
        icon_url: '',
        updated_at: '',
        url: '',
        value: 'joke#4'
    }
]

export function getRandomFakeDadJoke(){
    return fakeDadJokes[Math.ceil((Math.random() * fakeDadJokes.length))-1]
}

export function getRandomFakeChuckJoke(){
    return fakeChuckJokes[Math.ceil((Math.random() * fakeChuckJokes.length))-1]
}