class Footer {
    get twitterBtn () {return $('//*[@id="page_wrapper"]/footer/ul/li[1]/a')};
    get facebookBtn () {return $('//*[@id="page_wrapper"]/footer/ul/li[2]/a')};
    get linkedInBtn () {return $('//*[@id="page_wrapper"]/footer/ul/li[3]/a')}
    get footerImg () {return $('.footer_robot')};
    get footerText () {return $('.footer_copy')};
}

export default new Footer();