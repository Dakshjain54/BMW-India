// ============================================================
// data.js — All car data and testimonials
// ============================================================

const carData = [
    {
        id: 101,
        name: "BMW 118i",
        price: "52.00 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic Automatic",
        engine: "1.5L TwinPower Turbo Inline-3",
        power: "156 hp",
        torque: "230 Nm",
        topSpeed: "226 km/h",

        features: [
            "BMW Curved Display",
            "BMW Operating System 9",
            "Wireless Apple CarPlay & Android Auto",
            "Panoramic Glass Sunroof",
            "Dual-Zone Climate Control"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control (DSC)",
            "Lane Departure Warning",
            "Front Collision Warning with Automatic Braking"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.TAR_jAc1CWFgMix-5AQRpgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 118i is a premium luxury hatchback offering refined performance, modern technology, exceptional comfort, and efficient turbocharged power, making it an ideal everyday BMW."
    },
    {
        id: 102,
        name: "BMW M135i xDrive",
        price: "68.00 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "300 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive All-Wheel Drive",
            "Adaptive M Suspension",
            "M Sport Seats",
            "BMW Curved Display with OS 9",
            "Harman Kardon Premium Sound System"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Lane Keeping Assist",
            "Parking Assistant Plus",
            "Driving Assistant Professional"
        ],

        image: "https://th.bing.com/th/id/OIP.M9LJuapjUj82xcua2m_z_QHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M135i xDrive is the most powerful 1 Series hatchback, combining M Performance engineering, intelligent all-wheel drive, aggressive styling, and thrilling driving dynamics."
    },
    {
        id: 103,
        name: "BMW 220i Gran Coupe",
        price: "45.80 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic DCT",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "190 hp",
        torque: "280 Nm",
        topSpeed: "235 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Sunroof",
            "Wireless Apple CarPlay & Android Auto",
            "Harman Kardon Sound System",
            "Adaptive LED Headlights"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control (DSC)",
            "Parking Assistant",
            "Front Collision Warning"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.TSgmG_4D88-oClQbPCgW6AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 220i Gran Coupe combines sporty performance, luxury, and advanced technology in a stylish four-door coupe."
    },
    {
        id: 104,
        name: "BMW M240i xDrive",
        price: "78.00 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "374 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive AWD",
            "Adaptive M Suspension",
            "M Sport Differential",
            "Harman Kardon Sound System",
            "BMW Live Cockpit Professional"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Parking Assistant Plus",
            "Driving Assistant Professional"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.QjOsW0gYOxWcwWs1iPtZxQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M240i xDrive is a high-performance luxury coupe delivering thrilling acceleration, precise handling, and everyday comfort."
    },
    {
        id: 105,
        name: "BMW 230i Coupe",
        price: "66.00 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "255 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW Curved Display",
            "M Sport Package",
            "Wireless Apple CarPlay & Android Auto",
            "Adaptive LED Headlights",
            "Dual-Zone Climate Control"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Lane Keeping Assist",
            "Parking Assistant",
            "Front Collision Warning"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.fXbI8jIVgsFBfzpfxRVu9AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 230i Coupe offers classic rear-wheel-drive dynamics, premium comfort, and an engaging driving experience."
    },
    {
        id: 106,
        name: "BMW 218i Gran Coupe",
        price: "46.90 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic DCT",
        engine: "1.5L TwinPower Turbo Inline-3",
        power: "156 hp",
        torque: "230 Nm",
        topSpeed: "230 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Sunroof",
            "Wireless Apple CarPlay & Android Auto",
            "ConnectedDrive",
            "Ambient Lighting"
        ],

        safety: [
            "6 Airbags",
            "Dynamic Stability Control",
            "ABS with EBD",
            "Parking Assistant",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.042op2jHnDaddhdK0UT3FgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 218i Gran Coupe is the entry-level luxury Gran Coupe offering premium design, modern technology, and excellent everyday usability."
    },
    {
        id: 107,
        name: "BMW 320i",
        price: "58.00 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "184 hp",
        torque: "300 Nm",
        topSpeed: "235 km/h",

        features: [
            "BMW Curved Display",
            "Wireless Apple CarPlay & Android Auto",
            "Panoramic Sunroof",
            "Ambient Lighting",
            "ConnectedDrive"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Front Collision Warning"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.GLM3x-9T-QemYDqG-iGb9gHaFh?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 320i is a premium sports sedan offering refined performance, luxurious comfort, and advanced BMW technology."
    },
    {
        id: 108,
        name: "BMW 330i M Sport",
        price: "62.00 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "255 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "M Sport Package",
            "BMW Curved Display",
            "Harman Kardon Sound System",
            "Adaptive LED Headlights",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Parking Assistant Plus",
            "Dynamic Stability Control"
        ],

        image: "https://www.carscoops.com/wp-content/uploads/2021/02/BMW-330i-Iconic-Edition-1a.jpg",

        description: "The BMW 330i M Sport delivers an exciting blend of luxury, sporty handling, and everyday practicality."
    },
    {
        id: 109,
        name: "BMW M340i xDrive",
        price: "76.40 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "374 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive AWD",
            "Adaptive M Suspension",
            "M Sport Differential",
            "Harman Kardon Surround Sound",
            "BMW Live Cockpit Professional"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "Lane Keeping Assist"
        ],

        image: "https://th.bing.com/th/id/OIP.WdUV1FuwalOR06ZdNZxZuwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M340i xDrive is the ultimate performance sedan, combining a turbocharged inline-six engine with BMW's xDrive all-wheel-drive system."
    },
    {
        id: 110,
        name: "BMW 320d",
        price: "62.50 Lakh",
        fuel: "Diesel",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Diesel",
        power: "190 hp",
        torque: "400 Nm",
        topSpeed: "240 km/h",

        features: [
            "Panoramic Sunroof",
            "BMW Curved Display",
            "Wireless Apple CarPlay & Android Auto",
            "Ambient Lighting",
            "Powered Front Seats"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://th.bing.com/th/id/OIP.l3i23IU5ppjpr8-hGrEwMwHaE8?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 320d combines outstanding fuel efficiency, strong diesel performance, premium comfort, and long-distance cruising capability."
    },
    {
        id: 111,
        name: "BMW 420i Coupe",
        price: "72.00 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "184 hp",
        torque: "300 Nm",
        topSpeed: "240 km/h",

        features: [
            "Frameless Doors",
            "BMW Curved Display",
            "M Sport Steering Wheel",
            "Wireless Apple CarPlay & Android Auto",
            "Adaptive LED Headlights"
        ],

        safety: [
            "6 Airbags",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Front Collision Warning",
            "Lane Departure Warning"
        ],

        image: "https://th.bing.com/th/id/OIP.lvvxpnuq-MxKZ3DPdvoZDwHaFP?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 420i Coupe offers elegant coupe styling, premium craftsmanship, and a balanced blend of comfort and sporty performance."
    },
    {
        id: 112,
        name: "BMW 430i Convertible",
        price: "85.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "258 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "Retractable Soft Top Roof",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "Adaptive LED Headlights",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant Plus",
            "Lane Departure Warning"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.qI3Iewx5Z8vhzmhrdCS-6QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 430i Convertible combines open-top driving pleasure with sporty performance, premium comfort, and advanced technology."
    },
    {
        id: 113,
        name: "BMW M440i xDrive",
        price: "92.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "374 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive All-Wheel Drive",
            "Adaptive M Suspension",
            "M Sport Differential",
            "BMW Curved Display",
            "Harman Kardon Premium Audio"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "360° Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.7jKyJFyWkfvKVYjtsve7jQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M440i xDrive delivers exceptional performance, intelligent all-wheel drive, luxury craftsmanship, and everyday usability."
    },
    {
        id: 114,
        name: "BMW 418i Gran Coupe",
        price: "58.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "184 hp",
        torque: "300 Nm",
        topSpeed: "235 km/h",

        features: [
            "Panoramic Glass Sunroof",
            "BMW Curved Display",
            "Wireless Apple CarPlay & Android Auto",
            "Ambient Interior Lighting",
            "Adaptive LED Headlights"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.UjhzSEYyGoT8hbMfJCRaJwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 418i Gran Coupe offers elegant coupe styling, premium interiors, modern technology, and refined driving dynamics."
    },
    {
        id: 115,
        name: "BMW 520i",
        price: "74.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "190 hp",
        torque: "310 Nm",
        topSpeed: "235 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Sunroof",
            "Harman Kardon Surround Sound",
            "Four-Zone Climate Control",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "8 Airbags",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Parking Assistant Plus",
            "360° Surround Camera"
        ],

        image: "https://th.bing.com/th/id/OIP.ymjWppgZXg7BLBrVg892AQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 520i is a luxury executive sedan that combines refined comfort, advanced technology, and efficient turbocharged performance."
    },
    {
        id: 116,
        name: "BMW 530i M Sport",
        price: "79.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "258 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "M Sport Package",
            "BMW Curved Display",
            "Adaptive LED Headlights",
            "Harman Kardon Premium Audio",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.6udKR33zp-C2ufreUd3u8wHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 530i M Sport blends executive luxury with dynamic M styling, exhilarating performance, and cutting-edge driver assistance technologies."
    },
    {
        id: 117,
        name: "BMW M550i xDrive",
        price: "1.15 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "4.4L TwinPower Turbo V8",
        power: "530 hp",
        torque: "750 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive All-Wheel Drive",
            "Adaptive M Suspension",
            "M Sport Exhaust System",
            "Harman Kardon Surround Sound",
            "BMW Curved Display"
        ],

        safety: [
            "8 Airbags",
            "Adaptive Cruise Control",
            "Lane Keeping Assist",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://th.bing.com/th/id/OIP.PQgNMtuOqlNLPzzftA-4_gHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M550i xDrive is a high-performance luxury sedan powered by a TwinPower Turbo V8 engine, delivering exceptional acceleration, premium comfort, and advanced driving technology."
    },
    {
        id: 118,
        name: "BMW 520d",
        price: "72.90 Lakh",
        fuel: "Diesel",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Diesel",
        power: "190 hp",
        torque: "400 Nm",
        topSpeed: "235 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Sunroof",
            "Wireless Apple CarPlay & Android Auto",
            "Ambient Interior Lighting",
            "Four-Zone Climate Control"
        ],

        safety: [
            "8 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Front Collision Warning"
        ],

        image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/520DFD-001.jpg",

        description: "The BMW 520d combines outstanding fuel efficiency, refined diesel performance, luxurious comfort, and advanced driver assistance features."
    },
    {
        id: 119,
        name: "BMW 620d GT",
        price: "79.90 Lakh",
        fuel: "Diesel",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Diesel",
        power: "190 hp",
        torque: "400 Nm",
        topSpeed: "220 km/h",

        features: [
            "Panoramic Glass Roof",
            "BMW Curved Display",
            "Adaptive Air Suspension",
            "Harman Kardon Premium Audio",
            "Gesture Control"
        ],

        safety: [
            "8 Airbags",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "Lane Departure Warning",
            "360° Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.b0r9CBcmVzRvzQbfTne92QHaEA?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 620d Gran Turismo offers luxurious long-distance comfort, spacious interiors, efficient diesel performance, and elegant coupe-inspired styling."
    },
    {
        id: 120,
        name: "BMW 630i GT",
        price: "81.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "258 hp",
        torque: "400 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW Live Cockpit Professional",
            "Panoramic Glass Roof",
            "Adaptive Air Suspension",
            "Harman Kardon Sound System",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "360° Surround View Camera",
            "Dynamic Stability Control"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.WCkyGkAEM7SybQcZik2EWgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 630i Gran Turismo combines luxury sedan comfort, sporty performance, spacious practicality, and advanced technology in an elegant fastback design."
    },
    {
        id: 121,
        name: "BMW 640i xDrive GT",
        price: "95.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "340 hp",
        torque: "450 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive Intelligent AWD",
            "Adaptive Air Suspension",
            "BMW Curved Display",
            "Bowers & Wilkins Diamond Surround Sound",
            "Panoramic Glass Roof"
        ],

        safety: [
            "8 Airbags",
            "Adaptive Cruise Control",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.L1hzh_3UC88jXizbMPQm9QHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 640i xDrive Gran Turismo delivers exceptional grand touring comfort with powerful six-cylinder performance, intelligent all-wheel drive, and premium luxury."
    },
    {
        id: 122,
        name: "BMW 740i",
        price: "1.83 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "381 hp",
        torque: "520 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW Curved Display",
            "31.3-inch BMW Theatre Screen",
            "Bowers & Wilkins Diamond Surround Sound",
            "Executive Lounge Rear Seats",
            "Sky Lounge Panoramic Glass Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.Uq4ZqCFBL1MTmmpeRQStWAHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 740i is the flagship luxury sedan offering exceptional comfort, advanced technology, and refined six-cylinder performance."
    },
    {
        id: 123,
        name: "BMW 750e xDrive",
        price: "2.05 Crore",
        fuel: "Plug-in Hybrid",
        transmission: "8-Speed Steptronic Automatic",
        engine: "3.0L TwinPower Turbo Inline-6 + Electric Motor",
        power: "489 hp",
        torque: "700 Nm",
        topSpeed: "250 km/h",

        features: [
            "BMW xDrive All-Wheel Drive",
            "Executive Lounge Seating",
            "BMW Theatre Screen",
            "Bowers & Wilkins Diamond Audio",
            "Sky Lounge Panoramic Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "Lane Keeping Assist"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.7ARaUBI9OOo3hYjt_Y5XTwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 750e xDrive combines a powerful petrol engine with plug-in hybrid technology, delivering luxury, efficiency, and effortless performance."
    },
    {
        id: 124,
        name: "BMW i7 xDrive60",
        price: "2.13 Crore",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Dual Electric Motors",
        power: "544 hp",
        torque: "745 Nm",
        topSpeed: "240 km/h",

        features: [
            "31.3-inch BMW Theatre Screen",
            "Executive Lounge Seating",
            "Bowers & Wilkins Diamond Surround Sound",
            "Sky Lounge Panoramic Roof",
            "BMW Curved Display"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Parking Assistant Professional",
            "360° Surround View Camera",
            "Lane Keeping Assist"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.LijWuN-2I1ZA3VaqDXjQ_AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW i7 xDrive60 is BMW's all-electric flagship luxury limousine, combining silent electric performance with world-class comfort and cutting-edge technology."
    },
    {
        id: 125,
        name: "BMW 840i Coupe",
        price: "1.48 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "340 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "Adaptive M Suspension",
            "BMW Live Cockpit Professional",
            "Harman Kardon Surround Sound",
            "Laserlight Headlamps",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Lane Departure Warning",
            "Parking Assistant Plus",
            "Dynamic Stability Control"
        ],

        image: "https://th.bing.com/th/id/OIP.G2YypXFDOfgTh11KxRHqTQHaEA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 840i Coupe blends elegant grand touring luxury with thrilling six-cylinder performance and precision handling."
    },
    {
        id: 126,
        name: "BMW 840i Convertible",
        price: "1.58 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "340 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "Fully Automatic Soft Top",
            "BMW Live Cockpit Professional",
            "Harman Kardon Surround Sound",
            "Adaptive LED Headlights",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "Lane Departure Warning",
            "Dynamic Stability Control"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.5DXbIl-Z8sMEte0DgPNyDQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW 840i Convertible delivers an unforgettable open-air driving experience with premium luxury, advanced technology, and exhilarating performance."
    },
    {
        id: 127,
        name: "BMW M8 Competition Coupe",
        price: "2.38 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8",
        power: "625 hp",
        torque: "750 Nm",
        topSpeed: "250 km/h",

        features: [
            "M xDrive All-Wheel Drive",
            "Adaptive M Suspension",
            "Bowers & Wilkins Diamond Surround Sound",
            "BMW Live Cockpit Professional",
            "Carbon Fiber Roof"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.iRQ_4KkcdgAdLlkr9MfzNwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M8 Competition Coupe is BMW's flagship high-performance grand tourer, powered by a 625 hp TwinPower Turbo V8 engine, delivering supercar-level acceleration, precision handling, and uncompromising luxury."
    },
    {
        id: 128,
        name: "BMW X1",
        price: "50.80 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic DCT",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "204 hp",
        torque: "300 Nm",
        topSpeed: "233 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Sunroof",
            "Wireless Apple CarPlay & Android Auto",
            "Adaptive LED Headlights",
            "Dual-Zone Climate Control"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Lane Departure Warning"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.9xBjxqFpOzRHDoIfYkRkLQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X1 is a premium compact luxury SUV offering dynamic performance, advanced technology, and exceptional everyday practicality."
    },
    {
        id: 129,
        name: "BMW X2",
        price: "55.90 Lakh",
        fuel: "Petrol",
        transmission: "7-Speed Steptronic DCT",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "204 hp",
        torque: "300 Nm",
        topSpeed: "236 km/h",

        features: [
            "BMW Curved Display",
            "Panoramic Glass Roof",
            "Wireless Apple CarPlay & Android Auto",
            "Adaptive LED Headlights",
            "Sport Seats"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Lane Departure Warning",
            "Parking Assistant",
            "Dynamic Stability Control"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.aT32dHWspMuM4YOhwuVYVgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X2 combines coupe-inspired styling with sporty driving dynamics, premium comfort, and cutting-edge technology."
    },
    {
        id: 130,
        name: "BMW X3",
        price: "75.80 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "190 hp",
        torque: "310 Nm",
        topSpeed: "215 km/h",

        features: [
            "Panoramic Sunroof",
            "BMW Curved Display",
            "Harman Kardon Sound System",
            "Adaptive Suspension",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "Lane Departure Warning",
            "360° Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.0rgEKsL6J7BIKcDwzAkEFgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X3 is a versatile luxury SUV delivering premium comfort, refined performance, and advanced driver assistance technologies."
    },
    {
        id: 131,
        name: "BMW X4",
        price: "96.20 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "252 hp",
        torque: "350 Nm",
        topSpeed: "240 km/h",

        features: [
            "M Sport Package",
            "BMW Curved Display",
            "Panoramic Glass Roof",
            "Harman Kardon Premium Audio",
            "Adaptive LED Headlights"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant",
            "Parking Assistant Plus",
            "Dynamic Stability Control",
            "360° Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.d8miu1XfFtFG0cPpinDvDgHaEa?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X4 is a luxury Sports Activity Coupe that combines bold coupe styling with SUV practicality and engaging performance."
    },
    {
        id: 132,
        name: "BMW X5",
        price: "99.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "381 hp",
        torque: "520 Nm",
        topSpeed: "250 km/h",

        features: [
            "Air Suspension",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "Panoramic Sky Lounge Roof",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Camera"
        ],

        image: "https://cdn.bmwblog.com/wp-content/uploads/2024/10/2025-bmw-x5-silver-anniversary-31.jpg",

        description: "The BMW X5 is a luxury SUV that delivers outstanding performance, premium comfort, and class-leading technology."
    },
    {
        id: 133,
        name: "BMW X6",
        price: "1.11 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "381 hp",
        torque: "520 Nm",
        topSpeed: "250 km/h",

        features: [
            "M Sport Package",
            "BMW Curved Display",
            "Panoramic Glass Roof",
            "Harman Kardon Premium Audio",
            "Adaptive Air Suspension"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "Lane Keeping Assist",
            "360° Surround View Camera"
        ],

        image: "https://www.motortrend.com/uploads/2024/04/006-2025-BMW-X6-M-Competition-front-view.jpg",

        description: "The BMW X6 blends the practicality of an SUV with the sleek styling of a luxury coupe, delivering powerful performance and advanced technology."
    },
    {
        id: 134,
        name: "BMW X7",
        price: "1.31 Crore",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Automatic",
        engine: "3.0L TwinPower Turbo Inline-6",
        power: "381 hp",
        torque: "520 Nm",
        topSpeed: "250 km/h",

        features: [
            "Executive Lounge Seating",
            "BMW Curved Display",
            "Sky Lounge Panoramic Roof",
            "Bowers & Wilkins Diamond Audio",
            "Air Suspension"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.lSA0AUCO0WE43VNHmhgkAwHaD5?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X7 is BMW's flagship luxury SUV, offering exceptional comfort, powerful performance, cutting-edge technology, and spacious three-row seating."
    },
    {
        id: 135,
        name: "BMW XM",
        price: "2.60 Crore",
        fuel: "Plug-in Hybrid",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8 + Electric Motor",
        power: "653 hp",
        torque: "800 Nm",
        topSpeed: "250 km/h",

        features: [
            "M xDrive Intelligent All-Wheel Drive",
            "BMW Curved Display",
            "Bowers & Wilkins Diamond Surround Sound",
            "Adaptive M Suspension Professional",
            "Sky Lounge Panoramic Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://content.carlelo.com/uploads/UpcomingCar_img/1666330486.webp",

        description: "The BMW XM is BMW M's first standalone high-performance luxury SUV, combining a powerful V8 plug-in hybrid system with cutting-edge technology, premium comfort, and exceptional driving dynamics."
    },
    {
        id: 136,
        name: "BMW Z4 sDrive20i",
        price: "92.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "2.0L TwinPower Turbo Inline-4",
        power: "197 hp",
        torque: "320 Nm",
        topSpeed: "240 km/h",

        features: [
            "Electrically Operated Soft Top",
            "BMW Live Cockpit Professional",
            "M Sport Seats",
            "Wireless Apple CarPlay",
            "Adaptive LED Headlights"
        ],

        safety: [
            "6 Airbags",
            "Dynamic Stability Control",
            "ABS with EBD",
            "Parking Distance Control",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.XOj6kR7D7e99DU2Bv0UqUQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW Z4 sDrive20i is a premium two-seater roadster offering open-top driving excitement, elegant design, and refined turbocharged performance."
    },
    {
        id: 137,
        name: "BMW Z4 M40i",
        price: "97.90 Lakh",
        fuel: "Petrol",
        transmission: "8-Speed Steptronic Sport Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "340 hp",
        torque: "500 Nm",
        topSpeed: "250 km/h",

        features: [
            "Adaptive M Suspension",
            "M Sport Differential",
            "Harman Kardon Surround Sound",
            "BMW Live Cockpit Professional",
            "Electrically Operated Soft Top"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant",
            "Dynamic Stability Control",
            "Parking Assistant",
            "Rear View Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.XsJefLdHIRxUnIbBhzFWzQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW Z4 M40i is the ultimate luxury roadster, powered by a 340 hp inline-six engine that delivers thrilling performance, precise handling, and an unforgettable open-air driving experience."
    },
    {
        id: 138,
        name: "BMW M2",
        price: "1.03 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "480 hp",
        torque: "600 Nm",
        topSpeed: "250 km/h",

        features: [
            "Adaptive M Suspension",
            "M Sport Differential",
            "BMW Curved Display",
            "M Carbon Roof",
            "Harman Kardon Surround Sound"
        ],

        safety: [
            "6 Airbags",
            "Dynamic Stability Control",
            "Driving Assistant",
            "Parking Assistant",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.aEGf1oYyMlbhnB2zPdDIhAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M2 is the most compact M sports coupe, delivering exceptional agility, thrilling performance, and everyday usability."
    },
    {
        id: 139,
        name: "BMW M3 Competition",
        price: "1.53 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "530 hp",
        torque: "650 Nm",
        topSpeed: "290 km/h",

        features: [
            "M xDrive",
            "Adaptive M Suspension",
            "BMW Curved Display",
            "Carbon Bucket Seats",
            "Laser Headlights"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "Dynamic Stability Control",
            "360° Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.0310feXSXeOsDdiDpPlMvAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW M3 Competition combines track-ready performance with everyday practicality and premium luxury."
    },
    {
        id: 140,
        name: "BMW M4 Competition",
        price: "1.56 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "530 hp",
        torque: "650 Nm",
        topSpeed: "290 km/h",

        features: [
            "M xDrive",
            "Carbon Fiber Roof",
            "Adaptive M Suspension",
            "BMW Live Cockpit Professional",
            "Harman Kardon Audio"
        ],

        safety: [
            "6 Airbags",
            "Adaptive Cruise Control",
            "Driving Assistant Professional",
            "Parking Assistant Plus",
            "360° Camera"
        ],

        image: "https://i.pinimg.com/originals/b6/ac/26/b6ac26e6ddbcf4adc924c95083089f45.jpg",

        description: "The BMW M4 Competition is a high-performance coupe offering race-inspired engineering, luxury interiors, and breathtaking acceleration."
    },
    {
        id: 141,
        name: "BMW M5",
        price: "1.99 Crore",
        fuel: "Plug-in Hybrid",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8 + Electric Motor",
        power: "727 hp",
        torque: "1000 Nm",
        topSpeed: "305 km/h",

        features: [
            "M xDrive",
            "Adaptive M Suspension Professional",
            "BMW Curved Display",
            "Bowers & Wilkins Diamond Audio",
            "Carbon Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Parking Assistant Professional",
            "Adaptive Cruise Control",
            "360° Camera"
        ],

        image: "https://ymimg1.b8cdn.com/resized/car_model/12701/pictures/15980504/webp_listing_main_2018_BMW_M5__9_.webp",

        description: "The all-new BMW M5 combines electrified performance with supercar acceleration and executive luxury."
    },
    {
        id: 142,
        name: "BMW M7 Competition",
        price: "2.55 Crore",
        fuel: "Plug-in Hybrid",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8 + Electric Motor",
        power: "750 hp",
        torque: "1000 Nm",
        topSpeed: "305 km/h",

        features: [
            "M xDrive Intelligent All-Wheel Drive",
            "Executive Lounge Rear Seats",
            "31.3-inch BMW Theatre Screen",
            "Bowers & Wilkins Diamond Surround Sound",
            "Adaptive M Suspension Professional"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/c51905b0000b639a185eeb080dd879bf007f5604/photos/3Re64RYD-8o3Q6nLfwb-(edit).jpg?t=169269654564",

        description: "The BMW M7 Competition is a fictional ultra-luxury performance sedan concept inspired by BMW M engineering, combining flagship comfort with supercar-level performance."
    },
    {
        id: 143,
        name: "BMW i4 eDrive40",
        price: "72.50 Lakh",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Single Electric Motor",
        power: "340 hp",
        torque: "430 Nm",
        topSpeed: "190 km/h",

        features: [
            "BMW Curved Display",
            "Wireless Apple CarPlay & Android Auto",
            "Adaptive LED Headlights",
            "Harman Kardon Surround Sound",
            "Panoramic Glass Roof"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.QHs-6nGoV1ksUb2xVxkWlwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW i4 eDrive40 is a premium all-electric Gran Coupe offering impressive range, dynamic performance, luxurious comfort, and cutting-edge BMW technology."
    },
    {
        id: 144,
        name: "BMW i4 M50",
        price: "77.50 Lakh",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Dual Electric Motors",
        power: "544 hp",
        torque: "795 Nm",
        topSpeed: "225 km/h",

        features: [
            "BMW M Adaptive Suspension",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "M Sport Brakes",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.k22Ow09-YyiBRokVZmONOgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW i4 M50 is BMW M's first fully electric performance Gran Coupe, combining breathtaking acceleration with luxury and everyday practicality."
    },
    {
        id: 145,
        name: "BMW iX xDrive40",
        price: "1.22 Crore",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Dual Electric Motors",
        power: "326 hp",
        torque: "630 Nm",
        topSpeed: "200 km/h",

        features: [
            "Panoramic Sky Lounge Roof",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "Adaptive Air Suspension",
            "Wireless Apple CarPlay & Android Auto"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://tse3.mm.bing.net/th/id/OIP.6sm8RJbZn2VUwh5-Lvkb1gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW iX xDrive40 is a luxurious electric SUV offering premium comfort, advanced technology, and confident all-wheel-drive capability."
    },
    {
        id: 146,
        name: "BMW iX xDrive50",
        price: "1.40 Crore",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Dual Electric Motors",
        power: "523 hp",
        torque: "765 Nm",
        topSpeed: "200 km/h",

        features: [
            "Sky Lounge Panoramic Roof",
            "Bowers & Wilkins Diamond Surround Sound",
            "BMW Curved Display",
            "Adaptive Air Suspension",
            "Integral Active Steering"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.Gn_gPDZlhs3clfjOiPDPqQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW iX xDrive50 is a flagship electric luxury SUV delivering exceptional range, powerful performance, and world-class comfort."
    },
    {
        id: 147,
        name: "BMW iX M60",
        price: "1.45 Crore",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Dual M Electric Motors",
        power: "619 hp",
        torque: "1100 Nm",
        topSpeed: "250 km/h",

        features: [
            "M Adaptive Air Suspension",
            "Bowers & Wilkins Diamond Surround Sound",
            "BMW Curved Display",
            "Sky Lounge Panoramic Roof",
            "Integral Active Steering"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP.0RP1sYHcYo1J4c9j6y5DfAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW iX M60 is the flagship all-electric BMW M SUV, delivering supercar-level performance, luxurious comfort, and cutting-edge electric mobility."
    },
    {
        id: 148,
        name: "BMW i3",
        price: "55.00 Lakh",
        fuel: "Electric",
        transmission: "Single-Speed Automatic",
        engine: "Single Electric Motor",
        power: "170 hp",
        torque: "250 Nm",
        topSpeed: "150 km/h",

        features: [
            "BMW iDrive Infotainment",
            "Wireless Apple CarPlay",
            "Automatic Climate Control",
            "LED Headlights",
            "Eco Pro Driving Mode"
        ],

        safety: [
            "6 Airbags",
            "ABS with EBD",
            "Dynamic Stability Control",
            "Rear Parking Camera",
            "Tyre Pressure Monitoring System"
        ],

        image: "https://tse1.mm.bing.net/th/id/OIP.lcTV0F9ibFY8Ld2A36_mUgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW i3 is BMW's pioneering electric hatchback, offering sustainable mobility, futuristic design, and a premium urban driving experience."
    },
    {
        id: 149,
        name: "BMW X3 M Competition",
        price: "1.05 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "510 hp",
        torque: "650 Nm",
        topSpeed: "285 km/h",

        features: [
            "BMW M xDrive",
            "Adaptive M Suspension",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "Panoramic Glass Roof"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse4.mm.bing.net/th/id/OIP.gFmpiJygM05-5l2vrDRMBAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X3 M Competition delivers thrilling M performance, intelligent all-wheel drive, premium luxury, and everyday SUV practicality."
    },
    {
        id: 150,
        name: "BMW X4 M Competition",
        price: "1.10 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "3.0L M TwinPower Turbo Inline-6",
        power: "510 hp",
        torque: "650 Nm",
        topSpeed: "285 km/h",

        features: [
            "BMW M xDrive",
            "Adaptive M Suspension",
            "BMW Curved Display",
            "Harman Kardon Surround Sound",
            "Panoramic Glass Roof"
        ],

        safety: [
            "6 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Plus",
            "360° Surround View Camera"
        ],

        image: "https://tse2.mm.bing.net/th/id/OIP._Etps_iMMTXQyGI7pBXL3QHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X4 M Competition combines coupe-inspired styling with race-bred M performance, advanced technology, and luxurious comfort."
    },
    {
        id: 151,
        name: "BMW X5 M Competition",
        price: "2.08 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8",
        power: "625 hp",
        torque: "750 Nm",
        topSpeed: "290 km/h",

        features: [
            "BMW M xDrive",
            "Adaptive M Suspension Professional",
            "Bowers & Wilkins Diamond Surround Sound",
            "BMW Curved Display",
            "Panoramic Sky Lounge Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://th.bing.com/th/id/OIP.NZ2Qga3aD_uJBtIYbyLHxgHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",

        description: "The BMW X5 M Competition is a high-performance luxury SUV powered by a TwinPower Turbo V8 engine, delivering supercar performance with exceptional practicality."
    },
    {
        id: 152,
        name: "BMW X6 M Competition",
        price: "2.15 Crore",
        fuel: "Petrol",
        transmission: "8-Speed M Steptronic Automatic",
        engine: "4.4L M TwinPower Turbo V8",
        power: "625 hp",
        torque: "750 Nm",
        topSpeed: "290 km/h",

        features: [
            "BMW M xDrive",
            "Adaptive M Suspension Professional",
            "Bowers & Wilkins Diamond Surround Sound",
            "BMW Curved Display",
            "Panoramic Glass Roof"
        ],

        safety: [
            "8 Airbags",
            "Driving Assistant Professional",
            "Adaptive Cruise Control",
            "Parking Assistant Professional",
            "360° Surround View Camera"
        ],

        image: "https://th.bing.com/th/id/OIP.mTvdzmT2murVqy86jL-fNQAAAA?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3GE",

        description: "The BMW X6 M Competition is BMW's ultimate performance Sports Activity Coupe, combining 625 hp V8 power, aggressive styling, luxurious interiors, and track-inspired driving dynamics."
    }
];