import { createStore } from '@stencil/store';

const { state } = createStore({
  visible: true,

  currenRoomId: null,

  messages: [
    {
      id: 1,
      content:
        'Mathematics is often erroneously referred to as the science of common sense. Actually, it may transcend common sense and go beyond either imagination or intuition. It has become a very strange and perhaps frightening subject from the ordinary point of view, but anyone who penetrates into it will find a veritable fairyland, a fairyland which is strange, but makes sense, if not common sense.',
      sender: 'b.q.huy@azoom.jp',
    },
    {
      id: 2,
      content:
        'The New Dealers, labor politicians and Socialists have tried to take advantage of the natural American instinct for charity to forward their plans to socialize the furnishing of the necessities of life to all. If the Government gives free medical care to everybody, why not free food, clothing and housing?',
      sender: 'b.q.huy@azoom.jp',
    },
    {
      id: 3,
      content: 'Nothing is more desirable than to be released from an affliction, but nothing is more frightening than to be divested of a crutch.',
      sender: 'b.q.huy@azoom.jp',
    },
    { id: 4, content: 'Often the real test of courage is not to die, but to live.', sender: 'b.q.huy@azoom.jp' },
    {
      id: 5,
      content: 'When at length we tire of putting people down, this self-inflicted fatigue can give way to the invigorating calisthenics of lifting people up.',
      sender: 'b.q.huy@azoom.jp',
    },
    { id: 6, content: 'When you were a tadpole and I was a fish In the Paleozoic time.', sender: 'b.q.huy@azoom.jp' },
    { id: 7, content: 'Beauty is excrescence, superabundance, random ebullience, and sheer delightful waste to be enjoyed in its own right.', sender: 'b.q.huy@azoom.jp' },
    {
      id: 8,
      content:
        "After marriage, a woman's sight becomes so keen that she can see right through her husband without looking at him, and a man's so dull that he can look right through his wife without seeing her.",
      sender: 'b.q.huy@azoom.jp',
    },
    { id: 9, content: 'There is always one moment in childhood when the door opens and lets the future in.', sender: 'b.q.huy@azoom.jp' },
    { id: 10, content: 'Hi there!', sender: 'b.q.huy@azoom.jp' },
    { id: 11, content: 'Hi there!', sender: 'b.q.huy@azoom.jp' },
    { id: 12, content: 'Hi there!', sender: 'b.q.huy@azoom.jp' },
  ],
});

export default state;
