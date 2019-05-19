var levelColors = ["#43ACBB", "#43BB52", "#F2CF15", "#D92F2F", "#C0319B", "img/kalni.jpeg", "img/pilseta.jpg", "img/ezerpilseta.jpeg"]
var scoreNeeded = [3, 6, 6, 7, 8, 8, 9, 10];
//var scoreNeeded = [2, 2, 2, 2, 2, 4, 4, 4];

var T = [
    [ // 1 
        ["vads", "vac", ""],
        ["skaists", "skaisc", ""],
        ["brilles", "briles", ""],
        ["poga", "puaga", ""],
        ["problēma", "proglēma", ""],
        ["varde", "varte", ""],
        ["banka", "bannka", ""],
        ["pie mums", "pie mumsīm", ""],
        ["pie jums", "pie jumsīm", ""],
        ["pats", "pac", ""]
    ],
    [ // 2
        ["gulta", "gūlta", ""],
        ["bulta", "būlta", ""],
        ["kūlenis", "kulenis", ""],
        ["kultenis", "kūltenis", ""],
        ["tualete", "tolete", ""],
        ["tualete", "toalete", ""],
        ["mežs", "mešs", ""],
        ["kods", "kots", ""],
        ["acis", "aces", ""],
        ["acis", "ači", ""],
        ["gulbis", "gūlbis", ""],
        ["saldējums", "saldeijums", ""],
        ["ledusskapis", "leduskapis", ""],
        ["finišs", "finišš", ""],
        ["oranžs", "orandžs", ""]
    ],
    [ // 3
        ["pie manis", "pie manīm", ""],
        ["pie tevis", "pie tevīm", ""],
        ["nulle", "nule", "Kas tas — 0 ?"],
        ["logs", "loks", "Stikla caurums māju sienās"],
        ["numurs", "nummurs", ""],
        ["treniņš", "trenniņš", ""],
        ["treneris", "trenneris", ""],
        ["jebkas", "jeb kas", ""],
        ["tikko", "tiko", ""],
        ["vislabākais", "viss labākais", ""],
        ["visskaistākais", "viskaistākais", ""],
        ["neesmu", "nēesmu", ""],
        ["divpadsmit", "divpatsmit", ""],
        ["manis dēļ", "dēļ manis", ""]
    ],
    [ // 4
        ["nākamais pasākums", "nākošais pasākums", ""],
        ["košs", "kožs", ""],
        ["pašreiz", "patreiz", ""],
        ["pēdiņas", "ķepiņas", 'Kā sauc šo — „” ?'],
        ["kaut kas", "kautkas", ""],
        ["nezin ko", "nezinko", ""],
        ["diez cik", "diezcik", ""],
        ["ikviens", "ik viens", ""],
        ["šajā mēnesī", "šai mēnesī", ""],
        ["piezvanīt", "pazvanīt", ""],
        ["varbūt jāpaēd", "var būt jāpaēd", ""],
        ["droši vien tā ir", "drošvien tā ir", ""],
        ["jāpaliek tepat", "jāpaliek te pat", ""],
        ["labs sāls", "laba sāls", ""],
        ["ģērbties", "ģerpties", ""]
    ],
    [ // 5
        ["pulkstenis", "pulkstens", ""],
        ["zibens", "zibenis", ""],
        ["suns", "sunis", ""],
        ["liktenis", "liktens", ""],
        ["asmens", "asmenis", ""],
        ["akmens", "akmenis", ""],
        ["ūdens", "ūdenis", ""],
        ["diezgan", "diez gan", ""],
        ["negribu vis", "negribu viss", ""],
        ["spirgts", "spirkts", ""],
        ["viņa zina", "viņa zin", ""],
        ["mēs zinām", "mēs zinam", ""],
        ["miljons", "milijons", ""],
        ["skrieniet šurp!", "skrienat šurp!", ""],
        ["nāciet te!", "nākiet te!", ""],
        ["apsveikuma kartīte", "apsveikuma kartiņa", ""]
    ],
    [ // 6
        ["Saeima", "Saima", ""],
        ["Saeima", "Saema", ""],
        ["programmēšana", "programēšana", ""],
        ["flomāsters", "flomasters", ""],
        ["spilgts", "spilkts", ""],
        ["nule", "nulle", '"tikko"'],
        ["eņģelis", "enģelis", ""],
        ["senči", "seņči", ""],
        ["peļķe", "pelķe", ""],
        ["eņģes", "enģes", ""],
        ["patstāvīgs cilvēks", "pastāvīgs cilvēks", ""],
        ["pastāvīgas sūdzības", "patstāvīgas sūdzības", ""],
        ["akmens siena", "akmeņa siena", ""],
        ["atvilktne", "atvilkne", ""],
        ["aizkari", "aizskari", ""],
        ["oriģināls", "orģināls", ""],
        ["it kā labi", "itkā labi", ""],
        ["piegrieztne", "piegriezne", ""]
    ],
    [ // 7
        ["Pēterim Liepam", "Pēterim Liepai", "Kam? (Pēteris Liepa)"],
        ["Tālim Eglem", "Tālim Eglei", "Kam? (Tālis Egle)"],
        ["Augustam Oglem", "Augustam Oglei", "Kam? (Augusts Ogle)"],
        ["Mikum Ulmanim", "Mikusam Ulmanim", "Kam? (Mikus Ulmanis)"],
        ["Ingusam Kalniņam", "Ingum Kalniņam", "Kam? (Inguss Kalniņš)"],
        ["mezdams", "mesdams", ""],
        ["nesdams", "nezdams", ""],
        ["vilkdams", "vilgdams", ""],
        ["vezdams", "vesdams", ""],
        ["laizdams", "laisdams", ""],
        ["vests", "vezts", ""],
        ["lauzts", "lausts", ""],
        ["lauzdams", "lausdams", ""],
        ["želatīns", "želantīns", ""],
        ["jāskatās filma", "jāskatās filmu", ""],
        ["ģenitīvs", "ģenetīvs", ""],
        ["deminutīvs", "diminutīvs", ""],
        ["aplaudēt", "applaudēt", ""],
        ["pulksten divos", "pulkstens divos", ""]
    ],
    [ // 8
        ["fotografēt", "fotogrāfēt", ""],
        ["fotogrāfija", "fotografija", ""],
        ["Maijai Bunkui", "Maijai Bunkai", "Kam? (Maija Bunkus)"],
        ["Annai Tellui", "Annai Tellusai", "Kam? (Anna Tellus)"],
        ["Jurim Garam", "Jurim Garajam", "Kam? (Juris Garš)"],
        ["dzelzceļš", "dzelzsceļš", ""],
        ["dzelzsrūda", "dzelzrūda", ""],
        ["jāsāk ēst tomātus", "jāsāk ēst tomāti", ""],
        ["abonements", "abonaments", ""],
        ["vakuums", "vakums", ""],
        ["atceras", "atcerās", ""],
        ["vēlas", "vēlās", ""],
        ["vairāk nekā 3 ogas", "vairāk kā 3 ogas", ""],
        ["mazāk kā 5 mašīnas", "mazāk nekā 5 mašīnas", ""],
        ["tēmēklis", "tēmeklis", ""],
        ["moku kaķi", "mocu kaķi", ""],
        ["loki lapu!", "loci lapu!", ""],
        ["neparko nepiekāpšos", "ne par ko nepiekāpšos", ""],
        ["ne par ko nedomāju", "neparko nedomāju", ""],
        ["viņš soļo pa priekšu", "viņš soļo papriekšu", ""],
        ["papriekš izmācies", "pa priekšu izmācies", ""],
        ["koks salūst", "koks salūzt", ""]
    ],
];