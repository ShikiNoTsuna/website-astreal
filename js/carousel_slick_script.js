/**
Scripts pour le carousel slick
**/
$(document).ready(function(){
                        $('.japan_carousel').slick({
                              /*dots: true,*/
                              slidesToShow: 3,
                              slidesToScroll: 3,
                              infinite: true,
                              speed: 450,
                              /*autoplay: true,
                              autoplaySpeed: 2000,*/
                              responsive: [
                                    {
                                          breakpoint: 1024,
                                          settings: {
                                                slidesToShow: 3,
                                                slidesToScroll: 3,
                                                infinite: true,
                                                dots: true
                                          }
                                    },
                                    {
                                          breakpoint: 600,
                                          settings: {
                                                slidesToShow: 2,
                                                slidesToScroll: 2
                                          }
                                    },
                                    {
                                          breakpoint: 480,
                                          settings: {
                                                slidesToShow: 1,
                                                slidesToScroll: 1
                                          }
                                    }
                              ]
                        });
                  });
