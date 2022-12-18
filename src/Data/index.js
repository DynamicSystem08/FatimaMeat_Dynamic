//Rabbit
import rabbitLogo from '../Image/Products/rabbit.jpg'
import rabbit1 from '../Image/rabbitimg1.jpg'
import rabbit2 from '../Image/rabbitimg2.jpg'
import rabbit3 from '../Image/rabbitimg3.jpg'
import rabbit4 from '../Image/rabbitimg4.jpg'

//Chicken
import chickenLogo from '../Image/Products/chicken.jpg'
import chicken1 from '../Image/chickenimg1.jpg'
import chicken2 from '../Image/chickenimg2.jpg'
import chicken3 from '../Image/chickenimg3.jpg'
import chicken4 from '../Image/chickenimg4.jpg'

//Beef
import beefLogo from '../Image/Products/beef.jpg'
import beef1 from '../Image/beefimg1.jpeg'
import beef2 from '../Image/beefimg2.jpg'
import beef3 from '../Image/beefimg3.jpg'
import beef4 from '../Image/beefimg4.jpg'

//camel
import camelLogo from '../Image/Products/camel.jpg'
import camel1 from '../Image/camelimg1.jpg'
import camel2 from '../Image/camelimg2.png'
import camel3 from '../Image/camelimg3.jpg'
import camel4 from '../Image/camelimg4.jpg'

//mutton
import muttonLogo from '../Image/Products/mutton.jpg'
import mutton1 from '../Image/muttonimg1.jpg'
import mutton2 from '../Image/muttonimg2.jpg'
import mutton3 from '../Image/muttonimg3.jpg'
import mutton4 from '../Image/muttonimg4.jpg'

//done
import aseelLogo from '../Image/Products/aseel.jpg'
import vealLogo from '../Image/Products/veal.jpg'
import duckLogo from '../Image/Products/duck.jpg'
import fishLogo from '../Image/Products/fish.jpg'
import sheepLogo from '../Image/Products/sheepLogo.jpg'

const allProducts = [
    {
        id: "desi-aseel-meat",
        name: "Desi Aseel Meat",
        images: [aseelLogo],
        meatType: [
            {
                type: "Desi Murghi 1.25KG",
                price: 1150,
                img: aseelLogo

            },
            {
                type: "Desi Murghi Breast / PC",
                price: 850,
                img: aseelLogo
            },
            {
                type: "Desi Murghi Qeema / Per serving",
                price: 999,
                img: aseelLogo
            }
        ],
        minPrice: 850,
        maxPrice: 1150,
        description: [
            'Asil or Aseel Chicken is an ancient breed which is arrived from India.',
            'Used for cockfighting.',
            'Tamed all over the world especially in India and Pakistan.',
            'Used for making different types of Meat and produces less amount of eggs.',
            'Has the ability to survive in the cold temperature and can fight against any disease.',
            'Powerful breed of chicken.',
            'The breed has superiority over other breeds of chicken, because of its hardness and large fighting body.',
            'The delicious and intense taste of Meat, rich in nutrients and has low fat.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "fish-meat",
        name: "Fish Meat",
        images: [fishLogo],
        meatType: [
            {
                type: "Fish 1KG",
                price: 1000,
                img: fishLogo

            }
        ],
        minPrice: 10,
        maxPrice: 100,
        description: [
            '100% fresh product.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Meat"
        }
    },
    {
        id: "chicken-meat",
        name: "Chicken Meat",
        images: [chickenLogo, chicken1, chicken2, chicken3, chicken4],
        meatType: [
            {
                type: "Chicken Breast (Boneless) 250 gm",
                price: 203,
                img: chickenLogo
            },
            {
                type: "Whole Chicken with neck & offels",
                price: 492,
                img: chickenLogo
            },
            {
                type: "Chicken Karahi cut / 250 gm",
                price: 127,
                img: chickenLogo
            },
            {
                type: "Chicken Leg Tikka / 250 gm",
                price: 125,
                img: chickenLogo
            },
            {
                type: "Chicken Qorma cut / 250 gm",
                price: 127,
                img: chickenLogo
            },
            {
                type: "Chicken Breast Tikka / 250 gm",
                price: 127,
                img: chickenLogo
            },
            {
                type: "Chicken Biryani cut/ 250 gm",
                price: 203,
                img: chickenLogo
            },
            {
                type: "Chicken minced / 250 gm",
                price: 203,
                img: chickenLogo
            },
            {
                type: "Chicken boneless handi Cut cube / 250 gm",
                price: 203,
                img: chickenLogo
            },
            {
                type: "Chicken Drum sticks / 500 gm",
                price: 253,
                img: chickenLogo
            },
        ],
        minPrice: 125,
        maxPrice: 1150,
        description: [
            'The delicious and intense taste of Meat, rich in nutrients and has low fat.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "duck-Meat",
        name: "Duck Meat",
        images: [duckLogo],
        meatType: [
            // {
            //     type: "Live",
            //     price: 2000,
            //     img: ""
            // },
            {
                type: "Duck Meat",
                price: 1000,
                img: duckLogo
            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Per 100 grams, pure duck contains 23.5 grams of protein.',
            'Excellent source of selenium and zinc, which gives good cellular metabolism.',
            'Contains higher amounts of iron than other poultry.',
            'Niacin substances (Vitamin B3) helps to make a smooth human digestive. Every 100 mg of duck Meat contains 5.1 mg of niacin.',
            'Contains Vitamin B6 which helps in the metabolic system of the gastrointestinal tract.',
            'Duck Meat can prevent anemia as it contains iron.',
            'Healthy for your body which is full of nutrition.'
        ],
        additionalInformation: {
            weight: "1kg",
        }
    },
    {
        id: "rabbit-meat",
        name: "Rabbit Meat",
        images: [rabbitLogo, rabbit1, rabbit2],
        meatType: [
            {
                type: "Rabbit / Kg",
                price: 1500,
                img: rabbitLogo
            },
            {
                type: "Rabbit / PC",
                price: 1000,
                img: rabbitLogo
            }
        ],
        minPrice: 1000,
        maxPrice: 1500,
        description: [
            'One of the best white Meats available on the market today.',
            'Has a high percentage of easily digestible protein.',
            'Contains the least amount of fat among all the other available Meats.',
            'Cholesterol free Meat.',
            'Has a strong delicious flavor that almost resembles Chicken flavor.',
            'One of the most productive domestic Livestock animals.',
            'Rabbits can produce 6 pounds of Meat on the same feed.'
        ],
        additionalInformation: {
            weight: "1kg",
            meatType: "Live, Meat"
        }
    },
    {
        id: "camel-meat",
        name: "Camel Meat",
        images: [camelLogo],
        meatType: [
            {
                type: "Prime Boneless (Cube zero fat)",
                price: 2000,
                img: camelLogo
            },
            {
                type: "Prime Boneless",
                price: 1000,
                img: camelLogo

            },
            {
                type: "BoneLess (Mix Boti)",
                price: 2000,
                img: camelLogo

            },
            {
                type: "Mince (Keema)",
                price: 1000,
                img: camelLogo

            },
            {
                type: "Pasanday",
                price: 2000,
                img: camelLogo

            },
            {
                type: "Nehari Cut Boneless",
                price: 1000,
                img: camelLogo

            },
            {
                type: "Nehar Cut With Boneless",
                price: 2000,
                img: camelLogo

            },
            {
                type: "Camel Paya",
                price: 1000,
                img: camelLogo

            }
        ],
        minPrice: 100,
        maxPrice: 500,
        description: [
            'Camel Meat has a high proportion of Poly-unsaturated fatty acids.',
            'Provide great health benefits.',
            'Different from other red Meats.',
            'Contains high protein content, iron, zinc, vitamin A and B, and amino acid which is very good to repair body tissues and build new tissues.',
            'Camel Meat is receiving worldwide interest because of its unique taste and healthy features.',
            'Has other medical advantages in our body as it protects your body from various dangerous diseases.',
            'Very beneficial for our healthy body.'
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Prime Boneless (Cube zero fat), Prime Boneless, Boneless (Mix Boti), With Bone (Mix Boti), Mince (Keema), Pasanday, Nehari Cut Boneless, Nehar Cut With Bone (Nalli), Undercut, Camel Paya"
        }
    },
    {
        id: "mutton-meat",
        name: "Mutton meat",
        images: [muttonLogo],
        meatType: [
            {
                type: "Mutton Chops",
                price: 1850,
                img: muttonLogo
            },
            {
                type: "Mutton Mince (Keema)",
                price: 1900,
                img: muttonLogo

            },
            {
                type: "Mutton Raan",
                price: 1950,
                img: muttonLogo

            },
            {
                type: "Mutton Dasti",
                price: 1950,
                img: muttonLogo

            },
            {
                type: "Mutton Mix Boti",
                price: 1750,
                img: muttonLogo

            },
            {
                type: "Mutton Back Chop",
                price: 1500,
                img: muttonLogo

            },
            {
                type: "Mutton Boneless",
                price: 2100,
                img: muttonLogo

            },
            {
                type: "Mutton Paya / PC",
                price: 250,
                img: muttonLogo

            },
            {
                type: "Mutton Gurda / PC",
                price: 200,
                img: muttonLogo

            },
            {
                type: "Mutton Liver",
                price: 400,
                img: muttonLogo

            },
            {
                type: "Mutton Green Offel",
                price: 850,
                img: muttonLogo

            }
        ],
        minPrice: 200,
        maxPrice: 2100,
        description: [
            'Mutton recommended by a dietitian, as the best choice for red Meat lovers.',
            'Improves brain function.',
            'Boosts the immune function.',
            'Prevent diabetes.',
            'Contains healthy fats.',
            'Good for your muscles.',
            'Good for the Skin, Hair, Teeth, and Eyes.   '
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Mutton Chops, Mutton Mince (keema), Mutton Raan, Mutton Dasti, Mutton Mix Boti, Mutton Back Chop, Mutton Boneless, Mutton Paya"
        }
    },
    {
        id: "sheep-lamb-meat",
        name: "Sheep/Lamb meat",
        images: [sheepLogo],
        meatType: [
            {
                type: "Sheep Chops",
                price: 1600,
                img: sheepLogo
            },
            {
                type: "Sheep Mice (Keema)",
                price: 1850,
                img: sheepLogo
            },
            {
                type: "Sheep Raan",
                price: 1800,
                img: sheepLogo
            },
            {
                type: "Sheep Dasti",
                price: 1750,
                img: sheepLogo
            },
            {
                type: "Sheep Mix Boti",
                price: 1500,
                img: sheepLogo
            },
            {
                type: "Sheep Back Chop",
                price: 1470,
                img: sheepLogo
            },
            {
                type: "Sheep Chakki (Tail Fat)",
                price: 2100,
                img: sheepLogo
            },
            {
                type: "Sheep Paya/PC",
                price: 250,
                img: sheepLogo
            },
            {
                type: "Sheep Gurda/PC",
                price: 200,
                img: sheepLogo
            },
            {
                type: "Sheep Liver",
                price: 400,
                img: sheepLogo
            },
            {
                type: "Sheep Green Offel",
                price: 850,
                img: sheepLogo
            },
        ],
        minPrice: 200,
        maxPrice: 2100,
        description: [
            'Lamb may have saturated fat, but choosing a lean cut means you get less of it. Look for tenderloin, loin chops, or legs.',
            'Lamb is a delicious and versatile red Meat. It’s common in Mediterranean. If you’re trying to watch your cholesterol levels, lamb can be safe to eat in moderation. That is, as long as you choose the right cut and prepare it in a healthy way.',
            'As a rich source of vitamins, minerals, and high-quality proteins, lamb can be an excellent component of a healthy diet.',
            'A 3.5-ounce (100-gram) serving of roasted lamb provides the following nutrients',
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Sheep Chops, Sheep Mince (keema), Sheep Raan, Sheep Dasti, Sheep Mix Boti, Sheep Back Chop, Sheep Chakki (Tail Fat)"
        }
    },
    {
        id: "beef-meat",
        name: "Beef meat",
        images: [beefLogo, beef1, beef2, beef3, beef4],
        meatType: [
            {
                type: "Undercut",
                price: 2400,
                img: beefLogo
            },
            {
                type: "Prime Boneless (Cube zero fat)",
                price: 2000,
                img: beefLogo
            },
            {
                type: "Prime Boneless",
                price: 1300,
                img: beefLogo
            },
            {
                type: "Prime With Bone (Mix Boti)",
                price: 1100,
                img: beefLogo
            },
            {
                type: "Mince (Keema)",
                price: 1350,
                img: beefLogo
            },
            {
                type: "Pasanday",
                price: 1500,
                img: beefLogo
            },
            {
                type: "Nehari Cut Boneless",
                price: 1400,
                img: beefLogo
            },
            {
                type: "Nehari Cut With Bone",
                price: 1100,
                img: beefLogo
            },
            {
                type: "Beef Nalli",
                price: 650,
                img: beefLogo
            },
            {
                type: "Beef Soup bones",
                price: 370,
                img: beefLogo
            },
            {
                type: "Beef Liver",
                price: 400,
                img: beefLogo
            },
            {
                type: "Paya / Pc",
                price: 350,
                img: beefLogo
            },
        ],
        minPrice: 350,
        maxPrice: 2400,
        description: [
            'Fresh and hygienic Cow Meat',
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Undercut, Prime Boneless (Cube zero fat), Prime Boneless, Boneless (Mix Boti), Prime With Bone (Mix Boti), Mince (Keema), Pasanday, Nehari Cut Boneless, Nehar Cut With Bone (Nalli), Beef Nalli, Beef Soup Bones, Cow Paya"
        }
    },
    {
        id: "veal-meat",
        name: "Veal meat",
        images: [vealLogo, beef2, beef3, beef4],
        meatType: [
            {
                type: "Undercut",
                price: 1850,
                img: vealLogo
            },
            {
                type: "Prime Boneless (Cube zero fat)",
                price: 1450,
                img: vealLogo
            },
            {
                type: "Prime Boneless",
                price: 1200,
                img: vealLogo
            },
            {
                type: "Prime With Bone (Mix Boti)",
                price: 1050,
                img: vealLogo
            },
            {
                type: "Mince (Keema)",
                price: 1030,
                img: vealLogo
            },
            {
                type: "Pasanday",
                price: 1450,
                img: vealLogo
            },
            {
                type: "Nehari Cut Boneless",
                price: 1150,
                img: vealLogo
            },
            {
                type: "Nehari Cut With Bone",
                price: 1000,
                img: vealLogo
            },
            {
                type: "Veal Nalli",
                price: 520,
                img: vealLogo
            },
            {
                type: "Veal Soup bones",
                price: 420,
                img: vealLogo
            },
            {
                type: "Veal Liver",
                price: 400,
                img: vealLogo
            },
            {
                type: "Paya / Pc",
                price: 650,
                img: vealLogo
            },
        ],
        minPrice: 400,
        maxPrice: 1850,
        description: [
            'Fresh and hygienic Veal Meat',
        ],
        additionalInformation: {
            weight: "1kg",
            MeatType: "Undercut, Prime Boneless (Cube zero fat), Prime Boneless, Boneless (Mix Boti), Prime With Bone (Mix Boti), Mince (Keema), Pasanday, Nehari Cut Boneless, Nehar Cut With Bone (Nalli), Beef Nalli, Beef Soup Bones, Cow Paya"
        }
    }
]

export {
    allProducts
}