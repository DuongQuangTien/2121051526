    
        function closeshowSidebar(){
            // debugger;
            const sidebar = document.querySelector('.side-bar');
            if(sidebar.style.display === 'none'){
                sidebar.style.display = 'flex';
            }
            else{
                sidebar.style.display = 'none';
            }
        }
       function trailer(){
            let contentPhim = document.querySelector('.tieude-phim ul');
            let but = document.querySelector('.watch-icon');
            let play = document.getElementById('trailer');
            play.style.display = 'block';
            contentPhim.style.display = 'none';
            but.style.display = 'none'
       }
let listFilm =[
 {
    id : 1,
    name : " Hai Muối ",
    type : " Tâm Lý Tình Cảm  ",
    banner: "https://images.fptplay53.net/media/OTT/VOD/2025/01/24/hai-muoi-fpt-play-1737684521733_Portrait_origin.jpg?w=300&c=0",
    trailer: "https://www.youtube.com/embed/MjxPoqCvvVs",
    nation:"Nhật",
 },
 {
    id : 2,
    name : "Bố Gìa ",
    type : " Tâm Lý Tình Cảm ",
    banner: "https://images.fptplay53.net/media/OTT/VOD/2024/04/27/bo-gia-fpt-play-1714183180215_Portrait_origin.jpg?w=300&c=0",
    trailer :" https://www.youtube.com/embed/jluSu8Rw6YE",
    nation : "Việt Nam",
 }
];

    let bannerElement = document.getElementsByClassName("banner")[0];
    let trailerElement = document.getElementById("trailer");
        // console.log (trailerElement);
    let filmNameElement = document.getElementsByClassName("ten")[0];
    let nationElement = document. getElementsByClassName("add")[0];
    console.log(nationElement);
    
    function viewTrailer(){
        let trailerElement = document.getElementsByClassName("trailer")[0];
        bannerElement.style.display = "none"
        trailerElement.style.display = "block"
    }

    function chooseFilm(filmId){
        let selectedFilm = listFilm.find(film => film.id === filmId );
        bannerElement.src = selectedFilm.banner;
        nationElement.innerText = selectedFilm.nation;
        trailerElement.src = selectedFilm.trailer;

    }

      



