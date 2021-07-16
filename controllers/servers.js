import { readdirSync, writeFile } from 'fs';

let servers = [
    {id: '1', name: 'AWS', status: 'working'},
    {id: '2', name: 'Google Cloud', status: 'working'},
    {id: '3', name: 'Yandex Cloud', status: 'working'},
    {id: '4', name: 'Mocrosoft', status: 'pending'}
]


export const getAll = (req, res) => {
    res.status(200).json(servers)
}

export const getImages = (req, res) => {
    const images = readdirSync('./static/images');
    res.status(200).json(images);
}