# duty-pharmacy-api

Steps for working your local: 
- Clone the repo
- Run nmp install
- Run npm start
- Happy Coding

## LIVE
BASE_URL : https://eczaci-api.vercel.app/get/

### For the City
If you want to see pharmacies in your current city, You can send GET method with this URL: 

` https://eczaci-api.vercel.app/get/City `

### For the County
If you want to see pharmacies in your current county, You can send GET method with this URL: 

` https://eczaci-api.vercel.app/get/City/County `

## Examples

### For Sinop

My URL like this: ` https://eczaci-api.vercel.app/get/sinop `

and this is the response:

```json
// 20230106125738
// https://eczaci-api.vercel.app/get/sinop

[
  {
    "city": "Sinop",
    "town": "Ayancık",
    "name": "Yüksel Eczanesi",
    "address": "YALI MAH.ATATÜRK CAD.NO:26/A",
    "phone": "03686131631"
  },
  {
    "city": "Sinop",
    "town": "Ayancik",
    "name": "Yüksel Eczanesi",
    "address": "YALI MAH.ATATÜRK CAD.NO:26/A",
    "phone": "03686131631"
  },
  {
    "city": "Sinop",
    "town": "Ayancik",
    "name": "Yavuz Eczanesi",
    "address": "YALI MAH.ATATÜRK CAD. HASTANE SOK. NO:1/A",
    "phone": "03686131311"
  },
  {
    "city": "Sinop",
    "town": "Boyabat",
    "name": "Genç Eczanesi",
    "address": "ZİNCİRLİKUYU MAH. HÜSAMETTİN DAYIBAŞ CAD. NO:6/C",
    "phone": "03683152036"
  },
  {
    "city": "Sinop",
    "town": "Boyabat",
    "name": "Genç Eczanesi",
    "address": "ZİNCİRLİKUYU MAH. HÜSAMETTİN DAYIBAŞ CAD. NO:6/C",
    "phone": "03683152036"
  },
  {
    "city": "Sinop",
    "town": "Boyabat",
    "name": "Büyük Eczanesi",
    "address": "KUMLUK MAH. STADYUM CAD. NO:17",
    "phone": "03683152785"
  },
  {
    "city": "Sinop",
    "town": "Durağan",
    "name": "Selver Eczanesi",
    "address": "GÖKIRMAK MAH. CUMHURİYET CAD. NO:42A/B",
    "phone": "03684161606"
  },
  {
    "city": "Sinop",
    "town": "Durağan",
    "name": "Selver Eczanesi",
    "address": "GÖKIRMAK MAH. CUMHURİYET CAD. NO:42A/B",
    "phone": "03684161606"
  },
  {
    "city": "Sinop",
    "town": "Durağan",
    "name": "Erdoğan Eczanesi",
    "address": "MERKEZ MAH. PLEVNE CAD. NO:27/A",
    "phone": "03684162277"
  },
  {
    "city": "Sinop",
    "town": "Erfelek",
    "name": "Şifa Eczanesi",
    "address": "MERKEZ MAH. CUMHURİYET CAD. NO:2",
    "phone": "03685112115"
  },
  {
    "city": "Sinop",
    "town": "Erfelek",
    "name": "Şifa Eczanesi",
    "address": "MERKEZ MAH. CUMHURİYET CAD. NO:2",
    "phone": "03685112115"
  },
  {
    "city": "Sinop",
    "town": "Erfelek",
    "name": "Erfelek Eczanesi",
    "address": "CUMHURİYET MEYDANI NO:18",
    "phone": "03685112039"
  },
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Yenice Eczanesi",
    "address": "HAMİDİYE MAH.VATAN BULVARI NO:38/A",
    "phone": "03687184885"
  },
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Yenice Eczanesi",
    "address": "HAMİDİYE MAH.VATAN BULVARI NO:38/A",
    "phone": "03687184885"
  },
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Ekin Eczanesi",
    "address": "HAMİDİYE MAH. RECAİ KURUOĞLU BULVARI NO:39",
    "phone": "03687184837"
  },
  {
    "city": "Sinop",
    "town": "Merkez",
    "name": "Yasemin Eczanesi",
    "address": "GELİNCİK MAH.FATİH CAD.23/B",
    "phone": "03682618709"
  },
  {
    "city": "Sinop",
    "town": "Merkez",
    "name": "Yasemin Eczanesi",
    "address": "GELİNCİK MAH.FATİH CAD.23/B",
    "phone": "03682618709"
  },
  {
    "city": "Sinop",
    "town": "Merkez",
    "name": "Ada Eczanesi",
    "address": "KEFEVI MAH.OKULLAR CADDESI NO:28/A",
    "phone": "03682600805"
  },
  {
    "city": "Sinop",
    "town": "Türkeli",
    "name": "Yaşam Eczanesi",
    "address": "GÜZELYURT MAH.OSMAN GAZİ SOK.NO.3/A",
    "phone": "03686712276"
  },
  {
    "city": "Sinop",
    "town": "Türkeli",
    "name": "Yaşam Eczanesi",
    "address": "GÜZELYURT MAH.OSMAN GAZİ SOK.NO.3/A",
    "phone": "03686712276"
  },
  {
    "city": "Sinop",
    "town": "Türkeli",
    "name": "Türkeli Eczanesi",
    "address": "GÜZELYURT MAH. ERDEMBEY CAD. CAMİ SOK. NO:7/B",
    "phone": "03686712420"
  }
]

```

### For Sinop's county

My URL like this: ` https://eczaci-api.vercel.app/get/sinop/gerze `

and this is the response:

```json
// 20230106125850
// https://eczaci-api.vercel.app/get/sinop/gerze

[
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Ekin Eczanesi",
    "address": "HAMİDİYE MAH. RECAİ KURUOĞLU BULVARI NO:39",
    "phone": "03687184837"
  },
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Yenice Eczanesi",
    "address": "HAMİDİYE MAH.VATAN BULVARI NO:38/A",
    "phone": "03687184885"
  },
  {
    "city": "Sinop",
    "town": "Gerze",
    "name": "Yenice Eczanesi",
    "address": "HAMİDİYE MAH.VATAN BULVARI NO:38/A",
    "phone": "03687184885"
  }
]
```
