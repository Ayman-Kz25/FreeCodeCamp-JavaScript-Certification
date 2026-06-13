function booWho(arg) {
    if(arg === true || arg === false){
        return true;
    }
    return false;
}

booWho(true);
booWho(false);
booWho([1,2,3]);
booWho([].slice);
booWho({"a":1});
booWho(1);
booWho(NaN);
booWho("a");
booWho("true");
booWho("false");