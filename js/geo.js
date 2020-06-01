/* Data ve formě polí JS objektů (JSON) */
let mesta = [{
    "id": "da Nang",
    "city": "Da Nang",
    "peoples": 1000,
    "sign": "",
    "text": "piaw"

},
{
    "id": "charbin",
    "city": "Charbin",
    "peoples": 38312224,
    "sign": "",
    "text": "asfawfawf"
    },
{
    "id": "hohhnot",
    "city": "Hohhnot",
    "peoples": 24706321,
    "sign": "",
    "text": "aaaaaaaaaaaaaaaaaaa"
},
{
    "id": "čchang-čchun",
    "city": "Čchang-čchun",
    "peoples": 27462297,
    "sign": "",
    "text": "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"
},
{
    "id": "chang-čou",
    "city": "Chang-čou",
    "peoples": 54426891,
    "sign": "",
    "text": "qqqqqqqqqqqq"
},
{
    "id": "shanghai",
    "city": "Shanghai",
    "peoples": 24281400,
    "sign": "",
    "text": "asfawfawqdvdy"
},
{
    "id": "nanking",
    "city": "Nanking",
    "peoples": 78659903,
    "sign": "",
    "text": "qqqweqwe"
},
{
    "id": "nan-čchang",
    "city": "Nan-čchang",
    "peoples": 44567475,
    "sign": "",
    "text": "Jiangxi"
},
{
    "id": "tianjin",
    "city": "Tianjin",
    "peoples": 13245000,
    "sign": "",
    "text": "Tianjin"
},
{
    "id": "ťi-nan",
    "city": "Ťi-nan",
    "peoples": 99470000,
    "sign": "",
    "text": "Shandong"
},
{
    "id": "šen-jang",
    "city": "Šen-jang",
    "peoples": 43746323,
    "sign": "",
    "text": "Liaoning"
},
{
    "id": "čeng-čou",
    "city": "Čeng-čou",
    "peoples": 95320000,
    "sign": "",
    "text": "Henan"
},
{
    "id": "wu-chan",
    "city": "Wu-chan",
    "peoples": 58160000,
    "sign": "",
    "text": "Hubei"
},
{
    "id": "taiyuan",
    "city": "Taiyuan",
    "peoples": 36500000,
    "sign": "",
    "text": "Shanxi"
},{
    "id": "si-an",
    "city": "Si-an",
    "peoples": 37327378,
    "sign": "",
    "text": "Shaanxi"
},{
    "id": "yinchuan",
    "city": "Yinchuan",
    "peoples": 6639973,
    "sign": "",
    "text": "Ningxia"
},{
    "id": "chaj-kchou",
    "city": "Chaj-kchou",
    "peoples": 9171300,
    "sign": "",
    "text": "Hainan"
},{
    "id": "ürümqi",
    "city": "Ürümqi",
    "peoples": 1664897,
    "sign": "kunfuc.jpg",
    "text": "Xinjiang"
},
{
    "id": "xining",
    "city": "Xining",
    "peoples": 1664897,
    "sign": "kunfuc.jpg",
    "text": "Qinghai"
},
{
    "id": "lhasa",
    "city": "Lhasa",
    "peoples": 3145000,
    "sign": "",
    "text": "Xizang"
},{
    "id": "guangzhou",
    "city": "Guangzhou",
    "peoples": 113460000,
    "sign": "",
    "text": "Guangdong"
},{
    "id": "che-fej",
    "city": "Che-fej",
    "peoples": 59500510,
    "sign": "",
    "text": "Anhui"
},{
    "id": "fuzhou",
    "city": "Fuzhou",
    "peoples": 38565000,
    "sign": "",
    "text": "Fujian"
},{
    "id": "peking",
    "city": "Peking",
    "peoples": 21542000,
    "sign": "",
    "text": "Beijing"
},{
    "id": "guangzhou",
    "city": "Guangzhou",
    "peoples": 28846170,
    "sign": "",
    "text": "Chongqing"
},{
    "id": "kuej-jang",
    "city": "Kuej-jang",
    "peoples": 35550000,
    "sign": "",
    "text": "Guizhou"
},{
    "id": "nan-ning",
    "city": "Nan-ning",
    "peoples": 48680000,
    "sign": "",
    "text": "Guangxi"
},{
    "id": "si-ning",
    "city": "Si-ning",
    "peoples": 5834200,
    "sign": "",
    "text": "Qinghai"
},{
    "id": "lanzhou",
    "city": "Lanzhou",
    "peoples": 25575254,
    "sign": "",
    "text": "Gansu"
}
];

/*let unesco = [
{
    "id": "lednice",
    "locality": "Lednicko-valtický areál",
    "year": 1996,
    "photo": "lednice.jpg",
    "description": "Současnou podobu dala zámku novogotická přestavba ve stylu tudorské gotiky z let 1846-1858, jejímž autorem byl Jiří Wingelmüller. Část barokního zdiva sice zůstala zachována, ale nový vzhled fasády byl doplněn o řadu přístaveb a nových prvků, jako jsou cimbuří, balkóny, arkýře, komíny a věžičky. Romantický novogotický vzhled získaly také interiéry s vynikajícími ukázkami bohaté řezbářské výzdoby. Za pozornost stojí vřetenové schodiště v knihovně, kazetový strop z lipového dřeva v modrém sále, reliéf stromu života ze slonové kosti či mramorové krby.",
    "url": "https://www.unesco-czech.cz/lednicko-valticky-areal/predstaveni/#page_start"
},
{
    "id": "kromeriz",
    "locality": "Kroměříž: Arcibiskupský zámek a zahrady",
    "year": 1998,
    "photo": "kromeriz.jpg",
    "description": "Vznik a vývoj zámku je nerozlučně spjat s historií olomouckého biskupství, arcibiskupství a poddanské obce olomouckých biskupů. Interiéry zámku jsou bohatě zdobeny a vybaveny množstvím původního dobového zařízení. Za povšimnutí stojí Trůnní, Sněmovní a Manský sál, Lovecká síň, Carský salon, stará knihovna a letní byt. Obrazárna uchovává díla předních evropských malířů 15.-18. století (Tizian, Lucas Cranach st., Hans von Aachen, Paolo Veronese či Jan Breughel st.). Takzvaná Podzámecká zahrada byla původně jakousi zásobní zelinářskou a květinovou zahradou. V průběhu 17. století byla přeměněna na barokní zahradu a stala se jakýmsi plynulým pokračováním zámku. Devatenácté století proměnilo tuto  zahradu na stylový krajinářský park o rozloze 64 hektarů. Geometricky pravidelná je Květná zahrada s uměle navršenými jahodovými kopečky, čtvercovým i kulatým bludištěm a  stěnami stříhaných stromů a keřů. Za pozornost stojí Lví kašna a kašna Tritonů.",
    "url": "https://www.unesco-czech.cz/kromeriz/predstaveni/#page_start"
},
{
    "id": "tugendhat",
    "locality": "Brno: Vila Tugendhat",
    "year": 2001,
    "photo": "tugendhat.jpg",
    "description": "Vila Tugendhat byla postavena v letech 1929-1930 pro manžele Tugendhatovy v Brně - Černých Polích. Projektováním domu byl pověřen jeden z nejvýznamnějších evropských architektů té doby Ludwig Mies van der Rohe. Architekt rozvrhl vilu do tří úrovní. Hlavní podlaží rozčlenil na vstupní, společenskou, pracovní a jídelní část. V suterénu byla prádelna, sklady, fotokomora a kotelna. Horní podlaží mělo obytný charakter, tj. byly zde ložnice, pokoje dětí a chůvy. Také zahrada byla součástí architektonického návrhu. V roce 1938 manželé Tugendhatovi emigrovali do švýcarského St. Gallen. Během války byl dům zabaven gestapem a při osvobozování Brna byl poničen. Provedené opravy a nevhodné úpravy se architektonické podstaty stavby naštěstí nedotkly. Dnes je přístupná veřejnosti jako muzeum.",
    "url": "https://www.unesco-czech.cz/brno/predstaveni/#page_start"
},
{
    "id": "zelena-hora",
    "locality": "Poutní kostel sv. Jana Nepomuckého na Zelené hoře",
    "year": 1994,
    "photo": "zelena-hora.jpg",
    "description": "Poutní kostel sv. Jana Nepomuckého byl založen počátkem 18. století. Je jedním z nejlepších projektů architekta Jana Blažeje Santiniho-Aichla (1677-1723) a zároveň nejoriginálnějším příkladem takzvané barokní gotiky. Kostel obklopuje ambit, který je s centrální stavbou kompozičně propojen. Celkově nevelký centrální kostel se vymyká jakémukoliv popisu. Jeho tvary dané komplikovanými průniky šesti kružnic ve tvaru pěticípé hvězdy spolu s virtuózní hrou světel a stínů v interiéru, tvarová osobitost a čistota exteriéru, to vše je dostatečným důvodem k jeho návštěvě.",
    "url": "https://www.unesco-czech.cz/zdar-nad-sazavou/predstaveni/#page_start"
},
{
    "id": "morovy-sloup",
    "locality": "Sloup Nejsvětější Trojice v Olomouci",
    "year": 2000,
    "photo": "olomouc.webp",
    "description": "Budování morových sloupů odstartoval Tridentský koncil, který tak dal období baroka jeden z výrazných rysů. Vzorem byl sloup na Piazza Santa Maria Maggiore v Římě, vztyčený roku 1614. Dobou svého vzniku v letech 1716-1754 patří olomoucký monument až k posledním příkladům této módní vlny. Ale svou výtvarnou koncepcí, bohatstvím figurální výzdoby a konečně i rozměry a výškou (35 m) se od všech podobných památek výrazně odlišuje. Sloup se po svém dokončení stal pro obyvatele města zdrojem nesmírné hrdosti, protože všichni, kdo se na jeho stavbě podíleli, byli občany Olomouce. Jeho vysvěcení 9. září se osobně účastnil tehdejší první pár monarchie, císařovna Marie Terezie se svým manželem Františkem I. Štěpánem Lotrinským.",
    "url": "https://www.unesco-czech.cz/olomouc/predstaveni/#page_start"
},
{
    "id": "litomysl",
    "locality": "Litomyšl: Zámek a zámecký areál",
    "year": 1999,
    "photo": "litomysl.jpg",
    "description": "Renesanční zámek z druhé poloviny 16. století je významným dokladem arkádového zámku italského typu. Přes úpravy interiéru, především na konci 18. století, si stále uchoval téměř nedotčený vzhled z dob renesance, včetně unikátní sgrafitové výzdoby fasád a štítů. Dochovaly se také mnohé hospodářské budovy a zámecká zahrada. Zápisem tohoto komplexu na seznam UNESCO mu byl přiznán i jeho světově výjimečný význam. Ve své unikátně dochované celistvosti je dokonalou ukázkou umělecky cenné architektury. Je skvělým dokladem středoevropské šlechtické residence z období renesance, která si uchovala svou jedinečnost i po následných přeměnách ve stylu nových uměleckých směrů.",
    "url": "https://www.unesco-czech.cz/litomysl/predstaveni/#page_start"
},
{
    "id": "trebic",
    "locality": "Bazilika sv. Prokopa a židovská čtvrť",
    "year": 2003,
    "photo": "trebic.jpg",
    "description": "Původně byla bazilika sv. Prokopa zasvěcena Panně Marii, ale kvůli celkové devastaci během mnoha válek byl objekt více jak 200 let užíván výhradně ke světským účelům. Po obnově byla bazilika zasvěcena sv. Prokopovi a opět využívána církví. K nejcennějším částem baziliky patří krypta s původní, více než 700 let starou výdřevou stropu. Současnou podobu interiéru baziliky vytvořil Kamil Hilbert v letech 1924-1935. Třebíč kdysi patřila k významným střediskům židovské kultury na Moravě a unikátně zachovaná židovská čtvrť je němým svědectvím soužití Židů a křesťanů. Židovská čtvrť s hustou zástavbou zahrnuje více jak 120 obytných domů, které doplňují objekty bývalých židovských institucí - radnice, školy, rabinátu a chudobince. Zadní synagoga navíc nabízí ve své expozici dobové informace o historii židovské čtvrti. Přední synagoga dnes slouží jako modlitebna Československé církve husitské. Původní židovský hřbitov byl v 17. století přemístěn na severní svah kopce Hrádek, kde je dnes k vidění kolem 3 000 kamenných náhrobků, z nichž nejstarší pochází z roku 1631. Součástí hřbitova je také obřadní síň z roku 1903 s unikátně dochovaným interiérem, kde se dodnes  mohou provádět pohřební obřady podle starých židovských tradic.",
    "url": "https://www.unesco-czech.cz/trebic/predstaveni/#page_start"
},
{
    "id": "telc",
    "locality": "Telč: Historické centrum",
    "year": 1992,
    "photo": "telc.jpg",
    "description": "Historické jádro města, uzavřené rybníky a branami, si udrželo po celá staletí svou osobitou tvář z časů Zachariáše z Hradce. Předně je to původní královská vodní tvrz z 13. století, založená na křižovatce obchodních cest, která získala, spolu s historickým jádrem města, svou dnešní podobu díky přestavbě ze 16. století. Rozsáhlý renesanční zámecký komplex pochází z dílny architekta B. Maggiho z Arogna. K zámku ještě přiléhá zajímavě dispozičně řešená zahrada s parkem. Uvnitř  zámku jistě každého zaujmou honosné interiéry s jedinečnou výzdobou, dobovým zařízením a cennými sbírkami. V bývalém purkrabství je dnes muzeum s etnografickými sbírkami a expozicí o historii města. Kromě zámku patří mezi nejvýznačnější telčské památky také náměstí s unikátním nenarušeným komplexem historických domů v renesančním a barokním stylu. Podloubí a průčelí těchto domů byla v drtivé většině stavěna podle jednotného plánu.",
    "url": "https://www.unesco-czech.cz/telc/predstaveni/#page_start"
},
{
    "id": "holasovice",
    "locality": "Holašovice - areál vesnice",
    "year": 1998,
    "photo": "holasovice.jpg",
    "description": "Vesnice leží asi 16 km západně od Českých Budějovic. Na Seznam UNESCO byl zapsán téměř zcela dochovaný středověký systém obytných domů a sýpek. Ty jsou propojeny ohradními zdmi s brankami a klenutými vjezdy do prostoru návsi, což spolu s dochovaným štukovým dekorem (tzv. lidové nebo selské baroko) na většině průčelí dává celému sídlu neopakovatelnou atmosféru a výraz. Komplex uvedený v Seznamu čítá 23 památkově chráněných usedlostí s celkem 120 budovami. Najdeme zde nejen výstavné statky se špýchary, stodolami, maštalemi a výměnky, ale také kovárnu, hostinec a kapličku. Usedlosti jsou rozloženy po obvodu rozlehlé obdélníkové návsi (210x70 m). K unikátním patří například studny s dřevěnou pístovou pumpou nebo Selský dvůr č. p. 6, který je rodinným selským sídlem již od roku 1530.",
    "url": "https://www.unesco-czech.cz/holasovice/predstaveni/#page_start"
},
{
    "id": "cesky-krumlov",
    "locality": "Státní hrad a zámek Český Krumlov",
    "year": 1992,
    "photo": "cesky-krumlov.jpg",
    "description": "Historické jádro města, uzavřené rybníky a branami, si udrželo po celá staletí svou osobitou tvář z časů Zachariáše z Hradce. Předně je to původní královská vodní tvrz z 13. století, založená na křižovatce obchodních cest, která získala, spolu s historickým jádrem města, svou dnešní podobu díky přestavbě ze 16. století. Rozsáhlý renesanční zámecký komplex pochází z dílny architekta B. Maggiho z Arogna. K zámku ještě přiléhá zajímavě dispozičně řešená zahrada s parkem. Uvnitř  zámku jistě každého zaujmou honosné interiéry s jedinečnou výzdobou, dobovým zařízením a cennými sbírkami. V bývalém purkrabství je dnes muzeum s etnografickými sbírkami a expozicí o historii města. Kromě zámku patří mezi nejvýznačnější telčské památky také náměstí s unikátním nenarušeným komplexem historických domů v renesančním a barokním stylu. Podloubí a průčelí těchto domů byla v drtivé většině stavěna podle jednotného plánu.",
    "url": "https://www.unesco-czech.cz/cesky-krumlov/predstaveni/#page_start"
},
{
    "id": "kutna-hora",
    "locality": "Historické jádro Kutné Hory s chrámem sv. Barbory a katedrálou Nanebevzetí Panny Marie v Sedlci",
    "year": 1995,
    "photo": "kutna-hora.jpg",
    "description": "Historické jádro Kutné Hory s pozdně gotickým chrámem svaté Barbory a kostelem Nanebevzetí Panny Marie v Sedlci představuje jedinečně dochovanou středověkou urbanistickou strukturu s řadou gotických, renesančních a barokních domů. K dalším významným památkám patří také Vlašský dvůr, pozdně gotický měšťanský Kamenný dům, kostel sv. Jakuba, Jezuitská kolej nebo klášter řádu sv. Voršily. Díky patriotismu místních občanů a také v důsledku zápisu některých částí města do kulturního a přírodního dědictví UNESCO bylo v uplynulých deseti letech opraveno mnoho domů historického jádra, byla zahájena celková rekonstrukce chrámu sv. Barbory a komplexní rekonstrukcí prochází i katedrála Nanebevzetí Panny Marie v Sedlci stejně jako areál Jezuitské koleje. Můžeme říci, že pro tyto památky, které jsou odkazem našich předků, udělalo město mnohé a mnohé ještě hodlá udělat. Cílem je zvelebit i další části města, které budou vkladem příštím generacím.",
    "url": "https://www.unesco-czech.cz/kutna-hora/predstaveni/#page_start"
},
{
    "id": "kladruby",
    "locality": "Kladruby nad Labem: Krajina pro chov koní v Kladrubech",
    "year": 2019,
    "photo": "kladruby.jpg",
    "description": "Kulturní krajina zahrnuje nejen hřebčín, ale okolní pastviny včetně uměle zbudovaných vodních kanálů a přímých komunikací lemovanými alejemi. Krajina je vynikajícím spojením díla přírody a člověka v zachovalé předindustriální podobě a reprezentuje významný fenomén lidské civilizace, kterým byl po staletí specializovaným chov ceremoniálních, reprezentativních koní. Hřebčín po staletí slouží k chovu tzv. starokladrubských běloušů, kteří představují celosvětově unikátní podobu barokního koně, který se nevyskytuje v žádném dalším hřebčíně světa.",
    "url": "https://www.unesco-czech.cz/kladruby-nad-labem/predstaveni/#page_start"
},
{
    "id": "praha-unesco",
    "locality": "Praha - historické centrum",
    "year": 1992,
    "photo": "praha.webp",
    "description": "Praha je nejvýznamnější městskou památkovou rezervací u nás. Historické jádro o rozloze 866 hektarů zahrnuje unikátní urbanistický celek Pražského hradu a Hradčan, Malé Strany včetně Karlova mostu, Starého Města s Josefovem (dochovaná část bývalého Židovského Města), Nového Města, Vyšehradu i jejich jednotlivé památky. Rozsáhle založené Nové Město v návaznosti na pozdější přestavby v nových stavebních slozích svědčí o umělecko-společenském a kulturním vlivu Prahy od středověku do současnosti.",
    "url": "https://www.unesco-czech.cz/praha/predstaveni/#page_start"
},
{
    "id": "krusnohori",
    "locality": "Hornický region Erzgebirge / Krušnohoří",
    "year": 2019,
    "photo": "krusnohori.webp",
    "description": "Díky více než 800 letům téměř soustavné těžby a zpracování rud vznikla v Krušných horách jedinečná hornická krajina s unikátními montánními památkami v nadzemí i podzemí a s hustou sítí horních měst. Dokládá obrovský vliv, který měla těžba a zpracování rud na obou stranách pohoří na rozvoj hornictví a hutnictví po celém světě, konkrétně přínosem světově významných vynálezů a inovací v oblasti báňských a hutních technologií. Na české straně se jedná o hornické krajiny Jáchymov, Abertamy – Boží Dar – Horní Blatná, Krupka, Mědník a Rudou věž smrti.",
    "url": "https://www.unesco-czech.cz/krusnohori/predstaveni/#page_start"
}
];*/

/* jQuery skript */
$(function(){

    /* Skrytí všech SVG objektů circle - v tomto případě označujících na mapě památky UNESCO */
    $("#mapicka circle").hide();
    /* Ovládací přepínače, které zajišťují zobrazení nebo skrytí SVG objektů na mapě */
    /* Při změně stavu přepínače se skryjí / zobrazí obdélníky symbolizující krajská města */
    $("#mesta").on('change', function(){
        $("#mapicka rect").toggle(500);
    });

    /* Při změně stavu přepínače se skryjí / zobrazí kruhy symbolizující památky UNESCO */
    $("#unesco").on('change', function(){
        $("#mapicka circle").toggle(500);
    });

    /* Pomocná proměnná pro uložení původního nastavení stylu výplně (fill) SVG objektu path */   
    let puvodni = '';  

    /* Při přejetí kurzoru myši nad některým SVG objektem typu path (nepravidelný uzavřený mnohoúhelník) se provede: */
    $("#mapicka path").on('mouseover', function(){
        /* Pouze v situaci, kdy přepínač s id kraje je ve stavu "checked" - zaškrtnuto */
        if ($("#kraje:checked").val()) {
            /* Do pomocné proměnné puvodni se uloží barva výplně objektu path */
            puvodni = $(this).css('fill');
            /* Právně aktivní objekt se vyplní červenou barvou */
            $(this).css('fill','red');
            /* Nastaví se pro danou oblast popover (grafické vyskakovací okénko) - součást externí knihovny bootstrap4-toggle */
            $(this).popover({
                /* definice spouštěcí akce zobrazení okénka - při kliknutí */
                'trigger':'click',
                /* umístění okénka vůči objektu */
                'placement': 'right',
                /* odsazení okénka vůči pravé hraně objektu - v ose y a x */
                'offset': '10%, -100',
                /* do titulku okénka vloží text, který je pro daný SVG prvek obsažen v tagu title */
                'title': $(this).find('title').text()
            });            
        }
    });
    
    /* Když myš opustí objekt path: */
    $("#mapicka path").on('mouseout', function(){
        /* dojde ke změně výplně na původní hodnotu */
        $(this).css('fill', puvodni);
    });


    /* Při kliknutí na některý z SVG objektů typu rect (obdélníky - tj. krajská města): */
    $("#mapicka rect").on('click', function(){
        /* do proměnné id se uloží identifikátor daného objektu - města */
        let id = $(this).attr('id');
        /* všechny objekty rect a circle se nejprve vyplní výchozími barvami */
        $("#mapicka rect").css('fill','black');
        $("#mapicka circle").css('fill','red');
        /* pouze právě aktivní objekt bude nastaven na žlutou barvu */
        $(this).css('fill','yellow');
        /* s využitím metody find se do proměnné mesto vyhledá v JSON poli mesta objekt podle odpovídajícího id */
        let mesto = mesta.find(item => {return item.id == id});
        /* během efektu zprůhlednění (1 s.) se pomocí callback funkce vyplní blok #info příslušnými daty o vybraném městě  */
        $('#info').fadeOut(1000, function() {$('#info').html(`<div class="col-12"><h2 class="bg-primary"> ${mesto.city} <small class="text-small">${new Intl.NumberFormat('cs-CS').format(mesto.peoples)} obv.</small></h2></div><div class="col-2"><img src="img/${mesto.sign}" class="img-fluid"></div><div class="col-10">${mesto.text}</div>`)});
        $('#info').fadeIn(1000);
    });  
    
    /* Při kliknutí na některý z SVG objektů typu circle (kruhy - tj. památky UNESCO) se obdobným způsobem zobrazí 
       podrobnější informace o vybrané památce */
    /*$("#mapicka circle").on('click', function(){
        let id = $(this).attr('id');
        $("#mapicka rect").css('fill','black');
        $("#mapicka circle").css('fill','red');
        $(this).css('fill','yellow');
        let pamatka = unesco.find(item => {return item.id == id});
        $('#info').slideUp(1000, function(){$('#info').html(`<div class="col-12"><h2 class="bg-info">${pamatka.locality} <small class="text-small">(od roku ${pamatka.year})</small></h2></div><div class="col-4"><img src="img/${pamatka.photo}" class="img-fluid"></div><div class="col-8"><p>${pamatka.description}</p><p><a href="${pamatka.url}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`)});
        $('#info').slideDown(1000);
    });*/    

});
