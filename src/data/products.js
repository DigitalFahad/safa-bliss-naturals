
export const PRODUCTS = {
    hair: [
        {
            id: 'hair-revival-kit',
            name: 'Hair Revival Kit',
            price: '4,500',
            category: 'Kit',
            tagline: 'Complete 4-step system for regrowth.',
            image: 'https://placehold.co/600x600/0E6B3A/FFFFFF?text=Hair+Revival+Kit',
            description: 'Your hair doesn’t need more experiments. It needs a complete system. The Hair Revival Kit combines external care and internal nourishment to support stronger, healthier hair over time.',
            benefits: ['Stops hair fall', 'Promotes new growth', 'Nourishes scalp', 'Strengthens from within'],
            usage: 'Use shampoo twice a week. Apply oil overnight before wash. Use serum daily on scalp. Take superfood daily.'
        },
        {
            id: 'miracle-shampoo',
            name: 'Miracle Herbs Shampoo',
            price: '1,200',
            category: 'Hair',
            tagline: 'Sulphate-free gentle cleansing.',
            image: 'https://placehold.co/600x600/E8F5E9/0E6B3A?text=Shampoo',
            description: 'A gentle, sulphate-free cleanser that removes buildup without stripping natural oils.',
            benefits: ['Sulphate-free', 'Paraben-free', 'Adds shine'],
            usage: 'Massage into wet hair. Rinse thoroughly.'
        },
        {
            id: 'miracle-oil',
            name: 'Miracle Hair Oil',
            price: '1,500',
            category: 'Hair',
            tagline: 'Deep nourishment for scalp.',
            image: 'https://placehold.co/600x600/FFF8E1/F5B700?text=Hair+Oil',
            description: 'Infused with over 20 herbs to nourish the scalp and strengthen roots.',
            benefits: ['Reduces dandruff', 'Conditions hair', 'Prevents breakage'],
            usage: 'Massage into scalp and leave for at least 2 hours or overnight.'
        },
        {
            id: 'growth-serum',
            name: 'Hair Growth Serum',
            price: '1,800',
            category: 'Hair',
            tagline: 'Targeted root activation.',
            image: 'https://placehold.co/600x600/EFEBE9/5D4037?text=Serum',
            description: 'A lightweight serum that targets hair follicles to stimulate growth.',
            benefits: ['Non-greasy', 'Activates roots', 'Increases density'],
            usage: 'Apply a few drops to the scalp daily. Do not rinse.'
        },
    ],
    skin: [
        {
            id: 'oats-moisturizer',
            name: 'Oats Calming Moisturizer',
            price: '950',
            category: 'Skin',
            tagline: 'Soothing hydration for sensitive skin.',
            image: 'https://placehold.co/600x600/FFF8E1/F5B700?text=Moisturizer',
            description: 'Rich in colloidal oats to soothe irritated and dry skin.',
            benefits: ['Fragrance-free', 'Hypoallergenic', 'Deep hydration'],
            usage: 'Apply liberally to face and body as needed.'
        },
        {
            id: 'pain-relief-oil',
            name: 'Pain Relief Oil',
            price: '1,100',
            category: 'Body',
            tagline: 'Herbal relief for aches.',
            image: 'https://placehold.co/600x600/E8F5E9/0E6B3A?text=Pain+Relief',
            description: 'A warming blend of oils to relieve joint and muscle pain.',
            benefits: ['Fast acting', 'Warming sensation', 'Reduces inflammation'],
            usage: 'Massage into affected area.'
        },
    ],
    wellness: [
        {
            id: 'superfood',
            name: 'Hair Revival Superfood',
            price: '2,200',
            category: 'Wellness',
            tagline: 'Nutritional support from within.',
            image: 'https://placehold.co/600x600/EFEBE9/5D4037?text=Superfood',
            description: 'A blend of seeds, nuts, and herbs to support hair and nail health from the inside out.',
            benefits: ['Rich in Biotin', 'High in iron', 'Natural ingredients'],
            usage: 'Take one tablespoon daily with water or milk.'
        },
    ],
    // Helper to get all products in a flat list
    get all() {
        return [...this.hair, ...this.skin, ...this.wellness];
    }
};
