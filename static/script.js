const gallery = document.querySelector('.gallery');

fetch('./api/images')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
        showImages(data)
    });

function showImages(data){
    for (let i in data){
        const a  = document.createElement('a');
        a.href = './images/' + data[i];
        a.setAttribute('download', 'download');
        const img  = document.createElement('img');
        img.src = './images/' + data[i];
        img.setAttribute('loading', 'lazy');
        a.append(img);
        gallery.append(a);
    }
}