var levelColors = ["#43ACBB", "#43BB52", "#D1C42A", "#D92F2F", "#C0319B", "#373897"]
var scoreNeeded = [3, 4, 5, 5, 6, 6, 6, 6];

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
        ["pie jums", "pie jumsīm", ""]
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
        ["acis", "ači", ""]
    ],
    [ // 3
        ["pie manis", "pie manīm", ""],
        ["pie tevis", "pie tevīm", ""],
        ["nulle", "nule", "0"],
        ["logs", "loks", ""]
        ["numurs", "nummurs", ""],
        ["treniņš", "trenniņš", ""],
        ["treneris", "trenneris", ""]
    ],
    [ // 4
        ["nākamais pasākums", "nākošais pasākums", ""],
        ["košs", "kožs", ""],
        ["pašreiz", "patreiz", ""],
        ["pēdiņas", "ķepiņas", 'Kā sauc šo — „” ?'],
        ["kaut kas", "kautkas", ""],
        ["nezin ko", "nezinko", ""],
        ["diez cik", "diezcik", ""],
        ["ikviens", "ik viens", ""]
    ],
    [ // 5
        ["pulkstenis", "pulkstens", ""],
        ["zibens", "zibenis", ""],
        ["suns", "sunis", ""],
        ["liktenis", "liktens", ""],
        ["asmens", "asmenis", ""],
        ["akmens", "akmenis", ""],
        ["ūdens", "ūdenis", ""],
        ["diezgan", "diez gan", ""]
    ],
    [ // 6
        ["Saeima", "Saima", ""],
        ["Saeima", "Saema", ""],
        ["programmēšana", "programēšana", ""],
        ["flomāsters", "flomasters", ""]
        ["spilgts", "spilkts", ""],
        ["nule", "nulle", '"tikko"'],
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
        ["želatīns", "želantīns"]
    ],
    [ // 8
        ["fotografēt", "fotogrāfēt", ""],
        ["fotogrāfija", "fotografija", ""],
        ["Maijai Bunkui", "Maijai Bunkai", "Kam? (Maija Bunkus)"],
        ["Annai Tellui", "Annai Tellusai", "Kam? (Anna Tellus)"]
    ],
];