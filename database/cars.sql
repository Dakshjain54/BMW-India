CREATE DATABASE IF NOT EXISTS bmw;
USE bmw;

CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price VARCHAR(50) NOT NULL,
    engine VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT
);

INSERT INTO cars (name, price, engine, image, description) VALUES
-- 1 Series
('BMW 118i', '₹ 35,00,000', '1.5L 3-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+118i', 'The entry-level premium hatchback with dynamic design and efficient performance.'),
('BMW M135i xDrive', '₹ 55,00,000', '2.0L 4-cylinder Turbo (306 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M135i', 'Hot hatch with all-wheel drive and sports suspension.'),

-- 2 Series
('BMW 220i Gran Coupe', '₹ 42,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+220i+Gran+Coupe', 'Sleek four-door coupe with sporty handling.'),
('BMW M240i xDrive', '₹ 65,00,000', '3.0L 6-cylinder Turbo (374 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M240i', 'Powerful coupe with rear-biased all-wheel drive.'),
('BMW 230i Coupe', '₹ 48,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+230i+Coupe', 'Classic rear-wheel drive coupe with balanced dynamics.'),
('BMW 218i Gran Coupe', '₹ 38,00,000', '1.5L 3-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+218i+Gran+Coupe', 'Entry-level four-door coupe with premium features.'),

-- 3 Series
('BMW 320i', '₹ 48,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+320i', 'The iconic sports sedan with perfect 50:50 weight distribution.'),
('BMW 330i M Sport', '₹ 55,00,000', '2.0L 4-cylinder Turbo (255 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+330i', 'Enhanced performance with M Sport package.'),
('BMW M340i xDrive', '₹ 72,00,000', '3.0L 6-cylinder Turbo (382 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M340i', 'Near-M performance with inline-six power.'),
('BMW 320d', '₹ 50,00,000', '2.0L 4-cylinder Diesel', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+320d', 'Efficient diesel variant with high torque.'),

-- 4 Series
('BMW 420i Coupe', '₹ 60,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+420i+Coupe', 'Elegant coupe with distinctive kidney grille.'),
('BMW 430i Convertible', '₹ 70,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+430i+Convertible', 'Open-top driving pleasure with fabric roof.'),
('BMW M440i xDrive', '₹ 85,00,000', '3.0L 6-cylinder Turbo (382 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M440i', 'Performance coupe with mild-hybrid technology.'),
('BMW 418i Gran Coupe', '₹ 52,00,000', '1.5L 3-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+418i+Gran+Coupe', 'Sleek four-door coupe with compact dimensions.'),

-- 5 Series
('BMW 520i', '₹ 65,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+520i', 'Executive sedan with advanced technology and comfort.'),
('BMW 530i M Sport', '₹ 72,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+530i', 'Sporty yet luxurious with M Sport styling.'),
('BMW M550i xDrive', '₹ 1,20,00,000', '4.4L V8 Turbo (523 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M550i', 'V8-powered performance sedan with all-wheel drive.'),
('BMW 520d', '₹ 68,00,000', '2.0L 4-cylinder Diesel', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+520d', 'Efficient diesel executive sedan.'),

-- 6 Series GT
('BMW 620d GT', '₹ 70,00,000', '2.0L 4-cylinder Diesel', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+620d+GT', 'Grand Tourer with spacious interior and hatchback practicality.'),
('BMW 630i GT', '₹ 75,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+630i+GT', 'Luxury grand tourer with panoramic roof.'),
('BMW 640i xDrive GT', '₹ 85,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+640i+GT', 'Powerful six-cylinder GT with all-wheel drive.'),

-- 7 Series
('BMW 740i', '₹ 1,40,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+740i', 'Flagship luxury sedan with exquisite comfort.'),
('BMW 750e xDrive', '₹ 1,80,00,000', '4.4L V8 Hybrid', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+750e', 'Plug-in hybrid V8 with immense power and luxury.'),
('BMW i7 xDrive60', '₹ 2,20,00,000', 'Electric (544 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+i7', 'Fully electric luxury sedan with cutting-edge tech.'),

-- 8 Series
('BMW 840i Coupe', '₹ 1,30,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+840i+Coupe', 'Grand coupe with elegant design and powerful performance.'),
('BMW M8 Competition Coupe', '₹ 2,40,00,000', '4.4L V8 Turbo (625 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M8', 'Ultimate performance coupe with racing DNA.'),
('BMW 840i Convertible', '₹ 1,45,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+840i+Convertible', 'Luxurious open-top grand tourer.'),

-- X Series (SUVs)
('BMW X1', '₹ 45,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X1', 'Compact luxury SUV with agile handling.'),
('BMW X2', '₹ 48,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X2', 'Sporty coupe-style SUV with bold design.'),
('BMW X3', '₹ 60,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X3', 'Mid-size SUV with versatility and performance.'),
('BMW X4', '₹ 70,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X4', 'Sports Activity Coupe with sloping roofline.'),
('BMW X5', '₹ 95,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X5', 'Full-size luxury SUV with commanding presence.'),
('BMW X6', '₹ 1,20,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X6', 'Coupe-like SUV with aggressive styling.'),
('BMW X7', '₹ 1,20,00,000', '3.0L 6-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X7', 'Flagship luxury SUV with three-row seating.'),
('BMW XM', '₹ 3,00,00,000', '4.4L V8 Hybrid (644 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+XM', 'High-performance plug-in hybrid SUV from BMW M.'),

-- Z Series
('BMW Z4 sDrive20i', '₹ 75,00,000', '2.0L 4-cylinder Turbo', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+Z4', 'Roadster with classic front-engine rear-drive layout.'),
('BMW Z4 M40i', '₹ 95,00,000', '3.0L 6-cylinder Turbo (382 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+Z4+M40i', 'Performance roadster with M tuning.'),

-- M Series (Standalone M models)
('BMW M2', '₹ 90,00,000', '3.0L 6-cylinder Turbo (453 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M2', 'Compact high-performance coupe with rear-wheel drive.'),
('BMW M3', '₹ 1,40,00,000', '3.0L 6-cylinder Turbo (473 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M3', 'Legendary sports sedan with track capability.'),
('BMW M4', '₹ 1,30,00,000', '3.0L 6-cylinder Turbo (503 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M4', 'High-performance coupe with aggressive styling.'),
('BMW M5', '₹ 1,80,00,000', '4.4L V8 Turbo (600 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M5', 'Super sedan blending luxury and race car performance.'),
('BMW M8', '₹ 2,20,00,000', '4.4L V8 Turbo (600 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+M8', 'Flagship M coupe with breathtaking performance.'),

-- i Series (Electric)
('BMW i4 eDrive40', '₹ 70,00,000', 'Electric (335 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+i4', 'All-electric Gran Coupe with sporty dynamics.'),
('BMW i4 M50', '₹ 85,00,000', 'Electric (536 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+i4+M50', 'Performance electric car with M tuning.'),
('BMW iX xDrive40', '₹ 1,15,00,000', 'Electric (322 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+iX', 'Electric SUV with futuristic design and tech.'),
('BMW iX xDrive50', '₹ 1,40,00,000', 'Electric (516 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+iX+xDrive50', 'Long-range electric SUV with luxury.'),
('BMW iX M60', '₹ 1,80,00,000', 'Electric (610 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+iX+M60', 'High-performance electric SUV from BMW M.'),
('BMW i3', '₹ 45,00,000', 'Electric (170 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+i3', 'Compact electric city car with carbon-fiber construction.'),

-- Additional X models
('BMW X3 M', '₹ 1,30,00,000', '3.0L 6-cylinder Turbo (473 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X3+M', 'High-performance SUV with M engineering.'),
('BMW X4 M', '₹ 1,35,00,000', '3.0L 6-cylinder Turbo (473 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X4+M', 'Sports Activity Coupe with M power.'),
('BMW X5 M', '₹ 2,00,00,000', '4.4L V8 Turbo (600 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X5+M', 'Full-size luxury SUV with supercar performance.'),
('BMW X6 M', '₹ 2,10,00,000', '4.4L V8 Turbo (600 hp)', 'https://placehold.co/600x400/2a2a2a/white?text=BMW+X6+M', 'Coupe SUV with M muscle.');