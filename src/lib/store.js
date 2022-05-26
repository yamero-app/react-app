import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist((set) => ({
    user: {
      name: 'Chandrakant Khannade',
      username: '_Chandrakant19',
      bio: 'Technology and Art makes me Happy 🦄 🚀',
      role: 'Helper',
      pfp: '/images/Chandra.png',
      private: true
    },
    anon: {
      name: 'Anonymous',
      username: 'vengeance20',
      pfp: '/images/anon.png'
    },
    userQuestions: [
      {
        que: 'What exactly is your job? What do you love about it?',
        ans: 'My name is Praneet Mehta, I am a Chief Engineer in Merchant navy. I sail on huge crude oil tankers throughout the world. I am responsible for the entire machinery inside the engine room of a ship. My job is unlike any other regular 9 - 5 job. No other day is the same onboard a ship, every day is filled with new challenges and problems. The main task is to solve the problem with limited resources and manpower in the middle of the high seas.'
      },
      {
        que: "What're the most eye opening lines you have read in a novel?",
        ans: 'In his award winning book, Guns, Germs and Steel, anthropologist and biologist Jared Diamond points out simple fact: different continents have different shapes. Everybody knows about it and it is obvious, what so different about it? But it has great impact on human behaviour. The primary axis for North America, South America and Africa runs from North to South. These continents are tall and thin around the axis. But look at Europe, Asia, Middle East. Most of the land stretch is across East-West. According to biologist Diamond this difference in shape played a major role in the spread of agriculture over the centuries. When agriculture began to expand farmers had easier time expanding along east-west routes than along the north -south ones. This is due to the fact that locations along the same lattitude generally share similar climates, rainfalls, amount of sunlight and changes in season. This facts allowed the farmers of Asia, Europe to domesticate a few crops and grow them along the entire stretch of land from France to China.'
      },
      {
        que: "What is the name of Elon's first car which he bought for himself?",
        ans: "How Elon Musk's car collection has evolved over the years, from the million-dollar McLaren F1 he destroyed to a James Bond movie prop Lotus AVERY HARTMANSJUL 18, 2020, 04:10 IST How Elon Musk's car collection has evolved over the years, from the million-dollar McLaren F1 he destroyed to a James Bond movie prop Lotus Tesla CEO Elon Musk.Maurizio Pesce Tesla CEO Elon Musk has had a lot of different cars over the years. His first vehicle was a 1978 BMW 320i — he paid only $1,400 for it. At one point, a McLaren F1 was his daily driver, but he totaled it on Sand Hill Road in Silicon Valley. More recently, he's been driving Tesla cars, like Model S and the Cybertruck. He even sent his Tesla Roadster into space. Elon Musk has had quite the car collection over the years. Some got totaled, others inspired certain design elements in the cars Tesla makes today. Either way, each says a little bit about what Musk looks for in a car. These days, Musk is usually seen cruising around in a Tesla Model S — unless, of course, he takes the upcoming Tesla Cybertruck out for a spin. Here's a closer look at Musk's car collection over the years."
      }
    ],
    feedQuestions: [
      {
        que: 'What is wrong with our society today?',
        ans: 'A few days back I was travelling with Indian Railways from Mumbai to Jodhpur. When my train reached Surat, a youthful couple boarded the train with 20 luggage bags in 3AC coach.'
      },
      {
        que: 'What is the most important lesson in life?',
        ans: "One of Brazil's richest and most powerful men, Chiquinho Scarpa stunned the world when he announced that he was burying his million-dollar Bentley so that he could lead his later life in style."
      },
      {
        que: 'What is the coolest obscure historical fact you know?',
        ans: 'in India were not given public office/responsibility upon their return to England. The logic was that they ruled a slave nation, which must have made a difference in their attitude and behavior. If they are given such a responsibility here, he will treat free British citizens in the same way. To understand this, read the sentence given below. A British woman whose husband was a civil service officer in Pakistan and India during British rule. The woman spent many years of her life in different parts of India. On his return she wrote a beautiful book based on her memoirs.'
      },
      {
        que: 'What are some of the best moments of humanity?',
        ans: 'He was quarantined after getting infected by COVID-19. The reason he got infected by COVID-19 is, he removed his PPE (Personal Protective Equipment) kit to put a ventilator on an extremely critical COVID-19 patient to prevent a cardiac arrest. Dr. Zahid had to remove his PPE (goggles and face-shield) to re-intubate the patient on the way to the hospital’s trauma center in an ambulance. When the transfer was happening, he realized that the patient’s tube was mal-positioned and that without immediate intervention, the patient would go into cardiac arrest. In a dim-lit ambulance, working with PPE wasn’t a viable option for him so he quickly removed the face-shield and goggles to perform the procedure. He immediately reported the breach in PPE and officials advised him to proceed to quarantine.'
      }
    ],
    setUserQuestions: (userQuestions) => set({ userQuestions }),
    setFeedQuestions: (feedQuestions) => set({ feedQuestions })
  }))
);
