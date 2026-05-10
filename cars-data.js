// ═══════════════════════════════════
// UDrive — Shared car data
// Used by index.html (fleet grid) AND car.html (single-car shareable page).
// Keep this as the single source of truth for hardcoded fleet data.
// ═══════════════════════════════════

window.CARS = [
  // ─── ECONOMY ───
  { id:1,  name:'Renault Clio',     year:2019, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:65,  dep:300,
    imgs:['cars/Renault%20Clio/IMG_3653.jpeg','cars/Renault%20Clio/IMG_3654.jpeg','cars/Renault%20Clio/IMG_3656.jpg','cars/Renault%20Clio/IMG_3658.jpg'],
    features:['A/C','Bluetooth','USB','Rear Camera'],
    desc:"The Clio is one of Europe's bestselling superminis — Renault's long-standing answer to the VW Polo and Ford Fiesta. The 2019 model brings cleaner lines and a more grown-up cabin than earlier generations, and the smooth-shifting automatic gearbox makes city driving genuinely effortless. Diesel fuel keeps day-to-day costs low, even on day trips out of Tirana. With A/C, Bluetooth, USB, and a rear camera, it covers what most travellers actually need without anything they don't." },

  { id:2,  name:'VW Golf 7',        year:2019, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/VW%20Golf%207%20White/IMG_0624.jpeg','cars/VW%20Golf%207%20White/IMG_0626.jpeg','cars/VW%20Golf%207%20White/IMG_0627.jpeg','cars/VW%20Golf%207%20White/IMG_3667.jpg','cars/VW%20Golf%207%20White/IMG_3668.jpg'],
    features:['A/C','Navigation','Bluetooth','Parking Sensors'],
    desc:"The Mk7 Golf is widely regarded as one of the best small cars ever built — solid, quiet, and surprisingly refined for its class. This 2019 example pairs a fuel-sipping diesel engine with a smooth automatic gearbox for genuine motorway comfort and impressive economy on long runs. Volkswagen build quality means tight panel gaps and a cabin that still feels modern years later. Equipped with A/C, navigation, Bluetooth, and parking sensors — a confident airport-to-coast workhorse for solo travellers, couples, or small families." },

  { id:3,  name:'VW Golf 7',        year:2017, cat:'economy', tx:'Manual',    fuel:'Diesel',      seats:5, ppd:55,  dep:300,
    imgs:['cars/VW%20Golf%207%20Black/IMG_3707.jpeg','cars/VW%20Golf%207%20Black/IMG_3708.jpeg','cars/VW%20Golf%207%20Black/IMG_3709.jpg','cars/VW%20Golf%207%20Black/IMG_3711.jpeg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"For drivers who actually enjoy shifting gears, the manual Golf 7 is the connoisseur's choice — and the most affordable way into German engineering in our fleet. The diesel engine returns excellent fuel economy on long highway stretches, and the manual gearbox gives you precise control on the winding coastal roads down to Vlora and Saranda. The Mk7 cabin is famously well-built, with the kind of solid feel you don't expect at this price point. A/C, Bluetooth, and USB charging keep the basics covered for a car that rewards an attentive driver." },

  { id:4,  name:'VW Golf 8',        year:2022, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:70,  dep:300,
    imgs:['cars/VW%20Golf%208/IMG_0854.jpg','cars/VW%20Golf%208/IMG_0855.jpeg','cars/VW%20Golf%208/IMG_0856.jpeg'],
    features:['Digital Cockpit','Navigation','Apple CarPlay','Parking Sensors'],
    desc:"The Golf 8 is the most modern Golf VW has ever produced — a full digital cockpit replaces the traditional dials, the infotainment system supports Apple CarPlay, and the overall ride is noticeably more refined than the Mk7. Just three years old, it still feels new inside, and the 2022 styling is sharp without being aggressive. Ideal for solo travellers, couples, or business visitors who want contemporary tech and comfort without stepping up to an SUV. Parking sensors make tight Old Town spots stress-free." },

  { id:5,  name:'VW Golf Plus',     year:2012, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Golf%20Plus/IMG_0072.jpg','cars/VW%20Golf%20Plus/IMG_0073.JPG','cars/VW%20Golf%20Plus/IMG_0614.jpeg','cars/VW%20Golf%20Plus/IMG_0616.jpeg','cars/VW%20Golf%20Plus/IMG_0617.jpeg'],
    features:['A/C','Navigation','Heated Seats'],
    desc:"The Golf Plus is the underrated taller sibling of the regular Golf — significantly more headroom and a higher seating position that's surprisingly relaxing on long drives. Built on the same platform as the standard Golf, it shares the renowned Volkswagen reliability while offering family-friendly practicality and a more upright cabin. Heated seats and built-in navigation add genuine comfort in winter and on unfamiliar roads. A sensible-money pick for small families that punches above its rental price." },

  { id:6,  name:'VW Jetta',         year:2015, cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:45,  dep:300,
    imgs:['cars/VW%20Jetta/4b85e48d-8c4d-4828-850a-c5cda83c3d9c.JPG','cars/VW%20Jetta/64503795-d55a-4407-ad5f-6c34859e60d5.jpg','cars/VW%20Jetta/f5782295-589f-48cf-908c-5742bf7d9921.jpg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"The Jetta is essentially a Golf with a proper boot — sedan styling, more luggage space, and the same trusted Volkswagen mechanical underpinnings. The 2015 model carries the sharper post-facelift lines and a more refined interior than earlier Jettas. The petrol automatic means stress-free driving in stop-start city traffic and easy cruising on the highway between Tirana and Pristina. Bluetooth and USB charging cover the essentials at a price that's hard to beat for sedan-class comfort." },

  { id:7,  name:'Renault Megane',   year:2018, cat:'economy', tx:'Manual',    fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/Renault%20Megane/IMG_3660.jpeg','cars/Renault%20Megane/IMG_3661.jpg','cars/Renault%20Megane/IMG_3662.jpg','cars/Renault%20Megane/IMG_3663.jpg','cars/Renault%20Megane/IMG_3664.jpg','cars/Renault%20Megane/IMG_3665.jpg','cars/Renault%20Megane/IMG_3666.jpeg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"The fourth-generation Megane represented a genuine step up for Renault — sleeker proportions, a confident stance, and a noticeably more upmarket interior than its predecessors. Renault's diesel engines have a long-standing reputation for fuel economy on motorway runs, and the manual gearbox keeps running costs even lower. With seven photos to study before you book, you know exactly what you're getting. A solid French hatchback with character and refinement to match its German rivals." },

  { id:8,  name:'Ford Mondeo',      year:2020, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/Ford%20Mondeo/3ce92a33-1bc2-4c7d-8cc7-4668e41fadc1.jpg','cars/Ford%20Mondeo/c8bfd05b-2a2e-4080-858b-0b00447f9998.jpg'],
    features:['A/C','Navigation','LED Lights','Parking Sensors'],
    desc:"The Mondeo is Ford's executive sedan in everything but name — large, hushed, and remarkably well-equipped for the money. The 2020 model represents the final evolution of a car that earned its reputation as one of the most comfortable highway cruisers in its class. Full LED lights, navigation, and parking sensors come standard, paired with the kind of planted, weighted feel on motorways that turns long drives into genuine calm. Punches well above its rental price for executive-class comfort." },

  { id:9,  name:'VW Passat',        year:2013, variant:'blue', cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Passat%20Blue/17CF6CC1-E5A1-4B44-B1BD-7017C2E1A2A0.JPG','cars/VW%20Passat%20Blue/3D042D47-A67C-4BF0-A95A-F0E5C476EC09.jpeg','cars/VW%20Passat%20Blue/C6BD6875-C95B-46C5-9F7C-170D8A663B61.JPG'],
    features:['Panoramic Roof','Leather Seats','Navigation','Heated Seats'],
    desc:"The Mk7 Passat was Volkswagen at its most classically refined — a generous executive sedan that genuinely feels like a smaller Audi A6. This blue example is exceptionally well-specced for the rental class: panoramic roof, full leather, navigation, and heated seats — equipment usually reserved for cars at twice the price. The petrol automatic delivers a relaxed, smooth drive across all road types. A favourite for couples and small families touring the Albania-Kosovo loop in proper comfort." },

  { id:10, name:'VW Passat',        year:2013, variant:'grey', cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Passat%20Grey/5C60D808-82AD-4B30-AF6C-9D5B2194D87D.jpeg','cars/VW%20Passat%20Grey/71DB31AF-06F4-4604-A65E-A940E748A59E.jpg','cars/VW%20Passat%20Grey/7329BE88-B8F3-4DA1-8E22-146EEE0D7930.JPG','cars/VW%20Passat%20Grey/C702DF3E-3D95-4477-A7E7-18359CA6119A.jpeg'],
    features:['A/C','Navigation','Bluetooth','Parking Sensors'],
    desc:"The same proven Mk7 Passat platform — the executive-sedan benchmark of its era — in a more understated grey trim. Roomy enough for four adults plus full luggage on a multi-day trip, with the kind of solid, planted ride that makes hours behind the wheel feel like minutes. The petrol automatic is smooth and forgiving in city traffic. Equipped with navigation, parking sensors, and Bluetooth — a discreet, comfortable choice for longer journeys at a fair price." },

  { id:11, name:'Volvo XC70',       year:2012, cat:'economy', tx:'Automatic', fuel:'Petrol/LPG',  seats:5, ppd:65,  dep:300,
    imgs:['cars/Volvo%20XC70/02577358-1f8c-41f2-8402-4ed8fbf4a709.jpeg','cars/Volvo%20XC70/23009205-c575-45af-abfb-597045aed2c2.JPG','cars/Volvo%20XC70/753244e9-fcc6-42d4-98be-0d039f692021.JPG','cars/Volvo%20XC70/cc8d19b3-3d27-43e5-bd7c-17975ffd9512.JPG','cars/Volvo%20XC70/dba730e9-897e-4133-868d-a681e88214ea.JPG','cars/Volvo%20XC70/e1688a6d-f6e5-4d39-9bd3-a3e26c4586fc.JPG'],
    features:['A/C','Navigation','Leather Seats','Roof Rails'],
    desc:"The XC70 is a Swedish institution — a raised-ride wagon built for unpaved roads, snow, and family adventures, and one of the cars that helped define Volvo's reputation for safety and longevity. The leather interior keeps long drives comfortable, the roof rails handle extra luggage or sports gear, and the dual-fuel petrol/LPG system makes it noticeably cheaper to run on long trips into the mountains or down the coast. Navigation included. For families who want space, character, and serious road-trip credibility." },

  // ─── SUV ───
  { id:12, name:'Peugeot 3008',     year:2019, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Peugeot%203008/IMG_0612.jpg','cars/Peugeot%203008/IMG_0613.jpg','cars/Peugeot%203008/IMG_0614.jpg','cars/Peugeot%203008/IMG_0617%202.jpeg','cars/Peugeot%203008/IMG_0618.jpeg','cars/Peugeot%203008/IMG_0619.jpeg'],
    features:['A/C','Navigation','Panoramic Roof','Parking Sensors'],
    desc:"The second-generation 3008 transformed Peugeot's reputation worldwide — its dramatic interior with the i-Cockpit small steering wheel and toggle switches feels closer to a concept car than a mainstream SUV. It was awarded European Car of the Year on launch in 2017. The panoramic roof floods the cabin with light, and the elevated SUV driving position makes city traffic and country roads equally easy to manage. Navigation and parking sensors complete a stylish, characterful family SUV that stands out from the rental crowd." },

  { id:13, name:'Skoda Karoq',      year:2021, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Skoda%20Karoq/IMG_0824.jpeg','cars/Skoda%20Karoq/IMG_0825.jpeg','cars/Skoda%20Karoq/IMG_0826.jpg','cars/Skoda%20Karoq/IMG_0853.jpg'],
    features:['Digital Dash','Navigation','LED Lights','Parking Sensors'],
    desc:"The Karoq is Skoda's mid-size SUV built on the same VW Group MQB platform as the Tiguan — same German engineering, often better value, and famously practical interior space. The 2021 model has a fully digital dash, full LED lighting, and the kind of cabin that still feels brand-new years later. Skoda's well-known 'Simply Clever' details make every drive a small pleasure. Navigation and parking sensors included. A modern, no-fuss SUV for families and travellers who appreciate substance over flash." },

  { id:14, name:'VW Tiguan',        year:2014, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:80,  dep:300,
    imgs:['cars/VW%20Tiguan/37adcdec-bce6-48b6-b8cf-7c418d629992.jpg','cars/VW%20Tiguan/79a0939a-be6a-4330-be59-8faea58d016a.jpg','cars/VW%20Tiguan/ad30d685-ea5c-48b7-962e-734a603eb015.jpg','cars/VW%20Tiguan/c84fa4df-6d52-434a-a620-d4104ab2c125.JPG'],
    features:['A/C','Navigation','4WD','Roof Rails'],
    desc:"The original Tiguan helped define the compact-SUV class for Volkswagen — solid, square-jawed styling and the option of proper 4WD that handles real conditions. This example has the all-wheel-drive system, making it genuinely capable on snow runs to Brezovica or summer drives down gravel mountain tracks to hidden beaches. Roof rails ready for skis or roof boxes when the trip calls for them. Honest, capable German engineering at a fair rental price." },

  { id:15, name:'Toyota RAV4',      year:2015, cat:'suv',     tx:'Automatic', fuel:'Petrol/LPG',  seats:5, ppd:80,  dep:300,
    imgs:['cars/Toyota%20RAV4/IMG_2540.jpeg','cars/Toyota%20RAV4/IMG_2542.jpeg','cars/Toyota%20RAV4/IMG_2543.jpeg','cars/Toyota%20RAV4/IMG_2544.jpeg','cars/Toyota%20RAV4/IMG_2546.jpeg','cars/Toyota%20RAV4/d5649127-8e2e-4414-9c22-dd209f4350f6.JPG','cars/Toyota%20RAV4/fe2c2449-3516-4c1a-b4ad-c24bc80b414d.JPG'],
    features:['A/C','Navigation','4WD','Roof Rails'],
    desc:"The RAV4 is the SUV that essentially invented the segment — Toyota launched it in 1994 and the model's reputation for bulletproof reliability has only grown since. This fourth-generation model adds 4WD for confidence on rough roads and the petrol/LPG dual-fuel system that dramatically lowers running costs on long trips. Navigation and roof rails included. The choice for travellers planning ambitious itineraries — Albania's mountains, Kosovo's countryside, the southern coast — without ever worrying about reliability." },

  { id:16, name:'Ford Explorer',    year:2014, cat:'suv',     tx:'Automatic', fuel:'Petrol/LPG',  seats:7, ppd:85,  dep:300,
    imgs:['cars/Ford%20Explorer/26134d7c-a77f-44fa-80b2-d9d3e1966a14.jpeg','cars/Ford%20Explorer/262ba676-6fa5-422d-9277-ca7c8cc323c5.jpeg','cars/Ford%20Explorer/4c9a9af4-1012-4c86-9b1a-b872f81a1ed2.JPG','cars/Ford%20Explorer/cddeb786-4cca-4f91-a7d6-dee54eda09da.jpeg','cars/Ford%20Explorer/f9e05012-9468-4ba8-9a80-3e2477c497c3.jpg'],
    features:['Navigation','7 Seats','Leather Seats','4WD'],
    desc:"A full-size American SUV built for genuine seven-passenger comfort — leather throughout, three rows of usable seats, and the commanding driving position that makes the Explorer feel reassuringly substantial on the road. Real 4WD capability for any road condition, whether mountain switchbacks or coastal trails. The petrol/LPG dual-fuel system keeps the running costs manageable. Ideal for larger families or groups who want one big, comfortable car instead of two smaller rentals — without spending Lexus money for the privilege." },

  { id:17, name:'Lexus GX460',      year:2014, cat:'suv',     tx:'Automatic', fuel:'Petrol',      seats:7, ppd:200, dep:300,
    imgs:['cars/Lexus%20GX460/0ee8aa31-d203-4426-9d01-3a3e6ccc1a9d.JPG','cars/Lexus%20GX460/2e8bdbe3-8366-4681-a78d-ac6d5f4fdc89.JPG','cars/Lexus%20GX460/5ebc61c5-d970-4837-ae8d-ae54884de571.JPG','cars/Lexus%20GX460/65f2448a-d633-467b-a881-dc0530d3c997.JPG','cars/Lexus%20GX460/b29888bc-93b4-4317-ab2c-6ea4772a1833.JPG','cars/Lexus%20GX460/b2db44fb-0bfe-4fe6-8363-14ffff15851f.JPG','cars/Lexus%20GX460/b6c529d7-feca-48ad-b63f-eba57e44867f.JPG','cars/Lexus%20GX460/e73142d7-da48-4546-8fb4-c1ed87857549.JPG'],
    features:['Quilted Leather','Navigation','Premium Audio','4WD'],
    desc:"The GX460 is Lexus's true luxury off-roader — body-on-frame construction shared with the legendary Toyota Land Cruiser Prado, finished to Lexus's famous standards. The cabin is trimmed in quilted leather with a premium audio system and full navigation. Seven seats arranged in three rows give you genuine space for adults, and the 4WD system handles whatever road surface the trip presents. The most refined and capable SUV in the fleet — equally at home on a Tirana boulevard or a forest track up to Theth." },

  // ─── LUXURY ───
  { id:19, name:'Mercedes C200',    year:2018, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Mercedes%20C200%20Black/IMG_0634.jpeg','cars/Mercedes%20C200%20Black/IMG_0635.jpeg','cars/Mercedes%20C200%20Black/IMG_0636.jpeg','cars/Mercedes%20C200%20Black/IMG_0637.jpg'],
    features:['AMG Package','Navigation','Leather Seats','360° Camera'],
    desc:"A 4th-generation C-Class in the W205 body — widely considered the most beautiful Mercedes sedan of its era, with proportions that genuinely echo the larger S-Class. This black example carries the AMG aesthetic package (sportier bumpers, wheels, and trim), full leather, navigation, and a 360° camera that makes parking effortless. Looks the part for business meetings, weddings, or any occasion where arriving in style matters. The most affordable way into a proper modern Mercedes." },

  { id:20, name:'Mercedes C-Class', year:2020, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:120, dep:300,
    imgs:['cars/Mercedes%20C-Class%20New/7e09bc08-a3d7-43e0-ba47-3e66786e223e.jpeg','cars/Mercedes%20C-Class%20New/9cbcf194-f8fd-4ca3-9c40-dbea28f5872c.jpeg','cars/Mercedes%20C-Class%20New/a3a50123-1657-497f-a2c7-92abefcf2f68.jpeg','cars/Mercedes%20C-Class%20New/aa4239f3-d610-4eb8-88d1-4e6f959556f8.JPG','cars/Mercedes%20C-Class%20New/ab83170e-8e8e-4cc7-9ddd-2479c98ebcc8.JPG'],
    features:['Latest Gen','Navigation','Leather Seats','Ambient Lighting'],
    desc:"The latest-generation C-Class sets the benchmark for compact luxury sedans — Mercedes' MBUX infotainment, full ambient lighting throughout the cabin, and an interior that genuinely feels brand-new every time you sit in it. Full leather and navigation come standard. At €120 a day, this is our top luxury sedan pick: the closest thing in this fleet to renting a brand-new Mercedes from a dealer. Equally suited to executive transfers, business visits, or special-occasion driving." },

  { id:21, name:'Mercedes C Estate',year:2005, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:40,  dep:300,
    imgs:['cars/Mercedes%20C%20Estate/1EF43519-3AF5-4437-83E7-689C89DF8711.JPG','cars/Mercedes%20C%20Estate/59776201-B43F-4232-9BE5-CA90517794CC.JPG','cars/Mercedes%20C%20Estate/66972AFF-2997-407F-9126-EF948747913E.jpeg','cars/Mercedes%20C%20Estate/7239636A-49F7-4E61-B913-26CFD937BE4F.jpeg'],
    features:['Estate Wagon','Navigation','Large Boot','A/C'],
    desc:"A genuine Mercedes-Benz at economy-car money. The W203 estate body gives you a huge, square boot — the kind of practicality executive estates were built for, and Mercedes diesels of this era have a long-running reputation for serious mileage. Navigation included. The seats and ride quality are unmistakably Mercedes; the price is Volkswagen Golf territory. A surprisingly luxurious choice for travellers on a budget who refuse to drive small." },

  { id:22, name:'Mercedes E-Class', year:2016, variant:'white', cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Mercedes%20E-Class%20White/IMG_0533.jpg','cars/Mercedes%20E-Class%20White/IMG_0535.jpg','cars/Mercedes%20E-Class%20White/IMG_0745.jpeg','cars/Mercedes%20E-Class%20White/IMG_0747.jpeg'],
    features:['Executive Sedan','Navigation','Leather Seats','Heated Seats'],
    desc:"The W213 generation E-Class — Mercedes' executive sedan benchmark, the car that has carried more business travellers across Europe than almost any other model. This elegant white example carries the executive-sedan pedigree: leather seats, heated seats, navigation, and a hushed, planted ride that turns the highway between Tirana and Pristina into a calm cruise. The car you book when you want clients, business partners, or family arriving from abroad to feel properly looked after." },

  { id:23, name:'Mercedes E-Class', year:2016, variant:'amg', cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:70,  dep:300,
    imgs:['cars/Mercedes%20E-Class%20AMG/IMG_4659.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4660.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4661.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4662.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4674.jpeg'],
    features:['AMG Look','Navigation','Leather Seats','Panoramic Roof'],
    desc:"The same W213 generation E-Class as our white example, but specced with the AMG-Line aesthetic package: sportier styling, full leather, and a panoramic roof that opens the whole cabin to the sky. The closest thing in our fleet to driving a chauffeur car yourself, at a more attainable rental price than the latest C-Class. Effortless on the motorway, commanding in the city. Navigation included." },

  { id:24, name:'Mercedes C Cabrio',year:2017, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:4, ppd:250, dep:300,
    imgs:['cars/Mercedes%20C%20Cabriolet/0486097c-e170-4053-bb2c-94a5c83dc4a9.jpg','cars/Mercedes%20C%20Cabriolet/25d06fd2-b655-44fb-a202-37062a8e6be6.jpg','cars/Mercedes%20C%20Cabriolet/3243654b-ae58-4716-ae27-19c28652a5aa.jpg','cars/Mercedes%20C%20Cabriolet/624a888e-bc48-4be7-bdbb-52894739258f.jpg'],
    features:['Convertible','AMG Package','Leather Seats','Navigation'],
    desc:"The headline car of our fleet — a soft-top AMG-line C-Class cabriolet, purpose-built for the kind of coast-road driving the Albanian Riviera was made for. Roof down, sun out, the open Adriatic on your left, the mountains on your right. Full leather, AMG package, and navigation. Four seats and a usable boot mean two couples can road-trip together in genuine style. The car of holiday memories — the one your photos will revolve around for years." },

  // ─── VAN ───
  { id:25, name:'Kia Carnival',     year:2018, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:95,  dep:300,
    imgs:['cars/Kia%20Carnival/068d017b-d1b7-4f75-b829-2ee54a0850e5.JPG','cars/Kia%20Carnival/3b223be8-b5fe-4608-87fb-c34c5a2c1581.JPG','cars/Kia%20Carnival/6d8c1903-3b21-4fea-b999-0e1d9168a7e5.JPG','cars/Kia%20Carnival/a980c863-a73c-4ae6-a835-2148e6a23a92.JPG','cars/Kia%20Carnival/af09387e-8e77-4651-99da-b5a62ca6c0e8.JPG','cars/Kia%20Carnival/cbb57665-1dd7-4254-81bf-7e9d7981955f.JPG','cars/Kia%20Carnival/d85ea500-60da-400f-9eda-9c8319e33798.JPG'],
    features:['7 Seats','Navigation','Leather Seats','Panoramic Roof'],
    desc:"The Carnival is Kia's flagship people-mover — built on a passenger-car platform rather than a commercial van's, which is why it drives more like a luxury sedan than a traditional MPV. Seven full-size seats, a panoramic roof that floods the cabin with light, and leather throughout. The kind of vehicle that turns a long airport transfer or a multi-day group trip into a comfortable lounge on wheels. Smarter than booking two cars, cheaper than booking a luxury van — a favourite for groups and extended families." },

  { id:26, name:'Mercedes Viano',   year:2008, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:110, dep:300,
    imgs:['cars/Mercedes%20Viano/IMG_5243.jpeg','cars/Mercedes%20Viano/IMG_5246.jpeg','cars/Mercedes%20Viano/IMG_5247.jpeg','cars/Mercedes%20Viano/IMG_5249.jpeg','cars/Mercedes%20Viano/IMG_5250.jpeg'],
    features:['7 Seats','Large Boot','A/C','Bluetooth'],
    desc:"A proper Mercedes-engineered passenger van — seven seats, an enormous boot for genuine group travel, and the famous Mercedes ride quality even in the larger MPV body. The W639 platform is well-proven and Mercedes diesels of this era are workhorse engineering. A/C and Bluetooth keep the cabin comfortable and connected on long drives. The practical, no-frills choice for groups who want maximum interior space without paying premium-van rates." },

  { id:27, name:'Mercedes Vito',    year:2020, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:160, dep:300,
    imgs:['cars/Mercedes%20Vito/999646c5-a01c-4c1d-bf3d-0b36225dce9a.JPG','cars/Mercedes%20Vito/IMG_4864.jpg','cars/Mercedes%20Vito/IMG_4865.jpg','cars/Mercedes%20Vito/IMG_4867.jpg','cars/Mercedes%20Vito/IMG_4868.jpg','cars/Mercedes%20Vito/IMG_4869.jpg','cars/Mercedes%20Vito/IMG_4870.jpg','cars/Mercedes%20Vito/IMG_4871.jpg'],
    features:['7 Seats','Navigation','LED Lights','A/C'],
    desc:"The current-generation Vito — Mercedes' professional-grade passenger van, just five years old. Seven seats, full LED lighting, navigation, and the kind of build quality you'd expect from a vehicle Mercedes designs to do daily shuttle work all over Europe. The choice for serious group transfers, business visits, or families travelling with full luggage and equipment. The most modern van in our fleet, and the most refined drive you'll get in this seat count." },

  { id:28, name:'VW Transporter',   year:2012, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:9, ppd:110, dep:300,
    imgs:['cars/VW%20Transporter%209%20Seat/IMG_0825%202.jpeg','cars/VW%20Transporter%209%20Seat/IMG_0826%202.jpg','cars/VW%20Transporter%209%20Seat/IMG_0827.jpg','cars/VW%20Transporter%209%20Seat/IMG_0828.jpg','cars/VW%20Transporter%209%20Seat/IMG_0829.jpg','cars/VW%20Transporter%209%20Seat/IMG_0830.jpg','cars/VW%20Transporter%209%20Seat/IMG_3651.jpg'],
    features:['9 Seats','A/C','Group Travel','Bluetooth'],
    desc:"Nine seats — the largest passenger vehicle we offer. The T5 Transporter is the workhorse of European group travel: extended families, wedding parties, sports teams, hiking groups all over the continent rely on this exact platform. A/C and Bluetooth keep everyone comfortable and the music playing. The kind of utilitarian Volkswagen reliability that just keeps going year after year. When you absolutely need everyone in one vehicle, this is the answer." },

  { id:29, name:'Peugeot Expert',   year:2020, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:9, ppd:150, dep:300,
    imgs:['cars/Peugeot%20Expert/3dc5ceb8-de27-4aa9-af7f-10cfa09e8357.jpeg','cars/Peugeot%20Expert/578006ef-b69d-4232-81d5-31e7b76f0a00.JPG','cars/Peugeot%20Expert/86046ec1-d7a3-4f69-9c60-f27d5862302f.JPG','cars/Peugeot%20Expert/b77ff338-581c-49c1-8333-491e2436ea7c.JPG','cars/Peugeot%20Expert/cd73e7ec-fea9-424b-91f2-f60e93308322.jpeg','cars/Peugeot%20Expert/eafba5c9-1edd-4cd8-b366-86113c9f623f.JPG','cars/Peugeot%20Expert/eb6e5604-20fa-4dfa-bedd-aa1c61c9a1e9.JPG'],
    features:['9 Seats','A/C','Ample Boot'],
    desc:"Peugeot's modern 9-seater — the third-generation Expert, built on the same platform as the Citroen Spacetourer. Just five years old, with a more refined drive than you'd expect from a vehicle of this size. A/C throughout and ample boot space for nine passengers' luggage on multi-day trips. Equally at home shuttling a tour group around the Western Balkans or moving a business team between airports. A more contemporary alternative to the older Transporter." },

  { id:30, name:'VW Touran',        year:2008, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:60,  dep:300,
    imgs:['cars/VW%20Touran/3d2745b6-0974-4318-8583-6309d75cb047.JPG','cars/VW%20Touran/99e5d7f5-14bc-4100-9df2-79632446147c.jpeg','cars/VW%20Touran/f9e08d91-2da1-4d87-a99b-f6fb328bcdad.jpeg'],
    features:['7 Seats','Spacious','Navigation','A/C'],
    desc:"The Touran is the smallest 7-seater in our fleet — built on the Golf platform, which is exactly why it drives genuinely like a car rather than a van. Compact enough to handle narrow Tirana streets and tight Old Town parking, but with seven proper seats when you need them. Navigation and A/C included. Perfect when you need extra capacity but don't want to drive a full-size MPV — and at €60 a day, the most affordable 7-seater on offer." },
];

// Snapshot of the hardcoded fleet (frozen before Firebase replaces window.CARS)
// so we can use it as a fallback source for fields admin hasn't filled in yet,
// e.g. car descriptions written before the admin form had a desc input.
window.__hardcodedCARS = (window.CARS || []).slice();

// Fill missing fields on a Firebase-fetched car from the hardcoded equivalent
// (matched by name + year + variant). Used by the Firebase mappers in
// index.html and car.html so admin docs without a description still show one.
window.fillFromHardcoded = function(car) {
  if (!car) return car;
  const fallback = (window.__hardcodedCARS || []).find(h =>
    h.name === car.name &&
    String(h.year) === String(car.year) &&
    (h.variant || '') === (car.variant || '')
  );
  if (!fallback) return car;
  if (!car.desc) car.desc = fallback.desc || '';
  return car;
};

// Slug helper — turns "VW Golf 8" into "vw-golf-8" so URLs are share-friendly.
// Used by both pages: index.html builds the share link, car.html resolves ?car=.
//
// Disambiguation rules (in order of preference):
//   1. If `variant` is set on the car (e.g. "blue", "amg"), include it in the slug.
//   2. Otherwise, if another car in the fleet shares the same name+year, append
//      a short hash of the doc id so each car still gets a unique URL.
// Stable across reloads because doc ids don't change. Set a variant in admin
// to get a clean human-readable suffix instead of the hash.
window.carSlug = function(c, allCars) {
  if (!c) return '';
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const base = slugify(`${c.name} ${c.year || ''} ${c.variant || ''}`);
  if (c.variant) return base;

  const list = Array.isArray(allCars) ? allCars : (window.CARS || []);
  const sameKey = list.filter(o =>
    o && o.name === c.name && String(o.year) === String(c.year) && !o.variant
  );
  if (sameKey.length > 1 && c.id != null) {
    const idTail = String(c.id).toLowerCase().replace(/[^a-z0-9]/g, '').slice(-4);
    if (idTail) return `${base}-${idTail}`;
  }
  return base;
};

window.findCarBySlugOrId = function(slugOrId) {
  if (!slugOrId) return null;
  const list = window.CARS || [];
  const target = String(slugOrId).toLowerCase();

  // 1. Exact slug match (includes variant if both sides have it)
  const exact = list.find(c => window.carSlug(c) === target);
  if (exact) return exact;

  // 2. Fallback for shareable links built before a car had its variant set:
  //    strip a trailing variant word that follows a 4-digit year (e.g.
  //    "vw-passat-2013-blue" -> "vw-passat-2013") and try again. Keeps
  //    old WhatsApp links alive if Firebase data ever drops the variant.
  const stripVariant = s => s.replace(/-(\d{4})-[a-z]+$/, '-$1');
  const noVariant = stripVariant(target);
  if (noVariant !== target) {
    const lenient = list.find(c => stripVariant(window.carSlug(c)) === noVariant);
    if (lenient) return lenient;
  }

  // 3. Last resort: lookup by id (Firestore string id or numeric).
  return list.find(c => String(c.id) === String(slugOrId)) || null;
};
