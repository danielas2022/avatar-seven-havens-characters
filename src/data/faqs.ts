export interface FAQItem {
  question: string;
  answer: string;
  category: 'Characters' | 'Plot & Lore' | 'Cast & Production' | 'Release & Streaming';
}

export const FAQS: FAQItem[] = [
  {
    category: 'Characters',
    question: 'Who is the new Avatar in Avatar: Seven Havens?',
    answer: 'The new series introduces two Avatars: Pavi, a nine-year-old earthbender voiced by Saheli Khan, and her long-lost identical twin sister Nisha, voiced by Aishu Devan. This marks the first time in the 10,000-year Avatar franchise history that the Avatar mantle is shared between twin Avatars.'
  },
  {
    category: 'Characters',
    question: 'Why are there two Avatars in Seven Havens?',
    answer: 'In the aftermath of the global "Cataclysm" that ruptured the physical and spirit worlds 225 years after The Legend of Korra, the reincarnation cycle underwent a cosmic split. Twins Pavi and Nisha share the spiritual legacy of Raava, each manifesting distinct elemental proficiencies and a powerful psychic twin resonance.'
  },
  {
    category: 'Characters',
    question: 'Who are the main companions in Avatar: Seven Havens?',
    answer: 'Pavi and Nisha are accompanied by Jae (an airbender platoon leader from the Haven of Ellora voiced by Major Curda), Captain Karthik (an airbender commander voiced by Akshay Khanna), Daemin (a loyal waterbender voiced by Darren Barnet), Zi (a desert scout voiced by Dianne Doan), Agam (a haven elder voiced by Sakina Jaffrey), and twin cat-monkeys Geet and Ruhi (voiced by Dee Bradley Baker).'
  },
  {
    category: 'Cast & Production',
    question: 'Who voices Pavi and Nisha in Avatar: Seven Havens?',
    answer: 'Pavi is voiced by young actress Saheli Khan, while her twin sister Nisha is voiced by Aishu Devan. Creature voices for their animal companions Geet and Ruhi are performed by franchise veteran Dee Bradley Baker (the voice of Appa and Momo in ATLA).'
  },
  {
    category: 'Cast & Production',
    question: 'Who created Avatar: Seven Havens?',
    answer: 'Avatar: Seven Havens is created and executive produced by Michael Dante DiMartino and Bryan Konietzko, the original creators of Avatar: The Last Airbender and The Legend of Korra, produced through Avatar Studios for Paramount+.'
  },
  {
    category: 'Plot & Lore',
    question: 'When is Avatar: Seven Havens set in the Avatar timeline?',
    answer: 'The series is set approximately 225 years after the conclusion of The Legend of Korra, placing it in a post-cataclysmic era where the technological society of Republic City has fallen into ancient legend and humanity lives in seven fortified sanctuaries called the Seven Havens.'
  },
  {
    category: 'Plot & Lore',
    question: 'Why do people fear the Avatar in Seven Havens?',
    answer: 'In this era, humanity blames the Avatar for causing the catastrophic "Cataclysm" that destroyed the Four Nations two centuries prior. Instead of being celebrated as guardians of peace, the Avatar is feared as a mythical harbinger of planetary destruction and hunted by city councils and bounty envoys.'
  },
  {
    category: 'Release & Streaming',
    question: 'When did Avatar: Seven Havens premiere and where can I watch it?',
    answer: 'Avatar: Seven Havens officially premiered on Paramount+ on Friday, October 9, 2026, debuting with its first three episodes ("On the Horizon", "Into the Storm", "The Order"). The remaining episodes of Book 1 release on a weekly schedule.'
  },
  {
    category: 'Release & Streaming',
    question: 'How many episodes and seasons are planned for Avatar: Seven Havens?',
    answer: 'Book 1 consists of 13 episodes. Paramount+ and Avatar Studios have already announced renewals through Book 4, promising a complete multi-season saga for Pavi and Nisha.'
  }
];
