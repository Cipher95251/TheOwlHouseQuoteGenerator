const quotes = [
  //1
  {text:"“Because us weirdos have to stick together. And nobody should be punished for who they are!” - Luz Noceda"},
  {text:"“A real man never takes accountability!” - Beefy Bob"},
  {text:"“You're back! I didn't miss you at all!” - King Clawthorne"},
  {text:"“All I know is, you taught me, and I turned out just fine!” - Hooty"},
  {text:"“I will not fall prey to your childish games… Meh! Meh!” - Lilith Clawthorne"},
  {text:"“I will be haunted by my actions forever, hoot hoot!” - Hooty"},
  {text:"“But then how pathetic are you, that you can't best me at my worst!” - Eda Clawthorne"},
  {text:"“She can be so stupid, which I love… I mean hate!” - Amity Blight"},
  {text:"“I've never actually broken any of your stupid laws! In front of you!” - Eda Clawthorne"},
  {text:"“How about this black shadow box that reflects only sadness?” - Eda Clawthorne"},
  //10
  {text:"“Oh, Crikey.” - Luz Noceda"},
  {text:"“Long story short, this is my grave. Want me to make you one too?” - Hunter"},
  {text:"“Now I'm only scarred emotionally.” - Viney"},
  {text:"“Wow, I failed you as a principal.” - Hieronymus Bump"},
  {text:"“Bold move, sister.” - Edric Blight"},
  {text:"“On a team with you? Running around in cute uniforms? Sweating? I gotta go!” - Amity Blight"},
  {text:"“You know I hate these things. Talking to people. Waving to people. People.” - Raine Whispers"},
  {text:"“Who dares intrude upon I, the King of Demons?!” - King Clawthorne"},
  {text:"“Soon, Mr. Ducky, we shall drink the fear of those who mocked us.” - King Clawthorne"},
  {text:"“Let's see what kind of witch you are.” - Amity Blight"},
  //20
  {text:"“I'm not just a witch. I'm a criminal mastermind!” - Luz Noceda"},
  {text:"“I'm not cute! I'm evil and bloodthirsty!” - King Clawthorne"},
  {text:"“You're not my mom! You're a bird lady with no sense of boundaries or personal space!” - Luz Noceda"},
  {text:"“I don't need friends. They disappoint me.” - Amity Blight"},
  {text:"“Don't worry about it. It's just a curse. Curses are like onions. They have layers.” - Eda Clawthorne"},
  {text:"“You're not a side character in someone else's story. You're the hero of your own.” - Luz Noceda"},
  {text:"“I'm sorry for being so hard on you. It's just… you remind me of myself when I was your age.” - Lilith Clawthorne"},
  {text:"“You're the most powerful witch on the Boiling Isles. And the most wanted criminal. And the most fun person I've ever met.” - Luz Noceda"},
  {text:"“You're not just some human. You're my friend.” - King Clawthorne"},
  {text:"“You may have outsmarted me, but I outsmarted your outsmarting!” - King Clawthorne"},
  //30
  {text:"“I don't care what anyone thinks of me. Except you. Please don't hate me.” - Amity Blight"},
  {text:"“You can't tell me what to do! You're not my real dad! You're barely even my fake dad!” - King Clawthorne"},
  {text:"“You can't keep avoiding your problems forever, Eda. Eventually they'll catch up to you.” - Lilith Clawthorne"},
  {text:"“You can't just run away from your problems… unless they're really big and scary, then maybe you should.” - King Clawthorne"},
  {text:"“You think I'm adorable? Well, you're not wrong.” - King Clawthorne"},
  {text:"“You may have won this round, but mark my words: one day, I will destroy you all! And then we'll see who's adorable!” - King Clawthorne"},
  {text:"“I don't need magic to have fun. All I need is this juice box and my imagination.” - Luz Noceda"},
  {text:"“You're amazing just the way you are. Even if that way is very, very weird.” - Gus Porter"},
  {text:"“You can do anything if you just believe in yourself… and also use magic.” - Eda Clawthorne"},
  {text: "“You're not a monster. You're a witch. And a pretty great one at that.” - Luz Noceda"},
  //40
  {text:"“You're not a bad person, Lilith. You just made a bad choice.” - Eda Clawthorne"},
  {text:"“You're not my rival. You're my friend.” - Luz Noceda"},
  {text:"“You're not a sidekick. You're a king.” - Luz Noceda"},
  {text:"“You're not a nerd. You're a genius.” - Willow Park"},
  {text:"“You're not alone. You have us.” - Eda Clawthorne"},
  {text:"“I'm not afraid of you. I'm afraid of losing you.” - Amity Blight"},
  {text:"“I'm not sorry for what I did. I'm sorry for what I didn't do.” - Luz Noceda"},
  {text:"“I'm not weak. I'm strong. Strong enough to protect the ones I love.” - Luz Noceda"},
  {text:"“I'm not giving up on you. I'm giving you a chance.” - Eda Clawthorne"},
  {text:"“I'm not just a human. I'm a witch. And your apprentice.” - Luz Noceda"},
  //50
];

// img 1 https://news.otakukart.com/wp-content/uploads/2020/08/The-Owl-House.jpg
// img 3 https://i.pinimg.com/originals/7d/0d/49/7d0d49f0779a37c1b72df28ad20f5c17.jpg
// img 2 https://wallpaperboat.com/wp-content/uploads/2020/11/24/61589/the-owl-house-07.jpg

const backgrounds = [
  "https://news.otakukart.com/wp-content/uploads/2020/08/The-Owl-House.jpg",
  "https://i.pinimg.com/originals/7d/0d/49/7d0d49f0779a37c1b72df28ad20f5c17.jpg",
  "https://wallpaperboat.com/wp-content/uploads/2020/11/24/61589/the-owl-house-07.jpg",
  "https://i.pinimg.com/originals/6e/ce/25/6ece2551d62293d71da28d6d22ff77e3.jpg",
  "https://cdni.fancaps.net/file/fancaps-tvimages/2357182.jpg",
  //5
  "https://wallpapercave.com/wp/wp10516686.jpg",
  "https://preview.redd.it/luz-finally-finished-hexside-v0-vdyldu8i52ya1.jpg?width=1920&format=pjpg&auto=webp&s=23950afdf016ec898f5db10c900c5bbe696db8bd",
  "https://i.pinimg.com/originals/92/2e/18/922e185775e905a8d33f691a50f3ed08.jpg",
  "https://wallpaperboat.com/wp-content/uploads/2020/11/24/61589/the-owl-house-14.jpg",
  "https://i.pinimg.com/originals/2d/6b/0f/2d6b0fe747773e4a82d4b18b225d47af.png",
  //10
  "https://wallpapercave.com/wp/wp12206919.jpg",
  "https://pbs.twimg.com/media/FXHczH1XEAEL3ro?format=jpg&name=large",
  "https://pbs.twimg.com/media/FXHcyBTXwAEjz3U.jpg:large",
  "https://pbs.twimg.com/media/FmUjF59akAA_otb?format=jpg&name=large",
  "https://cdn.wallpapersafari.com/95/31/orNGXj.png",
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
  const colors = [
   "#2A224A"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function getRandomBackground() {
  const randomIndex = getRandomIndex(backgrounds.length);
  const imageUrl = `url(${backgrounds[randomIndex]})`;
  document.body.style.backgroundImage = imageUrl;
}

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function displayQuote() {
  const {text} = getRandomQuote();
  const randomColor = getRandomColor();
  
  document.body.style.backgroundColor = randomColor; // Set background color
  
  document.querySelector(".quote").textContent = text;
  getRandomBackground(); // Set the background image
}

document.getElementById("new-quote").addEventListener("click", displayQuote);

// Display a random quote and change colors when the page loads
displayQuote();