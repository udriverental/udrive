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
    desc:"Compact and effortless to park — the easy choice for Tirana's narrow streets and quick airport runs. Modern A/C, Bluetooth, and a rear camera keep day-to-day driving stress-free." },

  { id:2,  name:'VW Golf 7',        year:2019, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/VW%20Golf%207%20White/IMG_0624.jpeg','cars/VW%20Golf%207%20White/IMG_0626.jpeg','cars/VW%20Golf%207%20White/IMG_0627.jpeg','cars/VW%20Golf%207%20White/IMG_3667.jpg','cars/VW%20Golf%207%20White/IMG_3668.jpg'],
    features:['A/C','Navigation','Bluetooth','Parking Sensors'],
    desc:"The classic Golf done right — automatic, fuel-sipping diesel, and German solidity. A confident motorway cruiser that's just as at home in the city." },

  { id:3,  name:'VW Golf 7',        year:2017, cat:'economy', tx:'Manual',    fuel:'Diesel',      seats:5, ppd:55,  dep:300,
    imgs:['cars/VW%20Golf%207%20Black/IMG_3707.jpeg','cars/VW%20Golf%207%20Black/IMG_3708.jpeg','cars/VW%20Golf%207%20Black/IMG_3709.jpg','cars/VW%20Golf%207%20Black/IMG_3711.jpeg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"Same trusted Golf platform in a sharp black manual. Best value in the fleet for drivers who like the connection of a stick shift on Albania's coastal roads." },

  { id:4,  name:'VW Golf 8',        year:2022, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:70,  dep:300,
    imgs:['cars/VW%20Golf%208/IMG_0854.jpg','cars/VW%20Golf%208/IMG_0855.jpeg','cars/VW%20Golf%208/IMG_0856.jpeg'],
    features:['Digital Cockpit','Navigation','Apple CarPlay','Parking Sensors'],
    desc:"The newest Golf in the fleet — sharp digital cockpit, Apple CarPlay, and the kind of refined ride that makes long highway runs feel short. Ideal for couples or solo travellers who want modern comfort without SUV bulk." },

  { id:5,  name:'VW Golf Plus',     year:2012, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Golf%20Plus/IMG_0072.jpg','cars/VW%20Golf%20Plus/IMG_0073.JPG','cars/VW%20Golf%20Plus/IMG_0614.jpeg','cars/VW%20Golf%20Plus/IMG_0616.jpeg','cars/VW%20Golf%20Plus/IMG_0617.jpeg'],
    features:['A/C','Navigation','Heated Seats'],
    desc:"More headroom and boot space than a regular Golf, with heated seats and built-in navigation. A practical pick for small families on a budget." },

  { id:6,  name:'VW Jetta',         year:2015, cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:45,  dep:300,
    imgs:['cars/VW%20Jetta/4b85e48d-8c4d-4828-850a-c5cda83c3d9c.JPG','cars/VW%20Jetta/64503795-d55a-4407-ad5f-6c34859e60d5.jpg','cars/VW%20Jetta/f5782295-589f-48cf-908c-5742bf7d9921.jpg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"Sedan comfort at the price of a hatchback. A reliable petrol automatic that's smooth on the highway between Tirana and Pristina." },

  { id:7,  name:'Renault Megane',   year:2018, cat:'economy', tx:'Manual',    fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/Renault%20Megane/IMG_3660.jpeg','cars/Renault%20Megane/IMG_3661.jpg','cars/Renault%20Megane/IMG_3662.jpg','cars/Renault%20Megane/IMG_3663.jpg','cars/Renault%20Megane/IMG_3664.jpg','cars/Renault%20Megane/IMG_3665.jpg','cars/Renault%20Megane/IMG_3666.jpeg'],
    features:['A/C','Bluetooth','USB Charging'],
    desc:"European hatchback comfort that punches above its price. Manual transmission keeps fuel costs low on longer trips." },

  { id:8,  name:'Ford Mondeo',      year:2020, cat:'economy', tx:'Automatic', fuel:'Diesel',      seats:5, ppd:60,  dep:300,
    imgs:['cars/Ford%20Mondeo/3ce92a33-1bc2-4c7d-8cc7-4668e41fadc1.jpg','cars/Ford%20Mondeo/c8bfd05b-2a2e-4080-858b-0b00447f9998.jpg'],
    features:['A/C','Navigation','LED Lights','Parking Sensors'],
    desc:"A near-new Mondeo with full LED lights, navigation, and a quiet, planted feel on the highway. Punches well above its price for executive comfort." },

  { id:9,  name:'VW Passat',        year:2013, cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Passat%20Blue/17CF6CC1-E5A1-4B44-B1BD-7017C2E1A2A0.JPG','cars/VW%20Passat%20Blue/3D042D47-A67C-4BF0-A95A-F0E5C476EC09.jpeg','cars/VW%20Passat%20Blue/C6BD6875-C95B-46C5-9F7C-170D8A663B61.JPG'],
    features:['Panoramic Roof','Leather Seats','Navigation','Heated Seats'],
    desc:"Panoramic roof, leather seats, and heated seats make this Passat feel a class above its price tag. A favourite for couples on longer Albania–Kosovo loops." },

  { id:10, name:'VW Passat',        year:2013, cat:'economy', tx:'Automatic', fuel:'Petrol',      seats:5, ppd:50,  dep:300,
    imgs:['cars/VW%20Passat%20Grey/5C60D808-82AD-4B30-AF6C-9D5B2194D87D.jpeg','cars/VW%20Passat%20Grey/71DB31AF-06F4-4604-A65E-A940E748A59E.jpg','cars/VW%20Passat%20Grey/7329BE88-B8F3-4DA1-8E22-146EEE0D7930.JPG','cars/VW%20Passat%20Grey/C702DF3E-3D95-4477-A7E7-18359CA6119A.jpeg'],
    features:['A/C','Navigation','Bluetooth','Parking Sensors'],
    desc:"Roomy executive sedan with navigation and parking sensors. Comfortable enough for four adults plus luggage on a full-day drive." },

  { id:11, name:'Volvo XC70',       year:2012, cat:'economy', tx:'Automatic', fuel:'Petrol/LPG',  seats:5, ppd:65,  dep:300,
    imgs:['cars/Volvo%20XC70/02577358-1f8c-41f2-8402-4ed8fbf4a709.jpeg','cars/Volvo%20XC70/23009205-c575-45af-abfb-597045aed2c2.JPG','cars/Volvo%20XC70/753244e9-fcc6-42d4-98be-0d039f692021.JPG','cars/Volvo%20XC70/cc8d19b3-3d27-43e5-bd7c-17975ffd9512.JPG','cars/Volvo%20XC70/dba730e9-897e-4133-868d-a681e88214ea.JPG','cars/Volvo%20XC70/e1688a6d-f6e5-4d39-9bd3-a3e26c4586fc.JPG'],
    features:['A/C','Navigation','Leather Seats','Roof Rails'],
    desc:"A Swedish wagon built for road trips — leather seats, roof rails, and LPG efficiency that makes longer journeys cheaper. Perfect for families heading to the coast or mountains." },

  // ─── SUV ───
  { id:12, name:'Peugeot 3008',     year:2019, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Peugeot%203008/IMG_0612.jpg','cars/Peugeot%203008/IMG_0613.jpg','cars/Peugeot%203008/IMG_0614.jpg','cars/Peugeot%203008/IMG_0617%202.jpeg','cars/Peugeot%203008/IMG_0618.jpeg','cars/Peugeot%203008/IMG_0619.jpeg'],
    features:['A/C','Navigation','Panoramic Roof','Parking Sensors'],
    desc:"Stylish French SUV with a panoramic roof and elevated driving position. Roomy enough for a family of four with luggage, agile enough for tight Old Town parking." },

  { id:13, name:'Skoda Karoq',      year:2021, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Skoda%20Karoq/IMG_0824.jpeg','cars/Skoda%20Karoq/IMG_0825.jpeg','cars/Skoda%20Karoq/IMG_0826.jpg','cars/Skoda%20Karoq/IMG_0853.jpg'],
    features:['Digital Dash','Navigation','LED Lights','Parking Sensors'],
    desc:"A modern, well-equipped SUV with a digital dash and full LED lighting. The kind of car that feels brand-new every time you sit in it." },

  { id:14, name:'VW Tiguan',        year:2014, cat:'suv',     tx:'Automatic', fuel:'Diesel',      seats:5, ppd:80,  dep:300,
    imgs:['cars/VW%20Tiguan/37adcdec-bce6-48b6-b8cf-7c418d629992.jpg','cars/VW%20Tiguan/79a0939a-be6a-4330-be59-8faea58d016a.jpg','cars/VW%20Tiguan/ad30d685-ea5c-48b7-962e-734a603eb015.jpg','cars/VW%20Tiguan/c84fa4df-6d52-434a-a620-d4104ab2c125.JPG'],
    features:['A/C','Navigation','4WD','Roof Rails'],
    desc:"Proper 4WD Tiguan with roof rails — handles winter snow on the way to Brezovica or summer gravel roads to a hidden beach without complaint." },

  { id:15, name:'Toyota RAV4',      year:2015, cat:'suv',     tx:'Automatic', fuel:'Petrol/LPG',  seats:5, ppd:80,  dep:300,
    imgs:['cars/Toyota%20RAV4/IMG_2540.jpeg','cars/Toyota%20RAV4/IMG_2542.jpeg','cars/Toyota%20RAV4/IMG_2543.jpeg','cars/Toyota%20RAV4/IMG_2544.jpeg','cars/Toyota%20RAV4/IMG_2546.jpeg','cars/Toyota%20RAV4/d5649127-8e2e-4414-9c22-dd209f4350f6.JPG','cars/Toyota%20RAV4/fe2c2449-3516-4c1a-b4ad-c24bc80b414d.JPG'],
    features:['A/C','Navigation','4WD','Roof Rails'],
    desc:"The legendary RAV4 reliability paired with LPG efficiency. Ideal for adventurous travellers planning long off-the-beaten-path drives across Albania and Kosovo." },

  { id:16, name:'Ford Explorer',    year:2014, cat:'suv',     tx:'Automatic', fuel:'Petrol/LPG',  seats:7, ppd:85,  dep:300,
    imgs:['cars/Ford%20Explorer/26134d7c-a77f-44fa-80b2-d9d3e1966a14.jpeg','cars/Ford%20Explorer/262ba676-6fa5-422d-9277-ca7c8cc323c5.jpeg','cars/Ford%20Explorer/4c9a9af4-1012-4c86-9b1a-b872f81a1ed2.JPG','cars/Ford%20Explorer/cddeb786-4cca-4f91-a7d6-dee54eda09da.jpeg','cars/Ford%20Explorer/f9e05012-9468-4ba8-9a80-3e2477c497c3.jpg'],
    features:['Navigation','7 Seats','Leather Seats','4WD'],
    desc:"Seven seats, leather, and serious 4WD — the choice for larger families or groups who want one big comfortable car instead of two small ones." },

  { id:17, name:'Lexus GX460',      year:2014, cat:'suv',     tx:'Automatic', fuel:'Petrol',      seats:7, ppd:200, dep:300,
    imgs:['cars/Lexus%20GX460/0ee8aa31-d203-4426-9d01-3a3e6ccc1a9d.JPG','cars/Lexus%20GX460/2e8bdbe3-8366-4681-a78d-ac6d5f4fdc89.JPG','cars/Lexus%20GX460/5ebc61c5-d970-4837-ae8d-ae54884de571.JPG','cars/Lexus%20GX460/65f2448a-d633-467b-a881-dc0530d3c997.JPG','cars/Lexus%20GX460/b29888bc-93b4-4317-ab2c-6ea4772a1833.JPG','cars/Lexus%20GX460/b2db44fb-0bfe-4fe6-8363-14ffff15851f.JPG','cars/Lexus%20GX460/b6c529d7-feca-48ad-b63f-eba57e44867f.JPG','cars/Lexus%20GX460/e73142d7-da48-4546-8fb4-c1ed87857549.JPG'],
    features:['Quilted Leather','Navigation','Premium Audio','4WD'],
    desc:"Quilted leather, premium audio, and proper body-on-frame 4WD. The most refined SUV in the fleet — equally happy on the airport tarmac or on a forest track." },

  // ─── LUXURY ───
  { id:19, name:'Mercedes C200',    year:2018, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Mercedes%20C200%20Black/IMG_0634.jpeg','cars/Mercedes%20C200%20Black/IMG_0635.jpeg','cars/Mercedes%20C200%20Black/IMG_0636.jpeg','cars/Mercedes%20C200%20Black/IMG_0637.jpg'],
    features:['AMG Package','Navigation','Leather Seats','360° Camera'],
    desc:"AMG-styled C-Class with a 360° camera and full leather. Looks the part for business meetings, weddings, or simply arriving in style." },

  { id:20, name:'Mercedes C-Class', year:2020, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:120, dep:300,
    imgs:['cars/Mercedes%20C-Class%20New/7e09bc08-a3d7-43e0-ba47-3e66786e223e.jpeg','cars/Mercedes%20C-Class%20New/9cbcf194-f8fd-4ca3-9c40-dbea28f5872c.jpeg','cars/Mercedes%20C-Class%20New/a3a50123-1657-497f-a2c7-92abefcf2f68.jpeg','cars/Mercedes%20C-Class%20New/aa4239f3-d610-4eb8-88d1-4e6f959556f8.JPG','cars/Mercedes%20C-Class%20New/ab83170e-8e8e-4cc7-9ddd-2479c98ebcc8.JPG'],
    features:['Latest Gen','Navigation','Leather Seats','Ambient Lighting'],
    desc:"The latest-generation C-Class with ambient lighting and a polished interior that feels brand-new. Our top luxury sedan pick under €150/day." },

  { id:21, name:'Mercedes C Estate',year:2005, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:40,  dep:300,
    imgs:['cars/Mercedes%20C%20Estate/1EF43519-3AF5-4437-83E7-689C89DF8711.JPG','cars/Mercedes%20C%20Estate/59776201-B43F-4232-9BE5-CA90517794CC.JPG','cars/Mercedes%20C%20Estate/66972AFF-2997-407F-9126-EF948747913E.jpeg','cars/Mercedes%20C%20Estate/7239636A-49F7-4E61-B913-26CFD937BE4F.jpeg'],
    features:['Estate Wagon','Navigation','Large Boot','A/C'],
    desc:"A surprisingly affordable Mercedes — the older estate body gives you a huge boot and the trademark Mercedes ride quality at economy-car money." },

  { id:22, name:'Mercedes E-Class', year:2016, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:90,  dep:300,
    imgs:['cars/Mercedes%20E-Class%20White/IMG_0533.jpg','cars/Mercedes%20E-Class%20White/IMG_0535.jpg','cars/Mercedes%20E-Class%20White/IMG_0745.jpeg','cars/Mercedes%20E-Class%20White/IMG_0747.jpeg'],
    features:['Executive Sedan','Navigation','Leather Seats','Heated Seats'],
    desc:"Executive sedan in elegant white with leather and heated seats. The car you book when you want clients or family to arrive feeling looked-after." },

  { id:23, name:'Mercedes E-Class', year:2016, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:5, ppd:70,  dep:300,
    imgs:['cars/Mercedes%20E-Class%20AMG/IMG_4659.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4660.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4661.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4662.jpeg','cars/Mercedes%20E-Class%20AMG/IMG_4674.jpeg'],
    features:['AMG Look','Navigation','Leather Seats','Panoramic Roof'],
    desc:"AMG-styled E-Class with a panoramic roof and full leather — the closest thing in our fleet to driving a chauffeur car yourself." },

  { id:24, name:'Mercedes C Cabrio',year:2017, cat:'luxury',  tx:'Automatic', fuel:'Diesel',      seats:4, ppd:250, dep:300,
    imgs:['cars/Mercedes%20C%20Cabriolet/0486097c-e170-4053-bb2c-94a5c83dc4a9.jpg','cars/Mercedes%20C%20Cabriolet/25d06fd2-b655-44fb-a202-37062a8e6be6.jpg','cars/Mercedes%20C%20Cabriolet/3243654b-ae58-4716-ae27-19c28652a5aa.jpg','cars/Mercedes%20C%20Cabriolet/624a888e-bc48-4be7-bdbb-52894739258f.jpg'],
    features:['Convertible','AMG Package','Leather Seats','Navigation'],
    desc:"The fleet's headline car — a soft-top AMG cabriolet built for the Albanian Riviera. Roof down, coast road open: this is what holidays are made of." },

  // ─── VAN ───
  { id:25, name:'Kia Carnival',     year:2018, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:95,  dep:300,
    imgs:['cars/Kia%20Carnival/068d017b-d1b7-4f75-b829-2ee54a0850e5.JPG','cars/Kia%20Carnival/3b223be8-b5fe-4608-87fb-c34c5a2c1581.JPG','cars/Kia%20Carnival/6d8c1903-3b21-4fea-b999-0e1d9168a7e5.JPG','cars/Kia%20Carnival/a980c863-a73c-4ae6-a835-2148e6a23a92.JPG','cars/Kia%20Carnival/af09387e-8e77-4651-99da-b5a62ca6c0e8.JPG','cars/Kia%20Carnival/cbb57665-1dd7-4254-81bf-7e9d7981955f.JPG','cars/Kia%20Carnival/d85ea500-60da-400f-9eda-9c8319e33798.JPG'],
    features:['7 Seats','Navigation','Leather Seats','Panoramic Roof'],
    desc:"Seven seats, panoramic roof, and leather throughout — a van that drives like a luxury sedan. The smartest choice for groups who don't want to compromise on comfort." },

  { id:26, name:'Mercedes Viano',   year:2008, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:110, dep:300,
    imgs:['cars/Mercedes%20Viano/IMG_5243.jpeg','cars/Mercedes%20Viano/IMG_5246.jpeg','cars/Mercedes%20Viano/IMG_5247.jpeg','cars/Mercedes%20Viano/IMG_5249.jpeg','cars/Mercedes%20Viano/IMG_5250.jpeg'],
    features:['7 Seats','Large Boot','A/C','Bluetooth'],
    desc:"Spacious 7-seat MPV with a huge boot. Practical, proven, and priced for groups who want maximum room without paying premium-van rates." },

  { id:27, name:'Mercedes Vito',    year:2020, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:160, dep:300,
    imgs:['cars/Mercedes%20Vito/999646c5-a01c-4c1d-bf3d-0b36225dce9a.JPG','cars/Mercedes%20Vito/IMG_4864.jpg','cars/Mercedes%20Vito/IMG_4865.jpg','cars/Mercedes%20Vito/IMG_4867.jpg','cars/Mercedes%20Vito/IMG_4868.jpg','cars/Mercedes%20Vito/IMG_4869.jpg','cars/Mercedes%20Vito/IMG_4870.jpg','cars/Mercedes%20Vito/IMG_4871.jpg'],
    features:['7 Seats','Navigation','LED Lights','A/C'],
    desc:"Near-new 7-seat Vito with full LEDs and navigation. The professional-grade choice for transfers, business groups, and families travelling with serious luggage." },

  { id:28, name:'VW Transporter',   year:2012, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:9, ppd:110, dep:300,
    imgs:['cars/VW%20Transporter%209%20Seat/IMG_0825%202.jpeg','cars/VW%20Transporter%209%20Seat/IMG_0826%202.jpg','cars/VW%20Transporter%209%20Seat/IMG_0827.jpg','cars/VW%20Transporter%209%20Seat/IMG_0828.jpg','cars/VW%20Transporter%209%20Seat/IMG_0829.jpg','cars/VW%20Transporter%209%20Seat/IMG_0830.jpg','cars/VW%20Transporter%209%20Seat/IMG_3651.jpg'],
    features:['9 Seats','A/C','Group Travel','Bluetooth'],
    desc:"Nine seats — the largest in the fleet. Ideal for extended family groups or wedding parties who need everyone in one vehicle." },

  { id:29, name:'Peugeot Expert',   year:2020, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:9, ppd:150, dep:300,
    imgs:['cars/Peugeot%20Expert/3dc5ceb8-de27-4aa9-af7f-10cfa09e8357.jpeg','cars/Peugeot%20Expert/578006ef-b69d-4232-81d5-31e7b76f0a00.JPG','cars/Peugeot%20Expert/86046ec1-d7a3-4f69-9c60-f27d5862302f.JPG','cars/Peugeot%20Expert/b77ff338-581c-49c1-8333-491e2436ea7c.JPG','cars/Peugeot%20Expert/cd73e7ec-fea9-424b-91f2-f60e93308322.jpeg','cars/Peugeot%20Expert/eafba5c9-1edd-4cd8-b366-86113c9f623f.JPG','cars/Peugeot%20Expert/eb6e5604-20fa-4dfa-bedd-aa1c61c9a1e9.JPG'],
    features:['9 Seats','A/C','Ample Boot'],
    desc:"A modern 9-seater with ample boot space — equally at home shuttling a tour group or moving a small business team between airports." },

  { id:30, name:'VW Touran',        year:2008, cat:'van',     tx:'Automatic', fuel:'Diesel',      seats:7, ppd:60,  dep:300,
    imgs:['cars/VW%20Touran/3d2745b6-0974-4318-8583-6309d75cb047.JPG','cars/VW%20Touran/99e5d7f5-14bc-4100-9df2-79632446147c.jpeg','cars/VW%20Touran/f9e08d91-2da1-4d87-a99b-f6fb328bcdad.jpeg'],
    features:['7 Seats','Spacious','Navigation','A/C'],
    desc:"A compact 7-seater that drives more like a car than a van. Perfect when you need extra seats but want easy city manoeuvring." },
];

// Slug helper — turns "VW Golf 8" into "vw-golf-8" so URLs are share-friendly.
// Used by both pages: index.html builds the share link, car.html resolves ?car=.
window.carSlug = function(c) {
  if (!c) return '';
  const base = `${c.name} ${c.year || ''}`.toLowerCase().trim();
  return base
    .replace(/[^a-z0-9]+/g, '-')   // non-alphanumeric -> hyphen
    .replace(/^-+|-+$/g, '');       // trim leading/trailing hyphens
};

window.findCarBySlugOrId = function(slugOrId) {
  if (!slugOrId) return null;
  const list = window.CARS || [];
  // Try slug match first
  const bySlug = list.find(c => window.carSlug(c) === String(slugOrId).toLowerCase());
  if (bySlug) return bySlug;
  // Fallback: numeric id
  return list.find(c => String(c.id) === String(slugOrId)) || null;
};
