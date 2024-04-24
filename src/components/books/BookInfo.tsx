export type BookData = {
    title: string;
    author: string;
    desc: string;
    rating: number;
};

export const BookInfo = [
    {
        title: 'Six of Crows',
        author: 'Leigh Bardugo',
        desc: 'Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone',
        rating: 4.49
    },
    {
        title: 'Throne of Glass',
        author: 'Sarah J Maas',
        desc: 'In a land without magic, where the king rules with an iron hand, an assassin is summoned to the castle. She comes not to kill the king, but to win her freedom. If she defeats twenty-three killers, thieves, and warriors in a competition, she is released from prison to serve as the king\'s champion.',
        rating: 4.18 
    },
    {
        title: 'The City of Brass',
        author: 'S.A. Chakraborty',
        desc: 'On the streets of eighteenth-century Cairo, Nahri is a con woman of unsurpassed skill. She makes her living swindling Ottoman nobles, hoping to one day earn enough to change her fortunes. But when Nahri accidentally summons Dara, an equally sly, darkly mysterious djinn warrior, during one of her cons, she learns that even the cleverest of schemes can have deadly consequences.',
        rating: 4.15
    },
    {
        title: 'An Ember in the Ashes',
        author: 'Sabaa Tahir',
        desc: 'Under the Martial Empire, defiance is met with death. Those who do not vow their blood and bodies to the Emperor risk the execution of their loved ones and the destruction of all they hold dear. When Laia’s brother is arrested for treason, Laia is forced to make a decision. In exchange for help from rebels who promise to rescue her brother, she will risk her life to spy for them from within the Empire’s greatest military academy',
        rating: 4.25
    },
] as BookData[];
export default BookInfo