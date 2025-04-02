export const GAME_ITEMS = [
    // Buffs
    {
        id: 0,
        name: 'Blessing of Boldness',
        type: 'Buff',
        description: 'A divine blessing grants you temporary courage.',
        functionality: 'Advantage on next Charisma-based skill check or saving throw.',
        usage: 'Consumed on use.',
        icon: 'shield',
        color: '#22C55E', // Success color
    },
    {
        id: 1,
        name: 'Potion of Giant Strength (1 Hour)',
        type: 'Buff',
        description: 'This shimmering red liquid invigorates your muscles.',
        functionality: 'Increases Strength attribute score to 21 for 1 hour.',
        usage: 'Duration: 1 Hour. Consumed on use.',
        icon: 'chevrons-up',
        color: '#22C55E',
    },
    // Debuffs
    {
        id: 2,
        name: 'Minor Curse of Clumsiness',
        type: 'Debuff',
        description: 'An annoying hex makes you slightly fumble-fingered.',
        functionality: 'Disadvantage on next Dexterity-based skill check.',
        usage: 'Lasts until triggered.',
        icon: 'alert-triangle',
        color: '#EF4444', // Danger color
    },
    {
        id: 3,
        name: 'Intoxicated',
        type: 'Debuff',
        description: 'Too much ale has dulled your senses.',
        functionality: 'Disadvantage on Attack Rolls and Ability Checks.',
        usage: 'Duration: Until Long Rest (or DM discretion).',
        icon: 'coffee', // Or similar 'dazed' icon
        color: '#EF4444',
    },
    // Items
    {
        id: 4,
        name: 'Magic Flask',
        type: 'Artifact',
        description: 'A seemingly ordinary flask that magically refills with potent spirits.',
        functionality: 'Can produce a strong alcoholic drink 3 times per day. Resets at dawn.',
        usage: 'Charges: 3/3 per day.',
        icon: 'package',
        color: '#3B82F6', // Info color
    },
    {
        id: 5,
        name: 'Scroll of Fireball',
        type: 'Artifact',
        description: 'A scroll inscribed with explosive arcane runes.',
        functionality: 'Allows casting the Fireball spell once (DC 15). Requires reading the scroll (Action).',
        usage: 'Consumed on use.',
        icon: 'book-open',
        color: '#3B82F6',
    },
    {
        id: 6,
        name: '+1 Greataxe',
        type: 'Artifact',
        description: 'A heavy, well-balanced greataxe that hums with faint magic.',
        functionality: '+1 bonus to Attack and Damage Rolls made with this weapon.',
        usage: 'Equipment.',
        icon: 'triangle', // Placeholder icon for weapon
        color: '#3B82F6',
    },
    {
        id: 7,
        name: '50 ft. Hempen Rope',
        type: 'Artifact',
        description: 'A standard length of sturdy rope.',
        functionality: 'Useful for climbing, binding, or other creative applications.',
        usage: 'Standard gear.',
        icon: 'anchor', // Placeholder icon
        color: '#3B82F6',
    },
];

export const getItemById = (id) => GAME_ITEMS.find(item => item.id == id);