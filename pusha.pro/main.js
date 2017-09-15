msg = new Array();
    msg[0] = "<br><br><br><br><br><br><br><br><br><br><br><br><br><br>";
    msg[1] = "<h1>MEME TEAM 6</h1>";
    msg[2] = "<h2> <a href=' target='_blank'>brandon del rey</a> </h2><h3>the stars have already died</h3>";
    msg[3] = "<h2> <a href='http://steamcommunity.com/groups/justendit666' target='_blank'>MEME TEAM 6</a>";
    msg[4] = "<br><h2>Just end it</h2>";
    msg[5] = "<h4><a href='http://steamcommunity.com/id/officialadt15299/' target='_blank'>ADT</a></h4>";
    msg[6] = "<h4><a href='http://steamcommunity.com/profiles/76561198272561913/' target='_blank'>Blaze</a></h4>";
	msg[7] = "<h4><a href='http://steamcommunity.com/profiles/76561198198301014/' target='_blank'>BM</a></h4>";



    text1 = "";
    text2 = "";
    count = 0;
    count2 = 0;

    text = msg[0].split("");

    function writetext() {
        text1 = text2 + text[count];
        text2 += text[count];
        document.all["nothing"].innerHTML = text1;

        if (count < text.length-1){
            count++;
            setTimeout('writetext()', 5);
        }
        else {
            count = 0;
            if (count2 != 14) {
                count2++;
                text = eval('msg['+count2+'].split("")');
                setTimeout('writetext()', 25);
        }
        }
    }