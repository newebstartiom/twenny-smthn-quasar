import helper from "wiom-utility-library";

export const company = {
  name: "Twenny Smthn",
  link: {
    full: "https://twennysmthn.co.uk",
    copyWave: "https://copywave.co.uk",
    hostName: "twennysmthn",
  },
  address: "",
  email: "hello@twennysmthn.co.uk",
  phone: "",
  contacts: [],
  socials: [],
  currency: "£",
  storageUrl: "https://webstartiom.blob.core.windows.net",
};

company.socials = [
  {
    name: "@twennysmthn",
    key: "instagram",
    src: {
      icon: helper.setFileUrl(
        company.storageUrl,
        "/webstartiom/icon/base/instagram.svg"
      ),
      href: "https://www.instagram.com/twennysmthn/",
    },
    component: {
      svg: {
        footer: {
          fill: "#3D3D3D",
          size: 20,
        },
        size: 30,
      },
    },
  },
  {
    name: "@twennysmthn",
    key: "tiktok",
    src: {
      icon: helper.setFileUrl(
        company.storageUrl,
        "/webstartiom/icon/base/tiktok.svg"
      ),
      href: "https://www.tiktok.com/@twennysmthn",
    },
    component: {
      svg: {
        header: {
          fill: "#FFF",
        },
        footer: {
          fill: "#3D3D3D",
          size: 20,
        },
        size: 30,
      },
    },
  },
  {
    name: company.email,
    key: "mail",
    src: {
      icon: helper.setFileUrl(
        company.storageUrl,
        "/webstartiom/icon/base/mail.svg"
      ),
      href: `mailto:${company.email}`,
    },
    component: {
      svg: {
        header: {
          stroke: "#FFF",
        },
        footer: {
          stroke: "#3D3D3D",
          size: 20,
        },
        size: 30,
      },
    },
  },
];

export const webNum = {
  header: {
    total: 180,
    detail: {
      social: 80,
      header: 100,
    },
  },
  maxWidth: 1750,
  page: {
    maxHeight: 820,
  },
};

export const blogs = [
  {
    id: "",
    blog_type_id: 1,
    src: {
      thumbnail: helper.setFileUrl(
        "st-ac",
        "/hannah-clayton/images/thumbnail/th-4.png"
      ),
    },
    title: "Happy Alone: 10 ways to Fall in Love with your Own Company",
    tag: ["Informational", "Experiential"],
    target_audience: [
      "Young adults",
      "20 somethings",
      "people interested personal development",
    ],
    meta: {
      keyword: ["Happy Alone", "How to be happy alone"],
      description:
        "Discover the joy of solitude and how to be happy alone. I’m sharing practical tips and heartfelt advice to embrace being alone, find inner peace, and truly enjoy your own company.",
    },
    created_date: "2024-10-15",
    created_by: "Hannah",
    role: "Founder of Twenny Smthn",
    contents: [
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "Introduction",
      },
      "Do you ever feel a wave of loneliness and unease wash over you? You know the moments I mean— when that dull, gnawing, tummy-twisting throb creeps in and settles for a while - until you can eventually shake it off by distracting yourself with something else.",
      [
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Caw blimey",
        },
        ", could you tell that was written from experience? Cos’ boy, do I get lost in my thoughts. I over analyse situations. Sink into pits of sadness, seas of melancholy.",
      ],
      "I reminisce of old times and wonder where that time’s gone. Every now and then I lie awake at night replaying embarrassing moments from years ago. Times I’ve let myself down. I fret about what others think of me and second-guess every single interaction (“Why did I say that?!”).",
      "And I stress about future plans; if I'll ever reach my goals. I worry about making the right decisions and fear missing out on opportunities. Then, of course, there’s the existential dread that creeps in during those rare moments of stillness, questioning the meaning of it all.",
      [
        "To put it plainly: I go through stages where I find my own head an unbearable, inhospitable place to be. I can’t walk to the shops without having my Airpods in. Or have a shower without my phone turned upside-down in the sink, blaring out a podcast just loud enough to hear above the sound of water cascading from the shower head. I find it impossible to fall asleep without having my comfort TV show humming in the background (",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Friends",
        },
        " is my go-to).",
      ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-1.png"
            ),
          },
        },
      },
      "All because, every now and then, I experience flickering moments of terror at the thought of facing my own mind in silence. And the easiest way to cope is to seek instant, gratifying distractions to avoid confronting my inner world.",
      [
        "But while I always thought that too much isolation had a negative impact on mental health, I’ve come to realise that ",
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "spending time alone can be a pretty liberating experience",
        },
      ],
      "See, we’ve always stigmatised loneliness. But instead we should have space for it in our lives, recognising 1) how universal it is, 2) how much it can teach us and 3) how it can help us cultivate a richer sense of self.",
      "Because actually, our happiness and comfort with solitude can also enhance the quality of our relationships, both with ourselves and with others.",
      "If you enjoy your own company, you're likely to have higher self-esteem, feel more capable and in control, and view yourself more positively. This self-assurance can lead to forming healthier, more loving relationships that are built on boundary-setting and mutual respect.",
      "And while all that might sound easier said than done, it's a skill that can be developed over time.",
      "So to get you started, I've compiled a list of 10 tips that I hope will help you reclaim your alone time and discover why falling in love with your own company is one of the most radical acts of self love and growth we can do.",
      "After all, we were born alone. We’ll die alone. So we could do with figuring this little thing out, couldn’t we? First, though:",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "Why don’t you like spending time on your own?",
      },
      {
        type: "table",
        value: {
          body: [
            {
              v1: "Boredom & unproductiveness",
              v2: "We often equate being alone with being bored or unproductive thanks to being in a society that glorifies busyness, so the idea of doing nothing can feel uncomfortable and even embarrazzzzzing.",
            },
            {
              v1: "Fear of loneliness",
              v2: "Loneliness has been stigmatised as a negative state to be avoided at all costs. This fear can prevent us from embracing solitude and the personal growth it offers.",
            },
            {
              v1: "Distraction addiction",
              v2: "Our lives are filled with constant stimulation from tech and social media. This makes it hard to disconnect and spend time alone without feeling the urge to reach for our phones or other distractions. Come on, can you have a wee without scrolling TikTok?",
            },
            {
              v1: "Lack of self-awareness",
              v2: "Spending time alone forces us to confront our deepest and darkest thoughts and feelings. This can be uncomfortable, especially if you’re not used to using introspection to gain deeper self-awareness.",
            },
            {
              v1: "Insecurity",
              v2: "When we rely on others for validation and self-worth, being alone can make us feel insecure, unsure of ourselves, and isolated.",
            },
            {
              v1: "Cultural and social pressures",
              v2: "Society views socialising as a sign of success and happiness. The pressure to maintain a busy social life can make alone time seem undesirable.",
            },
            {
              v1: "FOMO",
              v2: [
                "Social media amplifies our fear of missing out by making us believe that everyone else is having the best fkn time in the world, bro - without us. This fear of missing out has two aspects: perception and compulsion. We often exaggerate the enjoyment others are experiencing without us, leading to a compulsion to never miss out.",
                "We constantly compare our lives to the highlight reels of others, which makes us question our own social engagement and the depth of our relationships.",
              ],
            },
          ],
        },
      },
      "Understanding these reasons can help us totally reframe our perspective on alone time and even recognise its value. Remember: embracing solitude isn’t about ditching your social life. It’s about finding that sweet spot between burning your social battery and charging it back up again.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-2.png"
            ),
          },
          component: {
            maxWidth: "455",
          },
        },
      },
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "10 ways to fall back in love with your own company.",
      },
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "1. Reframe how you view being alone",
      },
      "Instead of seeing alone time as a sign that you're unpopular or spiralling into a pit of anxiety, try to cast it in a more positive light. See it as a bright opportunity to recharge and reconnect with yourself by doing the things that you love.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "2. Avoid the comparison bug",
      },
      [
        "Easier said than done in this day and age, but try to avoid unfavourably comparing your social life to anyone else’s. It's not about the number of friends you have or how often you go out; it's about what works for you. Remember, you have no way of knowing if someone with a packed social calendar and a sun-size circle of friends is ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "genuinely",
        },
        " happy. And what’s it to you anyway? Stay in your lane and you’ll get to your destination quicker.",
      ],
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              // href: 'https://docs.google.com/document/d/1-fZIG1cPerC-v5C2JenTiTpz1OqZlWlRSO2GErUIgDo/edit'
            },
            text: "Quarter Life Crisis",
          },
        },
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "3. Have a social media detox",
      },
      "These days we're busier than ever. Combine that with a constant barrage of social media, and it  can feel really hard to appreciate being on our own due to an amplification of FOMO.",
      "It’s healthy and realistic to remember that social media is a rose-tinted lens that shows you only the shiny, happy times of people’s lives. This can make you feel like you’re the only one feeling lonely, when it’s not the case.",
      "So if scrolling through your feeds makes you feel left out and stressed, take a step back and remember that your feed is never telling the whole story.",
      "For me, a few days' break from my socials every couple of months is a great way to reconnect with myself and reality.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "4. Immerse yourself in nature",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-3.png"
            ),
          },
        },
      },
      "The hills are alive, with happiness-boosting qualities. So get. TF. Outside. Now.",
      "Nature is so rejuvenating because  it’s the one constant source of peace we can always come back to.",
      "Have your morning coffee in the garden. Take a walk in the park. Go to the beach and let your feet sink into the sand. Absorb the sights, sounds, and smells outside your house. Feel the breeze on your face.",
      [
        "Just ",
        {
          type: "button",
          value: {
            src: {
              href: "https://www.sciencealert.com/just-30-minutes-of-nature-a-week-reduces-the-chance-of-depression-and-heart-disease",
            },
            text: "30 minutes or more a week spent in nature",
          },
        },
        " can improve symptoms of depression and lower blood pressure.",
      ],
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              href: "https://www.intelligentchange.com/blogs/read/toward-the-sun-harnessing-nature-s-nurturing-powers?utm_source=Klaviyo&utm_medium=email_campaign&utm_campaign=%5BNEWSLETTER%5D%20Intelligent%20Change%20Weekly%2007%2F29%20%2801J3R4GY3VW1FCTA91V0ZDWDHF%29&triplesource=klaviyo&_kx=5-k5KCh_cpM-iSHNuGEYqozYxZaqkMGLFVDLqQxLvkUez5gataQi5iw2JoE_Eybr.nFEe3R",
            },
            text: "How to Harness Nature’s Nurturing Qualities",
          },
        },
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "5. Carve out time for daydreaming",
      },
      [
        "Does the thought of doing absolutely nothing unsettle you? Maybe it’s because it's been a long time since you've allowed yourself to just ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "be",
        },
        ".",
      ],
      [
        "Set a timer for 5 minutes. Just ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "5",
        },
        ". 5 ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "little",
        },
        " minutes with no company, TV, music, internet, podcasts, or books. Find a comfortable place to sit or lie down. (You can get a bonus point for doing this outside!).",
      ],
      [
        "Now: Take a deep breath, and let your mind wander — ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "truly",
        },
        " wander — as far as you can allow. See where it takes you. And feel free at last.",
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "6. Get physical",
      },
      "Exercise helps release endorphins, the neurotransmitters that make you feel happier. It's like a natural high, a surge of positive energy that can turn your whole day around.",
      "Start small, gradually increasing your activity level. As you gain confidence, dive into weight training, aerobics, or team sports that make your heart race and your spirits soar. Remember, every step you take is in the right direction. And feeling the mental and physical benefits of implementing this habit into your daily routine is so worth the while, trust me.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-4.png"
            ),
          },
          component: {
            maxWidth: "455",
          },
        },
      },
      "If you can't afford a sports watch, don't worry. Create a habit tracker and find joy in ticking it off every day. Each tick is a small victory, a visual reminder of your commitment and progress.",
      [
        "Embrace the sweat, feel the burn, and let each workout be a powerful reminder of your strength and resilience. For me - exercise isn’t just about noticing a physical difference in my body. It's about reclaiming my mental peace, keeping disciplined promises to myself and proving to myself that I’m ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "that bitch",
        },
        ".",
      ],
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/d/15N7Yc-d8CXFqqAh4srYj3fCST6-oI_oA5kA6LJyFjA4/edit'
      //       },
      //       text: 'Building a habit tracker'
      //     }
      //   }
      // ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "7. Do things you enjoy",
      },
      "For me, it's cooking. At the moment, I have this crazy obsession with making ramen.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-5.png"
            ),
          },
          component: {
            maxWidth: "455",
          },
        },
      },
      [
        "Isn’t she ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "sexy",
        },
        "?",
      ],
      [
        "I find it therapeutic: carefully placing each ingredient in the simmering bowl of broth has this meditative quality. First I layer the noodles and add the protein as a base, then sprinkle with vibrant green veggies. And when my egg comes out all ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Goldilocks just right",
        },
        ", a sense of calm washes over me. I’ve even made homemade chilli oil to drizzle over the top. To me, creating a nourishing meal from scratch is artistry and holds a special place in my heart, just like writing and painting. It brings satisfaction and peace. I find ownership and pride in it. It reminds me that even in the simplest of acts, we can find moments of mindfulness and joy.",
      ],
      "That’s what you need to do. Find that energy. Treat your alone time and the things you love doing as a spiritual ritual. Reserve time outside of the working day just for you as a non-negotiable. Fill your cup with activities that aren’t passive (nope, doing a weekly shop or cleaning the house doesn’t count). Spend time with yourself the way you would with a friend or a partner. Ensure that everything you do is something you genuinely enjoy. Engage in activities that enrich your soul and make you feel alive.",
      [
        "And soon, you’ll become ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "addicted",
        },
        " to your own company.",
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "8. Do stuff on your own",
      },
      "Even if nobody will come with you.",
      {
        type: "no-gap",
        value: ["The cinema.", "A restaurant.", "Shopping for clothes."],
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-6.png"
            ),
          },
        },
      },
      [
        "This can feel awkward at first, but it’ll get easier the more you do it. There’s immense power in this behaviour. You reclaim your independence. You’re the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "shit",
        },
        ". You create your own happiness. You don’t need ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "no-one",
        },
        ".",
      ],
      [
        "If you do feel a twinge of loneliness in these activities (it’s natural), simply grab hold of it and observe it. Treat it as a character in your mind: it won’t hurt you, it’s just there. You don’t have to respond or react. It’ll pass. Suppressing these feelings and emotions only makes them stronger and allows fear to dictate your actions. For example, a fear of loneliness might stop you from solo travelling. And letting fear restrict you from experiences that will make you happy? That’s a big mistake. ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Huge",
        },
        ".",
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "9. Make peace with the past",
      },
      "There may be reasons why you find it difficult to spend time alone. Maybe they’re rooted from childhood experiences and may require time and effort to heal. To begin, ask yourself: When did I first feel anxious about being alone? What happened? How did I feel? Am I carrying the weight of the past into my present? What can I do to heal and comfort my inner child?",
      "Our past experiences don't have to define our present. Trauma can be overcome by practising self-love and self-compassion. Talk to her. Tell her you love her. Be proud that you’re in a place she couldn’t have possibly imagined for you.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-7.png"
            ),
          },
        },
      },
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5",
        type: "h3",
        value: "10. Practise daily gratitude",
      },
      "Gratitude boosts happiness and hope. Devote some time to reflect on what you're grateful for. It doesn't have to be spectacular. It could be as simple as that first cup of coffee in the morning or a new song you heard on the radio on your commute into work that day. Make a list of things you appreciate. The next time you’re alone and feeling down, review this list to remind yourself of everything you have going for you.",
      "At the end of each day before going to sleep, I try to spend at least 20 minutes journaling. It’s super relaxing and helps me remember the small beautiful moments that happen all the time. Those moments that get lost in the rich tapestry of life.",
      {
        type: "no-gap",
        value: [
          "To sign off each entry, I use this formula to frame my thoughts and ensure I’m practising gratitude:",
          {
            type: "image",
            value: {
              src: {
                img: helper.setFileUrl(
                  "st-ac",
                  "/hannah-clayton/twenny-smthn/images/ha/tn-8.png"
                ),
              },
            },
          },
        ],
      },
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "The big ol’ benefits of alone time",
      },
      "Spending time alone gives you the gifts of introspection, independence, and creativity. (Now wouldn’t they have been better for the 3 wise men?). I know for me that creativity thrives in uninterrupted focus, allowing me to daydream and my imagination run wild. Journaling, painting… My most beautiful outputs are born from moments where I’ve given myself the most mental space. It’s freeing.",
      "Valuing your own company means not letting others define your experiences. When we rely too much on others for validation, we give them power over our emotions and our decision making. Tying our sense of self to others is a slippery slope. When they cancel on us, it’s gut wrenching. Instead, we should be happy that it means you can make time for the better option: a date with number 1 (that’s you!).",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-9.png"
            ),
          },
        },
      },
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       text: 'The Dangers of Co-Dependence'
      //     }
      //   }
      // ],
      [
        "Because our own company is ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "protective",
        },
        ". If we don’t practise being happy alone, we may stay in toxic relationships out of fear of loneliness. Because we’re not willing to let go having someone there.",
      ],
      "I've been there. Too afraid to leave because I feared being alone. Worried about how I’d fill all the empty time and space if that person was to leave my life. With nobody to distract me.",
      "The antidote is knowing you're never truly alone in your mind. There are billions of neurological passageways, this rich inner world of memories just accessible to you. Be curious and kind to yourself. Get lost in your own nostalgia. Make yourself laugh. Create new opportunities where you can learn. Practice valuing your own company as much as you value the company of others.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "Swap FOMO for JOMO.",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/ha/tn-10.png"
            ),
          },
          component: {
            maxWidth: "455",
          },
        },
      },
      [
        "That’s the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "joy",
        },
        " of missing out, sis.",
      ],
      [
        "That means focusing on what you gain by saying no to plans and switching off social media. Notice the peace it brings to set your own agenda and engage with others on your terms. Nobody should be expected to be on call to reply to messages 24/7. Not being constantly present won't make people forget about you. Instead, the time you spend with others will be ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "joy",
        },
        " time, as you're operating from a place of fullness within yourself.",
      ],
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              to: "/blog/detail/2",
              targetBlank: true,
            },
            text: "Grieving a Friendship Breakup For The First Time & How to Recover",
          },
        },
      ],
      {
        customClass: "dm-serif-display-regular text-h4",
        type: "h4",
        value: "Wrapping up",
      },
      "The relationship you have with yourself is your biggest investment: it’s the only one you have for your whole life. Ritualise your alone time so it’s something you look forward to. It’ll change your life.",
    ],
  },
  {
    id: "",
    blog_type_id: 1,
    src: {
      thumbnail: helper.setFileUrl(
        "st-ac",
        "/hannah-clayton/images/thumbnail/th-5.png"
      ),
    },
    title: "Grieving a Friendship Breakup For The First Time & How to Recover",
    tag: ["Informational", "Experiential"],
    target_audience: [
      "Young adults",
      "20 somethings",
      "people interested personal development",
    ],
    meta: {
      description:
        "Grieving a Friendship Breakup for the First Time? Discover effective recovery tips and emotional healing strategies to help you cope and rebuild after losing a friend in your 20s.",
      keyword: [
        "Navigating a Friendship Breakup",
        "How to cope with friendship breakup",
        "coping with friendship breakup",
        "overcoming friendship breakup",
        "coping with losing a friend",
        "dealing with the loss of a friend",
        "drifting apart from a friend",
        "friendship in my twenties",
        "friends twenties",
        "social life 20s",
        "losing friends",
      ],
    },
    created_date: "2024-9-21",
    created_by: "Hannah",
    role: "Founder of Twenny Smthn",
    contents: [
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "1. Introduction",
      },
      "Navigating a friendship breakup in your twenties can feel like a rollercoaster ride of nostalgia, growth, and the big, bad wolf that is inevitable change. After all, friendships shape our lives and etch memories in our hearts, but the demands of life and personal growth can huff and puff and blow holes through even the closest of bonds. On my personal journey through my twenties (after buckets of reflection!) I’m coming to terms with the inescapable evolution of friendships, the heartache of drifting apart, and the beauty of forming deep, intentional connections that can withstand even the strongest winds. So, of course, I’m sharing my thoughts with you.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "2. Budding Friendships",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-1.png"
            ),
          },
        },
      },
      "My early teenage years were spent with a lot of different people. Hurling ourselves into one another as we played Corners on the top deck of the bus into town. Sharing wired earbuds of a tattered iPod touch as we walked from our estate to the local Youth Club. Sleepovers filled with coca-cola and strawberry laces-fuelled Just Dance sessions. All before crashing out at a friend’s house in a pile of duvets, shoulders and legs intertwined, snuggled side by side in a comfortable, chaotic heap.",
      "The shift from 16 to 18 brought nights of cramming into crowded living rooms, each of us armed with a drink, sharing secrets and stories from school and whispers about which boys we wanted to snog that night.",
      "The next day we’d flood into the WhatsApp group chat with screenshots from text exchanges with said snogs, along with a running commentary (“How should I reply?!”). Friendship still held its intense and playful essence like the years before, but with more direction. Now it was centered around exciting weekend nights out and grand adventures with our newly-obtained driving licences - instead of merely passing the time.",
      "These were the years when our bonds deepened and became more meaningful. Seeing each other at school every day meant sharing every laugh, every secret, and every tear. We’d support each other through the stress of exams and the heartbreak of teenage romances.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "3. The Uni Years",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-2.png"
            ),
          },
        },
      },
      "Then came the uni years: Friendships were all the more profound, shaped by shared experiences of fresh independence and the challenges of adulthood. There were late-night study sessions fuelled by vending machine Red Bulls. Impromptu wine and cooking nights as housemates in one tiny, grimy kitchen. Hand-holding as we stumbled back to our house at 5am, our intimate whispers lost in the early morning mist. Juicy morning debriefs about the night before: all snuggled up and warm in one bed with sleepy eyes and laughter echoing from the walls. Deep conversations about our future dreams on living room couches at 2am, envisioning where life would take us after graduation.",
      "Consoling one another through breakups, family struggles, and personal heartaches, we became each other's shoulders to cry on. Late-night ice McFlurry runs, tearful conversations under the glow of fairy lights, and long, warm hugs during difficult moments brought us closer together. And proximity meant that, in those pivotal life-altering moments, we were the only family one another had, creating bonds that felt like home away from home.",
      "These wild years were marked by self-discovery as we supported each other through the highs and lows, and created memories that would define us for years to come.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "4. The inevitability of growing apart",
      },
      "Here’s a sad, but sincere, story. Since hitting my mid twenties, I’ve noticed a subtle but substantial shift in how I interact with friends. I don’t party like I used to; at 25 I really can’t hack the hangovers (pathetic, I know). Plus, I’m starting my own business so I need a lot of space and quiet time to think. I also have a long-term boyfriend which means my weekends are often filled with cosy nights in, cooking up a storm, and Harry Potter marathons. Yep, dancing-til-dawn nights out in town are firmly on the sub bench. They have their time and their place, but my priorities have shifted, and so has the way I spend my time.",
      "Friendship in my twenties comes in waves. Time with friends has become often brief and based around specific events: birthday dinners, lunches, parties, coffees between work.",
      "We’ll do something and then go home, separating our homes and social lives, until the next time we organise something in our busy calendars. Facetimes with people who don’t live close by have to be pencilled in weeks in advance.",
      "I love my friends more than anything, but being in my mid-twenties has given me time to start enjoying my own company.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              to: "/blog/detail/1",
              targetBlank: true,
            },
            text: "Happy Alone: 10 ways to Fall in Love with your Own Company",
          },
        },
      ],
      "But that’s not to say I don’t miss the sibling-like closeness that came so naturally in my younger years. My social battery has significantly dwindled in my twenties, and I worry it may never fully recharge.",
      "The question is: why does this happen?",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "5. Understanding the Changes",
      },
      [
        "Well, I hate to go all Wendy on you Peter Pan, but losing friends and experiencing shifts in relationships is ",
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "a normal part of growing up",
        },
        ". In our 20s, things are changing all the time, everything is in flux. Friends enter and exit our lives like actors on a stage. All the world’s a stage, right?",
      ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-3.png"
            ),
          },
          component: {
            maxWidth: "620",
          },
        },
      },
      {
        customClass: "text-c-blue font-weight-semibold",
        type: "span",
        value:
          "You won’t find many of my blogs without some sort of literary reference in there. My degree wasn’t for nothing.",
      },
      "As you develop and your values change, it's natural to outgrow people. And this is a good thing: it shows that you're moving forward. Let’s look more closely at the details:",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "1. Life Transitions",
      },
      "People don’t change. Life experiences change people. (Crikey, hang on to your oxygen tanks, folks, we’re diving into the deep now).",
      "Moving to a new city, starting a new job, entering into a serious relationship, pursuing further education.",
      "These transitions naturally shake up friendships like a house of straw in a gust of wind. (Alright, I think I’ve huffed and I’ve puffed these 3 Little Pigs refs to death).",
      "Why? Because they not only have less time to invest in existing relationships, but also find it challenging to maintain connections with friends who aren’t going through similar life changes. It’s a fatal combo. Like ice cream in hot soup.",
      "But oh good god it ain’t easy. It hurts like hell. Watching your friends replace you with other friends. Seeing Instagram stories of them happy with all these new people, far, far away. Seeing it all unfold in real-time on social media, right before your eyes. Liking posts with their new best friends through gritted teeth, feeling a pang of loneliness with every double-tap.",
      "All the while having less and less to talk about with them because of how increasingly drastic the difference between your lifestyles is becoming. The threads of your personality, once interwoven, slowly fray as you become different people.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-4.png"
            ),
          },
          component: {
            maxWidth: "811",
          },
        },
      },
      {
        customClass: "text-c-blue font-weight-semibold",
        type: "span",
        value: "Ain't that right, Viv.",
      },
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "2. Changing Priorities",
      },
      "Maturing in our twenties means we start to figure out what and who truly matters to us. Our priorities and interests shift seismically. The carefree days of our teenage years morph into a balancing act of ambitions and responsibilities.",
      "So what once bonded you with your pals – those late-night drives to catch the sunset, epic Playstation marathons, and endless volleyball games on the beach – might not hold the same magic anymore. Sure, the nostalgia of those shared experiences still tugs at our heartstrings, but adulting demands a re-evaluation of our priorities and the people we choose to spend time with.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "3. Personal Growth",
      },
      "People change and evolve over time, especially in their 20s when they're still figuring out who they are and what they want from life. The journey of self-discovery takes you on some unexpected twists and turns. You might wake up one day and realise that your values, beliefs, and goals have done a complete 180. And suddenly, your Friday nights of clubbing feel less appealing compared to a quiet evening cooking with a glass of wine in hand, cuddled up on the couch with a good book and a cup of tea, or falling asleep watching your favourite show on Netflix.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-5.png"
            ),
          },
          component: {
            maxWidth: "865",
          },
        },
      },
      "What comes with this evolution is a growth away from friends who aren’t on the same wavelength. And it’s not that you don’t care about them; or that they don’t care about you. Maybe their passion for spontaneous house parties and getting into bed at 5am doesn’t quite mesh with your newfound love for early Saturday morning yoga or a nice plantation walk with the dog before lunchtime on a Sunday. Sometimes, friends are meant for certain chapters of your life, and as you write your story, the characters might change. Some appear for fleeting chapters. Others will be with you until the very last page.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "4. Conflict or Misunderstandings",
      },
      "Like any relationship you have, friendships can fizzle out of disagreements and miscommunication.",
      "Maybe you had a falling out over differing political views or clashed about how to handle a sensitive situation. Maybe you argued about the best way to load the dishwasher, or whether pineapple belongs on pizza. Whatever the case, when issues go unresolved, keeping the friendship alive can feel like an uphill battle. And to add a cherry to this pile of cowshit cake, unlike the dramatic blowouts in romantic relationships, these friendships often fade away without a single heated argument or any closure, leaving you scratching your head and wondering where it all went wrong.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-6.png"
            ),
          },
          component: {
            maxWidth: "612",
          },
        },
      },
      "It’s slow and mundane. It happens without your knowledge. A small separation, peace by piece, an unintentional unlearning of the person until you realise you don’t recognise the sound of their voice anymore, or the way they laugh. There isn’t much left to say. And yet there is so much left to say.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "5. Limited Time and Energy",
      },
      "In our 20s, responsibilities like work, family, and other commitments start piling up. And in the blink of an eye, juggling a full-time job, maintaining relationships, and managing household chores leaves little time and energy for hanging out nonchalantly with your mates like you used to. The carefree days of spontaneous get-togethers are replaced with scheduled coffee dates squeezed between meetings.",
      "Not to mention, we’re also forming new connections, whether it’s colleagues we bond with over late-night project deadlines or getting to know the charming cousin of your serious partner who’s invited you out for coffee. These new relationships demand attention, further stretching our limited social battery. While it’s only a natural shift, it often means old friendships get less of our time and energy, making it harder to keep those bonds strong.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "6. Navigating the loss",
      },
      "Friendship breakups come in abundance in our twenties because up until this point, you and your friends are typically moving at the same pace, through the same situations and experiences. Same routines, same milestones, same days off at school, the same way to measure your success and progress. In school, everything is mapped out for you.",
      "Now, we’re suddenly all at different stages, on different paths. Sometimes you realise people represent a past phase of your life, and that’s okay. Friends come in seasons or multiple seasons where your energies match.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              // href: 'https://docs.google.com/document/d/1-fZIG1cPerC-v5C2JenTiTpz1OqZlWlRSO2GErUIgDo/edit#heading=h.p5c5w1p70no0'
            },
            text: "Navigating Your Quarter-Life Crisis: A Comprehensive Guide",
          },
        },
      ],
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "7. Embracing quality over quantity",
      },
      "Think about having fewer friends is self-care. Maintaining a social life on a purely digital level alone can be exhausting. How can we manage a workout plan, side hustle, relationship, and full-time job and be on constant call for our friends' WhatsApp messages?",
      "Focus more on having deeper connections with those you really care about. It’s freeing to have smaller circles of friends because we can give each person proper attention and have enough resources to look after ourselves.",
      "According to British psychologist Robin Dunbar, the average person should aim for just five close friends and a maximum of 150 social connections at any given time. Dunbar believes, “the more friends you have, the shallower those connections tend to be.” By having fewer friends, you increase your chances of developing deep, meaningful, and enduring relationships.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "8. Prioritising yourself",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-7.png"
            ),
          },
          component: {
            maxWidth: "712",
          },
        },
      },
      "Because at the end of the day, in this lifetime, you are all you’ve got. We tend to notice who our real friends are based on how they support you in times of stress.",
      "I’ve come to realise that you don’t have to be up in living in eachothers’ pockets for a friendship to feel meaningful or actualised. There’s something to be said about seeing certain people once every two months or so: you have stuff to talk about, to catch each other up on, to enrich each other with the colours of your unique lives until next time.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "9. Embracing Change",
      },
      "Navigating friendships in your twenties can feel like an overwhelming balancing act, far more complicated than the easy bonds of our younger years. It’s like walking a tightrope as life pulls you in different directions, making it harder to stay close to those you were once joined at the hip with.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-8.png"
            ),
          },
          component: {
            maxWidth: "580",
          },
        },
      },
      "But there's a unique beauty in embracing the new rhythms of life and choosing self-preservation over spreading yourself too thin. And when it comes to friendship, I've learned to trust myself to hold on to the people who are meant to stay. I believe that even if we venture to opposite ends of the earth, we'll still find a way to walk the path of life together if we're truly meant to.",
      "After all, change is a natural, inevitable, beautiful part of life. Those meant to journey with you will stay, and those who don't? Well, it's goodbye and thank you for being a memorable chapter in your story.",
      "I’m beginning to accept the reality that even if I wanted the kind of entangled friendships I had in my teens and early twenties, I don’t think it would be possible, because I’m different now. I like leaving parties before the sun comes up. I like waking up in my own bed, surrounded by my own things. I rely on my own advice rather than constantly turning to other people. I don’t just hang out for the sake of it now, either. My time is more precious than ever, so I spend it with people because I love them, and I want to.",
      "And that’s beautiful in itself, because there’s something more intentional about friendships once you reach your mid-20s. Granted, they’re harder to maintain, but you actively choose to maintain them, because your lives are richer and more enjoyable as a result. So they’re worth it.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/fb/tn-9.png"
            ),
          },
          component: {
            maxWidth: "900",
          },
        },
      },
    ],
  },
  {
    id: "",
    blog_type_id: 2,
    src: {
      thumbnail: helper.setFileUrl(
        "st-ac",
        "/hannah-clayton/images/thumbnail/th-13.jpeg"
      ),
    },
    title: "Surviving the Quarter Life Crisis: A Complete Guide",
    tag: ["Experiential"],
    meta: {
      description:
        "My complete guide offers practical advice, emotional support, and proven strategies to navigate and overcome your quarter life crisis. Discover how to manage symptoms, find solutions, and thrive during this challenging phase.",
      keyword: [
        "Quarter Life Crisis",
        "Dealing with Quarter Life Crisis",
        "Quarter Life Crisis Advice",
        "Quarter Life Crisis Symptoms",
      ],
    },
    created_date: "2024-9-21",
    created_by: "Hannah",
    role: "Founder of Twenny Smthn",
    contents: [
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "Introduction",
      },
      "Ahhh - our 20s, dubbed the new quarter life crisis. A decade of uncertainty. The years we’re supposed to figure everything out. But also be free-spirited and spontaneous. Curious. And yet grounded and responsible. Expected to settle down, but, of course, ‘now’s the time’ to take risks. Do things before we amass responsibility, like exploring the world or starting our dream business. But then we should have some stability, like climbing the corporate ladder. And we must maintain our social lives, otherwise who will we invite to our wedding when the day finally arrives? And this is the decade that we’ll always  look back on and wish to revisit for all the fun.",
      "I’m tired, ya know? Just from writing that.",
      "But also of being so focussed on where I need to be and on how many special, life-defining, core-memory experiences I’m having, that I’m missing the actual experiences themselves.",
      "Of feeling so dissociated from myself. From my life. As though I’m watching it pass me by. ",
      "Because for me, this period touted as the ‘best years of our lives’ has been more stressful than memorable. Tainted by intense soul-searching, stress, confusion, uncertainty, and feeling - well, lost. Cue the existential dread.",
      "A little saving grace here is: I know I’m not alone. There’s a whole community of us. So ask yourself this:",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value:
          "Am I having quarter life crisis symptoms, or is this just a bad, drawn out hangover?",
      },
      {
        type: "ol",
        component: {
          sheet: {
            maxWidth: "860",
          },
        },
        value: [
          [
            {
              customClass: "montserrat-700-normal",
              type: "span",
              value: "Feeling Lost",
            },
            ": Like, ",
            {
              customClass: "montserrat-400-italic",
              type: "span",
              value: "should I move to Bali and become a yoga instructor?",
            },
            " lost.",
          ],
          [
            {
              customClass: "montserrat-700-normal",
              type: "span",
              value: "Career Uncertainty",
            },
            ": Maybe it would have been less stressful to be a barista forever.",
          ],
          [
            {
              customClass: "montserrat-700-normal",
              type: "span",
              value: "Relationship Dramas",
            },
            ": Swipe left, swipe right, swipe me TF out of existence.",
          ],
          [
            {
              customClass: "montserrat-700-normal",
              type: "span",
              value: "Financial Freakouts",
            },
            ": Did I really spend £60 on avocado on toast this month?",
          ],
        ],
      },
      "Tick, tick, tick, tick? Congrats on joining the club.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/1.svg"
            ),
          },
          component: {
            maxWidth: "382",
          },
        },
      },
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "So why are our 20s so hard?",
      },
      "The ✨million dollar question✨. Here are my thoughts on the problem:",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "1. There's no roadmap.",
      },
      "Until about 18, life, for us all, is a set structure. A series of steps: school, and then more school, towards that big goal of college or University graduation. You’re following someone else’s rules. A parent. A teacher. A university tutor.",
      "Granted, you may be chronologically a quarter of the way through your life, but for the first quarter of that time, you couldn’t even feed or dress yourself.",
      "For the first half of that time, you’d hadn’t even started high school yet. You probably didn’t start earning a proper salary until you were ¾ of a way through that time.",
      "And then you reach 20, and boom. See, society says that now it’s time to decide what you want to do for the rest of your life. Now’s the time to fit into some preconceived mould of life.",
      "Yet you’re only just starting in your career. You’ve barely had a serious relationship. You’re just getting used to seeing some money in your bank account. Nothing has prepared you for climbing over that big wall and being faced with a wide, sparse, empty overgrown field with no path and no map.",
      "And then:",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value:
          "2. All of a sudden your paths of structure - all you’ve ever known - start to splinter.",
      },
      "Entering into our 20s means entering into the real world. Goodbye rules and routines that you’ve habitually followed since exiting the womb. You’re out of the trap that vacuumed any sense of individualism out of you, the one that painted you and all your class mates as ‘students with a goal of passing their GCSEs’.",
      "Now, all your friends are scattering in different directions. Hanging out with different people. Doing different jobs. Working on different timelines. Living different lifestyles.",
      "One of your long-time pals who lives around the corner is jetting off to eat daily Pad Thai in the heat of a South East Asia summer. Another from your social circle tied the knot last year and now she has a baby on the way. Your other mate is studying for their postgraduate masters degree in law, while your neighbour is starting their own business selling hand-sewn coasters on Shopify.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              to: "/blog/detail/2",
              targetBlank: true,
            },
            text: "Grieving a Friendship Breakup For The First Time & How to Recover",
          },
        },
      ],
      "What was once your North Star reference point for life has completely gone out of the window. Suddenly, you’re in no man’s land. You don’t know what you’re supposed to be doing. Or when or how or where you should be doing it.",
      "And the rest of the world? Well, you can see that, too. Social media opens you up to a portal where you can have your eyes on the entire world and how they’re doing life, all in a single click.",
      [
        "Christ alive, no wonder we’re finding ourselves in such a relentless epidemic of comparison. You literally have an unlimited pocket of access to everything that’s going to make you feel bad about yourself and inferior to those around you. Because the way we absorb social media means that we don’t see the dark patches of people’s lives: their struggles, their down days… we just see the shiny, happy, rose-tinted glasses version of them. Or what I like to call, the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "bullshit",
        },
        " version.",
      ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/2.svg"
            ),
          },
          component: {
            maxWidth: "420",
          },
        },
      },
      [
        "Because the only comparison we’re doing is ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "upward social comparison",
        },
        " (meaning we compare ourselves only to those who we perceive to be doing better than us). And I don’t know about you, but I know I find the times I’m most miserable is when I’m spending too much time doom-scrolling on Instagram.",
      ],
      "Remember: That app is bursting at the seams with false pretences. Don’t let your 80 year old be unhappy with you for stressing about being old or behind.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/3.png"
            ),
          },
          component: {
            maxWidth: "470",
          },
        },
      },
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              // href: 'https://docs.google.com/document/d/1i2oT8IFT4uvcGQeItIbA8F-_u3VPVEic-q8XXnVtktM/edit'
            },
            text: "Comparison - The Happiness Killer",
          },
        },
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "3. Expectation.",
      },
      [
        "There’s no set way to do it [“it” being that lil thing of yours called ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "life",
        },
        "]. Yet we have this socially constructed ghost list of expectations that characterise how we should be living our lives.",
      ],
      "Like:",
      {
        type: "ul",
        component: {
          sheet: {
            maxWidth: "800",
          },
        },
        value: [
          "Have you met the love of your life before turning 30? No? Well what are you doing? Get a move on!",
          "You’re still living at home with your parents after age 24? Why haven’t you bought your own place yet?",
          "Do you have a big group of friends? Not so much? You should be making more time to socialise.",
          "What’s your 5-year plan? Haven’t got one? Grow up and figure your life out before it’s too late!",
        ],
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/4.png"
            ),
          },
          component: {
            maxWidth: "410",
          },
        },
      },
      [
        "Sound familiar? It’s because it ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "is",
        },
        ".  We’re in a decade of our lives where we don’t really know what we’re doing and yet people are always asking us these big, existential questions when we just don’t have the answers. In fact, we’re not ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "qualified",
        },
        "  to make those big decisions yet. Certainly not all at once. Our brain",
        {
          type: "button",
          value: {
            src: {
              href: "https://www.sciencefocus.com/comment/brain-myth-25-development",
            },
            text: "doesn’t develop fully until we’re 25",
          },
        },
        ", and our personalities aren’t fully developed until years later.",
      ],
      "So chill out on the dreary, draining, daunting, deep thinking. Yes, it does us no harm to have a general plan or idea about where we’d like to go in life. No, nothing’s set in stone and you don’t have to have it all figured out. I never want to gf.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "4. The paradox of choice",
      },
      "Have you ever spent 20 mins scrolling tirelessly through movie genres, trying to pick something new to watch on Netflix, just to whack your comfort show (the one you’ve seen a thousand times) on? Trust me: if I had £5 for every time I just navigated straight to Friends, I wouldn’t be posting this blog.",
      [
        "Well, another curse of getting older (I said old-",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "er",
        },
        ", not old)  is feeling more free thanks to a new-found, adult-infused independence and, of course, money, money, money. But with every choice you make it feels like a door closes and your life is restricted. The whole ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "you can’t do it all",
        },
        " shebang.",
      ],
      [
        "Don’t get me wrong, having the freedom to choose is a ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "privilege",
        },
        ".  Choice is a blessing we should hold gratitude for. But actually, studies have shown that ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "too much choice",
        },
        " can actually paralyse us through anxiety and decision fatigue.",
      ],
      "It all began with jam. Back in 2000, psychologists Sheena Iyengar and Mark Lepper published a  study that followed shoppers at an upscale food market. They set up display tables in an upscale grocery store that sold either a limited (6) or an extensive (24) selection of different flavours of jam. They measured customers’ initial attraction to the display tables, as well as subsequent purchasing behaviour.",
      [
        "After performing significance tests, they found that although customers were initially more attracted to the extensive choice table, purchases at the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "limited selection",
        },
        " booth were 27% than those at the extensive selection table.",
      ],
      "That’s because too much choice (‘choice overload’)  actually leads to paralysis and dissatisfaction. Check out (and don’t look to closely at) my little sketch demonstration here:",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/5.png"
            ),
          },
        },
      },
      "Makes sense, right? It’s certainly how I’ve seen my twenties:",
      {
        type: "ul",
        component: {
          sheet: {
            maxWidth: "800",
          },
        },
        value: [
          "Should I be a boss bitch girly and climb that corporate ladder?",
          "Do I take the leap to start my own business or stay in a stable career?",
          "Do I save and buy a house or buy a one way ticket to Australia?",
          "Should I spend every waking minute of my spare time reading books and drafting my first novel?",
        ],
      },
      "There’s no rubric for almost anything I do. And while this unrestrained freedom is exciting for some, I find myself sitting still, unable to move.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "How to not lose your mind in your 20s",
      },
      [
        "Here’s a freeing realisation I’ve had over the past few months: it’s actually ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "impossible",
        },
        " to make the wrong decision. Annnnnnnd breathe, right?",
      ],
      "Each choice is a portal. So don’t be terrified to make that big move. Our twenties are the perfect time for experimentation and taking risks.",
      [
        "There’s no such thing as a mistake. No right or wrong. Or good or bad. Only you can take inner freedom ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "away",
        },
        " from yourself. And only you can ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "give",
        },
        " it to yourself.",
      ],
      "Untether yourself from your mind by taking a moment to remember that we’re living on a spinning planet; floating in an empty space in a universe that goes on forever. If you have to be here, at least be happy and enjoy the experience. You’re going to die anyway. You’ll gain nothing by being bothered by life’s events. It doesn’t change the world; you just suffer. There’s always going to be something that can bother you, if you let it.",
      "Spending your twenties worrying about whether you’re ahead enough is a silly way to spend your time. Here’s what you should be doing.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "1. Being selfish.",
      },
      "Stop caring about what other people think. Stop spending time with people because you feel like you have to. Do what you need to do. Set boundaries with your time, and with people. The most important relationship you have in your life is with yourself. It’s only you you’re left with",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              to: "/blog/detail/1",
              targetBlank: true,
            },
            text: "Happy Alone: 10 ways to Fall in Love with your Own Company",
          },
        },
      ],
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "2. ",
        },
        {
          type: "button",
          value: {
            src: {
              href: "https://www.tiktok.com/@haleyhoffmansmith/video/7337102772296273194?_r=1&_t=8laSj02o4ob",
            },
            text: "Being present in the moment.",
          },
        },
      ],
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "1. Being present in the moment.",
      },
      "Think about this perspective: It’s highly likely that this is the last time that your life will look the way it does right now. And one day, a future version of yourself, who has everything you ever wanted, will actually reflect and miss something about where you are right now.",
      [
        "Even if you can’t figure out what ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "that",
        },
        "  could be right at this moment. Let that thought, not getting never get this time back, wallop you into gratitude. Stay there for a while. Get cosy.  Romanticise the little things.",
      ],
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/d/1S-XwoIyZG-_OGGL8oP0Dem6TjRsNJ6Zcz8Vhys0E-7Q/edit'
      //       },
      //       text: 'How to romanticise your life.'
      //     }
      //   }
      // ],
      "And treat every single bit of it like it's the last time I’ll ever get to do it. Accept what life is asking of you in this season instead of trying to force things along faster. Or run away to that holiday you have booked at the end of the year.",
      "See perceived shortcomings as lessons. Remember that if it’s happening in your life, it’s happening for a reason. Trust the timing of your life. Trust that you will figure it out. Because you will.",
      "You may know nothing about tomorrow, or next week. But that could all change in an instant. Be at peace with all that you can know: the present. The now. So the more you can be here now, the more you can plant seeds for the future, rather than be mad at the soil for not sprouting new flowers quickly enough.",
      "This outlook is how I enjoy life’s beautiful moments every day. And that’s what life’s all about, isn’t it?",
      "I’ll miss my parents when I don’t live with them. I’ll miss the ability to be completely unbothered, and selfish with my time.",
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/u/0/d/1EQqDS0Y4c271uqXkRxhNfIfvUjaiIxfEovBS4mdlpzc/edit'
      //       },
      //       text: 'Living at home with your parents in your 20s.'
      //     }
      //   }
      // ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/6.png"
            ),
          },
          component: {
            maxWidth: "510",
          },
        },
      },
      "When you start focusing on the life you want, rather than what you think will get you there, then, my friend, you’re on the right track.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "3. Being optimistic about where you are.",
      },
      [
        "I’ve realised that It’s actually a ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "blessing",
        },
        " to be in a space of confusion. Because that means you’re finally in the unknown, a space you’ve never been in before.",
      ],
      "If you can see very clearly the next few weeks, months, years of your life laid out in front of you like a well-oiled plan, you won’t be adventuring into the unknown, where more is possible for you.",
      [
        "And while confusion can feel really difficult and hard and heavy, for me it’s far better than knowing exactly what tomorrow looks like. Confusion means that you’re growing. Even if you’re not quite sure of what that is yet. Confusion means really good stuff is on the way. A brand new chapter. More than you’ve ever had. ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Better",
        },
        " than you’ve ever had.",
      ],
      "Every time there's an issue you want to change, think of it optimistically. According to Dr. Tali Sharot, this is the 'Optimism Bias': the belief that the future will be better than our current situation. By expecting positive outcomes, we're more likely to take proactive steps towards our goals and tackle challenges with a can-do attitude.",
      "We see obstacles as temporary hurdles that can be overcome. This mindset reduces stress and encourages us to take risks and embrace new opportunities, knowing the potential rewards outweigh possible failures.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/7.png"
            ),
          },
          component: {
            maxWidth: "420",
          },
        },
      },
      "Because it’s better to feel stuck and realise that you need a change than to be living in the same state over and over again without being able to recognise you need something different.",
      "Realising that you're stuck is actually a huge win in your twenties. It's like your inner self is waving a big red flag saying, \"Hey, something's gotta change!\".",
      "It's your brain’s way of nudging you to shake things up: revisit an old hobby, try something new, switch up your routine. It's a reminder that you're capable of more, and it's time to tap into that potential. Complacency is easy, but discomfort leads to growth and wonderful moments that kickstart your personal evolution and open new doors.",
      "Being lost is normal, like brushing your teeth or falling asleep at night. It's only a problem if you believe it shouldn't happen. Being lost is a blessing, an invitation to become present to where you are. Uncertainty and the unknown are the playground of infinite potential.",
      {
        customClass: "montserrat-600-normal text-h6 text-sm-h5 text-dark",
        type: "h3",
        value: "4. Rationalising your problems.",
      },
      "I always gain perspective about how teeny-tiny my problems are by looking up at the starry night sky. My eyes can see a few thousand stars. But in actual fact, there are hundreds of billions of stars in the Milky Way galaxy alone. Which looks like a single star to the rest of the universe.",
      "I’m just a little human, standing in a vast world. I shouldn’t worry about FOMO. Whether I should be travelling. Or at Glastonbury. Or getting engaged. Or buying a house. I should be happy to be living. The only way to find inner peace is to stop thinking about yourself.",
      "The biggest thing you can do for yourself and for your sanity, is being unbothered. Prioritise being chill, being triggered, relax yourself in situations that piss you off. It gives you your power back.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "You’re allowed to try and fail",
        },
        ". There’s no limit to how many jobs or lifestyles or relationships or homes you can try out. Your 20s is a dressing room where you can try on many different things and find the best fit in that moment. The best part? You can change your mind at any time.",
      ],
      "Even more good news is you aren't (and won't ever be) going backwards. You'll never undo your progress or unlearn the good things that you take from experiences",
      "Everything, even a failure, a mistake, a wrong decision, is progress. And if you don't succeed immediately, you learn. And if necessary, you learn the same lesson again. And maybe even again.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Read more: ",
        },
        {
          type: "button",
          value: {
            src: {
              // href: 'https://docs.google.com/document/d/1WL1BqA-yAMzztI2fTnrNmNNjEtcCgEtE0hcLZZ9-9e8/edit'
            },
            text: "Corporate Leadership at 25 years old: Lessons from a Middle Manager",
          },
        },
      ],
      "Whichever it is, however much it hurts, you're moving forward.",
      {
        customClass: "dm-serif-display-regular text-h4",
        type: "h4",
        value: "Wrapping up",
      },
      "Billy Joel sang ‘slow down, you’re doing fine, you can’t be everything you wanna be before your time’.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/qlc/8.png"
            ),
          },
          component: {
            maxWidth: "460",
          },
        },
      },
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/d/1JWGMiOXv6CEq-tHpVCxd406-6ir8z3iAt33vyAoQ0eg/edit'
      //       },
      //       text: 'The Sound-track of your Twenties'
      //     }
      //   }
      // ],
      "And it’s true. Life is so subtle, sometimes you don't even realise when you've stumbled through a door you once prayed would open for you.",
      "New York is three hours ahead of California, but that doesn’t mean California is slow. Some people graduate at the age of 22 but don’t secure a job in their desired industry until 25. Some are CEOs at 25 but die at 50. Some start their first business at 50 and live until 90. Some are single, others are married with children. Obama retired at 55, Trump started at 70. Everyone in this world works in their own time zone.",
      "Morgan Freeman didn’t get his big break until he was 52. Vera Wang didn’t design her first dress until she was 40. Colonel Sanders founded KFC at 65. J.K. Rowling was rejected by 12 publishers before Harry Potter became a worldwide phenomenon. People around you might seem to be ahead or behind, but everyone is running their own race. Don’t envy them. Don’t judge them. They are in their time zone, and you are in yours. Life is about waiting for the right moment to act; so relax. You’re not late, you’re not early.",
      "You’re right on time.",
    ],
  },
  {
    id: "",
    blog_type_id: 3,
    src: {
      thumbnail: helper.setFileUrl(
        "st-ac",
        "/hannah-clayton/images/thumbnail/th-14.jpeg"
      ),
    },
    component: {
      img: {
        style: {
          objectPosition: "50% 16%",
        },
      },
    },
    title: "Young Leadership: How to Master Being a Gen Z Manager",
    tag: ["Informational", "Experiential"],
    target_audience: [
      "Young professionals",
      "Gen Z",
      "young managers",
      "marketing manager",
    ],
    meta: {
      keyword: [
        "Gen Z Manager",
        "Young Leadership",
        "Young Manager",
        "Marketing Manager",
        "Leadership in Your 20s",
        "First-Time Manager Tips",
        "Gen Z Career",
        " Leadership Development",
        "Modern Leadership",
        " New Leadership",
        " New Manager",
        "Marketing Management",
        "Middle Management",
      ],
      description:
        "Discover how to lead and empower your team effectively as a Gen Z Manager. Learn essential management skills, the right mindset, and techniques to excel in young leadership from someone who's been there, done that, and nailed it in her 20s.",
    },
    created_date: "2024-10-15",
    created_by: "Hannah",
    role: "Founder of Twenny Smthn",
    contents: [
      "Just over a year ago I was promoted from a naive lil Content Executive to full-blown Marketing Manager, armed with zero leadership experience and a team of 6 staring at me like I knew exactly what I was doing. (Spoiler alert: I didn’t have a Scooby Dooby Doo).",
      "Instead, I felt like I’d dove headfirst into the deepest of ends - with everyone watching to see if I would swim or sink.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/1.png"
            ),
          },
        },
      },
      "Let me tell you: going from being an individual contributor to managing a team was a huuuuuuuuuuuuuuuge, Grand Canyon-sized step. But once dust settled, I came to realise that every single day since (including the little highs, the little lows, and everything in between) was an opportunity for me to learn, adapt, and evolve in my career.",
      "So if you’ve just been handed those leadership reigns as a Gen Z and are feeling a lil’ overwhelmed, swamped, or downright out of your depth, check out the 14 lessons I learned throughout my rookie year at the helm as a Gen Z manager.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "1. Delegate delegate delegate.",
      },
      "There’s no way I’m starting by sugarcoating. The game totally changed when I took that management role. Suddenly, my days were less about ticking off my personal to-do list and more about how well we all scored as a team.",
      "I pushed myself to the edge of burnout: juggling my new leadership role on top of my usual tasks which was about as sustainable as a chocolate teapot. I felt a natural urge to oversee every detail and ensure every task was done just right. The team’s output was my output. And on top of that, I felt like the strategy was all on me.",
      [
        "Initially, like me, you might feel like you’re slacking. Not doing enough. Not getting through what’s expected of you because you're not managing your time well enough. But soon you’ll see that you’re not doing ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "less",
        },
        ", you’re doing ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "different",
        },
        ". And that’s a whole new level of productivity.",
      ],
      [
        "Delegation is ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "the",
        },
        " secret sauce. That’s because handing off tasks doesn’t just lighten your workload, it boosts your team’s confidence and lets everyone shine in their strengths.",
      ],
      [
        "Got a meeting? Delegate. Need a report? Delegate. Coffee? A step too far, perhaps (I’m a ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "humble bee",
        },
        ").",
      ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/2.png"
            ),
          },
        },
      },
      "Always try to focus on big-picture stuff while your team handles the smaller details. It’s leadership gold. It’s about striking a balance: being available for guidance without micromanaging by hovering over every move",
      "Set clear expectations, provide the necessary tools, and then step back and let the team shine.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: [
          "2. Having difficult conversations aren’t easy, but they ",
          {
            customClass: "fstyle-italic",
            type: "span",
            value: "are",
          },
          " necessary.",
        ],
      },
      "Unfortunately for us new managers, these talks are unavoidable and crucial. And we kind of signed up to them as soon as we accepted that juicy promotion. Not so shiny now, huh?",
      "It’s down to you to make sure everyone’s pulling their weight. And if they’re not? It’s as much your problem as it is theirs. Addressing issues head-on, whether it’s poor performance, conflicts, or giving constructive feedback, is key to maintaining a healthy team dynamic.",
      [
        "And no, this part of management is never ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "fun",
        },
        ". I’ll never not get that anxiety-induced knot in my stomach before delivering any sort of bad news.",
      ],
      "But I learned to approach those conversations with empathy and a solution-oriented mindset. I never raised issues without having a solution in mind.",
      [
        "Be honest but supportive. Yes, it’s important to tell a team member why they’re going wrong. But true leadership comes to play when you can help them see ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "where",
        },
        " they can improve and how they can get there. It’s tough love, but it’s love nonetheless.",
      ],
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       text: 'How to be a better conversationalist'
      //     }
      //   }
      // ],
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "3. Be adaptable.",
      },
      [
        "My time as a middle marketing manager was working for a start-up, where being adaptable is ",
        {
          customClass: "text-decoration-underline",
          type: "span",
          value: "non-negotiable",
        },
        ". Period.",
      ],
      "Plans change, unexpected challenges pop up, priorities shift.",
      "Learn to roll with the punches and pivot when needed. Look at every situation with a glass half-full mindset. Try to reframe disruptions as opportunities.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/3.svg"
            ),
          },
        },
      },
      "Whether it’s adjusting strategies, learning new skills on the fly, or finding creative solutions to unforeseen problems, adaptability has been my saving grace. In marketing management, you’ll never stick rigidly to a plan. It can feel daunting at first, but once you learn to be open to change and ready to tackle whatever comes your way with a positive attitude, you’ve nailed it like a carpenter on caffeine.",
      "Remember: The faster you fail the faster you learn. I learned that even if I’m only about 50% sure if something can work, it's a good time to A/B test it. And again. And again. And again. And a– you get the gist.",
      "Embrace change, seek new perspectives, and learn continuously.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "4. You don’t need to know it all.",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/4.svg"
            ),
          },
        },
      },
      [
        "Early on, for some reason I was under the impression that I needed to be the encyclopaedia of marketing. But thinking you need to have all the answers is like believing you can drink the Irish Sea with a straw. Whether you’re diving in at 24 like I was, or have bagged years of experience at 40, being a master of all the skills it takes to form your team just isn’t ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "feasible",
        },
        ".",
      ],
      "And that’s why you build a squad of savvy specialists around you.",
      [
        {
          customClass: "font-weight-bold",
          type: "span",
          value: "Newsflash",
        },
        ":  you’re never going to have all the answers. Relying on your team for their expertise doesn’t undermine your leadership. It’s a ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "power move",
        },
        ".",
      ],
      "Ben Francis, founder and CEO of Gymshark emphasises the importance of assembling a team with diverse skills and expertise, similar to the Avengers, where each member contributes their unique strengths.",
      [
        "Accepting and actioning feedback from all angles (those above you and those below you) in middle management is the reason why you’re in the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "middle",
        },
        ". Take advantage of the different connections you deal with on a daily basis and always be open to learning from those around you.",
      ],
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/d/1Ce0aGhjdNSTyS6rTRiBuzDoAY8HyZFXzb76q-2M0w-w/edit'
      //       },
      //       text: 'How to overcome imposter syndrome'
      //     }
      //   }
      // ],
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "5. Don’t be afraid to be honest about your weaknesses.",
      },
      [
        "Pretending to be good at something you’re not is, like Pickled Pig’s Feet, a recipe for ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "disaster, darling",
        },
        ". Always be honest with yourself and always be honest with your team. Be clear about where your strengths lie and any areas you’re still trying to master.",
      ],
      [
        "Throughout my time as a first-time manager, I learned that authenticity transforms the energy around me. Trust me: there’s a strength in admitting your imperfections. It makes you more relatable and significantly strengthens the trust within your team. So, embrace your flaws openly. It’s not just refreshing. It’s powerful ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "af",
        },
        ".",
      ],
      "Don’t be scared to show vulnerabilities. It shows you’re human and people warm to that.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "6. The title alone doesn’t earn you respect.",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/5.svg"
            ),
          },
        },
      },
      "I hate to burst your bubble, but just because you’re a whiz at your job doesn’t mean you’ll be a born leader.",
      "That’s because modern leadership demands more than just skill. It requires empathy, vision, and the ability to connect with your team on a meaningful level to bring out the best in them.",
      "Be proactive: actively listen, champion their ideas, and genuinely invest in their growth and well-being. Respect is built through consistent, positive interactions where your team sees and values your commitment to their success and the company’s broader goals.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "7. Be a nice person.",
      },
      "We’ve all had those terrifyingly intimidating managers that give us the Sunday scaries.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/6.png"
            ),
          },
          component: {
            maxWidth: "435",
          },
        },
      },
      [
        "I knew I’d never be that person. They taught me not to, sure, but I genuinely haven’t got it ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "in",
        },
        " me. If I had feedback from a team member telling me I was unapproachable? The flames of failure would engulf me. I’d be devastated.",
      ],
      [
        "That’s why I always aimed to be down to earth — someone my team could talk to about ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "anything",
        },
        ".",
      ],
      "Find the sweet spot between stern and laid-back. I never let anyone walk all over me; I’m no doormat. But being flexible and understanding that your team has a life outside of work is the best way to get the best out of them.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "8. Every day’s a school day.",
      },
      'John F Kennedy said “leadership and learning are indispensable to each other".',
      "And like anything, being a good leader doesn’t happen overnight. You’ll face your fair share of mistakes. Mishaps. Missed opportunities. Misdirection. Miserable moments that make you want to cry and quit and never return to the working world again.",
      "One of the biggest lessons I absorbed as a young manager was the power of owning up to my mistakes. When you admit where you've gone wrong and show you can learn from these stumbles, you not only build your own credibility, you humanise yourself to your team.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/7.svg"
            ),
          },
          component: {
            maxWidth: "510",
          },
        },
      },
      "Set aside weekly time for reading and learning so you feel more confident in what’s required of you. There’s nothing wrong with being a sponge. Absorb allllllllll that goodness.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "9. Fight off negativity.",
      },
      [
        "That’s right. ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "Kick it to the curb",
        },
        ".",
      ],
      [
        "Believe me, I knew what people were thinking when I first started out: “She’s inexperienced. She can’t handle it.” I’ve had that sneaky lil’ voice taunting me from inside my own head: “You’re not up to this. You can’t do it”. Imposter syndrome is ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "real",
        },
        ".",
      ],
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/8.svg"
            ),
          },
        },
      },
      "It can feel like you’re paddling upstream without a paddle. Like you’re sludging through mud in stilettos.",
      [
        "Don’t let yourself get stuck. Learn to let that feeling of being a fraud ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "go",
        },
        ".",
      ],
      "Remember, you’ve been promoted to a middle manager role for a reason, and if it's your first time, give yourself some grace for being in a period of learning and growth.",
      "Always keep a positive outlook, even in the toughest of times. Cultivate optimism, learn from setbacks, keep moving forward. A true leader always spots the light at the end of the tunnel, especially when it's invisible to everyone else. That means it’s on you to help the team focus on solutions (not just problems), and keep that morale consistently higher than Snoop Dogg on a spaceship.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "10. Master the art of listening.",
      },
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/9.svg"
            ),
          },
          component: {
            maxWidth: "460",
          },
        },
      },
      "I’m a Libra and (in true Libra style) I’ll own it: I’m a bona fide chatterbox. The loudest voice in the room. So, imagine my surprise when I discovered the power of shutting up and just listening.",
      "Actively. With an open mind. No interruptions. Just pure, unadulterated listening.",
      "Focus on the speaker. Listen to understand rather than respond. Learn to pause before you respond. Practice empathy by welcoming diverse perspectives.",
      "When you create an environment where people feel confident to share their ideas and insights, that’s when the magic happens.",
      // [
      //   {
      //     customClass: 'font-weight-bold',
      //     type: 'span',
      //     value: 'Read more: '
      //   },
      //   {
      //     type: 'button',
      //     value: {
      //       src:{
      //         href: 'https://docs.google.com/document/d/1wwYLcL0BLxBRmljgladD3HwtEQ8CoA2tG1Q_ATMT8-0/edit'
      //       },
      //       text: 'How to become a better listener'
      //     }
      //   }
      // ],
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "11. Set boundaries.",
      },
      [
        "Be ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "friendly",
        },
        ",  but don’t ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "be",
        },
        " friends with people. It’s a fine line. And crossing that line can create complications when tough decisions need to be made - decisions that may not always sit well with everyone. Plus, appearing to have ‘favourites’ as a new manager never goes down well.",
      ],
      "There’ll be plenty of occasions where you’ll have to prioritise what’s best for the team or the project over what’s popular, and this can disappoint people who view you too personally. So always keep that professional distance to keep interactions clear and expectations straightforward.",
      "Communicate limits clearly and assertively enforce them. Remember, you’re the boss.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "12. Empower and protect.",
      },
      "In the wonderful (honest), rewarding (I mean it) world of middle management, always remember the golden rule:",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/10.svg"
            ),
          },
          component: {
            maxWidth: "425",
          },
        },
      },
      "You take responsibility for any mishaps.",
      "You own up to issues.",
      "No finger pointing. No scapegoating.",
      "Why? Because your team deserves a leader who’s got their back.",
      "Management is alllllll integrity, my friend.",
      {
        customClass: "dm-serif-display-regular text-h4 text-2p5_rem",
        type: "h2",
        value: "13. Be a leader, not a boss.",
      },
      "Managers have status, but leaders can make a true impact.",
      "Coach, don’t control. Guide, don’t command. Mentor, don’t micromanage.",
      "Praise publicly to build confidence and morale. Coach privately and constructively to protect dignity and encourage improvement. Balance confidence with humility.",
      "Create an environment where everyone feels safe to express themselves, share ideas, and seek support without fear of judgement. Ultimately, fostering a sense of comfort and security leads to optimal performance.",
      "The best leaders focus on:",
      {
        type: "ul",
        component: {
          sheet: {
            maxWidth: "800",
          },
        },
        value: [
          "Setting an example",
          "How they make people feel",
          "Bringing the best out of everyone",
        ],
      },
      "It’s as simple as that.",
      {
        type: "image",
        value: {
          src: {
            img: helper.setFileUrl(
              "st-ac",
              "/hannah-clayton/twenny-smthn/images/gz/11.svg"
            ),
          },
        },
      },
      {
        customClass: "dm-serif-display-regular text-h4",
        type: "h4",
        value: "Wrapping up",
      },
      [
        "When I think back on jobs and bosses I’ve had in the past - there’ve been the good, the bad and, oh boy, oh boy, the ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "ugly",
        },
        ". Believe me when I say I’ve pocketed more lessons on what ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "not",
        },
        "to do than I ever thought possible.",
      ],
      "Yup, even those misogynistic, tear-inducing corporate supervisors managed to unintentionally school me on the worst ways to coax the best out of people.",
      "And here I am. Little old me. Trying to bring the best out of people one day at a time. And doing a pretty decent job at it.",
      [
        "Remember, as a new manager, you’ll have good, bad, and ugly ",
        {
          customClass: "montserrat-400-italic",
          type: "span",
          value: "days",
        },
        ", too. Just ride the wave. Embrace every learning curve that comes your way. And remember that the way you behave, the way you treat people, is making a huge difference.",
      ],
      "Be the manager you wish you had.",
      "Good luck!",
    ],
  },
];

blogs.forEach((v) => {
  v.id = encodeURIComponent(v.title.toLowerCase());
});
