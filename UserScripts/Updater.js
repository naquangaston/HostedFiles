function _0xab31() {
        const _0x29f2fa = ['772192WBGRlb', 'Error\x20fetching\x20script\x20content:', 'error', 'GET', ')\x20of\x20the\x20script\x20\x22', 'script', 'open', '10299582QfcozQ', '70oGLlfU', 'author', '744RyiSjK', '5705604qfoVGi', '148926qNRrlh', '78197bhwhUH', '\x22\x20by\x20', 'responseText', '8235BkNUVA', '\x20is\x20available.\x0aDo\x20you\x20want\x20to\x20download\x20it?', 'match', '39qHfyUb', '1588RCfSir', '_blank', '173437BwNOVm'];
        _0xab31 = function() {
            return _0x29f2fa;
        };
        return _0xab31();
    }

    function _0x20bb(_0x70bb47, _0x2f0477) {
        const _0xab317c = _0xab31();
        return _0x20bb = function(_0x20bb8c, _0x430ab1) {
            _0x20bb8c = _0x20bb8c - 0xe8;
            let _0x42616c = _0xab317c[_0x20bb8c];
            return _0x42616c;
        }, _0x20bb(_0x70bb47, _0x2f0477);
    }(function(_0x4dd254, _0x4e21d6) {
        const _0x3dd7ae = _0x20bb,
              _0x889009 = _0x4dd254();
        while (!![]) {
            try {
                const _0x350580 = -parseInt(_0x3dd7ae(0xe8)) / 0x1 + parseInt(_0x3dd7ae(0xf4)) / 0x2 * (parseInt(_0x3dd7ae(0xfb)) / 0x3) + parseInt(_0x3dd7ae(0xfc)) / 0x4 * (-parseInt(_0x3dd7ae(0xf8)) / 0x5) + -parseInt(_0x3dd7ae(0xf3)) / 0x6 + -parseInt(_0x3dd7ae(0xf5)) / 0x7 * (-parseInt(_0x3dd7ae(0xf2)) / 0x8) + parseInt(_0x3dd7ae(0xef)) / 0x9 + -parseInt(_0x3dd7ae(0xf0)) / 0xa * (parseInt(_0x3dd7ae(0xfe)) / 0xb);
                if (_0x350580 === _0x4e21d6) break;
                else _0x889009['push'](_0x889009['shift']());
            } catch (_0x52466c) {
                _0x889009['push'](_0x889009['shift']());
            }
        }
    }(_0xab31, 0xa219e), (function() {
        'use strict';
        const _0x2fc448 = _0x20bb;
        const _0x135a5c = GM_info[_0x2fc448(0xed)]['fileURL'];
        GM_xmlhttpRequest({
            'method': _0x2fc448(0xeb),
            'url': _0x135a5c,
            'onload': function(_0x59510e) {
                const _0x47b041 = _0x2fc448,
                      _0x55c7d1 = _0x59510e[_0x47b041(0xf7)],
                      _0x351239 = _0x55c7d1[_0x47b041(0xfa)](/\/\/ @version\s+(\S+)/);
                if (_0x351239) {
                    const _0x2eaa7e = _0x351239[0x1],
                          _0x3377ef = GM_info['script']['version'];
                    if (_0x2eaa7e > _0x3377ef) {
                        const _0x252363 = 'A\x20newer\x20version\x20(' + _0x2eaa7e + _0x47b041(0xec) + GM_info[_0x47b041(0xed)]['name'] + _0x47b041(0xf6) + GM_info[_0x47b041(0xed)][_0x47b041(0xf1)] + _0x47b041(0xf9);
                        confirm(_0x252363) && window[_0x47b041(0xee)](_0x135a5c, _0x47b041(0xfd));
                    }
                }
            },
            'onerror': function(_0x555afb) {
                const _0x40dda9 = _0x2fc448;
                console[_0x40dda9(0xea)](_0x40dda9(0xe9), _0x555afb);
            }
        });
    }()));
