export interface Showroom {
  id: number;
  name: string;
  address: {
    street: string;
    landmark: string;
    city: string;
    pincode: string;
    state: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  images: {
    main: string;
    gallery: string[];
  };
  brands: string[];
}

export const showrooms: Showroom[] = [
  {
    id: 1,
    name: 'Dhanlaxmi PREMIA',
    address: {
      street: 'Shop No 1/4, Skill Hub Complex, Jalna Road, Kranti Chowk',
      landmark: 'Near Kranti Chowk',
      city: 'Aurangabad',
      pincode: '431001',
      state: 'Maharashtra',
    },
    contact: {
      phone: '+91 93716 19191',
      email: 'info@dhanlaxmipremia.com',
    },
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: 'Closed',
    },
    coordinates: {
      lat: 20.0225445,
      lng: 73.7681646,
    },
    googleMapsUrl: 'https://www.google.com/maps/place/PREMIA+-+CHHATRAPATI+SAMBHAJINAGAR+(AURANGABAD)+-+DHANLAXMI+AUTOMOBILES+-+Hero+MotoCorp/@19.8616366,75.2711036,12.5z/data=!4m10!1m2!2m1!1sPREMIA+-+CHHATRAPATI+SAMBHAJINAGAR+-+DHANLAXMI+AUTOMOBILES+-+Hero+MotoCorp!3m6!1s0x3bdb990ceb8bf31f:0xf0e21b24333cd825!8m2!3d19.8732283!4d75.3273947!15sCkpQUkVNSUEgLSBDSEhBVFJBUEFUSSBTQU1CSEFKSU5BR0FSIC0gREhBTkxBWE1JIEFVVE9NT0JJTEVTIC0gSGVybyBNb3RvQ29ycCIDiAEBWkYiRHByZW1pYSBjaGhhdHJhcGF0aSBzYW1iaGFqaW5hZ2FyIGRoYW5sYXhtaSBhdXRvbW9iaWxlcyBoZXJvIG1vdG9jb3JwkgERbW90b3JjeWNsZV9kZWFsZXKqAd4BCg0vZy8xMWJ5Y3pxaF83CgsvZy8xdGZyOG5iYwoJL20vMDdyOXlwEAEqSCJEcHJlbWlhIGNoaGF0cmFwYXRpIHNhbWJoYWppbmFnYXIgZGhhbmxheG1pIGF1dG9tb2JpbGVzIGhlcm8gbW90b2NvcnAoADIfEAEiG7SDmtmBNKLCJ5F-TETBb-YJ4khJ_wtfo73gujJIEAIiRHByZW1pYSBjaGhhdHJhcGF0aSBzYW1iaGFqaW5hZ2FyIGRoYW5sYXhtaSBhdXRvbW9iaWxlcyBoZXJvIG1vdG9jb3Jw4AEA!16s%2Fg%2F11w97_hv9n?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
    images: {
      main: 'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/IWGZMb3.jpeg',
      gallery: [
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/IWGZMb3.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/IWGZMb3.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/IWGZMb3.jpeg',
      ],
    },
    brands: ['Hero', 'Harley-Davidson', 'Vida'],
  },
  {
    id: 2,
    name: 'Dhanlaxmi Automobiles',
    address: {
      street: 'X, 80 - More Chowk Rd, Bajaj Nagar, MIDC, Waluj',
      landmark: 'Near More Chowk',
      city: 'Chhatrapati Sambhaji Nagar',
      pincode: '431136',
      state: 'Maharashtra',
    },
    contact: {
      phone: '+91 8888876603',
      email: 'info@dhanlaxmiautomobiles.com',
    },
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 2:00 PM',
    },
    coordinates: {
      lat: 19.8500,
      lng: 75.3200,
    },
    googleMapsUrl: 'https://www.google.com/maps/place/Dhanlaxmi+Automobiles+-+Hero+MotoCorp/@19.8406979,75.2433643,16.5z/data=!4m14!1m7!3m6!1s0x3bdb9bd819f2930f:0xd91e953abe1d4845!2sx,+80,+More+Chowk+Rd,+More+Chowk,+Waluj,+Chhatrapati+Sambhajinagar,+Wadgaon+Kolhati,+Maharashtra+431133!3b1!8m2!3d19.8403382!4d75.2470337!3m5!1s0x3bdb9bcfb0000001:0x8ca86c87c96a07f5!8m2!3d19.8396391!4d75.2458987!16s%2Fg%2F1tfr8nbc?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
    images: {
      main: 'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/rVKRTtM.png',
      gallery: [
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/rVKRTtM.png',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/rVKRTtM.png',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/rVKRTtM.png',
      ],
    },
    brands: ['Hero', 'Harley-Davidson'],
  },
  {
    id: 3,
    name: 'Dhanlaxmi Motors',
    address: {
      street: 'Plot No. 3, Beside Ira By Orchid Hotel, Opp to Master Cook Hotel',
      landmark: 'Near Jabinda Ground, Beed By Pass Road',
      city: 'Aurangabad',
      pincode: '431005',
      state: 'Maharashtra',
    },
    contact: {
      phone: '+91 8888876601',
      email: 'info@dhanlaxmimotors.com',
    },
    hours: {
      weekdays: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 8:00 PM',
      sunday: '10:00 AM - 2:00 PM',
    },
    coordinates: {
      lat: 19.8500,
      lng: 75.3200,
    },
    googleMapsUrl: 'https://www.google.com/maps/place/Dhanlaxmi+Motors+-+Hero+MotoCorp/@19.8512085,75.3271483,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdba2780d882cc3:0x20bbc9e9a87ced25!8m2!3d19.8512085!4d75.3297232!16s%2Fg%2F11c6cx1h0b?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
    images: {
      main: 'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/QStzmfp.jpeg',
      gallery: [
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/QStzmfp.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/QStzmfp.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/QStzmfp.jpeg',
      ],
    },
    brands: ['Hero', 'Harley-Davidson'],
  },
  {
    id: 4,
    name: 'Dhanlaxmi Petroleum',
    address: {
      street: 'Jai Bhavani Chowk, X385/A, Bajaj Nagar, MIDC, Waluj',
      landmark: 'Near Jai Bhavani Chowk',
      city: 'Chhatrapati Sambhaji Nagar',
      pincode: '431136',
      state: 'Maharashtra',
    },
    contact: {
      phone: '+91 8888876616',
      email: 'info@dhanlaxmipetroleum.com',
    },
    hours: {
      weekdays: '24/7',
      saturday: '24/7',
      sunday: '24/7',
    },
    coordinates: {
      lat: 19.8500,
      lng: 75.3200,
    },
    googleMapsUrl: 'https://www.google.com/maps/place/Dhanlaxmi+Nayara+Petroleum/@19.8430567,75.2324841,17z/data=!4m14!1m7!3m6!1s0x3bdb9bd839ff81e7:0x65bb7db1dfb46096!2sDhanlaxmi+Nayara+Petroleum!8m2!3d19.8430618!4d75.2333317!16s%2Fg%2F11k48lrdt9!3m5!1s0x3bdb9bd839ff81e7:0x65bb7db1dfb46096!8m2!3d19.8430618!4d75.2333317!16s%2Fg%2F11k48lrdt9?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D',
    images: {
      main: 'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/ehFIyBd.jpeg',
      gallery: [
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/ehFIyBd.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/ehFIyBd.jpeg',
        'https://ik.imagekit.io/rnml0kqxo3/dhanlaxmi/ehFIyBd.jpeg',
      ],
    },
    brands: ['Hero', 'Harley-Davidson'],
  },
]; 