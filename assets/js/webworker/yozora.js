'use strict';

var AsciiCodePoint;
(function (AsciiCodePoint) {
    AsciiCodePoint[AsciiCodePoint["NUL"] = 0] = "NUL";
    AsciiCodePoint[AsciiCodePoint["SOH"] = 1] = "SOH";
    AsciiCodePoint[AsciiCodePoint["STX"] = 2] = "STX";
    AsciiCodePoint[AsciiCodePoint["ETX"] = 3] = "ETX";
    AsciiCodePoint[AsciiCodePoint["EOT"] = 4] = "EOT";
    AsciiCodePoint[AsciiCodePoint["ENQ"] = 5] = "ENQ";
    AsciiCodePoint[AsciiCodePoint["ACK"] = 6] = "ACK";
    AsciiCodePoint[AsciiCodePoint["BEL"] = 7] = "BEL";
    AsciiCodePoint[AsciiCodePoint["BS"] = 8] = "BS";
    AsciiCodePoint[AsciiCodePoint["HT"] = 9] = "HT";
    AsciiCodePoint[AsciiCodePoint["LF"] = 10] = "LF";
    AsciiCodePoint[AsciiCodePoint["VT"] = 11] = "VT";
    AsciiCodePoint[AsciiCodePoint["FF"] = 12] = "FF";
    AsciiCodePoint[AsciiCodePoint["CR"] = 13] = "CR";
    AsciiCodePoint[AsciiCodePoint["SO"] = 14] = "SO";
    AsciiCodePoint[AsciiCodePoint["SI"] = 15] = "SI";
    AsciiCodePoint[AsciiCodePoint["DLE"] = 16] = "DLE";
    AsciiCodePoint[AsciiCodePoint["DC1"] = 17] = "DC1";
    AsciiCodePoint[AsciiCodePoint["DC2"] = 18] = "DC2";
    AsciiCodePoint[AsciiCodePoint["DC3"] = 19] = "DC3";
    AsciiCodePoint[AsciiCodePoint["DC4"] = 20] = "DC4";
    AsciiCodePoint[AsciiCodePoint["NAK"] = 21] = "NAK";
    AsciiCodePoint[AsciiCodePoint["SYN"] = 22] = "SYN";
    AsciiCodePoint[AsciiCodePoint["ETB"] = 23] = "ETB";
    AsciiCodePoint[AsciiCodePoint["CAN"] = 24] = "CAN";
    AsciiCodePoint[AsciiCodePoint["EM"] = 25] = "EM";
    AsciiCodePoint[AsciiCodePoint["SUB"] = 26] = "SUB";
    AsciiCodePoint[AsciiCodePoint["ESC"] = 27] = "ESC";
    AsciiCodePoint[AsciiCodePoint["FS"] = 28] = "FS";
    AsciiCodePoint[AsciiCodePoint["GS"] = 29] = "GS";
    AsciiCodePoint[AsciiCodePoint["RS"] = 30] = "RS";
    AsciiCodePoint[AsciiCodePoint["US"] = 31] = "US";
    AsciiCodePoint[AsciiCodePoint["SPACE"] = 32] = "SPACE";
    AsciiCodePoint[AsciiCodePoint["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    AsciiCodePoint[AsciiCodePoint["DOUBLE_QUOTE"] = 34] = "DOUBLE_QUOTE";
    AsciiCodePoint[AsciiCodePoint["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
    AsciiCodePoint[AsciiCodePoint["DOLLAR_SIGN"] = 36] = "DOLLAR_SIGN";
    AsciiCodePoint[AsciiCodePoint["PERCENT_SIGN"] = 37] = "PERCENT_SIGN";
    AsciiCodePoint[AsciiCodePoint["AMPERSAND"] = 38] = "AMPERSAND";
    AsciiCodePoint[AsciiCodePoint["SINGLE_QUOTE"] = 39] = "SINGLE_QUOTE";
    AsciiCodePoint[AsciiCodePoint["OPEN_PARENTHESIS"] = 40] = "OPEN_PARENTHESIS";
    AsciiCodePoint[AsciiCodePoint["CLOSE_PARENTHESIS"] = 41] = "CLOSE_PARENTHESIS";
    AsciiCodePoint[AsciiCodePoint["ASTERISK"] = 42] = "ASTERISK";
    AsciiCodePoint[AsciiCodePoint["PLUS_SIGN"] = 43] = "PLUS_SIGN";
    AsciiCodePoint[AsciiCodePoint["COMMA"] = 44] = "COMMA";
    AsciiCodePoint[AsciiCodePoint["MINUS_SIGN"] = 45] = "MINUS_SIGN";
    AsciiCodePoint[AsciiCodePoint["DOT"] = 46] = "DOT";
    AsciiCodePoint[AsciiCodePoint["SLASH"] = 47] = "SLASH";
    AsciiCodePoint[AsciiCodePoint["DIGIT0"] = 48] = "DIGIT0";
    AsciiCodePoint[AsciiCodePoint["DIGIT1"] = 49] = "DIGIT1";
    AsciiCodePoint[AsciiCodePoint["DIGIT2"] = 50] = "DIGIT2";
    AsciiCodePoint[AsciiCodePoint["DIGIT3"] = 51] = "DIGIT3";
    AsciiCodePoint[AsciiCodePoint["DIGIT4"] = 52] = "DIGIT4";
    AsciiCodePoint[AsciiCodePoint["DIGIT5"] = 53] = "DIGIT5";
    AsciiCodePoint[AsciiCodePoint["DIGIT6"] = 54] = "DIGIT6";
    AsciiCodePoint[AsciiCodePoint["DIGIT7"] = 55] = "DIGIT7";
    AsciiCodePoint[AsciiCodePoint["DIGIT8"] = 56] = "DIGIT8";
    AsciiCodePoint[AsciiCodePoint["DIGIT9"] = 57] = "DIGIT9";
    AsciiCodePoint[AsciiCodePoint["COLON"] = 58] = "COLON";
    AsciiCodePoint[AsciiCodePoint["SEMICOLON"] = 59] = "SEMICOLON";
    AsciiCodePoint[AsciiCodePoint["OPEN_ANGLE"] = 60] = "OPEN_ANGLE";
    AsciiCodePoint[AsciiCodePoint["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
    AsciiCodePoint[AsciiCodePoint["CLOSE_ANGLE"] = 62] = "CLOSE_ANGLE";
    AsciiCodePoint[AsciiCodePoint["QUESTION_MARK"] = 63] = "QUESTION_MARK";
    AsciiCodePoint[AsciiCodePoint["AT_SIGN"] = 64] = "AT_SIGN";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_A"] = 65] = "UPPERCASE_A";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_B"] = 66] = "UPPERCASE_B";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_C"] = 67] = "UPPERCASE_C";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_D"] = 68] = "UPPERCASE_D";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_E"] = 69] = "UPPERCASE_E";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_F"] = 70] = "UPPERCASE_F";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_G"] = 71] = "UPPERCASE_G";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_H"] = 72] = "UPPERCASE_H";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_I"] = 73] = "UPPERCASE_I";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_J"] = 74] = "UPPERCASE_J";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_K"] = 75] = "UPPERCASE_K";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_L"] = 76] = "UPPERCASE_L";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_M"] = 77] = "UPPERCASE_M";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_N"] = 78] = "UPPERCASE_N";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_O"] = 79] = "UPPERCASE_O";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_P"] = 80] = "UPPERCASE_P";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_Q"] = 81] = "UPPERCASE_Q";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_R"] = 82] = "UPPERCASE_R";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_S"] = 83] = "UPPERCASE_S";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_T"] = 84] = "UPPERCASE_T";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_U"] = 85] = "UPPERCASE_U";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_V"] = 86] = "UPPERCASE_V";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_W"] = 87] = "UPPERCASE_W";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_X"] = 88] = "UPPERCASE_X";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_Y"] = 89] = "UPPERCASE_Y";
    AsciiCodePoint[AsciiCodePoint["UPPERCASE_Z"] = 90] = "UPPERCASE_Z";
    AsciiCodePoint[AsciiCodePoint["OPEN_BRACKET"] = 91] = "OPEN_BRACKET";
    AsciiCodePoint[AsciiCodePoint["BACKSLASH"] = 92] = "BACKSLASH";
    AsciiCodePoint[AsciiCodePoint["CLOSE_BRACKET"] = 93] = "CLOSE_BRACKET";
    AsciiCodePoint[AsciiCodePoint["CARET"] = 94] = "CARET";
    AsciiCodePoint[AsciiCodePoint["UNDERSCORE"] = 95] = "UNDERSCORE";
    AsciiCodePoint[AsciiCodePoint["BACKTICK"] = 96] = "BACKTICK";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_A"] = 97] = "LOWERCASE_A";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_B"] = 98] = "LOWERCASE_B";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_C"] = 99] = "LOWERCASE_C";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_D"] = 100] = "LOWERCASE_D";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_E"] = 101] = "LOWERCASE_E";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_F"] = 102] = "LOWERCASE_F";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_G"] = 103] = "LOWERCASE_G";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_H"] = 104] = "LOWERCASE_H";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_I"] = 105] = "LOWERCASE_I";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_J"] = 106] = "LOWERCASE_J";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_K"] = 107] = "LOWERCASE_K";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_L"] = 108] = "LOWERCASE_L";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_M"] = 109] = "LOWERCASE_M";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_N"] = 110] = "LOWERCASE_N";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_O"] = 111] = "LOWERCASE_O";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_P"] = 112] = "LOWERCASE_P";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_Q"] = 113] = "LOWERCASE_Q";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_R"] = 114] = "LOWERCASE_R";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_S"] = 115] = "LOWERCASE_S";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_T"] = 116] = "LOWERCASE_T";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_U"] = 117] = "LOWERCASE_U";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_V"] = 118] = "LOWERCASE_V";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_W"] = 119] = "LOWERCASE_W";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_X"] = 120] = "LOWERCASE_X";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_Y"] = 121] = "LOWERCASE_Y";
    AsciiCodePoint[AsciiCodePoint["LOWERCASE_Z"] = 122] = "LOWERCASE_Z";
    AsciiCodePoint[AsciiCodePoint["OPEN_BRACE"] = 123] = "OPEN_BRACE";
    AsciiCodePoint[AsciiCodePoint["VERTICAL_SLASH"] = 124] = "VERTICAL_SLASH";
    AsciiCodePoint[AsciiCodePoint["CLOSE_BRACE"] = 125] = "CLOSE_BRACE";
    AsciiCodePoint[AsciiCodePoint["TILDE"] = 126] = "TILDE";
    AsciiCodePoint[AsciiCodePoint["DELETE"] = 127] = "DELETE";
})(AsciiCodePoint || (AsciiCodePoint = {}));

const foldingCaseCodeMap = {
    '\xB5': '\u03BC',
    '\xC0': '\xE0',
    '\xC1': '\xE1',
    '\xC2': '\xE2',
    '\xC3': '\xE3',
    '\xC4': '\xE4',
    '\xC5': '\xE5',
    '\xC6': '\xE6',
    '\xC7': '\xE7',
    '\xC8': '\xE8',
    '\xC9': '\xE9',
    '\xCA': '\xEA',
    '\xCB': '\xEB',
    '\xCC': '\xEC',
    '\xCD': '\xED',
    '\xCE': '\xEE',
    '\xCF': '\xEF',
    '\xD0': '\xF0',
    '\xD1': '\xF1',
    '\xD2': '\xF2',
    '\xD3': '\xF3',
    '\xD4': '\xF4',
    '\xD5': '\xF5',
    '\xD6': '\xF6',
    '\xD8': '\xF8',
    '\xD9': '\xF9',
    '\xDA': '\xFA',
    '\xDB': '\xFB',
    '\xDC': '\xFC',
    '\xDD': '\xFD',
    '\xDE': '\xFE',
    '\u0100': '\u0101',
    '\u0102': '\u0103',
    '\u0104': '\u0105',
    '\u0106': '\u0107',
    '\u0108': '\u0109',
    '\u010A': '\u010B',
    '\u010C': '\u010D',
    '\u010E': '\u010F',
    '\u0110': '\u0111',
    '\u0112': '\u0113',
    '\u0114': '\u0115',
    '\u0116': '\u0117',
    '\u0118': '\u0119',
    '\u011A': '\u011B',
    '\u011C': '\u011D',
    '\u011E': '\u011F',
    '\u0120': '\u0121',
    '\u0122': '\u0123',
    '\u0124': '\u0125',
    '\u0126': '\u0127',
    '\u0128': '\u0129',
    '\u012A': '\u012B',
    '\u012C': '\u012D',
    '\u012E': '\u012F',
    '\u0132': '\u0133',
    '\u0134': '\u0135',
    '\u0136': '\u0137',
    '\u0139': '\u013A',
    '\u013B': '\u013C',
    '\u013D': '\u013E',
    '\u013F': '\u0140',
    '\u0141': '\u0142',
    '\u0143': '\u0144',
    '\u0145': '\u0146',
    '\u0147': '\u0148',
    '\u014A': '\u014B',
    '\u014C': '\u014D',
    '\u014E': '\u014F',
    '\u0150': '\u0151',
    '\u0152': '\u0153',
    '\u0154': '\u0155',
    '\u0156': '\u0157',
    '\u0158': '\u0159',
    '\u015A': '\u015B',
    '\u015C': '\u015D',
    '\u015E': '\u015F',
    '\u0160': '\u0161',
    '\u0162': '\u0163',
    '\u0164': '\u0165',
    '\u0166': '\u0167',
    '\u0168': '\u0169',
    '\u016A': '\u016B',
    '\u016C': '\u016D',
    '\u016E': '\u016F',
    '\u0170': '\u0171',
    '\u0172': '\u0173',
    '\u0174': '\u0175',
    '\u0176': '\u0177',
    '\u0178': '\xFF',
    '\u0179': '\u017A',
    '\u017B': '\u017C',
    '\u017D': '\u017E',
    '\u017F': 's',
    '\u0181': '\u0253',
    '\u0182': '\u0183',
    '\u0184': '\u0185',
    '\u0186': '\u0254',
    '\u0187': '\u0188',
    '\u0189': '\u0256',
    '\u018A': '\u0257',
    '\u018B': '\u018C',
    '\u018E': '\u01DD',
    '\u018F': '\u0259',
    '\u0190': '\u025B',
    '\u0191': '\u0192',
    '\u0193': '\u0260',
    '\u0194': '\u0263',
    '\u0196': '\u0269',
    '\u0197': '\u0268',
    '\u0198': '\u0199',
    '\u019C': '\u026F',
    '\u019D': '\u0272',
    '\u019F': '\u0275',
    '\u01A0': '\u01A1',
    '\u01A2': '\u01A3',
    '\u01A4': '\u01A5',
    '\u01A6': '\u0280',
    '\u01A7': '\u01A8',
    '\u01A9': '\u0283',
    '\u01AC': '\u01AD',
    '\u01AE': '\u0288',
    '\u01AF': '\u01B0',
    '\u01B1': '\u028A',
    '\u01B2': '\u028B',
    '\u01B3': '\u01B4',
    '\u01B5': '\u01B6',
    '\u01B7': '\u0292',
    '\u01B8': '\u01B9',
    '\u01BC': '\u01BD',
    '\u01C4': '\u01C6',
    '\u01C5': '\u01C6',
    '\u01C7': '\u01C9',
    '\u01C8': '\u01C9',
    '\u01CA': '\u01CC',
    '\u01CB': '\u01CC',
    '\u01CD': '\u01CE',
    '\u01CF': '\u01D0',
    '\u01D1': '\u01D2',
    '\u01D3': '\u01D4',
    '\u01D5': '\u01D6',
    '\u01D7': '\u01D8',
    '\u01D9': '\u01DA',
    '\u01DB': '\u01DC',
    '\u01DE': '\u01DF',
    '\u01E0': '\u01E1',
    '\u01E2': '\u01E3',
    '\u01E4': '\u01E5',
    '\u01E6': '\u01E7',
    '\u01E8': '\u01E9',
    '\u01EA': '\u01EB',
    '\u01EC': '\u01ED',
    '\u01EE': '\u01EF',
    '\u01F1': '\u01F3',
    '\u01F2': '\u01F3',
    '\u01F4': '\u01F5',
    '\u01F6': '\u0195',
    '\u01F7': '\u01BF',
    '\u01F8': '\u01F9',
    '\u01FA': '\u01FB',
    '\u01FC': '\u01FD',
    '\u01FE': '\u01FF',
    '\u0200': '\u0201',
    '\u0202': '\u0203',
    '\u0204': '\u0205',
    '\u0206': '\u0207',
    '\u0208': '\u0209',
    '\u020A': '\u020B',
    '\u020C': '\u020D',
    '\u020E': '\u020F',
    '\u0210': '\u0211',
    '\u0212': '\u0213',
    '\u0214': '\u0215',
    '\u0216': '\u0217',
    '\u0218': '\u0219',
    '\u021A': '\u021B',
    '\u021C': '\u021D',
    '\u021E': '\u021F',
    '\u0220': '\u019E',
    '\u0222': '\u0223',
    '\u0224': '\u0225',
    '\u0226': '\u0227',
    '\u0228': '\u0229',
    '\u022A': '\u022B',
    '\u022C': '\u022D',
    '\u022E': '\u022F',
    '\u0230': '\u0231',
    '\u0232': '\u0233',
    '\u023A': '\u2C65',
    '\u023B': '\u023C',
    '\u023D': '\u019A',
    '\u023E': '\u2C66',
    '\u0241': '\u0242',
    '\u0243': '\u0180',
    '\u0244': '\u0289',
    '\u0245': '\u028C',
    '\u0246': '\u0247',
    '\u0248': '\u0249',
    '\u024A': '\u024B',
    '\u024C': '\u024D',
    '\u024E': '\u024F',
    '\u0345': '\u03B9',
    '\u0370': '\u0371',
    '\u0372': '\u0373',
    '\u0376': '\u0377',
    '\u037F': '\u03F3',
    '\u0386': '\u03AC',
    '\u0388': '\u03AD',
    '\u0389': '\u03AE',
    '\u038A': '\u03AF',
    '\u038C': '\u03CC',
    '\u038E': '\u03CD',
    '\u038F': '\u03CE',
    '\u0391': '\u03B1',
    '\u0392': '\u03B2',
    '\u0393': '\u03B3',
    '\u0394': '\u03B4',
    '\u0395': '\u03B5',
    '\u0396': '\u03B6',
    '\u0397': '\u03B7',
    '\u0398': '\u03B8',
    '\u0399': '\u03B9',
    '\u039A': '\u03BA',
    '\u039B': '\u03BB',
    '\u039C': '\u03BC',
    '\u039D': '\u03BD',
    '\u039E': '\u03BE',
    '\u039F': '\u03BF',
    '\u03A0': '\u03C0',
    '\u03A1': '\u03C1',
    '\u03A3': '\u03C3',
    '\u03A4': '\u03C4',
    '\u03A5': '\u03C5',
    '\u03A6': '\u03C6',
    '\u03A7': '\u03C7',
    '\u03A8': '\u03C8',
    '\u03A9': '\u03C9',
    '\u03AA': '\u03CA',
    '\u03AB': '\u03CB',
    '\u03C2': '\u03C3',
    '\u03CF': '\u03D7',
    '\u03D0': '\u03B2',
    '\u03D1': '\u03B8',
    '\u03D5': '\u03C6',
    '\u03D6': '\u03C0',
    '\u03D8': '\u03D9',
    '\u03DA': '\u03DB',
    '\u03DC': '\u03DD',
    '\u03DE': '\u03DF',
    '\u03E0': '\u03E1',
    '\u03E2': '\u03E3',
    '\u03E4': '\u03E5',
    '\u03E6': '\u03E7',
    '\u03E8': '\u03E9',
    '\u03EA': '\u03EB',
    '\u03EC': '\u03ED',
    '\u03EE': '\u03EF',
    '\u03F0': '\u03BA',
    '\u03F1': '\u03C1',
    '\u03F4': '\u03B8',
    '\u03F5': '\u03B5',
    '\u03F7': '\u03F8',
    '\u03F9': '\u03F2',
    '\u03FA': '\u03FB',
    '\u03FD': '\u037B',
    '\u03FE': '\u037C',
    '\u03FF': '\u037D',
    '\u0400': '\u0450',
    '\u0401': '\u0451',
    '\u0402': '\u0452',
    '\u0403': '\u0453',
    '\u0404': '\u0454',
    '\u0405': '\u0455',
    '\u0406': '\u0456',
    '\u0407': '\u0457',
    '\u0408': '\u0458',
    '\u0409': '\u0459',
    '\u040A': '\u045A',
    '\u040B': '\u045B',
    '\u040C': '\u045C',
    '\u040D': '\u045D',
    '\u040E': '\u045E',
    '\u040F': '\u045F',
    '\u0410': '\u0430',
    '\u0411': '\u0431',
    '\u0412': '\u0432',
    '\u0413': '\u0433',
    '\u0414': '\u0434',
    '\u0415': '\u0435',
    '\u0416': '\u0436',
    '\u0417': '\u0437',
    '\u0418': '\u0438',
    '\u0419': '\u0439',
    '\u041A': '\u043A',
    '\u041B': '\u043B',
    '\u041C': '\u043C',
    '\u041D': '\u043D',
    '\u041E': '\u043E',
    '\u041F': '\u043F',
    '\u0420': '\u0440',
    '\u0421': '\u0441',
    '\u0422': '\u0442',
    '\u0423': '\u0443',
    '\u0424': '\u0444',
    '\u0425': '\u0445',
    '\u0426': '\u0446',
    '\u0427': '\u0447',
    '\u0428': '\u0448',
    '\u0429': '\u0449',
    '\u042A': '\u044A',
    '\u042B': '\u044B',
    '\u042C': '\u044C',
    '\u042D': '\u044D',
    '\u042E': '\u044E',
    '\u042F': '\u044F',
    '\u0460': '\u0461',
    '\u0462': '\u0463',
    '\u0464': '\u0465',
    '\u0466': '\u0467',
    '\u0468': '\u0469',
    '\u046A': '\u046B',
    '\u046C': '\u046D',
    '\u046E': '\u046F',
    '\u0470': '\u0471',
    '\u0472': '\u0473',
    '\u0474': '\u0475',
    '\u0476': '\u0477',
    '\u0478': '\u0479',
    '\u047A': '\u047B',
    '\u047C': '\u047D',
    '\u047E': '\u047F',
    '\u0480': '\u0481',
    '\u048A': '\u048B',
    '\u048C': '\u048D',
    '\u048E': '\u048F',
    '\u0490': '\u0491',
    '\u0492': '\u0493',
    '\u0494': '\u0495',
    '\u0496': '\u0497',
    '\u0498': '\u0499',
    '\u049A': '\u049B',
    '\u049C': '\u049D',
    '\u049E': '\u049F',
    '\u04A0': '\u04A1',
    '\u04A2': '\u04A3',
    '\u04A4': '\u04A5',
    '\u04A6': '\u04A7',
    '\u04A8': '\u04A9',
    '\u04AA': '\u04AB',
    '\u04AC': '\u04AD',
    '\u04AE': '\u04AF',
    '\u04B0': '\u04B1',
    '\u04B2': '\u04B3',
    '\u04B4': '\u04B5',
    '\u04B6': '\u04B7',
    '\u04B8': '\u04B9',
    '\u04BA': '\u04BB',
    '\u04BC': '\u04BD',
    '\u04BE': '\u04BF',
    '\u04C0': '\u04CF',
    '\u04C1': '\u04C2',
    '\u04C3': '\u04C4',
    '\u04C5': '\u04C6',
    '\u04C7': '\u04C8',
    '\u04C9': '\u04CA',
    '\u04CB': '\u04CC',
    '\u04CD': '\u04CE',
    '\u04D0': '\u04D1',
    '\u04D2': '\u04D3',
    '\u04D4': '\u04D5',
    '\u04D6': '\u04D7',
    '\u04D8': '\u04D9',
    '\u04DA': '\u04DB',
    '\u04DC': '\u04DD',
    '\u04DE': '\u04DF',
    '\u04E0': '\u04E1',
    '\u04E2': '\u04E3',
    '\u04E4': '\u04E5',
    '\u04E6': '\u04E7',
    '\u04E8': '\u04E9',
    '\u04EA': '\u04EB',
    '\u04EC': '\u04ED',
    '\u04EE': '\u04EF',
    '\u04F0': '\u04F1',
    '\u04F2': '\u04F3',
    '\u04F4': '\u04F5',
    '\u04F6': '\u04F7',
    '\u04F8': '\u04F9',
    '\u04FA': '\u04FB',
    '\u04FC': '\u04FD',
    '\u04FE': '\u04FF',
    '\u0500': '\u0501',
    '\u0502': '\u0503',
    '\u0504': '\u0505',
    '\u0506': '\u0507',
    '\u0508': '\u0509',
    '\u050A': '\u050B',
    '\u050C': '\u050D',
    '\u050E': '\u050F',
    '\u0510': '\u0511',
    '\u0512': '\u0513',
    '\u0514': '\u0515',
    '\u0516': '\u0517',
    '\u0518': '\u0519',
    '\u051A': '\u051B',
    '\u051C': '\u051D',
    '\u051E': '\u051F',
    '\u0520': '\u0521',
    '\u0522': '\u0523',
    '\u0524': '\u0525',
    '\u0526': '\u0527',
    '\u0528': '\u0529',
    '\u052A': '\u052B',
    '\u052C': '\u052D',
    '\u052E': '\u052F',
    '\u0531': '\u0561',
    '\u0532': '\u0562',
    '\u0533': '\u0563',
    '\u0534': '\u0564',
    '\u0535': '\u0565',
    '\u0536': '\u0566',
    '\u0537': '\u0567',
    '\u0538': '\u0568',
    '\u0539': '\u0569',
    '\u053A': '\u056A',
    '\u053B': '\u056B',
    '\u053C': '\u056C',
    '\u053D': '\u056D',
    '\u053E': '\u056E',
    '\u053F': '\u056F',
    '\u0540': '\u0570',
    '\u0541': '\u0571',
    '\u0542': '\u0572',
    '\u0543': '\u0573',
    '\u0544': '\u0574',
    '\u0545': '\u0575',
    '\u0546': '\u0576',
    '\u0547': '\u0577',
    '\u0548': '\u0578',
    '\u0549': '\u0579',
    '\u054A': '\u057A',
    '\u054B': '\u057B',
    '\u054C': '\u057C',
    '\u054D': '\u057D',
    '\u054E': '\u057E',
    '\u054F': '\u057F',
    '\u0550': '\u0580',
    '\u0551': '\u0581',
    '\u0552': '\u0582',
    '\u0553': '\u0583',
    '\u0554': '\u0584',
    '\u0555': '\u0585',
    '\u0556': '\u0586',
    '\u10A0': '\u2D00',
    '\u10A1': '\u2D01',
    '\u10A2': '\u2D02',
    '\u10A3': '\u2D03',
    '\u10A4': '\u2D04',
    '\u10A5': '\u2D05',
    '\u10A6': '\u2D06',
    '\u10A7': '\u2D07',
    '\u10A8': '\u2D08',
    '\u10A9': '\u2D09',
    '\u10AA': '\u2D0A',
    '\u10AB': '\u2D0B',
    '\u10AC': '\u2D0C',
    '\u10AD': '\u2D0D',
    '\u10AE': '\u2D0E',
    '\u10AF': '\u2D0F',
    '\u10B0': '\u2D10',
    '\u10B1': '\u2D11',
    '\u10B2': '\u2D12',
    '\u10B3': '\u2D13',
    '\u10B4': '\u2D14',
    '\u10B5': '\u2D15',
    '\u10B6': '\u2D16',
    '\u10B7': '\u2D17',
    '\u10B8': '\u2D18',
    '\u10B9': '\u2D19',
    '\u10BA': '\u2D1A',
    '\u10BB': '\u2D1B',
    '\u10BC': '\u2D1C',
    '\u10BD': '\u2D1D',
    '\u10BE': '\u2D1E',
    '\u10BF': '\u2D1F',
    '\u10C0': '\u2D20',
    '\u10C1': '\u2D21',
    '\u10C2': '\u2D22',
    '\u10C3': '\u2D23',
    '\u10C4': '\u2D24',
    '\u10C5': '\u2D25',
    '\u10C7': '\u2D27',
    '\u10CD': '\u2D2D',
    '\u1E00': '\u1E01',
    '\u1E02': '\u1E03',
    '\u1E04': '\u1E05',
    '\u1E06': '\u1E07',
    '\u1E08': '\u1E09',
    '\u1E0A': '\u1E0B',
    '\u1E0C': '\u1E0D',
    '\u1E0E': '\u1E0F',
    '\u1E10': '\u1E11',
    '\u1E12': '\u1E13',
    '\u1E14': '\u1E15',
    '\u1E16': '\u1E17',
    '\u1E18': '\u1E19',
    '\u1E1A': '\u1E1B',
    '\u1E1C': '\u1E1D',
    '\u1E1E': '\u1E1F',
    '\u1E20': '\u1E21',
    '\u1E22': '\u1E23',
    '\u1E24': '\u1E25',
    '\u1E26': '\u1E27',
    '\u1E28': '\u1E29',
    '\u1E2A': '\u1E2B',
    '\u1E2C': '\u1E2D',
    '\u1E2E': '\u1E2F',
    '\u1E30': '\u1E31',
    '\u1E32': '\u1E33',
    '\u1E34': '\u1E35',
    '\u1E36': '\u1E37',
    '\u1E38': '\u1E39',
    '\u1E3A': '\u1E3B',
    '\u1E3C': '\u1E3D',
    '\u1E3E': '\u1E3F',
    '\u1E40': '\u1E41',
    '\u1E42': '\u1E43',
    '\u1E44': '\u1E45',
    '\u1E46': '\u1E47',
    '\u1E48': '\u1E49',
    '\u1E4A': '\u1E4B',
    '\u1E4C': '\u1E4D',
    '\u1E4E': '\u1E4F',
    '\u1E50': '\u1E51',
    '\u1E52': '\u1E53',
    '\u1E54': '\u1E55',
    '\u1E56': '\u1E57',
    '\u1E58': '\u1E59',
    '\u1E5A': '\u1E5B',
    '\u1E5C': '\u1E5D',
    '\u1E5E': '\u1E5F',
    '\u1E60': '\u1E61',
    '\u1E62': '\u1E63',
    '\u1E64': '\u1E65',
    '\u1E66': '\u1E67',
    '\u1E68': '\u1E69',
    '\u1E6A': '\u1E6B',
    '\u1E6C': '\u1E6D',
    '\u1E6E': '\u1E6F',
    '\u1E70': '\u1E71',
    '\u1E72': '\u1E73',
    '\u1E74': '\u1E75',
    '\u1E76': '\u1E77',
    '\u1E78': '\u1E79',
    '\u1E7A': '\u1E7B',
    '\u1E7C': '\u1E7D',
    '\u1E7E': '\u1E7F',
    '\u1E80': '\u1E81',
    '\u1E82': '\u1E83',
    '\u1E84': '\u1E85',
    '\u1E86': '\u1E87',
    '\u1E88': '\u1E89',
    '\u1E8A': '\u1E8B',
    '\u1E8C': '\u1E8D',
    '\u1E8E': '\u1E8F',
    '\u1E90': '\u1E91',
    '\u1E92': '\u1E93',
    '\u1E94': '\u1E95',
    '\u1E9B': '\u1E61',
    '\u1EA0': '\u1EA1',
    '\u1EA2': '\u1EA3',
    '\u1EA4': '\u1EA5',
    '\u1EA6': '\u1EA7',
    '\u1EA8': '\u1EA9',
    '\u1EAA': '\u1EAB',
    '\u1EAC': '\u1EAD',
    '\u1EAE': '\u1EAF',
    '\u1EB0': '\u1EB1',
    '\u1EB2': '\u1EB3',
    '\u1EB4': '\u1EB5',
    '\u1EB6': '\u1EB7',
    '\u1EB8': '\u1EB9',
    '\u1EBA': '\u1EBB',
    '\u1EBC': '\u1EBD',
    '\u1EBE': '\u1EBF',
    '\u1EC0': '\u1EC1',
    '\u1EC2': '\u1EC3',
    '\u1EC4': '\u1EC5',
    '\u1EC6': '\u1EC7',
    '\u1EC8': '\u1EC9',
    '\u1ECA': '\u1ECB',
    '\u1ECC': '\u1ECD',
    '\u1ECE': '\u1ECF',
    '\u1ED0': '\u1ED1',
    '\u1ED2': '\u1ED3',
    '\u1ED4': '\u1ED5',
    '\u1ED6': '\u1ED7',
    '\u1ED8': '\u1ED9',
    '\u1EDA': '\u1EDB',
    '\u1EDC': '\u1EDD',
    '\u1EDE': '\u1EDF',
    '\u1EE0': '\u1EE1',
    '\u1EE2': '\u1EE3',
    '\u1EE4': '\u1EE5',
    '\u1EE6': '\u1EE7',
    '\u1EE8': '\u1EE9',
    '\u1EEA': '\u1EEB',
    '\u1EEC': '\u1EED',
    '\u1EEE': '\u1EEF',
    '\u1EF0': '\u1EF1',
    '\u1EF2': '\u1EF3',
    '\u1EF4': '\u1EF5',
    '\u1EF6': '\u1EF7',
    '\u1EF8': '\u1EF9',
    '\u1EFA': '\u1EFB',
    '\u1EFC': '\u1EFD',
    '\u1EFE': '\u1EFF',
    '\u1F08': '\u1F00',
    '\u1F09': '\u1F01',
    '\u1F0A': '\u1F02',
    '\u1F0B': '\u1F03',
    '\u1F0C': '\u1F04',
    '\u1F0D': '\u1F05',
    '\u1F0E': '\u1F06',
    '\u1F0F': '\u1F07',
    '\u1F18': '\u1F10',
    '\u1F19': '\u1F11',
    '\u1F1A': '\u1F12',
    '\u1F1B': '\u1F13',
    '\u1F1C': '\u1F14',
    '\u1F1D': '\u1F15',
    '\u1F28': '\u1F20',
    '\u1F29': '\u1F21',
    '\u1F2A': '\u1F22',
    '\u1F2B': '\u1F23',
    '\u1F2C': '\u1F24',
    '\u1F2D': '\u1F25',
    '\u1F2E': '\u1F26',
    '\u1F2F': '\u1F27',
    '\u1F38': '\u1F30',
    '\u1F39': '\u1F31',
    '\u1F3A': '\u1F32',
    '\u1F3B': '\u1F33',
    '\u1F3C': '\u1F34',
    '\u1F3D': '\u1F35',
    '\u1F3E': '\u1F36',
    '\u1F3F': '\u1F37',
    '\u1F48': '\u1F40',
    '\u1F49': '\u1F41',
    '\u1F4A': '\u1F42',
    '\u1F4B': '\u1F43',
    '\u1F4C': '\u1F44',
    '\u1F4D': '\u1F45',
    '\u1F59': '\u1F51',
    '\u1F5B': '\u1F53',
    '\u1F5D': '\u1F55',
    '\u1F5F': '\u1F57',
    '\u1F68': '\u1F60',
    '\u1F69': '\u1F61',
    '\u1F6A': '\u1F62',
    '\u1F6B': '\u1F63',
    '\u1F6C': '\u1F64',
    '\u1F6D': '\u1F65',
    '\u1F6E': '\u1F66',
    '\u1F6F': '\u1F67',
    '\u1FB8': '\u1FB0',
    '\u1FB9': '\u1FB1',
    '\u1FBA': '\u1F70',
    '\u1FBB': '\u1F71',
    '\u1FBE': '\u03B9',
    '\u1FC8': '\u1F72',
    '\u1FC9': '\u1F73',
    '\u1FCA': '\u1F74',
    '\u1FCB': '\u1F75',
    '\u1FD8': '\u1FD0',
    '\u1FD9': '\u1FD1',
    '\u1FDA': '\u1F76',
    '\u1FDB': '\u1F77',
    '\u1FE8': '\u1FE0',
    '\u1FE9': '\u1FE1',
    '\u1FEA': '\u1F7A',
    '\u1FEB': '\u1F7B',
    '\u1FEC': '\u1FE5',
    '\u1FF8': '\u1F78',
    '\u1FF9': '\u1F79',
    '\u1FFA': '\u1F7C',
    '\u1FFB': '\u1F7D',
    '\u2126': '\u03C9',
    '\u212A': 'k',
    '\u212B': '\xE5',
    '\u2132': '\u214E',
    '\u2160': '\u2170',
    '\u2161': '\u2171',
    '\u2162': '\u2172',
    '\u2163': '\u2173',
    '\u2164': '\u2174',
    '\u2165': '\u2175',
    '\u2166': '\u2176',
    '\u2167': '\u2177',
    '\u2168': '\u2178',
    '\u2169': '\u2179',
    '\u216A': '\u217A',
    '\u216B': '\u217B',
    '\u216C': '\u217C',
    '\u216D': '\u217D',
    '\u216E': '\u217E',
    '\u216F': '\u217F',
    '\u2183': '\u2184',
    '\u24B6': '\u24D0',
    '\u24B7': '\u24D1',
    '\u24B8': '\u24D2',
    '\u24B9': '\u24D3',
    '\u24BA': '\u24D4',
    '\u24BB': '\u24D5',
    '\u24BC': '\u24D6',
    '\u24BD': '\u24D7',
    '\u24BE': '\u24D8',
    '\u24BF': '\u24D9',
    '\u24C0': '\u24DA',
    '\u24C1': '\u24DB',
    '\u24C2': '\u24DC',
    '\u24C3': '\u24DD',
    '\u24C4': '\u24DE',
    '\u24C5': '\u24DF',
    '\u24C6': '\u24E0',
    '\u24C7': '\u24E1',
    '\u24C8': '\u24E2',
    '\u24C9': '\u24E3',
    '\u24CA': '\u24E4',
    '\u24CB': '\u24E5',
    '\u24CC': '\u24E6',
    '\u24CD': '\u24E7',
    '\u24CE': '\u24E8',
    '\u24CF': '\u24E9',
    '\u2C00': '\u2C30',
    '\u2C01': '\u2C31',
    '\u2C02': '\u2C32',
    '\u2C03': '\u2C33',
    '\u2C04': '\u2C34',
    '\u2C05': '\u2C35',
    '\u2C06': '\u2C36',
    '\u2C07': '\u2C37',
    '\u2C08': '\u2C38',
    '\u2C09': '\u2C39',
    '\u2C0A': '\u2C3A',
    '\u2C0B': '\u2C3B',
    '\u2C0C': '\u2C3C',
    '\u2C0D': '\u2C3D',
    '\u2C0E': '\u2C3E',
    '\u2C0F': '\u2C3F',
    '\u2C10': '\u2C40',
    '\u2C11': '\u2C41',
    '\u2C12': '\u2C42',
    '\u2C13': '\u2C43',
    '\u2C14': '\u2C44',
    '\u2C15': '\u2C45',
    '\u2C16': '\u2C46',
    '\u2C17': '\u2C47',
    '\u2C18': '\u2C48',
    '\u2C19': '\u2C49',
    '\u2C1A': '\u2C4A',
    '\u2C1B': '\u2C4B',
    '\u2C1C': '\u2C4C',
    '\u2C1D': '\u2C4D',
    '\u2C1E': '\u2C4E',
    '\u2C1F': '\u2C4F',
    '\u2C20': '\u2C50',
    '\u2C21': '\u2C51',
    '\u2C22': '\u2C52',
    '\u2C23': '\u2C53',
    '\u2C24': '\u2C54',
    '\u2C25': '\u2C55',
    '\u2C26': '\u2C56',
    '\u2C27': '\u2C57',
    '\u2C28': '\u2C58',
    '\u2C29': '\u2C59',
    '\u2C2A': '\u2C5A',
    '\u2C2B': '\u2C5B',
    '\u2C2C': '\u2C5C',
    '\u2C2D': '\u2C5D',
    '\u2C2E': '\u2C5E',
    '\u2C60': '\u2C61',
    '\u2C62': '\u026B',
    '\u2C63': '\u1D7D',
    '\u2C64': '\u027D',
    '\u2C67': '\u2C68',
    '\u2C69': '\u2C6A',
    '\u2C6B': '\u2C6C',
    '\u2C6D': '\u0251',
    '\u2C6E': '\u0271',
    '\u2C6F': '\u0250',
    '\u2C70': '\u0252',
    '\u2C72': '\u2C73',
    '\u2C75': '\u2C76',
    '\u2C7E': '\u023F',
    '\u2C7F': '\u0240',
    '\u2C80': '\u2C81',
    '\u2C82': '\u2C83',
    '\u2C84': '\u2C85',
    '\u2C86': '\u2C87',
    '\u2C88': '\u2C89',
    '\u2C8A': '\u2C8B',
    '\u2C8C': '\u2C8D',
    '\u2C8E': '\u2C8F',
    '\u2C90': '\u2C91',
    '\u2C92': '\u2C93',
    '\u2C94': '\u2C95',
    '\u2C96': '\u2C97',
    '\u2C98': '\u2C99',
    '\u2C9A': '\u2C9B',
    '\u2C9C': '\u2C9D',
    '\u2C9E': '\u2C9F',
    '\u2CA0': '\u2CA1',
    '\u2CA2': '\u2CA3',
    '\u2CA4': '\u2CA5',
    '\u2CA6': '\u2CA7',
    '\u2CA8': '\u2CA9',
    '\u2CAA': '\u2CAB',
    '\u2CAC': '\u2CAD',
    '\u2CAE': '\u2CAF',
    '\u2CB0': '\u2CB1',
    '\u2CB2': '\u2CB3',
    '\u2CB4': '\u2CB5',
    '\u2CB6': '\u2CB7',
    '\u2CB8': '\u2CB9',
    '\u2CBA': '\u2CBB',
    '\u2CBC': '\u2CBD',
    '\u2CBE': '\u2CBF',
    '\u2CC0': '\u2CC1',
    '\u2CC2': '\u2CC3',
    '\u2CC4': '\u2CC5',
    '\u2CC6': '\u2CC7',
    '\u2CC8': '\u2CC9',
    '\u2CCA': '\u2CCB',
    '\u2CCC': '\u2CCD',
    '\u2CCE': '\u2CCF',
    '\u2CD0': '\u2CD1',
    '\u2CD2': '\u2CD3',
    '\u2CD4': '\u2CD5',
    '\u2CD6': '\u2CD7',
    '\u2CD8': '\u2CD9',
    '\u2CDA': '\u2CDB',
    '\u2CDC': '\u2CDD',
    '\u2CDE': '\u2CDF',
    '\u2CE0': '\u2CE1',
    '\u2CE2': '\u2CE3',
    '\u2CEB': '\u2CEC',
    '\u2CED': '\u2CEE',
    '\u2CF2': '\u2CF3',
    '\uA640': '\uA641',
    '\uA642': '\uA643',
    '\uA644': '\uA645',
    '\uA646': '\uA647',
    '\uA648': '\uA649',
    '\uA64A': '\uA64B',
    '\uA64C': '\uA64D',
    '\uA64E': '\uA64F',
    '\uA650': '\uA651',
    '\uA652': '\uA653',
    '\uA654': '\uA655',
    '\uA656': '\uA657',
    '\uA658': '\uA659',
    '\uA65A': '\uA65B',
    '\uA65C': '\uA65D',
    '\uA65E': '\uA65F',
    '\uA660': '\uA661',
    '\uA662': '\uA663',
    '\uA664': '\uA665',
    '\uA666': '\uA667',
    '\uA668': '\uA669',
    '\uA66A': '\uA66B',
    '\uA66C': '\uA66D',
    '\uA680': '\uA681',
    '\uA682': '\uA683',
    '\uA684': '\uA685',
    '\uA686': '\uA687',
    '\uA688': '\uA689',
    '\uA68A': '\uA68B',
    '\uA68C': '\uA68D',
    '\uA68E': '\uA68F',
    '\uA690': '\uA691',
    '\uA692': '\uA693',
    '\uA694': '\uA695',
    '\uA696': '\uA697',
    '\uA698': '\uA699',
    '\uA69A': '\uA69B',
    '\uA722': '\uA723',
    '\uA724': '\uA725',
    '\uA726': '\uA727',
    '\uA728': '\uA729',
    '\uA72A': '\uA72B',
    '\uA72C': '\uA72D',
    '\uA72E': '\uA72F',
    '\uA732': '\uA733',
    '\uA734': '\uA735',
    '\uA736': '\uA737',
    '\uA738': '\uA739',
    '\uA73A': '\uA73B',
    '\uA73C': '\uA73D',
    '\uA73E': '\uA73F',
    '\uA740': '\uA741',
    '\uA742': '\uA743',
    '\uA744': '\uA745',
    '\uA746': '\uA747',
    '\uA748': '\uA749',
    '\uA74A': '\uA74B',
    '\uA74C': '\uA74D',
    '\uA74E': '\uA74F',
    '\uA750': '\uA751',
    '\uA752': '\uA753',
    '\uA754': '\uA755',
    '\uA756': '\uA757',
    '\uA758': '\uA759',
    '\uA75A': '\uA75B',
    '\uA75C': '\uA75D',
    '\uA75E': '\uA75F',
    '\uA760': '\uA761',
    '\uA762': '\uA763',
    '\uA764': '\uA765',
    '\uA766': '\uA767',
    '\uA768': '\uA769',
    '\uA76A': '\uA76B',
    '\uA76C': '\uA76D',
    '\uA76E': '\uA76F',
    '\uA779': '\uA77A',
    '\uA77B': '\uA77C',
    '\uA77D': '\u1D79',
    '\uA77E': '\uA77F',
    '\uA780': '\uA781',
    '\uA782': '\uA783',
    '\uA784': '\uA785',
    '\uA786': '\uA787',
    '\uA78B': '\uA78C',
    '\uA78D': '\u0265',
    '\uA790': '\uA791',
    '\uA792': '\uA793',
    '\uA796': '\uA797',
    '\uA798': '\uA799',
    '\uA79A': '\uA79B',
    '\uA79C': '\uA79D',
    '\uA79E': '\uA79F',
    '\uA7A0': '\uA7A1',
    '\uA7A2': '\uA7A3',
    '\uA7A4': '\uA7A5',
    '\uA7A6': '\uA7A7',
    '\uA7A8': '\uA7A9',
    '\uA7AA': '\u0266',
    '\uA7AB': '\u025C',
    '\uA7AC': '\u0261',
    '\uA7AD': '\u026C',
    '\uA7B0': '\u029E',
    '\uA7B1': '\u0287',
    '\uFF21': '\uFF41',
    '\uFF22': '\uFF42',
    '\uFF23': '\uFF43',
    '\uFF24': '\uFF44',
    '\uFF25': '\uFF45',
    '\uFF26': '\uFF46',
    '\uFF27': '\uFF47',
    '\uFF28': '\uFF48',
    '\uFF29': '\uFF49',
    '\uFF2A': '\uFF4A',
    '\uFF2B': '\uFF4B',
    '\uFF2C': '\uFF4C',
    '\uFF2D': '\uFF4D',
    '\uFF2E': '\uFF4E',
    '\uFF2F': '\uFF4F',
    '\uFF30': '\uFF50',
    '\uFF31': '\uFF51',
    '\uFF32': '\uFF52',
    '\uFF33': '\uFF53',
    '\uFF34': '\uFF54',
    '\uFF35': '\uFF55',
    '\uFF36': '\uFF56',
    '\uFF37': '\uFF57',
    '\uFF38': '\uFF58',
    '\uFF39': '\uFF59',
    '\uFF3A': '\uFF5A',
    '\uD801\uDC00': '\uD801\uDC28',
    '\uD801\uDC01': '\uD801\uDC29',
    '\uD801\uDC02': '\uD801\uDC2A',
    '\uD801\uDC03': '\uD801\uDC2B',
    '\uD801\uDC04': '\uD801\uDC2C',
    '\uD801\uDC05': '\uD801\uDC2D',
    '\uD801\uDC06': '\uD801\uDC2E',
    '\uD801\uDC07': '\uD801\uDC2F',
    '\uD801\uDC08': '\uD801\uDC30',
    '\uD801\uDC09': '\uD801\uDC31',
    '\uD801\uDC0A': '\uD801\uDC32',
    '\uD801\uDC0B': '\uD801\uDC33',
    '\uD801\uDC0C': '\uD801\uDC34',
    '\uD801\uDC0D': '\uD801\uDC35',
    '\uD801\uDC0E': '\uD801\uDC36',
    '\uD801\uDC0F': '\uD801\uDC37',
    '\uD801\uDC10': '\uD801\uDC38',
    '\uD801\uDC11': '\uD801\uDC39',
    '\uD801\uDC12': '\uD801\uDC3A',
    '\uD801\uDC13': '\uD801\uDC3B',
    '\uD801\uDC14': '\uD801\uDC3C',
    '\uD801\uDC15': '\uD801\uDC3D',
    '\uD801\uDC16': '\uD801\uDC3E',
    '\uD801\uDC17': '\uD801\uDC3F',
    '\uD801\uDC18': '\uD801\uDC40',
    '\uD801\uDC19': '\uD801\uDC41',
    '\uD801\uDC1A': '\uD801\uDC42',
    '\uD801\uDC1B': '\uD801\uDC43',
    '\uD801\uDC1C': '\uD801\uDC44',
    '\uD801\uDC1D': '\uD801\uDC45',
    '\uD801\uDC1E': '\uD801\uDC46',
    '\uD801\uDC1F': '\uD801\uDC47',
    '\uD801\uDC20': '\uD801\uDC48',
    '\uD801\uDC21': '\uD801\uDC49',
    '\uD801\uDC22': '\uD801\uDC4A',
    '\uD801\uDC23': '\uD801\uDC4B',
    '\uD801\uDC24': '\uD801\uDC4C',
    '\uD801\uDC25': '\uD801\uDC4D',
    '\uD801\uDC26': '\uD801\uDC4E',
    '\uD801\uDC27': '\uD801\uDC4F',
    '\uD806\uDCA0': '\uD806\uDCC0',
    '\uD806\uDCA1': '\uD806\uDCC1',
    '\uD806\uDCA2': '\uD806\uDCC2',
    '\uD806\uDCA3': '\uD806\uDCC3',
    '\uD806\uDCA4': '\uD806\uDCC4',
    '\uD806\uDCA5': '\uD806\uDCC5',
    '\uD806\uDCA6': '\uD806\uDCC6',
    '\uD806\uDCA7': '\uD806\uDCC7',
    '\uD806\uDCA8': '\uD806\uDCC8',
    '\uD806\uDCA9': '\uD806\uDCC9',
    '\uD806\uDCAA': '\uD806\uDCCA',
    '\uD806\uDCAB': '\uD806\uDCCB',
    '\uD806\uDCAC': '\uD806\uDCCC',
    '\uD806\uDCAD': '\uD806\uDCCD',
    '\uD806\uDCAE': '\uD806\uDCCE',
    '\uD806\uDCAF': '\uD806\uDCCF',
    '\uD806\uDCB0': '\uD806\uDCD0',
    '\uD806\uDCB1': '\uD806\uDCD1',
    '\uD806\uDCB2': '\uD806\uDCD2',
    '\uD806\uDCB3': '\uD806\uDCD3',
    '\uD806\uDCB4': '\uD806\uDCD4',
    '\uD806\uDCB5': '\uD806\uDCD5',
    '\uD806\uDCB6': '\uD806\uDCD6',
    '\uD806\uDCB7': '\uD806\uDCD7',
    '\uD806\uDCB8': '\uD806\uDCD8',
    '\uD806\uDCB9': '\uD806\uDCD9',
    '\uD806\uDCBA': '\uD806\uDCDA',
    '\uD806\uDCBB': '\uD806\uDCDB',
    '\uD806\uDCBC': '\uD806\uDCDC',
    '\uD806\uDCBD': '\uD806\uDCDD',
    '\uD806\uDCBE': '\uD806\uDCDE',
    '\uD806\uDCBF': '\uD806\uDCDF',
    '\xDF': 'ss',
    '\u0130': 'i\u0307',
    '\u0149': '\u02BCn',
    '\u01F0': 'j\u030C',
    '\u0390': '\u03B9\u0308\u0301',
    '\u03B0': '\u03C5\u0308\u0301',
    '\u0587': '\u0565\u0582',
    '\u1E96': 'h\u0331',
    '\u1E97': 't\u0308',
    '\u1E98': 'w\u030A',
    '\u1E99': 'y\u030A',
    '\u1E9A': 'a\u02BE',
    '\u1E9E': 'ss',
    '\u1F50': '\u03C5\u0313',
    '\u1F52': '\u03C5\u0313\u0300',
    '\u1F54': '\u03C5\u0313\u0301',
    '\u1F56': '\u03C5\u0313\u0342',
    '\u1F80': '\u1F00\u03B9',
    '\u1F81': '\u1F01\u03B9',
    '\u1F82': '\u1F02\u03B9',
    '\u1F83': '\u1F03\u03B9',
    '\u1F84': '\u1F04\u03B9',
    '\u1F85': '\u1F05\u03B9',
    '\u1F86': '\u1F06\u03B9',
    '\u1F87': '\u1F07\u03B9',
    '\u1F88': '\u1F00\u03B9',
    '\u1F89': '\u1F01\u03B9',
    '\u1F8A': '\u1F02\u03B9',
    '\u1F8B': '\u1F03\u03B9',
    '\u1F8C': '\u1F04\u03B9',
    '\u1F8D': '\u1F05\u03B9',
    '\u1F8E': '\u1F06\u03B9',
    '\u1F8F': '\u1F07\u03B9',
    '\u1F90': '\u1F20\u03B9',
    '\u1F91': '\u1F21\u03B9',
    '\u1F92': '\u1F22\u03B9',
    '\u1F93': '\u1F23\u03B9',
    '\u1F94': '\u1F24\u03B9',
    '\u1F95': '\u1F25\u03B9',
    '\u1F96': '\u1F26\u03B9',
    '\u1F97': '\u1F27\u03B9',
    '\u1F98': '\u1F20\u03B9',
    '\u1F99': '\u1F21\u03B9',
    '\u1F9A': '\u1F22\u03B9',
    '\u1F9B': '\u1F23\u03B9',
    '\u1F9C': '\u1F24\u03B9',
    '\u1F9D': '\u1F25\u03B9',
    '\u1F9E': '\u1F26\u03B9',
    '\u1F9F': '\u1F27\u03B9',
    '\u1FA0': '\u1F60\u03B9',
    '\u1FA1': '\u1F61\u03B9',
    '\u1FA2': '\u1F62\u03B9',
    '\u1FA3': '\u1F63\u03B9',
    '\u1FA4': '\u1F64\u03B9',
    '\u1FA5': '\u1F65\u03B9',
    '\u1FA6': '\u1F66\u03B9',
    '\u1FA7': '\u1F67\u03B9',
    '\u1FA8': '\u1F60\u03B9',
    '\u1FA9': '\u1F61\u03B9',
    '\u1FAA': '\u1F62\u03B9',
    '\u1FAB': '\u1F63\u03B9',
    '\u1FAC': '\u1F64\u03B9',
    '\u1FAD': '\u1F65\u03B9',
    '\u1FAE': '\u1F66\u03B9',
    '\u1FAF': '\u1F67\u03B9',
    '\u1FB2': '\u1F70\u03B9',
    '\u1FB3': '\u03B1\u03B9',
    '\u1FB4': '\u03AC\u03B9',
    '\u1FB6': '\u03B1\u0342',
    '\u1FB7': '\u03B1\u0342\u03B9',
    '\u1FBC': '\u03B1\u03B9',
    '\u1FC2': '\u1F74\u03B9',
    '\u1FC3': '\u03B7\u03B9',
    '\u1FC4': '\u03AE\u03B9',
    '\u1FC6': '\u03B7\u0342',
    '\u1FC7': '\u03B7\u0342\u03B9',
    '\u1FCC': '\u03B7\u03B9',
    '\u1FD2': '\u03B9\u0308\u0300',
    '\u1FD3': '\u03B9\u0308\u0301',
    '\u1FD6': '\u03B9\u0342',
    '\u1FD7': '\u03B9\u0308\u0342',
    '\u1FE2': '\u03C5\u0308\u0300',
    '\u1FE3': '\u03C5\u0308\u0301',
    '\u1FE4': '\u03C1\u0313',
    '\u1FE6': '\u03C5\u0342',
    '\u1FE7': '\u03C5\u0308\u0342',
    '\u1FF2': '\u1F7C\u03B9',
    '\u1FF3': '\u03C9\u03B9',
    '\u1FF4': '\u03CE\u03B9',
    '\u1FF6': '\u03C9\u0342',
    '\u1FF7': '\u03C9\u0342\u03B9',
    '\u1FFC': '\u03C9\u03B9',
    '\uFB00': 'ff',
    '\uFB01': 'fi',
    '\uFB02': 'fl',
    '\uFB03': 'ffi',
    '\uFB04': 'ffl',
    '\uFB05': 'st',
    '\uFB06': 'st',
    '\uFB13': '\u0574\u0576',
    '\uFB14': '\u0574\u0565',
    '\uFB15': '\u0574\u056B',
    '\uFB16': '\u057E\u0576',
    '\uFB17': '\u0574\u056D',
};

const entityReferences = [
    { key: [65, 69, 108, 105, 103, 59], value: 'Æ' },
    { key: [65, 77, 80, 59], value: '&' },
    { key: [65, 97, 99, 117, 116, 101, 59], value: 'Á' },
    { key: [65, 98, 114, 101, 118, 101, 59], value: 'Ă' },
    { key: [65, 99, 105, 114, 99, 59], value: 'Â' },
    { key: [65, 99, 121, 59], value: 'А' },
    { key: [65, 102, 114, 59], value: '𝔄' },
    { key: [65, 103, 114, 97, 118, 101, 59], value: 'À' },
    { key: [65, 108, 112, 104, 97, 59], value: 'Α' },
    { key: [65, 109, 97, 99, 114, 59], value: 'Ā' },
    { key: [65, 110, 100, 59], value: '⩓' },
    { key: [65, 111, 103, 111, 110, 59], value: 'Ą' },
    { key: [65, 111, 112, 102, 59], value: '𝔸' },
    { key: [65, 112, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59], value: '⁡' },
    { key: [65, 114, 105, 110, 103, 59], value: 'Å' },
    { key: [65, 115, 99, 114, 59], value: '𝒜' },
    { key: [65, 115, 115, 105, 103, 110, 59], value: '≔' },
    { key: [65, 116, 105, 108, 100, 101, 59], value: 'Ã' },
    { key: [65, 117, 109, 108, 59], value: 'Ä' },
    { key: [66, 97, 99, 107, 115, 108, 97, 115, 104, 59], value: '∖' },
    { key: [66, 97, 114, 118, 59], value: '⫧' },
    { key: [66, 97, 114, 119, 101, 100, 59], value: '⌆' },
    { key: [66, 99, 121, 59], value: 'Б' },
    { key: [66, 101, 99, 97, 117, 115, 101, 59], value: '∵' },
    { key: [66, 101, 114, 110, 111, 117, 108, 108, 105, 115, 59], value: 'ℬ' },
    { key: [66, 101, 116, 97, 59], value: 'Β' },
    { key: [66, 102, 114, 59], value: '𝔅' },
    { key: [66, 111, 112, 102, 59], value: '𝔹' },
    { key: [66, 114, 101, 118, 101, 59], value: '˘' },
    { key: [66, 115, 99, 114, 59], value: 'ℬ' },
    { key: [66, 117, 109, 112, 101, 113, 59], value: '≎' },
    { key: [67, 72, 99, 121, 59], value: 'Ч' },
    { key: [67, 79, 80, 89, 59], value: '©' },
    { key: [67, 97, 99, 117, 116, 101, 59], value: 'Ć' },
    { key: [67, 97, 112, 59], value: '⋒' },
    { key: [67, 97, 112, 105, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59], value: 'ⅅ' },
    { key: [67, 97, 121, 108, 101, 121, 115, 59], value: 'ℭ' },
    { key: [67, 99, 97, 114, 111, 110, 59], value: 'Č' },
    { key: [67, 99, 101, 100, 105, 108, 59], value: 'Ç' },
    { key: [67, 99, 105, 114, 99, 59], value: 'Ĉ' },
    { key: [67, 99, 111, 110, 105, 110, 116, 59], value: '∰' },
    { key: [67, 100, 111, 116, 59], value: 'Ċ' },
    { key: [67, 101, 100, 105, 108, 108, 97, 59], value: '¸' },
    { key: [67, 101, 110, 116, 101, 114, 68, 111, 116, 59], value: '·' },
    { key: [67, 102, 114, 59], value: 'ℭ' },
    { key: [67, 104, 105, 59], value: 'Χ' },
    { key: [67, 105, 114, 99, 108, 101, 68, 111, 116, 59], value: '⊙' },
    { key: [67, 105, 114, 99, 108, 101, 77, 105, 110, 117, 115, 59], value: '⊖' },
    { key: [67, 105, 114, 99, 108, 101, 80, 108, 117, 115, 59], value: '⊕' },
    { key: [67, 105, 114, 99, 108, 101, 84, 105, 109, 101, 115, 59], value: '⊗' },
    { key: [67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59], value: '∲' },
    { key: [67, 108, 111, 115, 101, 67, 117, 114, 108, 121, 68, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59], value: '”' },
    { key: [67, 108, 111, 115, 101, 67, 117, 114, 108, 121, 81, 117, 111, 116, 101, 59], value: '’' },
    { key: [67, 111, 108, 111, 110, 59], value: '∷' },
    { key: [67, 111, 108, 111, 110, 101, 59], value: '⩴' },
    { key: [67, 111, 110, 103, 114, 117, 101, 110, 116, 59], value: '≡' },
    { key: [67, 111, 110, 105, 110, 116, 59], value: '∯' },
    { key: [67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59], value: '∮' },
    { key: [67, 111, 112, 102, 59], value: 'ℂ' },
    { key: [67, 111, 112, 114, 111, 100, 117, 99, 116, 59], value: '∐' },
    { key: [67, 111, 117, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59], value: '∳' },
    { key: [67, 114, 111, 115, 115, 59], value: '⨯' },
    { key: [67, 115, 99, 114, 59], value: '𝒞' },
    { key: [67, 117, 112, 59], value: '⋓' },
    { key: [67, 117, 112, 67, 97, 112, 59], value: '≍' },
    { key: [68, 68, 59], value: 'ⅅ' },
    { key: [68, 68, 111, 116, 114, 97, 104, 100, 59], value: '⤑' },
    { key: [68, 74, 99, 121, 59], value: 'Ђ' },
    { key: [68, 83, 99, 121, 59], value: 'Ѕ' },
    { key: [68, 90, 99, 121, 59], value: 'Џ' },
    { key: [68, 97, 103, 103, 101, 114, 59], value: '‡' },
    { key: [68, 97, 114, 114, 59], value: '↡' },
    { key: [68, 97, 115, 104, 118, 59], value: '⫤' },
    { key: [68, 99, 97, 114, 111, 110, 59], value: 'Ď' },
    { key: [68, 99, 121, 59], value: 'Д' },
    { key: [68, 101, 108, 59], value: '∇' },
    { key: [68, 101, 108, 116, 97, 59], value: 'Δ' },
    { key: [68, 102, 114, 59], value: '𝔇' },
    { key: [68, 105, 97, 99, 114, 105, 116, 105, 99, 97, 108, 65, 99, 117, 116, 101, 59], value: '´' },
    { key: [68, 105, 97, 99, 114, 105, 116, 105, 99, 97, 108, 68, 111, 116, 59], value: '˙' },
    { key: [68, 105, 97, 99, 114, 105, 116, 105, 99, 97, 108, 68, 111, 117, 98, 108, 101, 65, 99, 117, 116, 101, 59], value: '˝' },
    { key: [68, 105, 97, 99, 114, 105, 116, 105, 99, 97, 108, 71, 114, 97, 118, 101, 59], value: '`' },
    { key: [68, 105, 97, 99, 114, 105, 116, 105, 99, 97, 108, 84, 105, 108, 100, 101, 59], value: '˜' },
    { key: [68, 105, 97, 109, 111, 110, 100, 59], value: '⋄' },
    { key: [68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59], value: 'ⅆ' },
    { key: [68, 111, 112, 102, 59], value: '𝔻' },
    { key: [68, 111, 116, 59], value: '¨' },
    { key: [68, 111, 116, 68, 111, 116, 59], value: '⃜' },
    { key: [68, 111, 116, 69, 113, 117, 97, 108, 59], value: '≐' },
    { key: [68, 111, 117, 98, 108, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59], value: '∯' },
    { key: [68, 111, 117, 98, 108, 101, 68, 111, 116, 59], value: '¨' },
    { key: [68, 111, 117, 98, 108, 101, 68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '⇓' },
    { key: [68, 111, 117, 98, 108, 101, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '⇐' },
    { key: [68, 111, 117, 98, 108, 101, 76, 101, 102, 116, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⇔' },
    { key: [68, 111, 117, 98, 108, 101, 76, 101, 102, 116, 84, 101, 101, 59], value: '⫤' },
    { key: [68, 111, 117, 98, 108, 101, 76, 111, 110, 103, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '⟸' },
    { key: [68, 111, 117, 98, 108, 101, 76, 111, 110, 103, 76, 101, 102, 116, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⟺' },
    { key: [68, 111, 117, 98, 108, 101, 76, 111, 110, 103, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⟹' },
    { key: [68, 111, 117, 98, 108, 101, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⇒' },
    { key: [68, 111, 117, 98, 108, 101, 82, 105, 103, 104, 116, 84, 101, 101, 59], value: '⊨' },
    { key: [68, 111, 117, 98, 108, 101, 85, 112, 65, 114, 114, 111, 119, 59], value: '⇑' },
    { key: [68, 111, 117, 98, 108, 101, 85, 112, 68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '⇕' },
    { key: [68, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59], value: '∥' },
    { key: [68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '↓' },
    { key: [68, 111, 119, 110, 65, 114, 114, 111, 119, 66, 97, 114, 59], value: '⤓' },
    { key: [68, 111, 119, 110, 65, 114, 114, 111, 119, 85, 112, 65, 114, 114, 111, 119, 59], value: '⇵' },
    { key: [68, 111, 119, 110, 66, 114, 101, 118, 101, 59], value: '̑' },
    { key: [68, 111, 119, 110, 76, 101, 102, 116, 82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59], value: '⥐' },
    { key: [68, 111, 119, 110, 76, 101, 102, 116, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥞' },
    { key: [68, 111, 119, 110, 76, 101, 102, 116, 86, 101, 99, 116, 111, 114, 59], value: '↽' },
    { key: [68, 111, 119, 110, 76, 101, 102, 116, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥖' },
    { key: [68, 111, 119, 110, 82, 105, 103, 104, 116, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥟' },
    { key: [68, 111, 119, 110, 82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59], value: '⇁' },
    { key: [68, 111, 119, 110, 82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥗' },
    { key: [68, 111, 119, 110, 84, 101, 101, 59], value: '⊤' },
    { key: [68, 111, 119, 110, 84, 101, 101, 65, 114, 114, 111, 119, 59], value: '↧' },
    { key: [68, 111, 119, 110, 97, 114, 114, 111, 119, 59], value: '⇓' },
    { key: [68, 115, 99, 114, 59], value: '𝒟' },
    { key: [68, 115, 116, 114, 111, 107, 59], value: 'Đ' },
    { key: [69, 78, 71, 59], value: 'Ŋ' },
    { key: [69, 84, 72, 59], value: 'Ð' },
    { key: [69, 97, 99, 117, 116, 101, 59], value: 'É' },
    { key: [69, 99, 97, 114, 111, 110, 59], value: 'Ě' },
    { key: [69, 99, 105, 114, 99, 59], value: 'Ê' },
    { key: [69, 99, 121, 59], value: 'Э' },
    { key: [69, 100, 111, 116, 59], value: 'Ė' },
    { key: [69, 102, 114, 59], value: '𝔈' },
    { key: [69, 103, 114, 97, 118, 101, 59], value: 'È' },
    { key: [69, 108, 101, 109, 101, 110, 116, 59], value: '∈' },
    { key: [69, 109, 97, 99, 114, 59], value: 'Ē' },
    { key: [69, 109, 112, 116, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59], value: '◻' },
    { key: [69, 109, 112, 116, 121, 86, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59], value: '▫' },
    { key: [69, 111, 103, 111, 110, 59], value: 'Ę' },
    { key: [69, 111, 112, 102, 59], value: '𝔼' },
    { key: [69, 112, 115, 105, 108, 111, 110, 59], value: 'Ε' },
    { key: [69, 113, 117, 97, 108, 59], value: '⩵' },
    { key: [69, 113, 117, 97, 108, 84, 105, 108, 100, 101, 59], value: '≂' },
    { key: [69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59], value: '⇌' },
    { key: [69, 115, 99, 114, 59], value: 'ℰ' },
    { key: [69, 115, 105, 109, 59], value: '⩳' },
    { key: [69, 116, 97, 59], value: 'Η' },
    { key: [69, 117, 109, 108, 59], value: 'Ë' },
    { key: [69, 120, 105, 115, 116, 115, 59], value: '∃' },
    { key: [69, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59], value: 'ⅇ' },
    { key: [70, 99, 121, 59], value: 'Ф' },
    { key: [70, 102, 114, 59], value: '𝔉' },
    { key: [70, 105, 108, 108, 101, 100, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59], value: '◼' },
    { key: [70, 105, 108, 108, 101, 100, 86, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59], value: '▪' },
    { key: [70, 111, 112, 102, 59], value: '𝔽' },
    { key: [70, 111, 114, 65, 108, 108, 59], value: '∀' },
    { key: [70, 111, 117, 114, 105, 101, 114, 116, 114, 102, 59], value: 'ℱ' },
    { key: [70, 115, 99, 114, 59], value: 'ℱ' },
    { key: [71, 74, 99, 121, 59], value: 'Ѓ' },
    { key: [71, 84, 59], value: '>' },
    { key: [71, 97, 109, 109, 97, 59], value: 'Γ' },
    { key: [71, 97, 109, 109, 97, 100, 59], value: 'Ϝ' },
    { key: [71, 98, 114, 101, 118, 101, 59], value: 'Ğ' },
    { key: [71, 99, 101, 100, 105, 108, 59], value: 'Ģ' },
    { key: [71, 99, 105, 114, 99, 59], value: 'Ĝ' },
    { key: [71, 99, 121, 59], value: 'Г' },
    { key: [71, 100, 111, 116, 59], value: 'Ġ' },
    { key: [71, 102, 114, 59], value: '𝔊' },
    { key: [71, 103, 59], value: '⋙' },
    { key: [71, 111, 112, 102, 59], value: '𝔾' },
    { key: [71, 114, 101, 97, 116, 101, 114, 69, 113, 117, 97, 108, 59], value: '≥' },
    { key: [71, 114, 101, 97, 116, 101, 114, 69, 113, 117, 97, 108, 76, 101, 115, 115, 59], value: '⋛' },
    { key: [71, 114, 101, 97, 116, 101, 114, 70, 117, 108, 108, 69, 113, 117, 97, 108, 59], value: '≧' },
    { key: [71, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59], value: '⪢' },
    { key: [71, 114, 101, 97, 116, 101, 114, 76, 101, 115, 115, 59], value: '≷' },
    { key: [71, 114, 101, 97, 116, 101, 114, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⩾' },
    { key: [71, 114, 101, 97, 116, 101, 114, 84, 105, 108, 100, 101, 59], value: '≳' },
    { key: [71, 115, 99, 114, 59], value: '𝒢' },
    { key: [71, 116, 59], value: '≫' },
    { key: [72, 65, 82, 68, 99, 121, 59], value: 'Ъ' },
    { key: [72, 97, 99, 101, 107, 59], value: 'ˇ' },
    { key: [72, 97, 116, 59], value: '^' },
    { key: [72, 99, 105, 114, 99, 59], value: 'Ĥ' },
    { key: [72, 102, 114, 59], value: 'ℌ' },
    { key: [72, 105, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59], value: 'ℋ' },
    { key: [72, 111, 112, 102, 59], value: 'ℍ' },
    { key: [72, 111, 114, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59], value: '─' },
    { key: [72, 115, 99, 114, 59], value: 'ℋ' },
    { key: [72, 115, 116, 114, 111, 107, 59], value: 'Ħ' },
    { key: [72, 117, 109, 112, 68, 111, 119, 110, 72, 117, 109, 112, 59], value: '≎' },
    { key: [72, 117, 109, 112, 69, 113, 117, 97, 108, 59], value: '≏' },
    { key: [73, 69, 99, 121, 59], value: 'Е' },
    { key: [73, 74, 108, 105, 103, 59], value: 'Ĳ' },
    { key: [73, 79, 99, 121, 59], value: 'Ё' },
    { key: [73, 97, 99, 117, 116, 101, 59], value: 'Í' },
    { key: [73, 99, 105, 114, 99, 59], value: 'Î' },
    { key: [73, 99, 121, 59], value: 'И' },
    { key: [73, 100, 111, 116, 59], value: 'İ' },
    { key: [73, 102, 114, 59], value: 'ℑ' },
    { key: [73, 103, 114, 97, 118, 101, 59], value: 'Ì' },
    { key: [73, 109, 59], value: 'ℑ' },
    { key: [73, 109, 97, 99, 114, 59], value: 'Ī' },
    { key: [73, 109, 97, 103, 105, 110, 97, 114, 121, 73, 59], value: 'ⅈ' },
    { key: [73, 109, 112, 108, 105, 101, 115, 59], value: '⇒' },
    { key: [73, 110, 116, 59], value: '∬' },
    { key: [73, 110, 116, 101, 103, 114, 97, 108, 59], value: '∫' },
    { key: [73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59], value: '⋂' },
    { key: [73, 110, 118, 105, 115, 105, 98, 108, 101, 67, 111, 109, 109, 97, 59], value: '⁣' },
    { key: [73, 110, 118, 105, 115, 105, 98, 108, 101, 84, 105, 109, 101, 115, 59], value: '⁢' },
    { key: [73, 111, 103, 111, 110, 59], value: 'Į' },
    { key: [73, 111, 112, 102, 59], value: '𝕀' },
    { key: [73, 111, 116, 97, 59], value: 'Ι' },
    { key: [73, 115, 99, 114, 59], value: 'ℐ' },
    { key: [73, 116, 105, 108, 100, 101, 59], value: 'Ĩ' },
    { key: [73, 117, 107, 99, 121, 59], value: 'І' },
    { key: [73, 117, 109, 108, 59], value: 'Ï' },
    { key: [74, 99, 105, 114, 99, 59], value: 'Ĵ' },
    { key: [74, 99, 121, 59], value: 'Й' },
    { key: [74, 102, 114, 59], value: '𝔍' },
    { key: [74, 111, 112, 102, 59], value: '𝕁' },
    { key: [74, 115, 99, 114, 59], value: '𝒥' },
    { key: [74, 115, 101, 114, 99, 121, 59], value: 'Ј' },
    { key: [74, 117, 107, 99, 121, 59], value: 'Є' },
    { key: [75, 72, 99, 121, 59], value: 'Х' },
    { key: [75, 74, 99, 121, 59], value: 'Ќ' },
    { key: [75, 97, 112, 112, 97, 59], value: 'Κ' },
    { key: [75, 99, 101, 100, 105, 108, 59], value: 'Ķ' },
    { key: [75, 99, 121, 59], value: 'К' },
    { key: [75, 102, 114, 59], value: '𝔎' },
    { key: [75, 111, 112, 102, 59], value: '𝕂' },
    { key: [75, 115, 99, 114, 59], value: '𝒦' },
    { key: [76, 74, 99, 121, 59], value: 'Љ' },
    { key: [76, 84, 59], value: '<' },
    { key: [76, 97, 99, 117, 116, 101, 59], value: 'Ĺ' },
    { key: [76, 97, 109, 98, 100, 97, 59], value: 'Λ' },
    { key: [76, 97, 110, 103, 59], value: '⟪' },
    { key: [76, 97, 112, 108, 97, 99, 101, 116, 114, 102, 59], value: 'ℒ' },
    { key: [76, 97, 114, 114, 59], value: '↞' },
    { key: [76, 99, 97, 114, 111, 110, 59], value: 'Ľ' },
    { key: [76, 99, 101, 100, 105, 108, 59], value: 'Ļ' },
    { key: [76, 99, 121, 59], value: 'Л' },
    { key: [76, 101, 102, 116, 65, 110, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59], value: '⟨' },
    { key: [76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '←' },
    { key: [76, 101, 102, 116, 65, 114, 114, 111, 119, 66, 97, 114, 59], value: '⇤' },
    { key: [76, 101, 102, 116, 65, 114, 114, 111, 119, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⇆' },
    { key: [76, 101, 102, 116, 67, 101, 105, 108, 105, 110, 103, 59], value: '⌈' },
    { key: [76, 101, 102, 116, 68, 111, 117, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59], value: '⟦' },
    { key: [76, 101, 102, 116, 68, 111, 119, 110, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥡' },
    { key: [76, 101, 102, 116, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59], value: '⇃' },
    { key: [76, 101, 102, 116, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥙' },
    { key: [76, 101, 102, 116, 70, 108, 111, 111, 114, 59], value: '⌊' },
    { key: [76, 101, 102, 116, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '↔' },
    { key: [76, 101, 102, 116, 82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59], value: '⥎' },
    { key: [76, 101, 102, 116, 84, 101, 101, 59], value: '⊣' },
    { key: [76, 101, 102, 116, 84, 101, 101, 65, 114, 114, 111, 119, 59], value: '↤' },
    { key: [76, 101, 102, 116, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥚' },
    { key: [76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 59], value: '⊲' },
    { key: [76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 66, 97, 114, 59], value: '⧏' },
    { key: [76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 69, 113, 117, 97, 108, 59], value: '⊴' },
    { key: [76, 101, 102, 116, 85, 112, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59], value: '⥑' },
    { key: [76, 101, 102, 116, 85, 112, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥠' },
    { key: [76, 101, 102, 116, 85, 112, 86, 101, 99, 116, 111, 114, 59], value: '↿' },
    { key: [76, 101, 102, 116, 85, 112, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥘' },
    { key: [76, 101, 102, 116, 86, 101, 99, 116, 111, 114, 59], value: '↼' },
    { key: [76, 101, 102, 116, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥒' },
    { key: [76, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '⇐' },
    { key: [76, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⇔' },
    { key: [76, 101, 115, 115, 69, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59], value: '⋚' },
    { key: [76, 101, 115, 115, 70, 117, 108, 108, 69, 113, 117, 97, 108, 59], value: '≦' },
    { key: [76, 101, 115, 115, 71, 114, 101, 97, 116, 101, 114, 59], value: '≶' },
    { key: [76, 101, 115, 115, 76, 101, 115, 115, 59], value: '⪡' },
    { key: [76, 101, 115, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⩽' },
    { key: [76, 101, 115, 115, 84, 105, 108, 100, 101, 59], value: '≲' },
    { key: [76, 102, 114, 59], value: '𝔏' },
    { key: [76, 108, 59], value: '⋘' },
    { key: [76, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '⇚' },
    { key: [76, 109, 105, 100, 111, 116, 59], value: 'Ŀ' },
    { key: [76, 111, 110, 103, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '⟵' },
    { key: [76, 111, 110, 103, 76, 101, 102, 116, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⟷' },
    { key: [76, 111, 110, 103, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '⟶' },
    { key: [76, 111, 110, 103, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '⟸' },
    { key: [76, 111, 110, 103, 108, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⟺' },
    { key: [76, 111, 110, 103, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⟹' },
    { key: [76, 111, 112, 102, 59], value: '𝕃' },
    { key: [76, 111, 119, 101, 114, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '↙' },
    { key: [76, 111, 119, 101, 114, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '↘' },
    { key: [76, 115, 99, 114, 59], value: 'ℒ' },
    { key: [76, 115, 104, 59], value: '↰' },
    { key: [76, 115, 116, 114, 111, 107, 59], value: 'Ł' },
    { key: [76, 116, 59], value: '≪' },
    { key: [77, 97, 112, 59], value: '⤅' },
    { key: [77, 99, 121, 59], value: 'М' },
    { key: [77, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59], value: ' ' },
    { key: [77, 101, 108, 108, 105, 110, 116, 114, 102, 59], value: 'ℳ' },
    { key: [77, 102, 114, 59], value: '𝔐' },
    { key: [77, 105, 110, 117, 115, 80, 108, 117, 115, 59], value: '∓' },
    { key: [77, 111, 112, 102, 59], value: '𝕄' },
    { key: [77, 115, 99, 114, 59], value: 'ℳ' },
    { key: [77, 117, 59], value: 'Μ' },
    { key: [78, 74, 99, 121, 59], value: 'Њ' },
    { key: [78, 97, 99, 117, 116, 101, 59], value: 'Ń' },
    { key: [78, 99, 97, 114, 111, 110, 59], value: 'Ň' },
    { key: [78, 99, 101, 100, 105, 108, 59], value: 'Ņ' },
    { key: [78, 99, 121, 59], value: 'Н' },
    { key: [78, 101, 103, 97, 116, 105, 118, 101, 77, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59], value: '​' },
    { key: [78, 101, 103, 97, 116, 105, 118, 101, 84, 104, 105, 99, 107, 83, 112, 97, 99, 101, 59], value: '​' },
    { key: [78, 101, 103, 97, 116, 105, 118, 101, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59], value: '​' },
    { key: [78, 101, 103, 97, 116, 105, 118, 101, 86, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59], value: '​' },
    { key: [78, 101, 115, 116, 101, 100, 71, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59], value: '≫' },
    { key: [78, 101, 115, 116, 101, 100, 76, 101, 115, 115, 76, 101, 115, 115, 59], value: '≪' },
    { key: [78, 101, 119, 76, 105, 110, 101, 59], value: '\n' },
    { key: [78, 102, 114, 59], value: '𝔑' },
    { key: [78, 111, 66, 114, 101, 97, 107, 59], value: '⁠' },
    { key: [78, 111, 110, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59], value: ' ' },
    { key: [78, 111, 112, 102, 59], value: 'ℕ' },
    { key: [78, 111, 116, 59], value: '⫬' },
    { key: [78, 111, 116, 67, 111, 110, 103, 114, 117, 101, 110, 116, 59], value: '≢' },
    { key: [78, 111, 116, 67, 117, 112, 67, 97, 112, 59], value: '≭' },
    { key: [78, 111, 116, 68, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59], value: '∦' },
    { key: [78, 111, 116, 69, 108, 101, 109, 101, 110, 116, 59], value: '∉' },
    { key: [78, 111, 116, 69, 113, 117, 97, 108, 59], value: '≠' },
    { key: [78, 111, 116, 69, 113, 117, 97, 108, 84, 105, 108, 100, 101, 59], value: '≂̸' },
    { key: [78, 111, 116, 69, 120, 105, 115, 116, 115, 59], value: '∄' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 59], value: '≯' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 69, 113, 117, 97, 108, 59], value: '≱' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 70, 117, 108, 108, 69, 113, 117, 97, 108, 59], value: '≧̸' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59], value: '≫̸' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 76, 101, 115, 115, 59], value: '≹' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⩾̸' },
    { key: [78, 111, 116, 71, 114, 101, 97, 116, 101, 114, 84, 105, 108, 100, 101, 59], value: '≵' },
    { key: [78, 111, 116, 72, 117, 109, 112, 68, 111, 119, 110, 72, 117, 109, 112, 59], value: '≎̸' },
    { key: [78, 111, 116, 72, 117, 109, 112, 69, 113, 117, 97, 108, 59], value: '≏̸' },
    { key: [78, 111, 116, 76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 59], value: '⋪' },
    { key: [78, 111, 116, 76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 66, 97, 114, 59], value: '⧏̸' },
    { key: [78, 111, 116, 76, 101, 102, 116, 84, 114, 105, 97, 110, 103, 108, 101, 69, 113, 117, 97, 108, 59], value: '⋬' },
    { key: [78, 111, 116, 76, 101, 115, 115, 59], value: '≮' },
    { key: [78, 111, 116, 76, 101, 115, 115, 69, 113, 117, 97, 108, 59], value: '≰' },
    { key: [78, 111, 116, 76, 101, 115, 115, 71, 114, 101, 97, 116, 101, 114, 59], value: '≸' },
    { key: [78, 111, 116, 76, 101, 115, 115, 76, 101, 115, 115, 59], value: '≪̸' },
    { key: [78, 111, 116, 76, 101, 115, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⩽̸' },
    { key: [78, 111, 116, 76, 101, 115, 115, 84, 105, 108, 100, 101, 59], value: '≴' },
    { key: [78, 111, 116, 78, 101, 115, 116, 101, 100, 71, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59], value: '⪢̸' },
    { key: [78, 111, 116, 78, 101, 115, 116, 101, 100, 76, 101, 115, 115, 76, 101, 115, 115, 59], value: '⪡̸' },
    { key: [78, 111, 116, 80, 114, 101, 99, 101, 100, 101, 115, 59], value: '⊀' },
    { key: [78, 111, 116, 80, 114, 101, 99, 101, 100, 101, 115, 69, 113, 117, 97, 108, 59], value: '⪯̸' },
    { key: [78, 111, 116, 80, 114, 101, 99, 101, 100, 101, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⋠' },
    { key: [78, 111, 116, 82, 101, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59], value: '∌' },
    { key: [78, 111, 116, 82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 59], value: '⋫' },
    { key: [78, 111, 116, 82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 66, 97, 114, 59], value: '⧐̸' },
    { key: [78, 111, 116, 82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 69, 113, 117, 97, 108, 59], value: '⋭' },
    { key: [78, 111, 116, 83, 113, 117, 97, 114, 101, 83, 117, 98, 115, 101, 116, 59], value: '⊏̸' },
    { key: [78, 111, 116, 83, 113, 117, 97, 114, 101, 83, 117, 98, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⋢' },
    { key: [78, 111, 116, 83, 113, 117, 97, 114, 101, 83, 117, 112, 101, 114, 115, 101, 116, 59], value: '⊐̸' },
    { key: [78, 111, 116, 83, 113, 117, 97, 114, 101, 83, 117, 112, 101, 114, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⋣' },
    { key: [78, 111, 116, 83, 117, 98, 115, 101, 116, 59], value: '⊂⃒' },
    { key: [78, 111, 116, 83, 117, 98, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊈' },
    { key: [78, 111, 116, 83, 117, 99, 99, 101, 101, 100, 115, 59], value: '⊁' },
    { key: [78, 111, 116, 83, 117, 99, 99, 101, 101, 100, 115, 69, 113, 117, 97, 108, 59], value: '⪰̸' },
    { key: [78, 111, 116, 83, 117, 99, 99, 101, 101, 100, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '⋡' },
    { key: [78, 111, 116, 83, 117, 99, 99, 101, 101, 100, 115, 84, 105, 108, 100, 101, 59], value: '≿̸' },
    { key: [78, 111, 116, 83, 117, 112, 101, 114, 115, 101, 116, 59], value: '⊃⃒' },
    { key: [78, 111, 116, 83, 117, 112, 101, 114, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊉' },
    { key: [78, 111, 116, 84, 105, 108, 100, 101, 59], value: '≁' },
    { key: [78, 111, 116, 84, 105, 108, 100, 101, 69, 113, 117, 97, 108, 59], value: '≄' },
    { key: [78, 111, 116, 84, 105, 108, 100, 101, 70, 117, 108, 108, 69, 113, 117, 97, 108, 59], value: '≇' },
    { key: [78, 111, 116, 84, 105, 108, 100, 101, 84, 105, 108, 100, 101, 59], value: '≉' },
    { key: [78, 111, 116, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59], value: '∤' },
    { key: [78, 115, 99, 114, 59], value: '𝒩' },
    { key: [78, 116, 105, 108, 100, 101, 59], value: 'Ñ' },
    { key: [78, 117, 59], value: 'Ν' },
    { key: [79, 69, 108, 105, 103, 59], value: 'Œ' },
    { key: [79, 97, 99, 117, 116, 101, 59], value: 'Ó' },
    { key: [79, 99, 105, 114, 99, 59], value: 'Ô' },
    { key: [79, 99, 121, 59], value: 'О' },
    { key: [79, 100, 98, 108, 97, 99, 59], value: 'Ő' },
    { key: [79, 102, 114, 59], value: '𝔒' },
    { key: [79, 103, 114, 97, 118, 101, 59], value: 'Ò' },
    { key: [79, 109, 97, 99, 114, 59], value: 'Ō' },
    { key: [79, 109, 101, 103, 97, 59], value: 'Ω' },
    { key: [79, 109, 105, 99, 114, 111, 110, 59], value: 'Ο' },
    { key: [79, 111, 112, 102, 59], value: '𝕆' },
    { key: [79, 112, 101, 110, 67, 117, 114, 108, 121, 68, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59], value: '“' },
    { key: [79, 112, 101, 110, 67, 117, 114, 108, 121, 81, 117, 111, 116, 101, 59], value: '‘' },
    { key: [79, 114, 59], value: '⩔' },
    { key: [79, 115, 99, 114, 59], value: '𝒪' },
    { key: [79, 115, 108, 97, 115, 104, 59], value: 'Ø' },
    { key: [79, 116, 105, 108, 100, 101, 59], value: 'Õ' },
    { key: [79, 116, 105, 109, 101, 115, 59], value: '⨷' },
    { key: [79, 117, 109, 108, 59], value: 'Ö' },
    { key: [79, 118, 101, 114, 66, 97, 114, 59], value: '‾' },
    { key: [79, 118, 101, 114, 66, 114, 97, 99, 101, 59], value: '⏞' },
    { key: [79, 118, 101, 114, 66, 114, 97, 99, 107, 101, 116, 59], value: '⎴' },
    { key: [79, 118, 101, 114, 80, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59], value: '⏜' },
    { key: [80, 97, 114, 116, 105, 97, 108, 68, 59], value: '∂' },
    { key: [80, 99, 121, 59], value: 'П' },
    { key: [80, 102, 114, 59], value: '𝔓' },
    { key: [80, 104, 105, 59], value: 'Φ' },
    { key: [80, 105, 59], value: 'Π' },
    { key: [80, 108, 117, 115, 77, 105, 110, 117, 115, 59], value: '±' },
    { key: [80, 111, 105, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59], value: 'ℌ' },
    { key: [80, 111, 112, 102, 59], value: 'ℙ' },
    { key: [80, 114, 59], value: '⪻' },
    { key: [80, 114, 101, 99, 101, 100, 101, 115, 59], value: '≺' },
    { key: [80, 114, 101, 99, 101, 100, 101, 115, 69, 113, 117, 97, 108, 59], value: '⪯' },
    { key: [80, 114, 101, 99, 101, 100, 101, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '≼' },
    { key: [80, 114, 101, 99, 101, 100, 101, 115, 84, 105, 108, 100, 101, 59], value: '≾' },
    { key: [80, 114, 105, 109, 101, 59], value: '″' },
    { key: [80, 114, 111, 100, 117, 99, 116, 59], value: '∏' },
    { key: [80, 114, 111, 112, 111, 114, 116, 105, 111, 110, 59], value: '∷' },
    { key: [80, 114, 111, 112, 111, 114, 116, 105, 111, 110, 97, 108, 59], value: '∝' },
    { key: [80, 115, 99, 114, 59], value: '𝒫' },
    { key: [80, 115, 105, 59], value: 'Ψ' },
    { key: [81, 85, 79, 84, 59], value: '"' },
    { key: [81, 102, 114, 59], value: '𝔔' },
    { key: [81, 111, 112, 102, 59], value: 'ℚ' },
    { key: [81, 115, 99, 114, 59], value: '𝒬' },
    { key: [82, 66, 97, 114, 114, 59], value: '⤐' },
    { key: [82, 69, 71, 59], value: '®' },
    { key: [82, 97, 99, 117, 116, 101, 59], value: 'Ŕ' },
    { key: [82, 97, 110, 103, 59], value: '⟫' },
    { key: [82, 97, 114, 114, 59], value: '↠' },
    { key: [82, 97, 114, 114, 116, 108, 59], value: '⤖' },
    { key: [82, 99, 97, 114, 111, 110, 59], value: 'Ř' },
    { key: [82, 99, 101, 100, 105, 108, 59], value: 'Ŗ' },
    { key: [82, 99, 121, 59], value: 'Р' },
    { key: [82, 101, 59], value: 'ℜ' },
    { key: [82, 101, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59], value: '∋' },
    { key: [82, 101, 118, 101, 114, 115, 101, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59], value: '⇋' },
    { key: [82, 101, 118, 101, 114, 115, 101, 85, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59], value: '⥯' },
    { key: [82, 102, 114, 59], value: 'ℜ' },
    { key: [82, 104, 111, 59], value: 'Ρ' },
    { key: [82, 105, 103, 104, 116, 65, 110, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59], value: '⟩' },
    { key: [82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '→' },
    { key: [82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 66, 97, 114, 59], value: '⇥' },
    { key: [82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '⇄' },
    { key: [82, 105, 103, 104, 116, 67, 101, 105, 108, 105, 110, 103, 59], value: '⌉' },
    { key: [82, 105, 103, 104, 116, 68, 111, 117, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59], value: '⟧' },
    { key: [82, 105, 103, 104, 116, 68, 111, 119, 110, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥝' },
    { key: [82, 105, 103, 104, 116, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59], value: '⇂' },
    { key: [82, 105, 103, 104, 116, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥕' },
    { key: [82, 105, 103, 104, 116, 70, 108, 111, 111, 114, 59], value: '⌋' },
    { key: [82, 105, 103, 104, 116, 84, 101, 101, 59], value: '⊢' },
    { key: [82, 105, 103, 104, 116, 84, 101, 101, 65, 114, 114, 111, 119, 59], value: '↦' },
    { key: [82, 105, 103, 104, 116, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥛' },
    { key: [82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 59], value: '⊳' },
    { key: [82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 66, 97, 114, 59], value: '⧐' },
    { key: [82, 105, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 69, 113, 117, 97, 108, 59], value: '⊵' },
    { key: [82, 105, 103, 104, 116, 85, 112, 68, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59], value: '⥏' },
    { key: [82, 105, 103, 104, 116, 85, 112, 84, 101, 101, 86, 101, 99, 116, 111, 114, 59], value: '⥜' },
    { key: [82, 105, 103, 104, 116, 85, 112, 86, 101, 99, 116, 111, 114, 59], value: '↾' },
    { key: [82, 105, 103, 104, 116, 85, 112, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥔' },
    { key: [82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59], value: '⇀' },
    { key: [82, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 66, 97, 114, 59], value: '⥓' },
    { key: [82, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⇒' },
    { key: [82, 111, 112, 102, 59], value: 'ℝ' },
    { key: [82, 111, 117, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59], value: '⥰' },
    { key: [82, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⇛' },
    { key: [82, 115, 99, 114, 59], value: 'ℛ' },
    { key: [82, 115, 104, 59], value: '↱' },
    { key: [82, 117, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59], value: '⧴' },
    { key: [83, 72, 67, 72, 99, 121, 59], value: 'Щ' },
    { key: [83, 72, 99, 121, 59], value: 'Ш' },
    { key: [83, 79, 70, 84, 99, 121, 59], value: 'Ь' },
    { key: [83, 97, 99, 117, 116, 101, 59], value: 'Ś' },
    { key: [83, 99, 59], value: '⪼' },
    { key: [83, 99, 97, 114, 111, 110, 59], value: 'Š' },
    { key: [83, 99, 101, 100, 105, 108, 59], value: 'Ş' },
    { key: [83, 99, 105, 114, 99, 59], value: 'Ŝ' },
    { key: [83, 99, 121, 59], value: 'С' },
    { key: [83, 102, 114, 59], value: '𝔖' },
    { key: [83, 104, 111, 114, 116, 68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '↓' },
    { key: [83, 104, 111, 114, 116, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '←' },
    { key: [83, 104, 111, 114, 116, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '→' },
    { key: [83, 104, 111, 114, 116, 85, 112, 65, 114, 114, 111, 119, 59], value: '↑' },
    { key: [83, 105, 103, 109, 97, 59], value: 'Σ' },
    { key: [83, 109, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59], value: '∘' },
    { key: [83, 111, 112, 102, 59], value: '𝕊' },
    { key: [83, 113, 114, 116, 59], value: '√' },
    { key: [83, 113, 117, 97, 114, 101, 59], value: '□' },
    { key: [83, 113, 117, 97, 114, 101, 73, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59], value: '⊓' },
    { key: [83, 113, 117, 97, 114, 101, 83, 117, 98, 115, 101, 116, 59], value: '⊏' },
    { key: [83, 113, 117, 97, 114, 101, 83, 117, 98, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊑' },
    { key: [83, 113, 117, 97, 114, 101, 83, 117, 112, 101, 114, 115, 101, 116, 59], value: '⊐' },
    { key: [83, 113, 117, 97, 114, 101, 83, 117, 112, 101, 114, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊒' },
    { key: [83, 113, 117, 97, 114, 101, 85, 110, 105, 111, 110, 59], value: '⊔' },
    { key: [83, 115, 99, 114, 59], value: '𝒮' },
    { key: [83, 116, 97, 114, 59], value: '⋆' },
    { key: [83, 117, 98, 59], value: '⋐' },
    { key: [83, 117, 98, 115, 101, 116, 59], value: '⋐' },
    { key: [83, 117, 98, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊆' },
    { key: [83, 117, 99, 99, 101, 101, 100, 115, 59], value: '≻' },
    { key: [83, 117, 99, 99, 101, 101, 100, 115, 69, 113, 117, 97, 108, 59], value: '⪰' },
    { key: [83, 117, 99, 99, 101, 101, 100, 115, 83, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59], value: '≽' },
    { key: [83, 117, 99, 99, 101, 101, 100, 115, 84, 105, 108, 100, 101, 59], value: '≿' },
    { key: [83, 117, 99, 104, 84, 104, 97, 116, 59], value: '∋' },
    { key: [83, 117, 109, 59], value: '∑' },
    { key: [83, 117, 112, 59], value: '⋑' },
    { key: [83, 117, 112, 101, 114, 115, 101, 116, 59], value: '⊃' },
    { key: [83, 117, 112, 101, 114, 115, 101, 116, 69, 113, 117, 97, 108, 59], value: '⊇' },
    { key: [83, 117, 112, 115, 101, 116, 59], value: '⋑' },
    { key: [84, 72, 79, 82, 78, 59], value: 'Þ' },
    { key: [84, 82, 65, 68, 69, 59], value: '™' },
    { key: [84, 83, 72, 99, 121, 59], value: 'Ћ' },
    { key: [84, 83, 99, 121, 59], value: 'Ц' },
    { key: [84, 97, 98, 59], value: '\t' },
    { key: [84, 97, 117, 59], value: 'Τ' },
    { key: [84, 99, 97, 114, 111, 110, 59], value: 'Ť' },
    { key: [84, 99, 101, 100, 105, 108, 59], value: 'Ţ' },
    { key: [84, 99, 121, 59], value: 'Т' },
    { key: [84, 102, 114, 59], value: '𝔗' },
    { key: [84, 104, 101, 114, 101, 102, 111, 114, 101, 59], value: '∴' },
    { key: [84, 104, 101, 116, 97, 59], value: 'Θ' },
    { key: [84, 104, 105, 99, 107, 83, 112, 97, 99, 101, 59], value: '  ' },
    { key: [84, 104, 105, 110, 83, 112, 97, 99, 101, 59], value: ' ' },
    { key: [84, 105, 108, 100, 101, 59], value: '∼' },
    { key: [84, 105, 108, 100, 101, 69, 113, 117, 97, 108, 59], value: '≃' },
    { key: [84, 105, 108, 100, 101, 70, 117, 108, 108, 69, 113, 117, 97, 108, 59], value: '≅' },
    { key: [84, 105, 108, 100, 101, 84, 105, 108, 100, 101, 59], value: '≈' },
    { key: [84, 111, 112, 102, 59], value: '𝕋' },
    { key: [84, 114, 105, 112, 108, 101, 68, 111, 116, 59], value: '⃛' },
    { key: [84, 115, 99, 114, 59], value: '𝒯' },
    { key: [84, 115, 116, 114, 111, 107, 59], value: 'Ŧ' },
    { key: [85, 97, 99, 117, 116, 101, 59], value: 'Ú' },
    { key: [85, 97, 114, 114, 59], value: '↟' },
    { key: [85, 97, 114, 114, 111, 99, 105, 114, 59], value: '⥉' },
    { key: [85, 98, 114, 99, 121, 59], value: 'Ў' },
    { key: [85, 98, 114, 101, 118, 101, 59], value: 'Ŭ' },
    { key: [85, 99, 105, 114, 99, 59], value: 'Û' },
    { key: [85, 99, 121, 59], value: 'У' },
    { key: [85, 100, 98, 108, 97, 99, 59], value: 'Ű' },
    { key: [85, 102, 114, 59], value: '𝔘' },
    { key: [85, 103, 114, 97, 118, 101, 59], value: 'Ù' },
    { key: [85, 109, 97, 99, 114, 59], value: 'Ū' },
    { key: [85, 110, 100, 101, 114, 66, 97, 114, 59], value: '_' },
    { key: [85, 110, 100, 101, 114, 66, 114, 97, 99, 101, 59], value: '⏟' },
    { key: [85, 110, 100, 101, 114, 66, 114, 97, 99, 107, 101, 116, 59], value: '⎵' },
    { key: [85, 110, 100, 101, 114, 80, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59], value: '⏝' },
    { key: [85, 110, 105, 111, 110, 59], value: '⋃' },
    { key: [85, 110, 105, 111, 110, 80, 108, 117, 115, 59], value: '⊎' },
    { key: [85, 111, 103, 111, 110, 59], value: 'Ų' },
    { key: [85, 111, 112, 102, 59], value: '𝕌' },
    { key: [85, 112, 65, 114, 114, 111, 119, 59], value: '↑' },
    { key: [85, 112, 65, 114, 114, 111, 119, 66, 97, 114, 59], value: '⤒' },
    { key: [85, 112, 65, 114, 114, 111, 119, 68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '⇅' },
    { key: [85, 112, 68, 111, 119, 110, 65, 114, 114, 111, 119, 59], value: '↕' },
    { key: [85, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59], value: '⥮' },
    { key: [85, 112, 84, 101, 101, 59], value: '⊥' },
    { key: [85, 112, 84, 101, 101, 65, 114, 114, 111, 119, 59], value: '↥' },
    { key: [85, 112, 97, 114, 114, 111, 119, 59], value: '⇑' },
    { key: [85, 112, 100, 111, 119, 110, 97, 114, 114, 111, 119, 59], value: '⇕' },
    { key: [85, 112, 112, 101, 114, 76, 101, 102, 116, 65, 114, 114, 111, 119, 59], value: '↖' },
    { key: [85, 112, 112, 101, 114, 82, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59], value: '↗' },
    { key: [85, 112, 115, 105, 59], value: 'ϒ' },
    { key: [85, 112, 115, 105, 108, 111, 110, 59], value: 'Υ' },
    { key: [85, 114, 105, 110, 103, 59], value: 'Ů' },
    { key: [85, 115, 99, 114, 59], value: '𝒰' },
    { key: [85, 116, 105, 108, 100, 101, 59], value: 'Ũ' },
    { key: [85, 117, 109, 108, 59], value: 'Ü' },
    { key: [86, 68, 97, 115, 104, 59], value: '⊫' },
    { key: [86, 98, 97, 114, 59], value: '⫫' },
    { key: [86, 99, 121, 59], value: 'В' },
    { key: [86, 100, 97, 115, 104, 59], value: '⊩' },
    { key: [86, 100, 97, 115, 104, 108, 59], value: '⫦' },
    { key: [86, 101, 101, 59], value: '⋁' },
    { key: [86, 101, 114, 98, 97, 114, 59], value: '‖' },
    { key: [86, 101, 114, 116, 59], value: '‖' },
    { key: [86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59], value: '∣' },
    { key: [86, 101, 114, 116, 105, 99, 97, 108, 76, 105, 110, 101, 59], value: '|' },
    { key: [86, 101, 114, 116, 105, 99, 97, 108, 83, 101, 112, 97, 114, 97, 116, 111, 114, 59], value: '❘' },
    { key: [86, 101, 114, 116, 105, 99, 97, 108, 84, 105, 108, 100, 101, 59], value: '≀' },
    { key: [86, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59], value: ' ' },
    { key: [86, 102, 114, 59], value: '𝔙' },
    { key: [86, 111, 112, 102, 59], value: '𝕍' },
    { key: [86, 115, 99, 114, 59], value: '𝒱' },
    { key: [86, 118, 100, 97, 115, 104, 59], value: '⊪' },
    { key: [87, 99, 105, 114, 99, 59], value: 'Ŵ' },
    { key: [87, 101, 100, 103, 101, 59], value: '⋀' },
    { key: [87, 102, 114, 59], value: '𝔚' },
    { key: [87, 111, 112, 102, 59], value: '𝕎' },
    { key: [87, 115, 99, 114, 59], value: '𝒲' },
    { key: [88, 102, 114, 59], value: '𝔛' },
    { key: [88, 105, 59], value: 'Ξ' },
    { key: [88, 111, 112, 102, 59], value: '𝕏' },
    { key: [88, 115, 99, 114, 59], value: '𝒳' },
    { key: [89, 65, 99, 121, 59], value: 'Я' },
    { key: [89, 73, 99, 121, 59], value: 'Ї' },
    { key: [89, 85, 99, 121, 59], value: 'Ю' },
    { key: [89, 97, 99, 117, 116, 101, 59], value: 'Ý' },
    { key: [89, 99, 105, 114, 99, 59], value: 'Ŷ' },
    { key: [89, 99, 121, 59], value: 'Ы' },
    { key: [89, 102, 114, 59], value: '𝔜' },
    { key: [89, 111, 112, 102, 59], value: '𝕐' },
    { key: [89, 115, 99, 114, 59], value: '𝒴' },
    { key: [89, 117, 109, 108, 59], value: 'Ÿ' },
    { key: [90, 72, 99, 121, 59], value: 'Ж' },
    { key: [90, 97, 99, 117, 116, 101, 59], value: 'Ź' },
    { key: [90, 99, 97, 114, 111, 110, 59], value: 'Ž' },
    { key: [90, 99, 121, 59], value: 'З' },
    { key: [90, 100, 111, 116, 59], value: 'Ż' },
    { key: [90, 101, 114, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59], value: '​' },
    { key: [90, 101, 116, 97, 59], value: 'Ζ' },
    { key: [90, 102, 114, 59], value: 'ℨ' },
    { key: [90, 111, 112, 102, 59], value: 'ℤ' },
    { key: [90, 115, 99, 114, 59], value: '𝒵' },
    { key: [97, 97, 99, 117, 116, 101, 59], value: 'á' },
    { key: [97, 98, 114, 101, 118, 101, 59], value: 'ă' },
    { key: [97, 99, 59], value: '∾' },
    { key: [97, 99, 69, 59], value: '∾̳' },
    { key: [97, 99, 100, 59], value: '∿' },
    { key: [97, 99, 105, 114, 99, 59], value: 'â' },
    { key: [97, 99, 117, 116, 101, 59], value: '´' },
    { key: [97, 99, 121, 59], value: 'а' },
    { key: [97, 101, 108, 105, 103, 59], value: 'æ' },
    { key: [97, 102, 59], value: '⁡' },
    { key: [97, 102, 114, 59], value: '𝔞' },
    { key: [97, 103, 114, 97, 118, 101, 59], value: 'à' },
    { key: [97, 108, 101, 102, 115, 121, 109, 59], value: 'ℵ' },
    { key: [97, 108, 101, 112, 104, 59], value: 'ℵ' },
    { key: [97, 108, 112, 104, 97, 59], value: 'α' },
    { key: [97, 109, 97, 99, 114, 59], value: 'ā' },
    { key: [97, 109, 97, 108, 103, 59], value: '⨿' },
    { key: [97, 109, 112, 59], value: '&' },
    { key: [97, 110, 100, 59], value: '∧' },
    { key: [97, 110, 100, 97, 110, 100, 59], value: '⩕' },
    { key: [97, 110, 100, 100, 59], value: '⩜' },
    { key: [97, 110, 100, 115, 108, 111, 112, 101, 59], value: '⩘' },
    { key: [97, 110, 100, 118, 59], value: '⩚' },
    { key: [97, 110, 103, 59], value: '∠' },
    { key: [97, 110, 103, 101, 59], value: '⦤' },
    { key: [97, 110, 103, 108, 101, 59], value: '∠' },
    { key: [97, 110, 103, 109, 115, 100, 59], value: '∡' },
    { key: [97, 110, 103, 109, 115, 100, 97, 97, 59], value: '⦨' },
    { key: [97, 110, 103, 109, 115, 100, 97, 98, 59], value: '⦩' },
    { key: [97, 110, 103, 109, 115, 100, 97, 99, 59], value: '⦪' },
    { key: [97, 110, 103, 109, 115, 100, 97, 100, 59], value: '⦫' },
    { key: [97, 110, 103, 109, 115, 100, 97, 101, 59], value: '⦬' },
    { key: [97, 110, 103, 109, 115, 100, 97, 102, 59], value: '⦭' },
    { key: [97, 110, 103, 109, 115, 100, 97, 103, 59], value: '⦮' },
    { key: [97, 110, 103, 109, 115, 100, 97, 104, 59], value: '⦯' },
    { key: [97, 110, 103, 114, 116, 59], value: '∟' },
    { key: [97, 110, 103, 114, 116, 118, 98, 59], value: '⊾' },
    { key: [97, 110, 103, 114, 116, 118, 98, 100, 59], value: '⦝' },
    { key: [97, 110, 103, 115, 112, 104, 59], value: '∢' },
    { key: [97, 110, 103, 115, 116, 59], value: 'Å' },
    { key: [97, 110, 103, 122, 97, 114, 114, 59], value: '⍼' },
    { key: [97, 111, 103, 111, 110, 59], value: 'ą' },
    { key: [97, 111, 112, 102, 59], value: '𝕒' },
    { key: [97, 112, 59], value: '≈' },
    { key: [97, 112, 69, 59], value: '⩰' },
    { key: [97, 112, 97, 99, 105, 114, 59], value: '⩯' },
    { key: [97, 112, 101, 59], value: '≊' },
    { key: [97, 112, 105, 100, 59], value: '≋' },
    { key: [97, 112, 111, 115, 59], value: '\'' },
    { key: [97, 112, 112, 114, 111, 120, 59], value: '≈' },
    { key: [97, 112, 112, 114, 111, 120, 101, 113, 59], value: '≊' },
    { key: [97, 114, 105, 110, 103, 59], value: 'å' },
    { key: [97, 115, 99, 114, 59], value: '𝒶' },
    { key: [97, 115, 116, 59], value: '*' },
    { key: [97, 115, 121, 109, 112, 59], value: '≈' },
    { key: [97, 115, 121, 109, 112, 101, 113, 59], value: '≍' },
    { key: [97, 116, 105, 108, 100, 101, 59], value: 'ã' },
    { key: [97, 117, 109, 108, 59], value: 'ä' },
    { key: [97, 119, 99, 111, 110, 105, 110, 116, 59], value: '∳' },
    { key: [97, 119, 105, 110, 116, 59], value: '⨑' },
    { key: [98, 78, 111, 116, 59], value: '⫭' },
    { key: [98, 97, 99, 107, 99, 111, 110, 103, 59], value: '≌' },
    { key: [98, 97, 99, 107, 101, 112, 115, 105, 108, 111, 110, 59], value: '϶' },
    { key: [98, 97, 99, 107, 112, 114, 105, 109, 101, 59], value: '‵' },
    { key: [98, 97, 99, 107, 115, 105, 109, 59], value: '∽' },
    { key: [98, 97, 99, 107, 115, 105, 109, 101, 113, 59], value: '⋍' },
    { key: [98, 97, 114, 118, 101, 101, 59], value: '⊽' },
    { key: [98, 97, 114, 119, 101, 100, 59], value: '⌅' },
    { key: [98, 97, 114, 119, 101, 100, 103, 101, 59], value: '⌅' },
    { key: [98, 98, 114, 107, 59], value: '⎵' },
    { key: [98, 98, 114, 107, 116, 98, 114, 107, 59], value: '⎶' },
    { key: [98, 99, 111, 110, 103, 59], value: '≌' },
    { key: [98, 99, 121, 59], value: 'б' },
    { key: [98, 100, 113, 117, 111, 59], value: '„' },
    { key: [98, 101, 99, 97, 117, 115, 59], value: '∵' },
    { key: [98, 101, 99, 97, 117, 115, 101, 59], value: '∵' },
    { key: [98, 101, 109, 112, 116, 121, 118, 59], value: '⦰' },
    { key: [98, 101, 112, 115, 105, 59], value: '϶' },
    { key: [98, 101, 114, 110, 111, 117, 59], value: 'ℬ' },
    { key: [98, 101, 116, 97, 59], value: 'β' },
    { key: [98, 101, 116, 104, 59], value: 'ℶ' },
    { key: [98, 101, 116, 119, 101, 101, 110, 59], value: '≬' },
    { key: [98, 102, 114, 59], value: '𝔟' },
    { key: [98, 105, 103, 99, 97, 112, 59], value: '⋂' },
    { key: [98, 105, 103, 99, 105, 114, 99, 59], value: '◯' },
    { key: [98, 105, 103, 99, 117, 112, 59], value: '⋃' },
    { key: [98, 105, 103, 111, 100, 111, 116, 59], value: '⨀' },
    { key: [98, 105, 103, 111, 112, 108, 117, 115, 59], value: '⨁' },
    { key: [98, 105, 103, 111, 116, 105, 109, 101, 115, 59], value: '⨂' },
    { key: [98, 105, 103, 115, 113, 99, 117, 112, 59], value: '⨆' },
    { key: [98, 105, 103, 115, 116, 97, 114, 59], value: '★' },
    { key: [98, 105, 103, 116, 114, 105, 97, 110, 103, 108, 101, 100, 111, 119, 110, 59], value: '▽' },
    { key: [98, 105, 103, 116, 114, 105, 97, 110, 103, 108, 101, 117, 112, 59], value: '△' },
    { key: [98, 105, 103, 117, 112, 108, 117, 115, 59], value: '⨄' },
    { key: [98, 105, 103, 118, 101, 101, 59], value: '⋁' },
    { key: [98, 105, 103, 119, 101, 100, 103, 101, 59], value: '⋀' },
    { key: [98, 107, 97, 114, 111, 119, 59], value: '⤍' },
    { key: [98, 108, 97, 99, 107, 108, 111, 122, 101, 110, 103, 101, 59], value: '⧫' },
    { key: [98, 108, 97, 99, 107, 115, 113, 117, 97, 114, 101, 59], value: '▪' },
    { key: [98, 108, 97, 99, 107, 116, 114, 105, 97, 110, 103, 108, 101, 59], value: '▴' },
    { key: [98, 108, 97, 99, 107, 116, 114, 105, 97, 110, 103, 108, 101, 100, 111, 119, 110, 59], value: '▾' },
    { key: [98, 108, 97, 99, 107, 116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 59], value: '◂' },
    { key: [98, 108, 97, 99, 107, 116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 59], value: '▸' },
    { key: [98, 108, 97, 110, 107, 59], value: '␣' },
    { key: [98, 108, 107, 49, 50, 59], value: '▒' },
    { key: [98, 108, 107, 49, 52, 59], value: '░' },
    { key: [98, 108, 107, 51, 52, 59], value: '▓' },
    { key: [98, 108, 111, 99, 107, 59], value: '█' },
    { key: [98, 110, 101, 59], value: '=⃥' },
    { key: [98, 110, 101, 113, 117, 105, 118, 59], value: '≡⃥' },
    { key: [98, 110, 111, 116, 59], value: '⌐' },
    { key: [98, 111, 112, 102, 59], value: '𝕓' },
    { key: [98, 111, 116, 59], value: '⊥' },
    { key: [98, 111, 116, 116, 111, 109, 59], value: '⊥' },
    { key: [98, 111, 119, 116, 105, 101, 59], value: '⋈' },
    { key: [98, 111, 120, 68, 76, 59], value: '╗' },
    { key: [98, 111, 120, 68, 82, 59], value: '╔' },
    { key: [98, 111, 120, 68, 108, 59], value: '╖' },
    { key: [98, 111, 120, 68, 114, 59], value: '╓' },
    { key: [98, 111, 120, 72, 59], value: '═' },
    { key: [98, 111, 120, 72, 68, 59], value: '╦' },
    { key: [98, 111, 120, 72, 85, 59], value: '╩' },
    { key: [98, 111, 120, 72, 100, 59], value: '╤' },
    { key: [98, 111, 120, 72, 117, 59], value: '╧' },
    { key: [98, 111, 120, 85, 76, 59], value: '╝' },
    { key: [98, 111, 120, 85, 82, 59], value: '╚' },
    { key: [98, 111, 120, 85, 108, 59], value: '╜' },
    { key: [98, 111, 120, 85, 114, 59], value: '╙' },
    { key: [98, 111, 120, 86, 59], value: '║' },
    { key: [98, 111, 120, 86, 72, 59], value: '╬' },
    { key: [98, 111, 120, 86, 76, 59], value: '╣' },
    { key: [98, 111, 120, 86, 82, 59], value: '╠' },
    { key: [98, 111, 120, 86, 104, 59], value: '╫' },
    { key: [98, 111, 120, 86, 108, 59], value: '╢' },
    { key: [98, 111, 120, 86, 114, 59], value: '╟' },
    { key: [98, 111, 120, 98, 111, 120, 59], value: '⧉' },
    { key: [98, 111, 120, 100, 76, 59], value: '╕' },
    { key: [98, 111, 120, 100, 82, 59], value: '╒' },
    { key: [98, 111, 120, 100, 108, 59], value: '┐' },
    { key: [98, 111, 120, 100, 114, 59], value: '┌' },
    { key: [98, 111, 120, 104, 59], value: '─' },
    { key: [98, 111, 120, 104, 68, 59], value: '╥' },
    { key: [98, 111, 120, 104, 85, 59], value: '╨' },
    { key: [98, 111, 120, 104, 100, 59], value: '┬' },
    { key: [98, 111, 120, 104, 117, 59], value: '┴' },
    { key: [98, 111, 120, 109, 105, 110, 117, 115, 59], value: '⊟' },
    { key: [98, 111, 120, 112, 108, 117, 115, 59], value: '⊞' },
    { key: [98, 111, 120, 116, 105, 109, 101, 115, 59], value: '⊠' },
    { key: [98, 111, 120, 117, 76, 59], value: '╛' },
    { key: [98, 111, 120, 117, 82, 59], value: '╘' },
    { key: [98, 111, 120, 117, 108, 59], value: '┘' },
    { key: [98, 111, 120, 117, 114, 59], value: '└' },
    { key: [98, 111, 120, 118, 59], value: '│' },
    { key: [98, 111, 120, 118, 72, 59], value: '╪' },
    { key: [98, 111, 120, 118, 76, 59], value: '╡' },
    { key: [98, 111, 120, 118, 82, 59], value: '╞' },
    { key: [98, 111, 120, 118, 104, 59], value: '┼' },
    { key: [98, 111, 120, 118, 108, 59], value: '┤' },
    { key: [98, 111, 120, 118, 114, 59], value: '├' },
    { key: [98, 112, 114, 105, 109, 101, 59], value: '‵' },
    { key: [98, 114, 101, 118, 101, 59], value: '˘' },
    { key: [98, 114, 118, 98, 97, 114, 59], value: '¦' },
    { key: [98, 115, 99, 114, 59], value: '𝒷' },
    { key: [98, 115, 101, 109, 105, 59], value: '⁏' },
    { key: [98, 115, 105, 109, 59], value: '∽' },
    { key: [98, 115, 105, 109, 101, 59], value: '⋍' },
    { key: [98, 115, 111, 108, 59], value: '\\' },
    { key: [98, 115, 111, 108, 98, 59], value: '⧅' },
    { key: [98, 115, 111, 108, 104, 115, 117, 98, 59], value: '⟈' },
    { key: [98, 117, 108, 108, 59], value: '•' },
    { key: [98, 117, 108, 108, 101, 116, 59], value: '•' },
    { key: [98, 117, 109, 112, 59], value: '≎' },
    { key: [98, 117, 109, 112, 69, 59], value: '⪮' },
    { key: [98, 117, 109, 112, 101, 59], value: '≏' },
    { key: [98, 117, 109, 112, 101, 113, 59], value: '≏' },
    { key: [99, 97, 99, 117, 116, 101, 59], value: 'ć' },
    { key: [99, 97, 112, 59], value: '∩' },
    { key: [99, 97, 112, 97, 110, 100, 59], value: '⩄' },
    { key: [99, 97, 112, 98, 114, 99, 117, 112, 59], value: '⩉' },
    { key: [99, 97, 112, 99, 97, 112, 59], value: '⩋' },
    { key: [99, 97, 112, 99, 117, 112, 59], value: '⩇' },
    { key: [99, 97, 112, 100, 111, 116, 59], value: '⩀' },
    { key: [99, 97, 112, 115, 59], value: '∩︀' },
    { key: [99, 97, 114, 101, 116, 59], value: '⁁' },
    { key: [99, 97, 114, 111, 110, 59], value: 'ˇ' },
    { key: [99, 99, 97, 112, 115, 59], value: '⩍' },
    { key: [99, 99, 97, 114, 111, 110, 59], value: 'č' },
    { key: [99, 99, 101, 100, 105, 108, 59], value: 'ç' },
    { key: [99, 99, 105, 114, 99, 59], value: 'ĉ' },
    { key: [99, 99, 117, 112, 115, 59], value: '⩌' },
    { key: [99, 99, 117, 112, 115, 115, 109, 59], value: '⩐' },
    { key: [99, 100, 111, 116, 59], value: 'ċ' },
    { key: [99, 101, 100, 105, 108, 59], value: '¸' },
    { key: [99, 101, 109, 112, 116, 121, 118, 59], value: '⦲' },
    { key: [99, 101, 110, 116, 59], value: '¢' },
    { key: [99, 101, 110, 116, 101, 114, 100, 111, 116, 59], value: '·' },
    { key: [99, 102, 114, 59], value: '𝔠' },
    { key: [99, 104, 99, 121, 59], value: 'ч' },
    { key: [99, 104, 101, 99, 107, 59], value: '✓' },
    { key: [99, 104, 101, 99, 107, 109, 97, 114, 107, 59], value: '✓' },
    { key: [99, 104, 105, 59], value: 'χ' },
    { key: [99, 105, 114, 59], value: '○' },
    { key: [99, 105, 114, 69, 59], value: '⧃' },
    { key: [99, 105, 114, 99, 59], value: 'ˆ' },
    { key: [99, 105, 114, 99, 101, 113, 59], value: '≗' },
    { key: [99, 105, 114, 99, 108, 101, 97, 114, 114, 111, 119, 108, 101, 102, 116, 59], value: '↺' },
    { key: [99, 105, 114, 99, 108, 101, 97, 114, 114, 111, 119, 114, 105, 103, 104, 116, 59], value: '↻' },
    { key: [99, 105, 114, 99, 108, 101, 100, 82, 59], value: '®' },
    { key: [99, 105, 114, 99, 108, 101, 100, 83, 59], value: 'Ⓢ' },
    { key: [99, 105, 114, 99, 108, 101, 100, 97, 115, 116, 59], value: '⊛' },
    { key: [99, 105, 114, 99, 108, 101, 100, 99, 105, 114, 99, 59], value: '⊚' },
    { key: [99, 105, 114, 99, 108, 101, 100, 100, 97, 115, 104, 59], value: '⊝' },
    { key: [99, 105, 114, 101, 59], value: '≗' },
    { key: [99, 105, 114, 102, 110, 105, 110, 116, 59], value: '⨐' },
    { key: [99, 105, 114, 109, 105, 100, 59], value: '⫯' },
    { key: [99, 105, 114, 115, 99, 105, 114, 59], value: '⧂' },
    { key: [99, 108, 117, 98, 115, 59], value: '♣' },
    { key: [99, 108, 117, 98, 115, 117, 105, 116, 59], value: '♣' },
    { key: [99, 111, 108, 111, 110, 59], value: ':' },
    { key: [99, 111, 108, 111, 110, 101, 59], value: '≔' },
    { key: [99, 111, 108, 111, 110, 101, 113, 59], value: '≔' },
    { key: [99, 111, 109, 109, 97, 59], value: ',' },
    { key: [99, 111, 109, 109, 97, 116, 59], value: '@' },
    { key: [99, 111, 109, 112, 59], value: '∁' },
    { key: [99, 111, 109, 112, 102, 110, 59], value: '∘' },
    { key: [99, 111, 109, 112, 108, 101, 109, 101, 110, 116, 59], value: '∁' },
    { key: [99, 111, 109, 112, 108, 101, 120, 101, 115, 59], value: 'ℂ' },
    { key: [99, 111, 110, 103, 59], value: '≅' },
    { key: [99, 111, 110, 103, 100, 111, 116, 59], value: '⩭' },
    { key: [99, 111, 110, 105, 110, 116, 59], value: '∮' },
    { key: [99, 111, 112, 102, 59], value: '𝕔' },
    { key: [99, 111, 112, 114, 111, 100, 59], value: '∐' },
    { key: [99, 111, 112, 121, 59], value: '©' },
    { key: [99, 111, 112, 121, 115, 114, 59], value: '℗' },
    { key: [99, 114, 97, 114, 114, 59], value: '↵' },
    { key: [99, 114, 111, 115, 115, 59], value: '✗' },
    { key: [99, 115, 99, 114, 59], value: '𝒸' },
    { key: [99, 115, 117, 98, 59], value: '⫏' },
    { key: [99, 115, 117, 98, 101, 59], value: '⫑' },
    { key: [99, 115, 117, 112, 59], value: '⫐' },
    { key: [99, 115, 117, 112, 101, 59], value: '⫒' },
    { key: [99, 116, 100, 111, 116, 59], value: '⋯' },
    { key: [99, 117, 100, 97, 114, 114, 108, 59], value: '⤸' },
    { key: [99, 117, 100, 97, 114, 114, 114, 59], value: '⤵' },
    { key: [99, 117, 101, 112, 114, 59], value: '⋞' },
    { key: [99, 117, 101, 115, 99, 59], value: '⋟' },
    { key: [99, 117, 108, 97, 114, 114, 59], value: '↶' },
    { key: [99, 117, 108, 97, 114, 114, 112, 59], value: '⤽' },
    { key: [99, 117, 112, 59], value: '∪' },
    { key: [99, 117, 112, 98, 114, 99, 97, 112, 59], value: '⩈' },
    { key: [99, 117, 112, 99, 97, 112, 59], value: '⩆' },
    { key: [99, 117, 112, 99, 117, 112, 59], value: '⩊' },
    { key: [99, 117, 112, 100, 111, 116, 59], value: '⊍' },
    { key: [99, 117, 112, 111, 114, 59], value: '⩅' },
    { key: [99, 117, 112, 115, 59], value: '∪︀' },
    { key: [99, 117, 114, 97, 114, 114, 59], value: '↷' },
    { key: [99, 117, 114, 97, 114, 114, 109, 59], value: '⤼' },
    { key: [99, 117, 114, 108, 121, 101, 113, 112, 114, 101, 99, 59], value: '⋞' },
    { key: [99, 117, 114, 108, 121, 101, 113, 115, 117, 99, 99, 59], value: '⋟' },
    { key: [99, 117, 114, 108, 121, 118, 101, 101, 59], value: '⋎' },
    { key: [99, 117, 114, 108, 121, 119, 101, 100, 103, 101, 59], value: '⋏' },
    { key: [99, 117, 114, 114, 101, 110, 59], value: '¤' },
    { key: [99, 117, 114, 118, 101, 97, 114, 114, 111, 119, 108, 101, 102, 116, 59], value: '↶' },
    { key: [99, 117, 114, 118, 101, 97, 114, 114, 111, 119, 114, 105, 103, 104, 116, 59], value: '↷' },
    { key: [99, 117, 118, 101, 101, 59], value: '⋎' },
    { key: [99, 117, 119, 101, 100, 59], value: '⋏' },
    { key: [99, 119, 99, 111, 110, 105, 110, 116, 59], value: '∲' },
    { key: [99, 119, 105, 110, 116, 59], value: '∱' },
    { key: [99, 121, 108, 99, 116, 121, 59], value: '⌭' },
    { key: [100, 65, 114, 114, 59], value: '⇓' },
    { key: [100, 72, 97, 114, 59], value: '⥥' },
    { key: [100, 97, 103, 103, 101, 114, 59], value: '†' },
    { key: [100, 97, 108, 101, 116, 104, 59], value: 'ℸ' },
    { key: [100, 97, 114, 114, 59], value: '↓' },
    { key: [100, 97, 115, 104, 59], value: '‐' },
    { key: [100, 97, 115, 104, 118, 59], value: '⊣' },
    { key: [100, 98, 107, 97, 114, 111, 119, 59], value: '⤏' },
    { key: [100, 98, 108, 97, 99, 59], value: '˝' },
    { key: [100, 99, 97, 114, 111, 110, 59], value: 'ď' },
    { key: [100, 99, 121, 59], value: 'д' },
    { key: [100, 100, 59], value: 'ⅆ' },
    { key: [100, 100, 97, 103, 103, 101, 114, 59], value: '‡' },
    { key: [100, 100, 97, 114, 114, 59], value: '⇊' },
    { key: [100, 100, 111, 116, 115, 101, 113, 59], value: '⩷' },
    { key: [100, 101, 103, 59], value: '°' },
    { key: [100, 101, 108, 116, 97, 59], value: 'δ' },
    { key: [100, 101, 109, 112, 116, 121, 118, 59], value: '⦱' },
    { key: [100, 102, 105, 115, 104, 116, 59], value: '⥿' },
    { key: [100, 102, 114, 59], value: '𝔡' },
    { key: [100, 104, 97, 114, 108, 59], value: '⇃' },
    { key: [100, 104, 97, 114, 114, 59], value: '⇂' },
    { key: [100, 105, 97, 109, 59], value: '⋄' },
    { key: [100, 105, 97, 109, 111, 110, 100, 59], value: '⋄' },
    { key: [100, 105, 97, 109, 111, 110, 100, 115, 117, 105, 116, 59], value: '♦' },
    { key: [100, 105, 97, 109, 115, 59], value: '♦' },
    { key: [100, 105, 101, 59], value: '¨' },
    { key: [100, 105, 103, 97, 109, 109, 97, 59], value: 'ϝ' },
    { key: [100, 105, 115, 105, 110, 59], value: '⋲' },
    { key: [100, 105, 118, 59], value: '÷' },
    { key: [100, 105, 118, 105, 100, 101, 59], value: '÷' },
    { key: [100, 105, 118, 105, 100, 101, 111, 110, 116, 105, 109, 101, 115, 59], value: '⋇' },
    { key: [100, 105, 118, 111, 110, 120, 59], value: '⋇' },
    { key: [100, 106, 99, 121, 59], value: 'ђ' },
    { key: [100, 108, 99, 111, 114, 110, 59], value: '⌞' },
    { key: [100, 108, 99, 114, 111, 112, 59], value: '⌍' },
    { key: [100, 111, 108, 108, 97, 114, 59], value: '$' },
    { key: [100, 111, 112, 102, 59], value: '𝕕' },
    { key: [100, 111, 116, 59], value: '˙' },
    { key: [100, 111, 116, 101, 113, 59], value: '≐' },
    { key: [100, 111, 116, 101, 113, 100, 111, 116, 59], value: '≑' },
    { key: [100, 111, 116, 109, 105, 110, 117, 115, 59], value: '∸' },
    { key: [100, 111, 116, 112, 108, 117, 115, 59], value: '∔' },
    { key: [100, 111, 116, 115, 113, 117, 97, 114, 101, 59], value: '⊡' },
    { key: [100, 111, 117, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59], value: '⌆' },
    { key: [100, 111, 119, 110, 97, 114, 114, 111, 119, 59], value: '↓' },
    { key: [100, 111, 119, 110, 100, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59], value: '⇊' },
    { key: [100, 111, 119, 110, 104, 97, 114, 112, 111, 111, 110, 108, 101, 102, 116, 59], value: '⇃' },
    { key: [100, 111, 119, 110, 104, 97, 114, 112, 111, 111, 110, 114, 105, 103, 104, 116, 59], value: '⇂' },
    { key: [100, 114, 98, 107, 97, 114, 111, 119, 59], value: '⤐' },
    { key: [100, 114, 99, 111, 114, 110, 59], value: '⌟' },
    { key: [100, 114, 99, 114, 111, 112, 59], value: '⌌' },
    { key: [100, 115, 99, 114, 59], value: '𝒹' },
    { key: [100, 115, 99, 121, 59], value: 'ѕ' },
    { key: [100, 115, 111, 108, 59], value: '⧶' },
    { key: [100, 115, 116, 114, 111, 107, 59], value: 'đ' },
    { key: [100, 116, 100, 111, 116, 59], value: '⋱' },
    { key: [100, 116, 114, 105, 59], value: '▿' },
    { key: [100, 116, 114, 105, 102, 59], value: '▾' },
    { key: [100, 117, 97, 114, 114, 59], value: '⇵' },
    { key: [100, 117, 104, 97, 114, 59], value: '⥯' },
    { key: [100, 119, 97, 110, 103, 108, 101, 59], value: '⦦' },
    { key: [100, 122, 99, 121, 59], value: 'џ' },
    { key: [100, 122, 105, 103, 114, 97, 114, 114, 59], value: '⟿' },
    { key: [101, 68, 68, 111, 116, 59], value: '⩷' },
    { key: [101, 68, 111, 116, 59], value: '≑' },
    { key: [101, 97, 99, 117, 116, 101, 59], value: 'é' },
    { key: [101, 97, 115, 116, 101, 114, 59], value: '⩮' },
    { key: [101, 99, 97, 114, 111, 110, 59], value: 'ě' },
    { key: [101, 99, 105, 114, 59], value: '≖' },
    { key: [101, 99, 105, 114, 99, 59], value: 'ê' },
    { key: [101, 99, 111, 108, 111, 110, 59], value: '≕' },
    { key: [101, 99, 121, 59], value: 'э' },
    { key: [101, 100, 111, 116, 59], value: 'ė' },
    { key: [101, 101, 59], value: 'ⅇ' },
    { key: [101, 102, 68, 111, 116, 59], value: '≒' },
    { key: [101, 102, 114, 59], value: '𝔢' },
    { key: [101, 103, 59], value: '⪚' },
    { key: [101, 103, 114, 97, 118, 101, 59], value: 'è' },
    { key: [101, 103, 115, 59], value: '⪖' },
    { key: [101, 103, 115, 100, 111, 116, 59], value: '⪘' },
    { key: [101, 108, 59], value: '⪙' },
    { key: [101, 108, 105, 110, 116, 101, 114, 115, 59], value: '⏧' },
    { key: [101, 108, 108, 59], value: 'ℓ' },
    { key: [101, 108, 115, 59], value: '⪕' },
    { key: [101, 108, 115, 100, 111, 116, 59], value: '⪗' },
    { key: [101, 109, 97, 99, 114, 59], value: 'ē' },
    { key: [101, 109, 112, 116, 121, 59], value: '∅' },
    { key: [101, 109, 112, 116, 121, 115, 101, 116, 59], value: '∅' },
    { key: [101, 109, 112, 116, 121, 118, 59], value: '∅' },
    { key: [101, 109, 115, 112, 49, 51, 59], value: ' ' },
    { key: [101, 109, 115, 112, 49, 52, 59], value: ' ' },
    { key: [101, 109, 115, 112, 59], value: ' ' },
    { key: [101, 110, 103, 59], value: 'ŋ' },
    { key: [101, 110, 115, 112, 59], value: ' ' },
    { key: [101, 111, 103, 111, 110, 59], value: 'ę' },
    { key: [101, 111, 112, 102, 59], value: '𝕖' },
    { key: [101, 112, 97, 114, 59], value: '⋕' },
    { key: [101, 112, 97, 114, 115, 108, 59], value: '⧣' },
    { key: [101, 112, 108, 117, 115, 59], value: '⩱' },
    { key: [101, 112, 115, 105, 59], value: 'ε' },
    { key: [101, 112, 115, 105, 108, 111, 110, 59], value: 'ε' },
    { key: [101, 112, 115, 105, 118, 59], value: 'ϵ' },
    { key: [101, 113, 99, 105, 114, 99, 59], value: '≖' },
    { key: [101, 113, 99, 111, 108, 111, 110, 59], value: '≕' },
    { key: [101, 113, 115, 105, 109, 59], value: '≂' },
    { key: [101, 113, 115, 108, 97, 110, 116, 103, 116, 114, 59], value: '⪖' },
    { key: [101, 113, 115, 108, 97, 110, 116, 108, 101, 115, 115, 59], value: '⪕' },
    { key: [101, 113, 117, 97, 108, 115, 59], value: '=' },
    { key: [101, 113, 117, 101, 115, 116, 59], value: '≟' },
    { key: [101, 113, 117, 105, 118, 59], value: '≡' },
    { key: [101, 113, 117, 105, 118, 68, 68, 59], value: '⩸' },
    { key: [101, 113, 118, 112, 97, 114, 115, 108, 59], value: '⧥' },
    { key: [101, 114, 68, 111, 116, 59], value: '≓' },
    { key: [101, 114, 97, 114, 114, 59], value: '⥱' },
    { key: [101, 115, 99, 114, 59], value: 'ℯ' },
    { key: [101, 115, 100, 111, 116, 59], value: '≐' },
    { key: [101, 115, 105, 109, 59], value: '≂' },
    { key: [101, 116, 97, 59], value: 'η' },
    { key: [101, 116, 104, 59], value: 'ð' },
    { key: [101, 117, 109, 108, 59], value: 'ë' },
    { key: [101, 117, 114, 111, 59], value: '€' },
    { key: [101, 120, 99, 108, 59], value: '!' },
    { key: [101, 120, 105, 115, 116, 59], value: '∃' },
    { key: [101, 120, 112, 101, 99, 116, 97, 116, 105, 111, 110, 59], value: 'ℰ' },
    { key: [101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 101, 59], value: 'ⅇ' },
    { key: [102, 97, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59], value: '≒' },
    { key: [102, 99, 121, 59], value: 'ф' },
    { key: [102, 101, 109, 97, 108, 101, 59], value: '♀' },
    { key: [102, 102, 105, 108, 105, 103, 59], value: 'ﬃ' },
    { key: [102, 102, 108, 105, 103, 59], value: 'ﬀ' },
    { key: [102, 102, 108, 108, 105, 103, 59], value: 'ﬄ' },
    { key: [102, 102, 114, 59], value: '𝔣' },
    { key: [102, 105, 108, 105, 103, 59], value: 'ﬁ' },
    { key: [102, 106, 108, 105, 103, 59], value: 'fj' },
    { key: [102, 108, 97, 116, 59], value: '♭' },
    { key: [102, 108, 108, 105, 103, 59], value: 'ﬂ' },
    { key: [102, 108, 116, 110, 115, 59], value: '▱' },
    { key: [102, 110, 111, 102, 59], value: 'ƒ' },
    { key: [102, 111, 112, 102, 59], value: '𝕗' },
    { key: [102, 111, 114, 97, 108, 108, 59], value: '∀' },
    { key: [102, 111, 114, 107, 59], value: '⋔' },
    { key: [102, 111, 114, 107, 118, 59], value: '⫙' },
    { key: [102, 112, 97, 114, 116, 105, 110, 116, 59], value: '⨍' },
    { key: [102, 114, 97, 99, 49, 50, 59], value: '½' },
    { key: [102, 114, 97, 99, 49, 51, 59], value: '⅓' },
    { key: [102, 114, 97, 99, 49, 52, 59], value: '¼' },
    { key: [102, 114, 97, 99, 49, 53, 59], value: '⅕' },
    { key: [102, 114, 97, 99, 49, 54, 59], value: '⅙' },
    { key: [102, 114, 97, 99, 49, 56, 59], value: '⅛' },
    { key: [102, 114, 97, 99, 50, 51, 59], value: '⅔' },
    { key: [102, 114, 97, 99, 50, 53, 59], value: '⅖' },
    { key: [102, 114, 97, 99, 51, 52, 59], value: '¾' },
    { key: [102, 114, 97, 99, 51, 53, 59], value: '⅗' },
    { key: [102, 114, 97, 99, 51, 56, 59], value: '⅜' },
    { key: [102, 114, 97, 99, 52, 53, 59], value: '⅘' },
    { key: [102, 114, 97, 99, 53, 54, 59], value: '⅚' },
    { key: [102, 114, 97, 99, 53, 56, 59], value: '⅝' },
    { key: [102, 114, 97, 99, 55, 56, 59], value: '⅞' },
    { key: [102, 114, 97, 115, 108, 59], value: '⁄' },
    { key: [102, 114, 111, 119, 110, 59], value: '⌢' },
    { key: [102, 115, 99, 114, 59], value: '𝒻' },
    { key: [103, 69, 59], value: '≧' },
    { key: [103, 69, 108, 59], value: '⪌' },
    { key: [103, 97, 99, 117, 116, 101, 59], value: 'ǵ' },
    { key: [103, 97, 109, 109, 97, 59], value: 'γ' },
    { key: [103, 97, 109, 109, 97, 100, 59], value: 'ϝ' },
    { key: [103, 97, 112, 59], value: '⪆' },
    { key: [103, 98, 114, 101, 118, 101, 59], value: 'ğ' },
    { key: [103, 99, 105, 114, 99, 59], value: 'ĝ' },
    { key: [103, 99, 121, 59], value: 'г' },
    { key: [103, 100, 111, 116, 59], value: 'ġ' },
    { key: [103, 101, 59], value: '≥' },
    { key: [103, 101, 108, 59], value: '⋛' },
    { key: [103, 101, 113, 59], value: '≥' },
    { key: [103, 101, 113, 113, 59], value: '≧' },
    { key: [103, 101, 113, 115, 108, 97, 110, 116, 59], value: '⩾' },
    { key: [103, 101, 115, 59], value: '⩾' },
    { key: [103, 101, 115, 99, 99, 59], value: '⪩' },
    { key: [103, 101, 115, 100, 111, 116, 59], value: '⪀' },
    { key: [103, 101, 115, 100, 111, 116, 111, 59], value: '⪂' },
    { key: [103, 101, 115, 100, 111, 116, 111, 108, 59], value: '⪄' },
    { key: [103, 101, 115, 108, 59], value: '⋛︀' },
    { key: [103, 101, 115, 108, 101, 115, 59], value: '⪔' },
    { key: [103, 102, 114, 59], value: '𝔤' },
    { key: [103, 103, 59], value: '≫' },
    { key: [103, 103, 103, 59], value: '⋙' },
    { key: [103, 105, 109, 101, 108, 59], value: 'ℷ' },
    { key: [103, 106, 99, 121, 59], value: 'ѓ' },
    { key: [103, 108, 59], value: '≷' },
    { key: [103, 108, 69, 59], value: '⪒' },
    { key: [103, 108, 97, 59], value: '⪥' },
    { key: [103, 108, 106, 59], value: '⪤' },
    { key: [103, 110, 69, 59], value: '≩' },
    { key: [103, 110, 97, 112, 59], value: '⪊' },
    { key: [103, 110, 97, 112, 112, 114, 111, 120, 59], value: '⪊' },
    { key: [103, 110, 101, 59], value: '⪈' },
    { key: [103, 110, 101, 113, 59], value: '⪈' },
    { key: [103, 110, 101, 113, 113, 59], value: '≩' },
    { key: [103, 110, 115, 105, 109, 59], value: '⋧' },
    { key: [103, 111, 112, 102, 59], value: '𝕘' },
    { key: [103, 114, 97, 118, 101, 59], value: '`' },
    { key: [103, 115, 99, 114, 59], value: 'ℊ' },
    { key: [103, 115, 105, 109, 59], value: '≳' },
    { key: [103, 115, 105, 109, 101, 59], value: '⪎' },
    { key: [103, 115, 105, 109, 108, 59], value: '⪐' },
    { key: [103, 116, 59], value: '>' },
    { key: [103, 116, 99, 99, 59], value: '⪧' },
    { key: [103, 116, 99, 105, 114, 59], value: '⩺' },
    { key: [103, 116, 100, 111, 116, 59], value: '⋗' },
    { key: [103, 116, 108, 80, 97, 114, 59], value: '⦕' },
    { key: [103, 116, 113, 117, 101, 115, 116, 59], value: '⩼' },
    { key: [103, 116, 114, 97, 112, 112, 114, 111, 120, 59], value: '⪆' },
    { key: [103, 116, 114, 97, 114, 114, 59], value: '⥸' },
    { key: [103, 116, 114, 100, 111, 116, 59], value: '⋗' },
    { key: [103, 116, 114, 101, 113, 108, 101, 115, 115, 59], value: '⋛' },
    { key: [103, 116, 114, 101, 113, 113, 108, 101, 115, 115, 59], value: '⪌' },
    { key: [103, 116, 114, 108, 101, 115, 115, 59], value: '≷' },
    { key: [103, 116, 114, 115, 105, 109, 59], value: '≳' },
    { key: [103, 118, 101, 114, 116, 110, 101, 113, 113, 59], value: '≩︀' },
    { key: [103, 118, 110, 69, 59], value: '≩︀' },
    { key: [104, 65, 114, 114, 59], value: '⇔' },
    { key: [104, 97, 105, 114, 115, 112, 59], value: ' ' },
    { key: [104, 97, 108, 102, 59], value: '½' },
    { key: [104, 97, 109, 105, 108, 116, 59], value: 'ℋ' },
    { key: [104, 97, 114, 100, 99, 121, 59], value: 'ъ' },
    { key: [104, 97, 114, 114, 59], value: '↔' },
    { key: [104, 97, 114, 114, 99, 105, 114, 59], value: '⥈' },
    { key: [104, 97, 114, 114, 119, 59], value: '↭' },
    { key: [104, 98, 97, 114, 59], value: 'ℏ' },
    { key: [104, 99, 105, 114, 99, 59], value: 'ĥ' },
    { key: [104, 101, 97, 114, 116, 115, 59], value: '♥' },
    { key: [104, 101, 97, 114, 116, 115, 117, 105, 116, 59], value: '♥' },
    { key: [104, 101, 108, 108, 105, 112, 59], value: '…' },
    { key: [104, 101, 114, 99, 111, 110, 59], value: '⊹' },
    { key: [104, 102, 114, 59], value: '𝔥' },
    { key: [104, 107, 115, 101, 97, 114, 111, 119, 59], value: '⤥' },
    { key: [104, 107, 115, 119, 97, 114, 111, 119, 59], value: '⤦' },
    { key: [104, 111, 97, 114, 114, 59], value: '⇿' },
    { key: [104, 111, 109, 116, 104, 116, 59], value: '∻' },
    { key: [104, 111, 111, 107, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '↩' },
    { key: [104, 111, 111, 107, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '↪' },
    { key: [104, 111, 112, 102, 59], value: '𝕙' },
    { key: [104, 111, 114, 98, 97, 114, 59], value: '―' },
    { key: [104, 115, 99, 114, 59], value: '𝒽' },
    { key: [104, 115, 108, 97, 115, 104, 59], value: 'ℏ' },
    { key: [104, 115, 116, 114, 111, 107, 59], value: 'ħ' },
    { key: [104, 121, 98, 117, 108, 108, 59], value: '⁃' },
    { key: [104, 121, 112, 104, 101, 110, 59], value: '‐' },
    { key: [105, 97, 99, 117, 116, 101, 59], value: 'í' },
    { key: [105, 99, 59], value: '⁣' },
    { key: [105, 99, 105, 114, 99, 59], value: 'î' },
    { key: [105, 99, 121, 59], value: 'и' },
    { key: [105, 101, 99, 121, 59], value: 'е' },
    { key: [105, 101, 120, 99, 108, 59], value: '¡' },
    { key: [105, 102, 102, 59], value: '⇔' },
    { key: [105, 102, 114, 59], value: '𝔦' },
    { key: [105, 103, 114, 97, 118, 101, 59], value: 'ì' },
    { key: [105, 105, 59], value: 'ⅈ' },
    { key: [105, 105, 105, 105, 110, 116, 59], value: '⨌' },
    { key: [105, 105, 105, 110, 116, 59], value: '∭' },
    { key: [105, 105, 110, 102, 105, 110, 59], value: '⧜' },
    { key: [105, 105, 111, 116, 97, 59], value: '℩' },
    { key: [105, 106, 108, 105, 103, 59], value: 'ĳ' },
    { key: [105, 109, 97, 99, 114, 59], value: 'ī' },
    { key: [105, 109, 97, 103, 101, 59], value: 'ℑ' },
    { key: [105, 109, 97, 103, 108, 105, 110, 101, 59], value: 'ℐ' },
    { key: [105, 109, 97, 103, 112, 97, 114, 116, 59], value: 'ℑ' },
    { key: [105, 109, 97, 116, 104, 59], value: 'ı' },
    { key: [105, 109, 111, 102, 59], value: '⊷' },
    { key: [105, 109, 112, 101, 100, 59], value: 'Ƶ' },
    { key: [105, 110, 59], value: '∈' },
    { key: [105, 110, 99, 97, 114, 101, 59], value: '℅' },
    { key: [105, 110, 102, 105, 110, 59], value: '∞' },
    { key: [105, 110, 102, 105, 110, 116, 105, 101, 59], value: '⧝' },
    { key: [105, 110, 111, 100, 111, 116, 59], value: 'ı' },
    { key: [105, 110, 116, 59], value: '∫' },
    { key: [105, 110, 116, 99, 97, 108, 59], value: '⊺' },
    { key: [105, 110, 116, 101, 103, 101, 114, 115, 59], value: 'ℤ' },
    { key: [105, 110, 116, 101, 114, 99, 97, 108, 59], value: '⊺' },
    { key: [105, 110, 116, 108, 97, 114, 104, 107, 59], value: '⨗' },
    { key: [105, 110, 116, 112, 114, 111, 100, 59], value: '⨼' },
    { key: [105, 111, 99, 121, 59], value: 'ё' },
    { key: [105, 111, 103, 111, 110, 59], value: 'į' },
    { key: [105, 111, 112, 102, 59], value: '𝕚' },
    { key: [105, 111, 116, 97, 59], value: 'ι' },
    { key: [105, 112, 114, 111, 100, 59], value: '⨼' },
    { key: [105, 113, 117, 101, 115, 116, 59], value: '¿' },
    { key: [105, 115, 99, 114, 59], value: '𝒾' },
    { key: [105, 115, 105, 110, 59], value: '∈' },
    { key: [105, 115, 105, 110, 69, 59], value: '⋹' },
    { key: [105, 115, 105, 110, 100, 111, 116, 59], value: '⋵' },
    { key: [105, 115, 105, 110, 115, 59], value: '⋴' },
    { key: [105, 115, 105, 110, 115, 118, 59], value: '⋳' },
    { key: [105, 115, 105, 110, 118, 59], value: '∈' },
    { key: [105, 116, 59], value: '⁢' },
    { key: [105, 116, 105, 108, 100, 101, 59], value: 'ĩ' },
    { key: [105, 117, 107, 99, 121, 59], value: 'і' },
    { key: [105, 117, 109, 108, 59], value: 'ï' },
    { key: [106, 99, 105, 114, 99, 59], value: 'ĵ' },
    { key: [106, 99, 121, 59], value: 'й' },
    { key: [106, 102, 114, 59], value: '𝔧' },
    { key: [106, 109, 97, 116, 104, 59], value: 'ȷ' },
    { key: [106, 111, 112, 102, 59], value: '𝕛' },
    { key: [106, 115, 99, 114, 59], value: '𝒿' },
    { key: [106, 115, 101, 114, 99, 121, 59], value: 'ј' },
    { key: [106, 117, 107, 99, 121, 59], value: 'є' },
    { key: [107, 97, 112, 112, 97, 59], value: 'κ' },
    { key: [107, 97, 112, 112, 97, 118, 59], value: 'ϰ' },
    { key: [107, 99, 101, 100, 105, 108, 59], value: 'ķ' },
    { key: [107, 99, 121, 59], value: 'к' },
    { key: [107, 102, 114, 59], value: '𝔨' },
    { key: [107, 103, 114, 101, 101, 110, 59], value: 'ĸ' },
    { key: [107, 104, 99, 121, 59], value: 'х' },
    { key: [107, 106, 99, 121, 59], value: 'ќ' },
    { key: [107, 111, 112, 102, 59], value: '𝕜' },
    { key: [107, 115, 99, 114, 59], value: '𝓀' },
    { key: [108, 65, 97, 114, 114, 59], value: '⇚' },
    { key: [108, 65, 114, 114, 59], value: '⇐' },
    { key: [108, 65, 116, 97, 105, 108, 59], value: '⤛' },
    { key: [108, 66, 97, 114, 114, 59], value: '⤎' },
    { key: [108, 69, 59], value: '≦' },
    { key: [108, 69, 103, 59], value: '⪋' },
    { key: [108, 72, 97, 114, 59], value: '⥢' },
    { key: [108, 97, 99, 117, 116, 101, 59], value: 'ĺ' },
    { key: [108, 97, 101, 109, 112, 116, 121, 118, 59], value: '⦴' },
    { key: [108, 97, 103, 114, 97, 110, 59], value: 'ℒ' },
    { key: [108, 97, 109, 98, 100, 97, 59], value: 'λ' },
    { key: [108, 97, 110, 103, 59], value: '⟨' },
    { key: [108, 97, 110, 103, 100, 59], value: '⦑' },
    { key: [108, 97, 110, 103, 108, 101, 59], value: '⟨' },
    { key: [108, 97, 112, 59], value: '⪅' },
    { key: [108, 97, 113, 117, 111, 59], value: '«' },
    { key: [108, 97, 114, 114, 59], value: '←' },
    { key: [108, 97, 114, 114, 98, 59], value: '⇤' },
    { key: [108, 97, 114, 114, 98, 102, 115, 59], value: '⤟' },
    { key: [108, 97, 114, 114, 102, 115, 59], value: '⤝' },
    { key: [108, 97, 114, 114, 104, 107, 59], value: '↩' },
    { key: [108, 97, 114, 114, 108, 112, 59], value: '↫' },
    { key: [108, 97, 114, 114, 112, 108, 59], value: '⤹' },
    { key: [108, 97, 114, 114, 115, 105, 109, 59], value: '⥳' },
    { key: [108, 97, 114, 114, 116, 108, 59], value: '↢' },
    { key: [108, 97, 116, 59], value: '⪫' },
    { key: [108, 97, 116, 97, 105, 108, 59], value: '⤙' },
    { key: [108, 97, 116, 101, 59], value: '⪭' },
    { key: [108, 97, 116, 101, 115, 59], value: '⪭︀' },
    { key: [108, 98, 97, 114, 114, 59], value: '⤌' },
    { key: [108, 98, 98, 114, 107, 59], value: '❲' },
    { key: [108, 98, 114, 97, 99, 101, 59], value: '{ ' },
    { key: [108, 98, 114, 97, 99, 107, 59], value: '[' },
    { key: [108, 98, 114, 107, 101, 59], value: '⦋' },
    { key: [108, 98, 114, 107, 115, 108, 100, 59], value: '⦏' },
    { key: [108, 98, 114, 107, 115, 108, 117, 59], value: '⦍' },
    { key: [108, 99, 97, 114, 111, 110, 59], value: 'ľ' },
    { key: [108, 99, 101, 100, 105, 108, 59], value: 'ļ' },
    { key: [108, 99, 101, 105, 108, 59], value: '⌈' },
    { key: [108, 99, 117, 98, 59], value: '{ ' },
    { key: [108, 99, 121, 59], value: 'л' },
    { key: [108, 100, 99, 97, 59], value: '⤶' },
    { key: [108, 100, 113, 117, 111, 59], value: '“' },
    { key: [108, 100, 113, 117, 111, 114, 59], value: '„' },
    { key: [108, 100, 114, 100, 104, 97, 114, 59], value: '⥧' },
    { key: [108, 100, 114, 117, 115, 104, 97, 114, 59], value: '⥋' },
    { key: [108, 100, 115, 104, 59], value: '↲' },
    { key: [108, 101, 59], value: '≤' },
    { key: [108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '←' },
    { key: [108, 101, 102, 116, 97, 114, 114, 111, 119, 116, 97, 105, 108, 59], value: '↢' },
    { key: [108, 101, 102, 116, 104, 97, 114, 112, 111, 111, 110, 100, 111, 119, 110, 59], value: '↽' },
    { key: [108, 101, 102, 116, 104, 97, 114, 112, 111, 111, 110, 117, 112, 59], value: '↼' },
    { key: [108, 101, 102, 116, 108, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59], value: '⇇' },
    { key: [108, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '↔' },
    { key: [108, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59], value: '⇆' },
    { key: [108, 101, 102, 116, 114, 105, 103, 104, 116, 104, 97, 114, 112, 111, 111, 110, 115, 59], value: '⇋' },
    { key: [108, 101, 102, 116, 114, 105, 103, 104, 116, 115, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59], value: '↭' },
    { key: [108, 101, 102, 116, 116, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59], value: '⋋' },
    { key: [108, 101, 103, 59], value: '⋚' },
    { key: [108, 101, 113, 59], value: '≤' },
    { key: [108, 101, 113, 113, 59], value: '≦' },
    { key: [108, 101, 113, 115, 108, 97, 110, 116, 59], value: '⩽' },
    { key: [108, 101, 115, 59], value: '⩽' },
    { key: [108, 101, 115, 99, 99, 59], value: '⪨' },
    { key: [108, 101, 115, 100, 111, 116, 59], value: '⩿' },
    { key: [108, 101, 115, 100, 111, 116, 111, 59], value: '⪁' },
    { key: [108, 101, 115, 100, 111, 116, 111, 114, 59], value: '⪃' },
    { key: [108, 101, 115, 103, 59], value: '⋚︀' },
    { key: [108, 101, 115, 103, 101, 115, 59], value: '⪓' },
    { key: [108, 101, 115, 115, 97, 112, 112, 114, 111, 120, 59], value: '⪅' },
    { key: [108, 101, 115, 115, 100, 111, 116, 59], value: '⋖' },
    { key: [108, 101, 115, 115, 101, 113, 103, 116, 114, 59], value: '⋚' },
    { key: [108, 101, 115, 115, 101, 113, 113, 103, 116, 114, 59], value: '⪋' },
    { key: [108, 101, 115, 115, 103, 116, 114, 59], value: '≶' },
    { key: [108, 101, 115, 115, 115, 105, 109, 59], value: '≲' },
    { key: [108, 102, 105, 115, 104, 116, 59], value: '⥼' },
    { key: [108, 102, 108, 111, 111, 114, 59], value: '⌊' },
    { key: [108, 102, 114, 59], value: '𝔩' },
    { key: [108, 103, 59], value: '≶' },
    { key: [108, 103, 69, 59], value: '⪑' },
    { key: [108, 104, 97, 114, 100, 59], value: '↽' },
    { key: [108, 104, 97, 114, 117, 59], value: '↼' },
    { key: [108, 104, 97, 114, 117, 108, 59], value: '⥪' },
    { key: [108, 104, 98, 108, 107, 59], value: '▄' },
    { key: [108, 106, 99, 121, 59], value: 'љ' },
    { key: [108, 108, 59], value: '≪' },
    { key: [108, 108, 97, 114, 114, 59], value: '⇇' },
    { key: [108, 108, 99, 111, 114, 110, 101, 114, 59], value: '⌞' },
    { key: [108, 108, 104, 97, 114, 100, 59], value: '⥫' },
    { key: [108, 108, 116, 114, 105, 59], value: '◺' },
    { key: [108, 109, 105, 100, 111, 116, 59], value: 'ŀ' },
    { key: [108, 109, 111, 117, 115, 116, 59], value: '⎰' },
    { key: [108, 109, 111, 117, 115, 116, 97, 99, 104, 101, 59], value: '⎰' },
    { key: [108, 110, 69, 59], value: '≨' },
    { key: [108, 110, 97, 112, 59], value: '⪉' },
    { key: [108, 110, 97, 112, 112, 114, 111, 120, 59], value: '⪉' },
    { key: [108, 110, 101, 59], value: '⪇' },
    { key: [108, 110, 101, 113, 59], value: '⪇' },
    { key: [108, 110, 101, 113, 113, 59], value: '≨' },
    { key: [108, 110, 115, 105, 109, 59], value: '⋦' },
    { key: [108, 111, 97, 110, 103, 59], value: '⟬' },
    { key: [108, 111, 97, 114, 114, 59], value: '⇽' },
    { key: [108, 111, 98, 114, 107, 59], value: '⟦' },
    { key: [108, 111, 110, 103, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '⟵' },
    { key: [108, 111, 110, 103, 108, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⟷' },
    { key: [108, 111, 110, 103, 109, 97, 112, 115, 116, 111, 59], value: '⟼' },
    { key: [108, 111, 110, 103, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⟶' },
    { key: [108, 111, 111, 112, 97, 114, 114, 111, 119, 108, 101, 102, 116, 59], value: '↫' },
    { key: [108, 111, 111, 112, 97, 114, 114, 111, 119, 114, 105, 103, 104, 116, 59], value: '↬' },
    { key: [108, 111, 112, 97, 114, 59], value: '⦅' },
    { key: [108, 111, 112, 102, 59], value: '𝕝' },
    { key: [108, 111, 112, 108, 117, 115, 59], value: '⨭' },
    { key: [108, 111, 116, 105, 109, 101, 115, 59], value: '⨴' },
    { key: [108, 111, 119, 97, 115, 116, 59], value: '∗' },
    { key: [108, 111, 119, 98, 97, 114, 59], value: '_' },
    { key: [108, 111, 122, 59], value: '◊' },
    { key: [108, 111, 122, 101, 110, 103, 101, 59], value: '◊' },
    { key: [108, 111, 122, 102, 59], value: '⧫' },
    { key: [108, 112, 97, 114, 59], value: '(' },
    { key: [108, 112, 97, 114, 108, 116, 59], value: '⦓' },
    { key: [108, 114, 97, 114, 114, 59], value: '⇆' },
    { key: [108, 114, 99, 111, 114, 110, 101, 114, 59], value: '⌟' },
    { key: [108, 114, 104, 97, 114, 59], value: '⇋' },
    { key: [108, 114, 104, 97, 114, 100, 59], value: '⥭' },
    { key: [108, 114, 109, 59], value: '‎' },
    { key: [108, 114, 116, 114, 105, 59], value: '⊿' },
    { key: [108, 115, 97, 113, 117, 111, 59], value: '‹' },
    { key: [108, 115, 99, 114, 59], value: '𝓁' },
    { key: [108, 115, 104, 59], value: '↰' },
    { key: [108, 115, 105, 109, 59], value: '≲' },
    { key: [108, 115, 105, 109, 101, 59], value: '⪍' },
    { key: [108, 115, 105, 109, 103, 59], value: '⪏' },
    { key: [108, 115, 113, 98, 59], value: '[' },
    { key: [108, 115, 113, 117, 111, 59], value: '‘' },
    { key: [108, 115, 113, 117, 111, 114, 59], value: '‚' },
    { key: [108, 115, 116, 114, 111, 107, 59], value: 'ł' },
    { key: [108, 116, 59], value: '<' },
    { key: [108, 116, 99, 99, 59], value: '⪦' },
    { key: [108, 116, 99, 105, 114, 59], value: '⩹' },
    { key: [108, 116, 100, 111, 116, 59], value: '⋖' },
    { key: [108, 116, 104, 114, 101, 101, 59], value: '⋋' },
    { key: [108, 116, 105, 109, 101, 115, 59], value: '⋉' },
    { key: [108, 116, 108, 97, 114, 114, 59], value: '⥶' },
    { key: [108, 116, 113, 117, 101, 115, 116, 59], value: '⩻' },
    { key: [108, 116, 114, 80, 97, 114, 59], value: '⦖' },
    { key: [108, 116, 114, 105, 59], value: '◃' },
    { key: [108, 116, 114, 105, 101, 59], value: '⊴' },
    { key: [108, 116, 114, 105, 102, 59], value: '◂' },
    { key: [108, 117, 114, 100, 115, 104, 97, 114, 59], value: '⥊' },
    { key: [108, 117, 114, 117, 104, 97, 114, 59], value: '⥦' },
    { key: [108, 118, 101, 114, 116, 110, 101, 113, 113, 59], value: '≨︀' },
    { key: [108, 118, 110, 69, 59], value: '≨︀' },
    { key: [109, 68, 68, 111, 116, 59], value: '∺' },
    { key: [109, 97, 99, 114, 59], value: '¯' },
    { key: [109, 97, 108, 101, 59], value: '♂' },
    { key: [109, 97, 108, 116, 59], value: '✠' },
    { key: [109, 97, 108, 116, 101, 115, 101, 59], value: '✠' },
    { key: [109, 97, 112, 59], value: '↦' },
    { key: [109, 97, 112, 115, 116, 111, 59], value: '↦' },
    { key: [109, 97, 112, 115, 116, 111, 100, 111, 119, 110, 59], value: '↧' },
    { key: [109, 97, 112, 115, 116, 111, 108, 101, 102, 116, 59], value: '↤' },
    { key: [109, 97, 112, 115, 116, 111, 117, 112, 59], value: '↥' },
    { key: [109, 97, 114, 107, 101, 114, 59], value: '▮' },
    { key: [109, 99, 111, 109, 109, 97, 59], value: '⨩' },
    { key: [109, 99, 121, 59], value: 'м' },
    { key: [109, 100, 97, 115, 104, 59], value: '—' },
    { key: [109, 101, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59], value: '∡' },
    { key: [109, 102, 114, 59], value: '𝔪' },
    { key: [109, 104, 111, 59], value: '℧' },
    { key: [109, 105, 99, 114, 111, 59], value: 'µ' },
    { key: [109, 105, 100, 59], value: '∣' },
    { key: [109, 105, 100, 97, 115, 116, 59], value: '*' },
    { key: [109, 105, 100, 99, 105, 114, 59], value: '⫰' },
    { key: [109, 105, 100, 100, 111, 116, 59], value: '·' },
    { key: [109, 105, 110, 117, 115, 59], value: '−' },
    { key: [109, 105, 110, 117, 115, 98, 59], value: '⊟' },
    { key: [109, 105, 110, 117, 115, 100, 59], value: '∸' },
    { key: [109, 105, 110, 117, 115, 100, 117, 59], value: '⨪' },
    { key: [109, 108, 99, 112, 59], value: '⫛' },
    { key: [109, 108, 100, 114, 59], value: '…' },
    { key: [109, 110, 112, 108, 117, 115, 59], value: '∓' },
    { key: [109, 111, 100, 101, 108, 115, 59], value: '⊧' },
    { key: [109, 111, 112, 102, 59], value: '𝕞' },
    { key: [109, 112, 59], value: '∓' },
    { key: [109, 115, 99, 114, 59], value: '𝓂' },
    { key: [109, 115, 116, 112, 111, 115, 59], value: '∾' },
    { key: [109, 117, 59], value: 'μ' },
    { key: [109, 117, 108, 116, 105, 109, 97, 112, 59], value: '⊸' },
    { key: [109, 117, 109, 97, 112, 59], value: '⊸' },
    { key: [110, 71, 103, 59], value: '⋙̸' },
    { key: [110, 71, 116, 59], value: '≫⃒' },
    { key: [110, 71, 116, 118, 59], value: '≫̸' },
    { key: [110, 76, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '⇍' },
    { key: [110, 76, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⇎' },
    { key: [110, 76, 108, 59], value: '⋘̸' },
    { key: [110, 76, 116, 59], value: '≪⃒' },
    { key: [110, 76, 116, 118, 59], value: '≪̸' },
    { key: [110, 82, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '⇏' },
    { key: [110, 86, 68, 97, 115, 104, 59], value: '⊯' },
    { key: [110, 86, 100, 97, 115, 104, 59], value: '⊮' },
    { key: [110, 97, 98, 108, 97, 59], value: '∇' },
    { key: [110, 97, 99, 117, 116, 101, 59], value: 'ń' },
    { key: [110, 97, 110, 103, 59], value: '∠⃒' },
    { key: [110, 97, 112, 59], value: '≉' },
    { key: [110, 97, 112, 69, 59], value: '⩰̸' },
    { key: [110, 97, 112, 105, 100, 59], value: '≋̸' },
    { key: [110, 97, 112, 111, 115, 59], value: 'ŉ' },
    { key: [110, 97, 112, 112, 114, 111, 120, 59], value: '≉' },
    { key: [110, 97, 116, 117, 114, 59], value: '♮' },
    { key: [110, 97, 116, 117, 114, 97, 108, 59], value: '♮' },
    { key: [110, 97, 116, 117, 114, 97, 108, 115, 59], value: 'ℕ' },
    { key: [110, 98, 115, 112, 59], value: ' ' },
    { key: [110, 98, 117, 109, 112, 59], value: '≎̸' },
    { key: [110, 98, 117, 109, 112, 101, 59], value: '≏̸' },
    { key: [110, 99, 97, 112, 59], value: '⩃' },
    { key: [110, 99, 97, 114, 111, 110, 59], value: 'ň' },
    { key: [110, 99, 101, 100, 105, 108, 59], value: 'ņ' },
    { key: [110, 99, 111, 110, 103, 59], value: '≇' },
    { key: [110, 99, 111, 110, 103, 100, 111, 116, 59], value: '⩭̸' },
    { key: [110, 99, 117, 112, 59], value: '⩂' },
    { key: [110, 99, 121, 59], value: 'н' },
    { key: [110, 100, 97, 115, 104, 59], value: '–' },
    { key: [110, 101, 59], value: '≠' },
    { key: [110, 101, 65, 114, 114, 59], value: '⇗' },
    { key: [110, 101, 97, 114, 104, 107, 59], value: '⤤' },
    { key: [110, 101, 97, 114, 114, 59], value: '↗' },
    { key: [110, 101, 97, 114, 114, 111, 119, 59], value: '↗' },
    { key: [110, 101, 100, 111, 116, 59], value: '≐̸' },
    { key: [110, 101, 113, 117, 105, 118, 59], value: '≢' },
    { key: [110, 101, 115, 101, 97, 114, 59], value: '⤨' },
    { key: [110, 101, 115, 105, 109, 59], value: '≂̸' },
    { key: [110, 101, 120, 105, 115, 116, 59], value: '∄' },
    { key: [110, 101, 120, 105, 115, 116, 115, 59], value: '∄' },
    { key: [110, 102, 114, 59], value: '𝔫' },
    { key: [110, 103, 69, 59], value: '≧̸' },
    { key: [110, 103, 101, 59], value: '≱' },
    { key: [110, 103, 101, 113, 59], value: '≱' },
    { key: [110, 103, 101, 113, 113, 59], value: '≧̸' },
    { key: [110, 103, 101, 113, 115, 108, 97, 110, 116, 59], value: '⩾̸' },
    { key: [110, 103, 101, 115, 59], value: '⩾̸' },
    { key: [110, 103, 115, 105, 109, 59], value: '≵' },
    { key: [110, 103, 116, 59], value: '≯' },
    { key: [110, 103, 116, 114, 59], value: '≯' },
    { key: [110, 104, 65, 114, 114, 59], value: '⇎' },
    { key: [110, 104, 97, 114, 114, 59], value: '↮' },
    { key: [110, 104, 112, 97, 114, 59], value: '⫲' },
    { key: [110, 105, 59], value: '∋' },
    { key: [110, 105, 115, 59], value: '⋼' },
    { key: [110, 105, 115, 100, 59], value: '⋺' },
    { key: [110, 105, 118, 59], value: '∋' },
    { key: [110, 106, 99, 121, 59], value: 'њ' },
    { key: [110, 108, 65, 114, 114, 59], value: '⇍' },
    { key: [110, 108, 69, 59], value: '≦̸' },
    { key: [110, 108, 97, 114, 114, 59], value: '↚' },
    { key: [110, 108, 100, 114, 59], value: '‥' },
    { key: [110, 108, 101, 59], value: '≰' },
    { key: [110, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '↚' },
    { key: [110, 108, 101, 102, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '↮' },
    { key: [110, 108, 101, 113, 59], value: '≰' },
    { key: [110, 108, 101, 113, 113, 59], value: '≦̸' },
    { key: [110, 108, 101, 113, 115, 108, 97, 110, 116, 59], value: '⩽̸' },
    { key: [110, 108, 101, 115, 59], value: '⩽̸' },
    { key: [110, 108, 101, 115, 115, 59], value: '≮' },
    { key: [110, 108, 115, 105, 109, 59], value: '≴' },
    { key: [110, 108, 116, 59], value: '≮' },
    { key: [110, 108, 116, 114, 105, 59], value: '⋪' },
    { key: [110, 108, 116, 114, 105, 101, 59], value: '⋬' },
    { key: [110, 109, 105, 100, 59], value: '∤' },
    { key: [110, 111, 112, 102, 59], value: '𝕟' },
    { key: [110, 111, 116, 59], value: '¬' },
    { key: [110, 111, 116, 105, 110, 59], value: '∉' },
    { key: [110, 111, 116, 105, 110, 69, 59], value: '⋹̸' },
    { key: [110, 111, 116, 105, 110, 100, 111, 116, 59], value: '⋵̸' },
    { key: [110, 111, 116, 105, 110, 118, 97, 59], value: '∉' },
    { key: [110, 111, 116, 105, 110, 118, 98, 59], value: '⋷' },
    { key: [110, 111, 116, 105, 110, 118, 99, 59], value: '⋶' },
    { key: [110, 111, 116, 110, 105, 59], value: '∌' },
    { key: [110, 111, 116, 110, 105, 118, 97, 59], value: '∌' },
    { key: [110, 111, 116, 110, 105, 118, 98, 59], value: '⋾' },
    { key: [110, 111, 116, 110, 105, 118, 99, 59], value: '⋽' },
    { key: [110, 112, 97, 114, 59], value: '∦' },
    { key: [110, 112, 97, 114, 97, 108, 108, 101, 108, 59], value: '∦' },
    { key: [110, 112, 97, 114, 115, 108, 59], value: '⫽⃥' },
    { key: [110, 112, 97, 114, 116, 59], value: '∂̸' },
    { key: [110, 112, 111, 108, 105, 110, 116, 59], value: '⨔' },
    { key: [110, 112, 114, 59], value: '⊀' },
    { key: [110, 112, 114, 99, 117, 101, 59], value: '⋠' },
    { key: [110, 112, 114, 101, 59], value: '⪯̸' },
    { key: [110, 112, 114, 101, 99, 59], value: '⊀' },
    { key: [110, 112, 114, 101, 99, 101, 113, 59], value: '⪯̸' },
    { key: [110, 114, 65, 114, 114, 59], value: '⇏' },
    { key: [110, 114, 97, 114, 114, 59], value: '↛' },
    { key: [110, 114, 97, 114, 114, 99, 59], value: '⤳̸' },
    { key: [110, 114, 97, 114, 114, 119, 59], value: '↝̸' },
    { key: [110, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '↛' },
    { key: [110, 114, 116, 114, 105, 59], value: '⋫' },
    { key: [110, 114, 116, 114, 105, 101, 59], value: '⋭' },
    { key: [110, 115, 99, 59], value: '⊁' },
    { key: [110, 115, 99, 99, 117, 101, 59], value: '⋡' },
    { key: [110, 115, 99, 101, 59], value: '⪰̸' },
    { key: [110, 115, 99, 114, 59], value: '𝓃' },
    { key: [110, 115, 104, 111, 114, 116, 109, 105, 100, 59], value: '∤' },
    { key: [110, 115, 104, 111, 114, 116, 112, 97, 114, 97, 108, 108, 101, 108, 59], value: '∦' },
    { key: [110, 115, 105, 109, 59], value: '≁' },
    { key: [110, 115, 105, 109, 101, 59], value: '≄' },
    { key: [110, 115, 105, 109, 101, 113, 59], value: '≄' },
    { key: [110, 115, 109, 105, 100, 59], value: '∤' },
    { key: [110, 115, 112, 97, 114, 59], value: '∦' },
    { key: [110, 115, 113, 115, 117, 98, 101, 59], value: '⋢' },
    { key: [110, 115, 113, 115, 117, 112, 101, 59], value: '⋣' },
    { key: [110, 115, 117, 98, 59], value: '⊄' },
    { key: [110, 115, 117, 98, 69, 59], value: '⫅̸' },
    { key: [110, 115, 117, 98, 101, 59], value: '⊈' },
    { key: [110, 115, 117, 98, 115, 101, 116, 59], value: '⊂⃒' },
    { key: [110, 115, 117, 98, 115, 101, 116, 101, 113, 59], value: '⊈' },
    { key: [110, 115, 117, 98, 115, 101, 116, 101, 113, 113, 59], value: '⫅̸' },
    { key: [110, 115, 117, 99, 99, 59], value: '⊁' },
    { key: [110, 115, 117, 99, 99, 101, 113, 59], value: '⪰̸' },
    { key: [110, 115, 117, 112, 59], value: '⊅' },
    { key: [110, 115, 117, 112, 69, 59], value: '⫆̸' },
    { key: [110, 115, 117, 112, 101, 59], value: '⊉' },
    { key: [110, 115, 117, 112, 115, 101, 116, 59], value: '⊃⃒' },
    { key: [110, 115, 117, 112, 115, 101, 116, 101, 113, 59], value: '⊉' },
    { key: [110, 115, 117, 112, 115, 101, 116, 101, 113, 113, 59], value: '⫆̸' },
    { key: [110, 116, 103, 108, 59], value: '≹' },
    { key: [110, 116, 105, 108, 100, 101, 59], value: 'ñ' },
    { key: [110, 116, 108, 103, 59], value: '≸' },
    { key: [110, 116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 59], value: '⋪' },
    { key: [110, 116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 101, 113, 59], value: '⋬' },
    { key: [110, 116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 59], value: '⋫' },
    { key: [110, 116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 101, 113, 59], value: '⋭' },
    { key: [110, 117, 59], value: 'ν' },
    { key: [110, 117, 109, 59], value: '#' },
    { key: [110, 117, 109, 101, 114, 111, 59], value: '№' },
    { key: [110, 117, 109, 115, 112, 59], value: ' ' },
    { key: [110, 118, 68, 97, 115, 104, 59], value: '⊭' },
    { key: [110, 118, 72, 97, 114, 114, 59], value: '⤄' },
    { key: [110, 118, 97, 112, 59], value: '≍⃒' },
    { key: [110, 118, 100, 97, 115, 104, 59], value: '⊬' },
    { key: [110, 118, 103, 101, 59], value: '≥⃒' },
    { key: [110, 118, 103, 116, 59], value: '>⃒' },
    { key: [110, 118, 105, 110, 102, 105, 110, 59], value: '⧞' },
    { key: [110, 118, 108, 65, 114, 114, 59], value: '⤂' },
    { key: [110, 118, 108, 101, 59], value: '≤⃒' },
    { key: [110, 118, 108, 116, 59], value: '<⃒' },
    { key: [110, 118, 108, 116, 114, 105, 101, 59], value: '⊴⃒' },
    { key: [110, 118, 114, 65, 114, 114, 59], value: '⤃' },
    { key: [110, 118, 114, 116, 114, 105, 101, 59], value: '⊵⃒' },
    { key: [110, 118, 115, 105, 109, 59], value: '∼⃒' },
    { key: [110, 119, 65, 114, 114, 59], value: '⇖' },
    { key: [110, 119, 97, 114, 104, 107, 59], value: '⤣' },
    { key: [110, 119, 97, 114, 114, 59], value: '↖' },
    { key: [110, 119, 97, 114, 114, 111, 119, 59], value: '↖' },
    { key: [110, 119, 110, 101, 97, 114, 59], value: '⤧' },
    { key: [111, 83, 59], value: 'Ⓢ' },
    { key: [111, 97, 99, 117, 116, 101, 59], value: 'ó' },
    { key: [111, 97, 115, 116, 59], value: '⊛' },
    { key: [111, 99, 105, 114, 59], value: '⊚' },
    { key: [111, 99, 105, 114, 99, 59], value: 'ô' },
    { key: [111, 99, 121, 59], value: 'о' },
    { key: [111, 100, 97, 115, 104, 59], value: '⊝' },
    { key: [111, 100, 98, 108, 97, 99, 59], value: 'ő' },
    { key: [111, 100, 105, 118, 59], value: '⨸' },
    { key: [111, 100, 111, 116, 59], value: '⊙' },
    { key: [111, 100, 115, 111, 108, 100, 59], value: '⦼' },
    { key: [111, 101, 108, 105, 103, 59], value: 'œ' },
    { key: [111, 102, 99, 105, 114, 59], value: '⦿' },
    { key: [111, 102, 114, 59], value: '𝔬' },
    { key: [111, 103, 111, 110, 59], value: '˛' },
    { key: [111, 103, 114, 97, 118, 101, 59], value: 'ò' },
    { key: [111, 103, 116, 59], value: '⧁' },
    { key: [111, 104, 98, 97, 114, 59], value: '⦵' },
    { key: [111, 104, 109, 59], value: 'Ω' },
    { key: [111, 105, 110, 116, 59], value: '∮' },
    { key: [111, 108, 97, 114, 114, 59], value: '↺' },
    { key: [111, 108, 99, 105, 114, 59], value: '⦾' },
    { key: [111, 108, 99, 114, 111, 115, 115, 59], value: '⦻' },
    { key: [111, 108, 105, 110, 101, 59], value: '‾' },
    { key: [111, 108, 116, 59], value: '⧀' },
    { key: [111, 109, 97, 99, 114, 59], value: 'ō' },
    { key: [111, 109, 101, 103, 97, 59], value: 'ω' },
    { key: [111, 109, 105, 99, 114, 111, 110, 59], value: 'ο' },
    { key: [111, 109, 105, 100, 59], value: '⦶' },
    { key: [111, 109, 105, 110, 117, 115, 59], value: '⊖' },
    { key: [111, 111, 112, 102, 59], value: '𝕠' },
    { key: [111, 112, 97, 114, 59], value: '⦷' },
    { key: [111, 112, 101, 114, 112, 59], value: '⦹' },
    { key: [111, 112, 108, 117, 115, 59], value: '⊕' },
    { key: [111, 114, 59], value: '∨' },
    { key: [111, 114, 97, 114, 114, 59], value: '↻' },
    { key: [111, 114, 100, 59], value: '⩝' },
    { key: [111, 114, 100, 101, 114, 59], value: 'ℴ' },
    { key: [111, 114, 100, 101, 114, 111, 102, 59], value: 'ℴ' },
    { key: [111, 114, 100, 102, 59], value: 'ª' },
    { key: [111, 114, 100, 109, 59], value: 'º' },
    { key: [111, 114, 105, 103, 111, 102, 59], value: '⊶' },
    { key: [111, 114, 111, 114, 59], value: '⩖' },
    { key: [111, 114, 115, 108, 111, 112, 101, 59], value: '⩗' },
    { key: [111, 114, 118, 59], value: '⩛' },
    { key: [111, 115, 99, 114, 59], value: 'ℴ' },
    { key: [111, 115, 108, 97, 115, 104, 59], value: 'ø' },
    { key: [111, 115, 111, 108, 59], value: '⊘' },
    { key: [111, 116, 105, 108, 100, 101, 59], value: 'õ' },
    { key: [111, 116, 105, 109, 101, 115, 59], value: '⊗' },
    { key: [111, 116, 105, 109, 101, 115, 97, 115, 59], value: '⨶' },
    { key: [111, 117, 109, 108, 59], value: 'ö' },
    { key: [111, 118, 98, 97, 114, 59], value: '⌽' },
    { key: [112, 97, 114, 59], value: '∥' },
    { key: [112, 97, 114, 97, 59], value: '¶' },
    { key: [112, 97, 114, 97, 108, 108, 101, 108, 59], value: '∥' },
    { key: [112, 97, 114, 115, 105, 109, 59], value: '⫳' },
    { key: [112, 97, 114, 115, 108, 59], value: '⫽' },
    { key: [112, 97, 114, 116, 59], value: '∂' },
    { key: [112, 99, 121, 59], value: 'п' },
    { key: [112, 101, 114, 99, 110, 116, 59], value: '%' },
    { key: [112, 101, 114, 105, 111, 100, 59], value: '.' },
    { key: [112, 101, 114, 109, 105, 108, 59], value: '‰' },
    { key: [112, 101, 114, 112, 59], value: '⊥' },
    { key: [112, 101, 114, 116, 101, 110, 107, 59], value: '‱' },
    { key: [112, 102, 114, 59], value: '𝔭' },
    { key: [112, 104, 105, 59], value: 'φ' },
    { key: [112, 104, 105, 118, 59], value: 'ϕ' },
    { key: [112, 104, 109, 109, 97, 116, 59], value: 'ℳ' },
    { key: [112, 104, 111, 110, 101, 59], value: '☎' },
    { key: [112, 105, 59], value: 'π' },
    { key: [112, 105, 116, 99, 104, 102, 111, 114, 107, 59], value: '⋔' },
    { key: [112, 105, 118, 59], value: 'ϖ' },
    { key: [112, 108, 97, 110, 99, 107, 59], value: 'ℏ' },
    { key: [112, 108, 97, 110, 99, 107, 104, 59], value: 'ℎ' },
    { key: [112, 108, 97, 110, 107, 118, 59], value: 'ℏ' },
    { key: [112, 108, 117, 115, 59], value: '+' },
    { key: [112, 108, 117, 115, 97, 99, 105, 114, 59], value: '⨣' },
    { key: [112, 108, 117, 115, 98, 59], value: '⊞' },
    { key: [112, 108, 117, 115, 99, 105, 114, 59], value: '⨢' },
    { key: [112, 108, 117, 115, 100, 111, 59], value: '∔' },
    { key: [112, 108, 117, 115, 100, 117, 59], value: '⨥' },
    { key: [112, 108, 117, 115, 101, 59], value: '⩲' },
    { key: [112, 108, 117, 115, 109, 110, 59], value: '±' },
    { key: [112, 108, 117, 115, 115, 105, 109, 59], value: '⨦' },
    { key: [112, 108, 117, 115, 116, 119, 111, 59], value: '⨧' },
    { key: [112, 109, 59], value: '±' },
    { key: [112, 111, 105, 110, 116, 105, 110, 116, 59], value: '⨕' },
    { key: [112, 111, 112, 102, 59], value: '𝕡' },
    { key: [112, 111, 117, 110, 100, 59], value: '£' },
    { key: [112, 114, 59], value: '≺' },
    { key: [112, 114, 69, 59], value: '⪳' },
    { key: [112, 114, 97, 112, 59], value: '⪷' },
    { key: [112, 114, 99, 117, 101, 59], value: '≼' },
    { key: [112, 114, 101, 59], value: '⪯' },
    { key: [112, 114, 101, 99, 59], value: '≺' },
    { key: [112, 114, 101, 99, 97, 112, 112, 114, 111, 120, 59], value: '⪷' },
    { key: [112, 114, 101, 99, 99, 117, 114, 108, 121, 101, 113, 59], value: '≼' },
    { key: [112, 114, 101, 99, 101, 113, 59], value: '⪯' },
    { key: [112, 114, 101, 99, 110, 97, 112, 112, 114, 111, 120, 59], value: '⪹' },
    { key: [112, 114, 101, 99, 110, 101, 113, 113, 59], value: '⪵' },
    { key: [112, 114, 101, 99, 110, 115, 105, 109, 59], value: '⋨' },
    { key: [112, 114, 101, 99, 115, 105, 109, 59], value: '≾' },
    { key: [112, 114, 105, 109, 101, 59], value: '′' },
    { key: [112, 114, 105, 109, 101, 115, 59], value: 'ℙ' },
    { key: [112, 114, 110, 69, 59], value: '⪵' },
    { key: [112, 114, 110, 97, 112, 59], value: '⪹' },
    { key: [112, 114, 110, 115, 105, 109, 59], value: '⋨' },
    { key: [112, 114, 111, 100, 59], value: '∏' },
    { key: [112, 114, 111, 102, 97, 108, 97, 114, 59], value: '⌮' },
    { key: [112, 114, 111, 102, 108, 105, 110, 101, 59], value: '⌒' },
    { key: [112, 114, 111, 102, 115, 117, 114, 102, 59], value: '⌓' },
    { key: [112, 114, 111, 112, 59], value: '∝' },
    { key: [112, 114, 111, 112, 116, 111, 59], value: '∝' },
    { key: [112, 114, 115, 105, 109, 59], value: '≾' },
    { key: [112, 114, 117, 114, 101, 108, 59], value: '⊰' },
    { key: [112, 115, 99, 114, 59], value: '𝓅' },
    { key: [112, 115, 105, 59], value: 'ψ' },
    { key: [112, 117, 110, 99, 115, 112, 59], value: ' ' },
    { key: [113, 102, 114, 59], value: '𝔮' },
    { key: [113, 105, 110, 116, 59], value: '⨌' },
    { key: [113, 111, 112, 102, 59], value: '𝕢' },
    { key: [113, 112, 114, 105, 109, 101, 59], value: '⁗' },
    { key: [113, 115, 99, 114, 59], value: '𝓆' },
    { key: [113, 117, 97, 116, 101, 114, 110, 105, 111, 110, 115, 59], value: 'ℍ' },
    { key: [113, 117, 97, 116, 105, 110, 116, 59], value: '⨖' },
    { key: [113, 117, 101, 115, 116, 59], value: '?' },
    { key: [113, 117, 101, 115, 116, 101, 113, 59], value: '≟' },
    { key: [113, 117, 111, 116, 59], value: '"' },
    { key: [114, 65, 97, 114, 114, 59], value: '⇛' },
    { key: [114, 65, 114, 114, 59], value: '⇒' },
    { key: [114, 65, 116, 97, 105, 108, 59], value: '⤜' },
    { key: [114, 66, 97, 114, 114, 59], value: '⤏' },
    { key: [114, 72, 97, 114, 59], value: '⥤' },
    { key: [114, 97, 99, 101, 59], value: '∽̱' },
    { key: [114, 97, 99, 117, 116, 101, 59], value: 'ŕ' },
    { key: [114, 97, 100, 105, 99, 59], value: '√' },
    { key: [114, 97, 101, 109, 112, 116, 121, 118, 59], value: '⦳' },
    { key: [114, 97, 110, 103, 59], value: '⟩' },
    { key: [114, 97, 110, 103, 100, 59], value: '⦒' },
    { key: [114, 97, 110, 103, 101, 59], value: '⦥' },
    { key: [114, 97, 110, 103, 108, 101, 59], value: '⟩' },
    { key: [114, 97, 113, 117, 111, 59], value: '»' },
    { key: [114, 97, 114, 114, 59], value: '→' },
    { key: [114, 97, 114, 114, 97, 112, 59], value: '⥵' },
    { key: [114, 97, 114, 114, 98, 59], value: '⇥' },
    { key: [114, 97, 114, 114, 98, 102, 115, 59], value: '⤠' },
    { key: [114, 97, 114, 114, 99, 59], value: '⤳' },
    { key: [114, 97, 114, 114, 102, 115, 59], value: '⤞' },
    { key: [114, 97, 114, 114, 104, 107, 59], value: '↪' },
    { key: [114, 97, 114, 114, 108, 112, 59], value: '↬' },
    { key: [114, 97, 114, 114, 112, 108, 59], value: '⥅' },
    { key: [114, 97, 114, 114, 115, 105, 109, 59], value: '⥴' },
    { key: [114, 97, 114, 114, 116, 108, 59], value: '↣' },
    { key: [114, 97, 114, 114, 119, 59], value: '↝' },
    { key: [114, 97, 116, 97, 105, 108, 59], value: '⤚' },
    { key: [114, 97, 116, 105, 111, 59], value: '∶' },
    { key: [114, 97, 116, 105, 111, 110, 97, 108, 115, 59], value: 'ℚ' },
    { key: [114, 98, 97, 114, 114, 59], value: '⤍' },
    { key: [114, 98, 98, 114, 107, 59], value: '❳' },
    { key: [114, 98, 114, 97, 99, 101, 59], value: ' }' },
    { key: [114, 98, 114, 97, 99, 107, 59], value: ']' },
    { key: [114, 98, 114, 107, 101, 59], value: '⦌' },
    { key: [114, 98, 114, 107, 115, 108, 100, 59], value: '⦎' },
    { key: [114, 98, 114, 107, 115, 108, 117, 59], value: '⦐' },
    { key: [114, 99, 97, 114, 111, 110, 59], value: 'ř' },
    { key: [114, 99, 101, 100, 105, 108, 59], value: 'ŗ' },
    { key: [114, 99, 101, 105, 108, 59], value: '⌉' },
    { key: [114, 99, 117, 98, 59], value: ' }' },
    { key: [114, 99, 121, 59], value: 'р' },
    { key: [114, 100, 99, 97, 59], value: '⤷' },
    { key: [114, 100, 108, 100, 104, 97, 114, 59], value: '⥩' },
    { key: [114, 100, 113, 117, 111, 59], value: '”' },
    { key: [114, 100, 113, 117, 111, 114, 59], value: '”' },
    { key: [114, 100, 115, 104, 59], value: '↳' },
    { key: [114, 101, 97, 108, 59], value: 'ℜ' },
    { key: [114, 101, 97, 108, 105, 110, 101, 59], value: 'ℛ' },
    { key: [114, 101, 97, 108, 112, 97, 114, 116, 59], value: 'ℜ' },
    { key: [114, 101, 97, 108, 115, 59], value: 'ℝ' },
    { key: [114, 101, 99, 116, 59], value: '▭' },
    { key: [114, 101, 103, 59], value: '®' },
    { key: [114, 102, 105, 115, 104, 116, 59], value: '⥽' },
    { key: [114, 102, 108, 111, 111, 114, 59], value: '⌋' },
    { key: [114, 102, 114, 59], value: '𝔯' },
    { key: [114, 104, 97, 114, 100, 59], value: '⇁' },
    { key: [114, 104, 97, 114, 117, 59], value: '⇀' },
    { key: [114, 104, 97, 114, 117, 108, 59], value: '⥬' },
    { key: [114, 104, 111, 59], value: 'ρ' },
    { key: [114, 104, 111, 118, 59], value: 'ϱ' },
    { key: [114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '→' },
    { key: [114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 116, 97, 105, 108, 59], value: '↣' },
    { key: [114, 105, 103, 104, 116, 104, 97, 114, 112, 111, 111, 110, 100, 111, 119, 110, 59], value: '⇁' },
    { key: [114, 105, 103, 104, 116, 104, 97, 114, 112, 111, 111, 110, 117, 112, 59], value: '⇀' },
    { key: [114, 105, 103, 104, 116, 108, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59], value: '⇄' },
    { key: [114, 105, 103, 104, 116, 108, 101, 102, 116, 104, 97, 114, 112, 111, 111, 110, 115, 59], value: '⇌' },
    { key: [114, 105, 103, 104, 116, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59], value: '⇉' },
    { key: [114, 105, 103, 104, 116, 115, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59], value: '↝' },
    { key: [114, 105, 103, 104, 116, 116, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59], value: '⋌' },
    { key: [114, 105, 110, 103, 59], value: '˚' },
    { key: [114, 105, 115, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59], value: '≓' },
    { key: [114, 108, 97, 114, 114, 59], value: '⇄' },
    { key: [114, 108, 104, 97, 114, 59], value: '⇌' },
    { key: [114, 108, 109, 59], value: '‏' },
    { key: [114, 109, 111, 117, 115, 116, 59], value: '⎱' },
    { key: [114, 109, 111, 117, 115, 116, 97, 99, 104, 101, 59], value: '⎱' },
    { key: [114, 110, 109, 105, 100, 59], value: '⫮' },
    { key: [114, 111, 97, 110, 103, 59], value: '⟭' },
    { key: [114, 111, 97, 114, 114, 59], value: '⇾' },
    { key: [114, 111, 98, 114, 107, 59], value: '⟧' },
    { key: [114, 111, 112, 97, 114, 59], value: '⦆' },
    { key: [114, 111, 112, 102, 59], value: '𝕣' },
    { key: [114, 111, 112, 108, 117, 115, 59], value: '⨮' },
    { key: [114, 111, 116, 105, 109, 101, 115, 59], value: '⨵' },
    { key: [114, 112, 97, 114, 59], value: ')' },
    { key: [114, 112, 97, 114, 103, 116, 59], value: '⦔' },
    { key: [114, 112, 112, 111, 108, 105, 110, 116, 59], value: '⨒' },
    { key: [114, 114, 97, 114, 114, 59], value: '⇉' },
    { key: [114, 115, 97, 113, 117, 111, 59], value: '›' },
    { key: [114, 115, 99, 114, 59], value: '𝓇' },
    { key: [114, 115, 104, 59], value: '↱' },
    { key: [114, 115, 113, 98, 59], value: ']' },
    { key: [114, 115, 113, 117, 111, 59], value: '’' },
    { key: [114, 115, 113, 117, 111, 114, 59], value: '’' },
    { key: [114, 116, 104, 114, 101, 101, 59], value: '⋌' },
    { key: [114, 116, 105, 109, 101, 115, 59], value: '⋊' },
    { key: [114, 116, 114, 105, 59], value: '▹' },
    { key: [114, 116, 114, 105, 101, 59], value: '⊵' },
    { key: [114, 116, 114, 105, 102, 59], value: '▸' },
    { key: [114, 116, 114, 105, 108, 116, 114, 105, 59], value: '⧎' },
    { key: [114, 117, 108, 117, 104, 97, 114, 59], value: '⥨' },
    { key: [114, 120, 59], value: '℞' },
    { key: [115, 97, 99, 117, 116, 101, 59], value: 'ś' },
    { key: [115, 98, 113, 117, 111, 59], value: '‚' },
    { key: [115, 99, 59], value: '≻' },
    { key: [115, 99, 69, 59], value: '⪴' },
    { key: [115, 99, 97, 112, 59], value: '⪸' },
    { key: [115, 99, 97, 114, 111, 110, 59], value: 'š' },
    { key: [115, 99, 99, 117, 101, 59], value: '≽' },
    { key: [115, 99, 101, 59], value: '⪰' },
    { key: [115, 99, 101, 100, 105, 108, 59], value: 'ş' },
    { key: [115, 99, 105, 114, 99, 59], value: 'ŝ' },
    { key: [115, 99, 110, 69, 59], value: '⪶' },
    { key: [115, 99, 110, 97, 112, 59], value: '⪺' },
    { key: [115, 99, 110, 115, 105, 109, 59], value: '⋩' },
    { key: [115, 99, 112, 111, 108, 105, 110, 116, 59], value: '⨓' },
    { key: [115, 99, 115, 105, 109, 59], value: '≿' },
    { key: [115, 99, 121, 59], value: 'с' },
    { key: [115, 100, 111, 116, 59], value: '⋅' },
    { key: [115, 100, 111, 116, 98, 59], value: '⊡' },
    { key: [115, 100, 111, 116, 101, 59], value: '⩦' },
    { key: [115, 101, 65, 114, 114, 59], value: '⇘' },
    { key: [115, 101, 97, 114, 104, 107, 59], value: '⤥' },
    { key: [115, 101, 97, 114, 114, 59], value: '↘' },
    { key: [115, 101, 97, 114, 114, 111, 119, 59], value: '↘' },
    { key: [115, 101, 99, 116, 59], value: '§' },
    { key: [115, 101, 109, 105, 59], value: ';' },
    { key: [115, 101, 115, 119, 97, 114, 59], value: '⤩' },
    { key: [115, 101, 116, 109, 105, 110, 117, 115, 59], value: '∖' },
    { key: [115, 101, 116, 109, 110, 59], value: '∖' },
    { key: [115, 101, 120, 116, 59], value: '✶' },
    { key: [115, 102, 114, 59], value: '𝔰' },
    { key: [115, 102, 114, 111, 119, 110, 59], value: '⌢' },
    { key: [115, 104, 97, 114, 112, 59], value: '♯' },
    { key: [115, 104, 99, 104, 99, 121, 59], value: 'щ' },
    { key: [115, 104, 99, 121, 59], value: 'ш' },
    { key: [115, 104, 111, 114, 116, 109, 105, 100, 59], value: '∣' },
    { key: [115, 104, 111, 114, 116, 112, 97, 114, 97, 108, 108, 101, 108, 59], value: '∥' },
    { key: [115, 104, 121, 59], value: '­' },
    { key: [115, 105, 103, 109, 97, 59], value: 'σ' },
    { key: [115, 105, 103, 109, 97, 102, 59], value: 'ς' },
    { key: [115, 105, 103, 109, 97, 118, 59], value: 'ς' },
    { key: [115, 105, 109, 59], value: '∼' },
    { key: [115, 105, 109, 100, 111, 116, 59], value: '⩪' },
    { key: [115, 105, 109, 101, 59], value: '≃' },
    { key: [115, 105, 109, 101, 113, 59], value: '≃' },
    { key: [115, 105, 109, 103, 59], value: '⪞' },
    { key: [115, 105, 109, 103, 69, 59], value: '⪠' },
    { key: [115, 105, 109, 108, 59], value: '⪝' },
    { key: [115, 105, 109, 108, 69, 59], value: '⪟' },
    { key: [115, 105, 109, 110, 101, 59], value: '≆' },
    { key: [115, 105, 109, 112, 108, 117, 115, 59], value: '⨤' },
    { key: [115, 105, 109, 114, 97, 114, 114, 59], value: '⥲' },
    { key: [115, 108, 97, 114, 114, 59], value: '←' },
    { key: [115, 109, 97, 108, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59], value: '∖' },
    { key: [115, 109, 97, 115, 104, 112, 59], value: '⨳' },
    { key: [115, 109, 101, 112, 97, 114, 115, 108, 59], value: '⧤' },
    { key: [115, 109, 105, 100, 59], value: '∣' },
    { key: [115, 109, 105, 108, 101, 59], value: '⌣' },
    { key: [115, 109, 116, 59], value: '⪪' },
    { key: [115, 109, 116, 101, 59], value: '⪬' },
    { key: [115, 109, 116, 101, 115, 59], value: '⪬︀' },
    { key: [115, 111, 102, 116, 99, 121, 59], value: 'ь' },
    { key: [115, 111, 108, 59], value: '/' },
    { key: [115, 111, 108, 98, 59], value: '⧄' },
    { key: [115, 111, 108, 98, 97, 114, 59], value: '⌿' },
    { key: [115, 111, 112, 102, 59], value: '𝕤' },
    { key: [115, 112, 97, 100, 101, 115, 59], value: '♠' },
    { key: [115, 112, 97, 100, 101, 115, 117, 105, 116, 59], value: '♠' },
    { key: [115, 112, 97, 114, 59], value: '∥' },
    { key: [115, 113, 99, 97, 112, 59], value: '⊓' },
    { key: [115, 113, 99, 97, 112, 115, 59], value: '⊓︀' },
    { key: [115, 113, 99, 117, 112, 59], value: '⊔' },
    { key: [115, 113, 99, 117, 112, 115, 59], value: '⊔︀' },
    { key: [115, 113, 115, 117, 98, 59], value: '⊏' },
    { key: [115, 113, 115, 117, 98, 101, 59], value: '⊑' },
    { key: [115, 113, 115, 117, 98, 115, 101, 116, 59], value: '⊏' },
    { key: [115, 113, 115, 117, 98, 115, 101, 116, 101, 113, 59], value: '⊑' },
    { key: [115, 113, 115, 117, 112, 59], value: '⊐' },
    { key: [115, 113, 115, 117, 112, 101, 59], value: '⊒' },
    { key: [115, 113, 115, 117, 112, 115, 101, 116, 59], value: '⊐' },
    { key: [115, 113, 115, 117, 112, 115, 101, 116, 101, 113, 59], value: '⊒' },
    { key: [115, 113, 117, 59], value: '□' },
    { key: [115, 113, 117, 97, 114, 101, 59], value: '□' },
    { key: [115, 113, 117, 97, 114, 102, 59], value: '▪' },
    { key: [115, 113, 117, 102, 59], value: '▪' },
    { key: [115, 114, 97, 114, 114, 59], value: '→' },
    { key: [115, 115, 99, 114, 59], value: '𝓈' },
    { key: [115, 115, 101, 116, 109, 110, 59], value: '∖' },
    { key: [115, 115, 109, 105, 108, 101, 59], value: '⌣' },
    { key: [115, 115, 116, 97, 114, 102, 59], value: '⋆' },
    { key: [115, 116, 97, 114, 59], value: '☆' },
    { key: [115, 116, 97, 114, 102, 59], value: '★' },
    { key: [115, 116, 114, 97, 105, 103, 104, 116, 101, 112, 115, 105, 108, 111, 110, 59], value: 'ϵ' },
    { key: [115, 116, 114, 97, 105, 103, 104, 116, 112, 104, 105, 59], value: 'ϕ' },
    { key: [115, 116, 114, 110, 115, 59], value: '¯' },
    { key: [115, 117, 98, 59], value: '⊂' },
    { key: [115, 117, 98, 69, 59], value: '⫅' },
    { key: [115, 117, 98, 100, 111, 116, 59], value: '⪽' },
    { key: [115, 117, 98, 101, 59], value: '⊆' },
    { key: [115, 117, 98, 101, 100, 111, 116, 59], value: '⫃' },
    { key: [115, 117, 98, 109, 117, 108, 116, 59], value: '⫁' },
    { key: [115, 117, 98, 110, 69, 59], value: '⫋' },
    { key: [115, 117, 98, 110, 101, 59], value: '⊊' },
    { key: [115, 117, 98, 112, 108, 117, 115, 59], value: '⪿' },
    { key: [115, 117, 98, 114, 97, 114, 114, 59], value: '⥹' },
    { key: [115, 117, 98, 115, 101, 116, 59], value: '⊂' },
    { key: [115, 117, 98, 115, 101, 116, 101, 113, 59], value: '⊆' },
    { key: [115, 117, 98, 115, 101, 116, 101, 113, 113, 59], value: '⫅' },
    { key: [115, 117, 98, 115, 101, 116, 110, 101, 113, 59], value: '⊊' },
    { key: [115, 117, 98, 115, 101, 116, 110, 101, 113, 113, 59], value: '⫋' },
    { key: [115, 117, 98, 115, 105, 109, 59], value: '⫇' },
    { key: [115, 117, 98, 115, 117, 98, 59], value: '⫕' },
    { key: [115, 117, 98, 115, 117, 112, 59], value: '⫓' },
    { key: [115, 117, 99, 99, 59], value: '≻' },
    { key: [115, 117, 99, 99, 97, 112, 112, 114, 111, 120, 59], value: '⪸' },
    { key: [115, 117, 99, 99, 99, 117, 114, 108, 121, 101, 113, 59], value: '≽' },
    { key: [115, 117, 99, 99, 101, 113, 59], value: '⪰' },
    { key: [115, 117, 99, 99, 110, 97, 112, 112, 114, 111, 120, 59], value: '⪺' },
    { key: [115, 117, 99, 99, 110, 101, 113, 113, 59], value: '⪶' },
    { key: [115, 117, 99, 99, 110, 115, 105, 109, 59], value: '⋩' },
    { key: [115, 117, 99, 99, 115, 105, 109, 59], value: '≿' },
    { key: [115, 117, 109, 59], value: '∑' },
    { key: [115, 117, 110, 103, 59], value: '♪' },
    { key: [115, 117, 112, 49, 59], value: '¹' },
    { key: [115, 117, 112, 50, 59], value: '²' },
    { key: [115, 117, 112, 51, 59], value: '³' },
    { key: [115, 117, 112, 59], value: '⊃' },
    { key: [115, 117, 112, 69, 59], value: '⫆' },
    { key: [115, 117, 112, 100, 111, 116, 59], value: '⪾' },
    { key: [115, 117, 112, 100, 115, 117, 98, 59], value: '⫘' },
    { key: [115, 117, 112, 101, 59], value: '⊇' },
    { key: [115, 117, 112, 101, 100, 111, 116, 59], value: '⫄' },
    { key: [115, 117, 112, 104, 115, 111, 108, 59], value: '⟉' },
    { key: [115, 117, 112, 104, 115, 117, 98, 59], value: '⫗' },
    { key: [115, 117, 112, 108, 97, 114, 114, 59], value: '⥻' },
    { key: [115, 117, 112, 109, 117, 108, 116, 59], value: '⫂' },
    { key: [115, 117, 112, 110, 69, 59], value: '⫌' },
    { key: [115, 117, 112, 110, 101, 59], value: '⊋' },
    { key: [115, 117, 112, 112, 108, 117, 115, 59], value: '⫀' },
    { key: [115, 117, 112, 115, 101, 116, 59], value: '⊃' },
    { key: [115, 117, 112, 115, 101, 116, 101, 113, 59], value: '⊇' },
    { key: [115, 117, 112, 115, 101, 116, 101, 113, 113, 59], value: '⫆' },
    { key: [115, 117, 112, 115, 101, 116, 110, 101, 113, 59], value: '⊋' },
    { key: [115, 117, 112, 115, 101, 116, 110, 101, 113, 113, 59], value: '⫌' },
    { key: [115, 117, 112, 115, 105, 109, 59], value: '⫈' },
    { key: [115, 117, 112, 115, 117, 98, 59], value: '⫔' },
    { key: [115, 117, 112, 115, 117, 112, 59], value: '⫖' },
    { key: [115, 119, 65, 114, 114, 59], value: '⇙' },
    { key: [115, 119, 97, 114, 104, 107, 59], value: '⤦' },
    { key: [115, 119, 97, 114, 114, 59], value: '↙' },
    { key: [115, 119, 97, 114, 114, 111, 119, 59], value: '↙' },
    { key: [115, 119, 110, 119, 97, 114, 59], value: '⤪' },
    { key: [115, 122, 108, 105, 103, 59], value: 'ß' },
    { key: [116, 97, 114, 103, 101, 116, 59], value: '⌖' },
    { key: [116, 97, 117, 59], value: 'τ' },
    { key: [116, 98, 114, 107, 59], value: '⎴' },
    { key: [116, 99, 97, 114, 111, 110, 59], value: 'ť' },
    { key: [116, 99, 101, 100, 105, 108, 59], value: 'ţ' },
    { key: [116, 99, 121, 59], value: 'т' },
    { key: [116, 100, 111, 116, 59], value: '⃛' },
    { key: [116, 101, 108, 114, 101, 99, 59], value: '⌕' },
    { key: [116, 102, 114, 59], value: '𝔱' },
    { key: [116, 104, 101, 114, 101, 52, 59], value: '∴' },
    { key: [116, 104, 101, 114, 101, 102, 111, 114, 101, 59], value: '∴' },
    { key: [116, 104, 101, 116, 97, 59], value: 'θ' },
    { key: [116, 104, 101, 116, 97, 115, 121, 109, 59], value: 'ϑ' },
    { key: [116, 104, 101, 116, 97, 118, 59], value: 'ϑ' },
    { key: [116, 104, 105, 99, 107, 97, 112, 112, 114, 111, 120, 59], value: '≈' },
    { key: [116, 104, 105, 99, 107, 115, 105, 109, 59], value: '∼' },
    { key: [116, 104, 105, 110, 115, 112, 59], value: ' ' },
    { key: [116, 104, 107, 97, 112, 59], value: '≈' },
    { key: [116, 104, 107, 115, 105, 109, 59], value: '∼' },
    { key: [116, 104, 111, 114, 110, 59], value: 'þ' },
    { key: [116, 105, 108, 100, 101, 59], value: '˜' },
    { key: [116, 105, 109, 101, 115, 59], value: '×' },
    { key: [116, 105, 109, 101, 115, 98, 59], value: '⊠' },
    { key: [116, 105, 109, 101, 115, 98, 97, 114, 59], value: '⨱' },
    { key: [116, 105, 109, 101, 115, 100, 59], value: '⨰' },
    { key: [116, 105, 110, 116, 59], value: '∭' },
    { key: [116, 111, 101, 97, 59], value: '⤨' },
    { key: [116, 111, 112, 59], value: '⊤' },
    { key: [116, 111, 112, 98, 111, 116, 59], value: '⌶' },
    { key: [116, 111, 112, 99, 105, 114, 59], value: '⫱' },
    { key: [116, 111, 112, 102, 59], value: '𝕥' },
    { key: [116, 111, 112, 102, 111, 114, 107, 59], value: '⫚' },
    { key: [116, 111, 115, 97, 59], value: '⤩' },
    { key: [116, 112, 114, 105, 109, 101, 59], value: '‴' },
    { key: [116, 114, 97, 100, 101, 59], value: '™' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 59], value: '▵' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 100, 111, 119, 110, 59], value: '▿' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 59], value: '◃' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 101, 113, 59], value: '⊴' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 113, 59], value: '≜' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 59], value: '▹' },
    { key: [116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 101, 113, 59], value: '⊵' },
    { key: [116, 114, 105, 100, 111, 116, 59], value: '◬' },
    { key: [116, 114, 105, 101, 59], value: '≜' },
    { key: [116, 114, 105, 109, 105, 110, 117, 115, 59], value: '⨺' },
    { key: [116, 114, 105, 112, 108, 117, 115, 59], value: '⨹' },
    { key: [116, 114, 105, 115, 98, 59], value: '⧍' },
    { key: [116, 114, 105, 116, 105, 109, 101, 59], value: '⨻' },
    { key: [116, 114, 112, 101, 122, 105, 117, 109, 59], value: '⏢' },
    { key: [116, 115, 99, 114, 59], value: '𝓉' },
    { key: [116, 115, 99, 121, 59], value: 'ц' },
    { key: [116, 115, 104, 99, 121, 59], value: 'ћ' },
    { key: [116, 115, 116, 114, 111, 107, 59], value: 'ŧ' },
    { key: [116, 119, 105, 120, 116, 59], value: '≬' },
    { key: [116, 119, 111, 104, 101, 97, 100, 108, 101, 102, 116, 97, 114, 114, 111, 119, 59], value: '↞' },
    { key: [116, 119, 111, 104, 101, 97, 100, 114, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59], value: '↠' },
    { key: [117, 65, 114, 114, 59], value: '⇑' },
    { key: [117, 72, 97, 114, 59], value: '⥣' },
    { key: [117, 97, 99, 117, 116, 101, 59], value: 'ú' },
    { key: [117, 97, 114, 114, 59], value: '↑' },
    { key: [117, 98, 114, 99, 121, 59], value: 'ў' },
    { key: [117, 98, 114, 101, 118, 101, 59], value: 'ŭ' },
    { key: [117, 99, 105, 114, 99, 59], value: 'û' },
    { key: [117, 99, 121, 59], value: 'у' },
    { key: [117, 100, 97, 114, 114, 59], value: '⇅' },
    { key: [117, 100, 98, 108, 97, 99, 59], value: 'ű' },
    { key: [117, 100, 104, 97, 114, 59], value: '⥮' },
    { key: [117, 102, 105, 115, 104, 116, 59], value: '⥾' },
    { key: [117, 102, 114, 59], value: '𝔲' },
    { key: [117, 103, 114, 97, 118, 101, 59], value: 'ù' },
    { key: [117, 104, 97, 114, 108, 59], value: '↿' },
    { key: [117, 104, 97, 114, 114, 59], value: '↾' },
    { key: [117, 104, 98, 108, 107, 59], value: '▀' },
    { key: [117, 108, 99, 111, 114, 110, 59], value: '⌜' },
    { key: [117, 108, 99, 111, 114, 110, 101, 114, 59], value: '⌜' },
    { key: [117, 108, 99, 114, 111, 112, 59], value: '⌏' },
    { key: [117, 108, 116, 114, 105, 59], value: '◸' },
    { key: [117, 109, 97, 99, 114, 59], value: 'ū' },
    { key: [117, 109, 108, 59], value: '¨' },
    { key: [117, 111, 103, 111, 110, 59], value: 'ų' },
    { key: [117, 111, 112, 102, 59], value: '𝕦' },
    { key: [117, 112, 97, 114, 114, 111, 119, 59], value: '↑' },
    { key: [117, 112, 100, 111, 119, 110, 97, 114, 114, 111, 119, 59], value: '↕' },
    { key: [117, 112, 104, 97, 114, 112, 111, 111, 110, 108, 101, 102, 116, 59], value: '↿' },
    { key: [117, 112, 104, 97, 114, 112, 111, 111, 110, 114, 105, 103, 104, 116, 59], value: '↾' },
    { key: [117, 112, 108, 117, 115, 59], value: '⊎' },
    { key: [117, 112, 115, 105, 59], value: 'υ' },
    { key: [117, 112, 115, 105, 104, 59], value: 'ϒ' },
    { key: [117, 112, 115, 105, 108, 111, 110, 59], value: 'υ' },
    { key: [117, 112, 117, 112, 97, 114, 114, 111, 119, 115, 59], value: '⇈' },
    { key: [117, 114, 99, 111, 114, 110, 59], value: '⌝' },
    { key: [117, 114, 99, 111, 114, 110, 101, 114, 59], value: '⌝' },
    { key: [117, 114, 99, 114, 111, 112, 59], value: '⌎' },
    { key: [117, 114, 105, 110, 103, 59], value: 'ů' },
    { key: [117, 114, 116, 114, 105, 59], value: '◹' },
    { key: [117, 115, 99, 114, 59], value: '𝓊' },
    { key: [117, 116, 100, 111, 116, 59], value: '⋰' },
    { key: [117, 116, 105, 108, 100, 101, 59], value: 'ũ' },
    { key: [117, 116, 114, 105, 59], value: '▵' },
    { key: [117, 116, 114, 105, 102, 59], value: '▴' },
    { key: [117, 117, 97, 114, 114, 59], value: '⇈' },
    { key: [117, 117, 109, 108, 59], value: 'ü' },
    { key: [117, 119, 97, 110, 103, 108, 101, 59], value: '⦧' },
    { key: [118, 65, 114, 114, 59], value: '⇕' },
    { key: [118, 66, 97, 114, 59], value: '⫨' },
    { key: [118, 66, 97, 114, 118, 59], value: '⫩' },
    { key: [118, 68, 97, 115, 104, 59], value: '⊨' },
    { key: [118, 97, 110, 103, 114, 116, 59], value: '⦜' },
    { key: [118, 97, 114, 101, 112, 115, 105, 108, 111, 110, 59], value: 'ϵ' },
    { key: [118, 97, 114, 107, 97, 112, 112, 97, 59], value: 'ϰ' },
    { key: [118, 97, 114, 110, 111, 116, 104, 105, 110, 103, 59], value: '∅' },
    { key: [118, 97, 114, 112, 104, 105, 59], value: 'ϕ' },
    { key: [118, 97, 114, 112, 105, 59], value: 'ϖ' },
    { key: [118, 97, 114, 112, 114, 111, 112, 116, 111, 59], value: '∝' },
    { key: [118, 97, 114, 114, 59], value: '↕' },
    { key: [118, 97, 114, 114, 104, 111, 59], value: 'ϱ' },
    { key: [118, 97, 114, 115, 105, 103, 109, 97, 59], value: 'ς' },
    { key: [118, 97, 114, 115, 117, 98, 115, 101, 116, 110, 101, 113, 59], value: '⊊︀' },
    { key: [118, 97, 114, 115, 117, 98, 115, 101, 116, 110, 101, 113, 113, 59], value: '⫋︀' },
    { key: [118, 97, 114, 115, 117, 112, 115, 101, 116, 110, 101, 113, 59], value: '⊋︀' },
    { key: [118, 97, 114, 115, 117, 112, 115, 101, 116, 110, 101, 113, 113, 59], value: '⫌︀' },
    { key: [118, 97, 114, 116, 104, 101, 116, 97, 59], value: 'ϑ' },
    { key: [118, 97, 114, 116, 114, 105, 97, 110, 103, 108, 101, 108, 101, 102, 116, 59], value: '⊲' },
    { key: [118, 97, 114, 116, 114, 105, 97, 110, 103, 108, 101, 114, 105, 103, 104, 116, 59], value: '⊳' },
    { key: [118, 99, 121, 59], value: 'в' },
    { key: [118, 100, 97, 115, 104, 59], value: '⊢' },
    { key: [118, 101, 101, 59], value: '∨' },
    { key: [118, 101, 101, 98, 97, 114, 59], value: '⊻' },
    { key: [118, 101, 101, 101, 113, 59], value: '≚' },
    { key: [118, 101, 108, 108, 105, 112, 59], value: '⋮' },
    { key: [118, 101, 114, 98, 97, 114, 59], value: '|' },
    { key: [118, 101, 114, 116, 59], value: '|' },
    { key: [118, 102, 114, 59], value: '𝔳' },
    { key: [118, 108, 116, 114, 105, 59], value: '⊲' },
    { key: [118, 110, 115, 117, 98, 59], value: '⊂⃒' },
    { key: [118, 110, 115, 117, 112, 59], value: '⊃⃒' },
    { key: [118, 111, 112, 102, 59], value: '𝕧' },
    { key: [118, 112, 114, 111, 112, 59], value: '∝' },
    { key: [118, 114, 116, 114, 105, 59], value: '⊳' },
    { key: [118, 115, 99, 114, 59], value: '𝓋' },
    { key: [118, 115, 117, 98, 110, 69, 59], value: '⫋︀' },
    { key: [118, 115, 117, 98, 110, 101, 59], value: '⊊︀' },
    { key: [118, 115, 117, 112, 110, 69, 59], value: '⫌︀' },
    { key: [118, 115, 117, 112, 110, 101, 59], value: '⊋︀' },
    { key: [118, 122, 105, 103, 122, 97, 103, 59], value: '⦚' },
    { key: [119, 99, 105, 114, 99, 59], value: 'ŵ' },
    { key: [119, 101, 100, 98, 97, 114, 59], value: '⩟' },
    { key: [119, 101, 100, 103, 101, 59], value: '∧' },
    { key: [119, 101, 100, 103, 101, 113, 59], value: '≙' },
    { key: [119, 101, 105, 101, 114, 112, 59], value: '℘' },
    { key: [119, 102, 114, 59], value: '𝔴' },
    { key: [119, 111, 112, 102, 59], value: '𝕨' },
    { key: [119, 112, 59], value: '℘' },
    { key: [119, 114, 59], value: '≀' },
    { key: [119, 114, 101, 97, 116, 104, 59], value: '≀' },
    { key: [119, 115, 99, 114, 59], value: '𝓌' },
    { key: [120, 99, 97, 112, 59], value: '⋂' },
    { key: [120, 99, 105, 114, 99, 59], value: '◯' },
    { key: [120, 99, 117, 112, 59], value: '⋃' },
    { key: [120, 100, 116, 114, 105, 59], value: '▽' },
    { key: [120, 102, 114, 59], value: '𝔵' },
    { key: [120, 104, 65, 114, 114, 59], value: '⟺' },
    { key: [120, 104, 97, 114, 114, 59], value: '⟷' },
    { key: [120, 105, 59], value: 'ξ' },
    { key: [120, 108, 65, 114, 114, 59], value: '⟸' },
    { key: [120, 108, 97, 114, 114, 59], value: '⟵' },
    { key: [120, 109, 97, 112, 59], value: '⟼' },
    { key: [120, 110, 105, 115, 59], value: '⋻' },
    { key: [120, 111, 100, 111, 116, 59], value: '⨀' },
    { key: [120, 111, 112, 102, 59], value: '𝕩' },
    { key: [120, 111, 112, 108, 117, 115, 59], value: '⨁' },
    { key: [120, 111, 116, 105, 109, 101, 59], value: '⨂' },
    { key: [120, 114, 65, 114, 114, 59], value: '⟹' },
    { key: [120, 114, 97, 114, 114, 59], value: '⟶' },
    { key: [120, 115, 99, 114, 59], value: '𝓍' },
    { key: [120, 115, 113, 99, 117, 112, 59], value: '⨆' },
    { key: [120, 117, 112, 108, 117, 115, 59], value: '⨄' },
    { key: [120, 117, 116, 114, 105, 59], value: '△' },
    { key: [120, 118, 101, 101, 59], value: '⋁' },
    { key: [120, 119, 101, 100, 103, 101, 59], value: '⋀' },
    { key: [121, 97, 99, 117, 116, 101, 59], value: 'ý' },
    { key: [121, 97, 99, 121, 59], value: 'я' },
    { key: [121, 99, 105, 114, 99, 59], value: 'ŷ' },
    { key: [121, 99, 121, 59], value: 'ы' },
    { key: [121, 101, 110, 59], value: '¥' },
    { key: [121, 102, 114, 59], value: '𝔶' },
    { key: [121, 105, 99, 121, 59], value: 'ї' },
    { key: [121, 111, 112, 102, 59], value: '𝕪' },
    { key: [121, 115, 99, 114, 59], value: '𝓎' },
    { key: [121, 117, 99, 121, 59], value: 'ю' },
    { key: [121, 117, 109, 108, 59], value: 'ÿ' },
    { key: [122, 97, 99, 117, 116, 101, 59], value: 'ź' },
    { key: [122, 99, 97, 114, 111, 110, 59], value: 'ž' },
    { key: [122, 99, 121, 59], value: 'з' },
    { key: [122, 100, 111, 116, 59], value: 'ż' },
    { key: [122, 101, 101, 116, 114, 102, 59], value: 'ℨ' },
    { key: [122, 101, 116, 97, 59], value: 'ζ' },
    { key: [122, 102, 114, 59], value: '𝔷' },
    { key: [122, 104, 99, 121, 59], value: 'ж' },
    { key: [122, 105, 103, 114, 97, 114, 114, 59], value: '⇝' },
    { key: [122, 111, 112, 102, 59], value: '𝕫' },
    { key: [122, 115, 99, 114, 59], value: '𝓏' },
    { key: [122, 119, 106, 59], value: '‍' },
    { key: [122, 119, 110, 106, 59], value: '‌' }
];

var UnicodePcCodePoint;
(function (UnicodePcCodePoint) {
    UnicodePcCodePoint[UnicodePcCodePoint["LOW_LINE"] = 95] = "LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["UNDERTIE"] = 8255] = "UNDERTIE";
    UnicodePcCodePoint[UnicodePcCodePoint["CHARACTER_TIE"] = 8256] = "CHARACTER_TIE";
    UnicodePcCodePoint[UnicodePcCodePoint["INVERTED_UNDERTIE"] = 8276] = "INVERTED_UNDERTIE";
    UnicodePcCodePoint[UnicodePcCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LOW_LINE"] = 65075] = "PRESENTATION_FORM_FOR_VERTICAL_LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["PRESENTATION_FORM_FOR_VERTICAL_WAVY_LOW_LINE"] = 65076] = "PRESENTATION_FORM_FOR_VERTICAL_WAVY_LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["DASHED_LOW_LINE"] = 65101] = "DASHED_LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["CENTRELINE_LOW_LINE"] = 65102] = "CENTRELINE_LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["WAVY_LOW_LINE"] = 65103] = "WAVY_LOW_LINE";
    UnicodePcCodePoint[UnicodePcCodePoint["FULLWIDTH_LOW_LINE"] = 65343] = "FULLWIDTH_LOW_LINE";
})(UnicodePcCodePoint || (UnicodePcCodePoint = {}));

var UnicodePdCodePoint;
(function (UnicodePdCodePoint) {
    UnicodePdCodePoint[UnicodePdCodePoint["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
    UnicodePdCodePoint[UnicodePdCodePoint["ARMENIAN_HYPHEN"] = 1418] = "ARMENIAN_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["HEBREW_PUNCTUATION_MAQAF"] = 1470] = "HEBREW_PUNCTUATION_MAQAF";
    UnicodePdCodePoint[UnicodePdCodePoint["CANADIAN_SYLLABICS_HYPHEN"] = 5120] = "CANADIAN_SYLLABICS_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["MONGOLIAN_TODO_SOFT_HYPHEN"] = 6150] = "MONGOLIAN_TODO_SOFT_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["HYPHEN"] = 8208] = "HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["NON_BREAKING_HYPHEN"] = 8209] = "NON_BREAKING_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["FIGURE_DASH"] = 8210] = "FIGURE_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["EN_DASH"] = 8211] = "EN_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["EM_DASH"] = 8212] = "EM_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["HORIZONTAL_BAR"] = 8213] = "HORIZONTAL_BAR";
    UnicodePdCodePoint[UnicodePdCodePoint["DOUBLE_OBLIQUE_HYPHEN"] = 11799] = "DOUBLE_OBLIQUE_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["HYPHEN_WITH_DIAERESIS"] = 11802] = "HYPHEN_WITH_DIAERESIS";
    UnicodePdCodePoint[UnicodePdCodePoint["TWO_EM_DASH"] = 11834] = "TWO_EM_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["THREE_EM_DASH"] = 11835] = "THREE_EM_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["DOUBLE_HYPHEN"] = 11840] = "DOUBLE_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["WAVE_DASH"] = 12316] = "WAVE_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["WAVY_DASH"] = 12336] = "WAVY_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["KATAKANA_HIRAGANA_DOUBLE_HYPHEN"] = 12448] = "KATAKANA_HIRAGANA_DOUBLE_HYPHEN";
    UnicodePdCodePoint[UnicodePdCodePoint["PRESENTATION_FORM_FOR_VERTICAL_EM_DASH"] = 65073] = "PRESENTATION_FORM_FOR_VERTICAL_EM_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["PRESENTATION_FORM_FOR_VERTICAL_EN_DASH"] = 65074] = "PRESENTATION_FORM_FOR_VERTICAL_EN_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["SMALL_EM_DASH"] = 65112] = "SMALL_EM_DASH";
    UnicodePdCodePoint[UnicodePdCodePoint["SMALL_HYPHEN_MINUS"] = 65123] = "SMALL_HYPHEN_MINUS";
    UnicodePdCodePoint[UnicodePdCodePoint["FULLWIDTH_HYPHEN_MINUS"] = 65293] = "FULLWIDTH_HYPHEN_MINUS";
    UnicodePdCodePoint[UnicodePdCodePoint["YEZIDI_HYPHENATION_MARK"] = 69293] = "YEZIDI_HYPHENATION_MARK";
})(UnicodePdCodePoint || (UnicodePdCodePoint = {}));

var UnicodePeCodePoint;
(function (UnicodePeCodePoint) {
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_PARENTHESIS"] = 41] = "RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_CURLY_BRACKET"] = 125] = "RIGHT_CURLY_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["TIBETAN_MARK_GUG_RTAGS_GYAS"] = 3899] = "TIBETAN_MARK_GUG_RTAGS_GYAS";
    UnicodePeCodePoint[UnicodePeCodePoint["TIBETAN_MARK_ANG_KHANG_GYAS"] = 3901] = "TIBETAN_MARK_ANG_KHANG_GYAS";
    UnicodePeCodePoint[UnicodePeCodePoint["OGHAM_REVERSED_FEATHER_MARK"] = 5788] = "OGHAM_REVERSED_FEATHER_MARK";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SQUARE_BRACKET_WITH_QUILL"] = 8262] = "RIGHT_SQUARE_BRACKET_WITH_QUILL";
    UnicodePeCodePoint[UnicodePeCodePoint["SUPERSCRIPT_RIGHT_PARENTHESIS"] = 8318] = "SUPERSCRIPT_RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["SUBSCRIPT_RIGHT_PARENTHESIS"] = 8334] = "SUBSCRIPT_RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_CEILING"] = 8969] = "RIGHT_CEILING";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_FLOOR"] = 8971] = "RIGHT_FLOOR";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_POINTING_ANGLE_BRACKET"] = 9002] = "RIGHT_POINTING_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["MEDIUM_RIGHT_PARENTHESIS_ORNAMENT"] = 10089] = "MEDIUM_RIGHT_PARENTHESIS_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["MEDIUM_FLATTENED_RIGHT_PARENTHESIS_ORNAMENT"] = 10091] = "MEDIUM_FLATTENED_RIGHT_PARENTHESIS_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["MEDIUM_RIGHT_POINTING_ANGLE_BRACKET_ORNAMENT"] = 10093] = "MEDIUM_RIGHT_POINTING_ANGLE_BRACKET_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["HEAVY_RIGHT_POINTING_ANGLE_QUOTATION_MARK_ORNAMENT"] = 10095] = "HEAVY_RIGHT_POINTING_ANGLE_QUOTATION_MARK_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["HEAVY_RIGHT_POINTING_ANGLE_BRACKET_ORNAMENT"] = 10097] = "HEAVY_RIGHT_POINTING_ANGLE_BRACKET_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["LIGHT_RIGHT_TORTOISE_SHELL_BRACKET_ORNAMENT"] = 10099] = "LIGHT_RIGHT_TORTOISE_SHELL_BRACKET_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["MEDIUM_RIGHT_CURLY_BRACKET_ORNAMENT"] = 10101] = "MEDIUM_RIGHT_CURLY_BRACKET_ORNAMENT";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_S_SHAPED_BAG_DELIMITER"] = 10182] = "RIGHT_S_SHAPED_BAG_DELIMITER";
    UnicodePeCodePoint[UnicodePeCodePoint["MATHEMATICAL_RIGHT_WHITE_SQUARE_BRACKET"] = 10215] = "MATHEMATICAL_RIGHT_WHITE_SQUARE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["MATHEMATICAL_RIGHT_ANGLE_BRACKET"] = 10217] = "MATHEMATICAL_RIGHT_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["MATHEMATICAL_RIGHT_DOUBLE_ANGLE_BRACKET"] = 10219] = "MATHEMATICAL_RIGHT_DOUBLE_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["MATHEMATICAL_RIGHT_WHITE_TORTOISE_SHELL_BRACKET"] = 10221] = "MATHEMATICAL_RIGHT_WHITE_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["MATHEMATICAL_RIGHT_FLATTENED_PARENTHESIS"] = 10223] = "MATHEMATICAL_RIGHT_FLATTENED_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_CURLY_BRACKET"] = 10628] = "RIGHT_WHITE_CURLY_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_PARENTHESIS"] = 10630] = "RIGHT_WHITE_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["Z_NOTATION_RIGHT_IMAGE_BRACKET"] = 10632] = "Z_NOTATION_RIGHT_IMAGE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["Z_NOTATION_RIGHT_BINDING_BRACKET"] = 10634] = "Z_NOTATION_RIGHT_BINDING_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SQUARE_BRACKET_WITH_UNDERBAR"] = 10636] = "RIGHT_SQUARE_BRACKET_WITH_UNDERBAR";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SQUARE_BRACKET_WITH_TICK_IN_BOTTOM_CORNER"] = 10638] = "RIGHT_SQUARE_BRACKET_WITH_TICK_IN_BOTTOM_CORNER";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SQUARE_BRACKET_WITH_TICK_IN_TOP_CORNER"] = 10640] = "RIGHT_SQUARE_BRACKET_WITH_TICK_IN_TOP_CORNER";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_ANGLE_BRACKET_WITH_DOT"] = 10642] = "RIGHT_ANGLE_BRACKET_WITH_DOT";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_ARC_GREATER_THAN_BRACKET"] = 10644] = "RIGHT_ARC_GREATER_THAN_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["DOUBLE_RIGHT_ARC_LESS_THAN_BRACKET"] = 10646] = "DOUBLE_RIGHT_ARC_LESS_THAN_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_BLACK_TORTOISE_SHELL_BRACKET"] = 10648] = "RIGHT_BLACK_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WIGGLY_FENCE"] = 10713] = "RIGHT_WIGGLY_FENCE";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_DOUBLE_WIGGLY_FENCE"] = 10715] = "RIGHT_DOUBLE_WIGGLY_FENCE";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_POINTING_CURVED_ANGLE_BRACKET"] = 10749] = "RIGHT_POINTING_CURVED_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["TOP_RIGHT_HALF_BRACKET"] = 11811] = "TOP_RIGHT_HALF_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["BOTTOM_RIGHT_HALF_BRACKET"] = 11813] = "BOTTOM_RIGHT_HALF_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_SIDEWAYS_U_BRACKET"] = 11815] = "RIGHT_SIDEWAYS_U_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_DOUBLE_PARENTHESIS"] = 11817] = "RIGHT_DOUBLE_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_ANGLE_BRACKET"] = 12297] = "RIGHT_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_DOUBLE_ANGLE_BRACKET"] = 12299] = "RIGHT_DOUBLE_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_CORNER_BRACKET"] = 12301] = "RIGHT_CORNER_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_CORNER_BRACKET"] = 12303] = "RIGHT_WHITE_CORNER_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_BLACK_LENTICULAR_BRACKET"] = 12305] = "RIGHT_BLACK_LENTICULAR_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_TORTOISE_SHELL_BRACKET"] = 12309] = "RIGHT_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_LENTICULAR_BRACKET"] = 12311] = "RIGHT_WHITE_LENTICULAR_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_TORTOISE_SHELL_BRACKET"] = 12313] = "RIGHT_WHITE_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["RIGHT_WHITE_SQUARE_BRACKET"] = 12315] = "RIGHT_WHITE_SQUARE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["DOUBLE_PRIME_QUOTATION_MARK"] = 12318] = "DOUBLE_PRIME_QUOTATION_MARK";
    UnicodePeCodePoint[UnicodePeCodePoint["LOW_DOUBLE_PRIME_QUOTATION_MARK"] = 12319] = "LOW_DOUBLE_PRIME_QUOTATION_MARK";
    UnicodePeCodePoint[UnicodePeCodePoint["ORNATE_LEFT_PARENTHESIS"] = 64830] = "ORNATE_LEFT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_WHITE_LENTICULAR_BRAKCET"] = 65048] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_WHITE_LENTICULAR_BRAKCET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_PARENTHESIS"] = 65078] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_CURLY_BRACKET"] = 65080] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_CURLY_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_TORTOISE_SHELL_BRACKET"] = 65082] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_BLACK_LENTICULAR_BRACKET"] = 65084] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_BLACK_LENTICULAR_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_DOUBLE_ANGLE_BRACKET"] = 65086] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_DOUBLE_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_ANGLE_BRACKET"] = 65088] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_ANGLE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_CORNER_BRACKET"] = 65090] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_CORNER_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_WHITE_CORNER_BRACKET"] = 65092] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_WHITE_CORNER_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["PRESENTATION_FORM_FOR_VERTICAL_RIGHT_SQUARE_BRACKET"] = 65096] = "PRESENTATION_FORM_FOR_VERTICAL_RIGHT_SQUARE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["SMALL_RIGHT_PARENTHESIS"] = 65114] = "SMALL_RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["SMALL_RIGHT_CURLY_BRACKET"] = 65116] = "SMALL_RIGHT_CURLY_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["SMALL_RIGHT_TORTOISE_SHELL_BRACKET"] = 65118] = "SMALL_RIGHT_TORTOISE_SHELL_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["FULLWIDTH_RIGHT_PARENTHESIS"] = 65289] = "FULLWIDTH_RIGHT_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["FULLWIDTH_RIGHT_SQUARE_BRACKET"] = 65341] = "FULLWIDTH_RIGHT_SQUARE_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["FULLWIDTH_RIGHT_CURLY_BRACKET"] = 65373] = "FULLWIDTH_RIGHT_CURLY_BRACKET";
    UnicodePeCodePoint[UnicodePeCodePoint["FULLWIDTH_RIGHT_WHITE_PARENTHESIS"] = 65376] = "FULLWIDTH_RIGHT_WHITE_PARENTHESIS";
    UnicodePeCodePoint[UnicodePeCodePoint["HALFWIDTH_RIGHT_CORNER_BRACKET"] = 65379] = "HALFWIDTH_RIGHT_CORNER_BRACKET";
})(UnicodePeCodePoint || (UnicodePeCodePoint = {}));

var UnicodePfCodePoint;
(function (UnicodePfCodePoint) {
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK"] = 187] = "RIGHT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_SINGLE_QUOTATION_MARK"] = 8217] = "RIGHT_SINGLE_QUOTATION_MARK";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_DOUBLE_QUOTATION_MARK"] = 8221] = "RIGHT_DOUBLE_QUOTATION_MARK";
    UnicodePfCodePoint[UnicodePfCodePoint["SINGLE_RIGHT_POINTING_ANGLE_QUOTATION_MARK"] = 8250] = "SINGLE_RIGHT_POINTING_ANGLE_QUOTATION_MARK";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_SUBSTITUTION_BRACKET"] = 11779] = "RIGHT_SUBSTITUTION_BRACKET";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_DOTTED_SUBSTITUTION_BRACKET"] = 11781] = "RIGHT_DOTTED_SUBSTITUTION_BRACKET";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_TRANSPOSITION_BRACKET"] = 11786] = "RIGHT_TRANSPOSITION_BRACKET";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_RAISED_OMISSION_BRACKET"] = 11789] = "RIGHT_RAISED_OMISSION_BRACKET";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_LOW_PARAPHRASE_BRACKET"] = 11805] = "RIGHT_LOW_PARAPHRASE_BRACKET";
    UnicodePfCodePoint[UnicodePfCodePoint["RIGHT_VERTICAL_BAR_WITH_QUILL"] = 11809] = "RIGHT_VERTICAL_BAR_WITH_QUILL";
})(UnicodePfCodePoint || (UnicodePfCodePoint = {}));

var UnicodePiCodePoint;
(function (UnicodePiCodePoint) {
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK"] = 171] = "LEFT_POINTING_DOUBLE_ANGLE_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_SINGLE_QUOTATION_MARK"] = 8216] = "LEFT_SINGLE_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["SINGLE_HIGH_REVERSED_9_QUOTATION_MARK"] = 8219] = "SINGLE_HIGH_REVERSED_9_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_DOUBLE_QUOTATION_MARK"] = 8220] = "LEFT_DOUBLE_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["DOUBLE_HIGH_REVERSED_9_QUOTATION_MARK"] = 8223] = "DOUBLE_HIGH_REVERSED_9_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["SINGLE_LEFT_POINTING_ANGLE_QUOTATION_MARK"] = 8249] = "SINGLE_LEFT_POINTING_ANGLE_QUOTATION_MARK";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_SUBSTITUTION_BRACKET"] = 11778] = "LEFT_SUBSTITUTION_BRACKET";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_DOTTED_SUBSTITUTION_BRACKET"] = 11780] = "LEFT_DOTTED_SUBSTITUTION_BRACKET";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_TRANSPOSITION_BRACKET"] = 11785] = "LEFT_TRANSPOSITION_BRACKET";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_RAISED_OMISSION_BRACKET"] = 11788] = "LEFT_RAISED_OMISSION_BRACKET";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_LOW_PARAPHRASE_BRACKET"] = 11804] = "LEFT_LOW_PARAPHRASE_BRACKET";
    UnicodePiCodePoint[UnicodePiCodePoint["LEFT_VERTICAL_BAR_WITH_QUILL"] = 11808] = "LEFT_VERTICAL_BAR_WITH_QUILL";
})(UnicodePiCodePoint || (UnicodePiCodePoint = {}));

var UnicodePoCodePoint;
(function (UnicodePoCodePoint) {
    UnicodePoCodePoint[UnicodePoCodePoint["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["PERCENT_SIGN"] = 37] = "PERCENT_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["AMPERSAND"] = 38] = "AMPERSAND";
    UnicodePoCodePoint[UnicodePoCodePoint["APOSTROPHE"] = 39] = "APOSTROPHE";
    UnicodePoCodePoint[UnicodePoCodePoint["ASTERISK"] = 42] = "ASTERISK";
    UnicodePoCodePoint[UnicodePoCodePoint["COMMA"] = 44] = "COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["FULL_STOP"] = 46] = "FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SOLIDUS"] = 47] = "SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["COLON"] = 58] = "COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SEMICOLON"] = 59] = "SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["QUESTION_MARK"] = 63] = "QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["COMMERCIAL_AT"] = 64] = "COMMERCIAL_AT";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSE_SOLIDUS"] = 92] = "REVERSE_SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["INVERTED_EXCLAMATION_MARK"] = 161] = "INVERTED_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SECTION_SIGN"] = 167] = "SECTION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["PILCROW_SIGN"] = 182] = "PILCROW_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["MIDDLE_DOT"] = 183] = "MIDDLE_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["INVERTED_QUESTION_MARK"] = 191] = "INVERTED_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["GREEK_QUESTION_MARK"] = 894] = "GREEK_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["GREEK_ANO_TELEIA"] = 903] = "GREEK_ANO_TELEIA";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_APOSTROPHE"] = 1370] = "ARMENIAN_APOSTROPHE";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_EMPHASIS_MARK"] = 1371] = "ARMENIAN_EMPHASIS_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_EXCLAMATION_MARK"] = 1372] = "ARMENIAN_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_COMMA"] = 1373] = "ARMENIAN_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_QUESTION_MARK"] = 1374] = "ARMENIAN_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_ABBREVIATION_MARK"] = 1375] = "ARMENIAN_ABBREVIATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARMENIAN_FULL_STOP"] = 1417] = "ARMENIAN_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["HEBREW_PUNCTUATION_PASEQ"] = 1472] = "HEBREW_PUNCTUATION_PASEQ";
    UnicodePoCodePoint[UnicodePoCodePoint["HEBREW_PUNCTUATION_SOF_PASUQ"] = 1475] = "HEBREW_PUNCTUATION_SOF_PASUQ";
    UnicodePoCodePoint[UnicodePoCodePoint["HEBREW_PUNCTUATION_NUN_HAFUKHA"] = 1478] = "HEBREW_PUNCTUATION_NUN_HAFUKHA";
    UnicodePoCodePoint[UnicodePoCodePoint["HEBREW_PUNCTUATION_GERESH"] = 1523] = "HEBREW_PUNCTUATION_GERESH";
    UnicodePoCodePoint[UnicodePoCodePoint["HEBREW_PUNCTUATION_GERSHAYIM"] = 1524] = "HEBREW_PUNCTUATION_GERSHAYIM";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_INDIC_PER_MILLE_SIGN"] = 1545] = "ARABIC_INDIC_PER_MILLE_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_INDIC_PER_TEN_THOUSAND_SIGN"] = 1546] = "ARABIC_INDIC_PER_TEN_THOUSAND_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_COMMA"] = 1548] = "ARABIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_DATE_SEPARATOR"] = 1549] = "ARABIC_DATE_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_SEMICOLON"] = 1563] = "ARABIC_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_TRIPLE_DOT_PUNCTUATION_MARK"] = 1566] = "ARABIC_TRIPLE_DOT_PUNCTUATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_QUESTION_MARK"] = 1567] = "ARABIC_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_PERCENT_SIGN"] = 1642] = "ARABIC_PERCENT_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_DECIMAL_SEPARATOR"] = 1643] = "ARABIC_DECIMAL_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_THOUSANDS_SEPARATOR"] = 1644] = "ARABIC_THOUSANDS_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_FIVE_POINTED_STAR"] = 1645] = "ARABIC_FIVE_POINTED_STAR";
    UnicodePoCodePoint[UnicodePoCodePoint["ARABIC_FULL_STOP"] = 1748] = "ARABIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_END_OF_PARAGRAPH"] = 1792] = "SYRIAC_END_OF_PARAGRAPH";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUPRALINEAR_FULL_STOP"] = 1793] = "SYRIAC_SUPRALINEAR_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUBLINEAR_FULL_STOP"] = 1794] = "SYRIAC_SUBLINEAR_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUPRALINEAR_COLON"] = 1795] = "SYRIAC_SUPRALINEAR_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUBLINEAR_COLON"] = 1796] = "SYRIAC_SUBLINEAR_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_HORIZONTAL_COLON"] = 1797] = "SYRIAC_HORIZONTAL_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_COLON_SKEWED_LEFT"] = 1798] = "SYRIAC_COLON_SKEWED_LEFT";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_COLON_SKEWED_RIGHT"] = 1799] = "SYRIAC_COLON_SKEWED_RIGHT";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUPRALINEAR_COLON_SKEWED_LEFT"] = 1800] = "SYRIAC_SUPRALINEAR_COLON_SKEWED_LEFT";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_SUBLINEAR_COLON_SKEWED_RIGHT"] = 1801] = "SYRIAC_SUBLINEAR_COLON_SKEWED_RIGHT";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_CONTRACTION"] = 1802] = "SYRIAC_CONTRACTION";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_HARKLEAN_OBELUS"] = 1803] = "SYRIAC_HARKLEAN_OBELUS";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_HARKLEAN_METOBELUS"] = 1804] = "SYRIAC_HARKLEAN_METOBELUS";
    UnicodePoCodePoint[UnicodePoCodePoint["SYRIAC_HARKLEAN_ASTERISCUS"] = 1805] = "SYRIAC_HARKLEAN_ASTERISCUS";
    UnicodePoCodePoint[UnicodePoCodePoint["NKO_SYMBOL_GBAKURUNEN"] = 2039] = "NKO_SYMBOL_GBAKURUNEN";
    UnicodePoCodePoint[UnicodePoCodePoint["NKO_COMMA"] = 2040] = "NKO_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["NKO_EXCLAMATION_MARK"] = 2041] = "NKO_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_NEQUDAA"] = 2096] = "SAMARITAN_PUNCTUATION_NEQUDAA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_AFSAAQ"] = 2097] = "SAMARITAN_PUNCTUATION_AFSAAQ";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ANGED"] = 2098] = "SAMARITAN_PUNCTUATION_ANGED";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_BAU"] = 2099] = "SAMARITAN_PUNCTUATION_BAU";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ATMAAU"] = 2100] = "SAMARITAN_PUNCTUATION_ATMAAU";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_SHIYYAALAA"] = 2101] = "SAMARITAN_PUNCTUATION_SHIYYAALAA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_ABBREVIATION_MARK"] = 2102] = "SAMARITAN_ABBREVIATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_MELODIC_QITSA"] = 2103] = "SAMARITAN_PUNCTUATION_MELODIC_QITSA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ZIQAA"] = 2104] = "SAMARITAN_PUNCTUATION_ZIQAA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_QITSA"] = 2105] = "SAMARITAN_PUNCTUATION_QITSA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ZAEF"] = 2106] = "SAMARITAN_PUNCTUATION_ZAEF";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_TURU"] = 2107] = "SAMARITAN_PUNCTUATION_TURU";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ARKAANU"] = 2108] = "SAMARITAN_PUNCTUATION_ARKAANU";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_SOF_MASHFAAT"] = 2109] = "SAMARITAN_PUNCTUATION_SOF_MASHFAAT";
    UnicodePoCodePoint[UnicodePoCodePoint["SAMARITAN_PUNCTUATION_ANNAAU"] = 2110] = "SAMARITAN_PUNCTUATION_ANNAAU";
    UnicodePoCodePoint[UnicodePoCodePoint["MANDAIC_PUNCTUATION"] = 2142] = "MANDAIC_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_DANDA"] = 2404] = "DEVANAGARI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_DOUBLE_DANDA"] = 2405] = "DEVANAGARI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_ABBREVIATION_SIGN"] = 2416] = "DEVANAGARI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["BENGALI_ABBREVIATION_SIGN"] = 2557] = "BENGALI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["GURMUKHI_ABBREVIATION_SIGN"] = 2678] = "GURMUKHI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["GUJARATI_ABBREVIATION_SIGN"] = 2800] = "GUJARATI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["TELUGU_SIGN_SIDDHAM"] = 3191] = "TELUGU_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["KANNADA_SIGN_SIDDHAM"] = 3204] = "KANNADA_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["SINHALA_PUNCTUATION_KUNDDALIYA"] = 3572] = "SINHALA_PUNCTUATION_KUNDDALIYA";
    UnicodePoCodePoint[UnicodePoCodePoint["THAI_CHARACTER_FONGMAN"] = 3663] = "THAI_CHARACTER_FONGMAN";
    UnicodePoCodePoint[UnicodePoCodePoint["THAI_CHARACTER_ANGKHANKHU"] = 3674] = "THAI_CHARACTER_ANGKHANKHU";
    UnicodePoCodePoint[UnicodePoCodePoint["THAI_CHARACTER_KHOMUT"] = 3675] = "THAI_CHARACTER_KHOMUT";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_INITIAL_YIG_MGO_MDUN_MA"] = 3844] = "TIBETAN_MARK_INITIAL_YIG_MGO_MDUN_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_CLOSING_YIG_MGO_SGAB_MA"] = 3845] = "TIBETAN_MARK_CLOSING_YIG_MGO_SGAB_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_CARET_YIG_MGO_PHUR_SHAD_MA"] = 3846] = "TIBETAN_MARK_CARET_YIG_MGO_PHUR_SHAD_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_YIG_MGO_TSHEG_SHAD_MA"] = 3847] = "TIBETAN_MARK_YIG_MGO_TSHEG_SHAD_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_SBRUL_SHAD"] = 3848] = "TIBETAN_MARK_SBRUL_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_BSKUR_YIG_MGO"] = 3849] = "TIBETAN_MARK_BSKUR_YIG_MGO";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_BKA__SHOG_YIG_MGO"] = 3850] = "TIBETAN_MARK_BKA__SHOG_YIG_MGO";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_INTERSYLLABIC_TSHEG"] = 3851] = "TIBETAN_MARK_INTERSYLLABIC_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_DELIMITER_TSHEG_BSTAR"] = 3852] = "TIBETAN_MARK_DELIMITER_TSHEG_BSTAR";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_SHAD"] = 3853] = "TIBETAN_MARK_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_NYIS_SHAD"] = 3854] = "TIBETAN_MARK_NYIS_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_TSHEG_SHAD"] = 3855] = "TIBETAN_MARK_TSHEG_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_NYIS_TSHEG_SHAD"] = 3856] = "TIBETAN_MARK_NYIS_TSHEG_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_RIN_CHEN_SPUNGS_SHAD"] = 3857] = "TIBETAN_MARK_RIN_CHEN_SPUNGS_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_RGYA_GRAM_SHAD"] = 3858] = "TIBETAN_MARK_RGYA_GRAM_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_GTER_TSHEG"] = 3860] = "TIBETAN_MARK_GTER_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_PALUTA"] = 3973] = "TIBETAN_MARK_PALUTA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_BSKA__SHOG_GI_MGO_RGYAN"] = 4048] = "TIBETAN_MARK_BSKA__SHOG_GI_MGO_RGYAN";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_MNYAM_YIG_GI_MGO_RGYAN"] = 4049] = "TIBETAN_MARK_MNYAM_YIG_GI_MGO_RGYAN";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_NYIS_TSHEG"] = 4050] = "TIBETAN_MARK_NYIS_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_INITIAL_BRDA_RNYING_YIG_MGO_MDUN_MA"] = 4051] = "TIBETAN_MARK_INITIAL_BRDA_RNYING_YIG_MGO_MDUN_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_CLOSING_BRDA_RNYING_YIG_MGO_SGAB_MA"] = 4052] = "TIBETAN_MARK_CLOSING_BRDA_RNYING_YIG_MGO_SGAB_MA";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_LEADING_MCHAN_RTAGS"] = 4057] = "TIBETAN_MARK_LEADING_MCHAN_RTAGS";
    UnicodePoCodePoint[UnicodePoCodePoint["TIBETAN_MARK_TRAILING_MCHAN_RTAGS"] = 4058] = "TIBETAN_MARK_TRAILING_MCHAN_RTAGS";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SIGN_LITTLE_SECTION"] = 4170] = "MYANMAR_SIGN_LITTLE_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SIGN_SECTION"] = 4171] = "MYANMAR_SIGN_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SYMBOL_LOCATIVE"] = 4172] = "MYANMAR_SYMBOL_LOCATIVE";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SYMBOL_COMPLETED"] = 4173] = "MYANMAR_SYMBOL_COMPLETED";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SYMBOL_AFOREMENTIONED"] = 4174] = "MYANMAR_SYMBOL_AFOREMENTIONED";
    UnicodePoCodePoint[UnicodePoCodePoint["MYANMAR_SYMBOL_GENITIVE"] = 4175] = "MYANMAR_SYMBOL_GENITIVE";
    UnicodePoCodePoint[UnicodePoCodePoint["GEORGIAN_PARAGRAPH_SEPARATOR"] = 4347] = "GEORGIAN_PARAGRAPH_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_SECTION_MARK"] = 4960] = "ETHIOPIC_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_WORDSPACE"] = 4961] = "ETHIOPIC_WORDSPACE";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_FULL_STOP"] = 4962] = "ETHIOPIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_COMMA"] = 4963] = "ETHIOPIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_SEMICOLON"] = 4964] = "ETHIOPIC_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_COLON"] = 4965] = "ETHIOPIC_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_PREFACE_COLON"] = 4966] = "ETHIOPIC_PREFACE_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_QUESTION_MARK"] = 4967] = "ETHIOPIC_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ETHIOPIC_PARAGRAPH_SEPARATOR"] = 4968] = "ETHIOPIC_PARAGRAPH_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["CANADIAN_SYLLABICS_FULL_STOP"] = 5742] = "CANADIAN_SYLLABICS_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["RUNIC_SINGLE_PUNCTUATION"] = 5867] = "RUNIC_SINGLE_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["RUNIC_MULTIPLE_PUNCTUATION"] = 5868] = "RUNIC_MULTIPLE_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["RUNIC_CROSS_PUNCTUATION"] = 5869] = "RUNIC_CROSS_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["PHILIPPINE_SINGLE_PUNCTUATION"] = 5941] = "PHILIPPINE_SINGLE_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["PHILIPPINE_DOUBLE_PUNCTUATION"] = 5942] = "PHILIPPINE_DOUBLE_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_KHAN"] = 6100] = "KHMER_SIGN_KHAN";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_BARIYOOSAN"] = 6101] = "KHMER_SIGN_BARIYOOSAN";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_CAMNUC_PII_KUUH"] = 6102] = "KHMER_SIGN_CAMNUC_PII_KUUH";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_BEYYAL"] = 6104] = "KHMER_SIGN_BEYYAL";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_PHNAEK_MUAN"] = 6105] = "KHMER_SIGN_PHNAEK_MUAN";
    UnicodePoCodePoint[UnicodePoCodePoint["KHMER_SIGN_KOOMUUT"] = 6106] = "KHMER_SIGN_KOOMUUT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_BIRGA"] = 6144] = "MONGOLIAN_BIRGA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_ELLIPSIS"] = 6145] = "MONGOLIAN_ELLIPSIS";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_COMMA"] = 6146] = "MONGOLIAN_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_FULL_STOP"] = 6147] = "MONGOLIAN_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_COLON"] = 6148] = "MONGOLIAN_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_FOUR_DOTS"] = 6149] = "MONGOLIAN_FOUR_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_SIBE_SYLLABLE_BOUNDARY_MARKER"] = 6151] = "MONGOLIAN_SIBE_SYLLABLE_BOUNDARY_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_MANCHU_COMMA"] = 6152] = "MONGOLIAN_MANCHU_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_MANCHU_FULL_STOP"] = 6153] = "MONGOLIAN_MANCHU_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_NIRUGU"] = 6154] = "MONGOLIAN_NIRUGU";
    UnicodePoCodePoint[UnicodePoCodePoint["LIMBU_EXCLAMATION_MARK"] = 6468] = "LIMBU_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["LIMBU_QUESTION_MARK"] = 6469] = "LIMBU_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["BUGINESE_PALLAWA"] = 6686] = "BUGINESE_PALLAWA";
    UnicodePoCodePoint[UnicodePoCodePoint["BUGINESE_END_OF_SECTION"] = 6687] = "BUGINESE_END_OF_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_WIANG"] = 6816] = "TAI_THAM_SIGN_WIANG";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_WIANGWAAK"] = 6817] = "TAI_THAM_SIGN_WIANGWAAK";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_SAWAN"] = 6818] = "TAI_THAM_SIGN_SAWAN";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_KEOW"] = 6819] = "TAI_THAM_SIGN_KEOW";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_HOY"] = 6820] = "TAI_THAM_SIGN_HOY";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_DOKMAI"] = 6821] = "TAI_THAM_SIGN_DOKMAI";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_REVERSED_ROTATED_RANA"] = 6822] = "TAI_THAM_SIGN_REVERSED_ROTATED_RANA";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_KAAN"] = 6824] = "TAI_THAM_SIGN_KAAN";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_KAANKUU"] = 6825] = "TAI_THAM_SIGN_KAANKUU";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_SATKAAN"] = 6826] = "TAI_THAM_SIGN_SATKAAN";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_SATKAANKUU"] = 6827] = "TAI_THAM_SIGN_SATKAANKUU";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_HANG"] = 6828] = "TAI_THAM_SIGN_HANG";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_THAM_SIGN_CAANG"] = 6829] = "TAI_THAM_SIGN_CAANG";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_PANTI"] = 7002] = "BALINESE_PANTI";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_PAMADA"] = 7003] = "BALINESE_PAMADA";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_WINDU"] = 7004] = "BALINESE_WINDU";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_CARIK_PAMUNGKAH"] = 7005] = "BALINESE_CARIK_PAMUNGKAH";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_CARIK_SIKI"] = 7006] = "BALINESE_CARIK_SIKI";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_CARIK_PAREREN"] = 7007] = "BALINESE_CARIK_PAREREN";
    UnicodePoCodePoint[UnicodePoCodePoint["BALINESE_PAMENENG"] = 7008] = "BALINESE_PAMENENG";
    UnicodePoCodePoint[UnicodePoCodePoint["BATAK_SYMBOL_BINDU_NA_METEK"] = 7164] = "BATAK_SYMBOL_BINDU_NA_METEK";
    UnicodePoCodePoint[UnicodePoCodePoint["BATAK_SYMBOL_BINDU_PINARBORAS"] = 7165] = "BATAK_SYMBOL_BINDU_PINARBORAS";
    UnicodePoCodePoint[UnicodePoCodePoint["BATAK_SYMBOL_BINDU_JUDUL"] = 7166] = "BATAK_SYMBOL_BINDU_JUDUL";
    UnicodePoCodePoint[UnicodePoCodePoint["BATAK_SYMBOL_BINDU_PANGOLAT"] = 7167] = "BATAK_SYMBOL_BINDU_PANGOLAT";
    UnicodePoCodePoint[UnicodePoCodePoint["LEPCHA_PUNCTUATION_TA_ROL"] = 7227] = "LEPCHA_PUNCTUATION_TA_ROL";
    UnicodePoCodePoint[UnicodePoCodePoint["LEPCHA_PUNCTUATION_NYET_THYOOM_TA_ROL"] = 7228] = "LEPCHA_PUNCTUATION_NYET_THYOOM_TA_ROL";
    UnicodePoCodePoint[UnicodePoCodePoint["LEPCHA_PUNCTUATION_CER_WA"] = 7229] = "LEPCHA_PUNCTUATION_CER_WA";
    UnicodePoCodePoint[UnicodePoCodePoint["LEPCHA_PUNCTUATION_TSHOOK_CER_WA"] = 7230] = "LEPCHA_PUNCTUATION_TSHOOK_CER_WA";
    UnicodePoCodePoint[UnicodePoCodePoint["LEPCHA_PUNCTUATION_TSHOOK"] = 7231] = "LEPCHA_PUNCTUATION_TSHOOK";
    UnicodePoCodePoint[UnicodePoCodePoint["OL_CHIKI_PUNCTUATION_MUCAAD"] = 7294] = "OL_CHIKI_PUNCTUATION_MUCAAD";
    UnicodePoCodePoint[UnicodePoCodePoint["OL_CHIKI_PUNCTUATION_DOUBLE_MUCAAD"] = 7295] = "OL_CHIKI_PUNCTUATION_DOUBLE_MUCAAD";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_SURYA"] = 7360] = "SUNDANESE_PUNCTUATION_BINDU_SURYA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_PANGLONG"] = 7361] = "SUNDANESE_PUNCTUATION_BINDU_PANGLONG";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_PURNAMA"] = 7362] = "SUNDANESE_PUNCTUATION_BINDU_PURNAMA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_CAKRA"] = 7363] = "SUNDANESE_PUNCTUATION_BINDU_CAKRA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_LEU_SATANGA"] = 7364] = "SUNDANESE_PUNCTUATION_BINDU_LEU_SATANGA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_KA_SATANGA"] = 7365] = "SUNDANESE_PUNCTUATION_BINDU_KA_SATANGA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_DA_SATANGA"] = 7366] = "SUNDANESE_PUNCTUATION_BINDU_DA_SATANGA";
    UnicodePoCodePoint[UnicodePoCodePoint["SUNDANESE_PUNCTUATION_BINDU_BA_SATANGA"] = 7367] = "SUNDANESE_PUNCTUATION_BINDU_BA_SATANGA";
    UnicodePoCodePoint[UnicodePoCodePoint["VEDIC_SIGN_NIHSHVASA"] = 7379] = "VEDIC_SIGN_NIHSHVASA";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_VERTICAL_LINE"] = 8214] = "DOUBLE_VERTICAL_LINE";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_LOW_LINE"] = 8215] = "DOUBLE_LOW_LINE";
    UnicodePoCodePoint[UnicodePoCodePoint["DAGGER"] = 8224] = "DAGGER";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_DAGGER"] = 8225] = "DOUBLE_DAGGER";
    UnicodePoCodePoint[UnicodePoCodePoint["BULLET"] = 8226] = "BULLET";
    UnicodePoCodePoint[UnicodePoCodePoint["TRIANGULAR_BULLET"] = 8227] = "TRIANGULAR_BULLET";
    UnicodePoCodePoint[UnicodePoCodePoint["ONE_DOT_LEADER"] = 8228] = "ONE_DOT_LEADER";
    UnicodePoCodePoint[UnicodePoCodePoint["TWO_DOT_LEADER"] = 8229] = "TWO_DOT_LEADER";
    UnicodePoCodePoint[UnicodePoCodePoint["HORIZONTAL_ELLIPSIS"] = 8230] = "HORIZONTAL_ELLIPSIS";
    UnicodePoCodePoint[UnicodePoCodePoint["HYPHENATION_POINT"] = 8231] = "HYPHENATION_POINT";
    UnicodePoCodePoint[UnicodePoCodePoint["PER_MILLE_SIGN"] = 8240] = "PER_MILLE_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["PER_TEN_THOUSAND_SIGN"] = 8241] = "PER_TEN_THOUSAND_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["PRIME"] = 8242] = "PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_PRIME"] = 8243] = "DOUBLE_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["TRIPLE_PRIME"] = 8244] = "TRIPLE_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_PRIME"] = 8245] = "REVERSED_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_DOUBLE_PRIME"] = 8246] = "REVERSED_DOUBLE_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_TRIPLE_PRIME"] = 8247] = "REVERSED_TRIPLE_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["CARET"] = 8248] = "CARET";
    UnicodePoCodePoint[UnicodePoCodePoint["REFERENCE_MARK"] = 8251] = "REFERENCE_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_EXCLAMATION_MARK"] = 8252] = "DOUBLE_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["INTERROBANG"] = 8253] = "INTERROBANG";
    UnicodePoCodePoint[UnicodePoCodePoint["OVERLINE"] = 8254] = "OVERLINE";
    UnicodePoCodePoint[UnicodePoCodePoint["CARET_INSERTION_POINT"] = 8257] = "CARET_INSERTION_POINT";
    UnicodePoCodePoint[UnicodePoCodePoint["ASTERISM"] = 8258] = "ASTERISM";
    UnicodePoCodePoint[UnicodePoCodePoint["HYPHEN_BULLET"] = 8259] = "HYPHEN_BULLET";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_QUESTION_MARK"] = 8263] = "DOUBLE_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["QUESTION_EXCLAMATION_MARK"] = 8264] = "QUESTION_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["EXCLAMATION_QUESTION_MARK"] = 8265] = "EXCLAMATION_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["TIRONIAN_SIGN_ET"] = 8266] = "TIRONIAN_SIGN_ET";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_PILCROW_SIGN"] = 8267] = "REVERSED_PILCROW_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["BLACK_LEFTWARDS_BULLET"] = 8268] = "BLACK_LEFTWARDS_BULLET";
    UnicodePoCodePoint[UnicodePoCodePoint["BLACK_RIGHTWARDS_BULLET"] = 8269] = "BLACK_RIGHTWARDS_BULLET";
    UnicodePoCodePoint[UnicodePoCodePoint["LOW_ASTERISK"] = 8270] = "LOW_ASTERISK";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_SEMICOLON"] = 8271] = "REVERSED_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["CLOSE_UP"] = 8272] = "CLOSE_UP";
    UnicodePoCodePoint[UnicodePoCodePoint["TWO_ASTERISKS_ALIGNED_VERTICALLY"] = 8273] = "TWO_ASTERISKS_ALIGNED_VERTICALLY";
    UnicodePoCodePoint[UnicodePoCodePoint["SWUNG_DASH"] = 8275] = "SWUNG_DASH";
    UnicodePoCodePoint[UnicodePoCodePoint["FLOWER_PUNCTUATION_MARK"] = 8277] = "FLOWER_PUNCTUATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["THREE_DOT_PUNCTUATION"] = 8278] = "THREE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["QUADRUPLE_PRIME"] = 8279] = "QUADRUPLE_PRIME";
    UnicodePoCodePoint[UnicodePoCodePoint["FOUR_DOT_PUNCTUATION"] = 8280] = "FOUR_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["FIVE_DOT_PUNCTUATION"] = 8281] = "FIVE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["TWO_DOT_PUNCTUATION"] = 8282] = "TWO_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["FOUR_DOT_MARK"] = 8283] = "FOUR_DOT_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["DOTTED_CROSS"] = 8284] = "DOTTED_CROSS";
    UnicodePoCodePoint[UnicodePoCodePoint["TRICOLON"] = 8285] = "TRICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["VERTICAL_FOUR_DOTS"] = 8286] = "VERTICAL_FOUR_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_OLD_NUBIAN_FULL_STOP"] = 11513] = "COPTIC_OLD_NUBIAN_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_OLD_NUBIAN_DIRECT_QUESTION_MARK"] = 11514] = "COPTIC_OLD_NUBIAN_DIRECT_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_OLD_NUBIAN_INDIRECT_QUESTION_MARK"] = 11515] = "COPTIC_OLD_NUBIAN_INDIRECT_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_OLD_NUBIAN_VERSE_DIVIDER"] = 11516] = "COPTIC_OLD_NUBIAN_VERSE_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_FULL_STOP"] = 11518] = "COPTIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["COPTIC_MORPHOLOGICAL_DIVIDER"] = 11519] = "COPTIC_MORPHOLOGICAL_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["TIFINAGH_SEPARATOR_MARK"] = 11632] = "TIFINAGH_SEPARATOR_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["RIGHT_ANGLE_SUBSTITUTION_MARKER"] = 11776] = "RIGHT_ANGLE_SUBSTITUTION_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["RIGHT_ANGLE_DOTTED_SUBSTITUTION_MARKER"] = 11777] = "RIGHT_ANGLE_DOTTED_SUBSTITUTION_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["RAISED_INTERPOLATION_MARKER"] = 11782] = "RAISED_INTERPOLATION_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["RAISED_DOTTED_INTERPOLATION_MARKER"] = 11783] = "RAISED_DOTTED_INTERPOLATION_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["DOTTED_TRANSPOSITION_MARKER"] = 11784] = "DOTTED_TRANSPOSITION_MARKER";
    UnicodePoCodePoint[UnicodePoCodePoint["RAISED_SQUARE"] = 11787] = "RAISED_SQUARE";
    UnicodePoCodePoint[UnicodePoCodePoint["EDITORIAL_CORONIS"] = 11790] = "EDITORIAL_CORONIS";
    UnicodePoCodePoint[UnicodePoCodePoint["PARAGRAPHOS"] = 11791] = "PARAGRAPHOS";
    UnicodePoCodePoint[UnicodePoCodePoint["FORKED_PARAGRAPHOS"] = 11792] = "FORKED_PARAGRAPHOS";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_FORKED_PARAGRAPHOS"] = 11793] = "REVERSED_FORKED_PARAGRAPHOS";
    UnicodePoCodePoint[UnicodePoCodePoint["HYPODIASTOLE"] = 11794] = "HYPODIASTOLE";
    UnicodePoCodePoint[UnicodePoCodePoint["DOTTED_OBELOS"] = 11795] = "DOTTED_OBELOS";
    UnicodePoCodePoint[UnicodePoCodePoint["DOWNWARDS_ANCORA"] = 11796] = "DOWNWARDS_ANCORA";
    UnicodePoCodePoint[UnicodePoCodePoint["UPWARDS_ANCORA"] = 11797] = "UPWARDS_ANCORA";
    UnicodePoCodePoint[UnicodePoCodePoint["DOTTED_RIGHT_POINTING_ANGLE"] = 11798] = "DOTTED_RIGHT_POINTING_ANGLE";
    UnicodePoCodePoint[UnicodePoCodePoint["INVERTED_INTERROBANG"] = 11800] = "INVERTED_INTERROBANG";
    UnicodePoCodePoint[UnicodePoCodePoint["PALM_BRANCH"] = 11801] = "PALM_BRANCH";
    UnicodePoCodePoint[UnicodePoCodePoint["TILDE_WITH_RING_ABOVE"] = 11803] = "TILDE_WITH_RING_ABOVE";
    UnicodePoCodePoint[UnicodePoCodePoint["TILDE_WITH_DOT_ABOVE"] = 11806] = "TILDE_WITH_DOT_ABOVE";
    UnicodePoCodePoint[UnicodePoCodePoint["TILDE_WITH_DOT_BELOW"] = 11807] = "TILDE_WITH_DOT_BELOW";
    UnicodePoCodePoint[UnicodePoCodePoint["TWO_DOTS_OVER_ONE_DOT_PUNCTUATION"] = 11818] = "TWO_DOTS_OVER_ONE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["ONE_DOT_OVER_TWO_DOTS_PUNCTUATION"] = 11819] = "ONE_DOT_OVER_TWO_DOTS_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["SQUARED_FOUR_DOT_PUNCTUATION"] = 11820] = "SQUARED_FOUR_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["FIVE_DOT_MARK"] = 11821] = "FIVE_DOT_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_QUESTION_MARK"] = 11822] = "REVERSED_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["RING_POINT"] = 11824] = "RING_POINT";
    UnicodePoCodePoint[UnicodePoCodePoint["WORD_SEPARATOR_MIDDLE_DOT"] = 11825] = "WORD_SEPARATOR_MIDDLE_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["TURNED_COMMA"] = 11826] = "TURNED_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["RAISED_DOT"] = 11827] = "RAISED_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["RAISED_COMMA"] = 11828] = "RAISED_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["TURNED_SEMICOLON"] = 11829] = "TURNED_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["DAGGER_WITH_LEFT_GUARD"] = 11830] = "DAGGER_WITH_LEFT_GUARD";
    UnicodePoCodePoint[UnicodePoCodePoint["DAGGER_WITH_RIGHT_GUARD"] = 11831] = "DAGGER_WITH_RIGHT_GUARD";
    UnicodePoCodePoint[UnicodePoCodePoint["TURNED_DAGGER"] = 11832] = "TURNED_DAGGER";
    UnicodePoCodePoint[UnicodePoCodePoint["TOP_HALF_SECTION_SIGN"] = 11833] = "TOP_HALF_SECTION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["STENOGRAPHIC_FULL_STOP"] = 11836] = "STENOGRAPHIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["VERTICAL_SIX_DOTS"] = 11837] = "VERTICAL_SIX_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["WIGGLY_VERTICAL_LINE"] = 11838] = "WIGGLY_VERTICAL_LINE";
    UnicodePoCodePoint[UnicodePoCodePoint["CAPITULUM"] = 11839] = "CAPITULUM";
    UnicodePoCodePoint[UnicodePoCodePoint["REVERSED_COMMA"] = 11841] = "REVERSED_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["DASH_WITH_LEFT_UPTURN"] = 11843] = "DASH_WITH_LEFT_UPTURN";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_SUSPENSION_MARK"] = 11844] = "DOUBLE_SUSPENSION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["INVERTED_LOW_KAVYKA"] = 11845] = "INVERTED_LOW_KAVYKA";
    UnicodePoCodePoint[UnicodePoCodePoint["INVERTED_LOW_KAVYKA_WITH_KAVYKA_ABOVE"] = 11846] = "INVERTED_LOW_KAVYKA_WITH_KAVYKA_ABOVE";
    UnicodePoCodePoint[UnicodePoCodePoint["LOW_KAVYKA"] = 11847] = "LOW_KAVYKA";
    UnicodePoCodePoint[UnicodePoCodePoint["LOW_KAVYKA_WITH_DOT"] = 11848] = "LOW_KAVYKA_WITH_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_STACKED_COMMA"] = 11849] = "DOUBLE_STACKED_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["DOTTED_SOLIDUS"] = 11850] = "DOTTED_SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["TRIPLE_DAGGER"] = 11851] = "TRIPLE_DAGGER";
    UnicodePoCodePoint[UnicodePoCodePoint["MEDIEVAL_COMMA"] = 11852] = "MEDIEVAL_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["PARAGRAPHUS_MARK"] = 11853] = "PARAGRAPHUS_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PUNCTUS_ELEVATUS_MARK"] = 11854] = "PUNCTUS_ELEVATUS_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["CORNISH_VERSE_DIVIDER"] = 11855] = "CORNISH_VERSE_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["TIRONIAN_SIGN_CAPITAL_ET"] = 11858] = "TIRONIAN_SIGN_CAPITAL_ET";
    UnicodePoCodePoint[UnicodePoCodePoint["IDEOGRAPHIC_COMMA"] = 12289] = "IDEOGRAPHIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["IDEOGRAPHIC_FULL_STOP"] = 12290] = "IDEOGRAPHIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["DITTO_MARK"] = 12291] = "DITTO_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PART_ALTERNATION_MARK"] = 12349] = "PART_ALTERNATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KATAKANA_MIDDLE_DOT"] = 12539] = "KATAKANA_MIDDLE_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["LISU_PUNCTUATION_COMMA"] = 42238] = "LISU_PUNCTUATION_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["LISU_PUNCTUATION_FULL_STOP"] = 42239] = "LISU_PUNCTUATION_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["VAI_COMMA"] = 42509] = "VAI_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["VAI_FULL_STOP"] = 42510] = "VAI_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["VAI_QUESTION_MARK"] = 42511] = "VAI_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SLAVONIC_ASTERISK"] = 42611] = "SLAVONIC_ASTERISK";
    UnicodePoCodePoint[UnicodePoCodePoint["CYRILLIC_KAVYKA"] = 42622] = "CYRILLIC_KAVYKA";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_NJAEMLI"] = 42738] = "BAMUM_NJAEMLI";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_FULL_STOP"] = 42739] = "BAMUM_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_COLON"] = 42740] = "BAMUM_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_COMMA"] = 42741] = "BAMUM_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_SEMICOLON"] = 42742] = "BAMUM_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["BAMUM_QUESTION_MARK"] = 42743] = "BAMUM_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PHAGS_PA_SINGLE_HEAD_MARK"] = 43124] = "PHAGS_PA_SINGLE_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PHAGS_PA_DOUBLE_HEAD_MARK"] = 43125] = "PHAGS_PA_DOUBLE_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PHAGS_PA_MARK_SHAD"] = 43126] = "PHAGS_PA_MARK_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["PHAGS_PA_MARK_DOUBLE_SHAD"] = 43127] = "PHAGS_PA_MARK_DOUBLE_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["SAURASHTRA_DANDA"] = 43214] = "SAURASHTRA_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["SAURASHTRA_DOUBLE_DANDA"] = 43215] = "SAURASHTRA_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_SIGN_PUSHPIKA"] = 43256] = "DEVANAGARI_SIGN_PUSHPIKA";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_GAP_FILLER"] = 43257] = "DEVANAGARI_GAP_FILLER";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_CARET"] = 43258] = "DEVANAGARI_CARET";
    UnicodePoCodePoint[UnicodePoCodePoint["DEVANAGARI_SIGN_SIDDHAM"] = 43260] = "DEVANAGARI_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["KAYAH_LI_SIGN_CWI"] = 43310] = "KAYAH_LI_SIGN_CWI";
    UnicodePoCodePoint[UnicodePoCodePoint["KAYAH_LI_SIGN_SHYA"] = 43311] = "KAYAH_LI_SIGN_SHYA";
    UnicodePoCodePoint[UnicodePoCodePoint["REJANG_SECTION_MARK"] = 43359] = "REJANG_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_LEFT_RERENGGAN"] = 43457] = "JAVANESE_LEFT_RERENGGAN";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_RIGHT_RERENGGAN"] = 43458] = "JAVANESE_RIGHT_RERENGGAN";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_ANDAP"] = 43459] = "JAVANESE_PADA_ANDAP";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_MADYA"] = 43460] = "JAVANESE_PADA_MADYA";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_LUHUR"] = 43461] = "JAVANESE_PADA_LUHUR";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_WINDU"] = 43462] = "JAVANESE_PADA_WINDU";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_PANGKAT"] = 43463] = "JAVANESE_PADA_PANGKAT";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_LINGSA"] = 43464] = "JAVANESE_PADA_LINGSA";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_LUNGSI"] = 43465] = "JAVANESE_PADA_LUNGSI";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_ADEG"] = 43466] = "JAVANESE_PADA_ADEG";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_ADEG_ADEG"] = 43467] = "JAVANESE_PADA_ADEG_ADEG";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_PISELEH"] = 43468] = "JAVANESE_PADA_PISELEH";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_TURNED_PADA_PISELEH"] = 43469] = "JAVANESE_TURNED_PADA_PISELEH";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_TIRTA_TUMETES"] = 43486] = "JAVANESE_PADA_TIRTA_TUMETES";
    UnicodePoCodePoint[UnicodePoCodePoint["JAVANESE_PADA_ISEN_ISEN"] = 43487] = "JAVANESE_PADA_ISEN_ISEN";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAM_PUNCTUATION_SPIRAL"] = 43612] = "CHAM_PUNCTUATION_SPIRAL";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAM_PUNCTUATION_DANDA"] = 43613] = "CHAM_PUNCTUATION_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAM_PUNCTUATION_DOUBLE_DANDA"] = 43614] = "CHAM_PUNCTUATION_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAM_PUNCTUATION_TRIPLE_DANDA"] = 43615] = "CHAM_PUNCTUATION_TRIPLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_VIET_SYMBOL_HO_HOI"] = 43742] = "TAI_VIET_SYMBOL_HO_HOI";
    UnicodePoCodePoint[UnicodePoCodePoint["TAI_VIET_SYMBOL_KOI_KOI"] = 43743] = "TAI_VIET_SYMBOL_KOI_KOI";
    UnicodePoCodePoint[UnicodePoCodePoint["MEETEI_MAYEK_CHEIKHAN"] = 43760] = "MEETEI_MAYEK_CHEIKHAN";
    UnicodePoCodePoint[UnicodePoCodePoint["MEETEI_MAYEK_AHANG_KHUDAM"] = 43761] = "MEETEI_MAYEK_AHANG_KHUDAM";
    UnicodePoCodePoint[UnicodePoCodePoint["MEETEI_MAYEK_CHEIKHEI"] = 44011] = "MEETEI_MAYEK_CHEIKHEI";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_COMMA"] = 65040] = "PRESENTATION_FORM_FOR_VERTICAL_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_IDEOGRAPHIC_COMMA"] = 65041] = "PRESENTATION_FORM_FOR_VERTICAL_IDEOGRAPHIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_IDEOGRAPHIC_FULL_STOP"] = 65042] = "PRESENTATION_FORM_FOR_VERTICAL_IDEOGRAPHIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_COLON"] = 65043] = "PRESENTATION_FORM_FOR_VERTICAL_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_SEMICOLON"] = 65044] = "PRESENTATION_FORM_FOR_VERTICAL_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_EXCLAMATION_MARK"] = 65045] = "PRESENTATION_FORM_FOR_VERTICAL_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_QUESTION_MARK"] = 65046] = "PRESENTATION_FORM_FOR_VERTICAL_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_HORIZONTAL_ELLIPSIS"] = 65049] = "PRESENTATION_FORM_FOR_VERTICAL_HORIZONTAL_ELLIPSIS";
    UnicodePoCodePoint[UnicodePoCodePoint["PRESENTATION_FORM_FOR_VERTICAL_TWO_DOT_LEADER"] = 65072] = "PRESENTATION_FORM_FOR_VERTICAL_TWO_DOT_LEADER";
    UnicodePoCodePoint[UnicodePoCodePoint["SESAME_DOT"] = 65093] = "SESAME_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["WHITE_SESAME_DOT"] = 65094] = "WHITE_SESAME_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["DASHED_OVERLINE"] = 65097] = "DASHED_OVERLINE";
    UnicodePoCodePoint[UnicodePoCodePoint["CENTRELINE_OVERLINE"] = 65098] = "CENTRELINE_OVERLINE";
    UnicodePoCodePoint[UnicodePoCodePoint["WAVY_OVERLINE"] = 65099] = "WAVY_OVERLINE";
    UnicodePoCodePoint[UnicodePoCodePoint["DOUBLE_WAVY_OVERLINE"] = 65100] = "DOUBLE_WAVY_OVERLINE";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_COMMA"] = 65104] = "SMALL_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_IDEOGRAPHIC_COMMA"] = 65105] = "SMALL_IDEOGRAPHIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_FULL_STOP"] = 65106] = "SMALL_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_SEMICOLON"] = 65108] = "SMALL_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_COLON"] = 65109] = "SMALL_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_QUESTION_MARK"] = 65110] = "SMALL_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_EXCLAMATION_MARK"] = 65111] = "SMALL_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_NUMBER_SIGN"] = 65119] = "SMALL_NUMBER_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_AMPERSAND"] = 65120] = "SMALL_AMPERSAND";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_ASTERISK"] = 65121] = "SMALL_ASTERISK";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_REVERSE_SOLIDUS"] = 65128] = "SMALL_REVERSE_SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_PERCENT_SIGN"] = 65130] = "SMALL_PERCENT_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_COMMERCIAL_AT"] = 65131] = "SMALL_COMMERCIAL_AT";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_EXCLAMATION_MARK"] = 65281] = "FULLWIDTH_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_QUOTATION_MARK"] = 65282] = "FULLWIDTH_QUOTATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_NUMBER_SIGN"] = 65283] = "FULLWIDTH_NUMBER_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_PERCENT_SIGN"] = 65285] = "FULLWIDTH_PERCENT_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_AMPERSAND"] = 65286] = "FULLWIDTH_AMPERSAND";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_APOSTROPHE"] = 65287] = "FULLWIDTH_APOSTROPHE";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_ASTERISK"] = 65290] = "FULLWIDTH_ASTERISK";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_COMMA"] = 65292] = "FULLWIDTH_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_FULL_STOP"] = 65294] = "FULLWIDTH_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_SOLIDUS"] = 65295] = "FULLWIDTH_SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_COLON"] = 65306] = "FULLWIDTH_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_SEMICOLON"] = 65307] = "FULLWIDTH_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_QUESTION_MARK"] = 65311] = "FULLWIDTH_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_COMMERCIAL_AT"] = 65312] = "FULLWIDTH_COMMERCIAL_AT";
    UnicodePoCodePoint[UnicodePoCodePoint["FULLWIDTH_REVERSE_SOLIDUS"] = 65340] = "FULLWIDTH_REVERSE_SOLIDUS";
    UnicodePoCodePoint[UnicodePoCodePoint["HALFWIDTH_IDEOGRAPHIC_FULL_STOP"] = 65377] = "HALFWIDTH_IDEOGRAPHIC_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["HALFWIDTH_IDEOGRAPHIC_COMMA"] = 65380] = "HALFWIDTH_IDEOGRAPHIC_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["HALFWIDTH_KATAKANA_MIDDLE_DOT"] = 65381] = "HALFWIDTH_KATAKANA_MIDDLE_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["AEGEAN_WORD_SEPARATOR_LINE"] = 65792] = "AEGEAN_WORD_SEPARATOR_LINE";
    UnicodePoCodePoint[UnicodePoCodePoint["AEGEAN_WORD_SEPARATOR_DOT"] = 65793] = "AEGEAN_WORD_SEPARATOR_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["AEGEAN_CHECK_MARK"] = 65794] = "AEGEAN_CHECK_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["UGARITIC_WORD_DIVIDER"] = 66463] = "UGARITIC_WORD_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["OLD_PERSIAN_WORD_DIVIDER"] = 66512] = "OLD_PERSIAN_WORD_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["CAUCASIAN_ALBANIAN_CITATION_MARK"] = 66927] = "CAUCASIAN_ALBANIAN_CITATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["IMPERIAL_ARAMAIC_SECTION_SIGN"] = 67671] = "IMPERIAL_ARAMAIC_SECTION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["PHOENICIAN_WORD_SEPARATOR"] = 67871] = "PHOENICIAN_WORD_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["LYDIAN_TRIANGULAR_MARK"] = 67903] = "LYDIAN_TRIANGULAR_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_DOT"] = 68176] = "KHAROSHTHI_PUNCTUATION_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_SMALL_CIRCLE"] = 68177] = "KHAROSHTHI_PUNCTUATION_SMALL_CIRCLE";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_CIRCLE"] = 68178] = "KHAROSHTHI_PUNCTUATION_CIRCLE";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_CRESCENT_BAR"] = 68179] = "KHAROSHTHI_PUNCTUATION_CRESCENT_BAR";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_MANGALAM"] = 68180] = "KHAROSHTHI_PUNCTUATION_MANGALAM";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_LOTUS"] = 68181] = "KHAROSHTHI_PUNCTUATION_LOTUS";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_DANDA"] = 68182] = "KHAROSHTHI_PUNCTUATION_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_DOUBLE_DANDA"] = 68183] = "KHAROSHTHI_PUNCTUATION_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["KHAROSHTHI_PUNCTUATION_LINES"] = 68184] = "KHAROSHTHI_PUNCTUATION_LINES";
    UnicodePoCodePoint[UnicodePoCodePoint["OLD_SOUTH_ARABIAN_NUMERIC_INDICATOR"] = 68223] = "OLD_SOUTH_ARABIAN_NUMERIC_INDICATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_STAR"] = 68336] = "MANICHAEAN_PUNCTUATION_STAR";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_FLEURON"] = 68337] = "MANICHAEAN_PUNCTUATION_FLEURON";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_DOUBLE_DOT_WITHIN_DOT"] = 68338] = "MANICHAEAN_PUNCTUATION_DOUBLE_DOT_WITHIN_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_DOT_WITHIN_DOT"] = 68339] = "MANICHAEAN_PUNCTUATION_DOT_WITHIN_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_DOT"] = 68340] = "MANICHAEAN_PUNCTUATION_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_TWO_DOTS"] = 68341] = "MANICHAEAN_PUNCTUATION_TWO_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["MANICHAEAN_PUNCTUATION_LINE_FILLER"] = 68342] = "MANICHAEAN_PUNCTUATION_LINE_FILLER";
    UnicodePoCodePoint[UnicodePoCodePoint["AVESTAN_ABBREVIATION_MARK"] = 68409] = "AVESTAN_ABBREVIATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["TINY_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION"] = 68410] = "TINY_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["SMALL_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION"] = 68411] = "SMALL_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["LARGE_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION"] = 68412] = "LARGE_TWO_DOTS_OVER_ONE_DOT_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["LARGE_ONE_DOT_OVER_TWO_DOTS_PUNCTUATION"] = 68413] = "LARGE_ONE_DOT_OVER_TWO_DOTS_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["LARGE_TWO_RINGS_OVER_ONE_RING_PUNCTUATION"] = 68414] = "LARGE_TWO_RINGS_OVER_ONE_RING_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["LARGE_ONE_RING_OVER_TWO_RINGS_PUNCTUATION"] = 68415] = "LARGE_ONE_RING_OVER_TWO_RINGS_PUNCTUATION";
    UnicodePoCodePoint[UnicodePoCodePoint["PSALTER_PAHLAVI_SECTION_MARK"] = 68505] = "PSALTER_PAHLAVI_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PSALTER_PAHLAVI_TURNED_SECTION_MARK"] = 68506] = "PSALTER_PAHLAVI_TURNED_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["PSALTER_PAHLAVI_FOUR_DOTS_WITH_CROSS"] = 68507] = "PSALTER_PAHLAVI_FOUR_DOTS_WITH_CROSS";
    UnicodePoCodePoint[UnicodePoCodePoint["PSALTER_PAHLAVI_FOUR_DOTS_WITH_DOT"] = 68508] = "PSALTER_PAHLAVI_FOUR_DOTS_WITH_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["SOGDIAN_PUNCTUATION_TWO_VERTICAL_BARS"] = 69461] = "SOGDIAN_PUNCTUATION_TWO_VERTICAL_BARS";
    UnicodePoCodePoint[UnicodePoCodePoint["SOGDIAN_PUNCTUATION_TWO_VERTICAL_BARS_WITH_DOTS"] = 69462] = "SOGDIAN_PUNCTUATION_TWO_VERTICAL_BARS_WITH_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SOGDIAN_PUNCTUATION_CIRCLE_WITH_DOT"] = 69463] = "SOGDIAN_PUNCTUATION_CIRCLE_WITH_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["SOGDIAN_PUNCTUATION_TWO_CIRCLES_WITH_DOTS"] = 69464] = "SOGDIAN_PUNCTUATION_TWO_CIRCLES_WITH_DOTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SOGDIAN_PUNCTUATION_HALF_CIRCLE_WITH_DOT"] = 69465] = "SOGDIAN_PUNCTUATION_HALF_CIRCLE_WITH_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_DANDA"] = 69703] = "BRAHMI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_DOUBLE_DANDA"] = 69704] = "BRAHMI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_PUNCTUATION_DOT"] = 69705] = "BRAHMI_PUNCTUATION_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_PUNCTUATION_DOUBLE_DOT"] = 69706] = "BRAHMI_PUNCTUATION_DOUBLE_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_PUNCTUATION_LINE"] = 69707] = "BRAHMI_PUNCTUATION_LINE";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_PUNCTUATION_CRESCENT_BAR"] = 69708] = "BRAHMI_PUNCTUATION_CRESCENT_BAR";
    UnicodePoCodePoint[UnicodePoCodePoint["BRAHMI_PUNCTUATION_LOTUS"] = 69709] = "BRAHMI_PUNCTUATION_LOTUS";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_ABBREVIATION_SIGN"] = 69819] = "KAITHI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_ENUMERATION_SIGN"] = 69820] = "KAITHI_ENUMERATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_SECTION_MARK"] = 69822] = "KAITHI_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_DOUBLE_SECTION_MARK"] = 69823] = "KAITHI_DOUBLE_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_DANDA"] = 69824] = "KAITHI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["KAITHI_DOUBLE_DANDA"] = 69825] = "KAITHI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAKMA_SECTION_MARK"] = 69952] = "CHAKMA_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAKMA_DANDA"] = 69953] = "CHAKMA_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAKMA_DOUBLE_DANDA"] = 69954] = "CHAKMA_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["CHAKMA_QUESTION_MARK"] = 69955] = "CHAKMA_QUESTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["MAHAJANI_ABBREVIATION_SIGN"] = 70004] = "MAHAJANI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["MAHAJANI_SECTION_MARK"] = 70005] = "MAHAJANI_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_DANDA"] = 70085] = "SHARADA_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_DOUBLE_DANDA"] = 70086] = "SHARADA_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_ABBREVIATION_SIGN"] = 70087] = "SHARADA_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_SEPARATOR"] = 70088] = "SHARADA_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_SUTRA_MARK"] = 70093] = "SHARADA_SUTRA_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_SIGN_SIDDHAM"] = 70107] = "SHARADA_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_CONTINUATION_SIGN"] = 70109] = "SHARADA_CONTINUATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_SECTION_MARK_1"] = 70110] = "SHARADA_SECTION_MARK_1";
    UnicodePoCodePoint[UnicodePoCodePoint["SHARADA_SECTION_MARK_2"] = 70111] = "SHARADA_SECTION_MARK_2";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_DANDA"] = 70200] = "KHOJKI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_DOUBLE_DANDA"] = 70201] = "KHOJKI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_WORD_SEPARATOR"] = 70202] = "KHOJKI_WORD_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_SECTION_MARK"] = 70203] = "KHOJKI_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_DOUBLE_SECTION_MARK"] = 70204] = "KHOJKI_DOUBLE_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["KHOJKI_ABBREVIATION_SIGN"] = 70205] = "KHOJKI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["MULTANI_SECTION_MARK"] = 70313] = "MULTANI_SECTION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_DANDA"] = 70731] = "NEWA_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_DOUBLE_DANDA"] = 70732] = "NEWA_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_COMMA"] = 70733] = "NEWA_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_GAP_FILLER"] = 70734] = "NEWA_GAP_FILLER";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_ABBREVIATION_SIGN"] = 70735] = "NEWA_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_DOUBLE_COMMA"] = 70746] = "NEWA_DOUBLE_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_PLACEHOLDER_MARK"] = 70747] = "NEWA_PLACEHOLDER_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["NEWA_INSERTION_SIGN"] = 70749] = "NEWA_INSERTION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["TIRHUTA_ABBREVIATION_SIGN"] = 70854] = "TIRHUTA_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SIGN_SIDDHAM"] = 71105] = "SIDDHAM_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_DANDA"] = 71106] = "SIDDHAM_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_DOUBLE_DANDA"] = 71107] = "SIDDHAM_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SEPARATOR_DOT"] = 71108] = "SIDDHAM_SEPARATOR_DOT";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SEPARATOR_BAR"] = 71109] = "SIDDHAM_SEPARATOR_BAR";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_REPETITION_MARK_1"] = 71110] = "SIDDHAM_REPETITION_MARK_1";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_REPETITION_MARK_2"] = 71111] = "SIDDHAM_REPETITION_MARK_2";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_REPETITION_MARK_3"] = 71112] = "SIDDHAM_REPETITION_MARK_3";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_END_OF_TEXT_MARK"] = 71113] = "SIDDHAM_END_OF_TEXT_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_TRIDENT_AND_U_SHAPED_ORNAMENTS"] = 71114] = "SIDDHAM_SECTION_MARK_WITH_TRIDENT_AND_U_SHAPED_ORNAMENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_TRIDENT_AND_DOTTED_CRESCENTS"] = 71115] = "SIDDHAM_SECTION_MARK_WITH_TRIDENT_AND_DOTTED_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_CRESCENTS"] = 71116] = "SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_DOUBLE_CRESCENTS"] = 71117] = "SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_DOUBLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_TRIPLE_CRESCENTS"] = 71118] = "SIDDHAM_SECTION_MARK_WITH_RAYS_AND_DOTTED_TRIPLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_DOUBLE_RING"] = 71119] = "SIDDHAM_SECTION_MARK_DOUBLE_RING";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_DOUBLE_RING_WITH_RAYS"] = 71120] = "SIDDHAM_SECTION_MARK_DOUBLE_RING_WITH_RAYS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_DOUBLE_CRESCENTS"] = 71121] = "SIDDHAM_SECTION_MARK_WITH_DOUBLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_TRIPLE_CRESCENTS"] = 71122] = "SIDDHAM_SECTION_MARK_WITH_TRIPLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_QUADRUPLE_CRESCENTS"] = 71123] = "SIDDHAM_SECTION_MARK_WITH_QUADRUPLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_SEPTUPLE_CRESCENTS"] = 71124] = "SIDDHAM_SECTION_MARK_WITH_SEPTUPLE_CRESCENTS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_RAYS"] = 71125] = "SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_RAYS";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_TWO_ENCLOSURES"] = 71126] = "SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_TWO_ENCLOSURES";
    UnicodePoCodePoint[UnicodePoCodePoint["SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_FOUR_ENCLOSURES"] = 71127] = "SIDDHAM_SECTION_MARK_WITH_CIRCLES_AND_FOUR_ENCLOSURES";
    UnicodePoCodePoint[UnicodePoCodePoint["MODI_DANDA"] = 71233] = "MODI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["MODI_DOUBLE_DANDA"] = 71234] = "MODI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["MODI_ABBREVIATION_SIGN"] = 71235] = "MODI_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_BIRGA_WITH_ORNAMENT"] = 71264] = "MONGOLIAN_BIRGA_WITH_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_ROTATED_BIRGA"] = 71265] = "MONGOLIAN_ROTATED_BIRGA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_DOUBLE_BIRGA_WITH_ORNAMENT"] = 71266] = "MONGOLIAN_DOUBLE_BIRGA_WITH_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_TRIPLE_BIRGA_WITH_ORNAMENT"] = 71267] = "MONGOLIAN_TRIPLE_BIRGA_WITH_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_BIRGA_WITH_DOUBLE_ORNAMENT"] = 71268] = "MONGOLIAN_BIRGA_WITH_DOUBLE_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_ROTATED_BIRGA_WITH_ORNAMENT"] = 71269] = "MONGOLIAN_ROTATED_BIRGA_WITH_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_ROTATED_BIRGA_WITH_DOUBLE_ORNAMENT"] = 71270] = "MONGOLIAN_ROTATED_BIRGA_WITH_DOUBLE_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_INVERTED_BIRGA"] = 71271] = "MONGOLIAN_INVERTED_BIRGA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_INVERTED_BIRGA_WITH_DOUBLE_ORNAMENT"] = 71272] = "MONGOLIAN_INVERTED_BIRGA_WITH_DOUBLE_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_SWIRL_BIRGA"] = 71273] = "MONGOLIAN_SWIRL_BIRGA";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_SWIRL_BIRGA_WITH_ORNAMENT"] = 71274] = "MONGOLIAN_SWIRL_BIRGA_WITH_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_SWIRL_BIRGA_WITH_DOUBLE_ORNAMENT"] = 71275] = "MONGOLIAN_SWIRL_BIRGA_WITH_DOUBLE_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["MONGOLIAN_TURNED_SWIRL_BIRGA_WITH_DOUBLE_ORNAMENT"] = 71276] = "MONGOLIAN_TURNED_SWIRL_BIRGA_WITH_DOUBLE_ORNAMENT";
    UnicodePoCodePoint[UnicodePoCodePoint["AHOM_SIGN_SMALL_SECTION"] = 71484] = "AHOM_SIGN_SMALL_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["AHOM_SIGN_SECTION"] = 71485] = "AHOM_SIGN_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["AHOM_SIGN_RULAI"] = 71486] = "AHOM_SIGN_RULAI";
    UnicodePoCodePoint[UnicodePoCodePoint["DOGRA_ABBREVIATION_SIGN"] = 71739] = "DOGRA_ABBREVIATION_SIGN";
    UnicodePoCodePoint[UnicodePoCodePoint["DIVES_AKURU_DOUBLE_DANDA"] = 72004] = "DIVES_AKURU_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["DIVES_AKURU_GAP_FILLER"] = 72005] = "DIVES_AKURU_GAP_FILLER";
    UnicodePoCodePoint[UnicodePoCodePoint["DIVES_AKURU_END_OF_TEXT_MARK"] = 72006] = "DIVES_AKURU_END_OF_TEXT_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["NANDINAGARI_SIGN_SIDDHAM"] = 72162] = "NANDINAGARI_SIGN_SIDDHAM";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_INITIAL_HEAD_MARK"] = 72255] = "ZANABAZAR_SQUARE_INITIAL_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_CLOSING_HEAD_MARK"] = 72256] = "ZANABAZAR_SQUARE_CLOSING_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_MARK_TSHEG"] = 72257] = "ZANABAZAR_SQUARE_MARK_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_MARK_SHAD"] = 72258] = "ZANABAZAR_SQUARE_MARK_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_MARK_DOUBLE_SHAD"] = 72259] = "ZANABAZAR_SQUARE_MARK_DOUBLE_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_MARK_LONG_TSHEG"] = 72260] = "ZANABAZAR_SQUARE_MARK_LONG_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_INITIAL_DOUBLE_LINED_HEAD_MARK"] = 72261] = "ZANABAZAR_SQUARE_INITIAL_DOUBLE_LINED_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ZANABAZAR_SQUARE_CLOSING_DOUBLE_LINED_HEAD_MARK"] = 72262] = "ZANABAZAR_SQUARE_CLOSING_DOUBLE_LINED_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_MARK_TSHEG"] = 72346] = "SOYOMBO_MARK_TSHEG";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_MARK_SHAD"] = 72347] = "SOYOMBO_MARK_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_MARK_DOUBLE_SHAD"] = 72348] = "SOYOMBO_MARK_DOUBLE_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN_AND_TRIPLE_FLAME"] = 72350] = "SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN_AND_TRIPLE_FLAME";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN_AND_FLAME"] = 72351] = "SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN_AND_FLAME";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN"] = 72352] = "SOYOMBO_HEAD_MARK_WITH_MOON_AND_SUN";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_TERMINAL_MARK_1"] = 72353] = "SOYOMBO_TERMINAL_MARK_1";
    UnicodePoCodePoint[UnicodePoCodePoint["SOYOMBO_TERMINAL_MARK_2"] = 72354] = "SOYOMBO_TERMINAL_MARK_2";
    UnicodePoCodePoint[UnicodePoCodePoint["BHAIKSUKI_DANDA"] = 72769] = "BHAIKSUKI_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["BHAIKSUKI_DOUBLE_DANDA"] = 72770] = "BHAIKSUKI_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["BHAIKSUKI_WORD_SEPARATOR"] = 72771] = "BHAIKSUKI_WORD_SEPARATOR";
    UnicodePoCodePoint[UnicodePoCodePoint["BHAIKSUKI_GAP_FILLER_1"] = 72772] = "BHAIKSUKI_GAP_FILLER_1";
    UnicodePoCodePoint[UnicodePoCodePoint["BHAIKSUKI_GAP_FILLER_2"] = 72773] = "BHAIKSUKI_GAP_FILLER_2";
    UnicodePoCodePoint[UnicodePoCodePoint["MARCHEN_HEAD_MARK"] = 72816] = "MARCHEN_HEAD_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["MARCHEN_MARK_SHAD"] = 72817] = "MARCHEN_MARK_SHAD";
    UnicodePoCodePoint[UnicodePoCodePoint["MAKASAR_PASSIMBANG"] = 73463] = "MAKASAR_PASSIMBANG";
    UnicodePoCodePoint[UnicodePoCodePoint["MAKASAR_END_OF_SECTION"] = 73464] = "MAKASAR_END_OF_SECTION";
    UnicodePoCodePoint[UnicodePoCodePoint["TAMIL_PUNCTUATION_END_OF_TEXT"] = 73727] = "TAMIL_PUNCTUATION_END_OF_TEXT";
    UnicodePoCodePoint[UnicodePoCodePoint["CUNEIFORM_PUNCTUATION_SIGN_OLD_ASSYRIAN_WORD_DIVIDER"] = 74864] = "CUNEIFORM_PUNCTUATION_SIGN_OLD_ASSYRIAN_WORD_DIVIDER";
    UnicodePoCodePoint[UnicodePoCodePoint["CUNEIFORM_PUNCTUATION_SIGN_VERTICAL_COLON"] = 74865] = "CUNEIFORM_PUNCTUATION_SIGN_VERTICAL_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_COLON"] = 74866] = "CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_TRICOLON"] = 74867] = "CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_TRICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_QUADCOLON"] = 74868] = "CUNEIFORM_PUNCTUATION_SIGN_DIAGONAL_QUADCOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["MRO_DANDA"] = 92782] = "MRO_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["MRO_DOUBLE_DANDA"] = 92783] = "MRO_DOUBLE_DANDA";
    UnicodePoCodePoint[UnicodePoCodePoint["BASSA_VAH_FULL_STOP"] = 92917] = "BASSA_VAH_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_VOS_THOM"] = 92983] = "PAHAWH_HMONG_SIGN_VOS_THOM";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_VOS_TSHAB_CEEB"] = 92984] = "PAHAWH_HMONG_SIGN_VOS_TSHAB_CEEB";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_CIM_CHEEM"] = 92985] = "PAHAWH_HMONG_SIGN_CIM_CHEEM";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_VOS_THIAB"] = 92986] = "PAHAWH_HMONG_SIGN_VOS_THIAB";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_VOS_FEEM"] = 92987] = "PAHAWH_HMONG_SIGN_VOS_FEEM";
    UnicodePoCodePoint[UnicodePoCodePoint["PAHAWH_HMONG_SIGN_XAUS"] = 92996] = "PAHAWH_HMONG_SIGN_XAUS";
    UnicodePoCodePoint[UnicodePoCodePoint["MEDEFAIDRIN_COMMA"] = 93847] = "MEDEFAIDRIN_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["MEDEFAIDRIN_FULL_STOP"] = 93848] = "MEDEFAIDRIN_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["MEDEFAIDRIN_SYMBOL_AIVA"] = 93849] = "MEDEFAIDRIN_SYMBOL_AIVA";
    UnicodePoCodePoint[UnicodePoCodePoint["MEDEFAIDRIN_EXCLAMATION_OH"] = 93850] = "MEDEFAIDRIN_EXCLAMATION_OH";
    UnicodePoCodePoint[UnicodePoCodePoint["OLD_CHINESE_HOOK_MARK"] = 94178] = "OLD_CHINESE_HOOK_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["DUPLOYAN_PUNCTUATION_CHINOOK_FULL_STOP"] = 113823] = "DUPLOYAN_PUNCTUATION_CHINOOK_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SIGNWRITING_COMMA"] = 121479] = "SIGNWRITING_COMMA";
    UnicodePoCodePoint[UnicodePoCodePoint["SIGNWRITING_FULL_STOP"] = 121480] = "SIGNWRITING_FULL_STOP";
    UnicodePoCodePoint[UnicodePoCodePoint["SIGNWRITING_SEMICOLON"] = 121481] = "SIGNWRITING_SEMICOLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SIGNWRITING_COLON"] = 121482] = "SIGNWRITING_COLON";
    UnicodePoCodePoint[UnicodePoCodePoint["SIGNWRITING_PARENTHESIS"] = 121483] = "SIGNWRITING_PARENTHESIS";
    UnicodePoCodePoint[UnicodePoCodePoint["ADLAM_INITIAL_EXCLAMATION_MARK"] = 125278] = "ADLAM_INITIAL_EXCLAMATION_MARK";
    UnicodePoCodePoint[UnicodePoCodePoint["ADLAM_INITIAL_QUESTION_MARK"] = 125279] = "ADLAM_INITIAL_QUESTION_MARK";
})(UnicodePoCodePoint || (UnicodePoCodePoint = {}));

var UnicodePsCodePoint;
(function (UnicodePsCodePoint) {
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_PARENTHESIS"] = 40] = "LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SQUARE_BRACKET"] = 91] = "LEFT_SQUARE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_CURLY_BRACKET"] = 123] = "LEFT_CURLY_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["TIBETAN_MARK_GUG_RTAGS_GYON"] = 3898] = "TIBETAN_MARK_GUG_RTAGS_GYON";
    UnicodePsCodePoint[UnicodePsCodePoint["TIBETAN_MARK_ANG_KHANG_GYON"] = 3900] = "TIBETAN_MARK_ANG_KHANG_GYON";
    UnicodePsCodePoint[UnicodePsCodePoint["OGHAM_FEATHER_MARK"] = 5787] = "OGHAM_FEATHER_MARK";
    UnicodePsCodePoint[UnicodePsCodePoint["SINGLE_LOW_9_QUOTATION_MARK"] = 8218] = "SINGLE_LOW_9_QUOTATION_MARK";
    UnicodePsCodePoint[UnicodePsCodePoint["DOUBLE_LOW_9_QUOTATION_MARK"] = 8222] = "DOUBLE_LOW_9_QUOTATION_MARK";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SQUARE_BRACKET_WITH_QUILL"] = 8261] = "LEFT_SQUARE_BRACKET_WITH_QUILL";
    UnicodePsCodePoint[UnicodePsCodePoint["SUPERSCRIPT_LEFT_PARENTHESIS"] = 8317] = "SUPERSCRIPT_LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["SUBSCRIPT_LEFT_PARENTHESIS"] = 8333] = "SUBSCRIPT_LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_CEILING"] = 8968] = "LEFT_CEILING";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_FLOOR"] = 8970] = "LEFT_FLOOR";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_POINTING_ANGLE_BRACKET"] = 9001] = "LEFT_POINTING_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["MEDIUM_LEFT_PARENTHESIS_ORNAMENT"] = 10088] = "MEDIUM_LEFT_PARENTHESIS_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["MEDIUM_FLATTENED_LEFT_PARENTHESIS_ORNAMENT"] = 10090] = "MEDIUM_FLATTENED_LEFT_PARENTHESIS_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["MEDIUM_LEFT_POINTING_ANGLE_BRACKET_ORNAMENT"] = 10092] = "MEDIUM_LEFT_POINTING_ANGLE_BRACKET_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["HEAVY_LEFT_POINTING_ANGLE_QUOTATION_MARK_ORNAMENT"] = 10094] = "HEAVY_LEFT_POINTING_ANGLE_QUOTATION_MARK_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["HEAVY_LEFT_POINTING_ANGLE_BRACKET_ORNAMENT"] = 10096] = "HEAVY_LEFT_POINTING_ANGLE_BRACKET_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["LIGHT_LEFT_TORTOISE_SHELL_BRACKET_ORNAMENT"] = 10098] = "LIGHT_LEFT_TORTOISE_SHELL_BRACKET_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["MEDIUM_LEFT_CURLY_BRACKET_ORNAMENT"] = 10100] = "MEDIUM_LEFT_CURLY_BRACKET_ORNAMENT";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_S_SHAPED_BAG_DELIMITER"] = 10181] = "LEFT_S_SHAPED_BAG_DELIMITER";
    UnicodePsCodePoint[UnicodePsCodePoint["MATHEMATICAL_LEFT_WHITE_SQUARE_BRACKET"] = 10214] = "MATHEMATICAL_LEFT_WHITE_SQUARE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["MATHEMATICAL_LEFT_ANGLE_BRACKET"] = 10216] = "MATHEMATICAL_LEFT_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["MATHEMATICAL_LEFT_DOUBLE_ANGLE_BRACKET"] = 10218] = "MATHEMATICAL_LEFT_DOUBLE_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["MATHEMATICAL_LEFT_WHITE_TORTOISE_SHELL_BRACKET"] = 10220] = "MATHEMATICAL_LEFT_WHITE_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["MATHEMATICAL_LEFT_FLATTENED_PARENTHESIS"] = 10222] = "MATHEMATICAL_LEFT_FLATTENED_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_CURLY_BRACKET"] = 10627] = "LEFT_WHITE_CURLY_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_PARENTHESIS"] = 10629] = "LEFT_WHITE_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["Z_NOTATION_LEFT_IMAGE_BRACKET"] = 10631] = "Z_NOTATION_LEFT_IMAGE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["Z_NOTATION_LEFT_BINDING_BRACKET"] = 10633] = "Z_NOTATION_LEFT_BINDING_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SQUARE_BRACKET_WITH_UNDERBAR"] = 10635] = "LEFT_SQUARE_BRACKET_WITH_UNDERBAR";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SQUARE_BRACKET_WITH_TICK_IN_TOP_CORNER"] = 10637] = "LEFT_SQUARE_BRACKET_WITH_TICK_IN_TOP_CORNER";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SQUARE_BRACKET_WITH_TICK_IN_BOTTOM_CORNER"] = 10639] = "LEFT_SQUARE_BRACKET_WITH_TICK_IN_BOTTOM_CORNER";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_ANGLE_BRACKET_WITH_DOT"] = 10641] = "LEFT_ANGLE_BRACKET_WITH_DOT";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_ARC_LESS_THAN_BRACKET"] = 10643] = "LEFT_ARC_LESS_THAN_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["DOUBLE_LEFT_ARC_GREATER_THAN_BRACKET"] = 10645] = "DOUBLE_LEFT_ARC_GREATER_THAN_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_BLACK_TORTOISE_SHELL_BRACKET"] = 10647] = "LEFT_BLACK_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WIGGLY_FENCE"] = 10712] = "LEFT_WIGGLY_FENCE";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_DOUBLE_WIGGLY_FENCE"] = 10714] = "LEFT_DOUBLE_WIGGLY_FENCE";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_POINTING_CURVED_ANGLE_BRACKET"] = 10748] = "LEFT_POINTING_CURVED_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["TOP_LEFT_HALF_BRACKET"] = 11810] = "TOP_LEFT_HALF_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["BOTTOM_LEFT_HALF_BRACKET"] = 11812] = "BOTTOM_LEFT_HALF_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_SIDEWAYS_U_BRACKET"] = 11814] = "LEFT_SIDEWAYS_U_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_DOUBLE_PARENTHESIS"] = 11816] = "LEFT_DOUBLE_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["DOUBLE_LOW_REVERSED_9_QUOTATION_MARK"] = 11842] = "DOUBLE_LOW_REVERSED_9_QUOTATION_MARK";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_ANGLE_BRACKET"] = 12296] = "LEFT_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_DOUBLE_ANGLE_BRACKET"] = 12298] = "LEFT_DOUBLE_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_CORNER_BRACKET"] = 12300] = "LEFT_CORNER_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_CORNER_BRACKET"] = 12302] = "LEFT_WHITE_CORNER_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_BLACK_LENTICULAR_BRACKET"] = 12304] = "LEFT_BLACK_LENTICULAR_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_TORTOISE_SHELL_BRACKET"] = 12308] = "LEFT_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_LENTICULAR_BRACKET"] = 12310] = "LEFT_WHITE_LENTICULAR_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_TORTOISE_SHELL_BRACKET"] = 12312] = "LEFT_WHITE_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["LEFT_WHITE_SQUARE_BRACKET"] = 12314] = "LEFT_WHITE_SQUARE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["REVERSED_DOUBLE_PRIME_QUOTATION_MARK"] = 12317] = "REVERSED_DOUBLE_PRIME_QUOTATION_MARK";
    UnicodePsCodePoint[UnicodePsCodePoint["ORNATE_RIGHT_PARENTHESIS"] = 64831] = "ORNATE_RIGHT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_WHITE_LENTICULAR_BRACKET"] = 65047] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_WHITE_LENTICULAR_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_PARENTHESIS"] = 65077] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_CURLY_BRACKET"] = 65079] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_CURLY_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_TORTOISE_SHELL_BRACKET"] = 65081] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_BLACK_LENTICULAR_BRACKET"] = 65083] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_BLACK_LENTICULAR_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_DOUBLE_ANGLE_BRACKET"] = 65085] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_DOUBLE_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_ANGLE_BRACKET"] = 65087] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_ANGLE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_CORNER_BRACKET"] = 65089] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_CORNER_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_WHITE_CORNER_BRACKET"] = 65091] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_WHITE_CORNER_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["PRESENTATION_FORM_FOR_VERTICAL_LEFT_SQUARE_BRACKET"] = 65095] = "PRESENTATION_FORM_FOR_VERTICAL_LEFT_SQUARE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["SMALL_LEFT_PARENTHESIS"] = 65113] = "SMALL_LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["SMALL_LEFT_CURLY_BRACKET"] = 65115] = "SMALL_LEFT_CURLY_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["SMALL_LEFT_TORTOISE_SHELL_BRACKET"] = 65117] = "SMALL_LEFT_TORTOISE_SHELL_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["FULLWIDTH_LEFT_PARENTHESIS"] = 65288] = "FULLWIDTH_LEFT_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["FULLWIDTH_LEFT_SQUARE_BRACKET"] = 65339] = "FULLWIDTH_LEFT_SQUARE_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["FULLWIDTH_LEFT_CURLY_BRACKET"] = 65371] = "FULLWIDTH_LEFT_CURLY_BRACKET";
    UnicodePsCodePoint[UnicodePsCodePoint["FULLWIDTH_LEFT_WHITE_PARENTHESIS"] = 65375] = "FULLWIDTH_LEFT_WHITE_PARENTHESIS";
    UnicodePsCodePoint[UnicodePsCodePoint["HALFWIDTH_LEFT_CORNER_BRACKET"] = 65378] = "HALFWIDTH_LEFT_CORNER_BRACKET";
})(UnicodePsCodePoint || (UnicodePsCodePoint = {}));

var UnicodeZsCodePoint;
(function (UnicodeZsCodePoint) {
    UnicodeZsCodePoint[UnicodeZsCodePoint["SPACE"] = 32] = "SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["NO_BREAK_SPACE"] = 160] = "NO_BREAK_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["OGHAM_SPACE_MARK"] = 5760] = "OGHAM_SPACE_MARK";
    UnicodeZsCodePoint[UnicodeZsCodePoint["EN_QUAD"] = 8192] = "EN_QUAD";
    UnicodeZsCodePoint[UnicodeZsCodePoint["EM_QUAD"] = 8193] = "EM_QUAD";
    UnicodeZsCodePoint[UnicodeZsCodePoint["EN_SPACE"] = 8194] = "EN_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["EM_SPACE"] = 8195] = "EM_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["THREE_PER_EM_SPACE"] = 8196] = "THREE_PER_EM_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["FOUR_PER_EM_SPACE"] = 8197] = "FOUR_PER_EM_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["SIX_PER_EM_SPACE"] = 8198] = "SIX_PER_EM_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["FIGURE_SPACE"] = 8199] = "FIGURE_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["PUNCTUATION_SPACE"] = 8200] = "PUNCTUATION_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["THIN_SPACE"] = 8201] = "THIN_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["HAIR_SPACE"] = 8202] = "HAIR_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["NARROW_NO_BREAK_SPACE"] = 8239] = "NARROW_NO_BREAK_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["MEDIUM_MATHEMATICAL_SPACE"] = 8287] = "MEDIUM_MATHEMATICAL_SPACE";
    UnicodeZsCodePoint[UnicodeZsCodePoint["IDEOGRAPHIC_SPACE"] = 12288] = "IDEOGRAPHIC_SPACE";
})(UnicodeZsCodePoint || (UnicodeZsCodePoint = {}));

var VirtualCodePoint;
(function (VirtualCodePoint) {
    VirtualCodePoint[VirtualCodePoint["LINE_END"] = -1] = "LINE_END";
    VirtualCodePoint[VirtualCodePoint["SPACE"] = -2] = "SPACE";
})(VirtualCodePoint || (VirtualCodePoint = {}));

function createCodePointSearcher(codePoints) {
    const orderedCodePoints = [...new Set(codePoints)].sort((x, y) => x - y);
    const size = orderedCodePoints.length;
    if (size < 8) {
        return [
            (codePoint) => {
                for (let i = 0; i < orderedCodePoints.length; ++i) {
                    if (codePoint === orderedCodePoints[i])
                        return true;
                }
                return false;
            },
            [...orderedCodePoints],
        ];
    }
    const orderedRangeCodePoints = [];
    for (let i = 0, j; i < size; i += j) {
        const c = orderedCodePoints[i];
        for (j = 1; i + j < size; ++j) {
            if (orderedCodePoints[i + j] > c + j)
                break;
        }
        orderedRangeCodePoints.push(c, c + j);
    }
    if (orderedRangeCodePoints.length * 1.5 < size) {
        const rangeSize = orderedRangeCodePoints.length;
        if (rangeSize < 8) {
            return [
                (codePoint) => {
                    for (let i = 0; i < rangeSize; i += 2) {
                        const lft = orderedRangeCodePoints[i];
                        const rht = orderedRangeCodePoints[i + 1];
                        if (lft <= codePoint && codePoint < rht)
                            return true;
                    }
                    return false;
                },
                orderedCodePoints,
            ];
        }
        return [
            (codePoint) => {
                let lft = 0, rht = rangeSize;
                while (lft < rht) {
                    const mid = (lft + rht) >>> 1;
                    if (codePoint < orderedRangeCodePoints[mid])
                        rht = mid;
                    else
                        lft = mid + 1;
                }
                return Boolean(rht & 1);
            },
            orderedCodePoints,
        ];
    }
    return [
        (codePoint) => {
            let lft = 0, rht = size;
            while (lft < rht) {
                const mid = (lft + rht) >>> 1;
                if (codePoint < orderedCodePoints[mid])
                    rht = mid;
                else
                    lft = mid + 1;
            }
            if (rht <= 0)
                return false;
            return orderedCodePoints[rht - 1] === codePoint;
        },
        [...orderedCodePoints],
    ];
}
function collectCodePointsFromEnum(_enum) {
    return Object.values(_enum).filter((v) => typeof v === 'number');
}

createCodePointSearcher([
    AsciiCodePoint.HT,
    AsciiCodePoint.LF,
    AsciiCodePoint.VT,
    AsciiCodePoint.FF,
    AsciiCodePoint.CR,
    AsciiCodePoint.SPACE,
]);
const [isAsciiPunctuationCharacter, asciiPunctuationCharacters] = createCodePointSearcher([
    AsciiCodePoint.EXCLAMATION_MARK,
    AsciiCodePoint.DOUBLE_QUOTE,
    AsciiCodePoint.NUMBER_SIGN,
    AsciiCodePoint.DOLLAR_SIGN,
    AsciiCodePoint.PERCENT_SIGN,
    AsciiCodePoint.AMPERSAND,
    AsciiCodePoint.SINGLE_QUOTE,
    AsciiCodePoint.OPEN_PARENTHESIS,
    AsciiCodePoint.CLOSE_PARENTHESIS,
    AsciiCodePoint.ASTERISK,
    AsciiCodePoint.PLUS_SIGN,
    AsciiCodePoint.COMMA,
    AsciiCodePoint.MINUS_SIGN,
    AsciiCodePoint.DOT,
    AsciiCodePoint.SLASH,
    AsciiCodePoint.COLON,
    AsciiCodePoint.SEMICOLON,
    AsciiCodePoint.OPEN_ANGLE,
    AsciiCodePoint.EQUALS_SIGN,
    AsciiCodePoint.CLOSE_ANGLE,
    AsciiCodePoint.QUESTION_MARK,
    AsciiCodePoint.AT_SIGN,
    AsciiCodePoint.OPEN_BRACKET,
    AsciiCodePoint.BACKSLASH,
    AsciiCodePoint.CLOSE_BRACKET,
    AsciiCodePoint.CARET,
    AsciiCodePoint.UNDERSCORE,
    AsciiCodePoint.BACKTICK,
    AsciiCodePoint.OPEN_BRACE,
    AsciiCodePoint.VERTICAL_SLASH,
    AsciiCodePoint.CLOSE_BRACE,
    AsciiCodePoint.TILDE,
]);
const isAsciiDigitCharacter = (codePoint) => codePoint >= AsciiCodePoint.DIGIT0 && codePoint <= AsciiCodePoint.DIGIT9;
const isAsciiLowerLetter = (codePoint) => codePoint >= AsciiCodePoint.LOWERCASE_A &&
    codePoint <= AsciiCodePoint.LOWERCASE_Z;
const isAsciiUpperLetter = (codePoint) => codePoint >= AsciiCodePoint.UPPERCASE_A &&
    codePoint <= AsciiCodePoint.UPPERCASE_Z;
const isAsciiLetter = (codePoint) => isAsciiLowerLetter(codePoint) || isAsciiUpperLetter(codePoint);
const isAlphanumeric = (codePoint) => isAsciiLowerLetter(codePoint) ||
    isAsciiUpperLetter(codePoint) ||
    isAsciiDigitCharacter(codePoint);
const isAsciiCharacter = (codePoint) => codePoint >= AsciiCodePoint.NUL && codePoint <= AsciiCodePoint.DELETE;
const [isAsciiControlCharacter, asciiControlCharacters] = createCodePointSearcher([
    AsciiCodePoint.NUL,
    AsciiCodePoint.SOH,
    AsciiCodePoint.STX,
    AsciiCodePoint.ETX,
    AsciiCodePoint.EOT,
    AsciiCodePoint.ENQ,
    AsciiCodePoint.ACK,
    AsciiCodePoint.BEL,
    AsciiCodePoint.BS,
    AsciiCodePoint.HT,
    AsciiCodePoint.LF,
    AsciiCodePoint.VT,
    AsciiCodePoint.FF,
    AsciiCodePoint.CR,
    AsciiCodePoint.SO,
    AsciiCodePoint.SI,
    AsciiCodePoint.DLE,
    AsciiCodePoint.DC1,
    AsciiCodePoint.DC2,
    AsciiCodePoint.DC3,
    AsciiCodePoint.DC4,
    AsciiCodePoint.NAK,
    AsciiCodePoint.SYN,
    AsciiCodePoint.ETB,
    AsciiCodePoint.CAN,
    AsciiCodePoint.EM,
    AsciiCodePoint.SUB,
    AsciiCodePoint.ESC,
    AsciiCodePoint.FS,
    AsciiCodePoint.GS,
    AsciiCodePoint.RS,
    AsciiCodePoint.US,
    AsciiCodePoint.DELETE,
]);

const [isWhitespaceCharacter, whitespaceCharacters] = createCodePointSearcher([
    AsciiCodePoint.VT,
    AsciiCodePoint.FF,
    AsciiCodePoint.SPACE,
    VirtualCodePoint.SPACE,
    VirtualCodePoint.LINE_END,
]);
[AsciiCodePoint.SPACE, VirtualCodePoint.SPACE];
const isSpaceCharacter = (codePoint) => {
    return (codePoint === AsciiCodePoint.SPACE || codePoint === VirtualCodePoint.SPACE);
};
const isLineEnding = (codePoint) => {
    return codePoint === VirtualCodePoint.LINE_END;
};
const [isPunctuationCharacter, punctuationCharacters] = createCodePointSearcher([
    ...asciiPunctuationCharacters,
    ...collectCodePointsFromEnum(UnicodePcCodePoint),
    ...collectCodePointsFromEnum(UnicodePdCodePoint),
    ...collectCodePointsFromEnum(UnicodePeCodePoint),
    ...collectCodePointsFromEnum(UnicodePfCodePoint),
    ...collectCodePointsFromEnum(UnicodePiCodePoint),
    ...collectCodePointsFromEnum(UnicodePoCodePoint),
    ...collectCodePointsFromEnum(UnicodePsCodePoint),
]);
const isSpaceLike = (c) => isSpaceCharacter(c) || isLineEnding(c);

const [isUnicodeWhitespaceCharacter, unicodeWhitespaceCharacters] = createCodePointSearcher([
    AsciiCodePoint.HT,
    AsciiCodePoint.LF,
    AsciiCodePoint.FF,
    AsciiCodePoint.CR,
    VirtualCodePoint.SPACE,
    VirtualCodePoint.LINE_END,
    ...collectCodePointsFromEnum(UnicodeZsCodePoint),
]);

var UnicodeCodePoint;
(function (UnicodeCodePoint) {
    UnicodeCodePoint[UnicodeCodePoint["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
})(UnicodeCodePoint || (UnicodeCodePoint = {}));

function createEntityReferenceTrie() {
    const upperBound = (nodes, key) => {
        if (nodes.length <= 4) {
            for (let i = 0; i < nodes.length; ++i) {
                if (nodes[i].key >= key)
                    return i;
            }
            return nodes.length;
        }
        let lft = 0, rht = nodes.length;
        while (lft < rht) {
            const mid = (lft + rht) >>> 1;
            const o = nodes[mid];
            if (o.key < key)
                lft = mid + 1;
            else
                rht = mid;
        }
        return lft;
    };
    const root = { key: 0, children: [] };
    const insert = (keys, value) => {
        let u = root;
        for (const key of keys) {
            const index = upperBound(u.children, key);
            if (index >= u.children.length) {
                const v = { key, children: [] };
                u.children.push(v);
                u = v;
                continue;
            }
            let v = u.children[index];
            if (v.key === key) {
                u = v;
                continue;
            }
            v = { key, children: [] };
            u.children.splice(index, 0, v);
            u = v;
        }
        u.value = value;
    };
    const search = (nodePoints, startIndex, endIndex) => {
        let u = root;
        for (let i = startIndex; i < endIndex; ++i) {
            const key = nodePoints[i].codePoint;
            const index = upperBound(u.children, key);
            if (index >= u.children.length)
                return null;
            const v = u.children[index];
            if (v.key !== key)
                return null;
            if (v.value != null)
                return { nextIndex: i + 1, value: v.value };
            u = v;
        }
        return null;
    };
    return { insert, search };
}
const entityReferenceTrie = createEntityReferenceTrie();
entityReferences.forEach(entity => entityReferenceTrie.insert(entity.key, entity.value));
function eatEntityReference(nodePoints, startIndex, endIndex) {
    if (startIndex + 1 >= endIndex)
        return null;
    const result = entityReferenceTrie.search(nodePoints, startIndex, endIndex);
    if (result != null)
        return result;
    if (nodePoints[startIndex].codePoint !== AsciiCodePoint.NUMBER_SIGN)
        return null;
    let val = 0, i = startIndex + 1;
    if (nodePoints[i].codePoint === AsciiCodePoint.LOWERCASE_X ||
        nodePoints[i].codePoint === AsciiCodePoint.UPPERCASE_X) {
        i += 1;
        for (let cnt = 1; cnt <= 6 && i < endIndex; ++cnt, ++i) {
            const c = nodePoints[i].codePoint;
            if (isAsciiDigitCharacter(c)) {
                val = (val << 4) + (c - AsciiCodePoint.DIGIT0);
                continue;
            }
            if (c >= AsciiCodePoint.UPPERCASE_A && c <= AsciiCodePoint.UPPERCASE_F) {
                val = (val << 4) + (c - AsciiCodePoint.UPPERCASE_A + 10);
                continue;
            }
            if (c >= AsciiCodePoint.LOWERCASE_A && c <= AsciiCodePoint.LOWERCASE_F) {
                val = (val << 4) + (c - AsciiCodePoint.LOWERCASE_A + 10);
                continue;
            }
            break;
        }
    }
    else {
        for (let cnt = 1; cnt <= 7 && i < endIndex; ++cnt, ++i) {
            const c = nodePoints[i].codePoint;
            if (!isAsciiDigitCharacter(c))
                break;
            val = val * 10 + (c - AsciiCodePoint.DIGIT0);
        }
    }
    if (i >= endIndex || nodePoints[i].codePoint !== AsciiCodePoint.SEMICOLON)
        return null;
    let value;
    try {
        if (val === 0)
            val = UnicodeCodePoint.REPLACEMENT_CHARACTER;
        value = String.fromCodePoint(val);
    }
    catch (error) {
        value = String.fromCodePoint(UnicodeCodePoint.REPLACEMENT_CHARACTER);
    }
    return { nextIndex: i + 1, value };
}

function foldCase(text) {
    return Array.from(text)
        .map(c => { var _a; return (_a = foldingCaseCodeMap[c]) !== null && _a !== void 0 ? _a : c; })
        .join('');
}

(() => {
    try {
        const pattern = /\p{Script=Han}|[\u{3002}\u{ff1f}\u{ff01}\u{ff0c}\u{3001}\u{ff1b}\u{ff1a}\u{201c}\u{201d}\u{2018}\u{2019}\u{ff08}\u{ff09}\u{300a}\u{300b}\u{3008}\u{3009}\u{3010}\u{3011}\u{300e}\u{300f}\u{300c}\u{300d}\u{fe43}\u{fe44}\u{3014}\u{3015}\u{2026}\u{2014}\u{ff5e}\u{fe4f}\u{ffe5}]/u
            .source;
        const regex = new RegExp(`(${pattern})\\n+(${pattern})`, 'gu');
        return (value) => value.replace(regex, '$1$2');
    }
    catch (_a) {
        const pattern = /[\u{4E00}-\u{9FCC}\u{3400}-\u{4DB5}\u{FA0E}\u{FA0F}\u{FA11}\u{FA13}\u{FA14}\u{FA1F}\u{FA21}\u{FA23}\u{FA24}\u{FA27}-\u{FA29}]|[\u{d840}-\u{d868}][\u{dc00}-\u{dfff}]|\u{d869}[\u{dc00}-\u{ded6}\u{df00}-\u{dfff}]|[\u{d86a}-\u{d86c}][\u{dc00}-\u{dfff}]|\u{d86d}[\u{dc00}-\u{df34}\u{df40}-\u{dfff}]|\u{d86e}[\u{dc00}-\u{dc1d}]/u
            .source;
        const regex = new RegExp(`(${pattern})\\n+(${pattern})`, 'gu');
        return (value) => value.replace(regex, '$1$2');
    }
})();

function* createNodePointGenerator(literalStrings) {
    let offset = 0;
    let column = 1;
    let line = 1;
    const contents = typeof literalStrings === 'string' ? [literalStrings] : literalStrings;
    for (const content of contents) {
        const codePoints = [];
        for (const c of content) {
            const codePoint = c.codePointAt(0);
            codePoints.push(codePoint);
        }
        const nodePoints = [];
        const endIndex = codePoints.length;
        for (let i = 0; i < endIndex; ++i) {
            const codePoint = codePoints[i];
            switch (codePoint) {
                case AsciiCodePoint.HT:
                    for (let i = 0; i < 4; ++i) {
                        nodePoints.push({
                            line,
                            column,
                            offset,
                            codePoint: VirtualCodePoint.SPACE,
                        });
                    }
                    offset += 1;
                    column += 1;
                    break;
                case AsciiCodePoint.LF:
                    nodePoints.push({
                        line,
                        column,
                        offset,
                        codePoint: VirtualCodePoint.LINE_END,
                    });
                    offset += 1;
                    column = 1;
                    line += 1;
                    break;
                case AsciiCodePoint.CR:
                    nodePoints.push({
                        line,
                        column,
                        offset,
                        codePoint: VirtualCodePoint.LINE_END,
                    });
                    offset += 1;
                    column = 1;
                    line += 1;
                    if (i + 1 < endIndex && codePoints[i + 1] === AsciiCodePoint.LF) {
                        offset += 1;
                        i += 1;
                    }
                    break;
                case AsciiCodePoint.NUL:
                    nodePoints.push({
                        line,
                        column,
                        offset,
                        codePoint: UnicodeCodePoint.REPLACEMENT_CHARACTER,
                    });
                    offset += 1;
                    column += 1;
                    break;
                default:
                    nodePoints.push({ line, column, offset, codePoint });
                    offset += 1;
                    column += 1;
                    break;
            }
        }
        yield nodePoints;
    }
    return;
}
function calcStringFromNodePoints(nodePoints, startIndex = 0, endIndex = nodePoints.length, trim = false) {
    if (trim) {
        [startIndex, endIndex] = calcTrimBoundaryOfCodePoints(nodePoints, startIndex, endIndex);
    }
    let result = '';
    for (let i = startIndex, j; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        switch (c) {
            case VirtualCodePoint.SPACE: {
                for (j = i + 1; j < endIndex; ++j) {
                    if (nodePoints[j].codePoint !== VirtualCodePoint.SPACE)
                        break;
                }
                const tabCount = (j - i) >> 2;
                const spaceCount = (j - i) & 3;
                for (let k = 0; k < spaceCount; ++k)
                    result += ' ';
                for (let k = 0; k < tabCount; ++k)
                    result += '\t';
                i = j - 1;
                break;
            }
            case VirtualCodePoint.LINE_END: {
                result += '\n';
                break;
            }
            default:
                result += String.fromCodePoint(c);
        }
    }
    return result;
}
function calcEscapedStringFromNodePoints(nodePoints, startIndex = 0, endIndex = nodePoints.length, trim = false) {
    if (trim) {
        [startIndex, endIndex] = calcTrimBoundaryOfCodePoints(nodePoints, startIndex, endIndex);
    }
    let result = '';
    for (let i = startIndex, j; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (c === AsciiCodePoint.BACKSLASH && i + 1 < endIndex) {
            const d = nodePoints[i + 1].codePoint;
            if (isAsciiPunctuationCharacter(d)) {
                i += 1;
                result += String.fromCodePoint(d);
                continue;
            }
        }
        switch (c) {
            case VirtualCodePoint.SPACE: {
                for (j = i + 1; j < endIndex; ++j) {
                    if (nodePoints[j].codePoint !== VirtualCodePoint.SPACE)
                        break;
                }
                const tabCount = (j - i) >> 2;
                const spaceCount = (j - i) & 3;
                for (let k = 0; k < spaceCount; ++k)
                    result += ' ';
                for (let k = 0; k < tabCount; ++k)
                    result += '\t';
                i = j - 1;
                break;
            }
            case VirtualCodePoint.LINE_END: {
                result += '\n';
                break;
            }
            case AsciiCodePoint.AMPERSAND: {
                const entityReference = eatEntityReference(nodePoints, i + 1, endIndex);
                if (entityReference == null)
                    result += '&';
                else {
                    result += entityReference.value;
                    i = entityReference.nextIndex - 1;
                }
                break;
            }
            default:
                result += String.fromCodePoint(c);
        }
    }
    return result;
}
function calcTrimBoundaryOfCodePoints(nodePoints, startIndex = 0, endIndex = nodePoints.length) {
    let leftIndex = startIndex, rightIndex = endIndex - 1;
    for (; leftIndex <= rightIndex; ++leftIndex) {
        const p = nodePoints[leftIndex];
        if (!isWhitespaceCharacter(p.codePoint))
            break;
    }
    for (; leftIndex <= rightIndex; --rightIndex) {
        const p = nodePoints[rightIndex];
        if (!isWhitespaceCharacter(p.codePoint))
            break;
    }
    return [leftIndex, rightIndex + 1];
}

const AdmonitionType = 'admonition';

const BlockquoteType = 'blockquote';

const BreakType = 'break';

const CodeType = 'code';

const DefinitionType = 'definition';

const DeleteType = 'delete';

const EcmaImportType = 'ecmaImport';

const EmphasisType = 'emphasis';

const FootnoteType = 'footnote';

const FootnoteDefinitionType = 'footnoteDefinition';

const FootnoteReferenceType = 'footnoteReference';

const HeadingType = 'heading';

const HtmlType = 'html';
var HtmlContentType;
(function (HtmlContentType) {
    HtmlContentType["CDATA"] = "cdata";
    HtmlContentType["Closing"] = "closing";
    HtmlContentType["Comment"] = "comment";
    HtmlContentType["Declaration"] = "declaration";
    HtmlContentType["Instruction"] = "instruction";
    HtmlContentType["Open"] = "open";
})(HtmlContentType || (HtmlContentType = {}));

const ImageReferenceType = 'imageReference';

const ImageType = 'image';

const InlineCodeType = 'inlineCode';

const InlineMathType = 'inlineMath';

const LinkReferenceType = 'linkReference';

const LinkType = 'link';

const ListItemType = 'listItem';
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["TODO"] = "todo";
    TaskStatus["DOING"] = "doing";
    TaskStatus["DONE"] = "done";
})(TaskStatus || (TaskStatus = {}));

const ListType = 'list';

const MathType = 'math';

const ParagraphType = 'paragraph';

const StrongType = 'strong';

const TableCellType = 'tableCell';

const TableRowType = 'tableRow';

const TableType = 'table';

const TextType = 'text';

const ThematicBreakType = 'thematicBreak';

var TokenizerPriority;
(function (TokenizerPriority) {
    TokenizerPriority[TokenizerPriority["ATOMIC"] = 10] = "ATOMIC";
    TokenizerPriority[TokenizerPriority["FENCED_BLOCK"] = 10] = "FENCED_BLOCK";
    TokenizerPriority[TokenizerPriority["CONTAINING_BLOCK"] = 10] = "CONTAINING_BLOCK";
    TokenizerPriority[TokenizerPriority["INTERRUPTABLE_BLOCK"] = 2] = "INTERRUPTABLE_BLOCK";
    TokenizerPriority[TokenizerPriority["IMAGES"] = 4] = "IMAGES";
    TokenizerPriority[TokenizerPriority["LINKS"] = 3] = "LINKS";
    TokenizerPriority[TokenizerPriority["CONTAINING_INLINE"] = 2] = "CONTAINING_INLINE";
    TokenizerPriority[TokenizerPriority["SOFT_INLINE"] = 1] = "SOFT_INLINE";
    TokenizerPriority[TokenizerPriority["FALLBACK"] = -1] = "FALLBACK";
})(TokenizerPriority || (TokenizerPriority = {}));

class BaseInlineTokenizer {
    constructor(props) {
        this.name = props.name;
        this.priority = props.priority;
    }
    *findDelimiter(nodePoints, api) {
        let lastEndIndex = -1;
        let delimiter = null;
        while (true) {
            const [startIndex, endIndex] = yield delimiter;
            if (lastEndIndex === endIndex) {
                if (delimiter == null || delimiter.startIndex >= startIndex)
                    continue;
            }
            lastEndIndex = endIndex;
            delimiter = this._findDelimiter(startIndex, endIndex, nodePoints, api);
        }
    }
    toString() {
        return this.name;
    }
}

class BaseBlockTokenizer {
    constructor(props) {
        this.name = props.name;
        this.priority = props.priority;
    }
    toString() {
        return this.name;
    }
}

const PhrasingContentType = 'phrasingContent';

function calcStartYastNodePoint(nodePoints, index) {
    const { line, column, offset } = nodePoints[index];
    return { line, column, offset };
}
function calcEndYastNodePoint(nodePoints, index) {
    const { line, column, offset } = nodePoints[index];
    return { line, column: column + 1, offset: offset + 1 };
}

function* createPhrasingLineGenerator(nodePointsList) {
    const allNodePoints = [];
    let startIndex = 0;
    let firstNonWhitespaceIndex = 0;
    let countOfPrecedeSpaces = 0;
    for (const nodePoints of nodePointsList) {
        const lines = [];
        for (const p of nodePoints) {
            const c = p.codePoint;
            if (firstNonWhitespaceIndex === allNodePoints.length) {
                if (isSpaceCharacter(c)) {
                    countOfPrecedeSpaces += 1;
                    firstNonWhitespaceIndex += 1;
                }
            }
            allNodePoints.push(p);
            if (isLineEnding(c)) {
                if (firstNonWhitespaceIndex + 1 === allNodePoints.length) {
                    firstNonWhitespaceIndex += 1;
                }
                const line = {
                    nodePoints: allNodePoints,
                    startIndex,
                    endIndex: allNodePoints.length,
                    firstNonWhitespaceIndex,
                    countOfPrecedeSpaces,
                };
                lines.push(line);
                startIndex = allNodePoints.length;
                firstNonWhitespaceIndex = allNodePoints.length;
                countOfPrecedeSpaces = 0;
            }
        }
        yield lines;
    }
    if (startIndex < allNodePoints.length) {
        const line = {
            nodePoints: allNodePoints,
            startIndex,
            endIndex: allNodePoints.length,
            firstNonWhitespaceIndex,
            countOfPrecedeSpaces,
        };
        yield [line];
    }
    return allNodePoints;
}
function calcPositionFromPhrasingContentLines(lines) {
    const firstLine = lines[0];
    const lastLine = lines[lines.length - 1];
    const position = {
        start: calcStartYastNodePoint(firstLine.nodePoints, firstLine.startIndex),
        end: calcEndYastNodePoint(lastLine.nodePoints, lastLine.endIndex - 1),
    };
    return position;
}
function mergeContentLinesFaithfully(lines, startLineIndex = 0, endLineIndex = lines.length) {
    if (startLineIndex >= endLineIndex ||
        startLineIndex < 0 ||
        endLineIndex > lines.length)
        return [];
    const contents = [];
    for (let i = startLineIndex; i < endLineIndex; ++i) {
        const { nodePoints, startIndex, endIndex } = lines[i];
        for (let i = startIndex; i < endIndex; ++i) {
            contents.push(nodePoints[i]);
        }
    }
    return contents;
}
function mergeAndStripContentLines(lines, startLineIndex = 0, endLineIndex = lines.length) {
    const contents = [];
    if (startLineIndex >= endLineIndex ||
        startLineIndex < 0 ||
        endLineIndex > lines.length)
        return [];
    for (let i = startLineIndex; i + 1 < endLineIndex; ++i) {
        const { nodePoints, endIndex, firstNonWhitespaceIndex } = lines[i];
        for (let i = firstNonWhitespaceIndex; i < endIndex; ++i) {
            contents.push(nodePoints[i]);
        }
    }
    const { nodePoints, endIndex, firstNonWhitespaceIndex } = lines[endLineIndex - 1];
    let lastNonWhitespaceIndex = endIndex - 1;
    for (; lastNonWhitespaceIndex >= 0; --lastNonWhitespaceIndex) {
        const p = nodePoints[lastNonWhitespaceIndex];
        if (!isWhitespaceCharacter(p.codePoint))
            break;
    }
    for (let i = firstNonWhitespaceIndex; i <= lastNonWhitespaceIndex; ++i) {
        contents.push(nodePoints[i]);
    }
    return contents;
}

function encodeLinkDestination(destination) {
    const uri = decodeURI(destination);
    const result = encodeURI(uri);
    return result;
}
function resolveLabelToIdentifier(label) {
    const identifier = label.trim().replace(/\s+/gu, ' ').toLowerCase();
    return foldCase(identifier);
}
function resolveLinkLabelAndIdentifier(nodePoints, startIndex, endIndex) {
    const label = calcStringFromNodePoints(nodePoints, startIndex, endIndex, true);
    if (label.length <= 0)
        return null;
    const identifier = resolveLabelToIdentifier(label);
    return { label, identifier };
}
function eatLinkLabel(nodePoints, startIndex, _endIndex) {
    let i = startIndex + 1;
    const endIndex = Math.min(i + 1000, _endIndex);
    for (; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        switch (c) {
            case AsciiCodePoint.BACKSLASH:
                i += 1;
                break;
            case AsciiCodePoint.OPEN_BRACKET:
                return { nextIndex: -1, labelAndIdentifier: null };
            case AsciiCodePoint.CLOSE_BRACKET: {
                const labelAndIdentifier = resolveLinkLabelAndIdentifier(nodePoints, startIndex + 1, i);
                return { nextIndex: i + 1, labelAndIdentifier };
            }
        }
    }
    return { nextIndex: -1, labelAndIdentifier: null };
}
function isLinkToken(token) {
    return token.nodeType === LinkType || token.nodeType === LinkReferenceType;
}

function eatOptionalCharacters(nodePoints, startIndex, endIndex, codePoint) {
    let i = startIndex;
    while (i < endIndex && nodePoints[i].codePoint === codePoint)
        i += 1;
    return i;
}
function eatOptionalWhitespaces(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (!isWhitespaceCharacter(c))
            return i;
    }
    return endIndex;
}
function eatOptionalBlankLines(nodePoints, startIndex, endIndex) {
    let result = startIndex;
    for (let i = startIndex; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (isSpaceCharacter(c))
            continue;
        if (isLineEnding(c)) {
            result = i + 1;
            continue;
        }
        break;
    }
    return result;
}
function trimBlankLines(lines) {
    if (lines.length <= 0)
        return null;
    let startLineIndex = 0;
    for (; startLineIndex < lines.length; ++startLineIndex) {
        const line = lines[startLineIndex];
        if (line.firstNonWhitespaceIndex < line.endIndex)
            break;
    }
    let endLineIndex = lines.length - 1;
    for (; endLineIndex > startLineIndex; --endLineIndex) {
        const line = lines[endLineIndex];
        if (line.firstNonWhitespaceIndex < line.endIndex)
            break;
    }
    if (startLineIndex > endLineIndex)
        return null;
    return lines.slice(startLineIndex, endLineIndex + 1);
}

function createNodeTypeMatcher(aimTypes) {
    if (aimTypes == null)
        return () => true;
    if (aimTypes.length === 0) {
        return () => false;
    }
    if (aimTypes.length === 1) {
        const t = aimTypes[0];
        return (node) => node.type === t;
    }
    return (node) => {
        for (const t of aimTypes) {
            if (node.type === t)
                return true;
        }
        return false;
    };
}

function replaceAST(mutableRoot, aimTypes, replace) {
    const isMatched = createNodeTypeMatcher(aimTypes);
    const visit = (u) => {
        let nextChildren = null;
        const { children } = u;
        for (let i = 0; i < children.length; ++i) {
            const v = children[i];
            if (v.children != null)
                visit(v);
            if (isMatched(v)) {
                const newChild = replace(v, u, i);
                if (newChild !== v) {
                    if (nextChildren === null)
                        nextChildren = children.slice(0, i);
                    if (newChild != null) {
                        if (Array.isArray(newChild))
                            nextChildren.push(...newChild);
                        else
                            nextChildren.push(newChild);
                    }
                    continue;
                }
            }
            if (nextChildren !== null)
                nextChildren.push(v);
        }
        if (nextChildren != null) {
            u.children = nextChildren;
        }
    };
    visit(mutableRoot);
}
function mergePresetIdentifiers(identifierMap, presetIdentifiers) {
    for (const { identifier } of presetIdentifiers) {
        identifierMap[identifier] = true;
    }
}

const prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition)
        return;
    throw new Error(prefix);
}

const phrasingContentTokenizerUniqueName = '@yozora/tokenizer-phrasing-content';
class PhrasingContentTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a;
        super({
            name: phrasingContentTokenizerUniqueName,
            priority: (_a = props.priority) !== null && _a !== void 0 ? _a : 1,
        });
        this.isContainingBlock = false;
    }
    parseBlock(token) {
        const node = this.buildPhrasingContent(token.lines);
        if (node == null)
            return null;
        return node;
    }
    extractPhrasingContentLines(token) {
        return token.lines;
    }
    buildBlockToken(_lines) {
        const lines = trimBlankLines(_lines);
        if (lines == null)
            return null;
        const position = calcPositionFromPhrasingContentLines(lines);
        const token = {
            _tokenizer: this.name,
            nodeType: PhrasingContentType,
            lines,
            position,
        };
        return token;
    }
    buildPhrasingContent(lines) {
        const contents = mergeAndStripContentLines(lines);
        if (contents.length <= 0)
            return null;
        const node = {
            type: PhrasingContentType,
            contents,
        };
        return node;
    }
}

function createBlockContentProcessor(api, hooks, fallbackHook) {
    const root = {
        _tokenizer: 'root',
        nodeType: 'root',
        position: {
            start: { line: 1, column: 1, offset: 0 },
            end: { line: 1, column: 1, offset: 0 },
        },
        children: [],
    };
    const stateStack = [];
    stateStack.push({
        hook: { isContainingBlock: true },
        token: root,
    });
    let currentStackIndex = 0;
    const refreshPosition = (endPoint) => {
        for (let sIndex = currentStackIndex; sIndex >= 0; --sIndex) {
            const o = stateStack[sIndex];
            o.token.position.end = Object.assign({}, endPoint);
        }
    };
    const createRollbackProcessor = (hook, lines) => {
        if (lines.length <= 0)
            return null;
        const candidateHooks = hooks.filter(h => h != hook);
        const processor = createBlockContentProcessor(api, candidateHooks, fallbackHook);
        for (const line of lines) {
            processor.consume(line);
        }
        return processor;
    };
    const popup = () => {
        const topState = stateStack.pop();
        if (topState == null)
            return undefined;
        if (stateStack.length > 0) {
            const parent = stateStack[stateStack.length - 1];
            if (topState.hook.onClose != null) {
                const result = topState.hook.onClose(topState.token, api);
                if (result != null) {
                    switch (result.status) {
                        case 'closingAndRollback': {
                            const processor = createRollbackProcessor(topState.hook, result.lines);
                            if (processor == null)
                                break;
                            const internalRoot = processor.done();
                            parent.token.children.push(...internalRoot.children);
                            break;
                        }
                        case 'failedAndRollback': {
                            parent.token.children.pop();
                            const processor = createRollbackProcessor(topState.hook, result.lines);
                            if (processor == null)
                                break;
                            const internalRoot = processor.done();
                            parent.token.children.push(...internalRoot.children);
                            break;
                        }
                    }
                }
            }
        }
        if (currentStackIndex >= stateStack.length) {
            currentStackIndex = stateStack.length - 1;
        }
        return topState;
    };
    const cutStaleBranch = (nextTopIndex) => {
        while (stateStack.length > nextTopIndex)
            popup();
    };
    const push = (hook, nextToken, saturated) => {
        cutStaleBranch(currentStackIndex + 1);
        const parent = stateStack[currentStackIndex];
        parent.token.children.push(nextToken);
        refreshPosition(nextToken.position.end);
        currentStackIndex += 1;
        stateStack.push({ hook, token: nextToken });
        if (saturated) {
            popup();
        }
    };
    const rollback = (hook, lines, parent) => {
        const processor = createRollbackProcessor(hook, lines);
        if (processor == null)
            return false;
        const internalStateStack = processor.shallowSnapshot();
        const internalStateRoot = internalStateStack[0];
        if (internalStateRoot.token.children != null) {
            parent.token.children.push(...internalStateRoot.token.children);
        }
        refreshPosition(internalStateRoot.token.position.end);
        for (let i = 1; i < internalStateStack.length; ++i) {
            const internalState = internalStateStack[i];
            stateStack.push(internalState);
        }
        currentStackIndex = stateStack.length - 1;
        return true;
    };
    const consume = (line) => {
        const { nodePoints, startIndex: startIndexOfLine, endIndex: endIndexOfLine, } = line;
        let { firstNonWhitespaceIndex, countOfPrecedeSpaces, startIndex: i } = line;
        const getEatingInfo = () => ({
            nodePoints,
            startIndex: i,
            endIndex: endIndexOfLine,
            firstNonWhitespaceIndex,
            countOfPrecedeSpaces,
        });
        const moveForward = (nextIndex, shouldRefreshPosition) => {
            invariant(i <= nextIndex);
            if (shouldRefreshPosition) {
                const endPoint = calcEndYastNodePoint(nodePoints, nextIndex - 1);
                refreshPosition(endPoint);
            }
            if (i === nextIndex)
                return;
            i = nextIndex;
            countOfPrecedeSpaces = 0;
            firstNonWhitespaceIndex = nextIndex;
            for (; firstNonWhitespaceIndex < endIndexOfLine; ++firstNonWhitespaceIndex) {
                const c = nodePoints[firstNonWhitespaceIndex].codePoint;
                if (isSpaceCharacter(c)) {
                    countOfPrecedeSpaces += 1;
                    continue;
                }
                if (!isWhitespaceCharacter(c))
                    break;
            }
        };
        const consumeNewOpener = (hook, line) => {
            const { token: parentToken } = stateStack[currentStackIndex];
            const result = hook.eatOpener(line, parentToken);
            if (result == null)
                return false;
            invariant(result.nextIndex > i, '[consumeNewOpener] The marker of the new data node cannot be empty.\n' +
                ` tokenizer(${result.token._tokenizer})`);
            moveForward(result.nextIndex, false);
            const nextToken = result.token;
            nextToken._tokenizer = hook.name;
            push(hook, nextToken, Boolean(result.saturated));
            return true;
        };
        const interruptSibling = (hook, line) => {
            if (hook.eatAndInterruptPreviousSibling == null)
                return false;
            const { hook: siblingHook, token: siblingToken } = stateStack[currentStackIndex];
            const { token: parentToken } = stateStack[currentStackIndex - 1];
            if (hook.priority <= siblingHook.priority)
                return false;
            const result = hook.eatAndInterruptPreviousSibling(line, siblingToken, parentToken, api);
            if (result == null)
                return false;
            cutStaleBranch(currentStackIndex);
            parentToken.children.pop();
            if (result.remainingSibling != null) {
                if (Array.isArray(result.remainingSibling)) {
                    parentToken.children.push(...result.remainingSibling);
                }
                else {
                    parentToken.children.push(result.remainingSibling);
                }
            }
            moveForward(result.nextIndex, false);
            const nextToken = result.token;
            nextToken._tokenizer = hook.name;
            push(hook, nextToken, Boolean(result.saturated));
            return true;
        };
        const step1 = () => {
            currentStackIndex = 1;
            if (stateStack.length < 2)
                return;
            let { token: parentToken } = stateStack[currentStackIndex - 1];
            while (i < endIndexOfLine && currentStackIndex < stateStack.length) {
                const currentStateItem = stateStack[currentStackIndex];
                const currentHook = currentStateItem.hook;
                const eatingInfo = getEatingInfo();
                if (hooks.some(hook => hook !== currentHook && interruptSibling(hook, eatingInfo))) {
                    break;
                }
                const result = currentHook.eatContinuationText == null
                    ? { status: 'notMatched' }
                    : currentHook.eatContinuationText(eatingInfo, currentStateItem.token, parentToken, api);
                let finished = false, rolledBack = false;
                switch (result.status) {
                    case 'failedAndRollback': {
                        parentToken.children.pop();
                        stateStack.length = currentStackIndex;
                        currentStackIndex -= 1;
                        if (result.lines.length > 0) {
                            const parent = stateStack[currentStackIndex];
                            if (rollback(currentHook, result.lines, parent)) {
                                rolledBack = true;
                                break;
                            }
                        }
                        finished = true;
                        break;
                    }
                    case 'closingAndRollback': {
                        cutStaleBranch(currentStackIndex);
                        if (result.lines.length > 0) {
                            const parent = stateStack[currentStackIndex];
                            if (rollback(currentHook, result.lines, parent)) {
                                rolledBack = true;
                                break;
                            }
                        }
                        finished = true;
                        break;
                    }
                    case 'notMatched': {
                        currentStackIndex -= 1;
                        finished = true;
                        break;
                    }
                    case 'closing': {
                        moveForward(result.nextIndex, true);
                        currentStackIndex -= 1;
                        finished = true;
                        break;
                    }
                    case 'opening': {
                        moveForward(result.nextIndex, true);
                        break;
                    }
                    default:
                        throw new TypeError(`[eatContinuationText] unexpected status (${result.status}).`);
                }
                if (finished)
                    break;
                if (rolledBack)
                    continue;
                currentStackIndex += 1;
                parentToken = currentStateItem.token;
            }
        };
        const step2 = () => {
            if (i >= endIndexOfLine)
                return;
            if (currentStackIndex < stateStack.length) {
                const lastChild = stateStack[stateStack.length - 1];
                if (lastChild.hook.eatLazyContinuationText != null) {
                    const eatingInfo = getEatingInfo();
                    if (eatingInfo.countOfPrecedeSpaces >= 4)
                        return;
                }
            }
            else {
                currentStackIndex = stateStack.length - 1;
            }
            while (i < endIndexOfLine &&
                stateStack[currentStackIndex].hook.isContainingBlock) {
                let hasNewOpener = false;
                const eatingInfo = getEatingInfo();
                for (const hook of hooks) {
                    if (consumeNewOpener(hook, eatingInfo)) {
                        hasNewOpener = true;
                        break;
                    }
                }
                if (!hasNewOpener)
                    break;
            }
        };
        const step3 = () => {
            if (i >= endIndexOfLine || currentStackIndex + 1 >= stateStack.length)
                return false;
            const { hook, token } = stateStack[stateStack.length - 1];
            if (hook.eatLazyContinuationText == null)
                return false;
            const { token: parentToken } = stateStack[stateStack.length - 2];
            const eatingInfo = getEatingInfo();
            const result = hook.eatLazyContinuationText(eatingInfo, token, parentToken, api);
            switch (result.status) {
                case 'notMatched': {
                    return false;
                }
                case 'opening': {
                    currentStackIndex = stateStack.length - 1;
                    moveForward(result.nextIndex, true);
                    currentStackIndex = stateStack.length - 1;
                    return true;
                }
                default:
                    throw new TypeError(`[eatLazyContinuationText] unexpected status (${result.status}).`);
            }
        };
        step1();
        step2();
        if (!step3()) {
            cutStaleBranch(currentStackIndex + 1);
        }
        if (fallbackHook != null && i < endIndexOfLine) {
            const eatingInfo = getEatingInfo();
            consumeNewOpener(fallbackHook, eatingInfo);
        }
        invariant(firstNonWhitespaceIndex >= endIndexOfLine);
    };
    const done = () => {
        while (stateStack.length > 1)
            popup();
        return root;
    };
    return {
        consume,
        done,
        shallowSnapshot: () => [...stateStack],
    };
}

function createSinglePriorityDelimiterProcessor() {
    let htIndex = 0;
    const higherPriorityTokens = [];
    const delimiterStack = [];
    const tokenStack = [];
    const push = (hook, delimiter) => {
        delimiterStack.push({
            hook,
            delimiter,
            inactive: false,
            tokenStackIndex: tokenStack.length,
        });
    };
    const findNearestPairedDelimiter = (hook, closerDelimiter) => {
        if (delimiterStack.length <= 0)
            return null;
        let item = null;
        for (let i = delimiterStack.length - 1; i >= 0; --i) {
            item = delimiterStack[i];
            if (item.inactive || item.hook !== hook)
                continue;
            const openerDelimiter = item.delimiter;
            const result = hook.isDelimiterPair(openerDelimiter, closerDelimiter, higherPriorityTokens);
            if (result.paired)
                return openerDelimiter;
            if (!result.closer)
                return null;
        }
        return null;
    };
    const consume = (hook, closerDelimiter) => {
        if (delimiterStack.length <= 0)
            return closerDelimiter;
        let remainOpenerDelimiter;
        let remainCloserDelimiter = closerDelimiter;
        let internalTokens = [];
        for (let i = delimiterStack.length - 1; i >= 0; --i) {
            const item = delimiterStack[i];
            if (item.hook !== hook || item.inactive)
                continue;
            const openerTokenStackIndex = item.tokenStackIndex;
            if (openerTokenStackIndex < tokenStack.length) {
                internalTokens = tokenStack
                    .splice(openerTokenStackIndex)
                    .concat(internalTokens);
            }
            remainOpenerDelimiter = item.delimiter;
            while (remainOpenerDelimiter != null && remainCloserDelimiter != null) {
                if (remainCloserDelimiter.type === 'opener') {
                    push(hook, remainCloserDelimiter);
                    remainCloserDelimiter = undefined;
                    break;
                }
                if (remainCloserDelimiter.type === 'full')
                    break;
                const prePairResult = hook.isDelimiterPair(remainOpenerDelimiter, remainCloserDelimiter, internalTokens);
                if (!prePairResult.paired) {
                    if (!prePairResult.opener) {
                        const tokens = hook.processSingleDelimiter(remainOpenerDelimiter);
                        if (tokens.length > 0) {
                            for (const token of tokens)
                                token._tokenizer = hook.name;
                            internalTokens.unshift(...tokens);
                        }
                        remainOpenerDelimiter = undefined;
                        item.inactive = true;
                    }
                    if (!prePairResult.closer) {
                        const tokens = hook.processSingleDelimiter(remainCloserDelimiter);
                        if (tokens.length > 0) {
                            for (const token of tokens)
                                token._tokenizer = hook.name;
                            internalTokens.push(...tokens);
                        }
                        remainCloserDelimiter = undefined;
                    }
                    break;
                }
                const result = hook.processDelimiterPair(remainOpenerDelimiter, remainCloserDelimiter, internalTokens);
                {
                    for (const token of result.tokens) {
                        if (token._tokenizer == null)
                            token._tokenizer = hook.name;
                    }
                    internalTokens = result.tokens;
                }
                remainOpenerDelimiter = result.remainOpenerDelimiter;
                remainCloserDelimiter = result.remainCloserDelimiter;
                cutStaleBranch(delimiterStack, i);
                i = Math.min(i, delimiterStack.length);
                if (remainOpenerDelimiter != null)
                    push(hook, remainOpenerDelimiter);
            }
            if (remainCloserDelimiter == null ||
                remainCloserDelimiter.type === 'full') {
                break;
            }
        }
        tokenStack.push(...internalTokens);
        if (remainCloserDelimiter == null)
            return null;
        if (remainCloserDelimiter.type === 'full' ||
            remainCloserDelimiter.type === 'closer') {
            const tokens = hook.processSingleDelimiter(remainCloserDelimiter);
            for (const token of tokens) {
                token._tokenizer = hook.name;
                tokenStack.push(token);
            }
            return null;
        }
        return remainCloserDelimiter;
    };
    const process = (hook, delimiter) => {
        for (; htIndex < higherPriorityTokens.length; ++htIndex) {
            const token = higherPriorityTokens[htIndex];
            if (token.startIndex >= delimiter.endIndex)
                break;
            if (token.startIndex >= delimiter.startIndex)
                continue;
            tokenStack.push(token);
        }
        switch (delimiter.type) {
            case 'opener': {
                push(hook, delimiter);
                break;
            }
            case 'both': {
                const remainDelimiter = consume(hook, delimiter);
                if (remainDelimiter != null)
                    push(hook, remainDelimiter);
                break;
            }
            case 'closer': {
                consume(hook, delimiter);
                break;
            }
            case 'full': {
                const tokens = hook.processSingleDelimiter(delimiter);
                for (const token of tokens) {
                    token._tokenizer = hook.name;
                    tokenStack.push(token);
                }
                break;
            }
            default:
                throw new TypeError(`Unexpected delimiter type(${delimiter.type}) from ${hook.name}.`);
        }
    };
    const done = () => {
        const tokens = [];
        for (const { delimiter, hook } of delimiterStack) {
            const result = hook.processSingleDelimiter(delimiter);
            for (const token of result) {
                token._tokenizer = hook.name;
                tokens.push(token);
            }
        }
        delimiterStack.length = 0;
        if (tokens.length > 0) {
            const nextTokenStack = mergeSortedTokens(tokenStack, tokens);
            tokenStack.length = 0;
            tokenStack.push(...nextTokenStack);
        }
        const result = tokenStack.concat(higherPriorityTokens.slice(htIndex));
        return result;
    };
    const reset = (_higherPriorityTokens) => {
        higherPriorityTokens.length = _higherPriorityTokens.length;
        for (let i = 0; i < _higherPriorityTokens.length; ++i) {
            higherPriorityTokens[i] = _higherPriorityTokens[i];
        }
        htIndex = 0;
        delimiterStack.length = 0;
        tokenStack.length = 0;
    };
    return {
        process,
        done,
        reset,
        findNearestPairedDelimiter,
    };
}
function cutStaleBranch(delimiterStack, startStackIndex) {
    let top = startStackIndex - 1;
    for (; top >= 0; --top) {
        const item = delimiterStack[top];
        if (!item.inactive)
            break;
    }
    delimiterStack.length = top + 1;
}
function mergeSortedTokens(tokens1, tokens2) {
    if (tokens1.length <= 0)
        return tokens2;
    if (tokens2.length <= 0)
        return tokens1;
    const tokens = [];
    let i = 0;
    let j = 0;
    for (; i < tokens1.length && j < tokens2.length;) {
        if (tokens1[i].startIndex < tokens2[j].startIndex) {
            tokens.push(tokens1[i]);
            i += 1;
        }
        else {
            tokens.push(tokens2[j]);
            j += 1;
        }
    }
    for (; i < tokens1.length; ++i)
        tokens.push(tokens1[i]);
    for (; j < tokens2.length; ++j)
        tokens.push(tokens2[j]);
    return tokens;
}

function createPhrasingContentProcessor(hookGroups, hookGroupIndex) {
    const findNearestDelimiters = (startIndex, endIndex, hooks) => {
        let nearestDelimiters = [];
        let nearestDelimiterStartIndex = null;
        const rangeIndex = [startIndex, endIndex];
        for (const hook of hooks) {
            const delimiter = hook.findDelimiter(rangeIndex);
            if (delimiter == null)
                continue;
            if (nearestDelimiterStartIndex != null) {
                if (delimiter.startIndex > nearestDelimiterStartIndex)
                    continue;
                if (delimiter.startIndex < nearestDelimiterStartIndex) {
                    nearestDelimiters = [];
                }
            }
            nearestDelimiterStartIndex = delimiter.startIndex;
            nearestDelimiters.push({ hook, delimiter });
        }
        if (nearestDelimiters.length <= 0)
            return { items: [], nextIndex: -1 };
        const nextIndex = nearestDelimiterStartIndex + 1;
        if (nearestDelimiters.length > 1) {
            let potentialCloserCount = 0;
            for (const item of nearestDelimiters) {
                const dType = item.delimiter.type;
                if (dType === 'full')
                    return { items: [item], nextIndex: item.delimiter.endIndex };
                if (dType === 'both' || dType === 'closer')
                    potentialCloserCount += 1;
            }
            if (potentialCloserCount > 1) {
                let validCloserIndex = -1;
                let validPairedOpenerStartIndex = -1;
                for (let index = 0; index < nearestDelimiters.length; ++index) {
                    const { hook, delimiter } = nearestDelimiters[index];
                    if (delimiter.type === 'both' || delimiter.type === 'closer') {
                        const openerDelimiter = processor.findNearestPairedDelimiter(hook, delimiter);
                        if (openerDelimiter != null) {
                            if (validPairedOpenerStartIndex < openerDelimiter.startIndex) {
                                validCloserIndex = index;
                                validPairedOpenerStartIndex = openerDelimiter.startIndex;
                            }
                        }
                    }
                }
                const items = validCloserIndex > -1
                    ? [nearestDelimiters[validCloserIndex]]
                    : nearestDelimiters.filter(item => item.delimiter.type !== 'closer');
                return { items, nextIndex };
            }
        }
        return { items: nearestDelimiters, nextIndex };
    };
    const processor = createSinglePriorityDelimiterProcessor();
    const process = (higherPriorityTokens, _startIndex, _endIndex, nodePoints) => {
        let tokens = higherPriorityTokens;
        for (let hgIndex = hookGroupIndex; hgIndex < hookGroups.length; ++hgIndex) {
            const hooks = hookGroups[hgIndex];
            for (const hook of hooks)
                hook.reset(nodePoints);
            let tokenIndex = 0;
            processor.reset(tokens);
            for (let i = _startIndex; i < _endIndex;) {
                let endIndex = _endIndex;
                for (; tokenIndex < tokens.length; ++tokenIndex) {
                    const token = tokens[tokenIndex];
                    if (i < token.startIndex) {
                        endIndex = token.startIndex;
                        break;
                    }
                    i = Math.max(i, token.endIndex);
                }
                const { items, nextIndex } = findNearestDelimiters(i, endIndex, hooks);
                if (nextIndex < 0 || items.length <= 0) {
                    i = nextIndex < 0 ? endIndex : nextIndex;
                    continue;
                }
                i += 1;
                for (const { hook, delimiter } of items) {
                    i = Math.max(i, delimiter.endIndex);
                    processor.process(hook, delimiter);
                }
            }
            tokens = processor.done();
        }
        return tokens;
    };
    return { process };
}
function createProcessorHookGroups(matchPhaseHooks, matchInlineApi, resolveFallbackTokens) {
    const hooks = matchPhaseHooks
        .slice()
        .sort((h1, h2) => h2.priority - h1.priority);
    const hookGroups = [];
    for (let i = 0; i < hooks.length;) {
        const hookGroup = [];
        hookGroups.push(hookGroup);
        const processor = createPhrasingContentProcessor(hookGroups, hookGroups.length);
        const api = Object.freeze(Object.assign(Object.assign({}, matchInlineApi), { resolveInternalTokens: (higherPriorityTokens, startIndex, endIndex, nodePoints) => {
                let tokens = processor.process(higherPriorityTokens, startIndex, endIndex, nodePoints);
                tokens = resolveFallbackTokens(tokens, startIndex, endIndex, nodePoints);
                return tokens;
            } }));
        const currentPriority = hooks[i].priority;
        for (; i < hooks.length; ++i) {
            const hook = hooks[i];
            if (hook.priority !== currentPriority)
                break;
            const processorHook = createProcessorHook(hook, api);
            hookGroup.push(processorHook);
        }
    }
    return hookGroups;
}
function createProcessorHook(hook, _matchInlineApi) {
    const api = _matchInlineApi;
    let nodePoints;
    let _findDelimiter;
    const _isDelimiterPair = hook.isDelimiterPair == null ? undefined : hook.isDelimiterPair.bind(hook);
    const _processDelimiterPair = hook.processDelimiterPair == null
        ? undefined
        : hook.processDelimiterPair.bind(hook);
    const _processSingleDelimiter = hook.processSingleDelimiter == null
        ? undefined
        : hook.processSingleDelimiter.bind(hook);
    return {
        name: hook.name,
        priority: hook.priority,
        findDelimiter: rangeIndex => _findDelimiter.next(rangeIndex).value,
        isDelimiterPair: _isDelimiterPair == null
            ? () => ({ paired: true })
            : (openerDelimiter, closerDelimiter, higherPriorityTokens) => _isDelimiterPair(openerDelimiter, closerDelimiter, higherPriorityTokens, nodePoints, api),
        processDelimiterPair: _processDelimiterPair == null
            ? (_1, _2, internalTokens) => ({ tokens: internalTokens })
            : (openerDelimiter, closerDelimiter, internalTokens) => _processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api),
        processSingleDelimiter: _processSingleDelimiter == null
            ? () => []
            : delimiter => _processSingleDelimiter(delimiter, nodePoints, api),
        reset: (_nodePoints) => {
            nodePoints = _nodePoints;
            _findDelimiter = hook.findDelimiter(nodePoints, api);
            _findDelimiter.next();
        },
    };
}

function createProcessor(options) {
    const { tokenizerHookMap, matchBlockHooks, postMatchBlockHooks, matchInlineHooks, phrasingContentTokenizer, blockFallbackTokenizer, inlineFallbackTokenizer, shouldReservePosition, presetDefinitions, presetFootnoteDefinitions, } = options;
    const tree = {
        type: 'root',
        children: [],
    };
    let isIdentifierRegisterOpening = false;
    let definitions;
    let footnoteDefinitions;
    let _blockStartIndex = -1;
    let _blockEndIndex = -1;
    const apis = Object.freeze({
        matchBlockApi: {
            extractPhrasingLines,
            buildPhrasingContentToken,
            rollbackPhrasingLines,
            registerDefinitionIdentifier: (identifier) => {
                if (isIdentifierRegisterOpening)
                    definitions[identifier] = true;
            },
            registerFootnoteDefinitionIdentifier: (identifier) => {
                if (isIdentifierRegisterOpening)
                    footnoteDefinitions[identifier] = true;
            },
        },
        postMatchBlockApi: {
            extractPhrasingLines,
            buildPhrasingContentToken,
            rollbackPhrasingLines,
        },
        parseBlockApi: {
            buildPhrasingContent,
            parsePhrasingContent,
            parseBlockTokens,
        },
        matchInlineApi: {
            hasDefinition: identifier => Boolean(definitions[identifier]),
            hasFootnoteDefinition: identifier => Boolean(footnoteDefinitions[identifier]),
            getBlockStartIndex: () => _blockStartIndex,
            getBlockEndIndex: () => _blockEndIndex,
            resolveFallbackTokens,
        },
        parseInlineApi: {
            hasDefinition: identifier => Boolean(definitions[identifier]),
            hasFootnoteDefinition: identifier => Boolean(footnoteDefinitions[identifier]),
        },
    });
    const matchInlineHookGroups = createProcessorHookGroups(matchInlineHooks, apis.matchInlineApi, resolveFallbackTokens);
    const phrasingContentProcessor = createPhrasingContentProcessor(matchInlineHookGroups, 0);
    return { process };
    function process(lines) {
        definitions = {};
        footnoteDefinitions = {};
        isIdentifierRegisterOpening = true;
        let blockTokenTree = matchBlockTokens(lines);
        blockTokenTree = postMatchBlockTokens(blockTokenTree);
        isIdentifierRegisterOpening = false;
        mergePresetIdentifiers(definitions, presetDefinitions);
        mergePresetIdentifiers(footnoteDefinitions, presetFootnoteDefinitions);
        const blockNodes = parseBlockTokens(blockTokenTree.children);
        tree.children = blockNodes;
        if (shouldReservePosition)
            tree.position = blockTokenTree.position;
        replaceAST(tree, [PhrasingContentType], (node) => {
            const phrasingContent = node;
            return parsePhrasingContent(phrasingContent);
        });
        return tree;
    }
    function extractPhrasingLines(token) {
        const tokenizer = tokenizerHookMap.get(token._tokenizer);
        if (tokenizer == null)
            return null;
        if (tokenizer.extractPhrasingContentLines == null)
            return null;
        return tokenizer.extractPhrasingContentLines(token);
    }
    function buildPhrasingContentToken(lines) {
        return phrasingContentTokenizer.buildBlockToken(lines);
    }
    function buildPhrasingContent(lines) {
        return phrasingContentTokenizer.buildPhrasingContent(lines);
    }
    function rollbackPhrasingLines(lines, originalToken) {
        if (originalToken != null) {
            const tokenizer = tokenizerHookMap.get(originalToken._tokenizer);
            if (tokenizer != null && tokenizer.buildBlockToken != null) {
                const token = tokenizer.buildBlockToken(lines, originalToken);
                if (token != null)
                    return [token];
            }
        }
        const tokenTree = matchBlockTokens([lines]);
        return tokenTree.children;
    }
    function parsePhrasingContent(phrasingContent) {
        const nodePoints = phrasingContent.contents;
        const inlineTokens = matchInlineTokens(nodePoints, 0, nodePoints.length);
        const inlineNodes = parseInline(nodePoints, inlineTokens);
        return inlineNodes;
    }
    function resolveFallbackTokens(tokens, tokenStartIndex, tokenEndIndex, nodePoints) {
        if (inlineFallbackTokenizer == null)
            return tokens;
        let i = tokenStartIndex;
        const results = [];
        for (const token of tokens) {
            if (i < token.startIndex) {
                const fallbackToken = inlineFallbackTokenizer.findAndHandleDelimiter(i, token.startIndex, nodePoints, apis.matchInlineApi);
                fallbackToken._tokenizer = inlineFallbackTokenizer.name;
                results.push(fallbackToken);
            }
            results.push(token);
            i = token.endIndex;
        }
        if (i < tokenEndIndex) {
            const fallbackToken = inlineFallbackTokenizer.findAndHandleDelimiter(i, tokenEndIndex, nodePoints, apis.matchInlineApi);
            fallbackToken._tokenizer = inlineFallbackTokenizer.name;
            results.push(fallbackToken);
        }
        return results;
    }
    function matchBlockTokens(linesIterator) {
        const processor = createBlockContentProcessor(apis.matchBlockApi, matchBlockHooks, blockFallbackTokenizer);
        for (const lines of linesIterator) {
            for (const line of lines) {
                processor.consume(line);
            }
        }
        const root = processor.done();
        return root;
    }
    function postMatchBlockTokens(tokenTree) {
        const handle = (token) => {
            const result = Object.assign({}, token);
            if (token.children != null && token.children.length > 0) {
                let tokens = token.children.map(handle);
                for (const hook of postMatchBlockHooks) {
                    tokens = hook.transformMatch(tokens, apis.postMatchBlockApi);
                }
                result.children = tokens;
            }
            return result;
        };
        const root = handle(tokenTree);
        return root;
    }
    function parseBlockTokens(tokens) {
        const results = [];
        for (const token of tokens) {
            const hook = tokenizerHookMap.get(token._tokenizer);
            invariant(hook != null, `[parseBlock] tokenizer '${token._tokenizer}' not found`);
            const children = token.children != null ? parseBlockTokens(token.children) : undefined;
            const resultOfParse = hook.parseBlock(token, children, apis.parseBlockApi);
            if (resultOfParse == null)
                continue;
            const node = resultOfParse;
            if (shouldReservePosition)
                node.position = token.position;
            results.push(node);
        }
        return results;
    }
    function matchInlineTokens(nodePoints, startIndexOfBlock, endIndexOfBlock) {
        _blockStartIndex = startIndexOfBlock;
        _blockEndIndex = endIndexOfBlock;
        const tokensStack = phrasingContentProcessor.process([], startIndexOfBlock, endIndexOfBlock, nodePoints);
        const tokens = resolveFallbackTokens(tokensStack, startIndexOfBlock, endIndexOfBlock, nodePoints);
        return tokens;
    }
    function parseInline(nodePoints, tokens) {
        const results = [];
        for (const o of tokens) {
            const hook = tokenizerHookMap.get(o._tokenizer);
            invariant(hook != null, `[parseInline] tokenizer '${o._tokenizer}' not existed`);
            const children = o.children != null ? parseInline(nodePoints, o.children) : undefined;
            const node = hook.processToken(o, children, nodePoints, apis.parseInlineApi);
            if (shouldReservePosition) {
                node.position = {
                    start: calcStartYastNodePoint(nodePoints, o.startIndex),
                    end: calcEndYastNodePoint(nodePoints, o.endIndex - 1),
                };
            }
            results.push(node);
        }
        return results;
    }
}

class DefaultYastParser {
    constructor(props) {
        this.blockFallbackTokenizer = null;
        this.inlineFallbackTokenizer = null;
        this.defaultParseOptions = null;
        this.tokenizerHookMap = new Map();
        this.matchBlockHooks = [];
        this.postMatchBlockHooks = [];
        this.matchInlineHooks = [];
        this.phrasingContentTokenizer = new PhrasingContentTokenizer();
        this.setDefaultParseOptions(props.defaultParseOptions);
        this.useTokenizer(new PhrasingContentTokenizer(), undefined, {
            'match-block': false,
            'post-match-block': false,
            'match-inline': false,
        });
        const blockFallbackTokenizer = props.blockFallbackTokenizer != null ? props.blockFallbackTokenizer : null;
        if (blockFallbackTokenizer != null) {
            this.useBlockFallbackTokenizer(blockFallbackTokenizer);
        }
        const inlineFallbackTokenizer = props.inlineFallbackTokenizer != null
            ? props.inlineFallbackTokenizer
            : null;
        if (inlineFallbackTokenizer != null) {
            this.useInlineFallbackTokenizer(inlineFallbackTokenizer);
        }
    }
    useTokenizer(tokenizer, registerBeforeTokenizer, lifecycleHookFlags = {}) {
        const olderTokenizer = this.tokenizerHookMap.get(tokenizer.name);
        if (olderTokenizer != null) {
            throw new TypeError(`[useTokenizer] Name(${tokenizer.name}) has been registered.`);
        }
        const hook = tokenizer;
        this.tokenizerHookMap.set(tokenizer.name, hook);
        const registerIntoHooks = (hooks, flag) => {
            if (lifecycleHookFlags[flag] === false)
                return;
            let index = 0;
            for (; index < hooks.length; ++index) {
                const h = hooks[index];
                if (registerBeforeTokenizer === h.name)
                    break;
                if (hook.priority > h.priority)
                    break;
            }
            if (index < 0 || index >= hooks.length)
                hooks.push(hook);
            else
                hooks.splice(index, 0, hook);
        };
        if (hook.eatOpener != null) {
            registerIntoHooks(this.matchBlockHooks, 'match-block');
        }
        if (hook.transformMatch != null) {
            registerIntoHooks(this.postMatchBlockHooks, 'post-match-block');
        }
        if (hook.findDelimiter != null) {
            registerIntoHooks(this.matchInlineHooks, 'match-inline');
        }
        return this;
    }
    replaceTokenizer(tokenizer, registerBeforeTokenizer, lifecycleHookFlags) {
        this.unmountTokenizer(tokenizer.name);
        this.useTokenizer(tokenizer, registerBeforeTokenizer, lifecycleHookFlags);
        return this;
    }
    unmountTokenizer(tokenizerOrName) {
        const tokenizerName = typeof tokenizerOrName === 'string'
            ? tokenizerOrName
            : tokenizerOrName.name;
        const existed = this.tokenizerHookMap.delete(tokenizerName);
        if (!existed)
            return this;
        if (this.blockFallbackTokenizer == null ||
            this.blockFallbackTokenizer.name === tokenizerName) {
            this.blockFallbackTokenizer = null;
        }
        else if (this.inlineFallbackTokenizer == null ||
            this.inlineFallbackTokenizer.name === tokenizerName) {
            this.inlineFallbackTokenizer = null;
        }
        const unmountFromHooks = (hooks) => {
            const hookIndex = hooks.findIndex(hook => hook.name === tokenizerName);
            if (hookIndex >= 0)
                hooks.splice(hookIndex, 1);
        };
        unmountFromHooks(this.matchBlockHooks);
        unmountFromHooks(this.postMatchBlockHooks);
        unmountFromHooks(this.matchInlineHooks);
        return this;
    }
    useBlockFallbackTokenizer(blockFallbackTokenizer) {
        if (this.blockFallbackTokenizer != null) {
            this.unmountTokenizer(this.blockFallbackTokenizer);
        }
        this.useTokenizer(blockFallbackTokenizer, undefined, {
            'match-block': false,
            'post-match-block': false,
            'match-inline': false,
        });
        this.blockFallbackTokenizer = blockFallbackTokenizer;
        return this;
    }
    useInlineFallbackTokenizer(inlineFallbackTokenizer) {
        if (this.inlineFallbackTokenizer != null) {
            this.unmountTokenizer(this.inlineFallbackTokenizer);
        }
        this.useTokenizer(inlineFallbackTokenizer, undefined, {
            'match-block': false,
            'post-match-block': false,
            'match-inline': false,
        });
        this.inlineFallbackTokenizer = inlineFallbackTokenizer;
        return this;
    }
    setDefaultParseOptions(options = {}) {
        this.defaultParseOptions = Object.assign({ presetDefinitions: [], presetFootnoteDefinitions: [], shouldReservePosition: false }, options);
    }
    parse(contents, options = {}) {
        const { shouldReservePosition, presetDefinitions, presetFootnoteDefinitions, } = Object.assign(Object.assign({}, this.defaultParseOptions), options);
        const nodePointsIterator = createNodePointGenerator(contents);
        const linesIterator = createPhrasingLineGenerator(nodePointsIterator);
        const processor = createProcessor({
            tokenizerHookMap: this.tokenizerHookMap,
            matchBlockHooks: this.matchBlockHooks,
            postMatchBlockHooks: this.postMatchBlockHooks,
            matchInlineHooks: this.matchInlineHooks,
            phrasingContentTokenizer: this.phrasingContentTokenizer,
            blockFallbackTokenizer: this.blockFallbackTokenizer,
            inlineFallbackTokenizer: this.inlineFallbackTokenizer,
            shouldReservePosition,
            presetDefinitions,
            presetFootnoteDefinitions,
        });
        const root = processor.process(linesIterator);
        return root;
    }
}

class FencedBlockTokenizer extends BaseBlockTokenizer {
    constructor(props) {
        var _a;
        super({
            name: props.name,
            priority: (_a = props.priority) !== null && _a !== void 0 ? _a : TokenizerPriority.FENCED_BLOCK,
        });
        this.isContainingBlock = false;
        this.markers = [];
        this.nodeType = props.nodeType;
        this.markers = props.markers;
        this.markersRequired = props.markersRequired;
        this.checkInfoString = props.checkInfoString;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex + this.markersRequired - 1 >= endIndex)
            return null;
        const { nodePoints, startIndex } = line;
        const marker = nodePoints[firstNonWhitespaceIndex].codePoint;
        if (this.markers.indexOf(marker) < 0)
            return null;
        const i = eatOptionalCharacters(nodePoints, firstNonWhitespaceIndex + 1, endIndex, marker);
        const countOfMark = i - firstNonWhitespaceIndex;
        if (countOfMark < this.markersRequired)
            return null;
        const [iLft, iRht] = calcTrimBoundaryOfCodePoints(nodePoints, i, endIndex);
        const infoString = nodePoints.slice(iLft, iRht);
        if (this.checkInfoString != null &&
            !this.checkInfoString(infoString, marker, countOfMark)) {
            return null;
        }
        const nextIndex = endIndex;
        const token = {
            nodeType: this.nodeType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            indent: firstNonWhitespaceIndex - startIndex,
            marker: marker,
            markerCount: countOfMark,
            lines: [],
            infoString,
        };
        return { token, nextIndex };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null)
            return null;
        return {
            token: result.token,
            nextIndex: result.nextIndex,
            remainingSibling: prevSiblingToken,
        };
    }
    eatContinuationText(line, token) {
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces, } = line;
        if (countOfPrecedeSpaces < 4 && firstNonWhitespaceIndex < endIndex) {
            let i = eatOptionalCharacters(nodePoints, firstNonWhitespaceIndex, endIndex, token.marker);
            const markerCount = i - firstNonWhitespaceIndex;
            if (markerCount >= token.markerCount) {
                for (; i < endIndex; ++i) {
                    const c = nodePoints[i].codePoint;
                    if (!isSpaceCharacter(c))
                        break;
                }
                if (i + 1 >= endIndex) {
                    return { status: 'closing', nextIndex: endIndex };
                }
            }
        }
        const firstIndex = Math.min(startIndex + token.indent, firstNonWhitespaceIndex, endIndex - 1);
        token.lines.push({
            nodePoints,
            startIndex: firstIndex,
            endIndex,
            firstNonWhitespaceIndex,
            countOfPrecedeSpaces,
        });
        return { status: 'opening', nextIndex: endIndex };
    }
}

const uniqueName$u = '@yozora/tokenizer-admonition';

class AdmonitionTokenizer extends FencedBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$u,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.FENCED_BLOCK,
            nodeType: AdmonitionType,
            markers: [AsciiCodePoint.COLON],
            markersRequired: 3,
        });
        this.isContainingBlock = true;
    }
    onClose(token, api) {
        const children = api.rollbackPhrasingLines(token.lines);
        token.children = children;
    }
    parseBlock(token, children, api) {
        const infoString = token.infoString;
        let i = 0;
        const keyword = [];
        for (; i < infoString.length; ++i) {
            const p = infoString[i];
            if (isUnicodeWhitespaceCharacter(p.codePoint))
                break;
            keyword.push(p);
        }
        i = eatOptionalWhitespaces(infoString, i, infoString.length);
        const title = (() => {
            if (i >= infoString.length)
                return [];
            const titleLines = [
                {
                    nodePoints: infoString,
                    startIndex: i,
                    endIndex: infoString.length,
                    firstNonWhitespaceIndex: i,
                    countOfPrecedeSpaces: 0,
                },
            ];
            const phrasingContent = api.buildPhrasingContent(titleLines);
            if (phrasingContent == null)
                return [];
            return api.parsePhrasingContent(phrasingContent);
        })();
        const node = {
            type: AdmonitionType,
            keyword: calcEscapedStringFromNodePoints(keyword, 0, keyword.length, true),
            title,
            children: children !== null && children !== void 0 ? children : [],
        };
        return node;
    }
}

const uniqueName$t = '@yozora/tokenizer-autolink';

function eatEmailAddress(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    for (; i < endIndex; i += 1) {
        const c = nodePoints[i].codePoint;
        if (isAsciiLetter(c) || isAsciiDigitCharacter(c))
            continue;
        if (c !== AsciiCodePoint.DOT &&
            c !== AsciiCodePoint.EXCLAMATION_MARK &&
            c !== AsciiCodePoint.NUMBER_SIGN &&
            c !== AsciiCodePoint.DOLLAR_SIGN &&
            c !== AsciiCodePoint.PERCENT_SIGN &&
            c !== AsciiCodePoint.AMPERSAND &&
            c !== AsciiCodePoint.SINGLE_QUOTE &&
            c !== AsciiCodePoint.ASTERISK &&
            c !== AsciiCodePoint.PLUS_SIGN &&
            c !== AsciiCodePoint.SLASH &&
            c !== AsciiCodePoint.EQUALS_SIGN &&
            c !== AsciiCodePoint.QUESTION_MARK &&
            c !== AsciiCodePoint.CARET &&
            c !== AsciiCodePoint.UNDERSCORE &&
            c !== AsciiCodePoint.BACKTICK &&
            c !== AsciiCodePoint.OPEN_BRACE &&
            c !== AsciiCodePoint.VERTICAL_SLASH &&
            c !== AsciiCodePoint.CLOSE_BRACE &&
            c !== AsciiCodePoint.TILDE &&
            c !== AsciiCodePoint.MINUS_SIGN)
            break;
    }
    if (i === startIndex ||
        i + 1 >= endIndex ||
        nodePoints[i].codePoint !== AsciiCodePoint.AT_SIGN ||
        !isAlphanumeric(nodePoints[i + 1].codePoint))
        return { valid: false, nextIndex: i + 1 };
    i = eatAddressPart0(nodePoints, i + 2, endIndex);
    for (; i + 1 < endIndex;) {
        let c = nodePoints[i].codePoint;
        if (c !== AsciiCodePoint.DOT)
            break;
        c = nodePoints[i + 1].codePoint;
        if (!isAsciiLetter(c) && !isAsciiDigitCharacter(c))
            break;
        i = eatAddressPart0(nodePoints, i + 2, endIndex);
    }
    return { valid: true, nextIndex: i };
}
function eatAddressPart0(nodePoints, startIndex, endIndex) {
    let i = startIndex, result = -1;
    for (let _endIndex = Math.min(endIndex, i + 62); i < _endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (isAsciiLetter(c) || isAsciiDigitCharacter(c)) {
            result = i;
            continue;
        }
        if (c !== AsciiCodePoint.MINUS_SIGN)
            break;
    }
    return result >= startIndex ? result + 1 : startIndex;
}

function eatAbsoluteUri(nodePoints, startIndex, endIndex) {
    const schema = eatAutolinkSchema(nodePoints, startIndex, endIndex);
    let { nextIndex } = schema;
    if (!schema.valid ||
        nextIndex >= endIndex ||
        nodePoints[nextIndex].codePoint !== AsciiCodePoint.COLON)
        return { valid: false, nextIndex };
    for (nextIndex += 1; nextIndex < endIndex; ++nextIndex) {
        const c = nodePoints[nextIndex].codePoint;
        if (!isAsciiCharacter(c) ||
            isWhitespaceCharacter(c) ||
            isAsciiControlCharacter(c) ||
            c === AsciiCodePoint.OPEN_ANGLE ||
            c === AsciiCodePoint.CLOSE_ANGLE)
            break;
    }
    return { valid: true, nextIndex };
}
function eatAutolinkSchema(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    const c = nodePoints[i].codePoint;
    if (!isAsciiLetter(c))
        return { valid: false, nextIndex: i + 1 };
    for (i += 1; i < endIndex; ++i) {
        const d = nodePoints[i].codePoint;
        if (isAlphanumeric(d) ||
            d === AsciiCodePoint.PLUS_SIGN ||
            d === AsciiCodePoint.DOT ||
            d === AsciiCodePoint.MINUS_SIGN)
            continue;
        break;
    }
    const count = i - startIndex;
    if (count < 2 || count > 32)
        return { valid: false, nextIndex: i + 1 };
    return { valid: true, nextIndex: i };
}

const helpers$1 = [
    { contentType: 'uri', eat: eatAbsoluteUri },
    { contentType: 'email', eat: eatEmailAddress },
];
class AutolinkTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$t,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            if (nodePoints[i].codePoint !== AsciiCodePoint.OPEN_ANGLE)
                continue;
            let nextIndex = endIndex;
            let contentType = null;
            for (const helper of helpers$1) {
                const eatResult = helper.eat(nodePoints, i + 1, endIndex);
                nextIndex = Math.min(nextIndex, eatResult.nextIndex);
                if (eatResult.valid) {
                    contentType = helper.contentType;
                    nextIndex = eatResult.nextIndex;
                    break;
                }
            }
            if (contentType == null) {
                i = Math.max(i, nextIndex - 1);
                continue;
            }
            if (nextIndex < endIndex &&
                nodePoints[nextIndex].codePoint === AsciiCodePoint.CLOSE_ANGLE) {
                return {
                    type: 'full',
                    startIndex: i,
                    endIndex: nextIndex + 1,
                    contentType,
                };
            }
            i = nextIndex - 1;
        }
        return null;
    }
    processSingleDelimiter(delimiter, nodePoints, api) {
        const token = {
            nodeType: LinkType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
            contentType: delimiter.contentType,
            children: api.resolveFallbackTokens([], delimiter.startIndex + 1, delimiter.endIndex - 1, nodePoints),
        };
        return [token];
    }
    processToken(token, children, nodePoints) {
        let url = calcStringFromNodePoints(nodePoints, token.startIndex + 1, token.endIndex - 1);
        if (token.contentType === 'email') {
            url = 'mailto:' + url;
        }
        const encodedUrl = encodeLinkDestination(url);
        const result = {
            type: LinkType,
            url: encodedUrl,
            children: children !== null && children !== void 0 ? children : [],
        };
        return result;
    }
}

const uniqueName$s = '@yozora/tokenizer-autolink-extension';

function eatExtendEmailAddress(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i >= endIndex || !isAlphanumeric(nodePoints[i].codePoint)) {
        return { valid: false, nextIndex: i + 1 };
    }
    for (i += 1; i < endIndex; i += 1) {
        const c = nodePoints[i].codePoint;
        if (isAlphanumeric(c) ||
            c === AsciiCodePoint.DOT ||
            c === AsciiCodePoint.MINUS_SIGN ||
            c === AsciiCodePoint.UNDERSCORE ||
            c === AsciiCodePoint.PLUS_SIGN)
            continue;
        break;
    }
    if (i === startIndex ||
        i + 2 >= endIndex ||
        nodePoints[i].codePoint !== AsciiCodePoint.AT_SIGN ||
        !isAlphanumeric(nodePoints[i + 1].codePoint))
        return { valid: false, nextIndex: i + 1 };
    let countOfPeriod = 0;
    for (i += 2; i < endIndex; i += 1) {
        const c = nodePoints[i].codePoint;
        if (c === AsciiCodePoint.DOT) {
            countOfPeriod += 1;
            continue;
        }
        if (isAlphanumeric(c) ||
            c === AsciiCodePoint.MINUS_SIGN ||
            c === AsciiCodePoint.UNDERSCORE)
            continue;
        break;
    }
    const lastCharacter = nodePoints[i - 1].codePoint;
    if (lastCharacter === AsciiCodePoint.MINUS_SIGN ||
        lastCharacter === AsciiCodePoint.UNDERSCORE)
        return { valid: false, nextIndex: i };
    if (lastCharacter === AsciiCodePoint.DOT) {
        i -= 1;
        countOfPeriod -= 1;
    }
    if (countOfPeriod <= 0)
        return { valid: false, nextIndex: i };
    return { valid: true, nextIndex: i };
}

function eatExtendedUrl(nodePoints, startIndex, endIndex) {
    const schema = eatAutolinkSchema(nodePoints, startIndex, endIndex);
    const { nextIndex } = schema;
    if (!schema.valid ||
        nextIndex + 3 >= endIndex ||
        nodePoints[nextIndex].codePoint !== AsciiCodePoint.COLON ||
        nodePoints[nextIndex + 1].codePoint !== AsciiCodePoint.SLASH ||
        nodePoints[nextIndex + 2].codePoint !== AsciiCodePoint.SLASH)
        return { valid: false, nextIndex: nextIndex + 1 };
    const result = eatValidDomain(nodePoints, nextIndex + 3, endIndex);
    result.nextIndex = eatOptionalDomainFollows(nodePoints, result.nextIndex, endIndex);
    return result;
}
function eatWWWDomain(nodePoints, startIndex, endIndex) {
    const segment = eatDomainSegment(nodePoints, startIndex, endIndex);
    const nextIndex = segment.nextIndex;
    if (!segment.valid ||
        nextIndex >= endIndex ||
        nodePoints[nextIndex].codePoint !== AsciiCodePoint.DOT ||
        nextIndex - startIndex !== 3)
        return { valid: false, nextIndex };
    for (let i = startIndex; i < nextIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (c !== AsciiCodePoint.LOWERCASE_W && c !== AsciiCodePoint.UPPERCASE_W)
            return { valid: false, nextIndex };
    }
    const result = eatValidDomain(nodePoints, nextIndex + 1, endIndex);
    result.nextIndex = eatOptionalDomainFollows(nodePoints, result.nextIndex, endIndex);
    return result;
}
function eatOptionalDomainFollows(nodePoints, startIndex, endIndex) {
    let nextIndex = startIndex;
    for (; nextIndex < endIndex; ++nextIndex) {
        const c = nodePoints[nextIndex].codePoint;
        if (isWhitespaceCharacter(c) || c === AsciiCodePoint.OPEN_ANGLE)
            break;
    }
    for (nextIndex -= 1; nextIndex >= startIndex; nextIndex -= 1) {
        const c = nodePoints[nextIndex].codePoint;
        if (isPunctuationCharacter(c) ||
            c === AsciiCodePoint.QUESTION_MARK ||
            c === AsciiCodePoint.EXCLAMATION_MARK ||
            c === AsciiCodePoint.DOT ||
            c === AsciiCodePoint.COMMA ||
            c === AsciiCodePoint.COLON ||
            c === AsciiCodePoint.ASTERISK ||
            c === AsciiCodePoint.UNDERSCORE ||
            c === AsciiCodePoint.TILDE)
            continue;
        break;
    }
    if (nextIndex >= startIndex &&
        nextIndex + 1 < endIndex &&
        nodePoints[nextIndex + 1].codePoint === AsciiCodePoint.CLOSE_PARENTHESIS) {
        let countOfOpenParenthesis = 0;
        for (let i = startIndex; i < nextIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.OPEN_PARENTHESIS:
                    countOfOpenParenthesis += 1;
                    break;
                case AsciiCodePoint.CLOSE_PARENTHESIS:
                    countOfOpenParenthesis -= 1;
                    break;
            }
        }
        if (countOfOpenParenthesis > 0) {
            nextIndex += 2;
            countOfOpenParenthesis -= 1;
            for (; nextIndex < endIndex && countOfOpenParenthesis > 0;) {
                const c = nodePoints[nextIndex].codePoint;
                if (c !== AsciiCodePoint.CLOSE_PARENTHESIS)
                    break;
                countOfOpenParenthesis -= 1;
                nextIndex += 1;
            }
            nextIndex -= 1;
        }
    }
    if (nextIndex + 1 < endIndex &&
        nodePoints[nextIndex + 1].codePoint === AsciiCodePoint.SEMICOLON) {
        let i = nextIndex;
        for (; i >= startIndex; --i) {
            const c = nodePoints[i].codePoint;
            if (!isAlphanumeric(c))
                break;
        }
        if (i >= startIndex && nodePoints[i].codePoint === AsciiCodePoint.AMPERSAND)
            nextIndex = i - 1;
    }
    return nextIndex + 1;
}
function eatValidDomain(nodePoints, startIndex, endIndex) {
    const segment = eatDomainSegment(nodePoints, startIndex, endIndex);
    if (!segment.valid || segment.nextIndex >= endIndex) {
        return { valid: false, nextIndex: segment.nextIndex };
    }
    let nextIndex = segment.nextIndex, countOfPeriod = 0;
    let countOfUnderscoreOfLastTwoSegment = segment.hasUnderscore ? 2 : 0;
    for (; nextIndex < endIndex;) {
        if (nodePoints[nextIndex].codePoint !== AsciiCodePoint.DOT)
            break;
        const segment = eatDomainSegment(nodePoints, nextIndex + 1, endIndex);
        if (!segment.valid)
            break;
        nextIndex = segment.nextIndex;
        countOfPeriod += 1;
        countOfUnderscoreOfLastTwoSegment >>>= 1;
        countOfUnderscoreOfLastTwoSegment |= segment.hasUnderscore ? 2 : 0;
    }
    if (countOfPeriod <= 0 && countOfUnderscoreOfLastTwoSegment === 0) {
        return { valid: false, nextIndex };
    }
    return { valid: true, nextIndex };
}
function eatDomainSegment(nodePoints, startIndex, endIndex) {
    let i = startIndex, hasUnderscore = false;
    for (; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (c === AsciiCodePoint.UNDERSCORE) {
            hasUnderscore = true;
            continue;
        }
        if (!isAlphanumeric(c) && c !== AsciiCodePoint.MINUS_SIGN)
            break;
    }
    if (i > startIndex)
        return { valid: true, nextIndex: i, hasUnderscore };
    return { valid: false, nextIndex: i, hasUnderscore };
}

const helpers = [
    { contentType: 'uri', eat: eatExtendedUrl },
    { contentType: 'uri-www', eat: eatWWWDomain },
    { contentType: 'email', eat: eatExtendEmailAddress },
];
class AutolinkExtensionTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$s,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints, api) {
        const blockStartIndex = api.getBlockStartIndex();
        for (let i = startIndex; i < endIndex; ++i) {
            {
                let j = i;
                let flag = false;
                for (; j < endIndex; ++j) {
                    const c = nodePoints[j].codePoint;
                    if (isWhitespaceCharacter(c) ||
                        c === AsciiCodePoint.ASTERISK ||
                        c === AsciiCodePoint.UNDERSCORE ||
                        c === AsciiCodePoint.TILDE ||
                        c === AsciiCodePoint.OPEN_PARENTHESIS) {
                        flag = true;
                        continue;
                    }
                    if (flag || j === blockStartIndex)
                        break;
                    flag = false;
                }
                if (j >= endIndex)
                    break;
                i = j;
            }
            let nextIndex = endIndex;
            let contentType = null;
            for (const helper of helpers) {
                const eatResult = helper.eat(nodePoints, i, endIndex);
                nextIndex = Math.min(nextIndex, eatResult.nextIndex);
                if (eatResult.valid) {
                    contentType = helper.contentType;
                    nextIndex = eatResult.nextIndex;
                    break;
                }
            }
            if (contentType == null) {
                i = Math.max(i, nextIndex - 1);
                continue;
            }
            if (nextIndex <= endIndex) {
                return {
                    type: 'full',
                    startIndex: i,
                    endIndex: nextIndex,
                    contentType,
                };
            }
            i = nextIndex - 1;
        }
        return null;
    }
    processSingleDelimiter(delimiter, nodePoints, api) {
        const token = {
            nodeType: LinkType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
            contentType: delimiter.contentType,
            children: api.resolveFallbackTokens([], delimiter.startIndex, delimiter.endIndex, nodePoints),
        };
        return [token];
    }
    processToken(token, children, nodePoints) {
        let url = calcStringFromNodePoints(nodePoints, token.startIndex, token.endIndex);
        switch (token.contentType) {
            case 'email':
                url = 'mailto:' + url;
                break;
            case 'uri-www':
                url = 'http://' + url;
                break;
        }
        const result = {
            type: LinkType,
            url,
            children: children !== null && children !== void 0 ? children : [],
        };
        return result;
    }
}

const uniqueName$r = '@yozora/tokenizer-blockquote';

class BlockquoteTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$r,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_BLOCK,
        });
        this.isContainingBlock = true;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex ||
            nodePoints[firstNonWhitespaceIndex].codePoint !==
                AsciiCodePoint.CLOSE_ANGLE)
            return null;
        let nextIndex = firstNonWhitespaceIndex + 1;
        if (nextIndex < endIndex &&
            isSpaceCharacter(nodePoints[nextIndex].codePoint)) {
            nextIndex += 1;
            if (nextIndex < endIndex &&
                nodePoints[nextIndex].codePoint === VirtualCodePoint.SPACE) {
                nextIndex += 1;
            }
        }
        const token = {
            nodeType: BlockquoteType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            children: [],
        };
        return { token, nextIndex };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null)
            return null;
        return {
            token: result.token,
            nextIndex: result.nextIndex,
            remainingSibling: prevSiblingToken,
        };
    }
    eatContinuationText(line, token, parentToken) {
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces, } = line;
        if (countOfPrecedeSpaces >= 4 ||
            firstNonWhitespaceIndex >= endIndex ||
            nodePoints[firstNonWhitespaceIndex].codePoint !==
                AsciiCodePoint.CLOSE_ANGLE) {
            if (parentToken.nodeType === BlockquoteType) {
                return { status: 'opening', nextIndex: startIndex };
            }
            return { status: 'notMatched' };
        }
        const nextIndex = firstNonWhitespaceIndex + 1 < endIndex &&
            isSpaceCharacter(nodePoints[firstNonWhitespaceIndex + 1].codePoint)
            ? firstNonWhitespaceIndex + 2
            : firstNonWhitespaceIndex + 1;
        return { status: 'opening', nextIndex };
    }
    parseBlock(token, children) {
        const node = {
            type: BlockquoteType,
            children: (children || []),
        };
        return node;
    }
}

const uniqueName$q = '@yozora/tokenizer-break';
var BreakTokenMarkerType;
(function (BreakTokenMarkerType) {
    BreakTokenMarkerType["BACKSLASH"] = "backslash";
    BreakTokenMarkerType["MORE_THAN_TWO_SPACES"] = "more-than-two-spaces";
})(BreakTokenMarkerType || (BreakTokenMarkerType = {}));

class BreakTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$q,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.SOFT_INLINE,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex + 1; i < endIndex; ++i) {
            if (nodePoints[i].codePoint !== VirtualCodePoint.LINE_END)
                continue;
            const c = nodePoints[i - 1].codePoint;
            let _start = null;
            let markerType = null;
            switch (c) {
                case AsciiCodePoint.BACKSLASH: {
                    let x = i - 2;
                    for (; x >= startIndex; x -= 1) {
                        if (nodePoints[x].codePoint !== AsciiCodePoint.BACKSLASH)
                            break;
                    }
                    if (((i - x) & 1) === 0) {
                        _start = i - 1;
                        markerType = BreakTokenMarkerType.BACKSLASH;
                    }
                    break;
                }
                case AsciiCodePoint.SPACE: {
                    let x = i - 2;
                    for (; x >= startIndex; x -= 1) {
                        if (nodePoints[x].codePoint !== AsciiCodePoint.SPACE)
                            break;
                    }
                    if (i - x > 2) {
                        _start = x + 1;
                        markerType = BreakTokenMarkerType.MORE_THAN_TWO_SPACES;
                    }
                    break;
                }
            }
            if (_start == null || markerType == null)
                continue;
            return {
                type: 'full',
                markerType,
                startIndex: _start,
                endIndex: i,
            };
        }
        return null;
    }
    processSingleDelimiter(delimiter) {
        const token = {
            nodeType: BreakType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
        };
        return [token];
    }
    processToken() {
        const result = { type: BreakType };
        return result;
    }
}

const uniqueName$p = '@yozora/tokenizer-definition';

function eatAndCollectLinkDestination(nodePoints, startIndex, endIndex, token) {
    let i = startIndex;
    if (token == null) {
        token = {
            saturated: false,
            nodePoints: [],
            hasOpenAngleBracket: false,
            openParensCount: 0,
        };
    }
    const firstNonWhitespaceIndex = eatOptionalWhitespaces(nodePoints, i, endIndex);
    if (firstNonWhitespaceIndex >= endIndex)
        return { nextIndex: -1, token };
    if (token.nodePoints.length <= 0) {
        i = firstNonWhitespaceIndex;
        const p = nodePoints[i];
        if (p.codePoint === AsciiCodePoint.OPEN_ANGLE) {
            i += 1;
            token.hasOpenAngleBracket = true;
            token.nodePoints.push(p);
        }
    }
    if (token.hasOpenAngleBracket) {
        for (; i < endIndex; ++i) {
            const p = nodePoints[i];
            switch (p.codePoint) {
                case AsciiCodePoint.BACKSLASH:
                    if (i + 1 < endIndex) {
                        token.nodePoints.push(p);
                        token.nodePoints.push(nodePoints[i + 1]);
                    }
                    i += 1;
                    break;
                case AsciiCodePoint.OPEN_ANGLE:
                case VirtualCodePoint.LINE_END:
                    return { nextIndex: -1, token };
                case AsciiCodePoint.CLOSE_ANGLE:
                    token.saturated = true;
                    token.nodePoints.push(p);
                    return { nextIndex: i + 1, token };
                default:
                    token.nodePoints.push(p);
            }
        }
        return { nextIndex: i, token };
    }
    for (; i < endIndex; ++i) {
        const p = nodePoints[i];
        switch (p.codePoint) {
            case AsciiCodePoint.BACKSLASH:
                if (i + 1 < endIndex) {
                    token.nodePoints.push(p);
                    token.nodePoints.push(nodePoints[i + 1]);
                }
                i += 1;
                break;
            case AsciiCodePoint.OPEN_PARENTHESIS:
                token.openParensCount += 1;
                token.nodePoints.push(p);
                break;
            case AsciiCodePoint.CLOSE_PARENTHESIS:
                token.openParensCount -= 1;
                token.nodePoints.push(p);
                if (token.openParensCount < 0) {
                    return { nextIndex: i, token };
                }
                break;
            default:
                if (isWhitespaceCharacter(p.codePoint) ||
                    isAsciiControlCharacter(p.codePoint)) {
                    token.saturated = true;
                    return { nextIndex: i, token };
                }
                token.nodePoints.push(p);
                break;
        }
    }
    token.saturated = true;
    return { nextIndex: i, token };
}

function eatAndCollectLinkLabel(nodePoints, startIndex, endIndex, token) {
    let i = startIndex;
    if (token == null) {
        token = {
            saturated: false,
            nodePoints: [],
            hasNonWhitespaceCharacter: false,
        };
    }
    const firstNonWhitespaceIndex = eatOptionalWhitespaces(nodePoints, i, endIndex);
    if (firstNonWhitespaceIndex >= endIndex)
        return { nextIndex: -1, token };
    if (token.nodePoints.length <= 0) {
        i = firstNonWhitespaceIndex;
        const p = nodePoints[i];
        if (p.codePoint !== AsciiCodePoint.OPEN_BRACKET) {
            return { nextIndex: -1, token };
        }
        i += 1;
        token.nodePoints.push(p);
    }
    for (; i < endIndex; ++i) {
        const p = nodePoints[i];
        switch (p.codePoint) {
            case AsciiCodePoint.BACKSLASH:
                token.hasNonWhitespaceCharacter = true;
                if (i + 1 < endIndex) {
                    token.nodePoints.push(p);
                    token.nodePoints.push(nodePoints[i + 1]);
                }
                i += 1;
                break;
            case AsciiCodePoint.OPEN_BRACKET:
                return { nextIndex: -1, token };
            case AsciiCodePoint.CLOSE_BRACKET:
                token.nodePoints.push(p);
                if (token.hasNonWhitespaceCharacter) {
                    token.saturated = true;
                    return { nextIndex: i + 1, token };
                }
                return { nextIndex: -1, token };
            default:
                if (!isWhitespaceCharacter(p.codePoint)) {
                    token.hasNonWhitespaceCharacter = true;
                }
                token.nodePoints.push(p);
        }
    }
    return { nextIndex: 1, token };
}

function eatAndCollectLinkTitle(nodePoints, startIndex, endIndex, token) {
    let i = startIndex;
    if (token == null) {
        token = {
            saturated: false,
            nodePoints: [],
            wrapSymbol: null,
        };
    }
    const firstNonWhitespaceIndex = eatOptionalWhitespaces(nodePoints, i, endIndex);
    if (firstNonWhitespaceIndex >= endIndex)
        return { nextIndex: -1, token };
    if (token.nodePoints.length <= 0) {
        i = firstNonWhitespaceIndex;
        const p = nodePoints[i];
        switch (p.codePoint) {
            case AsciiCodePoint.DOUBLE_QUOTE:
            case AsciiCodePoint.SINGLE_QUOTE:
            case AsciiCodePoint.OPEN_PARENTHESIS:
                token.wrapSymbol = p.codePoint;
                token.nodePoints.push(p);
                i += 1;
                break;
            default:
                return { nextIndex: -1, token };
        }
    }
    if (token.wrapSymbol == null)
        return { nextIndex: -1, token };
    switch (token.wrapSymbol) {
        case AsciiCodePoint.DOUBLE_QUOTE:
        case AsciiCodePoint.SINGLE_QUOTE: {
            for (; i < endIndex; ++i) {
                const p = nodePoints[i];
                switch (p.codePoint) {
                    case AsciiCodePoint.BACKSLASH:
                        if (i + 1 < endIndex) {
                            token.nodePoints.push(p);
                            token.nodePoints.push(nodePoints[i + 1]);
                        }
                        i += 1;
                        break;
                    case token.wrapSymbol:
                        token.saturated = true;
                        token.nodePoints.push(p);
                        return { nextIndex: i + 1, token };
                    default:
                        token.nodePoints.push(p);
                }
            }
            break;
        }
        case AsciiCodePoint.OPEN_PARENTHESIS: {
            for (; i < endIndex; ++i) {
                const p = nodePoints[i];
                switch (p.codePoint) {
                    case AsciiCodePoint.BACKSLASH:
                        if (i + 1 < endIndex) {
                            token.nodePoints.push(p);
                            token.nodePoints.push(nodePoints[i + 1]);
                        }
                        i += 1;
                        break;
                    case AsciiCodePoint.OPEN_PARENTHESIS:
                        return { nextIndex: -1, token };
                    case AsciiCodePoint.CLOSE_PARENTHESIS:
                        if (i + 1 >= endIndex ||
                            nodePoints[i + 1].codePoint === VirtualCodePoint.LINE_END) {
                            token.nodePoints.push(p);
                            token.saturated = true;
                            break;
                        }
                        return { nextIndex: -1, token };
                    default:
                        token.nodePoints.push(p);
                }
            }
            break;
        }
    }
    return { nextIndex: endIndex, token };
}

class DefinitionTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$p,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex)
            return null;
        let i = firstNonWhitespaceIndex;
        const linkLabelCollectResult = eatAndCollectLinkLabel(nodePoints, i, endIndex, null);
        if (linkLabelCollectResult.nextIndex < 0)
            return null;
        const lineNo = nodePoints[startIndex].line;
        const createInitState = () => {
            const token = {
                nodeType: DefinitionType,
                position: {
                    start: calcStartYastNodePoint(nodePoints, startIndex),
                    end: calcEndYastNodePoint(nodePoints, endIndex - 1),
                },
                label: linkLabelCollectResult.token,
                destination: null,
                title: null,
                lineNoOfLabel: lineNo,
                lineNoOfDestination: -1,
                lineNoOfTitle: -1,
                lines: [line],
            };
            return token;
        };
        if (!linkLabelCollectResult.token.saturated) {
            const token = createInitState();
            return { token, nextIndex: endIndex };
        }
        const labelEndIndex = linkLabelCollectResult.nextIndex;
        if (labelEndIndex < 0 ||
            labelEndIndex + 1 >= endIndex ||
            nodePoints[labelEndIndex].codePoint !== AsciiCodePoint.COLON)
            return null;
        i = eatOptionalWhitespaces(nodePoints, labelEndIndex + 1, endIndex);
        if (i >= endIndex) {
            const token = createInitState();
            return { token, nextIndex: endIndex };
        }
        const linkDestinationCollectResult = eatAndCollectLinkDestination(nodePoints, i, endIndex, null);
        if (linkDestinationCollectResult.nextIndex < 0)
            return null;
        if (!linkDestinationCollectResult.token.saturated &&
            linkDestinationCollectResult.nextIndex !== endIndex)
            return null;
        const destinationEndIndex = linkDestinationCollectResult.nextIndex;
        i = eatOptionalWhitespaces(nodePoints, destinationEndIndex, endIndex);
        if (i >= endIndex) {
            const token = createInitState();
            token.destination = linkDestinationCollectResult.token;
            token.lineNoOfDestination = lineNo;
            return { token, nextIndex: endIndex };
        }
        if (i === destinationEndIndex)
            return null;
        const linkTitleCollectResult = eatAndCollectLinkTitle(nodePoints, i, endIndex, null);
        if (linkTitleCollectResult.nextIndex >= 0) {
            i = linkTitleCollectResult.nextIndex;
        }
        if (i < endIndex) {
            const k = eatOptionalWhitespaces(nodePoints, i, endIndex);
            if (k < endIndex)
                return null;
        }
        const token = createInitState();
        token.destination = linkDestinationCollectResult.token;
        token.title = linkTitleCollectResult.token;
        token.lineNoOfDestination = lineNo;
        token.lineNoOfTitle = lineNo;
        return { token, nextIndex: endIndex };
    }
    eatContinuationText(line, token) {
        var _a;
        if (token.title != null && token.title.saturated)
            return { status: 'notMatched' };
        const { nodePoints, startIndex, firstNonWhitespaceIndex, endIndex } = line;
        const lineNo = nodePoints[startIndex].line;
        let i = firstNonWhitespaceIndex;
        if (!token.label.saturated) {
            const linkLabelCollectResult = eatAndCollectLinkLabel(nodePoints, i, endIndex, token.label);
            if (linkLabelCollectResult.nextIndex < 0) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            const labelEndIndex = linkLabelCollectResult.nextIndex;
            if (!linkLabelCollectResult.token.saturated) {
                token.lines.push(line);
                return { status: 'opening', nextIndex: endIndex };
            }
            if (labelEndIndex + 1 >= endIndex ||
                nodePoints[labelEndIndex].codePoint !== AsciiCodePoint.COLON) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            i = labelEndIndex + 1;
        }
        if (token.destination == null) {
            i = eatOptionalWhitespaces(nodePoints, i, endIndex);
            if (i >= endIndex) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            const linkDestinationCollectResult = eatAndCollectLinkDestination(nodePoints, i, endIndex, null);
            if (linkDestinationCollectResult.nextIndex < 0 ||
                !linkDestinationCollectResult.token.saturated) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            const destinationEndIndex = linkDestinationCollectResult.nextIndex;
            i = eatOptionalWhitespaces(nodePoints, destinationEndIndex, endIndex);
            if (i >= endIndex) {
                token.destination = linkDestinationCollectResult.token;
                token.lines.push(line);
                return { status: 'opening', nextIndex: endIndex };
            }
            token.lineNoOfDestination = lineNo;
            token.lineNoOfTitle = lineNo;
        }
        if (token.lineNoOfTitle < 0) {
            token.lineNoOfTitle = lineNo;
        }
        const linkTitleCollectResult = eatAndCollectLinkTitle(nodePoints, i, endIndex, token.title);
        token.title = linkTitleCollectResult.token;
        if (linkTitleCollectResult.nextIndex < 0 ||
            linkTitleCollectResult.token.nodePoints.length <= 0 ||
            (linkTitleCollectResult.token.saturated &&
                eatOptionalWhitespaces(nodePoints, linkTitleCollectResult.nextIndex, endIndex) < endIndex)) {
            if (token.lineNoOfDestination === token.lineNoOfTitle) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            const lastLine = token.lines[token.lines.length - 1];
            token.title = null;
            token.position.end = calcEndYastNodePoint(lastLine.nodePoints, lastLine.endIndex - 1);
            return {
                status: 'closingAndRollback',
                lines: token.lines.slice(token.lineNoOfTitle - 1),
            };
        }
        token.lines.push(line);
        const saturated = (_a = token.title) === null || _a === void 0 ? void 0 : _a.saturated;
        return { status: saturated ? 'closing' : 'opening', nextIndex: endIndex };
    }
    onClose(token, api) {
        let result;
        if (token.title == null || !token.title.saturated) {
            if (!token.label.saturated) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            if (token.destination == null || !token.destination.saturated) {
                return { status: 'failedAndRollback', lines: token.lines };
            }
            if (token.title != null && !token.title.saturated) {
                if (token.lineNoOfDestination === token.lineNoOfTitle) {
                    return { status: 'failedAndRollback', lines: token.lines };
                }
                const lines = token.lines.splice(token.lineNoOfTitle - 1);
                const lastLine = token.lines[token.lines.length - 1];
                token.title = null;
                token.position.end = calcEndYastNodePoint(lastLine.nodePoints, lastLine.endIndex - 1);
                result = { status: 'closingAndRollback', lines };
            }
        }
        const labelPoints = token.label.nodePoints;
        const label = calcStringFromNodePoints(labelPoints, 1, labelPoints.length - 1);
        const identifier = resolveLabelToIdentifier(label);
        api.registerDefinitionIdentifier(identifier);
        token._label = label;
        token._identifier = identifier;
        return result;
    }
    parseBlock(token) {
        const label = token._label;
        const identifier = token._identifier;
        const destinationPoints = token.destination.nodePoints;
        const destination = destinationPoints[0].codePoint === AsciiCodePoint.OPEN_ANGLE
            ? calcEscapedStringFromNodePoints(destinationPoints, 1, destinationPoints.length - 1, true)
            : calcEscapedStringFromNodePoints(destinationPoints, 0, destinationPoints.length, true);
        const url = encodeLinkDestination(destination);
        const title = token.title == null
            ? undefined
            : calcEscapedStringFromNodePoints(token.title.nodePoints, 1, token.title.nodePoints.length - 1);
        const node = {
            type: DefinitionType,
            identifier,
            label,
            url,
            title,
        };
        return node;
    }
}

const uniqueName$o = '@yozora/tokenizer-delete';

class DeleteTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$o,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_INLINE,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.TILDE: {
                    const _startIndex = i;
                    i = eatOptionalCharacters(nodePoints, i + 1, endIndex, c) - 1;
                    if (i - _startIndex !== 1)
                        break;
                    let delimiterType = 'both';
                    const preceding = _startIndex === startIndex ? null : nodePoints[_startIndex - 1];
                    if (preceding != null && isWhitespaceCharacter(preceding.codePoint)) {
                        delimiterType = 'opener';
                    }
                    const following = i + 1 === endIndex ? null : nodePoints[i + 1];
                    if (following != null && isWhitespaceCharacter(following.codePoint)) {
                        if (delimiterType !== 'both')
                            break;
                        delimiterType = 'closer';
                    }
                    return {
                        type: delimiterType,
                        startIndex: _startIndex,
                        endIndex: i + 1,
                    };
                }
            }
        }
        return null;
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        internalTokens = api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints);
        const token = {
            nodeType: DeleteType,
            startIndex: openerDelimiter.startIndex,
            endIndex: closerDelimiter.endIndex,
            children: internalTokens,
        };
        return { tokens: [token] };
    }
    processToken(token, children) {
        const result = {
            type: DeleteType,
            children: children !== null && children !== void 0 ? children : [],
        };
        return result;
    }
}

const uniqueName$n = '@yozora/tokenizer-ecma-import';

const namedImportItemRegex = /^(\w+)(?:\s+as\s+(\w+))?$/;
const namedImportRegex = /\{\s*((?:[\w]+(?:\s+as\s+[\w]+)?\s*,\s*)*[\w]+(?:\s+as\s+[\w]+)?)\s*\}\s*/;
const regex1 = /^import\s+(['"])([^'"]+)\1$/;
const regex2 = /^import\s+([\w]+)\s+from\s+(['"])([^'"]+)\2$/;
const regex3 = new RegExp(/^import\s+(?:([\w]+)\s*,\s*)?/.source +
    namedImportRegex.source +
    /from\s+(['"])([^'"]+)\3$/.source);
function resolveNameImports(text) {
    const items = text.split(/\s*,\s*/g).filter(item => item.length > 0);
    const result = [];
    for (const item of items) {
        const [, src, alias] = namedImportItemRegex.exec(item);
        result.push({ src, alias: alias == null ? null : alias });
    }
    return result;
}

class EcmaImportTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$n,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex + 8 >= endIndex)
            return null;
        const i = firstNonWhitespaceIndex;
        if (nodePoints[i].codePoint !== AsciiCodePoint.LOWERCASE_I)
            return null;
        if (nodePoints[i + 1].codePoint !== AsciiCodePoint.LOWERCASE_M)
            return null;
        if (nodePoints[i + 2].codePoint !== AsciiCodePoint.LOWERCASE_P)
            return null;
        if (nodePoints[i + 3].codePoint !== AsciiCodePoint.LOWERCASE_O)
            return null;
        if (nodePoints[i + 4].codePoint !== AsciiCodePoint.LOWERCASE_R)
            return null;
        if (nodePoints[i + 5].codePoint !== AsciiCodePoint.LOWERCASE_T)
            return null;
        const [left, right] = calcTrimBoundaryOfCodePoints(nodePoints, firstNonWhitespaceIndex, endIndex);
        const text = calcStringFromNodePoints(nodePoints, left, right);
        let m;
        let token = null;
        const position = () => ({
            start: calcStartYastNodePoint(nodePoints, startIndex),
            end: calcEndYastNodePoint(nodePoints, endIndex - 1),
        });
        if ((m = regex1.exec(text)) != null) {
            token = {
                nodeType: EcmaImportType,
                position: position(),
                moduleName: m[2],
                defaultImport: null,
                namedImports: [],
            };
        }
        else if ((m = regex2.exec(text)) != null) {
            token = {
                nodeType: EcmaImportType,
                position: position(),
                moduleName: m[3],
                defaultImport: m[1],
                namedImports: [],
            };
        }
        else if ((m = regex3.exec(text)) != null) {
            token = {
                nodeType: EcmaImportType,
                position: position(),
                moduleName: m[4],
                defaultImport: m[1],
                namedImports: resolveNameImports(m[2]),
            };
        }
        return token === null
            ? null
            : { token, nextIndex: endIndex, saturated: true };
    }
    parseBlock(token) {
        const node = {
            type: EcmaImportType,
            moduleName: token.moduleName,
            defaultImport: token.defaultImport,
            namedImports: token.namedImports,
        };
        return node;
    }
}

const uniqueName$m = '@yozora/tokenizer-emphasis';

class EmphasisTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$m,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_INLINE,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        const isOpenerDelimiter = (delimiterStartIndex, delimiterEndIndex) => {
            const nextCodePosition = delimiterEndIndex >= endIndex ? null : nodePoints[delimiterEndIndex];
            if (nextCodePosition == null ||
                isUnicodeWhitespaceCharacter(nextCodePosition.codePoint))
                return false;
            if (!isPunctuationCharacter(nextCodePosition.codePoint))
                return true;
            if (delimiterStartIndex <= startIndex)
                return true;
            const prevCodePosition = nodePoints[delimiterStartIndex - 1];
            return (isUnicodeWhitespaceCharacter(prevCodePosition.codePoint) ||
                isPunctuationCharacter(prevCodePosition.codePoint));
        };
        const isCloserDelimiter = (delimiterStartIndex, delimiterEndIndex) => {
            if (delimiterStartIndex > startIndex) {
                const prevCodePosition = nodePoints[delimiterStartIndex - 1];
                if (isUnicodeWhitespaceCharacter(prevCodePosition.codePoint))
                    return false;
                if (!isPunctuationCharacter(prevCodePosition.codePoint))
                    return true;
            }
            if (delimiterEndIndex >= endIndex)
                return true;
            const nextCodePosition = nodePoints[delimiterEndIndex];
            return (isUnicodeWhitespaceCharacter(nextCodePosition.codePoint) ||
                isPunctuationCharacter(nextCodePosition.codePoint));
        };
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.ASTERISK:
                case AsciiCodePoint.UNDERSCORE: {
                    const _startIndex = i;
                    i = eatOptionalCharacters(nodePoints, i + 1, endIndex, c) - 1;
                    const _endIndex = i + 1;
                    const isLeftFlankingDelimiterRun = isOpenerDelimiter(_startIndex, _endIndex);
                    const isRightFlankingDelimiterRun = isCloserDelimiter(_startIndex, _endIndex);
                    let isOpener = isLeftFlankingDelimiterRun;
                    let isCloser = isRightFlankingDelimiterRun;
                    if (c === AsciiCodePoint.UNDERSCORE) {
                        if (isLeftFlankingDelimiterRun && isRightFlankingDelimiterRun) {
                            if (_startIndex > startIndex &&
                                !isPunctuationCharacter(nodePoints[_startIndex - 1].codePoint)) {
                                isOpener = false;
                            }
                            const nextCodePosition = nodePoints[_endIndex];
                            if (!isPunctuationCharacter(nextCodePosition.codePoint)) {
                                isCloser = false;
                            }
                        }
                    }
                    if (!isOpener && !isCloser)
                        break;
                    const thickness = _endIndex - _startIndex;
                    return {
                        type: isOpener ? (isCloser ? 'both' : 'opener') : 'closer',
                        startIndex: _startIndex,
                        endIndex: _endIndex,
                        thickness,
                        originalThickness: thickness,
                    };
                }
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints) {
        if (nodePoints[openerDelimiter.startIndex].codePoint !==
            nodePoints[closerDelimiter.startIndex].codePoint ||
            ((openerDelimiter.type === 'both' || closerDelimiter.type === 'both') &&
                (openerDelimiter.originalThickness +
                    closerDelimiter.originalThickness) %
                    3 ===
                    0 &&
                openerDelimiter.originalThickness % 3 !== 0)) {
            return { paired: false, opener: true, closer: true };
        }
        return { paired: true };
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        let thickness = 1;
        if (openerDelimiter.thickness > 1 && closerDelimiter.thickness > 1) {
            thickness = 2;
        }
        internalTokens = api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints);
        const token = {
            nodeType: thickness === 1 ? EmphasisType : StrongType,
            startIndex: openerDelimiter.endIndex - thickness,
            endIndex: closerDelimiter.startIndex + thickness,
            thickness,
            children: internalTokens,
        };
        const remainOpenerDelimiter = openerDelimiter.thickness > thickness
            ? {
                type: openerDelimiter.type,
                startIndex: openerDelimiter.startIndex,
                endIndex: openerDelimiter.endIndex - thickness,
                thickness: openerDelimiter.thickness - thickness,
                originalThickness: openerDelimiter.originalThickness,
            }
            : undefined;
        const remainCloserDelimiter = closerDelimiter.thickness > thickness
            ? {
                type: closerDelimiter.type,
                startIndex: closerDelimiter.startIndex + thickness,
                endIndex: closerDelimiter.endIndex,
                thickness: closerDelimiter.thickness - thickness,
                originalThickness: closerDelimiter.originalThickness,
            }
            : undefined;
        return {
            tokens: [token],
            remainOpenerDelimiter,
            remainCloserDelimiter,
        };
    }
    processToken(token, children) {
        const result = {
            type: token.nodeType,
            children: children !== null && children !== void 0 ? children : [],
        };
        return result;
    }
}

const uniqueName$l = '@yozora/tokenizer-fenced-code';

class FencedCodeTokenizer extends FencedBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$l,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.FENCED_BLOCK,
            nodeType: CodeType,
            markers: [AsciiCodePoint.BACKTICK, AsciiCodePoint.TILDE],
            markersRequired: 3,
            checkInfoString: (infoString, marker) => {
                if (marker === AsciiCodePoint.BACKTICK) {
                    for (const p of infoString) {
                        if (p.codePoint === AsciiCodePoint.BACKTICK)
                            return false;
                    }
                }
                return true;
            },
        });
        this.isContainingBlock = false;
    }
    parseBlock(token) {
        const infoString = token.infoString;
        let i = 0;
        const lang = [];
        for (; i < infoString.length; ++i) {
            const p = infoString[i];
            if (isUnicodeWhitespaceCharacter(p.codePoint))
                break;
            lang.push(p);
        }
        i = eatOptionalWhitespaces(infoString, i, infoString.length);
        const contents = mergeContentLinesFaithfully(token.lines);
        const node = {
            type: CodeType,
            lang: calcEscapedStringFromNodePoints(lang, 0, lang.length, true),
            meta: calcEscapedStringFromNodePoints(infoString, i, infoString.length, true),
            value: calcStringFromNodePoints(contents),
        };
        return node;
    }
}

const uniqueName$k = '@yozora/tokenizer-link';

function eatLinkDestination(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    switch (nodePoints[i].codePoint) {
        case AsciiCodePoint.OPEN_ANGLE: {
            for (i += 1; i < endIndex; ++i) {
                const p = nodePoints[i];
                switch (p.codePoint) {
                    case AsciiCodePoint.BACKSLASH:
                        i += 1;
                        break;
                    case AsciiCodePoint.OPEN_ANGLE:
                    case VirtualCodePoint.LINE_END:
                        return -1;
                    case AsciiCodePoint.CLOSE_ANGLE:
                        return i + 1;
                }
            }
            return -1;
        }
        default: {
            let openParensCount = 0;
            for (; i < endIndex; ++i) {
                const c = nodePoints[i].codePoint;
                switch (c) {
                    case AsciiCodePoint.BACKSLASH:
                        i += 1;
                        break;
                    case AsciiCodePoint.OPEN_PARENTHESIS:
                        openParensCount += 1;
                        break;
                    case AsciiCodePoint.CLOSE_PARENTHESIS:
                        openParensCount -= 1;
                        if (openParensCount < 0)
                            return i;
                        break;
                    default:
                        if (isWhitespaceCharacter(c) || isAsciiControlCharacter(c))
                            return i;
                        break;
                }
            }
            return openParensCount === 0 ? i : -1;
        }
    }
}

const checkBalancedBracketsStatus = (startIndex, endIndex, internalTokens, nodePoints) => {
    let i = startIndex;
    let bracketCount = 0;
    const updateBracketCount = () => {
        const c = nodePoints[i].codePoint;
        switch (c) {
            case AsciiCodePoint.BACKSLASH:
                i += 1;
                break;
            case AsciiCodePoint.OPEN_BRACKET:
                bracketCount += 1;
                break;
            case AsciiCodePoint.CLOSE_BRACKET:
                bracketCount -= 1;
                break;
        }
    };
    for (const token of internalTokens) {
        if (token.startIndex < startIndex)
            continue;
        if (token.endIndex > endIndex)
            break;
        for (; i < token.startIndex; ++i) {
            updateBracketCount();
            if (bracketCount < 0)
                return -1;
        }
        i = token.endIndex;
    }
    for (; i < endIndex; ++i) {
        updateBracketCount();
        if (bracketCount < 0)
            return -1;
    }
    return bracketCount > 0 ? 1 : 0;
};

function eatLinkTitle(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    const titleWrapSymbol = nodePoints[i].codePoint;
    switch (titleWrapSymbol) {
        case AsciiCodePoint.DOUBLE_QUOTE:
        case AsciiCodePoint.SINGLE_QUOTE: {
            for (i += 1; i < endIndex; ++i) {
                const p = nodePoints[i];
                switch (p.codePoint) {
                    case AsciiCodePoint.BACKSLASH:
                        i += 1;
                        break;
                    case titleWrapSymbol:
                        return i + 1;
                    case VirtualCodePoint.LINE_END: {
                        const j = eatOptionalBlankLines(nodePoints, startIndex, i);
                        if (nodePoints[j].line > p.line + 1)
                            return -1;
                        break;
                    }
                }
            }
            break;
        }
        case AsciiCodePoint.OPEN_PARENTHESIS: {
            let openParens = 1;
            for (i += 1; i < endIndex; ++i) {
                const p = nodePoints[i];
                switch (p.codePoint) {
                    case AsciiCodePoint.BACKSLASH:
                        i += 1;
                        break;
                    case VirtualCodePoint.LINE_END: {
                        const j = eatOptionalBlankLines(nodePoints, startIndex, i);
                        if (nodePoints[j].line > p.line + 1)
                            return -1;
                        break;
                    }
                    case AsciiCodePoint.OPEN_PARENTHESIS:
                        openParens += 1;
                        break;
                    case AsciiCodePoint.CLOSE_PARENTHESIS:
                        openParens -= 1;
                        if (openParens === 0)
                            return i + 1;
                        break;
                }
            }
            break;
        }
        case AsciiCodePoint.CLOSE_PARENTHESIS:
            return i;
        default:
            return -1;
    }
    return -1;
}

class LinkTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$k,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints, api) {
        const blockEndIndex = api.getBlockEndIndex();
        for (let i = startIndex; i < endIndex; ++i) {
            const p = nodePoints[i];
            switch (p.codePoint) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.OPEN_BRACKET: {
                    const delimiter = {
                        type: 'opener',
                        startIndex: i,
                        endIndex: i + 1,
                    };
                    return delimiter;
                }
                case AsciiCodePoint.CLOSE_BRACKET: {
                    if (i + 1 >= endIndex ||
                        nodePoints[i + 1].codePoint !== AsciiCodePoint.OPEN_PARENTHESIS)
                        break;
                    const destinationStartIndex = eatOptionalWhitespaces(nodePoints, i + 2, blockEndIndex);
                    const destinationEndIndex = eatLinkDestination(nodePoints, destinationStartIndex, blockEndIndex);
                    if (destinationEndIndex < 0)
                        break;
                    const titleStartIndex = eatOptionalWhitespaces(nodePoints, destinationEndIndex, blockEndIndex);
                    const titleEndIndex = eatLinkTitle(nodePoints, titleStartIndex, blockEndIndex);
                    if (titleEndIndex < 0)
                        break;
                    const _startIndex = i;
                    const _endIndex = eatOptionalWhitespaces(nodePoints, titleEndIndex, blockEndIndex) + 1;
                    if (_endIndex > blockEndIndex ||
                        nodePoints[_endIndex - 1].codePoint !==
                            AsciiCodePoint.CLOSE_PARENTHESIS)
                        break;
                    return {
                        type: 'closer',
                        startIndex: _startIndex,
                        endIndex: _endIndex,
                        destinationContent: destinationStartIndex < destinationEndIndex
                            ? {
                                startIndex: destinationStartIndex,
                                endIndex: destinationEndIndex,
                            }
                            : undefined,
                        titleContent: titleStartIndex < titleEndIndex
                            ? { startIndex: titleStartIndex, endIndex: titleEndIndex }
                            : undefined,
                    };
                }
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints) {
        const hasInternalLinkToken = internalTokens.find(isLinkToken) != null;
        if (hasInternalLinkToken) {
            return { paired: false, opener: false, closer: false };
        }
        const balancedBracketsStatus = checkBalancedBracketsStatus(openerDelimiter.endIndex, closerDelimiter.startIndex, internalTokens, nodePoints);
        switch (balancedBracketsStatus) {
            case -1:
                return { paired: false, opener: false, closer: true };
            case 0:
                return { paired: true };
            case 1:
                return { paired: false, opener: true, closer: false };
        }
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const children = api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints);
        const token = {
            nodeType: LinkType,
            startIndex: openerDelimiter.startIndex,
            endIndex: closerDelimiter.endIndex,
            destinationContent: closerDelimiter.destinationContent,
            titleContent: closerDelimiter.titleContent,
            children,
        };
        return { tokens: [token] };
    }
    processToken(token, children, nodePoints) {
        let url = '';
        if (token.destinationContent != null) {
            let { startIndex, endIndex } = token.destinationContent;
            if (nodePoints[startIndex].codePoint === AsciiCodePoint.OPEN_ANGLE) {
                startIndex += 1;
                endIndex -= 1;
            }
            const destination = calcEscapedStringFromNodePoints(nodePoints, startIndex, endIndex, true);
            url = encodeLinkDestination(destination);
        }
        let title;
        if (token.titleContent != null) {
            const { startIndex, endIndex } = token.titleContent;
            title = calcEscapedStringFromNodePoints(nodePoints, startIndex + 1, endIndex - 1);
        }
        const result = {
            type: LinkType,
            url,
            title,
            children: children || [],
        };
        return result;
    }
}

const uniqueName$j = '@yozora/tokenizer-footnote';

class FootnoteTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$j,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.CARET: {
                    if (i + 2 < endIndex &&
                        nodePoints[i + 1].codePoint === AsciiCodePoint.OPEN_BRACKET) {
                        return {
                            type: 'opener',
                            startIndex: i,
                            endIndex: i + 2,
                        };
                    }
                    break;
                }
                case AsciiCodePoint.CLOSE_BRACKET:
                    return {
                        type: 'closer',
                        startIndex: i,
                        endIndex: i + 1,
                    };
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints) {
        const balancedBracketsStatus = checkBalancedBracketsStatus(openerDelimiter.endIndex, closerDelimiter.startIndex, internalTokens, nodePoints);
        switch (balancedBracketsStatus) {
            case -1:
                return { paired: false, opener: false, closer: true };
            case 0:
                return { paired: true };
            case 1:
                return { paired: false, opener: true, closer: false };
        }
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const token = {
            nodeType: FootnoteType,
            startIndex: openerDelimiter.startIndex,
            endIndex: closerDelimiter.endIndex,
            children: api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints),
        };
        return { tokens: [token] };
    }
    processToken(token, children) {
        const result = {
            type: FootnoteType,
            children: children || [],
        };
        return result;
    }
}

const uniqueName$i = '@yozora/tokenizer-footnote-definition';

function eatFootnoteLabel(nodePoints, firstNonWhitespaceIndex, endIndex) {
    let i = firstNonWhitespaceIndex;
    if (i + 1 >= endIndex ||
        nodePoints[i].codePoint !== AsciiCodePoint.OPEN_BRACKET ||
        nodePoints[i + 1].codePoint !== AsciiCodePoint.CARET) {
        return -1;
    }
    let isEmpty = true;
    const lastIndex = Math.min(endIndex, i + 1 + 1000);
    for (i += 2; i < lastIndex; ++i) {
        const c = nodePoints[i].codePoint;
        switch (c) {
            case AsciiCodePoint.BACKSLASH:
                i += 1;
                break;
            case AsciiCodePoint.OPEN_BRACKET:
                return -1;
            case AsciiCodePoint.CLOSE_BRACKET:
                return isEmpty ? -1 : i + 1;
            case VirtualCodePoint.LINE_END:
                return -1;
            default:
                if (isEmpty && !isWhitespaceCharacter(c)) {
                    isEmpty = false;
                }
        }
    }
    return -1;
}

class FootnoteDefinitionTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$i,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_BLOCK,
        });
        this.isContainingBlock = true;
        this.indent = 4;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, firstNonWhitespaceIndex, endIndex } = line;
        const nextIndex = eatFootnoteLabel(nodePoints, firstNonWhitespaceIndex, endIndex);
        if (nextIndex < 0 ||
            nextIndex >= endIndex ||
            nodePoints[nextIndex].codePoint !== AsciiCodePoint.COLON) {
            return null;
        }
        const token = {
            nodeType: FootnoteDefinitionType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex),
            },
            label: {
                nodePoints,
                startIndex: firstNonWhitespaceIndex,
                endIndex: nextIndex,
            },
            children: [],
        };
        return { token, nextIndex: nextIndex + 1 };
    }
    eatContinuationText(line) {
        const { startIndex, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces, } = line;
        if (firstNonWhitespaceIndex >= endIndex) {
            return {
                status: 'opening',
                nextIndex: Math.min(endIndex - 1, startIndex + this.indent),
            };
        }
        if (countOfPrecedeSpaces >= this.indent) {
            return { status: 'opening', nextIndex: startIndex + this.indent };
        }
        return { status: 'notMatched' };
    }
    onClose(token, api) {
        const label = calcStringFromNodePoints(token.label.nodePoints, token.label.startIndex + 2, token.label.endIndex - 1);
        const identifier = resolveLabelToIdentifier(label);
        api.registerFootnoteDefinitionIdentifier(identifier);
        token._label = label;
        token._identifier = identifier;
    }
    parseBlock(token, children) {
        const label = token._label;
        const identifier = token._identifier;
        const node = {
            type: FootnoteDefinitionType,
            identifier,
            label,
            children: children !== null && children !== void 0 ? children : [],
        };
        return node;
    }
}

const uniqueName$h = '@yozora/tokenizer-footnote-reference';

class FootnoteReferenceTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$h,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            const p = nodePoints[i];
            switch (p.codePoint) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.OPEN_BRACKET: {
                    const nextIndex = eatFootnoteLabel(nodePoints, i, endIndex);
                    if (nextIndex >= 0) {
                        return {
                            type: 'full',
                            startIndex: i,
                            endIndex: nextIndex,
                        };
                    }
                    break;
                }
            }
        }
        return null;
    }
    processSingleDelimiter(delimiter, nodePoints, api) {
        const labelAndIdentifier = resolveLinkLabelAndIdentifier(nodePoints, delimiter.startIndex + 2, delimiter.endIndex - 1);
        if (labelAndIdentifier == null)
            return [];
        const { label, identifier } = labelAndIdentifier;
        if (!api.hasFootnoteDefinition(identifier))
            return [];
        const token = {
            nodeType: FootnoteReferenceType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
            label,
            identifier,
        };
        return [token];
    }
    processToken(token) {
        const { identifier, label } = token;
        const result = {
            type: FootnoteReferenceType,
            identifier,
            label,
        };
        return result;
    }
}

const uniqueName$g = '@yozora/tokenizer-heading';

class HeadingTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$g,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex ||
            nodePoints[firstNonWhitespaceIndex].codePoint !==
                AsciiCodePoint.NUMBER_SIGN) {
            return null;
        }
        const i = eatOptionalCharacters(nodePoints, firstNonWhitespaceIndex + 1, endIndex, AsciiCodePoint.NUMBER_SIGN);
        const depth = i - firstNonWhitespaceIndex;
        if (depth > 6)
            return null;
        if (i + 1 < endIndex && !isSpaceCharacter(nodePoints[i].codePoint))
            return null;
        const nextIndex = endIndex;
        const token = {
            nodeType: HeadingType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            depth: depth,
            line,
        };
        return { token, nextIndex, saturated: true };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null)
            return null;
        return {
            token: result.token,
            nextIndex: result.nextIndex,
            remainingSibling: prevSiblingToken,
        };
    }
    parseBlock(token, children, api) {
        const { nodePoints, firstNonWhitespaceIndex, endIndex } = token.line;
        let [leftIndex, rightIndex] = calcTrimBoundaryOfCodePoints(nodePoints, firstNonWhitespaceIndex + token.depth, endIndex);
        let closeCharCount = 0;
        for (let j = rightIndex - 1; j >= leftIndex; --j) {
            const c = nodePoints[j].codePoint;
            if (c !== AsciiCodePoint.NUMBER_SIGN)
                break;
            closeCharCount += 1;
        }
        if (closeCharCount > 0) {
            let spaceCount = 0, j = rightIndex - 1 - closeCharCount;
            for (; j >= leftIndex; --j) {
                const c = nodePoints[j].codePoint;
                if (!isWhitespaceCharacter(c))
                    break;
                spaceCount += 1;
            }
            if (spaceCount > 0 || j < leftIndex) {
                rightIndex -= closeCharCount + spaceCount;
            }
        }
        const lines = [
            {
                nodePoints,
                startIndex: leftIndex,
                endIndex: rightIndex,
                firstNonWhitespaceIndex: leftIndex,
                countOfPrecedeSpaces: 0,
            },
        ];
        const phrasingContent = api.buildPhrasingContent(lines);
        const node = {
            type: HeadingType,
            depth: token.depth,
            children: phrasingContent == null ? [] : [phrasingContent],
        };
        return node;
    }
}

function eatHTMLTagName(nodePoints, startIndex, endIndex) {
    if (startIndex >= endIndex ||
        !isAsciiLetter(nodePoints[startIndex].codePoint))
        return null;
    let i = startIndex;
    for (; i < endIndex; ++i) {
        const c = nodePoints[i].codePoint;
        if (isAsciiLetter(c) ||
            isAsciiDigitCharacter(c) ||
            c === AsciiCodePoint.MINUS_SIGN)
            continue;
        return i;
    }
    return i;
}

const includedTags$1 = ['pre', 'script', 'style'];
function eatStartCondition1(nodePoints, startIndex, endIndex, tagName) {
    if (!includedTags$1.includes(tagName))
        return null;
    if (startIndex >= endIndex)
        return endIndex;
    const c = nodePoints[startIndex].codePoint;
    if (isWhitespaceCharacter(c) || c === AsciiCodePoint.CLOSE_ANGLE) {
        return startIndex + 1;
    }
    return null;
}
function eatEndCondition1(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        if (nodePoints[i].codePoint === AsciiCodePoint.OPEN_ANGLE &&
            i + 3 < endIndex &&
            nodePoints[i + 1].codePoint === AsciiCodePoint.SLASH) {
            const tagNameStartIndex = i + 2;
            const tagNameEndIndex = eatHTMLTagName(nodePoints, tagNameStartIndex, endIndex);
            if (tagNameEndIndex == null ||
                tagNameEndIndex >= endIndex ||
                nodePoints[tagNameEndIndex].codePoint !== AsciiCodePoint.CLOSE_ANGLE) {
                i += 1;
                continue;
            }
            const rawTagName = calcStringFromNodePoints(nodePoints, tagNameStartIndex, tagNameEndIndex, true);
            const tagName = rawTagName.toLowerCase();
            if (includedTags$1.includes(tagName))
                return tagNameEndIndex;
        }
    }
    return null;
}

function eatStartCondition2(nodePoints, startIndex, endIndex) {
    const i = startIndex;
    if (i + 2 < endIndex &&
        nodePoints[i].codePoint === AsciiCodePoint.EXCLAMATION_MARK &&
        nodePoints[i + 1].codePoint === AsciiCodePoint.MINUS_SIGN &&
        nodePoints[i + 2].codePoint === AsciiCodePoint.MINUS_SIGN)
        return i + 3;
    return null;
}
function eatEndCondition2(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        if (nodePoints[i].codePoint === AsciiCodePoint.MINUS_SIGN &&
            i + 2 < endIndex &&
            nodePoints[i + 1].codePoint === AsciiCodePoint.MINUS_SIGN &&
            nodePoints[i + 2].codePoint === AsciiCodePoint.CLOSE_ANGLE)
            return i + 3;
    }
    return null;
}

function eatStartCondition3(nodePoints, startIndex, endIndex) {
    const i = startIndex;
    if (i < endIndex && nodePoints[i].codePoint === AsciiCodePoint.QUESTION_MARK)
        return i + 1;
    return null;
}
function eatEndCondition3(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        if (nodePoints[i].codePoint === AsciiCodePoint.QUESTION_MARK &&
            i + 1 < endIndex &&
            nodePoints[i + 1].codePoint === AsciiCodePoint.CLOSE_ANGLE)
            return i + 2;
    }
    return null;
}

function eatStartCondition4(nodePoints, startIndex, endIndex) {
    const i = startIndex;
    if (i + 1 < endIndex &&
        nodePoints[i].codePoint === AsciiCodePoint.EXCLAMATION_MARK &&
        isAsciiUpperLetter(nodePoints[i + 1].codePoint))
        return i + 2;
    return null;
}
function eatEndCondition4(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        if (nodePoints[i].codePoint === AsciiCodePoint.CLOSE_ANGLE)
            return i + 1;
    }
    return null;
}

function eatStartCondition5(nodePoints, startIndex, endIndex) {
    const i = startIndex;
    if (i + 6 < endIndex &&
        nodePoints[i].codePoint === AsciiCodePoint.EXCLAMATION_MARK &&
        nodePoints[i + 1].codePoint === AsciiCodePoint.OPEN_BRACKET &&
        nodePoints[i + 2].codePoint === AsciiCodePoint.UPPERCASE_C &&
        nodePoints[i + 3].codePoint === AsciiCodePoint.UPPERCASE_D &&
        nodePoints[i + 4].codePoint === AsciiCodePoint.UPPERCASE_A &&
        nodePoints[i + 5].codePoint === AsciiCodePoint.UPPERCASE_T &&
        nodePoints[i + 6].codePoint === AsciiCodePoint.UPPERCASE_A)
        return i + 7;
    return null;
}
function eatEndCondition5(nodePoints, startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; ++i) {
        if (nodePoints[i].codePoint === AsciiCodePoint.CLOSE_BRACKET &&
            i + 2 < endIndex &&
            nodePoints[i + 1].codePoint === AsciiCodePoint.CLOSE_BRACKET &&
            nodePoints[i + 2].codePoint === AsciiCodePoint.CLOSE_ANGLE)
            return i + 3;
    }
    return null;
}

const includedTags = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'section',
    'source',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
];
function eatStartCondition6(nodePoints, startIndex, endIndex, tagName) {
    if (!includedTags.includes(tagName))
        return null;
    if (startIndex >= endIndex)
        return endIndex;
    const c = nodePoints[startIndex].codePoint;
    if (isWhitespaceCharacter(c) || c === AsciiCodePoint.CLOSE_ANGLE)
        return startIndex + 1;
    if (c === AsciiCodePoint.SLASH &&
        startIndex + 1 < endIndex &&
        nodePoints[startIndex + 1].codePoint === AsciiCodePoint.CLOSE_ANGLE)
        return startIndex + 2;
    return null;
}

function eatHTMLAttribute(nodePoints, startIndex, endIndex) {
    let i = eatOptionalWhitespaces(nodePoints, startIndex, endIndex);
    if (i <= startIndex || i >= endIndex)
        return null;
    const attrNameStartIndex = i;
    let c = nodePoints[i].codePoint;
    if (!isAsciiLetter(c) &&
        c !== AsciiCodePoint.UNDERSCORE &&
        c !== AsciiCodePoint.COLON)
        return null;
    for (i = attrNameStartIndex + 1; i < endIndex; ++i) {
        c = nodePoints[i].codePoint;
        if (isAsciiLetter(c) ||
            isAsciiDigitCharacter(c) ||
            c === AsciiCodePoint.UNDERSCORE ||
            c === AsciiCodePoint.DOT ||
            c === AsciiCodePoint.COLON ||
            c === AsciiCodePoint.MINUS_SIGN)
            continue;
        break;
    }
    const attrNameEndIndex = i;
    const attribute = {
        name: {
            startIndex: attrNameStartIndex,
            endIndex: attrNameEndIndex,
        },
    };
    i = eatOptionalWhitespaces(nodePoints, attrNameEndIndex, endIndex);
    if (i < endIndex && nodePoints[i].codePoint === AsciiCodePoint.EQUALS_SIGN) {
        i = eatOptionalWhitespaces(nodePoints, i + 1, endIndex);
        if (i < endIndex) {
            const mark = nodePoints[i].codePoint;
            switch (mark) {
                case AsciiCodePoint.DOUBLE_QUOTE: {
                    const attrValueStartIndex = i + 1;
                    for (i = attrValueStartIndex; i < endIndex; ++i) {
                        c = nodePoints[i].codePoint;
                        if (c === AsciiCodePoint.DOUBLE_QUOTE)
                            break;
                    }
                    const attrValueEndIndex = i;
                    if (i < endIndex &&
                        nodePoints[i].codePoint === AsciiCodePoint.DOUBLE_QUOTE) {
                        attribute.value = {
                            startIndex: attrValueStartIndex,
                            endIndex: attrValueEndIndex,
                        };
                        i += 1;
                    }
                    break;
                }
                case AsciiCodePoint.SINGLE_QUOTE: {
                    const attrValueStartIndex = i + 1;
                    for (i = attrValueStartIndex; i < endIndex; ++i) {
                        c = nodePoints[i].codePoint;
                        if (c === AsciiCodePoint.SINGLE_QUOTE)
                            break;
                    }
                    const attrValueEndIndex = i;
                    if (i < endIndex &&
                        nodePoints[i].codePoint === AsciiCodePoint.SINGLE_QUOTE) {
                        attribute.value = {
                            startIndex: attrValueStartIndex,
                            endIndex: attrValueEndIndex,
                        };
                        i += 1;
                    }
                    break;
                }
                default: {
                    const attrValueStartIndex = i;
                    for (; i < endIndex; ++i) {
                        c = nodePoints[i].codePoint;
                        if (isWhitespaceCharacter(c) ||
                            c === AsciiCodePoint.DOUBLE_QUOTE ||
                            c === AsciiCodePoint.SINGLE_QUOTE ||
                            c === AsciiCodePoint.EQUALS_SIGN ||
                            c === AsciiCodePoint.OPEN_ANGLE ||
                            c === AsciiCodePoint.CLOSE_ANGLE ||
                            c === AsciiCodePoint.BACKTICK)
                            break;
                    }
                    const attrValueEndIndex = i;
                    if (attrValueEndIndex > attrValueStartIndex) {
                        attribute.value = {
                            startIndex: attrValueStartIndex,
                            endIndex: attrValueEndIndex,
                        };
                    }
                    break;
                }
            }
            if (attribute.value != null) {
                return { attribute, nextIndex: i };
            }
        }
    }
    return { attribute, nextIndex: attrNameEndIndex };
}

const excludedTags = ['pre', 'script', 'style'];
function eatStartCondition7(nodePoints, startIndex, endIndex, tagName, potentialOpenTag) {
    if (excludedTags.includes(tagName) || startIndex >= endIndex)
        return null;
    let i = startIndex;
    if (potentialOpenTag) {
        for (; i < endIndex;) {
            const result = eatHTMLAttribute(nodePoints, i, endIndex);
            if (result == null)
                break;
            i = result.nextIndex;
        }
        i = eatOptionalWhitespaces(nodePoints, i, endIndex);
        if (i >= endIndex)
            return null;
        if (nodePoints[i].codePoint === AsciiCodePoint.SLASH)
            i += 1;
    }
    else {
        i = eatOptionalWhitespaces(nodePoints, startIndex, endIndex);
    }
    if (i >= endIndex || nodePoints[i].codePoint !== AsciiCodePoint.CLOSE_ANGLE)
        return null;
    for (i += 1; i < endIndex; ++i) {
        if (!isWhitespaceCharacter(nodePoints[i].codePoint))
            return null;
    }
    return endIndex;
}

const uniqueName$f = '@yozora/tokenizer-html-block';

class HtmlBlockTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$f,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex ||
            nodePoints[firstNonWhitespaceIndex].codePoint !==
                AsciiCodePoint.OPEN_ANGLE)
            return null;
        const i = firstNonWhitespaceIndex + 1;
        const startResult = this.eatStartCondition(nodePoints, i, endIndex);
        if (startResult == null)
            return null;
        const { condition } = startResult;
        let saturated = false;
        if (condition !== 6 && condition !== 7) {
            const endResult = this.eatEndCondition(nodePoints, startResult.nextIndex, endIndex, condition);
            if (endResult != null)
                saturated = true;
        }
        const nextIndex = endIndex;
        const token = {
            nodeType: HtmlType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            condition,
            lines: [line],
        };
        return { token, nextIndex, saturated };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null || result.token.condition === 7)
            return null;
        const { token, nextIndex } = result;
        return {
            token,
            nextIndex,
            remainingSibling: prevSiblingToken,
        };
    }
    eatContinuationText(line, token) {
        const { nodePoints, endIndex, firstNonWhitespaceIndex } = line;
        const nextIndex = this.eatEndCondition(nodePoints, firstNonWhitespaceIndex, endIndex, token.condition);
        if (nextIndex === -1)
            return { status: 'notMatched' };
        token.lines.push(line);
        if (nextIndex != null)
            return { status: 'closing', nextIndex: endIndex };
        return { status: 'opening', nextIndex: endIndex };
    }
    parseBlock(token) {
        const contents = mergeContentLinesFaithfully(token.lines);
        const node = {
            type: 'html',
            value: calcStringFromNodePoints(contents),
        };
        return node;
    }
    eatStartCondition(nodePoints, startIndex, endIndex) {
        let nextIndex = null;
        if (startIndex >= endIndex)
            return null;
        nextIndex = eatStartCondition2(nodePoints, startIndex, endIndex);
        if (nextIndex != null)
            return { nextIndex, condition: 2 };
        nextIndex = eatStartCondition3(nodePoints, startIndex, endIndex);
        if (nextIndex != null)
            return { nextIndex, condition: 3 };
        nextIndex = eatStartCondition4(nodePoints, startIndex, endIndex);
        if (nextIndex != null)
            return { nextIndex, condition: 4 };
        nextIndex = eatStartCondition5(nodePoints, startIndex, endIndex);
        if (nextIndex != null)
            return { nextIndex, condition: 5 };
        if (nodePoints[startIndex].codePoint !== AsciiCodePoint.SLASH) {
            const tagNameStartIndex = startIndex;
            const tagNameEndIndex = eatHTMLTagName(nodePoints, tagNameStartIndex, endIndex);
            if (tagNameEndIndex == null)
                return null;
            const tagNameInterval = {
                startIndex: tagNameStartIndex,
                endIndex: tagNameEndIndex,
            };
            const rawTagName = calcStringFromNodePoints(nodePoints, tagNameInterval.startIndex, tagNameInterval.endIndex);
            const tagName = rawTagName.toLowerCase();
            nextIndex = eatStartCondition1(nodePoints, tagNameInterval.endIndex, endIndex, tagName);
            if (nextIndex != null)
                return { nextIndex, condition: 1 };
            nextIndex = eatStartCondition6(nodePoints, tagNameInterval.endIndex, endIndex, tagName);
            if (nextIndex != null)
                return { nextIndex, condition: 6 };
            nextIndex = eatStartCondition7(nodePoints, tagNameInterval.endIndex, endIndex, tagName, true);
            if (nextIndex != null)
                return { nextIndex, condition: 7 };
            return null;
        }
        const tagNameStartIndex = startIndex + 1;
        const tagNameEndIndex = eatHTMLTagName(nodePoints, tagNameStartIndex, endIndex);
        if (tagNameEndIndex == null)
            return null;
        const tagNameInterval = {
            startIndex: tagNameStartIndex,
            endIndex: tagNameEndIndex,
        };
        const rawTagName = calcStringFromNodePoints(nodePoints, tagNameInterval.startIndex, tagNameInterval.endIndex);
        const tagName = rawTagName.toLowerCase();
        nextIndex = eatStartCondition6(nodePoints, tagNameInterval.endIndex, endIndex, tagName);
        if (nextIndex != null)
            return { nextIndex, condition: 6 };
        nextIndex = eatStartCondition7(nodePoints, tagNameInterval.endIndex, endIndex, tagName, false);
        if (nextIndex != null)
            return { nextIndex, condition: 7 };
        return null;
    }
    eatEndCondition(nodePoints, startIndex, endIndex, condition) {
        switch (condition) {
            case 1: {
                const nextIndex = eatEndCondition1(nodePoints, startIndex, endIndex);
                return nextIndex == null ? null : endIndex;
            }
            case 2: {
                const nextIndex = eatEndCondition2(nodePoints, startIndex, endIndex);
                return nextIndex == null ? null : endIndex;
            }
            case 3: {
                const nextIndex = eatEndCondition3(nodePoints, startIndex, endIndex);
                return nextIndex == null ? null : endIndex;
            }
            case 4: {
                const nextIndex = eatEndCondition4(nodePoints, startIndex, endIndex);
                return nextIndex == null ? null : endIndex;
            }
            case 5: {
                const nextIndex = eatEndCondition5(nodePoints, startIndex, endIndex);
                return nextIndex == null ? null : endIndex;
            }
            case 6:
            case 7: {
                const firstNonWhitespaceIndex = eatOptionalWhitespaces(nodePoints, startIndex, endIndex);
                return firstNonWhitespaceIndex >= endIndex ? -1 : null;
            }
        }
    }
}

const uniqueName$e = '@yozora/tokenizer-html-inline';

function eatHtmlInlineCDataDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 11 >= endIndex ||
        nodePoints[i + 1].codePoint !== AsciiCodePoint.EXCLAMATION_MARK ||
        nodePoints[i + 2].codePoint !== AsciiCodePoint.OPEN_BRACKET ||
        nodePoints[i + 3].codePoint !== AsciiCodePoint.UPPERCASE_C ||
        nodePoints[i + 4].codePoint !== AsciiCodePoint.UPPERCASE_D ||
        nodePoints[i + 5].codePoint !== AsciiCodePoint.UPPERCASE_A ||
        nodePoints[i + 6].codePoint !== AsciiCodePoint.UPPERCASE_T ||
        nodePoints[i + 7].codePoint !== AsciiCodePoint.UPPERCASE_A ||
        nodePoints[i + 8].codePoint !== AsciiCodePoint.OPEN_BRACKET)
        return null;
    const si = i + 9;
    for (i = si; i < endIndex; ++i) {
        const p = nodePoints[i];
        if (p.codePoint !== AsciiCodePoint.CLOSE_BRACKET)
            continue;
        if (i + 2 >= endIndex)
            return null;
        if (nodePoints[i + 1].codePoint === AsciiCodePoint.CLOSE_BRACKET &&
            nodePoints[i + 2].codePoint === AsciiCodePoint.CLOSE_ANGLE) {
            const delimiter = {
                type: 'full',
                startIndex,
                endIndex: i + 3,
                htmlType: 'cdata',
            };
            return delimiter;
        }
    }
    return null;
}

function eatHtmlInlineClosingDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 3 >= endIndex || nodePoints[i + 1].codePoint !== AsciiCodePoint.SLASH)
        return null;
    const tagNameStartIndex = i + 2;
    const tagNameEndIndex = eatHTMLTagName(nodePoints, tagNameStartIndex, endIndex);
    if (tagNameEndIndex == null)
        return null;
    i = eatOptionalWhitespaces(nodePoints, tagNameEndIndex, endIndex);
    if (i >= endIndex || nodePoints[i].codePoint !== AsciiCodePoint.CLOSE_ANGLE)
        return null;
    const delimiter = {
        type: 'full',
        startIndex,
        endIndex: i + 1,
        htmlType: 'closing',
        tagName: {
            startIndex: tagNameStartIndex,
            endIndex: tagNameEndIndex,
        },
    };
    return delimiter;
}

function eatHtmlInlineCommentDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 6 >= endIndex ||
        nodePoints[i + 1].codePoint !== AsciiCodePoint.EXCLAMATION_MARK ||
        nodePoints[i + 2].codePoint !== AsciiCodePoint.MINUS_SIGN ||
        nodePoints[i + 3].codePoint !== AsciiCodePoint.MINUS_SIGN)
        return null;
    if (nodePoints[i + 4].codePoint === AsciiCodePoint.CLOSE_ANGLE)
        return null;
    if (nodePoints[i + 4].codePoint === AsciiCodePoint.MINUS_SIGN &&
        nodePoints[i + 5].codePoint === AsciiCodePoint.CLOSE_ANGLE)
        return null;
    const si = i + 4;
    for (i = si; i < endIndex; ++i) {
        const p = nodePoints[i];
        if (p.codePoint !== AsciiCodePoint.MINUS_SIGN)
            continue;
        let hyphenCount = 1;
        for (; i + hyphenCount < endIndex; hyphenCount += 1) {
            const q = nodePoints[i + hyphenCount];
            if (q.codePoint !== AsciiCodePoint.MINUS_SIGN)
                break;
        }
        if (hyphenCount < 2)
            continue;
        if (hyphenCount > 2 ||
            i + 2 >= endIndex ||
            nodePoints[i + 2].codePoint !== AsciiCodePoint.CLOSE_ANGLE)
            return null;
        const delimiter = {
            type: 'full',
            startIndex,
            endIndex: i + 3,
            htmlType: 'comment',
        };
        return delimiter;
    }
    return null;
}

function eatHtmlInlineDeclarationDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 4 >= endIndex ||
        nodePoints[i + 1].codePoint !== AsciiCodePoint.EXCLAMATION_MARK)
        return null;
    const tagNameStartIndex = i + 2;
    for (i = tagNameStartIndex; i < endIndex; ++i) {
        const p = nodePoints[i];
        if (!isAsciiUpperLetter(p.codePoint))
            break;
    }
    if (i - tagNameStartIndex <= 0 ||
        i + 1 >= endIndex ||
        !isWhitespaceCharacter(nodePoints[i].codePoint))
        return null;
    const tagNameEndIndex = i, si = i + 1;
    for (i = si; i < endIndex; ++i) {
        const p = nodePoints[i];
        if (p.codePoint === AsciiCodePoint.CLOSE_ANGLE) {
            const delimiter = {
                type: 'full',
                startIndex,
                endIndex: i + 1,
                htmlType: 'declaration',
                tagName: {
                    startIndex: tagNameStartIndex,
                    endIndex: tagNameEndIndex,
                },
            };
            return delimiter;
        }
    }
    return null;
}

function eatHtmlInlineInstructionDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 3 >= endIndex ||
        nodePoints[i + 1].codePoint !== AsciiCodePoint.QUESTION_MARK)
        return null;
    const si = i + 2;
    for (i = si; i < endIndex; ++i) {
        const p = nodePoints[i];
        if (p.codePoint !== AsciiCodePoint.QUESTION_MARK)
            continue;
        if (i + 1 >= endIndex)
            return null;
        if (nodePoints[i + 1].codePoint === AsciiCodePoint.CLOSE_ANGLE) {
            const delimiter = {
                type: 'full',
                startIndex,
                endIndex: i + 2,
                htmlType: 'instruction',
            };
            return delimiter;
        }
    }
    return null;
}

function eatHtmlInlineTokenOpenDelimiter(nodePoints, startIndex, endIndex) {
    let i = startIndex;
    if (i + 2 >= endIndex)
        return null;
    const tagNameStartIndex = i + 1;
    const tagNameEndIndex = eatHTMLTagName(nodePoints, tagNameStartIndex, endIndex);
    if (tagNameEndIndex == null)
        return null;
    const attributes = [];
    for (i = tagNameEndIndex; i < endIndex;) {
        const result = eatHTMLAttribute(nodePoints, i, endIndex);
        if (result == null)
            break;
        attributes.push(result.attribute);
        i = result.nextIndex;
    }
    i = eatOptionalWhitespaces(nodePoints, i, endIndex);
    if (i >= endIndex)
        return null;
    let selfClosed = false;
    if (nodePoints[i].codePoint === AsciiCodePoint.SLASH) {
        i += 1;
        selfClosed = true;
    }
    if (i >= endIndex || nodePoints[i].codePoint !== AsciiCodePoint.CLOSE_ANGLE)
        return null;
    const delimiter = {
        type: 'full',
        startIndex,
        endIndex: i + 1,
        htmlType: 'open',
        tagName: {
            startIndex: tagNameStartIndex,
            endIndex: tagNameEndIndex,
        },
        attributes,
        selfClosed,
    };
    return delimiter;
}

class HtmlInlineTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$e,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            i = eatOptionalWhitespaces(nodePoints, i, endIndex);
            if (i >= endIndex)
                break;
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.OPEN_ANGLE: {
                    const delimiter = this.tryToEatDelimiter(nodePoints, i, endIndex);
                    if (delimiter != null)
                        return delimiter;
                    break;
                }
            }
        }
        return null;
    }
    processSingleDelimiter(delimiter) {
        const token = Object.assign(Object.assign({}, delimiter), { nodeType: HtmlType });
        return [token];
    }
    processToken(token, children, nodePoints) {
        const { startIndex, endIndex } = token;
        const value = calcStringFromNodePoints(nodePoints, startIndex, endIndex);
        const result = { type: HtmlType, value };
        return result;
    }
    tryToEatDelimiter(nodePoints, startIndex, endIndex) {
        let delimiter = null;
        delimiter = eatHtmlInlineTokenOpenDelimiter(nodePoints, startIndex, endIndex);
        if (delimiter != null)
            return delimiter;
        delimiter = eatHtmlInlineClosingDelimiter(nodePoints, startIndex, endIndex);
        if (delimiter != null)
            return delimiter;
        delimiter = eatHtmlInlineCommentDelimiter(nodePoints, startIndex, endIndex);
        if (delimiter != null)
            return delimiter;
        delimiter = eatHtmlInlineInstructionDelimiter(nodePoints, startIndex, endIndex);
        if (delimiter != null)
            return delimiter;
        delimiter = eatHtmlInlineDeclarationDelimiter(nodePoints, startIndex, endIndex);
        if (delimiter != null)
            return delimiter;
        delimiter = eatHtmlInlineCDataDelimiter(nodePoints, startIndex, endIndex);
        return delimiter;
    }
}

const uniqueName$d = '@yozora/tokenizer-image';

function calcImageAlt(nodes) {
    return nodes
        .map((o) => {
        if (o.value != null)
            return o.value;
        if (o.alt != null)
            return o.alt;
        if (o.children != null)
            return calcImageAlt(o.children);
        return '';
    })
        .join('');
}

class ImageTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$d,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints, api) {
        const blockEndIndex = api.getBlockEndIndex();
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.EXCLAMATION_MARK: {
                    if (i + 1 < endIndex &&
                        nodePoints[i + 1].codePoint === AsciiCodePoint.OPEN_BRACKET) {
                        return {
                            type: 'opener',
                            startIndex: i,
                            endIndex: i + 2,
                        };
                    }
                    break;
                }
                case AsciiCodePoint.CLOSE_BRACKET: {
                    if (i + 1 >= endIndex ||
                        nodePoints[i + 1].codePoint !== AsciiCodePoint.OPEN_PARENTHESIS) {
                        break;
                    }
                    const destinationStartIndex = eatOptionalWhitespaces(nodePoints, i + 2, blockEndIndex);
                    const destinationEndIndex = eatLinkDestination(nodePoints, destinationStartIndex, blockEndIndex);
                    if (destinationEndIndex < 0)
                        break;
                    const titleStartIndex = eatOptionalWhitespaces(nodePoints, destinationEndIndex, blockEndIndex);
                    const titleEndIndex = eatLinkTitle(nodePoints, titleStartIndex, blockEndIndex);
                    if (titleEndIndex < 0)
                        break;
                    const _startIndex = i;
                    const _endIndex = eatOptionalWhitespaces(nodePoints, titleEndIndex, blockEndIndex) + 1;
                    if (_endIndex > blockEndIndex ||
                        nodePoints[_endIndex - 1].codePoint !==
                            AsciiCodePoint.CLOSE_PARENTHESIS) {
                        break;
                    }
                    return {
                        type: 'closer',
                        startIndex: _startIndex,
                        endIndex: _endIndex,
                        destinationContent: destinationStartIndex < destinationEndIndex
                            ? {
                                startIndex: destinationStartIndex,
                                endIndex: destinationEndIndex,
                            }
                            : undefined,
                        titleContent: titleStartIndex < titleEndIndex
                            ? { startIndex: titleStartIndex, endIndex: titleEndIndex }
                            : undefined,
                    };
                }
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints) {
        const balancedBracketsStatus = checkBalancedBracketsStatus(openerDelimiter.endIndex, closerDelimiter.startIndex, internalTokens, nodePoints);
        switch (balancedBracketsStatus) {
            case -1:
                return { paired: false, opener: false, closer: true };
            case 0:
                return { paired: true };
            case 1:
                return { paired: false, opener: true, closer: false };
        }
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const token = {
            nodeType: ImageType,
            startIndex: openerDelimiter.startIndex,
            endIndex: closerDelimiter.endIndex,
            destinationContent: closerDelimiter.destinationContent,
            titleContent: closerDelimiter.titleContent,
            children: api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints),
        };
        return { tokens: [token] };
    }
    processToken(token, children, nodePoints) {
        let url = '';
        if (token.destinationContent != null) {
            let { startIndex, endIndex } = token.destinationContent;
            if (nodePoints[startIndex].codePoint === AsciiCodePoint.OPEN_ANGLE) {
                startIndex += 1;
                endIndex -= 1;
            }
            const destination = calcEscapedStringFromNodePoints(nodePoints, startIndex, endIndex, true);
            url = encodeLinkDestination(destination);
        }
        const alt = calcImageAlt(children || []);
        let title;
        if (token.titleContent != null) {
            const { startIndex, endIndex } = token.titleContent;
            title = calcEscapedStringFromNodePoints(nodePoints, startIndex + 1, endIndex - 1);
        }
        const result = { type: ImageType, url, alt, title };
        return result;
    }
}

const uniqueName$c = '@yozora/tokenizer-image-reference';

class ImageReferenceTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$c,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.EXCLAMATION_MARK: {
                    if (i + 1 >= endIndex ||
                        nodePoints[i + 1].codePoint !== AsciiCodePoint.OPEN_BRACKET) {
                        break;
                    }
                    return {
                        type: 'opener',
                        startIndex: i,
                        endIndex: i + 2,
                        brackets: [],
                    };
                }
                case AsciiCodePoint.CLOSE_BRACKET: {
                    const delimiter = {
                        type: 'closer',
                        startIndex: i,
                        endIndex: i + 1,
                        brackets: [],
                    };
                    if (i + 1 >= endIndex ||
                        nodePoints[i + 1].codePoint !== AsciiCodePoint.OPEN_BRACKET) {
                        return delimiter;
                    }
                    const result = eatLinkLabel(nodePoints, i + 1, endIndex);
                    if (result.nextIndex < 0)
                        return delimiter;
                    if (result.labelAndIdentifier == null) {
                        return {
                            type: 'closer',
                            startIndex: i,
                            endIndex: result.nextIndex,
                            brackets: [
                                {
                                    startIndex: i + 1,
                                    endIndex: result.nextIndex,
                                },
                            ],
                        };
                    }
                    return {
                        type: 'closer',
                        startIndex: i,
                        endIndex: result.nextIndex,
                        brackets: [
                            {
                                startIndex: i + 1,
                                endIndex: result.nextIndex,
                                label: result.labelAndIdentifier.label,
                                identifier: result.labelAndIdentifier.identifier,
                            },
                        ],
                    };
                }
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints) {
        const balancedBracketsStatus = checkBalancedBracketsStatus(openerDelimiter.endIndex, closerDelimiter.startIndex, internalTokens, nodePoints);
        switch (balancedBracketsStatus) {
            case -1:
                return { paired: false, opener: false, closer: true };
            case 0:
                return { paired: true };
            case 1:
                return { paired: false, opener: true, closer: false };
        }
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const bracket = closerDelimiter.brackets[0];
        if (bracket != null && bracket.identifier != null) {
            if (api.hasDefinition(bracket.identifier)) {
                const token = {
                    nodeType: ImageReferenceType,
                    startIndex: openerDelimiter.startIndex,
                    endIndex: bracket.endIndex,
                    referenceType: 'full',
                    label: bracket.label,
                    identifier: bracket.identifier,
                    children: api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints),
                };
                return { tokens: [token] };
            }
            return { tokens: internalTokens };
        }
        const { nextIndex, labelAndIdentifier } = eatLinkLabel(nodePoints, openerDelimiter.endIndex - 1, closerDelimiter.startIndex + 1);
        if (nextIndex === closerDelimiter.startIndex + 1 &&
            labelAndIdentifier != null &&
            api.hasDefinition(labelAndIdentifier.identifier)) {
            const token = {
                nodeType: ImageReferenceType,
                startIndex: openerDelimiter.startIndex,
                endIndex: closerDelimiter.endIndex,
                referenceType: bracket == null ? 'shortcut' : 'collapsed',
                label: labelAndIdentifier.label,
                identifier: labelAndIdentifier.identifier,
                children: api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints),
            };
            return { tokens: [token] };
        }
        return { tokens: internalTokens };
    }
    processToken(token, children) {
        const { identifier, label, referenceType } = token;
        const alt = calcImageAlt(children || []);
        const result = {
            type: ImageReferenceType,
            identifier,
            label,
            referenceType,
            alt,
        };
        return result;
    }
}

const uniqueName$b = '@yozora/tokenizer-indented-code';

class IndentedCodeTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$b,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces < 4)
            return null;
        const { nodePoints, startIndex, firstNonWhitespaceIndex, endIndex } = line;
        let firstIndex = startIndex + 4;
        if (nodePoints[startIndex].codePoint === AsciiCodePoint.SPACE &&
            nodePoints[startIndex + 3].codePoint === VirtualCodePoint.SPACE) {
            let i = startIndex + 1;
            for (; i < firstNonWhitespaceIndex; ++i) {
                if (nodePoints[i].codePoint === VirtualCodePoint.SPACE)
                    break;
            }
            firstIndex = i + 4;
        }
        const nextIndex = endIndex;
        const token = {
            nodeType: CodeType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            lines: [
                {
                    nodePoints,
                    startIndex: firstIndex,
                    endIndex,
                    firstNonWhitespaceIndex,
                    countOfPrecedeSpaces: line.countOfPrecedeSpaces - (firstIndex - startIndex),
                },
            ],
        };
        return { token, nextIndex };
    }
    eatContinuationText(line, token) {
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces, } = line;
        if (countOfPrecedeSpaces < 4 && firstNonWhitespaceIndex < endIndex)
            return { status: 'notMatched' };
        const firstIndex = Math.min(endIndex - 1, startIndex + 4);
        token.lines.push({
            nodePoints,
            startIndex: firstIndex,
            endIndex,
            firstNonWhitespaceIndex,
            countOfPrecedeSpaces: countOfPrecedeSpaces - (firstIndex - startIndex),
        });
        return { status: 'opening', nextIndex: endIndex };
    }
    parseBlock(token) {
        const { lines } = token;
        let startLineIndex = 0, endLineIndex = lines.length;
        for (; startLineIndex < endLineIndex; ++startLineIndex) {
            const line = lines[startLineIndex];
            if (line.firstNonWhitespaceIndex < line.endIndex)
                break;
        }
        for (; startLineIndex < endLineIndex; --endLineIndex) {
            const line = lines[endLineIndex - 1];
            if (line.firstNonWhitespaceIndex < line.endIndex)
                break;
        }
        const contents = mergeContentLinesFaithfully(lines, startLineIndex, endLineIndex);
        const node = {
            type: CodeType,
            value: calcStringFromNodePoints(contents),
        };
        return node;
    }
}

const uniqueName$a = '@yozora/tokenizer-inline-code';

class InlineCodeTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$a,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
    }
    *findDelimiter(nodePoints, api) {
        const blockStartIndex = api.getBlockStartIndex();
        const blockEndIndex = api.getBlockEndIndex();
        const potentialDelimiters = [];
        for (let i = blockStartIndex; i < blockEndIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH: {
                    i += 1;
                    if (i < blockEndIndex &&
                        nodePoints[i].codePoint === AsciiCodePoint.BACKTICK) {
                        const j = eatOptionalCharacters(nodePoints, i + 1, blockEndIndex, AsciiCodePoint.BACKTICK);
                        potentialDelimiters.push({
                            type: 'closer',
                            startIndex: i,
                            endIndex: j,
                        });
                        if (j > i + 1) {
                            potentialDelimiters.push({
                                type: 'opener',
                                startIndex: i + 1,
                                endIndex: j,
                            });
                        }
                        i = j - 1;
                    }
                    break;
                }
                case AsciiCodePoint.BACKTICK: {
                    const _startIndex = i;
                    const endIndexOfBacktick = eatOptionalCharacters(nodePoints, i + 1, blockEndIndex, c);
                    potentialDelimiters.push({
                        type: 'both',
                        startIndex: _startIndex,
                        endIndex: endIndexOfBacktick,
                    });
                    i = endIndexOfBacktick - 1;
                    break;
                }
            }
        }
        let pIndex = 0;
        let lastEndIndex = -1;
        let delimiter = null;
        while (pIndex < potentialDelimiters.length) {
            const [startIndex, endIndex] = yield delimiter;
            if (lastEndIndex === endIndex) {
                if (delimiter == null || delimiter.startIndex >= startIndex)
                    continue;
            }
            lastEndIndex = endIndex;
            let openerDelimiter = null;
            let closerDelimiter = null;
            for (; pIndex < potentialDelimiters.length; ++pIndex) {
                for (; pIndex < potentialDelimiters.length; ++pIndex) {
                    const delimiter = potentialDelimiters[pIndex];
                    if (delimiter.startIndex >= startIndex && delimiter.type !== 'closer')
                        break;
                }
                if (pIndex + 1 >= potentialDelimiters.length)
                    return;
                openerDelimiter = potentialDelimiters[pIndex];
                const thickness = openerDelimiter.endIndex - openerDelimiter.startIndex;
                for (let i = pIndex + 1; i < potentialDelimiters.length; ++i) {
                    const delimiter = potentialDelimiters[i];
                    if (delimiter.type !== 'opener' &&
                        delimiter.endIndex - delimiter.startIndex === thickness) {
                        closerDelimiter = delimiter;
                        break;
                    }
                }
                if (closerDelimiter != null)
                    break;
            }
            if (closerDelimiter == null)
                return;
            delimiter = {
                type: 'full',
                startIndex: openerDelimiter.startIndex,
                endIndex: closerDelimiter.endIndex,
                thickness: closerDelimiter.endIndex - closerDelimiter.startIndex,
            };
        }
    }
    _findDelimiter() {
        return null;
    }
    processSingleDelimiter(delimiter) {
        const token = {
            nodeType: InlineCodeType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
            thickness: delimiter.thickness,
        };
        return [token];
    }
    processToken(token, children, nodePoints) {
        let startIndex = token.startIndex + token.thickness;
        let endIndex = token.endIndex - token.thickness;
        let isAllSpace = true;
        for (let i = startIndex; i < endIndex; ++i) {
            if (isSpaceLike(nodePoints[i].codePoint))
                continue;
            isAllSpace = false;
            break;
        }
        if (!isAllSpace && startIndex + 2 < endIndex) {
            const firstCharacter = nodePoints[startIndex].codePoint;
            const lastCharacter = nodePoints[endIndex - 1].codePoint;
            if (isSpaceLike(firstCharacter) && isSpaceLike(lastCharacter)) {
                startIndex += 1;
                endIndex -= 1;
            }
        }
        const result = {
            type: InlineCodeType,
            value: calcStringFromNodePoints(nodePoints, startIndex, endIndex).replace(/\n/g, ' '),
        };
        return result;
    }
}

const uniqueName$9 = '@yozora/tokenizer-inline-math';

class InlineMathTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b, _c;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$9,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.backtickRequired = (_c = props.backtickRequired) !== null && _c !== void 0 ? _c : true;
    }
    *findDelimiter(nodePoints, api) {
        const blockStartIndex = api.getBlockStartIndex();
        const blockEndIndex = api.getBlockEndIndex();
        const potentialDelimiters = [];
        for (let i = blockStartIndex; i < blockEndIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.BACKTICK: {
                    const _startIndex = i;
                    i = eatOptionalCharacters(nodePoints, i + 1, blockEndIndex, AsciiCodePoint.BACKTICK);
                    if (i >= blockEndIndex ||
                        nodePoints[i].codePoint !== AsciiCodePoint.DOLLAR_SIGN) {
                        break;
                    }
                    const delimiter = {
                        type: 'opener',
                        startIndex: _startIndex,
                        endIndex: i + 1,
                    };
                    potentialDelimiters.push(delimiter);
                    break;
                }
                case AsciiCodePoint.DOLLAR_SIGN: {
                    const _startIndex = i;
                    i = eatOptionalCharacters(nodePoints, i + 1, blockEndIndex, AsciiCodePoint.BACKTICK);
                    if (i < blockEndIndex &&
                        nodePoints[i].codePoint === AsciiCodePoint.DOLLAR_SIGN) {
                        break;
                    }
                    const thickness = i - _startIndex;
                    if (thickness <= 1) {
                        if (this.backtickRequired)
                            break;
                        const delimiter = {
                            type: 'both',
                            startIndex: _startIndex,
                            endIndex: i,
                        };
                        potentialDelimiters.push(delimiter);
                        break;
                    }
                    const delimiter = {
                        type: 'closer',
                        startIndex: _startIndex,
                        endIndex: i,
                    };
                    potentialDelimiters.push(delimiter);
                    i -= 1;
                    break;
                }
            }
        }
        let pIndex = 0;
        let lastEndIndex = -1;
        let delimiter = null;
        while (pIndex < potentialDelimiters.length) {
            const [startIndex, endIndex] = yield delimiter;
            if (lastEndIndex === endIndex) {
                if (delimiter == null || delimiter.startIndex >= startIndex)
                    continue;
            }
            lastEndIndex = endIndex;
            let openerDelimiter = null;
            let closerDelimiter = null;
            for (; pIndex < potentialDelimiters.length; ++pIndex) {
                for (; pIndex < potentialDelimiters.length; ++pIndex) {
                    const delimiter = potentialDelimiters[pIndex];
                    if (delimiter.startIndex >= startIndex && delimiter.type !== 'closer')
                        break;
                }
                if (pIndex + 1 >= potentialDelimiters.length)
                    break;
                openerDelimiter = potentialDelimiters[pIndex];
                const thickness = openerDelimiter.endIndex - openerDelimiter.startIndex;
                for (let i = pIndex + 1; i < potentialDelimiters.length; ++i) {
                    const delimiter = potentialDelimiters[i];
                    if (delimiter.type !== 'opener' &&
                        delimiter.endIndex - delimiter.startIndex === thickness) {
                        closerDelimiter = delimiter;
                        break;
                    }
                }
                if (closerDelimiter != null)
                    break;
            }
            if (closerDelimiter == null)
                return;
            delimiter = {
                type: 'full',
                startIndex: openerDelimiter.startIndex,
                endIndex: closerDelimiter.endIndex,
                thickness: closerDelimiter.endIndex - closerDelimiter.startIndex,
            };
        }
    }
    _findDelimiter() {
        return null;
    }
    processSingleDelimiter(delimiter) {
        const token = {
            nodeType: InlineMathType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
            thickness: delimiter.thickness,
        };
        return [token];
    }
    processToken(token, children, nodePoints) {
        let startIndex = token.startIndex + token.thickness;
        let endIndex = token.endIndex - token.thickness;
        let isAllSpace = true;
        for (let i = startIndex; i < endIndex; ++i) {
            if (isSpaceLike(nodePoints[i].codePoint))
                continue;
            isAllSpace = false;
            break;
        }
        if (!isAllSpace && startIndex + 2 < endIndex) {
            const firstCharacter = nodePoints[startIndex].codePoint;
            const lastCharacter = nodePoints[endIndex - 1].codePoint;
            if (isSpaceLike(firstCharacter) && isSpaceLike(lastCharacter)) {
                startIndex += 1;
                endIndex -= 1;
            }
        }
        const result = {
            type: InlineMathType,
            value: calcStringFromNodePoints(nodePoints, startIndex, endIndex).replace(/\n/, ' '),
        };
        return result;
    }
}

const uniqueName$8 = '@yozora/tokenizer-link-reference';

class LinkReferenceTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$8,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.LINKS,
        });
    }
    _findDelimiter(startIndex, endIndex, nodePoints) {
        for (let i = startIndex; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            switch (c) {
                case AsciiCodePoint.BACKSLASH:
                    i += 1;
                    break;
                case AsciiCodePoint.OPEN_BRACKET: {
                    const brackets = [];
                    const delimiter = {
                        type: 'opener',
                        startIndex: i,
                        endIndex: i + 1,
                        brackets,
                    };
                    const result1 = eatLinkLabel(nodePoints, i, endIndex);
                    if (result1.nextIndex < 0)
                        return delimiter;
                    if (result1.labelAndIdentifier == null) {
                        i = result1.nextIndex - 1;
                        break;
                    }
                    brackets.push({
                        startIndex: i,
                        endIndex: result1.nextIndex,
                        label: result1.labelAndIdentifier.label,
                        identifier: result1.labelAndIdentifier.identifier,
                    });
                    for (i = result1.nextIndex; i < endIndex;) {
                        if (nodePoints[i].codePoint !== AsciiCodePoint.OPEN_BRACKET)
                            break;
                        const { labelAndIdentifier, nextIndex } = eatLinkLabel(nodePoints, i, endIndex);
                        if (nextIndex === -1) {
                            delimiter.type = 'opener';
                            delimiter.endIndex = i + 1;
                            return delimiter;
                        }
                        const bracket = {
                            startIndex: i,
                            endIndex: nextIndex,
                        };
                        delimiter.type = 'full';
                        delimiter.endIndex = nextIndex;
                        brackets.push(bracket);
                        if (labelAndIdentifier == null)
                            break;
                        bracket.label = labelAndIdentifier.label;
                        bracket.identifier = labelAndIdentifier.identifier;
                        i = nextIndex;
                    }
                    return delimiter;
                }
                case AsciiCodePoint.CLOSE_BRACKET: {
                    if (i + 1 >= endIndex ||
                        nodePoints[i + 1].codePoint !== AsciiCodePoint.OPEN_BRACKET) {
                        break;
                    }
                    const result1 = eatLinkLabel(nodePoints, i + 1, endIndex);
                    if (result1.nextIndex === -1) {
                        return {
                            type: 'opener',
                            startIndex: i + 1,
                            endIndex: i + 2,
                            brackets: [],
                        };
                    }
                    if (result1.labelAndIdentifier == null) {
                        i = result1.nextIndex - 1;
                        break;
                    }
                    const brackets = [
                        {
                            startIndex: i + 1,
                            endIndex: result1.nextIndex,
                            label: result1.labelAndIdentifier.label,
                            identifier: result1.labelAndIdentifier.identifier,
                        },
                    ];
                    const delimiter = {
                        type: 'closer',
                        startIndex: i,
                        endIndex: result1.nextIndex,
                        brackets,
                    };
                    for (i = result1.nextIndex; i < endIndex;) {
                        if (nodePoints[i].codePoint !== AsciiCodePoint.OPEN_BRACKET)
                            break;
                        const { labelAndIdentifier, nextIndex } = eatLinkLabel(nodePoints, i, endIndex);
                        if (nextIndex === -1) {
                            delimiter.type = 'both';
                            delimiter.endIndex = i + 1;
                            return delimiter;
                        }
                        const bracket = {
                            startIndex: i,
                            endIndex: nextIndex,
                        };
                        delimiter.type = 'full';
                        delimiter.endIndex = nextIndex;
                        brackets.push(bracket);
                        if (labelAndIdentifier == null)
                            break;
                        bracket.label = labelAndIdentifier.label;
                        bracket.identifier = labelAndIdentifier.identifier;
                        i = nextIndex;
                    }
                    return delimiter;
                }
            }
        }
        return null;
    }
    isDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const hasInternalLinkToken = internalTokens.find(isLinkToken) != null;
        if (hasInternalLinkToken) {
            return { paired: false, opener: false, closer: false };
        }
        const balancedBracketsStatus = checkBalancedBracketsStatus(openerDelimiter.endIndex, closerDelimiter.startIndex, internalTokens, nodePoints);
        switch (balancedBracketsStatus) {
            case -1:
                return { paired: false, opener: false, closer: true };
            case 0: {
                const bracket = closerDelimiter.brackets[0];
                if (bracket == null ||
                    bracket.identifier == null ||
                    !api.hasDefinition(bracket.identifier)) {
                    return { paired: false, opener: false, closer: false };
                }
                return { paired: true };
            }
            case 1: {
                return { paired: false, opener: true, closer: false };
            }
        }
    }
    processDelimiterPair(openerDelimiter, closerDelimiter, internalTokens, nodePoints, api) {
        const tokens = this.processSingleDelimiter(openerDelimiter, nodePoints, api);
        const [bracket, ...brackets] = closerDelimiter.brackets;
        tokens.push({
            nodeType: LinkReferenceType,
            startIndex: openerDelimiter.endIndex - 1,
            endIndex: bracket.endIndex,
            referenceType: 'full',
            label: bracket.label,
            identifier: bracket.identifier,
            children: api.resolveInternalTokens(internalTokens, openerDelimiter.endIndex, closerDelimiter.startIndex, nodePoints),
        });
        return {
            tokens,
            remainCloserDelimiter: {
                type: closerDelimiter.type === 'both' ? 'opener' : 'full',
                startIndex: bracket.endIndex,
                endIndex: closerDelimiter.endIndex,
                brackets,
            },
        };
    }
    processSingleDelimiter(delimiter, nodePoints, api) {
        const tokens = [];
        const brackets = delimiter.brackets;
        if (brackets.length <= 0)
            return tokens;
        let bracketIndex = 0;
        let lastBracketIndex = -1;
        for (; bracketIndex < brackets.length; ++bracketIndex) {
            let bracket = null;
            for (; bracketIndex < brackets.length; ++bracketIndex) {
                bracket = brackets[bracketIndex];
                if (bracket.identifier != null && api.hasDefinition(bracket.identifier))
                    break;
            }
            if (bracket == null || bracketIndex >= brackets.length)
                break;
            if (lastBracketIndex + 1 < bracketIndex) {
                const bracket0 = brackets[bracketIndex - 1];
                tokens.push({
                    nodeType: LinkReferenceType,
                    startIndex: bracket0.startIndex,
                    endIndex: bracket.endIndex,
                    referenceType: 'full',
                    label: bracket.label,
                    identifier: bracket.identifier,
                    children: api.resolveInternalTokens([], bracket0.startIndex + 1, bracket0.endIndex - 1, nodePoints),
                });
                lastBracketIndex = bracketIndex;
                continue;
            }
            if (bracketIndex + 1 === brackets.length) {
                tokens.push({
                    nodeType: LinkReferenceType,
                    startIndex: bracket.startIndex,
                    endIndex: bracket.endIndex,
                    referenceType: 'shortcut',
                    label: bracket.label,
                    identifier: bracket.identifier,
                    children: api.resolveInternalTokens([], bracket.startIndex + 1, bracket.endIndex - 1, nodePoints),
                });
                break;
            }
            if (bracketIndex + 1 < brackets.length &&
                brackets[bracketIndex + 1].identifier == null) {
                const bracket1 = brackets[bracketIndex + 1];
                tokens.push({
                    nodeType: LinkReferenceType,
                    startIndex: bracket.startIndex,
                    endIndex: bracket1.endIndex,
                    referenceType: 'collapsed',
                    label: bracket.label,
                    identifier: bracket.identifier,
                    children: api.resolveInternalTokens([], bracket.startIndex + 1, bracket.endIndex - 1, nodePoints),
                });
                break;
            }
        }
        return tokens;
    }
    processToken(token, children) {
        const { identifier, label, referenceType } = token;
        const result = {
            type: LinkReferenceType,
            identifier,
            label,
            referenceType,
            children: children || [],
        };
        return result;
    }
}

const uniqueName$7 = '@yozora/tokenizer-list';

class ListTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$7,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_BLOCK,
        });
        this.isContainingBlock = true;
    }
    transformMatch(tokens, api) {
        const results = [];
        let listItems = [];
        const resolveList = () => {
            if (listItems.length <= 0)
                return;
            let spread = listItems.some((item) => {
                if (item.children == null || item.children.length <= 1)
                    return false;
                let previousPosition = item.children[0].position;
                for (let j = 1; j < item.children.length; ++j) {
                    const currentPosition = item.children[j].position;
                    if (previousPosition.end.line + 1 < currentPosition.start.line) {
                        return true;
                    }
                    previousPosition = currentPosition;
                }
                return false;
            });
            if (!spread && listItems.length > 1) {
                let previousItem = listItems[0];
                for (let i = 1; i < listItems.length; ++i) {
                    const currentItem = listItems[i];
                    if (previousItem.position.end.line + 1 <
                        currentItem.position.start.line) {
                        spread = true;
                        break;
                    }
                    previousItem = currentItem;
                }
            }
            const list = {
                _tokenizer: this.name,
                nodeType: ListType,
                ordered: listItems[0].ordered,
                orderType: listItems[0].orderType,
                start: listItems[0].order,
                marker: listItems[0].marker,
                spread,
                position: {
                    start: Object.assign({}, listItems[0].position.start),
                    end: Object.assign({}, listItems[listItems.length - 1].position.end),
                },
                children: [...listItems],
            };
            results.push(list);
            if (list.spread)
                return;
            for (const listItem of list.children) {
                if (listItem.children == null || listItem.children.length <= 0)
                    continue;
                listItem.children = listItem.children.map(child => {
                    const lines = api.extractPhrasingLines(child);
                    if (lines == null)
                        return child;
                    const token = api.buildPhrasingContentToken(lines);
                    return token !== null && token !== void 0 ? token : child;
                });
            }
        };
        for (let i = 0; i < tokens.length; ++i) {
            const originalToken = tokens[i];
            if (originalToken.nodeType !== ListItemType) {
                resolveList();
                listItems = [];
                results.push(originalToken);
                continue;
            }
            if (listItems.length <= 0 ||
                listItems[0].ordered !== originalToken.ordered ||
                listItems[0].orderType !== originalToken.orderType ||
                listItems[0].marker !== originalToken.marker) {
                resolveList();
                listItems = [originalToken];
                continue;
            }
            listItems.push(originalToken);
        }
        resolveList();
        return results;
    }
    parseBlock(token, children) {
        const node = {
            type: ListType,
            ordered: token.ordered,
            orderType: token.orderType,
            start: token.start,
            marker: token.marker,
            spread: token.spread,
            children: (children || []),
        };
        return node;
    }
}

const uniqueName$6 = '@yozora/tokenizer-list-item';

class ListItemTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b, _c, _d;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$6,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.CONTAINING_BLOCK,
        });
        this.isContainingBlock = true;
        this.enableTaskListItem = (_c = props.enableTaskListItem) !== null && _c !== void 0 ? _c : false;
        this.emptyItemCouldNotInterruptedTypes =
            (_d = props.emptyItemCouldNotInterruptedTypes) !== null && _d !== void 0 ? _d : [
                PhrasingContentType,
                ParagraphType,
            ];
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex)
            return null;
        let ordered = false;
        let marker = null;
        let orderType;
        let order;
        let i = firstNonWhitespaceIndex;
        let c = nodePoints[i].codePoint;
        if (i + 1 < endIndex) {
            const c0 = c;
            if (isAsciiDigitCharacter(c0)) {
                orderType = '1';
                let v = c0 - AsciiCodePoint.DIGIT0;
                for (i += 1; i < endIndex; ++i) {
                    c = nodePoints[i].codePoint;
                    if (!isAsciiDigitCharacter(c))
                        break;
                    v = v * 10 + c - AsciiCodePoint.DIGIT0;
                }
                order = v;
                orderType = '1';
            }
            else if (isAsciiLowerLetter(c0)) {
                i += 1;
                c = nodePoints[i].codePoint;
                order = c0 - AsciiCodePoint.LOWERCASE_A + 1;
                orderType = 'a';
            }
            else if (isAsciiUpperLetter(c0)) {
                i += 1;
                c = nodePoints[i].codePoint;
                order = c0 - AsciiCodePoint.UPPERCASE_A + 1;
                orderType = 'A';
            }
            if (i > firstNonWhitespaceIndex &&
                i - firstNonWhitespaceIndex <= 9 &&
                (c === AsciiCodePoint.DOT || c === AsciiCodePoint.CLOSE_PARENTHESIS)) {
                i += 1;
                ordered = true;
                marker = c;
            }
        }
        if (!ordered) {
            if (c === AsciiCodePoint.PLUS_SIGN ||
                c === AsciiCodePoint.MINUS_SIGN ||
                c === AsciiCodePoint.ASTERISK) {
                i += 1;
                marker = c;
            }
        }
        if (marker == null)
            return null;
        let countOfSpaces = 0, nextIndex = i;
        if (nextIndex < endIndex) {
            c = nodePoints[nextIndex].codePoint;
            if (c === VirtualCodePoint.SPACE)
                nextIndex += 1;
        }
        for (; nextIndex < endIndex; ++nextIndex) {
            c = nodePoints[nextIndex].codePoint;
            if (!isSpaceCharacter(c))
                break;
            countOfSpaces += 1;
        }
        if (countOfSpaces > 4) {
            nextIndex -= countOfSpaces - 1;
            countOfSpaces = 1;
        }
        if (countOfSpaces === 0 &&
            nextIndex < endIndex &&
            c !== VirtualCodePoint.LINE_END)
            return null;
        const countOfTopBlankLine = c === VirtualCodePoint.LINE_END ? 1 : -1;
        if (c === VirtualCodePoint.LINE_END) {
            nextIndex -= countOfSpaces - 1;
            countOfSpaces = 1;
        }
        const indent = i - startIndex + countOfSpaces;
        let status = null;
        if (this.enableTaskListItem) {
            ({ status, nextIndex } = this.eatTaskStatus(nodePoints, nextIndex, endIndex));
        }
        const token = {
            nodeType: ListItemType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            ordered,
            marker,
            orderType: ordered ? orderType : undefined,
            order: ordered ? order : undefined,
            indent,
            countOfTopBlankLine,
            children: [],
        };
        if (status != null)
            token.status = status;
        return { token, nextIndex };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null)
            return null;
        const { token, nextIndex } = result;
        if (this.emptyItemCouldNotInterruptedTypes.includes(prevSiblingToken.nodeType)) {
            if (token.indent === line.endIndex - line.startIndex) {
                return null;
            }
            if (token.ordered && token.order !== 1)
                return null;
        }
        return { token, nextIndex, remainingSibling: prevSiblingToken };
    }
    eatContinuationText(line, token) {
        const { startIndex, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces: indent, } = line;
        if (firstNonWhitespaceIndex < endIndex && indent < token.indent) {
            return { status: 'notMatched' };
        }
        if (firstNonWhitespaceIndex >= endIndex) {
            if (token.countOfTopBlankLine >= 0) {
                token.countOfTopBlankLine += 1;
                if (token.countOfTopBlankLine > 1) {
                    return { status: 'notMatched' };
                }
            }
        }
        else {
            token.countOfTopBlankLine = -1;
        }
        const nextIndex = Math.min(startIndex + token.indent, endIndex - 1);
        return { status: 'opening', nextIndex };
    }
    parseBlock(token, children) {
        const node = {
            type: ListItemType,
            status: token.status,
            children: children || [],
        };
        return node;
    }
    eatTaskStatus(nodePoints, startIndex, endIndex) {
        let i = startIndex;
        for (; i < endIndex; ++i) {
            const c = nodePoints[i].codePoint;
            if (!isSpaceCharacter(c))
                break;
        }
        if (i + 3 >= endIndex ||
            nodePoints[i].codePoint !== AsciiCodePoint.OPEN_BRACKET ||
            nodePoints[i + 2].codePoint !== AsciiCodePoint.CLOSE_BRACKET ||
            !isWhitespaceCharacter(nodePoints[i + 3].codePoint))
            return { status: null, nextIndex: startIndex };
        let status;
        const c = nodePoints[i + 1].codePoint;
        switch (c) {
            case AsciiCodePoint.SPACE:
                status = TaskStatus.TODO;
                break;
            case AsciiCodePoint.MINUS_SIGN:
                status = TaskStatus.DOING;
                break;
            case AsciiCodePoint.LOWERCASE_X:
            case AsciiCodePoint.UPPERCASE_X:
                status = TaskStatus.DONE;
                break;
            default:
                return { status: null, nextIndex: startIndex };
        }
        return { status, nextIndex: i + 4 };
    }
}

const uniqueName$5 = '@yozora/tokenizer-math';

class MathTokenizer extends FencedBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$5,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.FENCED_BLOCK,
            nodeType: MathType,
            markers: [AsciiCodePoint.DOLLAR_SIGN],
            markersRequired: 2,
        });
        this.isContainingBlock = true;
    }
    eatOpener(line) {
        const result = super.eatOpener(line);
        if (result == null)
            return null;
        const { token } = result;
        const [lft, rht] = calcTrimBoundaryOfCodePoints(token.infoString);
        if (lft >= rht)
            return result;
        let i = rht - 1;
        for (; i >= lft; --i) {
            const c = token.infoString[i].codePoint;
            if (!this.markers.includes(c))
                break;
        }
        const countOfTailingMarker = rht - i - 1;
        if (countOfTailingMarker != token.markerCount)
            return null;
        const mathToken = Object.assign(Object.assign({}, token), { infoString: [], lines: [
                {
                    nodePoints: token.infoString,
                    startIndex: 0,
                    endIndex: rht - countOfTailingMarker,
                    firstNonWhitespaceIndex: lft,
                    countOfPrecedeSpaces: 0,
                },
            ] });
        return { token: mathToken, nextIndex: line.endIndex, saturated: true };
    }
    parseBlock(token) {
        const contents = mergeContentLinesFaithfully(token.lines);
        const node = {
            type: MathType,
            value: calcStringFromNodePoints(contents),
        };
        return node;
    }
}

const uniqueName$4 = '@yozora/tokenizer-paragraph';

class ParagraphTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$4,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.FALLBACK,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        const { endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex)
            return null;
        const lines = [line];
        const position = calcPositionFromPhrasingContentLines(lines);
        const token = {
            nodeType: ParagraphType,
            position,
            lines,
        };
        return { token, nextIndex: endIndex };
    }
    eatContinuationText(line, token) {
        const { endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex) {
            return { status: 'notMatched' };
        }
        token.lines.push(line);
        return { status: 'opening', nextIndex: endIndex };
    }
    eatLazyContinuationText(line, token) {
        const result = this.eatContinuationText(line, token);
        return result;
    }
    parseBlock(token, children, api) {
        const phrasingContent = api.buildPhrasingContent(token.lines);
        if (phrasingContent == null)
            return null;
        const node = {
            type: ParagraphType,
            children: [phrasingContent],
        };
        return node;
    }
    extractPhrasingContentLines(token) {
        return token.lines;
    }
    buildBlockToken(_lines) {
        const lines = trimBlankLines(_lines);
        if (lines == null)
            return null;
        const position = calcPositionFromPhrasingContentLines(lines);
        const token = {
            _tokenizer: this.name,
            nodeType: ParagraphType,
            lines,
            position,
        };
        return token;
    }
}

const uniqueName$3 = '@yozora/tokenizer-setext-heading';

class SetextHeadingTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$3,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener() {
        return null;
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken, parentToken, api) {
        const { nodePoints, endIndex, firstNonWhitespaceIndex, countOfPrecedeSpaces, } = line;
        if (countOfPrecedeSpaces >= 4 || firstNonWhitespaceIndex >= endIndex)
            return null;
        let marker = null, hasPotentialInternalSpace = false;
        for (let i = firstNonWhitespaceIndex; i < endIndex; ++i) {
            const c = nodePoints[i];
            if (c.codePoint == VirtualCodePoint.LINE_END)
                break;
            if (isUnicodeWhitespaceCharacter(c.codePoint)) {
                hasPotentialInternalSpace = true;
                continue;
            }
            if (hasPotentialInternalSpace ||
                (c.codePoint !== AsciiCodePoint.EQUALS_SIGN &&
                    c.codePoint !== AsciiCodePoint.MINUS_SIGN) ||
                (marker != null && marker !== c.codePoint)) {
                marker = null;
                break;
            }
            marker = c.codePoint;
        }
        if (marker == null)
            return null;
        const lines = api.extractPhrasingLines(prevSiblingToken);
        if (lines == null)
            return null;
        const nextIndex = endIndex;
        const token = {
            nodeType: HeadingType,
            position: {
                start: calcStartYastNodePoint(lines[0].nodePoints, lines[0].startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            marker,
            lines,
        };
        return {
            token,
            nextIndex,
            saturated: true,
            remainingSibling: null,
        };
    }
    parseBlock(token, children, api) {
        let depth = 1;
        switch (token.marker) {
            case AsciiCodePoint.EQUALS_SIGN:
                depth = 1;
                break;
            case AsciiCodePoint.MINUS_SIGN:
                depth = 2;
                break;
        }
        const phrasingContent = api.buildPhrasingContent(token.lines);
        const node = {
            type: HeadingType,
            depth,
            children: phrasingContent == null ? [] : [phrasingContent],
        };
        return node;
    }
}

const uniqueName$2 = '@yozora/tokenizer-table';

class TableTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$2,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.INTERRUPTABLE_BLOCK,
        });
        this.isContainingBlock = false;
    }
    eatOpener() {
        return null;
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken, parentToken, api) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex >= endIndex)
            return null;
        const columns = [];
        let c = nodePoints[firstNonWhitespaceIndex].codePoint;
        let cIndex = c === AsciiCodePoint.VERTICAL_SLASH
            ? firstNonWhitespaceIndex + 1
            : firstNonWhitespaceIndex;
        for (; cIndex < endIndex;) {
            for (; cIndex < endIndex; ++cIndex) {
                c = nodePoints[cIndex].codePoint;
                if (!isWhitespaceCharacter(c))
                    break;
            }
            if (cIndex >= endIndex)
                break;
            let leftColon = false;
            if (c === AsciiCodePoint.COLON) {
                leftColon = true;
                cIndex += 1;
            }
            let hyphenCount = 0;
            for (; cIndex < endIndex; ++cIndex) {
                c = nodePoints[cIndex].codePoint;
                if (c !== AsciiCodePoint.MINUS_SIGN)
                    break;
                hyphenCount += 1;
            }
            if (hyphenCount <= 0)
                return null;
            let rightColon = false;
            if (cIndex < endIndex && c === AsciiCodePoint.COLON) {
                rightColon = true;
                cIndex += 1;
            }
            for (; cIndex < endIndex; ++cIndex) {
                c = nodePoints[cIndex].codePoint;
                if (isWhitespaceCharacter(c))
                    continue;
                if (c === AsciiCodePoint.VERTICAL_SLASH) {
                    cIndex += 1;
                    break;
                }
                return null;
            }
            let align = null;
            if (leftColon && rightColon)
                align = 'center';
            else if (leftColon)
                align = 'left';
            else if (rightColon)
                align = 'right';
            const column = { align };
            columns.push(column);
        }
        if (columns.length <= 0)
            return null;
        const lines = api.extractPhrasingLines(prevSiblingToken);
        if (lines == null || lines.length < 1)
            return null;
        let cellCount = 0, hasNonWhitespaceBeforePipe = false;
        const previousLine = lines[lines.length - 1];
        for (let pIndex = previousLine.startIndex; pIndex < previousLine.endIndex; ++pIndex) {
            const p = nodePoints[pIndex];
            if (isWhitespaceCharacter(p.codePoint))
                continue;
            if (p.codePoint === AsciiCodePoint.VERTICAL_SLASH) {
                if (hasNonWhitespaceBeforePipe || cellCount > 0)
                    cellCount += 1;
                hasNonWhitespaceBeforePipe = false;
                continue;
            }
            hasNonWhitespaceBeforePipe = true;
            if (p.codePoint === AsciiCodePoint.BACKSLASH)
                pIndex += 1;
        }
        if (hasNonWhitespaceBeforePipe && columns.length > 1)
            cellCount += 1;
        if (cellCount !== columns.length)
            return null;
        const row = this.calcTableRow(api, previousLine, columns);
        const nextIndex = endIndex;
        const token = {
            nodeType: TableType,
            position: {
                start: calcStartYastNodePoint(previousLine.nodePoints, previousLine.startIndex),
                end: calcEndYastNodePoint(nodePoints, nextIndex - 1),
            },
            columns,
            children: [row],
        };
        return {
            token,
            nextIndex,
            remainingSibling: api.rollbackPhrasingLines(lines.slice(0, lines.length - 1), prevSiblingToken),
        };
    }
    eatLazyContinuationText(line, token, parentToken, api) {
        if (line.firstNonWhitespaceIndex >= line.endIndex) {
            return { status: 'notMatched' };
        }
        const tableToken = token;
        const row = this.calcTableRow(api, line, tableToken.columns);
        if (row == null)
            return { status: 'notMatched' };
        tableToken.children.push(row);
        return { status: 'opening', nextIndex: line.endIndex };
    }
    parseBlock(token, children, api) {
        let node;
        switch (token.nodeType) {
            case TableType: {
                node = {
                    type: TableType,
                    columns: token.columns,
                    children: (children || []),
                };
                break;
            }
            case TableRowType: {
                node = {
                    type: TableRowType,
                    children: (children || []),
                };
                break;
            }
            case TableCellType: {
                node = {
                    type: TableCellType,
                    children: children,
                };
                for (const phrasingContent of node.children) {
                    if (phrasingContent.type !== PhrasingContentType)
                        continue;
                    const nextContents = [];
                    const endIndex = phrasingContent.contents.length;
                    for (let i = 0; i < endIndex; ++i) {
                        const p = phrasingContent.contents[i];
                        if (p.codePoint === AsciiCodePoint.BACKSLASH && i + 1 < endIndex) {
                            const q = phrasingContent.contents[i + 1];
                            if (q.codePoint !== AsciiCodePoint.VERTICAL_SLASH)
                                nextContents.push(p);
                            nextContents.push(q);
                            i += 1;
                            continue;
                        }
                        nextContents.push(p);
                    }
                    phrasingContent.contents = nextContents;
                }
                break;
            }
            default:
                return null;
        }
        return node;
    }
    calcTableColumn(nodePoints, currentLine, previousLine) {
        if (previousLine.firstNonWhitespaceIndex >= previousLine.endIndex) {
            return null;
        }
        if (currentLine.firstNonWhitespaceIndex - currentLine.startIndex >= 4)
            return null;
        const columns = [];
        let p = nodePoints[currentLine.firstNonWhitespaceIndex];
        let cIndex = p.codePoint === AsciiCodePoint.VERTICAL_SLASH
            ? currentLine.firstNonWhitespaceIndex + 1
            : currentLine.firstNonWhitespaceIndex;
        for (; cIndex < currentLine.endIndex;) {
            for (; cIndex < currentLine.endIndex; ++cIndex) {
                p = nodePoints[cIndex];
                if (!isWhitespaceCharacter(p.codePoint))
                    break;
            }
            if (cIndex >= currentLine.endIndex)
                break;
            let leftColon = false;
            if (p.codePoint === AsciiCodePoint.COLON) {
                leftColon = true;
                cIndex += 1;
            }
            let hyphenCount = 0;
            for (; cIndex < currentLine.endIndex; ++cIndex) {
                p = nodePoints[cIndex];
                if (p.codePoint !== AsciiCodePoint.MINUS_SIGN)
                    break;
                hyphenCount += 1;
            }
            if (hyphenCount <= 0)
                return null;
            let rightColon = false;
            if (cIndex < currentLine.endIndex &&
                p.codePoint === AsciiCodePoint.COLON) {
                rightColon = true;
                cIndex += 1;
            }
            for (; cIndex < currentLine.endIndex; ++cIndex) {
                p = nodePoints[cIndex];
                if (isWhitespaceCharacter(p.codePoint))
                    continue;
                if (p.codePoint === AsciiCodePoint.VERTICAL_SLASH) {
                    cIndex += 1;
                    break;
                }
                return null;
            }
            let align = null;
            if (leftColon && rightColon)
                align = 'center';
            else if (leftColon)
                align = 'left';
            else if (rightColon)
                align = 'right';
            const column = { align };
            columns.push(column);
        }
        if (columns.length <= 0)
            return null;
        let cellCount = 0, hasNonWhitespaceBeforePipe = false;
        for (let pIndex = previousLine.startIndex; pIndex < previousLine.endIndex; ++pIndex) {
            const p = nodePoints[pIndex];
            if (isWhitespaceCharacter(p.codePoint))
                continue;
            if (p.codePoint === AsciiCodePoint.VERTICAL_SLASH) {
                if (hasNonWhitespaceBeforePipe || cellCount > 0)
                    cellCount += 1;
                hasNonWhitespaceBeforePipe = false;
                continue;
            }
            hasNonWhitespaceBeforePipe = true;
            if (p.codePoint === AsciiCodePoint.BACKSLASH)
                pIndex += 1;
        }
        if (hasNonWhitespaceBeforePipe && columns.length > 1)
            cellCount += 1;
        if (cellCount !== columns.length)
            return null;
        return columns;
    }
    calcTableRow(api, line, columns) {
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        let p = nodePoints[firstNonWhitespaceIndex];
        let i = p.codePoint === AsciiCodePoint.VERTICAL_SLASH
            ? firstNonWhitespaceIndex + 1
            : firstNonWhitespaceIndex;
        const cells = [];
        for (; i < endIndex; i += 1) {
            for (; i < endIndex; ++i) {
                p = nodePoints[i];
                if (!isWhitespaceCharacter(p.codePoint))
                    break;
            }
            const startPoint = i < endIndex
                ? calcStartYastNodePoint(nodePoints, i)
                : calcEndYastNodePoint(nodePoints, endIndex - 1);
            const cellStartIndex = i, cellFirstNonWhitespaceIndex = i;
            for (; i < endIndex; ++i) {
                p = nodePoints[i];
                if (p.codePoint === AsciiCodePoint.BACKSLASH) {
                    i += 1;
                    continue;
                }
                if (p.codePoint === AsciiCodePoint.VERTICAL_SLASH)
                    break;
            }
            let cellEndIndex = i;
            for (; cellEndIndex > cellStartIndex; --cellEndIndex) {
                const p = nodePoints[cellEndIndex - 1];
                if (!isWhitespaceCharacter(p.codePoint))
                    break;
            }
            const endPoint = calcEndYastNodePoint(nodePoints, i - 1);
            const phrasingContent = cellFirstNonWhitespaceIndex >= cellEndIndex
                ? null
                : api.buildPhrasingContentToken([
                    {
                        nodePoints,
                        startIndex: cellStartIndex,
                        endIndex: cellEndIndex,
                        firstNonWhitespaceIndex: cellFirstNonWhitespaceIndex,
                        countOfPrecedeSpaces: cellFirstNonWhitespaceIndex - cellStartIndex,
                    },
                ]);
            const cell = {
                _tokenizer: this.name,
                nodeType: TableCellType,
                position: { start: startPoint, end: endPoint },
                children: phrasingContent == null ? [] : [phrasingContent],
            };
            cells.push(cell);
            if (cells.length >= columns.length)
                break;
        }
        const startPoint = calcStartYastNodePoint(nodePoints, startIndex);
        const endPoint = calcEndYastNodePoint(nodePoints, endIndex - 1);
        for (let c = cells.length; c < columns.length; ++c) {
            const cell = {
                _tokenizer: this.name,
                nodeType: TableCellType,
                position: { start: Object.assign({}, endPoint), end: Object.assign({}, endPoint) },
                children: [],
            };
            cells.push(cell);
        }
        const row = {
            _tokenizer: this.name,
            nodeType: TableRowType,
            position: { start: startPoint, end: endPoint },
            children: cells,
        };
        return row;
    }
}

const uniqueName$1 = '@yozora/tokenizer-text';

class TextTokenizer extends BaseInlineTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName$1,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.FALLBACK,
        });
    }
    _findDelimiter(startIndex, endIndex) {
        return {
            type: 'full',
            startIndex,
            endIndex,
        };
    }
    processSingleDelimiter(delimiter) {
        const token = {
            nodeType: TextType,
            startIndex: delimiter.startIndex,
            endIndex: delimiter.endIndex,
        };
        return [token];
    }
    findAndHandleDelimiter(startIndex, endIndex) {
        const token = {
            nodeType: TextType,
            startIndex,
            endIndex,
        };
        return token;
    }
    processToken(token, children, nodePoints) {
        const { startIndex, endIndex } = token;
        let value = calcEscapedStringFromNodePoints(nodePoints, startIndex, endIndex);
        value = value.replace(/[^\S\n]*\n[^\S\n]*/g, '\n');
        const result = { type: TextType, value };
        return result;
    }
}

const uniqueName = '@yozora/tokenizer-thematic-break';

class ThematicBreakTokenizer extends BaseBlockTokenizer {
    constructor(props = {}) {
        var _a, _b;
        super({
            name: (_a = props.name) !== null && _a !== void 0 ? _a : uniqueName,
            priority: (_b = props.priority) !== null && _b !== void 0 ? _b : TokenizerPriority.ATOMIC,
        });
        this.isContainingBlock = false;
    }
    eatOpener(line) {
        if (line.countOfPrecedeSpaces >= 4)
            return null;
        const { nodePoints, startIndex, endIndex, firstNonWhitespaceIndex } = line;
        if (firstNonWhitespaceIndex + 2 >= endIndex)
            return null;
        let marker;
        let count = 0;
        let continuous = true;
        let hasPotentialInternalSpace = false;
        for (let i = firstNonWhitespaceIndex; i < endIndex; ++i) {
            const c = nodePoints[i];
            if (isUnicodeWhitespaceCharacter(c.codePoint)) {
                hasPotentialInternalSpace = true;
                continue;
            }
            if (hasPotentialInternalSpace) {
                continuous = false;
            }
            switch (c.codePoint) {
                case AsciiCodePoint.MINUS_SIGN:
                case AsciiCodePoint.UNDERSCORE:
                case AsciiCodePoint.ASTERISK: {
                    if (count <= 0) {
                        marker = c.codePoint;
                        count += 1;
                        break;
                    }
                    if (c.codePoint !== marker)
                        return null;
                    count += 1;
                    break;
                }
                default:
                    return null;
            }
        }
        if (count < 3)
            return null;
        const token = {
            nodeType: ThematicBreakType,
            position: {
                start: calcStartYastNodePoint(nodePoints, startIndex),
                end: calcEndYastNodePoint(nodePoints, endIndex - 1),
            },
            marker: marker,
            continuous,
        };
        return { token, nextIndex: endIndex, saturated: true };
    }
    eatAndInterruptPreviousSibling(line, prevSiblingToken) {
        const result = this.eatOpener(line);
        if (result == null)
            return null;
        return {
            token: result.token,
            nextIndex: result.nextIndex,
            remainingSibling: prevSiblingToken,
        };
    }
    parseBlock() {
        const node = { type: ThematicBreakType };
        return node;
    }
}

class YozoraParser extends DefaultYastParser {
    constructor(props = {}) {
        super(props);
        if (this.blockFallbackTokenizer == null) {
            this.useBlockFallbackTokenizer(new ParagraphTokenizer());
        }
        if (this.inlineFallbackTokenizer == null) {
            this.useInlineFallbackTokenizer(new TextTokenizer());
        }
        this
            .useTokenizer(new IndentedCodeTokenizer())
            .useTokenizer(new HtmlBlockTokenizer())
            .useTokenizer(new SetextHeadingTokenizer())
            .useTokenizer(new ThematicBreakTokenizer())
            .useTokenizer(new BlockquoteTokenizer())
            .useTokenizer(new ListItemTokenizer({ enableTaskListItem: true }))
            .useTokenizer(new HeadingTokenizer())
            .useTokenizer(new FencedCodeTokenizer())
            .useTokenizer(new AdmonitionTokenizer())
            .useTokenizer(new MathTokenizer())
            .useTokenizer(new FootnoteDefinitionTokenizer())
            .useTokenizer(new DefinitionTokenizer())
            .useTokenizer(new EcmaImportTokenizer())
            .useTokenizer(new TableTokenizer())
            .useTokenizer(new ListTokenizer())
            .useTokenizer(new HtmlInlineTokenizer())
            .useTokenizer(new InlineMathTokenizer({ backtickRequired: false }))
            .useTokenizer(new InlineCodeTokenizer())
            .useTokenizer(new AutolinkTokenizer())
            .useTokenizer(new AutolinkExtensionTokenizer())
            .useTokenizer(new BreakTokenizer())
            .useTokenizer(new FootnoteTokenizer())
            .useTokenizer(new FootnoteReferenceTokenizer())
            .useTokenizer(new ImageTokenizer())
            .useTokenizer(new ImageReferenceTokenizer())
            .useTokenizer(new LinkTokenizer())
            .useTokenizer(new LinkReferenceTokenizer())
            .useTokenizer(new EmphasisTokenizer())
            .useTokenizer(new DeleteTokenizer());
    }
}

class GfmParser extends DefaultYastParser {
    constructor(props = {}) {
        super(props);
        if (this.blockFallbackTokenizer == null) {
            this.useBlockFallbackTokenizer(new ParagraphTokenizer());
        }
        if (this.inlineFallbackTokenizer == null) {
            this.useInlineFallbackTokenizer(new TextTokenizer());
        }
        this
            .useTokenizer(new IndentedCodeTokenizer())
            .useTokenizer(new HtmlBlockTokenizer())
            .useTokenizer(new SetextHeadingTokenizer())
            .useTokenizer(new ThematicBreakTokenizer())
            .useTokenizer(new BlockquoteTokenizer())
            .useTokenizer(new ListItemTokenizer({ enableTaskListItem: false }))
            .useTokenizer(new HeadingTokenizer())
            .useTokenizer(new FencedCodeTokenizer())
            .useTokenizer(new DefinitionTokenizer())
            .useTokenizer(new ListTokenizer())
            .useTokenizer(new HtmlInlineTokenizer())
            .useTokenizer(new InlineCodeTokenizer())
            .useTokenizer(new AutolinkTokenizer())
            .useTokenizer(new BreakTokenizer())
            .useTokenizer(new ImageTokenizer())
            .useTokenizer(new ImageReferenceTokenizer())
            .useTokenizer(new LinkTokenizer())
            .useTokenizer(new LinkReferenceTokenizer())
            .useTokenizer(new EmphasisTokenizer());
    }
}

class GfmExParser extends DefaultYastParser {
    constructor(props = {}) {
        super(props);
        if (this.blockFallbackTokenizer == null) {
            this.useBlockFallbackTokenizer(new ParagraphTokenizer());
        }
        if (this.inlineFallbackTokenizer == null) {
            this.useInlineFallbackTokenizer(new TextTokenizer());
        }
        this
            .useTokenizer(new IndentedCodeTokenizer())
            .useTokenizer(new HtmlBlockTokenizer())
            .useTokenizer(new SetextHeadingTokenizer())
            .useTokenizer(new ThematicBreakTokenizer())
            .useTokenizer(new BlockquoteTokenizer())
            .useTokenizer(new ListItemTokenizer({ enableTaskListItem: true }))
            .useTokenizer(new HeadingTokenizer())
            .useTokenizer(new FencedCodeTokenizer())
            .useTokenizer(new DefinitionTokenizer())
            .useTokenizer(new TableTokenizer())
            .useTokenizer(new ListTokenizer())
            .useTokenizer(new HtmlInlineTokenizer())
            .useTokenizer(new InlineCodeTokenizer())
            .useTokenizer(new AutolinkTokenizer())
            .useTokenizer(new AutolinkExtensionTokenizer())
            .useTokenizer(new BreakTokenizer())
            .useTokenizer(new ImageTokenizer())
            .useTokenizer(new ImageReferenceTokenizer())
            .useTokenizer(new LinkTokenizer())
            .useTokenizer(new LinkReferenceTokenizer())
            .useTokenizer(new EmphasisTokenizer())
            .useTokenizer(new DeleteTokenizer());
    }
}

var yozoraParser = new YozoraParser({
    defaultParseOptions: { shouldReservePosition: true }
});
var gfmParser = new GfmParser({
    defaultParseOptions: { shouldReservePosition: true }
});
var exGfmParser = new GfmExParser({
    defaultParseOptions: { shouldReservePosition: true }
});
var parsers = [
    {
        name: 'yozora',
        description: 'yozora parser',
        parse: yozoraParser.parse.bind(yozoraParser)
    },
    {
        name: 'gfm',
        description: 'GFM parser',
        parse: gfmParser.parse.bind(gfmParser)
    },
    {
        name: 'ex-gfm',
        description: 'GFM parser (extension)',
        parse: exGfmParser.parse.bind(exGfmParser)
    },
];

function process(code, parserName) {
    var parser = parsers.find(function (parser) { return parser.name === parserName; });
    if (parser == null)
        return null;
    return parser.parse(code);
}
self.addEventListener('message', function (e) {
    var _a = e.data, id = _a.id, data = _a.data;
    var code = data.code, parser = data.parser;
    var ast = process(code, parser);
    var result = { id: id, data: ast };
    self.postMessage(result, undefined);
}, false);
