const url = "https://economia.awesomeapi.com.br/last/"
const comboMoedasQuantia = document.getElementById("moeda-quantia");
const comboMoedasConvert = document.getElementById("moeda-convert");
const inputQuantia = document.getElementById("input-quantia");
const inputConvert = document.getElementById("input-convert");

const Moedas = {
	"BRL": "Real Brasileiro",
    "USD": "Dólar Americano",
    "EUR": "Euro",
    "BTC": "Bitcoin",
}

/*const Moedas = {
	"Dirham dos Emirados": "AED",
	"Afghani do Afeganistão":"AFN",
    "Lek Albanês":"ALL",
    "Dram Armênio":"AMD",
    "Guilder das Antilhas":"ANG",
    "Kwanza Angolano":"AOA",
    "Peso Argentino":"ARS",
    "Dólar Australiano":"AUD",
    "Manat Azeri":"AZN",
    "Marco Conversível":"BAM",
    "Dólar de Barbados":"BBD",
    "Taka de Bangladesh":"BDT",
    "Lev Búlgaro":"BGN",
    "Dinar do Bahrein":"BHD",
    "Franco Burundinense":"BIF",
    "Dólar de Brunei":"BND",
    "Boliviano":"BOB",
    "Real Brasileiro":"BRL",
    ">Real Brasileiro Turismo<":"BRLT",
    "Dólar das Bahamas":"BSD",
    "Bitcoin":"BTC",
    "Pula de Botswana":"BWP",
    "Rublo Bielorrusso":"BYN",
    "Dólar de Belize":"BZD",
    "Dólar Canadense":"CAD",
    "Franco Suíço":"CHF",
    "TS>Franco Suíço</C":"CHFR",
    "Peso Chileno":"CLP",
    "Yuan chinês offshore":"CNH",
    "Yuan Chinês":"CNY",
    "Peso Colombiano":"COP",
    "Colón Costarriquenho":"CRC",
    "Peso Cubano":"CUP",
    "Escudo cabo-verdiano":"CVE",
    "Coroa Checa":"CZK",
    "Franco do Djubouti":"DJF",
    "Coroa Dinamarquesa":"DKK",
    ">Dogecoin<":"DOGE",
    "Peso Dominicano":"DOP",
    "Dinar Argelino":"DZD",
    "Libra Egípcia":"EGP",
    "Birr Etíope":"ETB",
    "Ethereum":"ETH",
    "Euro":"EUR",
    "Dólar de Fiji":"FJD",
    "Libra Esterlina":"GBP",
    "Lari Georgiano":"GEL",
    "Cedi Ganês":"GHS",
    "Dalasi da Gâmbia":"GMD",
    "Franco de Guiné":"GNF",
    "Quetzal Guatemalteco":"GTQ",
    "Dólar de Hong Kong":"HKD",
    "Lempira Hondurenha":"HNL",
    "Kuna Croata":"HRK",
    "Gourde Haitiano":"HTG",
    "Florim Húngaro":"HUF",
    "Rupia Indonésia":"IDR",
    "Novo Shekel Israelense":"ILS",
    "Rúpia Indiana":"INR",
    "Dinar Iraquiano":"IQD",
    "Rial Iraniano":"IRR",
    "Coroa Islandesa":"ISK",
    "Dólar Jamaicano":"JMD",
    "Dinar Jordaniano":"JOD",
    "Iene Japonês":"JPY",
    "Iene Japonês":"JPYRTS",
    "Shilling Queniano":"KES",
    "Som Quirguistanês":"KGS",
    "Riel Cambojano":"KHR",
    "Franco Comorense":"KMF",
    "Won Sul-Coreano":"KRW",
    "Dinar Kuwaitiano":"KWD",
    "Dólar das Ilhas Cayman":"KYD",
    "Tengue Cazaquistanês":"KZT",
    "Kip Laosiano":"LAK",
    "Libra Libanesa":"LBP",
    "Rúpia de Sri Lanka":"LKR",
    "Loti do Lesoto":"LSL",
    "Litecoin":"LTC",
    "Dinar Líbio":"LYD",
    "Dirham Marroquino":"MAD",
    "Leu Moldavo":"MDL",
    "Ariary Madagascarense":"MGA",
    "Denar Macedônio":"MKD",
    "Kyat de Mianmar":"MMK",
    "Mongolian Tugrik":"MNT",
    "Pataca de Macau":"MOP",
    "Ouguiya Mauritana":"MRO",
    "Rúpia Mauriciana":"MUR",
    "Rufiyaa Maldiva":"MVR",
    "Kwacha Malauiana":"MWK",
    "Peso Mexicano":"MXN",
    "Ringgit Malaio":"MYR",
    "Metical de Moçambique":"MZN",
    "Dólar Namíbio":"NAD",
    "Naira Nigeriana":"NGN",
    "Naira Nigeriana":"NGNI",
    "Naira Nigeriana":"NGNPARALLEL",
    "Córdoba Nicaraguense":"NIO",
    "Coroa Norueguesa":"NOK",
    "Rúpia Nepalesa":"NPR",
    "Dólar Neozelandês":"NZD",
    "Rial Omanense":"OMR",
    "Balboa Panamenho":"PAB",
    "Sol do Peru":"PEN",
    "Kina Papua-Nova Guiné":"PGK",
    "Peso Filipino":"PHP",
    "Rúpia Paquistanesa":"PKR",
    "Zlóti Polonês":"PLN",
    "Guarani Paraguaio":"PYG",
    "Rial Catarense":"QAR",
    "Leu Romeno":"RON",
    "Dinar Sérvio":"RSD",
    "Rublo Russo":"RUB",
    "Rublo Russo":"RUBTOD",
    "Rublo Russo":"RUBTOM",
    "Franco Ruandês":"RWF",
    "Riyal Saudita":"SAR",
    "Rúpias de Seicheles":"SCR",
    "Libra Sudanesa":"SDG",
    "DSE":"SDR",
    "Coroa Sueca":"SEK",
    "Dólar de Cingapura":"SGD",
    "Shilling Somaliano":"SOS",
    "Dobra São Tomé/Príncipe":"STD",
    "Colon de El Salvador":"SVC",
    "Libra Síria":"SYP",
    "Lilangeni Suazilandês":"SZL",
    "Baht Tailandês":"THB",
    "Somoni do Tajiquistão":"TJS",
    "TMT":"TMT",
    "Dinar Tunisiano":"TND",
    "Nova Lira Turca":"TRY",
    "Dólar de Trinidad":"TTD",
    "Dólar Taiuanês":"TWD",
    "Shilling Tanzaniano":"TZS",
    "Hryvinia Ucraniana":"UAH",
    "Shilling Ugandês":"UGX",
    "Dólar Americano":"USD",
    "Dólar Americano":"USDT",
    "Peso Uruguaio":"UYU",
    "Som Uzbequistanês":"UZS",
    "Bolívar Venezuelano":"VEF",
    "Dong Vietnamita":"VND",
    "Vatu de Vanuatu":"VUV",
    "Franco CFA Central":"XAF",
    "Prata":"XAGG",
    "Brent Spot":"XBR",
    "Dólar do Caribe Oriental":"XCD",
    "Franco CFA Ocidental":"XOF",
    "Franco CFP":"XPF",
    "XRP":"XRP",
    "Riyal Iemenita":"YER",
    "Rand Sul-Africano":"ZAR",
    "Kwacha Zambiana":"ZMK",
    "Dólar Zimbabuense":"ZWL",
    "Ouro":"XAU",
}*/

let textoQuantia = comboMoedasQuantia.value;
let textoConvert = comboMoedasConvert.value;
//let textoMoedas = textoQuantia + textoConvert;
//const apenasNumeros = new RegExp('^[0-9]+$');

async function TaxaConversao() { // Retorna o ask
    if (textoQuantia != textoConvert) {
        const responseJson = await fetch(url + textoQuantia + '-' + textoConvert)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {       
            return Object.values(data)[0].ask;
            //return  data["textoMoedas"].ask;
        });
        return responseJson;
    } 
};

async function HorarioConversao() { // Retorna o create_date
    if (await TaxaConversao()) {
        const responseJson = await fetch(url + textoQuantia + '-' + textoConvert)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {       
            return Object.values(data)[0].create_date;
            //return  data["textoMoedas"].ask;
        });
        return responseJson;
    }
};

async function StatusConversao() { // Retorna o status
    const responseJson = await fetch(url + textoQuantia + '-' + textoConvert)
    .then(function(response) {
        return response.status;
    })
    return responseJson;
};

async function Conversao(valor) {
    const status = await StatusConversao();
    if (status === 200 || textoQuantia === textoConvert) {
        if (textoQuantia != textoConvert) {
            inputConvert.value = parseFloat(valor) * await TaxaConversao();
        }
        else {
            inputConvert.value = inputQuantia.value
        } 
        document.getElementById("error").innerText = ""
    
        textosTelas()
    }
    else {
        inputConvert.value = "";
        document.getElementById("error").innerText = "Conversão indisponível"
    }       
}

comboMoedasQuantia.addEventListener('change', function() {
    optionQuantia = this.selectedOptions[0];
    textoQuantia = optionQuantia.textContent;
    if (inputQuantia.value != null)
        Conversao(inputQuantia.value); 
});

comboMoedasConvert.addEventListener('change', function() {
    optionConvert = this.selectedOptions[0];
    textoConvert = optionConvert.textContent;
    if (inputQuantia.value != null)
        Conversao(inputQuantia.value);    
});

inputQuantia.addEventListener('change', function() {
    return Conversao(inputQuantia.value);
});

async function textosTelas() {
    const titulo = document.getElementById("titulo"); 
    const tituloCotacao = document.getElementById("cotacao"); 
    const horarioCotacao = document.getElementById("horarioCotacao");
    let moedaQuantia;
    let moedaConvert;
    const status = await StatusConversao();
    const taxa = await TaxaConversao();
    const horario = await HorarioConversao();
    const today = new Date(Date.now())

    switch(textoQuantia) {
        case 'BRL':
            moedaQuantia = Moedas.BRL;
            break;
        case 'USD':
            moedaQuantia = Moedas.USD;
            break;
        case 'EUR':
            moedaQuantia = Moedas.EUR;
            break;
        case 'BTC':
            moedaQuantia = Moedas.BTC;
            break;
    }
    switch(textoConvert) {
        case 'BRL':
            moedaConvert = Moedas.BRL;
            break;
        case 'USD':
            moedaConvert = Moedas.USD;
            break;
        case 'EUR':
            moedaConvert = Moedas.EUR;
            break;
        case 'BTC':
            moedaConvert = Moedas.BTC;
            break;
    }
    
    titulo.innerText = inputQuantia.value + " " + moedaQuantia + " para " + moedaConvert;
    tituloCotacao.innerText = "1.0000" + " " + textoQuantia + " = " + (status === 200 ? taxa : "1.0000") + " " + textoConvert;
    horarioCotacao.innerText = "Câmbio comercial às: " + (status === 200 ? horario : today.toLocaleString());
}


