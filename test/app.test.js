const {
    expect,
} = require('chai');

const {
    data,
} = require('./../data');

const {
    processArray,
} = require('../src/functions');

const FILTERING_KEY = 'animals';

describe('Lightweight functions', () => {
    describe('Filter array by pattern', () => {
        it('Should be able to filter by "ry"', () => {
            expect(processArray(data, ['--filter=ry'], FILTERING_KEY)).to.deep.equal([
                {
                    name: 'Uzuzozne',
                    people: [{
                        animals: [{
                            name: 'John Dory',
                        }],
                        name: 'Lillie Abbott',
                    }],
                },
                {
                    name: 'Satanwi',
                    people: [{
                        animals: [{
                            name: 'Oryx',
                        }],
                        name: 'Anthony Bruno',
                    }],
                },
            ]);
        });
        it('Should throw error if no filtering key is specified', () => {
            try {
                processArray(data, ['--filter=ry']);
                throw new Error('Should fail');
            } catch (error) {
                expect(error.message).to.equal('No filtering key is defined');
            }
        });
        it('Should throw error if no pattern given for --filter=', () => {
            try {
                processArray(data, ['--filter=']);
                throw new Error('Should fail');
            } catch (error) {
                expect(error.message).to.equal('Argument --filter= is forbidden');
            }
        });
        it('Should throw error if bad argument', () => {
            try {
                processArray(data, ['helloworld']);
                throw new Error('Should fail');
            } catch (error) {
                expect(error.message).to.equal('Argument helloworld is forbidden');
            }
        });
    });

    describe('Count items', () => {
        it('Should be able to count items', () => {
            expect(processArray(data, ['--count'])).to.deep.equal([{
                name: 'Dillauti [5]',
                people: [{
                    animals: [{
                        name: 'Anoa',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Narwhal',
                    }, {
                        name: 'Badger',
                    }, {
                        name: 'Cobra',
                    }, {
                        name: 'Crow',
                    }],
                    name: 'Winifred Graham [6]',
                }, {
                    animals: [{
                        name: 'Barbet',
                    }, {
                        name: 'Rhea',
                    }, {
                        name: 'Snakes',
                    }, {
                        name: 'Antelope',
                    }, {
                        name: 'Echidna',
                    }, {
                        name: 'Crow',
                    }, {
                        name: 'Guinea Fowl',
                    }, {
                        name: 'Deer Mouse',
                    }],
                    name: 'Blanche Viciani [8]',
                }, {
                    animals: [{
                        name: 'Sand Dollar',
                    }, {
                        name: 'Buzzard',
                    }, {
                        name: 'Elephant',
                    }, {
                        name: 'Xenops',
                    }, {
                        name: 'Dormouse',
                    }, {
                        name: 'Anchovy',
                    }, {
                        name: 'Dinosaur',
                    }],
                    name: 'Philip Murray [7]',
                }, {
                    animals: [{
                        name: 'Kowari',
                    }, {
                        name: 'Caecilian',
                    }, {
                        name: 'Common Genet',
                    }, {
                        name: 'Chipmunk',
                    }, {
                        name: 'Aardwolf',
                    }, {
                        name: 'Przewalski\'s Horse',
                    }, {
                        name: 'Badger',
                    }, {
                        name: 'Sand Cat',
                    }, {
                        name: 'Linne\'s Two-toed Sloth',
                    }],
                    name: 'Bobby Ristori [9]',
                }, {
                    animals: [{
                        name: 'Manta Ray',
                    }, {
                        name: 'Nubian Ibex',
                    }, {
                        name: 'Warbler',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Mice',
                    }],
                    name: 'Louise Pinzauti [5]',
                }],
            },
            {
                name: 'Tohabdal [8]',
                people: [{
                    animals: [{
                        name: 'Zebra',
                    }, {
                        name: 'Ring-tailed Lemur',
                    }, {
                        name: 'Fly',
                    }, {
                        name: 'Blue Iguana',
                    }, {
                        name: 'Emu',
                    }, {
                        name: 'African Wild Ass',
                    }, {
                        name: 'Numbat',
                    }],
                    name: 'Effie Houghton [7]',
                }, {
                    animals: [{
                        name: 'Aldabra Tortoise',
                    }, {
                        name: 'Patagonian Toothfish',
                    }, {
                        name: 'Giant Panda',
                    }, {
                        name: 'Goat',
                    }, {
                        name: 'Quahog',
                    }, {
                        name: 'Collared Lemur',
                    }, {
                        name: 'Aldabra Tortoise',
                    }],
                    name: 'Essie Bennett [7]',
                }, {
                    animals: [{
                        name: 'Zebrashark',
                    }, {
                        name: 'Dogs',
                    }, {
                        name: 'Mouse',
                    }, {
                        name: 'Numbat',
                    }, {
                        name: 'African Wild Dog',
                    }],
                    name: 'Owen Bongini [5]',
                }, {
                    animals: [{
                        name: 'Gelada',
                    }, {
                        name: 'Rattlesnake',
                    }, {
                        name: 'Rabbit',
                    }, {
                        name: 'Aardvark',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Courser',
                    }, {
                        name: 'Woodpecker',
                    }],
                    name: 'Alexander Fleury [7]',
                }, {
                    animals: [{
                        name: 'Squirrel',
                    }, {
                        name: 'Falcon',
                    }, {
                        name: 'Cat',
                    }, {
                        name: 'Lobe Coral',
                    }, {
                        name: 'Camel',
                    }, {
                        name: 'Broadclub Cuttlefish',
                    }],
                    name: 'Curtis Fuchs [6]',
                }, {
                    animals: [{
                        name: 'Bush Dog',
                    }, {
                        name: 'Sea Urchin',
                    }, {
                        name: 'Gayal',
                    }, {
                        name: 'Tortoise',
                    }, {
                        name: 'Meerkat',
                    }, {
                        name: 'Lion',
                    }, {
                        name: 'Gecko',
                    }],
                    name: 'Maud Lorenzo [7]',
                }, {
                    animals: [{
                        name: 'Burro',
                    }, {
                        name: 'African Wild Dog',
                    }, {
                        name: 'Slender Snipe Eel',
                    }, {
                        name: 'Red Panda',
                    }, {
                        name: 'Baby Doll Sheep',
                    }, {
                        name: 'California Sea Lion',
                    }, {
                        name: 'Rabbits',
                    }],
                    name: 'Linnie Lamb [7]',
                }, {
                    animals: [{
                        name: 'Chameleons',
                    }, {
                        name: 'Bee-eater',
                    }, {
                        name: 'King Vulture',
                    }, {
                        name: 'Giant Isopod',
                    }, {
                        name: 'Sand Cat',
                    }],
                    name: 'Randall Benoît [5]',
                }],
            },
            {
                name: 'Uzuzozne [7]',
                people: [{
                    animals: [{
                        name: 'Bearded Dragon',
                    }, {
                        name: 'Chicken',
                    }, {
                        name: 'Sand Cat',
                    }, {
                        name: 'Hedgehog',
                    }, {
                        name: 'Collared Lemur',
                    }, {
                        name: 'Frogmouth',
                    }, {
                        name: 'Raccoon dog',
                    }, {
                        name: 'Shortfin Mako Shark',
                    }],
                    name: 'Harold Patton [8]',
                }, {
                    animals: [{
                        name: 'Bearded Dragon',
                    }, {
                        name: 'Peafowl',
                    }, {
                        name: 'Aardvark',
                    }, {
                        name: 'Cows',
                    }, {
                        name: 'Crane Fly',
                    }, {
                        name: 'Rock Hyrax',
                    }, {
                        name: 'Gerbils',
                    }, {
                        name: 'Brown Bear',
                    }],
                    name: 'Millie Lapini [8]',
                }, {
                    animals: [{
                        name: 'Rats',
                    }, {
                        name: 'Macaw',
                    }, {
                        name: 'Gazelle',
                    }, {
                        name: 'Gazelle',
                    }, {
                        name: 'Alpaca',
                    }, {
                        name: 'Snakes',
                    }, {
                        name: 'Yellowjacket',
                    }, {
                        name: 'Stickleback',
                    }],
                    name: 'Lillian Calamandrei [8]',
                }, {
                    animals: [{
                        name: 'Rabbit',
                    }, {
                        name: 'Cats',
                    }, {
                        name: 'Jaguarundi',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Caribbean Flamingo',
                    }, {
                        name: 'Oyster',
                    }, {
                        name: 'Agouti',
                    }],
                    name: 'Lina Allen [7]',
                }, {
                    animals: [{
                        name: 'Grasshopper',
                    }, {
                        name: 'Polar Bear',
                    }, {
                        name: 'Rabbit',
                    }, {
                        name: 'Loggerhead Turtle',
                    }, {
                        name: 'Rhinoceros',
                    }, {
                        name: 'African Wild Dog',
                    }, {
                        name: 'Jackal',
                    }, {
                        name: 'Zebu',
                    }],
                    name: 'Georgia Hooper [8]',
                }, {
                    animals: [{
                        name: 'John Dory',
                    }, {
                        name: 'Gayal',
                    }, {
                        name: 'Hawk',
                    }, {
                        name: 'Umbrella Squid',
                    }, {
                        name: 'Hyrax',
                    }, {
                        name: 'Henkel\'s Leaf-tailed Gecko',
                    }],
                    name: 'Lillie Abbott [6]',
                }, {
                    animals: [{
                        name: 'Mini Donkey',
                    }, {
                        name: 'Flatback Turtle',
                    }, {
                        name: 'Rabbit',
                    }, {
                        name: 'Zebra',
                    }, {
                        name: 'Rhea',
                    }, {
                        name: 'Leafy Seadragon',
                    }, {
                        name: 'Bat',
                    }, {
                        name: 'Caterpillar',
                    }],
                    name: 'Philip Davis [8]',
                }],
            },
            {
                name: 'Zuhackog [7]',
                people: [{
                    animals: [{
                        name: 'Silkworm',
                    }, {
                        name: 'Zebu',
                    }, {
                        name: 'King Vulture',
                    }, {
                        name: 'Zebrashark',
                    }, {
                        name: 'Ostrich',
                    }, {
                        name: 'Waxwing',
                    }],
                    name: 'Elva Baroni [6]',
                }, {
                    animals: [{
                        name: 'Dunnart',
                    }, {
                        name: 'Cotinga',
                    }, {
                        name: 'Carp',
                    }, {
                        name: 'Bat',
                    }, {
                        name: 'Olive Sea Snake',
                    }, {
                        name: 'Caterpillar',
                    }, {
                        name: 'Jackal',
                    }],
                    name: 'Johnny Graziani [7]',
                }, {
                    animals: [{
                        name: 'Death Adder',
                    }, {
                        name: 'Pronghorn',
                    }, {
                        name: 'Carp',
                    }, {
                        name: 'Jaguar',
                    }, {
                        name: 'Anteater',
                    }, {
                        name: 'Zebu',
                    }, {
                        name: 'Red Ruffed Lemur',
                    }],
                    name: 'Herman Christensen [7]',
                }, {
                    animals: [{
                        name: 'Silkworm',
                    }, {
                        name: 'Horses',
                    }, {
                        name: 'Anaconda',
                    }, {
                        name: 'Guinea',
                    }, {
                        name: 'Bird',
                    }, {
                        name: 'Aardwolf',
                    }, {
                        name: 'Crane Fly',
                    }, {
                        name: 'Caterpillar',
                    }],
                    name: 'Fannie Ancillotti [8]',
                }, {
                    animals: [{
                        name: 'Bustard',
                    }, {
                        name: 'Numbat',
                    }, {
                        name: 'Cat',
                    }, {
                        name: 'Gecko',
                    }, {
                        name: 'Northern Red Snapper',
                    }, {
                        name: 'Monkfish',
                    }, {
                        name: 'Birds',
                    }, {
                        name: 'Caterpillar',
                    }, {
                        name: 'Mule',
                    }],
                    name: 'Lawrence Camiciottoli [9]',
                }, {
                    animals: [{
                        name: 'Tortoise',
                    }, {
                        name: 'Mule',
                    }, {
                        name: 'Hedgehog',
                    }, {
                        name: 'Geckos',
                    }, {
                        name: 'Sheep',
                    }, {
                        name: 'Emu',
                    }],
                    name: 'Marion Landi [6]',
                }, {
                    animals: [{
                        name: 'Boa',
                    }, {
                        name: 'Death Adder',
                    }, {
                        name: 'Okapi',
                    }, {
                        name: 'Fly',
                    }, {
                        name: 'Horses',
                    }],
                    name: 'Lou de Bruin [5]',
                }],
            },
            {
                name: 'Satanwi [5]',
                people: [{
                    animals: [{
                        name: 'Weasel',
                    }, {
                        name: 'Birds',
                    }, {
                        name: 'Snakes',
                    }, {
                        name: 'Anteater',
                    }, {
                        name: 'Groundhog',
                    }, {
                        name: 'Ant',
                    }, {
                        name: 'Courser',
                    }],
                    name: 'Elmer Kinoshita [7]',
                }, {
                    animals: [{
                        name: 'Rhea',
                    }, {
                        name: 'Sponge',
                    }, {
                        name: 'Cat',
                    }, {
                        name: 'African Wild Dog',
                    }, {
                        name: 'Snakes',
                    }, {
                        name: 'Starling',
                    }, {
                        name: 'Pronghorn',
                    }],
                    name: 'Cora Howell [7]',
                }, {
                    animals: [{
                        name: 'Bird',
                    }, {
                        name: 'Colugo',
                    }, {
                        name: 'Grison',
                    }, {
                        name: 'Pot Bellied Pig',
                    }, {
                        name: 'Asian Elephant',
                    }],
                    name: 'Ernest Conte [5]',
                }, {
                    animals: [{
                        name: 'Grouse',
                    }, {
                        name: 'Hapuka',
                    }, {
                        name: 'Cheetah',
                    }, {
                        name: 'Donkey',
                    }, {
                        name: 'Turkey',
                    }, {
                        name: 'Carp',
                    }, {
                        name: 'Octopus',
                    }, {
                        name: 'Silkworm',
                    }, {
                        name: 'Bearded Dragon',
                    }],
                    name: 'Dennis Franci [9]',
                }, {
                    animals: [{
                        name: 'Caracal',
                    }, {
                        name: 'Anteater',
                    }, {
                        name: 'Kiwa Hirsuta',
                    }, {
                        name: 'Zooplankton',
                    }, {
                        name: 'Tarantula',
                    }, {
                        name: 'Oryx',
                    }],
                    name: 'Anthony Bruno [6]',
                }],
            },
            ]);
        });
        it('Should handle element with no name', () => {
            expect(processArray([{
                people: [{
                    animals: [{
                        name: 'Anoa',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Narwhal',
                    }, {
                        name: 'Badger',
                    }, {
                        name: 'Cobra',
                    }, {
                        name: 'Crow',
                    }],
                    name: 'Winifred Graham',
                }],
            }], ['--count'])).to.deep.equal([{
                name: ' [1]',
                people: [{
                    animals: [{
                        name: 'Anoa',
                    }, {
                        name: 'Duck',
                    }, {
                        name: 'Narwhal',
                    }, {
                        name: 'Badger',
                    }, {
                        name: 'Cobra',
                    }, {
                        name: 'Crow',
                    }],
                    name: 'Winifred Graham [6]',
                }],
            }]);
        });
    });

    describe('Filter and count items', () => {
        it('Should be able to filter and count items', () => {
            expect(processArray(data, ['--count', '--filter=ry'], FILTERING_KEY)).to.deep.equal([
                {
                    name: 'Uzuzozne [1]',
                    people: [
                        {
                            animals: [
                                {
                                    name: 'John Dory',
                                },
                            ],
                            name: 'Lillie Abbott [1]',
                        },
                    ],
                },
                {
                    name: 'Satanwi [1]',
                    people: [
                        {
                            animals: [
                                {
                                    name: 'Oryx',
                                },
                            ],
                            name: 'Anthony Bruno [1]',
                        },
                    ],
                },
            ]);
        });
    });
});
