const cloud1= document.querySelector(".one");
cloud1.addEventListener("mouseover",()=>{
    cloud1.style.opacity = 0;
    setTimeout(function(){
        cloud1.style.display ='none';
    },1100);
})
const cloud2= document.querySelector(".two");
cloud2.addEventListener("mouseover",()=>{
    cloud2.style.opacity = 0;
    setTimeout(function(){
        cloud2.style.display ='none';
    },1100);
})


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 23.862, lng: 121.013 },
        zoom: 8,
        mapId: '195385c38c63e7fe',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    //存放多個地圖標示
    const markers = [
        [
            "來自大安區最新鮮的蘋果，小農自產，用愛栽培!",
            25.033,
            121.543,
            "/pics/apple.svg",
            30,
            30,
            '有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture"  src="/pics/markerNo1.jpg"></img>'
        ],
        ["台北大茄子，五十年老品牌!",
            25.033,
            121.900,
            "/pics/svgrepo.svg",
            30,
            30,
            '友善大地、尊重生命、支持健康、公平交易、生活美學，從心念出發創造一個相互支持的有機農夫市集成立於2012年。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture" src="/pics/markerNo2.jpg"></img>'
        ],
        ["基隆老王木瓜，又大又香!",
            25.128362188248076,
            121.73907743938136,
            "/pics/papaya.svg",
            30,
            30,
            '這是關於一群以友善大地的自然農耕改變台灣的農夫故事，意味著一群連結著土地、生態、農夫、餐桌的社群，將醞釀著更深的力量，農夫們，靠著自己的力量站起來，重新建立起一個別開生面的有機人文新市集。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture" src="/pics/markerNo3.jpg"></img>'
        ],
        ["新竹暴風草莓，最狂最甜!",
            24.728867841250032,
            121.09491077516721,
            "/pics/berry.svg",
            30,
            30,
            '水，是涵養大地、農作和生命的甘露，結合水花園的休憩與市集的人文風格，來到水花園農夫市集，將享受到鬧中取靜的清涼自在，與每一個別具特色的真心有機快樂農夫閒話食材與農事，更是假日全家休閒、採買、交友、長知識的歡樂活動。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture" src="pics/markerNo4.jpg"></img>'
        ],
        ["花蓮蜜桃，世外桃源!",
            24.011401485831065,
            121.6139498605499,
            "/pics/peach.svg",
            30,
            30,
            '有機的堅持、真心有機的農夫、生活有機的美學，這是關於一群以友善大地的自然農耕改變台灣的農夫故事。一群連結著土地、生態、農夫、餐桌的社群，建立起的有機人文新市集。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture" src="/pics/markerNo5.jpg"></img>'
        ],
        ["苗栗蔬菜大王，產地直送!",
            24.546851361478247,
            120.8466642726602,
            "/pics/salad.svg",
            30,
            30,
            '這是關於一群以友善大地的自然農耕改變台灣的農夫故事，意味著一群連結著土地、生態、農夫、餐桌的社群，將醞釀著更深的力量，農夫們，靠著自己的力量站起來，重新建立起一個別開生面的有機人文新市集。<a href=#>開啟此商家商城頁面<a/>',
            '<img class="picture" src="/pics/markerNo6.jpg"></img>'
        ],
    ];

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
            },
            animation: google.maps.Animation.DROP,
            // info顯示資訊
            infoText: currMarker[6],
            infoPic:currMarker[7]
        });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0]
        });

        marker.addListener('click', () => {
            infowindow.open(map, marker);
            // info顯示資訊
            const pic = document.querySelector('.image');
            const text = document.querySelector('.text');
            text.innerHTML= marker.infoText;
            pic.innerHTML= marker.infoPic;
        });

    }



};