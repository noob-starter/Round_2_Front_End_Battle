// releases html 

function getYearContent(attr) {
    var id = attr.id;
    var releases = {
        'news-24': " May 4, 2024 <br>\
        First Quarter Earnings 2024<br><br>\
        May 1, 2024<br>\
        Annual Meeting and First Quarter Earnings Release Information<br><br>\
        February 24, 2024<br>\
        Fourth Quarter Earnings 2023<br><br>\
        February 20, 2024<br>\
        Annual Report Release Information<br><br>\
        January 16, 2024<br>\
        Berkshire Hathaway Completes Acquisition of Remaining Interest in Pilot Travel Centers LLC<br><br>\
        January 7, 2024<br>\
        Berkshire Hathaway Reaches Settlement with Pilot Corporation",

        'news-23': "November 28, 2023\
        News Release\
        November 21, 2023\
        News Release\
        November 4, 2023\
        Third Quarter Earnings 2023\
        November 2, 2023\
        Information Regarding Third Quarter Earnings Release",
        
        'news-22': "December 19, 2022\
        News Release\
        November 18, 2022\
        News Release\
        November 5, 2022\
        Third Quarter Earnings 2022\
        November 3, 2022\
        Information Regarding Third Quarter Earnings Release",

        'news-21': "November 6, 2021\
        Third Quarter Earnings 2021\
        November 4, 2021\
        Information Regarding Third Quarter Earnings Release\
        October 20, 2021\
        Susan Buffett and Christopher Davis Elected to Board of Directors\
        August 7, 2021\
        Second Quarter Earnings 2021",

        'news-20': "December 3, 2020\
        2021 Annual Meeting of Shareholders\
        November 7, 2020\
        Third Quarter Earnings 2020\
        August 31, 2020 at 8:30 A.M. (JST)\
        Berkshire Hathaway acquires 5% passive stakes in each of five leading Japanese trading companies\
        August 8, 2020\
        Second Quarter Earnings 2020",
    }

    document.getElementById(id).addEventListener('click', function () {
        document.getElementById('news-header').innerHTML = "20" + id.split('-')[1] + " News Releases";
        document.getElementById('news-content').innerHTML = releases[id];
    });


}