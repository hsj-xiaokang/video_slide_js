/*
 * blueimp Gallery Demo JS 2.12.1
 * https://github.com/blueimp/Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* global blueimp, $ */

$(function () {
    'use strict';

    // Initialize the Gallery as video carousel:
    blueimp.Gallery([
        {
            title: 'Big Buck Bunny11',
			 href: 'http://www.w3school.com.cn/i/movie.ogg',
            type: 'video/ogg',
            poster: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=134408327,235874462&fm=58&bpow=640&bpoh=480'
        },
        {
            title: 'Big Buck Bunny22',
			 href: 'http://www.w3school.com.cn/i/movie.ogg',
            type: 'video/ogg',
            poster: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=134408327,235874462&fm=58&bpow=640&bpoh=480'
        },
        {
            title: 'Big Buck Bunny33',
			 href: 'http://www.w3school.com.cn/i/movie.ogg',
            type: 'video/ogg',
            poster: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=134408327,235874462&fm=58&bpow=640&bpoh=480'
        },
        {
             title: 'Big Buck Bunny44',
			 href: 'http://www.w3school.com.cn/i/movie.ogg',
            type: 'video/ogg',
            poster: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=134408327,235874462&fm=58&bpow=640&bpoh=480'
        },
        { title: 'Big Buck Bunny55',
			 href: 'http://www.w3school.com.cn/i/movie.ogg',
            type: 'video/ogg',
            poster: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=134408327,235874462&fm=58&bpow=640&bpoh=480'
        }
    ], {
        container: '#blueimp-video-carousel',
        carousel: true
    });

});
