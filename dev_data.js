const fs = require('fs');

const EMPLOYEES = [
      {
         "index": 0,
         "empId": "a258ebbc-5010-424f-b69f-564325ed8cb3",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "oneil.carroll@quickview.com",
         "permissions": 6,
         "address": "773 Maujer Street, Galesville, Minnesota, 7156",
         "name": {
            "first": "oneil",
            "last": "carroll"
         },
         "full_name": "oneil carroll"
      },
      {
         "index": 1,
         "empId": "8c3c6a66-358b-40e7-bebe-dfacf8b7dfbf",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "paige.alvarez@quickview.com",
         "permissions": 9,
         "address": "276 Concord Street, Bentonville, South Carolina, 8010",
         "name": {
            "first": "paige",
            "last": "alvarez"
         },
         "full_name": "paige alvarez"
      },
      {
         "index": 2,
         "empId": "bbbedc9e-c173-48c7-877b-13478f30b90e",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "cook.odom@quickview.com",
         "permissions": 6,
         "address": "582 Anchorage Place, Aguila, Ohio, 2279",
         "name": {
            "first": "cook",
            "last": "odom"
         },
         "full_name": "cook odom"
      },
      {
         "index": 3,
         "empId": "b0003dbd-f364-42e6-887d-a52a0703f3ec",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "phelps.barnett@quickview.com",
         "permissions": 3,
         "address": "569 Elmwood Avenue, Tooleville, Maryland, 7120",
         "name": {
            "first": "phelps",
            "last": "barnett"
         },
         "full_name": "phelps barnett"
      },
      {
         "index": 4,
         "empId": "c2a81300-9941-4ae0-8aea-0b0337b2a243",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "shelly.trujillo@quickview.com",
         "permissions": 2,
         "address": "358 Amherst Street, Oneida, Pennsylvania, 7764",
         "name": {
            "first": "shelly",
            "last": "trujillo"
         },
         "full_name": "shelly trujillo"
      },
      {
         "index": 5,
         "empId": "1c689fad-05e8-4760-ae4e-262ba2d6944d",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "doris.logan@quickview.com",
         "permissions": 9,
         "address": "303 Dover Street, Longbranch, Iowa, 1147",
         "name": {
            "first": "doris",
            "last": "logan"
         },
         "full_name": "doris logan"
      },
      {
         "index": 6,
         "empId": "d9912427-a1b5-443a-9944-b73fe93751c8",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "kristen.mccullough@quickview.com",
         "permissions": 1,
         "address": "444 Olive Street, Chelsea, Nebraska, 9313",
         "name": {
            "first": "kristen",
            "last": "mccullough"
         },
         "full_name": "kristen mccullough"
      },
      {
         "index": 7,
         "empId": "06bef8d7-22da-4c1d-b31c-6f1755401d96",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "serena.cobb@quickview.com",
         "permissions": 3,
         "address": "307 Harden Street, Veguita, Guam, 7944",
         "name": {
            "first": "serena",
            "last": "cobb"
         },
         "full_name": "serena cobb"
      },
      {
         "index": 8,
         "empId": "f3761eb3-8d24-425c-92a8-175404bee121",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "hooper.prince@quickview.com",
         "permissions": 2,
         "address": "719 Bethel Loop, Elrama, Utah, 9434",
         "name": {
            "first": "hooper",
            "last": "prince"
         },
         "full_name": "hooper prince"
      },
      {
         "index": 9,
         "empId": "c816ab90-8c17-4ef5-9faa-7dfbaa24ce56",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "acosta.miller@quickview.com",
         "permissions": 5,
         "address": "356 Schaefer Street, Walton, Oregon, 3485",
         "name": {
            "first": "acosta",
            "last": "miller"
         },
         "full_name": "acosta miller"
      },
      {
         "index": 10,
         "empId": "cb836bd8-34c1-4829-8efd-a1017cb7da2e",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "hodges.shannon@quickview.com",
         "permissions": 0,
         "address": "957 Glenmore Avenue, Windsor, Rhode Island, 1744",
         "name": {
            "first": "hodges",
            "last": "shannon"
         },
         "full_name": "hodges shannon"
      },
      {
         "index": 11,
         "empId": "b7e0f1cc-4c4f-487c-9d88-258deee52282",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "barker.dillard@quickview.com",
         "permissions": 9,
         "address": "913 Hyman Court, Wildwood, Palau, 3292",
         "name": {
            "first": "barker",
            "last": "dillard"
         },
         "full_name": "barker dillard"
      },
      {
         "index": 12,
         "empId": "33bc1bd9-dd8a-4e02-8d29-1bf56945fb1d",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "norris.gallagher@quickview.com",
         "permissions": 2,
         "address": "197 Love Lane, Bowie, California, 8980",
         "name": {
            "first": "norris",
            "last": "gallagher"
         },
         "full_name": "norris gallagher"
      },
      {
         "index": 13,
         "empId": "468b15c7-437a-4035-ad9b-d6ec7b0ba308",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "obrien.michael@quickview.com",
         "permissions": 6,
         "address": "953 Nautilus Avenue, Cawood, North Dakota, 2484",
         "name": {
            "first": "obrien",
            "last": "michael"
         },
         "full_name": "obrien michael"
      },
      {
         "index": 14,
         "empId": "aea8a226-48ff-4a45-93af-80c857188ce4",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "page.stuart@quickview.com",
         "permissions": 6,
         "address": "102 Sackman Street, Wattsville, New Jersey, 5018",
         "name": {
            "first": "page",
            "last": "stuart"
         },
         "full_name": "page stuart"
      },
      {
         "index": 15,
         "empId": "8cb421a3-d737-45a9-b0bc-31c10c269318",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "salazar.day@quickview.com",
         "permissions": 7,
         "address": "897 Linden Boulevard, Bath, Florida, 9232",
         "name": {
            "first": "salazar",
            "last": "day"
         },
         "full_name": "salazar day"
      },
      {
         "index": 16,
         "empId": "02098681-94cb-4a68-afff-c877cddb316e",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "holland.mckenzie@quickview.com",
         "permissions": 1,
         "address": "623 Mill Street, Goochland, Alaska, 1920",
         "name": {
            "first": "holland",
            "last": "mckenzie"
         },
         "full_name": "holland mckenzie"
      },
      {
         "index": 17,
         "empId": "bf868508-5967-4191-9133-95d8c020e615",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "delaney.kirkland@quickview.com",
         "permissions": 9,
         "address": "358 Goodwin Place, Day, Nevada, 7985",
         "name": {
            "first": "delaney",
            "last": "kirkland"
         },
         "full_name": "delaney kirkland"
      },
      {
         "index": 18,
         "empId": "0f06e1f7-ec2d-4371-ad6e-4d95b03bd8a4",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "kitty.mcmahon@quickview.com",
         "permissions": 6,
         "address": "453 Kensington Street, Ebro, South Dakota, 4272",
         "name": {
            "first": "kitty",
            "last": "mcmahon"
         },
         "full_name": "kitty mcmahon"
      },
      {
         "index": 19,
         "empId": "8d99d3f7-7964-4dc5-9d59-942a487d5307",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "whitaker.harper@quickview.com",
         "permissions": 1,
         "address": "691 Irving Street, Romeville, Wisconsin, 5042",
         "name": {
            "first": "whitaker",
            "last": "harper"
         },
         "full_name": "whitaker harper"
      },
      {
         "index": 20,
         "empId": "b6cf698d-3a2a-4069-8061-5971c68c969c",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "marla.holder@quickview.com",
         "permissions": 4,
         "address": "660 Tapscott Street, Herald, North Carolina, 326",
         "name": {
            "first": "marla",
            "last": "holder"
         },
         "full_name": "marla holder"
      },
      {
         "index": 21,
         "empId": "d5f20069-27da-4f9b-ae52-070de1fd4c4f",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "company": "quickview",
         "email": "mayer.peterson@quickview.com",
         "permissions": 8,
         "address": "297 Ryder Avenue, Faywood, Northern Mariana Islands, 8149",
         "name": {
            "first": "mayer",
            "last": "peterson"
         },
         "full_name": "mayer peterson"
      }
   ];


const USERS = [
      {
         "index": 0,
         "userId": "bf64f07e-e656-4b04-a92f-8bf642d27139",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 590.54,
         "company": "Aquamate",
         "email": "addie.sweeney@aquamate.com",
         "about": "Amet culpa aute consectetur commodo id consectetur elit velit deserunt amet labore laborum deserunt.",
         "address": "692 Provost Street, Grapeview, Wyoming, 4221",
         "name": {
            "first": "addie",
            "last": "sweeney"
         },
         "full_name": "addie sweeney"
      },
      {
         "index": 1,
         "userId": "af87b3c5-588b-49b4-bf5e-0bc91d244ded",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 885.65,
         "company": "Comveyor",
         "email": "potter.saunders@comveyor.com",
         "about": "Aliquip ipsum labore in duis irure pariatur culpa.",
         "address": "654 Liberty Avenue, Lydia, Puerto Rico, 5757",
         "name": {
            "first": "potter",
            "last": "saunders"
         },
         "full_name": "potter saunders"
      },
      {
         "index": 2,
         "userId": "003b4676-5653-4d77-89bb-aedaa3cd872d",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 529.79,
         "company": "Buzzmaker",
         "email": "bird.leblanc@buzzmaker.com",
         "about": "Sit sunt commodo deserunt magna esse nisi sunt quis est tempor officia adipisicing officia anim.",
         "address": "380 Montrose Avenue, Convent, Tennessee, 787",
         "name": {
            "first": "bird",
            "last": "leblanc"
         },
         "full_name": "bird leblanc"
      },
      {
         "index": 3,
         "userId": "230ae79e-e05d-40dc-9138-5b3d26551dac",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 728.1,
         "company": "Repetwire",
         "email": "mcguire.pearson@repetwire.com",
         "about": "Eiusmod veniam incididunt ex et sunt Lorem do fugiat sunt amet.",
         "address": "647 Linden Street, Lisco, Nebraska, 9884",
         "name": {
            "first": "mcguire",
            "last": "pearson"
         },
         "full_name": "mcguire pearson"
      },
      {
         "index": 4,
         "userId": "7a5704d7-c44a-4795-aa06-a3c7b6218f8b",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 435.62,
         "company": "Printspan",
         "email": "michele.mccray@printspan.com",
         "about": "Incididunt minim voluptate aliqua aute deserunt labore sit anim nostrud ut eu reprehenderit pariatur ut.",
         "address": "470 Opal Court, Eagleville, Maine, 150",
         "name": {
            "first": "michele",
            "last": "mccray"
         },
         "full_name": "michele mccray"
      },
      {
         "index": 5,
         "userId": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 219.69,
         "company": "Earthwax",
         "email": "cooley.wong@earthwax.com",
         "about": "Dolore sit deserunt magna aliquip dolor dolor magna in nulla pariatur proident.",
         "address": "899 Fenimore Street, Springville, Nevada, 4058",
         "name": {
            "first": "cooley",
            "last": "wong"
         },
         "full_name": "cooley wong"
      },
      {
         "index": 6,
         "userId": "8308d1aa-3a3c-415f-982f-78c8bfe7f1b3",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 552.9,
         "company": "Kongle",
         "email": "charlene.brady@kongle.com",
         "about": "Elit ipsum veniam adipisicing in ad laborum amet commodo incididunt mollit consequat irure anim do.",
         "address": "278 Boardwalk , Edenburg, Mississippi, 5032",
         "name": {
            "first": "charlene",
            "last": "brady"
         },
         "full_name": "charlene brady"
      },
      {
         "index": 7,
         "userId": "8b44b473-44de-4610-ad13-09b558a81696",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 944.82,
         "company": "Chillium",
         "email": "leann.ochoa@chillium.com",
         "about": "Officia aliquip consequat occaecat ipsum veniam cillum fugiat eiusmod non.",
         "address": "827 Auburn Place, Shelby, New Hampshire, 4894",
         "name": {
            "first": "leann",
            "last": "ochoa"
         },
         "full_name": "leann ochoa"
      },
      {
         "index": 8,
         "userId": "25d80ba6-38a1-408a-a9af-5cd7e6c756b4",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 549.13,
         "company": "Electonic",
         "email": "terry.park@electonic.com",
         "about": "Cupidatat adipisicing occaecat nostrud aute commodo qui.",
         "address": "326 Lincoln Terrace, Grimsley, Montana, 3072",
         "name": {
            "first": "terry",
            "last": "park"
         },
         "full_name": "terry park"
      },
      {
         "index": 9,
         "userId": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 137.73,
         "company": "Qnekt",
         "email": "alejandra.trujillo@qnekt.com",
         "about": "Incididunt ut in esse proident aute labore fugiat laboris adipisicing ex non.",
         "address": "268 Bills Place, Wanship, Connecticut, 4772",
         "name": {
            "first": "alejandra",
            "last": "trujillo"
         },
         "full_name": "alejandra trujillo"
      },
      {
         "index": 10,
         "userId": "66cddcc3-d361-4a7e-80f2-5e8070b65ada",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 132.9,
         "company": "Tubesys",
         "email": "wood.gentry@tubesys.com",
         "about": "Sunt ad nisi esse anim quis magna dolore quis do excepteur eiusmod non.",
         "address": "553 Forest Place, Bartley, California, 9482",
         "name": {
            "first": "wood",
            "last": "gentry"
         },
         "full_name": "wood gentry"
      },
      {
         "index": 11,
         "userId": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 269.62,
         "company": "Mobildata",
         "email": "horton.cote@mobildata.com",
         "about": "Laboris proident tempor nostrud ullamco nisi dolore officia ullamco ea laboris commodo anim.",
         "address": "739 Chestnut Street, Wanamie, Northern Mariana Islands, 5376",
         "name": {
            "first": "horton",
            "last": "cote"
         },
         "full_name": "horton cote"
      },
      {
         "index": 12,
         "userId": "d29cd945-6673-45b3-b025-8c40adb0bd48",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 164.21,
         "company": "Comstar",
         "email": "jaclyn.dillon@comstar.com",
         "about": "Cupidatat magna ullamco sit mollit laboris mollit eiusmod nisi qui.",
         "address": "173 Kent Avenue, Loretto, Texas, 2994",
         "name": {
            "first": "jaclyn",
            "last": "dillon"
         },
         "full_name": "jaclyn dillon"
      },
      {
         "index": 13,
         "userId": "72e13c85-7757-4a24-823a-e50e5651719b",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 526.44,
         "company": "Snorus",
         "email": "toni.baldwin@snorus.com",
         "about": "Nisi non non laboris sit mollit pariatur nisi cillum consequat.",
         "address": "136 Green Street, Vallonia, Virgin Islands, 5785",
         "name": {
            "first": "toni",
            "last": "baldwin"
         },
         "full_name": "toni baldwin"
      },
      {
         "index": 14,
         "userId": "2cd3296e-0c03-4e51-9400-d8ce38553b3f",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 394.52,
         "company": "Quizmo",
         "email": "jannie.fisher@quizmo.com",
         "about": "Id deserunt et et Lorem.",
         "address": "930 Hyman Court, Lacomb, Maryland, 746",
         "name": {
            "first": "jannie",
            "last": "fisher"
         },
         "full_name": "jannie fisher"
      },
      {
         "index": 15,
         "userId": "165b0d29-f973-457d-9291-3b209909d1f7",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 934.46,
         "company": "Illumity",
         "email": "elma.frye@illumity.com",
         "about": "Dolor sit sint occaecat eiusmod enim reprehenderit.",
         "address": "285 Harway Avenue, Navarre, Arizona, 4128",
         "name": {
            "first": "elma",
            "last": "frye"
         },
         "full_name": "elma frye"
      },
      {
         "index": 16,
         "userId": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 115.18,
         "company": "Krog",
         "email": "jeannine.mcguire@krog.com",
         "about": "Dolor occaecat magna excepteur tempor eiusmod duis duis nulla est laborum.",
         "address": "669 Anna Court, Weedville, Idaho, 9993",
         "name": {
            "first": "jeannine",
            "last": "mcguire"
         },
         "full_name": "jeannine mcguire"
      },
      {
         "index": 17,
         "userId": "64286c71-e181-48ec-8753-9734130b4143",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 971.82,
         "company": "Momentia",
         "email": "walls.ramos@momentia.com",
         "about": "Enim reprehenderit ex irure deserunt velit dolore fugiat proident est elit commodo culpa esse.",
         "address": "681 Clinton Avenue, Graball, Minnesota, 6229",
         "name": {
            "first": "walls",
            "last": "ramos"
         },
         "full_name": "walls ramos"
      },
      {
         "index": 18,
         "userId": "5acfed28-d3b4-440d-8194-a2154723b19a",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 584.48,
         "company": "Indexia",
         "email": "jeanette.bernard@indexia.com",
         "about": "Ea esse cillum eu tempor ad cupidatat.",
         "address": "118 Glen Street, Sultana, Pennsylvania, 5436",
         "name": {
            "first": "jeanette",
            "last": "bernard"
         },
         "full_name": "jeanette bernard"
      },
      {
         "index": 19,
         "userId": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 366.17,
         "company": "Podunk",
         "email": "leonor.carver@podunk.com",
         "about": "Nisi consequat culpa ipsum consequat.",
         "address": "980 Ellery Street, Marienthal, Virginia, 3285",
         "name": {
            "first": "leonor",
            "last": "carver"
         },
         "full_name": "leonor carver"
      },
      {
         "index": 20,
         "userId": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 493.9,
         "company": "Kangle",
         "email": "davidson.chaney@kangle.com",
         "about": "Magna incididunt nulla consectetur eu voluptate ipsum.",
         "address": "878 Interborough Parkway, Welda, Missouri, 3914",
         "name": {
            "first": "davidson",
            "last": "chaney"
         },
         "full_name": "davidson chaney"
      },
      {
         "index": 21,
         "userId": "616cb4d5-55b1-47f5-93a4-6e6f269abe64",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 682.97,
         "company": "Assistix",
         "email": "robertson.odonnell@assistix.com",
         "about": "Excepteur est aliqua amet occaecat officia nostrud cillum labore laborum mollit voluptate id.",
         "address": "342 Eastern Parkway, Sehili, Alaska, 2946",
         "name": {
            "first": "robertson",
            "last": "odonnell"
         },
         "full_name": "robertson odonnell"
      },
      {
         "index": 22,
         "userId": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 982.38,
         "company": "Qualitex",
         "email": "elsie.salazar@qualitex.com",
         "about": "Enim cupidatat dolor officia proident eiusmod id do irure sit culpa sunt.",
         "address": "551 Bouck Court, Hillsboro, Federated States Of Micronesia, 4009",
         "name": {
            "first": "elsie",
            "last": "salazar"
         },
         "full_name": "elsie salazar"
      },
      {
         "index": 23,
         "userId": "d1ba06cf-c038-4e81-905e-683c68f7b7d2",
         "isActive": true,
         "picture": "http://placehold.it/32x32",
         "balance": 843.26,
         "company": "Eventix",
         "email": "ophelia.reynolds@eventix.com",
         "about": "Nisi reprehenderit aliqua elit incididunt ullamco tempor fugiat velit culpa eiusmod labore.",
         "address": "817 Roosevelt Place, Shindler, Alabama, 5152",
         "name": {
            "first": "ophelia",
            "last": "reynolds"
         },
         "full_name": "ophelia reynolds"
      },
      {
         "index": 24,
         "userId": "39638ddd-9c0e-4202-900a-1bd58456ae6f",
         "isActive": false,
         "picture": "http://placehold.it/32x32",
         "balance": 577.79,
         "company": "Comtrail",
         "email": "armstrong.morin@comtrail.com",
         "about": "Nostrud dolor adipisicing ea voluptate.",
         "address": "281 Noll Street, Cornfields, New Jersey, 5020",
         "name": {
            "first": "armstrong",
            "last": "morin"
         },
         "full_name": "armstrong morin"
      }
   ];

const TRANSACTIONS = [
      {
         "t_id": "58d58096cb15a01bf65c39d2",
         "index": 0,
         "guid": "0b659589-ee00-44d0-9e97-90e9625345c7",
         "amount": 232.94,
         "user_id": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "date": "2011-06-12T04:09:18.860Z"
      },
      {
         "t_id": "58d58096ef7a474334cb33ab",
         "index": 1,
         "guid": "8020b638-e65b-49e9-8880-9109dc65a6fa",
         "amount": 509.55,
         "user_id": "d29cd945-6673-45b3-b025-8c40adb0bd48",
         "date": "1972-06-05T18:13:57.547Z"
      },
      {
         "t_id": "58d58096ee9da8c0316f6832",
         "index": 2,
         "guid": "e8ff09e0-cafd-4514-ad10-a2b6455d4b03",
         "amount": 970.04,
         "user_id": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "date": "2009-07-06T02:15:04.527Z"
      },
      {
         "t_id": "58d58096868ed5f49cf52b88",
         "index": 3,
         "guid": "1b720e66-d5cb-4c61-a149-2089ad94b71d",
         "amount": 2868.88,
         "user_id": "5acfed28-d3b4-440d-8194-a2154723b19a",
         "date": "2010-02-28T02:05:13.997Z"
      },
      {
         "t_id": "58d58096f089781d09feb5d3",
         "index": 4,
         "guid": "bbf0edb0-169d-4379-8f85-26d7114eab65",
         "amount": 215.16,
         "user_id": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "date": "2010-08-30T21:46:44.478Z"
      },
      {
         "t_id": "58d580967521c299d954adc8",
         "index": 5,
         "guid": "948db4b6-fe47-4184-bfee-bc742e3478a4",
         "amount": 2404.99,
         "user_id": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "date": "2014-04-02T20:09:30.008Z"
      },
      {
         "t_id": "58d580962999c69584d1f31d",
         "index": 6,
         "guid": "b67bb4ea-5f88-4a8d-8297-53fbf2c7ba03",
         "amount": 68.69,
         "user_id": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "date": "2000-04-17T16:24:11.781Z"
      },
      {
         "t_id": "58d58096da48b9d6e9171c1f",
         "index": 7,
         "guid": "976795bb-0b02-485e-9d65-3169acd283e9",
         "amount": 3233.61,
         "user_id": "72e13c85-7757-4a24-823a-e50e5651719b",
         "date": "1997-11-09T12:46:28.258Z"
      },
      {
         "t_id": "58d580960ceeab8485217437",
         "index": 8,
         "guid": "d7b00260-f4cb-4a78-91d4-349e0e36e808",
         "amount": 2724.88,
         "user_id": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "date": "2007-12-17T19:18:44.868Z"
      },
      {
         "t_id": "58d5809670ae528a0d07f505",
         "index": 9,
         "guid": "661a6dd1-a130-4238-8c38-f28f8f778f48",
         "amount": 3049.58,
         "user_id": "616cb4d5-55b1-47f5-93a4-6e6f269abe64",
         "date": "1981-12-09T00:56:21.961Z"
      },
      {
         "t_id": "58d5809663bc78d2945b4ede",
         "index": 10,
         "guid": "063c59c5-4d89-47a3-a732-6abd85784422",
         "amount": 1815.22,
         "user_id": "8308d1aa-3a3c-415f-982f-78c8bfe7f1b3",
         "date": "2013-03-29T03:37:53.580Z"
      },
      {
         "t_id": "58d580962834aaebb8ef733a",
         "index": 11,
         "guid": "20e74c83-795f-41ec-b0f7-e6518066f07c",
         "amount": 326.42,
         "user_id": "7a5704d7-c44a-4795-aa06-a3c7b6218f8b",
         "date": "2002-09-15T21:26:37.977Z"
      },
      {
         "t_id": "58d5809645a9027914de772a",
         "index": 12,
         "guid": "945b2faa-b1a0-4aa5-af53-8eb0eaf43690",
         "amount": 2662.8,
         "user_id": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "date": "1978-10-27T17:32:24.160Z"
      },
      {
         "t_id": "58d58096ea25497636abab91",
         "index": 13,
         "guid": "6a1b86c0-124d-4394-aeff-ee06981914ef",
         "amount": 1083.2,
         "user_id": "bf64f07e-e656-4b04-a92f-8bf642d27139",
         "date": "1999-06-23T21:54:10.309Z"
      },
      {
         "t_id": "58d5809614bd65bbf9498352",
         "index": 14,
         "guid": "5c303baf-4eb7-4cb8-89ee-ed96bbbfb317",
         "amount": 69.32,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "1978-02-20T05:52:05.650Z"
      },
      {
         "t_id": "58d58096b6c07bf5aad47aae",
         "index": 15,
         "guid": "27f232be-eae1-4385-8076-cd25566bb541",
         "amount": 3751.59,
         "user_id": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "date": "1981-02-26T12:06:59.935Z"
      },
      {
         "t_id": "58d5809624032690a229a431",
         "index": 16,
         "guid": "699173b1-65bd-4879-bb20-72518e1b6c4b",
         "amount": 3721.69,
         "user_id": "230ae79e-e05d-40dc-9138-5b3d26551dac",
         "date": "2008-10-16T15:51:19.622Z"
      },
      {
         "t_id": "58d58096642631ac0179bdb8",
         "index": 17,
         "guid": "28f2237c-b283-48a4-9707-e4dc05d28bfd",
         "amount": 3361.26,
         "user_id": "72e13c85-7757-4a24-823a-e50e5651719b",
         "date": "1990-02-12T21:04:04.331Z"
      },
      {
         "t_id": "58d58096def2e780ab731d88",
         "index": 18,
         "guid": "36897926-d8a6-4771-a03f-27efdb6860b8",
         "amount": 1746.34,
         "user_id": "230ae79e-e05d-40dc-9138-5b3d26551dac",
         "date": "1996-10-10T14:11:11.153Z"
      },
      {
         "t_id": "58d58096e8da16d2b5dccfb1",
         "index": 19,
         "guid": "2d3c18da-0744-44a2-808a-222add6f5e97",
         "amount": 1632.62,
         "user_id": "25d80ba6-38a1-408a-a9af-5cd7e6c756b4",
         "date": "1984-08-29T00:50:12.929Z"
      },
      {
         "t_id": "58d5809615afdec45fdd6447",
         "index": 20,
         "guid": "38455108-1066-4689-b45e-1426522ae5e1",
         "amount": 501.38,
         "user_id": "230ae79e-e05d-40dc-9138-5b3d26551dac",
         "date": "2011-01-12T05:17:45.425Z"
      },
      {
         "t_id": "58d580962751fa0a812a6868",
         "index": 21,
         "guid": "301c3bd7-def3-4cda-8e55-872b9558169a",
         "amount": 3279.17,
         "user_id": "d29cd945-6673-45b3-b025-8c40adb0bd48",
         "date": "1979-06-16T22:10:07.287Z"
      },
      {
         "t_id": "58d58096e99143db0923890a",
         "index": 22,
         "guid": "d00a2116-e996-40fb-9ea7-56b909464b8f",
         "amount": 128.51,
         "user_id": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "date": "2012-01-15T13:25:43.292Z"
      },
      {
         "t_id": "58d58096d3fe89127583fa2e",
         "index": 23,
         "guid": "254ff3fe-8575-4c0d-8ceb-40c13b64bc9b",
         "amount": 3652.07,
         "user_id": "25d80ba6-38a1-408a-a9af-5cd7e6c756b4",
         "date": "1978-05-08T01:10:04.268Z"
      },
      {
         "t_id": "58d58096b0d4e7f0a2dff14d",
         "index": 24,
         "guid": "02a44247-7f00-4d68-9547-0d93f6e32ba6",
         "amount": 1955,
         "user_id": "af87b3c5-588b-49b4-bf5e-0bc91d244ded",
         "date": "1978-11-12T13:08:22.581Z"
      },
      {
         "t_id": "58d5809666b0f6504d7fd791",
         "index": 25,
         "guid": "f0dda4eb-cca3-4dc8-8fc3-d48e9f3365ed",
         "amount": 3872.52,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "2015-01-12T02:58:50.017Z"
      },
      {
         "t_id": "58d580966a22e59822039e21",
         "index": 26,
         "guid": "46cdd55e-8628-4133-a530-042847e92ed8",
         "amount": 1102.92,
         "user_id": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "date": "1980-03-28T14:12:39.298Z"
      },
      {
         "t_id": "58d580964411fe8d78493ecc",
         "index": 27,
         "guid": "ef9e63d7-f2f1-4bcf-a0ce-c4c365bd0c25",
         "amount": 3710.66,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "1973-05-20T01:41:10.572Z"
      },
      {
         "t_id": "58d58096d45f1541cc474101",
         "index": 28,
         "guid": "6f1715a3-0d88-449e-ac53-90370c7a06e9",
         "amount": 3444.01,
         "user_id": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "date": "2010-07-13T19:04:59.515Z"
      },
      {
         "t_id": "58d58096a34ae66b6ebed138",
         "index": 29,
         "guid": "da50d8b7-d825-4756-b303-3c122633eca0",
         "amount": 406.47,
         "user_id": "d1ba06cf-c038-4e81-905e-683c68f7b7d2",
         "date": "1991-01-19T03:41:00.273Z"
      },
      {
         "t_id": "58d58096bd2490b1986df756",
         "index": 30,
         "guid": "af070418-7a43-4b4b-a3b3-457ebe3e416a",
         "amount": 481.98,
         "user_id": "003b4676-5653-4d77-89bb-aedaa3cd872d",
         "date": "2016-06-28T08:26:43.367Z"
      },
      {
         "t_id": "58d58096a30713f5d8204ec6",
         "index": 31,
         "guid": "8e671e30-2054-406b-91ea-59852cdc6257",
         "amount": 720.75,
         "user_id": "2cd3296e-0c03-4e51-9400-d8ce38553b3f",
         "date": "2008-03-31T12:29:57.132Z"
      },
      {
         "t_id": "58d5809612b6224a7d94be38",
         "index": 32,
         "guid": "c4d6075f-805f-44ef-afb1-806f281ad6e2",
         "amount": 1084.87,
         "user_id": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "date": "1993-07-07T02:49:44.154Z"
      },
      {
         "t_id": "58d5809662e7afacfd47b913",
         "index": 33,
         "guid": "534fb0ab-f0d2-4744-b4da-48e7b391b297",
         "amount": 178.69,
         "user_id": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "date": "1971-07-31T17:47:17.474Z"
      },
      {
         "t_id": "58d580967ebd5f9479d3796b",
         "index": 34,
         "guid": "eaea9e8c-b772-4358-9354-e7ffa077f546",
         "amount": 3374.44,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "2008-03-20T20:43:27.677Z"
      },
      {
         "t_id": "58d580963b3391e4db5e1ebb",
         "index": 35,
         "guid": "d582f4e6-e180-44e6-bcb3-8472a74d485c",
         "amount": 508.42,
         "user_id": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "date": "2003-02-26T17:21:09.729Z"
      },
      {
         "t_id": "58d58096a786e4e3d9308319",
         "index": 36,
         "guid": "2aeda067-b860-4853-be7b-2166fb4d95ec",
         "amount": 1208.26,
         "user_id": "d1ba06cf-c038-4e81-905e-683c68f7b7d2",
         "date": "2002-03-10T13:22:53.034Z"
      },
      {
         "t_id": "58d58096c93e57ebf758f98e",
         "index": 37,
         "guid": "813cdd74-0d9e-4e65-ade7-725a99b00b04",
         "amount": 3300.5,
         "user_id": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "date": "1987-12-02T23:54:51.893Z"
      },
      {
         "t_id": "58d580966dd995329e810003",
         "index": 38,
         "guid": "a7087ee6-fcf2-4fdb-87e9-3c728e0c352a",
         "amount": 2404.41,
         "user_id": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "date": "1995-05-25T09:56:50.472Z"
      },
      {
         "t_id": "58d58096ced1c31eefc56f28",
         "index": 39,
         "guid": "3157d44c-aa93-4ee8-8390-d9632a99bcf6",
         "amount": 3462.11,
         "user_id": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "date": "2009-12-21T20:41:28.753Z"
      },
      {
         "t_id": "58d58096b0fafea4b7f0c1b5",
         "index": 40,
         "guid": "6c940908-2a34-4430-9ef5-86b07fc04efa",
         "amount": 3068.33,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "2015-02-12T22:25:10.754Z"
      },
      {
         "t_id": "58d580965804adbce00baa31",
         "index": 41,
         "guid": "4b334ad8-1864-4b0a-b672-72952dc2fa93",
         "amount": 918.2,
         "user_id": "39638ddd-9c0e-4202-900a-1bd58456ae6f",
         "date": "2004-08-29T17:54:04.531Z"
      },
      {
         "t_id": "58d580964df0da597279637c",
         "index": 42,
         "guid": "b552c9ed-f3db-4e37-8f40-f0b9483dc2a0",
         "amount": 3179.41,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "2008-02-09T17:57:50.058Z"
      },
      {
         "t_id": "58d58096b5efa0505cb77d9b",
         "index": 43,
         "guid": "a405efe6-1462-4322-9a34-35596037c146",
         "amount": 2646.62,
         "user_id": "d1ba06cf-c038-4e81-905e-683c68f7b7d2",
         "date": "2008-02-18T12:52:48.009Z"
      },
      {
         "t_id": "58d58096d7fd4f6eff5cfe5d",
         "index": 44,
         "guid": "613784c2-84f4-45d5-8812-8872d60e5072",
         "amount": 1806.1,
         "user_id": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "date": "2002-12-03T20:33:43.231Z"
      },
      {
         "t_id": "58d5809697cdac7c78e73662",
         "index": 45,
         "guid": "bb448d53-e6f8-40f1-a632-7631f101866e",
         "amount": 471.61,
         "user_id": "66cddcc3-d361-4a7e-80f2-5e8070b65ada",
         "date": "1973-01-23T22:15:14.191Z"
      },
      {
         "t_id": "58d580960fdfb4109657e23a",
         "index": 46,
         "guid": "a2fe72a0-3bad-4564-a39f-f5f22f01ae87",
         "amount": 3531.68,
         "user_id": "39638ddd-9c0e-4202-900a-1bd58456ae6f",
         "date": "2013-02-28T20:52:54.593Z"
      },
      {
         "t_id": "58d5809620869d8dc7543c4a",
         "index": 47,
         "guid": "e463a334-38a7-46ea-af65-364f9cb71471",
         "amount": 1787.22,
         "user_id": "2cd3296e-0c03-4e51-9400-d8ce38553b3f",
         "date": "1989-11-30T01:07:20.340Z"
      },
      {
         "t_id": "58d58096230243855dbda92d",
         "index": 48,
         "guid": "e1333604-8ae0-4bd7-a3c6-ef74b5d57f59",
         "amount": 3738.46,
         "user_id": "616cb4d5-55b1-47f5-93a4-6e6f269abe64",
         "date": "1980-02-20T11:04:40.055Z"
      },
      {
         "t_id": "58d580965e8c9a72e1f9a7ab",
         "index": 49,
         "guid": "4b405d48-2681-4759-b057-119451ee36d4",
         "amount": 1864.86,
         "user_id": "1cd62e0e-06fc-4237-b909-ae759c5d6d44",
         "date": "2010-09-07T23:45:45.734Z"
      },
      {
         "t_id": "58d58096b48604abffc67fa0",
         "index": 50,
         "guid": "84c4a84e-fc14-4fb3-b95f-5cb10216cc5e",
         "amount": 2008.57,
         "user_id": "8308d1aa-3a3c-415f-982f-78c8bfe7f1b3",
         "date": "2008-03-17T19:13:12.881Z"
      },
      {
         "t_id": "58d58096ec67262686e83a79",
         "index": 51,
         "guid": "e7ea546e-5e08-4654-a06d-3986f4093593",
         "amount": 110.91,
         "user_id": "8308d1aa-3a3c-415f-982f-78c8bfe7f1b3",
         "date": "2004-01-17T18:35:17.849Z"
      },
      {
         "t_id": "58d580961573bfe10b64311d",
         "index": 52,
         "guid": "17d633f2-bcb4-42ac-b004-9bc85f8e2629",
         "amount": 1035.35,
         "user_id": "5acfed28-d3b4-440d-8194-a2154723b19a",
         "date": "1998-01-08T04:01:48.807Z"
      },
      {
         "t_id": "58d58096d18d3db85d986e67",
         "index": 53,
         "guid": "dec92562-f60f-4d3d-b8e5-295e45f1de3c",
         "amount": 617.59,
         "user_id": "d29cd945-6673-45b3-b025-8c40adb0bd48",
         "date": "1976-04-12T11:38:19.918Z"
      },
      {
         "t_id": "58d580969292007e94df9b1a",
         "index": 54,
         "guid": "ea2ab859-beec-4be8-8642-c8c10355da30",
         "amount": 3130.28,
         "user_id": "7a5704d7-c44a-4795-aa06-a3c7b6218f8b",
         "date": "1977-06-19T11:55:28.420Z"
      },
      {
         "t_id": "58d58096b3a9eee455e3f613",
         "index": 55,
         "guid": "8e500e17-0d13-45a7-8003-efcfbef560cf",
         "amount": 2668.84,
         "user_id": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "date": "1980-09-12T15:54:56.375Z"
      },
      {
         "t_id": "58d58096c8e1977174bf8e15",
         "index": 56,
         "guid": "b4685834-35b6-4876-959c-488b990b44e4",
         "amount": 2697.23,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "1971-05-06T15:40:11.809Z"
      },
      {
         "t_id": "58d580968a3266a341dcee67",
         "index": 57,
         "guid": "db5fa84f-3646-48dd-a2d6-7184c2d1b0c5",
         "amount": 658.46,
         "user_id": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "date": "1998-11-05T19:22:29.191Z"
      },
      {
         "t_id": "58d58096dd55c1001720daf8",
         "index": 58,
         "guid": "cb475502-db7f-4c5e-802a-17ad2f158517",
         "amount": 3500.27,
         "user_id": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "date": "2004-11-23T13:39:12.963Z"
      },
      {
         "t_id": "58d58096416f5745fb826c43",
         "index": 59,
         "guid": "f82bff14-ed15-426f-bd51-158e64a5e564",
         "amount": 185.98,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "1983-06-06T00:44:55.073Z"
      },
      {
         "t_id": "58d58096e9d95b8097e7fda0",
         "index": 60,
         "guid": "a91d9ac5-7a68-483e-9ba7-4b0e73fc754b",
         "amount": 210.78,
         "user_id": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "date": "2008-02-19T23:06:22.254Z"
      },
      {
         "t_id": "58d58096771425ead85869fe",
         "index": 61,
         "guid": "ec56a1fa-0e0e-4095-9db8-6eade87e6c92",
         "amount": 2408.12,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "2005-02-19T17:31:21.902Z"
      },
      {
         "t_id": "58d58096a2b98340ee862e81",
         "index": 62,
         "guid": "c421c225-8b4c-41a0-a788-eac142e8855b",
         "amount": 2017.53,
         "user_id": "8b44b473-44de-4610-ad13-09b558a81696",
         "date": "2015-06-17T02:54:30.185Z"
      },
      {
         "t_id": "58d58096d90e3f465f180721",
         "index": 63,
         "guid": "a7f8b082-f654-4297-8582-5e12f4170149",
         "amount": 737.91,
         "user_id": "5acfed28-d3b4-440d-8194-a2154723b19a",
         "date": "2000-07-09T03:47:21.961Z"
      },
      {
         "t_id": "58d58096c4fd69a51632f1c3",
         "index": 64,
         "guid": "c1849da9-bb47-4a9d-bff8-92706e6eeb99",
         "amount": 1009.16,
         "user_id": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "date": "1990-08-25T10:33:36.261Z"
      },
      {
         "t_id": "58d58096f53f2b48ebff387f",
         "index": 65,
         "guid": "0ae76f25-df9d-43b2-b7fb-f16a1952ed0e",
         "amount": 3002.68,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "1990-11-08T16:34:19.347Z"
      },
      {
         "t_id": "58d5809681334966dc7f1886",
         "index": 66,
         "guid": "90ed11c5-6c14-46aa-acae-3bddd907f2c1",
         "amount": 580.15,
         "user_id": "5acfed28-d3b4-440d-8194-a2154723b19a",
         "date": "1984-12-24T03:06:51.526Z"
      },
      {
         "t_id": "58d58096e6870e38cfe9feea",
         "index": 67,
         "guid": "5b0d9de2-2c68-44df-8c82-9eaeb3f59f3e",
         "amount": 1518.51,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "2015-03-15T03:10:25.109Z"
      },
      {
         "t_id": "58d58096ae3c450f38e4ac41",
         "index": 68,
         "guid": "9fc8b5d3-a6ef-4c93-8309-6a1867e6e19a",
         "amount": 1173.05,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "1995-06-29T23:50:57.538Z"
      },
      {
         "t_id": "58d580968d1c5c3a7f321797",
         "index": 69,
         "guid": "6f7f97a4-dbfe-4f91-970a-627780137e86",
         "amount": 2299.83,
         "user_id": "8b44b473-44de-4610-ad13-09b558a81696",
         "date": "2004-05-14T22:41:08.291Z"
      },
      {
         "t_id": "58d58096a99bd94182977a53",
         "index": 70,
         "guid": "f2a7f7d9-fb33-4d6d-9139-f9730e29e59a",
         "amount": 3237.3,
         "user_id": "6db4775a-d4b5-4990-baf7-e6f2dc21df32",
         "date": "1974-12-17T02:53:27.797Z"
      },
      {
         "t_id": "58d5809616e3f88e7fdfaf25",
         "index": 71,
         "guid": "953eac56-3f9a-4e65-bd81-c619c651e0b7",
         "amount": 2866.99,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "1972-03-27T14:54:38.492Z"
      },
      {
         "t_id": "58d580963469c072bd548656",
         "index": 72,
         "guid": "03cae590-8915-4544-a379-f7eb69c88782",
         "amount": 1118.14,
         "user_id": "72e13c85-7757-4a24-823a-e50e5651719b",
         "date": "2016-12-11T03:42:06.111Z"
      },
      {
         "t_id": "58d58096e6274ce5b970af94",
         "index": 73,
         "guid": "bdbcd1a8-3b36-4b22-bbce-daabba3bf6f6",
         "amount": 126.67,
         "user_id": "8b44b473-44de-4610-ad13-09b558a81696",
         "date": "1986-03-09T00:50:11.961Z"
      },
      {
         "t_id": "58d5809657e9f14480d3fc4b",
         "index": 74,
         "guid": "b5e2a02e-0aff-461e-ae8d-a0e193e81f5b",
         "amount": 3970.57,
         "user_id": "66cddcc3-d361-4a7e-80f2-5e8070b65ada",
         "date": "1980-05-20T10:44:43.951Z"
      },
      {
         "t_id": "58d5809632aa63429ff3bb23",
         "index": 75,
         "guid": "085c0521-60f2-4c3a-b0db-1e7d77e3e9a9",
         "amount": 2087.11,
         "user_id": "66cddcc3-d361-4a7e-80f2-5e8070b65ada",
         "date": "1984-10-19T01:27:50.513Z"
      },
      {
         "t_id": "58d5809681a894b95a5465d4",
         "index": 76,
         "guid": "930001ac-3eae-4d95-a696-f4f6d58b8fd7",
         "amount": 1820.27,
         "user_id": "2cd3296e-0c03-4e51-9400-d8ce38553b3f",
         "date": "1999-06-16T05:16:19.017Z"
      },
      {
         "t_id": "58d580966bd8aa3df94a568b",
         "index": 77,
         "guid": "4642d05e-295c-44cc-a844-dd2a4a9ce118",
         "amount": 1703.37,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "1978-10-08T03:20:30.511Z"
      },
      {
         "t_id": "58d580961fa752c0f2d74d15",
         "index": 78,
         "guid": "8b2715ce-c99b-4fc7-ae8f-bd967730a867",
         "amount": 3144.45,
         "user_id": "5b6839b9-3885-4b2b-897a-4b63959fe36e",
         "date": "2004-09-15T23:02:21.716Z"
      },
      {
         "t_id": "58d58096da749f6c0cb7eb28",
         "index": 79,
         "guid": "dead293d-c242-4fc5-b8fe-9adebe0c7bef",
         "amount": 2532.17,
         "user_id": "230ae79e-e05d-40dc-9138-5b3d26551dac",
         "date": "2007-01-13T04:05:54.805Z"
      },
      {
         "t_id": "58d58096d651f2986d144a63",
         "index": 80,
         "guid": "5d9657f1-d82c-40c1-878b-0c30dced9795",
         "amount": 3046.22,
         "user_id": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "date": "1973-01-10T10:57:36.459Z"
      },
      {
         "t_id": "58d5809603c8543de9095f8b",
         "index": 81,
         "guid": "556e4c43-83ec-418f-a249-312f4e8f7f60",
         "amount": 297.95,
         "user_id": "2cd3296e-0c03-4e51-9400-d8ce38553b3f",
         "date": "1982-06-26T09:19:25.014Z"
      },
      {
         "t_id": "58d580969c5504ad16d7f318",
         "index": 82,
         "guid": "a8911814-a2c9-411d-a127-f87e218c31b9",
         "amount": 1632.63,
         "user_id": "d29cd945-6673-45b3-b025-8c40adb0bd48",
         "date": "1972-07-14T02:46:54.290Z"
      },
      {
         "t_id": "58d580961375b2b9f6421187",
         "index": 83,
         "guid": "0d427441-cb1e-43a5-820e-ce956153619c",
         "amount": 905.97,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "1974-12-27T05:15:59.038Z"
      },
      {
         "t_id": "58d5809661a2574e3d0f4ead",
         "index": 84,
         "guid": "3ced49fa-154e-499a-8778-17b026173d62",
         "amount": 2435.8,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "1973-07-07T22:58:27.522Z"
      },
      {
         "t_id": "58d580963b101000f7d32c7b",
         "index": 85,
         "guid": "6c0a49d4-2813-4eaf-ba39-165bc87664da",
         "amount": 1361.72,
         "user_id": "ab7dea04-f471-4977-9956-f7576f563b9a",
         "date": "2009-02-08T14:11:39.672Z"
      },
      {
         "t_id": "58d58096a8a4f5de4d96a20c",
         "index": 86,
         "guid": "6ea64721-50f6-4ce7-8a95-3d955b7b10d4",
         "amount": 1192.69,
         "user_id": "165b0d29-f973-457d-9291-3b209909d1f7",
         "date": "2001-10-10T20:00:19.131Z"
      },
      {
         "t_id": "58d5809630eac88c71c6fb27",
         "index": 87,
         "guid": "f4cf09d6-5123-4b91-8a8e-1201faea74fc",
         "amount": 1434.35,
         "user_id": "7a5704d7-c44a-4795-aa06-a3c7b6218f8b",
         "date": "1979-01-27T03:34:01.973Z"
      },
      {
         "t_id": "58d58096441990bac173974d",
         "index": 88,
         "guid": "93324a9e-2ff5-4936-8a85-e05dc6e8287f",
         "amount": 1933.69,
         "user_id": "8b44b473-44de-4610-ad13-09b558a81696",
         "date": "2000-05-25T12:40:29.117Z"
      },
      {
         "t_id": "58d58096fb144d04ec84b217",
         "index": 89,
         "guid": "2ba2fa34-23ca-4e60-b75e-7ce3b8796c88",
         "amount": 2580.92,
         "user_id": "af87b3c5-588b-49b4-bf5e-0bc91d244ded",
         "date": "1981-08-02T13:50:18.053Z"
      },
      {
         "t_id": "58d580960af4015e2c17a39d",
         "index": 90,
         "guid": "5017d509-3054-44b4-bccc-49a4d068378d",
         "amount": 1997.89,
         "user_id": "25d80ba6-38a1-408a-a9af-5cd7e6c756b4",
         "date": "1981-10-17T20:04:19.271Z"
      },
      {
         "t_id": "58d580961ed59b37bf47bbf2",
         "index": 91,
         "guid": "f1e6527b-3e8a-4ddb-ae74-8f0fa0c96f1d",
         "amount": 3653.24,
         "user_id": "e76e6900-f628-4b9b-86a8-2e725fbc306a",
         "date": "2013-05-30T00:02:47.372Z"
      },
      {
         "t_id": "58d5809602705658670e9347",
         "index": 92,
         "guid": "d74a0489-2a0c-47cf-a42a-7bf223553266",
         "amount": 3010.46,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "1979-02-20T22:58:47.283Z"
      },
      {
         "t_id": "58d5809615864f30f49ede4a",
         "index": 93,
         "guid": "f9ced135-22ed-4bac-9360-6a1e1a0d7219",
         "amount": 3951.33,
         "user_id": "fc1dc105-a6ca-42b9-9c38-1c166e8158ea",
         "date": "2008-09-05T02:28:37.236Z"
      },
      {
         "t_id": "58d5809610399eb12945730d",
         "index": 94,
         "guid": "c7c9d4b6-e361-4b84-b8cb-143306119c19",
         "amount": 2711.09,
         "user_id": "64286c71-e181-48ec-8753-9734130b4143",
         "date": "1997-11-21T15:58:30.002Z"
      },
      {
         "t_id": "58d580963a0334fd72180f85",
         "index": 95,
         "guid": "33809414-4b1e-44ed-9196-4a70bda7221b",
         "amount": 976.45,
         "user_id": "72e13c85-7757-4a24-823a-e50e5651719b",
         "date": "1983-06-30T12:27:51.641Z"
      },
      {
         "t_id": "58d580963d9a431cc2b63fc3",
         "index": 96,
         "guid": "99e86050-d251-4bae-ab21-b8c4ec86fbbb",
         "amount": 2844.58,
         "user_id": "cc99e746-c0b6-43bd-8be2-3a948467f1ac",
         "date": "2008-03-20T15:56:47.900Z"
      },
      {
         "t_id": "58d58096ab331b7bffd1659c",
         "index": 97,
         "guid": "673c0165-327d-4c04-b8c9-a563081f3c5b",
         "amount": 1275.47,
         "user_id": "8b44b473-44de-4610-ad13-09b558a81696",
         "date": "2014-08-01T12:33:07.215Z"
      },
      {
         "t_id": "58d580968a16218dd01967a8",
         "index": 98,
         "guid": "46e6a82c-3b0e-4764-ae3c-4c4c67b527c8",
         "amount": 3118.76,
         "user_id": "25d80ba6-38a1-408a-a9af-5cd7e6c756b4",
         "date": "1978-02-13T14:25:03.094Z"
      }
   ];


const DATA = {
  users: newUsers,
  employees: newEmp,
  transactions: newTrans,
};

module.exports = { DATA };
